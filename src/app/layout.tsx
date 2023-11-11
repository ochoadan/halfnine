'use client'

import "./globals.css";
import type { Metadata } from "next";
import GlobalNavbar from "@/components/Global/Navbar";
import GlobalFooter from "@/components/Global/Footer";
import { Providers } from "@/app/providers";
import { Mulish } from 'next/font/google'


import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

import { Hero } from '@/components/Hero'
import { Logo, Logomark } from '@/components/Logo'
import { MobileNavigation } from '@/components/MobileNavigation'
import { Navigation } from '@/components/Navigation'
// import { Search } from '@/components/Search'
import { ThemeSelector } from '@/components/ThemeSelector'



const fontSource = Mulish({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: "Software Development and Consulting Solutions - Halfnine",
//   description: "Unlock future potential with our digital solutions. Experience efficiency, cost-effectiveness, speed, and innovation with us.",
//   alternates: { canonical: "https://www.halfnine.com", },
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fontSource.className}>
        <Providers>
          <Layout>
            {children}
          </Layout>
        </Providers>
      </body>
    </html>
  );
}

const BaseLayout = (children: any) => {
  return (
    <>
      <div className="min-h-screen">
        <GlobalNavbar />
        {children}
      </div>
      <GlobalFooter />
    </>
  );
}

function Layout({ children }: { children: React.ReactNode }) {
  let pathname = usePathname()
  let isHomePage = pathname === '/'

  return (
    <>
      <GlobalNavbar />
      {/* <Hero /> */}
      {/* <div className="relative mx-auto flex w-full max-w-7xl flex-auto justify-center"> */}
        {children}
      {/* </div> */}
      <GlobalFooter />
    </>
  )
}
