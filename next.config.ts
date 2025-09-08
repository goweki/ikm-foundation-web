import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    domains: ["v5.airtableusercontent.com", "images.unsplash.com"],
  },
};

export default nextConfig;
