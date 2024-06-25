// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// module.exports = nextConfig;


const { createProxyMiddleware } = require('http-proxy-middleware');

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://44.193.73.68:8000/api/:path*', // Proxy to Backend
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Forwarded-Proto',
            value: 'https',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
