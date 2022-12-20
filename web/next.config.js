/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: { urlImports: ["https://themer.sanity.build/"] },
};

module.exports = nextConfig;
