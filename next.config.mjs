/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: {
        domains: ['cykpay-assets.s3.us-east-2.amazonaws.com']
    }
};

export default nextConfig;
