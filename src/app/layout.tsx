import "./globals.css";
import type { Metadata } from "next";
import { Footer, Navbar } from "@/components";

export const metadata: Metadata = {
  title: "Halfnine - Empowering Digital Success: IT Development Solutions",
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
        <Navbar />
        <div className="min-height-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
