/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  basePath: process.env.BASE_URL,
};

module.exports = nextConfig;
