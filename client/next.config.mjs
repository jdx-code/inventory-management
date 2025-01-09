// import type { NextConfig } from "next";

const nextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3-jd-inventorymanagement.s3.ap-south-1.amazonaws.com/",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
