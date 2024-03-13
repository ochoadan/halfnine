import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "@/app/providers";
import { Mulish } from "next/font/google";

const fontSource = Mulish({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Full-Service Technology Solutions - Halfnine",
  description:
    "Unlock future potential with our digital solutions. Experience efficiency, cost-effectiveness, speed, and innovation with us.",
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
