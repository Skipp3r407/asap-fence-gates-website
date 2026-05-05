import type { NextConfig } from "next";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  turbopack: {
    root: projectRoot
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      },
      {
        protocol: "https",
        hostname: "img.companycam.com"
      },
      {
        protocol: "https",
        hostname: "landing-page-app-hero-images.s3.amazonaws.com"
      },
      {
        protocol: "https",
        hostname: "asapfenceandgate.com"
      }
    ]
  }
};

export default nextConfig;
