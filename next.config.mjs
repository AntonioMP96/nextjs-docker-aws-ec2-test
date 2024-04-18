/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: {
        remotePatterns: [
          { protocol: 'https', hostname: 'cykpay-assets.s3.us-east-2.amazonaws.com' },
        ],
      },
};

export default nextConfig;
