import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  reactStrictMode: true,
  async redirects() {
    return [
      // Canonical host is www. Redirect the bare apex to www.
      {
        source: "/:path*",
        has: [{ type: "host", value: "diamondreputationmanagement.com" }],
        destination: "https://www.diamondreputationmanagement.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
