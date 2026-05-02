import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Se o seu site for hospedado em username.github.io/Site_QuickS, descomente a linha abaixo:
  // basePath: '/Site_QuickS',
};

export default nextConfig;
