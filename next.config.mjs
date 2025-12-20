/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    minimumCacheTTL: 31536000,
  },
  poweredByHeader: false,
  reactStrictMode: true,

  // Performance optimizations
  experimental: {
    optimizePackageImports: [
      'react-icons',
      'framer-motion',
      '@react-three/fiber',
      '@react-three/drei',
      'three',
      '@fortawesome/react-fontawesome',
      '@fortawesome/free-brands-svg-icons',
    ],
  },
};

export default nextConfig;

