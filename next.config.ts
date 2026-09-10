import type { NextConfig } from "next";

// Explicit, permissive-where-needed CSP so demo videos (embedded via
// Google Drive's inline preview iframe) are never silently blocked by a
// host platform's default security headers. Without this, some hosts
// inject a restrictive default CSP that omits frame-src entirely, which
// blocks iframes even when nothing in this app's own code is at fault.
const csp = [
  "default-src 'self'",
  "frame-src 'self' https://drive.google.com https://*.google.com",
  "img-src 'self' data: https:",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "connect-src 'self'",
].join("; ");

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "Content-Security-Policy", value: csp }],
      },
    ];
  },
};

export default nextConfig;
