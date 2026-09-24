import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  turbopack: {},
  webpack: (config, { dev }) => {
    // Disable disk cache in development on Windows to prevent stale './xxx.js' chunk errors
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
