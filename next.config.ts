import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Le dice a Next.js que la raíz del proyecto es esta carpeta
  // (hay otro pnpm-lock.yaml en C:\Users\Lenovo que lo confundía).
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
