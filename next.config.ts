import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io", // ganti dengan domain dari gambar kamu
        pathname: "**", // untuk mengizinkan semua path
      },
    ],
  },
};

export default nextConfig;
