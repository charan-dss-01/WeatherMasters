/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.weatherapi.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.weatherapi.com',
        pathname: '/**',
      },
    ],
  },
  // Enable static optimization
  output: 'standalone',
  // Disable telemetry
  telemetry: {
    disabled: true,
  },
  // Enable strict mode
  reactStrictMode: true,
  // Enable production source maps
  productionBrowserSourceMaps: true,
}

module.exports = nextConfig
