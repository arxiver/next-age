/** @type {import('next').NextConfig} */

const nextConfig = {
  // Optional: Add a trailing slash to all paths `/about` -> `/about/`
  // trailingSlash: true,
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
  output: 'export',
  reactStrictMode: true,
  compiler:{
    styledComponents: true
  }
}
module.exports = nextConfig
