/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Optional: Add a trailing slash to all paths `/about` -> `/about/`
  // trailingSlash: true,
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '',
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "/",
  },
}
module.exports = nextConfig
