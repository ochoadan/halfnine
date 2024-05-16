const nextConfig = {
  output: "standalone",
  pageExtensions: ["js", "jsx", "ts", "tsx"],
  images: {
    remotePatterns: [
      { hostname: "tailwindui.com" },
      { hostname: "images.unsplash.com" },
      { hostname: "raw.githubusercontent.com" },
      { hostname: "cms.halfnine.com" },
      { hostname: "via.placeholder.com" },
      { hostname: "images.pexels.com" },
      { hostname: "www.vectorlogo.zone" },
      { hostname: "upload.wikimedia.org" },
      { hostname: "cdn.worldvectorlogo.com" },
    ],
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'self' 'unsafe-inline'; sandbox;",
    // contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async redirects() {
    return [
      {
        source: "/blog/0",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/services/managed-it-support",
        destination: "/services/support",
        permanent: false,
      },
      {
        source: "/services/architecture",
        destination: "/services/design",
        permanent: false,
      },
      // {
      //   source: "/blog/posts",
      //   destination: "/blog",
      //   permanent: false,
      // },
      // {
      //   source: "/blog/author",
      //   destination: "/blog",
      //   permanent: false,
      // },
      // {
      //   source: "/blog/category",
      //   destination: "/blog",
      //   permanent: false,
      // },
      {
        source: "/blog/posts/:slug",
        destination: "/blog/post/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
