/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "image.pexels.com" }],
  },
};

export default nextConfig;
