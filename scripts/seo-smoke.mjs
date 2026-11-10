#!/usr/bin/env node
/**
 * SEO smoke test: checks the essentials on every URL in the sitemap.
 *
 *   npm run build && npm run seo:smoke            # starts a local server itself
 *   BASE_URL=https://wealwaysrise.com npm run seo:smoke   # test a live/preview site
 *
 * Exit code 1 if any check fails. Warnings never fail the run.
 */
import { spawn } from "node:child_process";
import { setTimeout as sleep } from "node:timers/promises";

const SITE = "https://wealwaysrise.com";
const PORT = process.env.SMOKE_PORT || "3199";
const EXTERNAL = process.env.BASE_URL;
const BASE = (EXTERNAL || `http://localhost:${PORT}`).replace(/\/$/, "");

const failures = [];
const warnings = [];
const fail = (url, msg) => failures.push(`${url}  ${msg}`);
const warn = (url, msg) => warnings.push(`${url}  ${msg}`);

let server;
async function startServer() {
  server = spawn("npx", ["next", "start", "-p", PORT], { stdio: "ignore" });
  for (let i = 0; i < 40; i++) {
    try {
      const r = await fetch(`${BASE}/robots.txt`);
      if (r.ok) return;
    } catch {}
    await sleep(500);
  }
  throw new Error("Server did not start. Run `npm run build` first.");
}

const get = async (path) => {
  const res = await fetch(`${BASE}${path}`, { redirect: "manual" });
  return { status: res.status, text: await res.text() };
};

const count = (re, s) => (s.match(re) || []).length;
const strip = (s) => s.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<style[\s\S]*?<\/style>/g, "");
const visibleText = (html) =>
  strip(html).replace(/<[^>]+>/g, " ").replace(/&amp;/g, "&").replace(/&#x27;|&apos;/g, "'").replace(/\s+/g, " ");

function checkPage(path, html) {
  const label = path || "/";
  const titles = count(/<title>[^<]+<\/title>/g, html);
  if (titles !== 1) fail(label, `expected 1 <title>, found ${titles}`);
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || "";
  if (title.length > 75) warn(label, `title is ${title.length} characters`);

  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1];
  if (!desc) fail(label, "missing meta description");
  else if (desc.length > 175) warn(label, `meta description is ${desc.length} characters`);

  const canon = (html.match(/<link rel="canonical" href="([^"]*)"/) || [])[1];
  const expected = SITE + (path === "/" ? "" : path);
  if (!canon) fail(label, "missing canonical");
  else if (canon.replace(/\/$/, "") !== expected) fail(label, `canonical is ${canon}, expected ${expected}`);

  if (/<meta name="robots" content="[^"]*noindex/i.test(html)) fail(label, "page is noindex but is in the sitemap");

  const h1 = count(/<h1[\s>]/g, html);
  if (h1 !== 1) warn(label, `${h1} <h1> elements`);

  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (blocks.length === 0) fail(label, "no JSON-LD");
  const types = new Set();
  const questions = [];
  for (const [, raw] of blocks) {
    let data;
    try {
      data = JSON.parse(raw);
    } catch {
      fail(label, "invalid JSON-LD");
      continue;
    }
    for (const node of Array.isArray(data) ? data : [data]) {
      types.add(node["@type"]);
      if (node["@type"] === "FAQPage") for (const q of node.mainEntity || []) questions.push(q.name);
    }
  }
  if (!types.has("Organization")) fail(label, "no Organization JSON-LD");
  const text = visibleText(html);
  for (const q of questions) {
    if (!text.includes(q)) fail(label, `FAQPage question not visible on the page: "${q}"`);
  }
  return { types: [...types].join(","), faq: questions.length };
}

async function main() {
  if (!EXTERNAL) await startServer();
  console.log(`SEO smoke test against ${BASE}\n`);

  // robots, llms.txt
  const robots = await get("/robots.txt");
  if (robots.status !== 200) fail("/robots.txt", `status ${robots.status}`);
  else {
    if (!/Sitemap:\s*https:\/\/wealwaysrise\.com\/sitemap\.xml/i.test(robots.text)) fail("/robots.txt", "no Sitemap line");
    if (!/Disallow:\s*\/api\//i.test(robots.text)) warn("/robots.txt", "/api/ not disallowed");
  }
  const llms = await get("/llms.txt");
  if (llms.status !== 200) warn("/llms.txt", `status ${llms.status}`);

  // sitemap
  const sm = await get("/sitemap.xml");
  if (sm.status !== 200) {
    fail("/sitemap.xml", `status ${sm.status}`);
    return;
  }
  if (!sm.text.trim().startsWith("<?xml")) fail("/sitemap.xml", "does not start with an XML declaration");
  if (/<style|<html|<body/i.test(sm.text)) fail("/sitemap.xml", "contains HTML/CSS");
  const urls = [...sm.text.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (urls.length === 0) fail("/sitemap.xml", "no <loc> entries");
  for (const u of urls) {
    if (!u.startsWith(SITE)) fail("/sitemap.xml", `unexpected host in ${u}`);
  }
  if (new Set(urls).size !== urls.length) fail("/sitemap.xml", "duplicate URLs");
  for (const m of sm.text.matchAll(/<lastmod>([^<]+)<\/lastmod>/g)) {
    if (Number.isNaN(Date.parse(m[1]))) fail("/sitemap.xml", `invalid lastmod ${m[1]}`);
  }

  // pages
  const rows = [];
  for (const u of urls) {
    const path = new URL(u).pathname || "/";
    const { status, text } = await get(path);
    if (status !== 200) {
      fail(path, `status ${status}`);
      rows.push({ path, status, types: "", faq: 0 });
      continue;
    }
    rows.push({ path, status, ...checkPage(path, text) });
  }

  // 404 handling
  const nf = await get("/this-page-does-not-exist-xyz");
  if (nf.status !== 404) fail("/this-page-does-not-exist-xyz", `expected 404, got ${nf.status}`);

  console.log(`Checked ${rows.length} sitemap URLs`);
  console.log(`  with FAQPage: ${rows.filter((r) => r.faq > 0).length}`);
  console.log(`  with Article: ${rows.filter((r) => r.types.includes("Article")).length}`);
  console.log(`  with Service: ${rows.filter((r) => r.types.includes("Service")).length}\n`);
  if (warnings.length) console.log(`Warnings (${warnings.length}):\n  ${warnings.join("\n  ")}\n`);
  if (failures.length) console.log(`FAILURES (${failures.length}):\n  ${failures.join("\n  ")}\n`);
  else console.log("All checks passed.\n");
}

try {
  await main();
} catch (e) {
  failures.push(String(e.message || e));
  console.log(`FAILURES:\n  ${failures.join("\n  ")}`);
} finally {
  if (server) server.kill();
}
process.exit(failures.length ? 1 : 0);
