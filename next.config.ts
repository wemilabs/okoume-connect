import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.1.64"],
  cacheComponents: true,
  experimental: { typedEnv: true, viewTransition: true },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "customer-assets.emergentagent.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "ubrw5iu3hw.ufs.sh",
      },
    ],
  },
  reactCompiler: true,
  typedRoutes: true,
};

export default nextConfig;
