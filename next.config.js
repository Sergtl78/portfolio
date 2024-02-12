/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: '/portfolio',
  output: 'export',
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
        pathname: '/public/**'
      }
    ]
  }
}

module.exports = nextConfig
