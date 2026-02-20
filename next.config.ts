import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/BM-SMILE' : undefined,
  assetPrefix: isProd ? '/BM-SMILE' : undefined,
  trailingSlash: true,
};

export default nextConfig;
