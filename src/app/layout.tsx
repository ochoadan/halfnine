import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "@/app/providers";
import { Wix_Madefor_Display } from "next/font/google";

const fontSource = Wix_Madefor_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Technology Company Restructuring and Turnaround Services - Halfnine",
  description:
    "We help you stand out if you are experiencing the effects of a declining sales, increased competition, or consolidating markets. We deliver success to the struggling.",
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
