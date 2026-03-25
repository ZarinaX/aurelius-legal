import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: "export",
  basePath: "/aurelius-legal",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
