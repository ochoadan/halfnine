// /** @type {import('next').NextConfig} */

// const nextConfig = {
//   output: 'standalone',
//   pageExtensions: ['md', 'mdoc', 'js', 'jsx', 'ts', 'tsx'],
//   images: {
//     remotePatterns: [
//       { hostname: 'tailwindui.com', },
//       { hostname: 'images.unsplash.com', },
//       { hostname: 'raw.githubusercontent.com', },
//     ],
//     dangerouslyAllowSVG: true,
//   },
// };

// module.exports = nextConfig;

const nextConfig = {
  output: 'standalone',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      { hostname: 'tailwindui.com', },
      { hostname: 'images.unsplash.com', },
      { hostname: 'raw.githubusercontent.com', },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;