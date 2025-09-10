/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  // Remove unused directories from build
  // Optimize for static hosting
  assetPrefix: "",
  // Skip error pages during static export
  skipTrailingSlashRedirect: true,
  // Disable experimental features that cause issues
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  // Disable build traces for static export
  generateBuildId: () => "build",
  // Optimize output for static hosting
  cleanDistDir: true,
};

module.exports = nextConfig;
