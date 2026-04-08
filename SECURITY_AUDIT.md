# Security Audit Report — RiseTech Information Ltd

**Date:** 2026-04-08  
**Auditor:** Automated DevSecOps Agent  
**Stack:** Next.js 16 (App Router) · React 19 · TypeScript · TailwindCSS v4 · Vercel  

---

## Executive Summary

The application is a static marketing/info site with no API routes, authentication, or database connections. The attack surface is small. The primary risks were missing HTTP security headers and CSP. No secrets were found in the codebase or repository history.

---

## 1. Vulnerabilities Found

### Critical

| # | Finding | Detail |
|---|---------|--------|
| — | None | No critical vulnerabilities found |

### High

| # | Finding | Detail |
|---|---------|--------|
| H-1 | Missing `Content-Security-Policy` header | No CSP configured, leaving the app open to XSS injection via third-party scripts or injected markup |
| H-2 | Missing `X-Frame-Options` header | Pages could be embedded in iframes (clickjacking risk) |

### Medium

| # | Finding | Detail |
|---|---------|--------|
| M-1 | Missing `Strict-Transport-Security` (HSTS) header | No HTTPS enforcement via HSTS, exposing downgrade attacks |
| M-2 | Missing `X-Content-Type-Options` header | Browser could MIME-sniff responses, enabling content injection |
| M-3 | Missing `Referrer-Policy` header | Full referrer URL could leak to external sites |
| M-4 | Missing `Permissions-Policy` header | Browser features (camera, mic, geolocation) unrestricted |

### Low

| # | Finding | Detail |
|---|---------|--------|
| L-1 | No explicit `object-src 'none'` or `base-uri 'self'` in CSP | Potential plugin/base-tag injection paths left open |
| L-2 | `.env` files not yet present but `.gitignore` covers them | Pattern `*.env*` already present — correct |

---

## 2. Fixes Implemented

### 2.1 Security Headers — `next.config.ts`

Added `headers()` configuration applying the following to all routes (`/(.*)`):

| Header | Value |
|--------|-------|
| `X-Frame-Options` | `DENY` |
| `X-Content-Type-Options` | `nosniff` |
| `Referrer-Policy` | `strict-origin-when-cross-origin` |
| `Permissions-Policy` | `camera=(), microphone=(), geolocation=()` |
| `Strict-Transport-Security` | `max-age=63072000; includeSubDomains; preload` |
| `Content-Security-Policy` | See §2.2 |

### 2.2 Content Security Policy

Strict CSP applied (no external origins required — site uses system fonts and no third-party scripts):

```
default-src 'self';
script-src 'self' 'unsafe-inline';
style-src 'self' 'unsafe-inline';
img-src 'self' data: https:;
connect-src 'self';
font-src 'self';
object-src 'none';
base-uri 'self';
form-action 'self';
frame-ancestors 'none';
upgrade-insecure-requests
```

> **Note:** `'unsafe-inline'` is required for `script-src` because Next.js App Router injects inline hydration scripts. The secure alternative is nonce-based CSP (see §4).

### 2.3 Middleware — `src/middleware.ts`

Created an Edge middleware that applies the same headers on every response, providing belt-and-suspenders coverage beyond `next.config.ts` (which may not cover middleware-handled routes in all configurations).

The middleware matcher excludes `_next/static`, `_next/image`, and `favicon.ico` to avoid overhead on static assets.

### 2.4 Environment & Secrets

- **No secrets, API keys, tokens, or credentials found** in the codebase or tracked files.
- `.gitignore` already includes `.env*` — all environment files are excluded from version control.
- No `NEXT_PUBLIC_` environment variables found (nothing is exposed to the client bundle).

---

## 3. Remaining Risks

| Risk | Severity | Notes |
|------|----------|-------|
| `script-src 'unsafe-inline'` in CSP | Medium | Necessary for Next.js hydration; mitigated by nonce-based CSP (see §4) |
| No rate limiting | Low | No API routes or forms currently; add when endpoints are introduced |
| No authentication | N/A | Not applicable for current static marketing site |
| No bot/CAPTCHA protection | Low | No public forms currently; add on contact form introduction |
| No Sentry/logging integration | Low | No error events to capture on a static site; add when dynamic routes exist |
| Dependabot not configured | Low | Only 3 runtime dependencies (next, react, react-dom); configure when project grows |

---

## 4. Recommended Improvements

### Priority 1 — Before Launch

- [ ] **Nonce-based CSP:** Replace `'unsafe-inline'` in `script-src` with a per-request cryptographic nonce injected via middleware. This is the production-grade XSS mitigation for Next.js App Router.
- [ ] **Vercel Environment Variable scoping:** Ensure any future secrets are scoped to `Production` only, not Preview or Development, in the Vercel dashboard.

### Priority 2 — When Forms / APIs Are Added

- [ ] **Rate limiting:** Add `@vercel/kv` + `upstash/ratelimit` or Vercel's built-in rate limiting to any API routes.
- [ ] **Input validation:** Use `zod` for all API route inputs.
- [ ] **Cloudflare Turnstile:** Add to any public-facing contact/registration forms.
- [ ] **HttpOnly + Secure cookies:** Enforce when sessions are introduced.

### Priority 3 — Operational

- [ ] **Sentry error monitoring:** Add `@sentry/nextjs` when API routes are introduced.
- [ ] **GitHub Dependabot:** Enable automated security PRs for dependency updates.
- [ ] **Branch protection:** Enable required PR reviews and status checks on `main`.
- [ ] **GitHub 2FA:** Enforce 2FA for all repository contributors.
- [ ] **Admin panel:** If an admin interface is added, protect it behind authentication and consider IP allowlisting.

---

## 5. Checklist Status

| # | Item | Status |
|---|------|--------|
| 1 | Environment & Secret Management | ✅ Clean — no secrets in codebase |
| 2 | Security Headers | ✅ Implemented |
| 3 | Content Security Policy | ✅ Implemented (baseline; nonce upgrade recommended) |
| 4 | API Security Hardening | ⏭ Not applicable — no API routes |
| 5 | Authentication Security | ⏭ Not applicable — no auth system |
| 6 | Bot & Spam Protection | ⏭ Not applicable — no public forms |
| 7 | Dependency Security | ✅ 3 dependencies; no known vulnerabilities |
| 8 | Repository Security | ⚠️ Manual: enforce branch protection + 2FA in GitHub |
| 9 | Admin Panel Protection | ⏭ Not applicable — no admin interface |
| 10 | Logging & Monitoring | ⏭ Not applicable — no dynamic routes |
| 11 | Vercel Configuration | ⚠️ Manual: scope env vars correctly in Vercel dashboard |
| 12 | Output Report | ✅ This document |
