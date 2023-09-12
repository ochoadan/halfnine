import "./globals.css";
import type { Metadata } from "next";
import { Footer, Navbar } from "@/components";

export const metadata: Metadata = {
  title: "HalfNine - Information Technology Development Company",
  description:
    "We provide scalable and secure software solutions for any System, Browser and Device. Contact us for custom IT solutions that perfectly fit your needs.",
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
