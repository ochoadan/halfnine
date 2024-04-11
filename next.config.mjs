const nextConfig = {
  output: "standalone",
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  images: {
    remotePatterns: [
      { hostname: "tailwindui.com" },
      { hostname: "images.unsplash.com" },
      { hostname: "raw.githubusercontent.com" },
      { hostname: "hyleon.com" },
      { hostname: "via.placeholder.com" },
      { hostname: "images.pexels.com" },
    ],
    dangerouslyAllowSVG: true,
  },
  // async redirects() {
  //   return [
  //     {
  //       source: "/blog/posts",
  //       destination: "/blog",
  //       permanent: false,
  //     },
  //     // {
  //     //   source: "/blog/:slug",
  //     //   destination: "/blog/posts/:slug",
  //     //   permanent: true,
  //     // },
  //   ];
  // },
};

export default nextConfig;
