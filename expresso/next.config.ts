import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [{ pathname: "https", hostname: "cdn.sanity.io" }],
    },
};

export default nextConfig;
