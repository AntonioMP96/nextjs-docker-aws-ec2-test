/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: {
        remotePatterns: [
          { protocol: 'https', hostname: 'cykpay-assets.s3.us-east-2.amazonaws.com' },
          { protocol: 'https', hostname: 'avatars.githubusercontent.com' },
          { protocol: 'https', hostname: 'lh3.googleusercontent.com' },
        ],
      },
};

export default nextConfig;
