

import GlobalNavbar from "@/components/Global/Navbar";
import GlobalFooter from "@/components/Global/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <GlobalNavbar />
      {children}
      <GlobalFooter />
    </>
  );
}
