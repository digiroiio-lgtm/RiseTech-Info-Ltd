import type { NextConfig } from "next";
import { SECURITY_HEADERS } from "./src/lib/security-headers";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "objects.githubusercontent.com" },
      { protocol: "https", hostname: "github.com" },
    ],
  },
  async headers() {
    return [
      { source: "/(.*)", headers: SECURITY_HEADERS.map((h) => ({ ...h })) },
    ];
  },
};

export default nextConfig;
