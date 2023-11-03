import "./globals.css";
import type { Metadata } from "next";
import GoogleAnalytics from "@/components/Providers/GoogleAnalytics";
import GlobalNavbar from "@/components/Global/Navbar";
import GlobalFooter from "@/components/Global/Footer";

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
        <div className="min-h-screen">
          <GlobalNavbar />
          {children}
          <GlobalFooter />
        </div>
      </body>
    </html>
  );
}
