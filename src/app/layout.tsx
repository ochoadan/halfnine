import "./globals.css";
import type { Metadata } from "next";
import { Footer, GoogleAnalytics, Navbar } from "@/components";

export const metadata: Metadata = {
  title:
    "Halfnine - Empowering Digital Success: Software Development Solutions",
  description:
    "Unlock future potential with our powerful and flexible digital solutions. Experience efficiency, cost-effectiveness, speed, and innovation with us.",
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
        {/* <div className="pt-20 lg:pt-24 min-h-screen">{children}</div> */}
        <div className="pt-24 min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
