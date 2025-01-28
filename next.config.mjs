/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns : [
            {
                hostname : "cdn.dummyjson.com"
            },
            {
                hostname : "placehold.co"
            }
        ]
    }
};

export default nextConfig;
