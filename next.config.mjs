/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // GitHub Pages doesn't support the Next.js image optimization server
  },
};

export default nextConfig;