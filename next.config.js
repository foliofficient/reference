/** @type {import('next').NextConfig} */

const REWRITES = []

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  poweredByHeader: false,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
  },
  async rewrites() {
    return REWRITES
  },
}

console.log(JSON.stringify(nextConfig))
console.log('Rewrites: ', REWRITES)

module.exports = nextConfig
