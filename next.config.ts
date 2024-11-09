import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  dangerouslyAllowSVG: true,
  basePath: '/portfolio-site',
  assetPrefix: '/portfolio-site/public',
  output: "export",
  reactStrictMode: true,
};

export default nextConfig;
