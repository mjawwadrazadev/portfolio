/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ye line add karein
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
