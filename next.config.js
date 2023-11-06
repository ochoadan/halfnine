// /** @type {import('next').NextConfig} */
const withMDX = require("@next/mdx")();

const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  images: {
    domains: ["tailwindui.com", "images.unsplash.com"],
    dangerouslyAllowSVG: true,
  },
};

module.exports = withMDX(nextConfig);
