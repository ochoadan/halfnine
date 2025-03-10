# Halfnine

**Halfnine** was a responsive marketing website designed to promote IT consulting solutions. Built with Next.js and styled using Tailwind CSS, it integrates with a WordPress CMS backend via WPGraphQL for dynamic blog content management.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [WordPress Integration](#wordpress-integration)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features
- **Responsive Design**: Fully optimized for all devices using Tailwind CSS.
- **Dynamic Blog**: Powered by WordPress CMS with WPGraphQL integration.
- **SEO-Friendly**: Built with Next.js and includes sitemap generation via `next-sitemap`.
- **Interactive UI**: Enhanced with Framer Motion animations and Headless UI components.
- **Form Handling**: Includes Nodemailer for email functionality.
- **Content Security**: Sanitizes HTML input with `sanitize-html`.

## Tech Stack
- **Core**: Next.js 14.2.3, React 18.3.1, TypeScript 5.4.5
- **Styling**: Tailwind CSS 3.4.3, PostCSS 8.4.38, Autoprefixer 10.4.19
- **CMS Integration**: WordPress via WPGraphQL (`wp-types`)
- **Key Libraries**:
  - Animations: `framer-motion` 11.2.10
  - UI Components: `@headlessui/react` 2.0.4, `@heroicons/react` 2.1.3
  - Forms & Security: `@marsidev/react-turnstile` 0.7.0, `nodemailer` 6.9.13, `sanitize-html` 2.13.0
  - Utilities: `clsx` 2.1.1, `slugify` 1.6.6, `sharp` 0.33.4
- **Dev Tools**: ESLint 8.57.0, `@tailwindcss/typography`, `@tailwindcss/aspect-ratio`

## Installation

To set up the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/ochoadan/halfnine.git
   cd halfnine
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   - Copy `.env.example` to `.env.local`:
     ```bash
     cp .env.example .env.local
     ```
   - Add your WordPress WPGraphQL endpoint and other required variables (e.g., `NEXT_PUBLIC_WPGRAPHQL_URL`, `NODEMAILER_*` credentials).

4. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build for production** (optional):
   ```bash
   npm run build
   npm run start
   ```

## Usage

- **Development**: `npm run dev` starts the Next.js dev server with hot reloading.
- **Build**: `npm run build` compiles the app, followed by `postbuild` to generate a sitemap.
- **Production**: `npm run start` runs the built app.
- **Linting**: `npm run lint` checks code quality with ESLint.

## WordPress Integration

The site fetches blog content from a WordPress backend using [WPGraphQL](https://www.wpgraphql.com/). Setup steps:

1. **Install WPGraphQL** on your WordPress instance.
2. **Remove Fetch Limits**:
   - Modify or create a custom WordPress plugin to adjust WPGraphQL’s `graphql_query_per_page` limit (default is 100).
3. **Configure Endpoint**:
   - Set `NEXT_PUBLIC_WPGRAPHQL_URL` in `.env.local` (e.g., `https://your-wp-site.com/graphql`).
4. **Fetch Data**:
   - Use `wp-types` or custom GraphQL queries in `src/` to retrieve posts.

Example query:
```graphql
query GetPosts {
  posts(first: 100) {
    nodes {
      title
      slug
      content
    }
  }
}
```

## Contributing

We welcome contributions! To contribute:
1. Fork the repository.
2. Create a branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m "Add YourFeature"`).
4. Push to your branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

Run `npm run lint` before submitting to ensure code quality.

## License

This project is licensed under the [MIT License](LICENSE) - see the [LICENSE](LICENSE) file for details.
