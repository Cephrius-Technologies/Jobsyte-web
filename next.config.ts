import type { NextConfig } from "next";

const APP_URL = "https://app.jobsyte.co";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/login",
        destination: APP_URL,
        permanent: true,
      },
      {
        source: "/signin",
        destination: APP_URL,
        permanent: true,
      },
      {
        source: "/sign-in",
        destination: APP_URL,
        permanent: true,
      },
    ];
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
