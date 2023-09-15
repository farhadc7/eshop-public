/** @type {import('next').NextConfig} */
const path = require("path");

module.exports = {
  images: {
    domains: ['31.7.74.54'],
  },  
  publicDirectory: "public",
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  server: {
    https: {
      rejectUnauthorized: false,
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "31.7.74.54",
        port: "",
        pathname: "/static/images/**",
      },
    ],
  },
};
