import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {unoptimized: true},
  basePath: '/aleksandra-website'
};

export default nextConfig;
