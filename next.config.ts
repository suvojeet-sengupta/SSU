import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    /* unoptimized: true - Removed for performance preference */
  },
};

export default nextConfig;
