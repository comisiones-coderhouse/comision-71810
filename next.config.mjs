/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns : [
            {
                hostname : "cdn.dummyjson.com"
            }
        ]
    }
};

export default nextConfig;
