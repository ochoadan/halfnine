import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "@/app/providers";
import { Wix_Madefor_Display } from "next/font/google";

const fontSource = Wix_Madefor_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Delivering Comprehensive Technology Solutions | Halfnine",
    template: "%s | Halfnine",
  },
   description:
    "Halfnine is a technology company that delivers full-service solutions to help businesses grow. Contact us today to learn more about how we can help you grow your business",
  alternates: { canonical: "https://www.halfnine.com" },
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
