import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "@/app/providers";
import { Wix_Madefor_Display } from "next/font/google";

const fontSource = Wix_Madefor_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Software Development Company • Halfnine",
  // title: {
  //   default: "Software Development Company • Halfnine",
  //   template: "%s • Halfnine",
  // },
  description:
    "Halfnine is a software development company that delivers full-service solutions to businesses. Contact us to learn more about how we can help you grow",
  alternates: { canonical: "https://www.halfnine.com" },
  openGraph: {
    title: "Software Development Company • Halfnine",
    description:
      "Halfnine is a software development company that delivers full-service solutions to businesses. Contact us to learn more about how we can help you grow",
    images: [
      {
        url: "https://www.halfnine.com/img/og-image.jpg",
        width: 1200,
        height: 628,
        alt: "Halfnine Software Development Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@halfnine",
    creator: "@halfnine",
    images: [
      {
        url: "https://www.halfnine.com/img/og-image.jpg",
        width: 1200,
        height: 628,
        alt: "Halfnine Software Development Company",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${fontSource.className} min-h-screen`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
