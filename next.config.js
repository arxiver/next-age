/** @type {import('next').NextConfig} */

const nextConfig = {
  // Optional: Add a trailing slash to all paths `/about` -> `/about/`
  // trailingSlash: true,
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
  reactStrictMode: true,
<<<<<<< HEAD
=======
  images: {
    loader: "akamai",
    path: "/",
    unoptimized: true
  },
>>>>>>> 3114dfd (Inital codebase page (#1))
  compiler:{
    styledComponents: true
  }
}
module.exports = nextConfig
