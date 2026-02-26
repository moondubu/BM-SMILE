import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(isGithubPages
    ? {
        output: "export",
        images: {
          unoptimized: true,
        },
        basePath: "/BM-SMILE",
        assetPrefix: "/BM-SMILE",
      }
    : {}),
  trailingSlash: true,
};

export default nextConfig;
