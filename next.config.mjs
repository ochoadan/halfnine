// /** @type {import('next').NextConfig} */
import withMarkdoc from '@markdoc/next.js'
import withSearch from './src/markdoc/search.mjs'

const nextConfig = {
  output: 'standalone',
  pageExtensions: ['md', 'mdoc', 'js', 'jsx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      { hostname: 'tailwindui.com', },
      { hostname: 'images.unsplash.com', },
      { hostname: 'raw.githubusercontent.com', },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default withSearch(
  withMarkdoc({ schemaPath: './src/markdoc' })(nextConfig),
)
