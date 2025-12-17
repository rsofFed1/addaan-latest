import { withPayload } from "@payloadcms/next/withPayload";
import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.pexels.com',
            },
        ]
    }
};

const withNextIntl = createNextIntlPlugin();
export default withPayload(withNextIntl(nextConfig));