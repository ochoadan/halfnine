import "./globals.css";
import type { Metadata } from "next";
import GlobalNavbar from "@/components/Global/Navbar";
import GlobalFooter from "@/components/Global/Footer";
import { Providers } from "@/app/providers";

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
        <Providers>
          <div className="min-h-screen">
            <GlobalNavbar />
            {children}
          </div>
          <GlobalFooter />
        </Providers>
      </body>
    </html>
  );
}
