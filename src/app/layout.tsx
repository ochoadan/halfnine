import "./globals.css";
import type { Metadata } from "next";
import { Footer, GoogleAnalytics, Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Software Development Solutions - Halfnine",
  description:
    "Unlock future potential with our digital solutions. Experience efficiency, cost-effectiveness, speed, and innovation with us.",
  alternates: {
    canonical: "https://www.halfnine.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics />
        <Navbar />
        {/* <body className="pt-[64px] lg:pt-[92px] min-h-screen">{children}</body> */}
        <div className="pt-[64px] lg:pt-[92px] min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
