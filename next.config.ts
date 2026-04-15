import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  experimental: { typedEnv: true, viewTransition: true },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "customer-assets.emergentagent.com",
      },
    ],
  },
  reactCompiler: true,
  typedRoutes: true,
};

export default nextConfig;
