/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async redirects() {
    return [
      {
        source: '/',
        destination: '/math-tools/scientific-notation',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
