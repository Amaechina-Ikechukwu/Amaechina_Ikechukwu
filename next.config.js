/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites() {
    return [
      {
        source: "/public/index.html",
        destination: "/app/api/auth/connect/route.js",
      },
    ];
  }
}

module.exports = nextConfig
