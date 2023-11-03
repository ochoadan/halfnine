"use client";

// import { ThemeProvider } from "next-themes";
import Script from "next/script";
import { IntercomProvider, useIntercom } from "react-use-intercom";

const INTERCOM_APP_ID = "l1qtvc55";

function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=G-WS1H53CBCV`}
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-WS1H53CBCV');
        `}
      </Script>
    </>
  );
}


export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <IntercomProvider appId={INTERCOM_APP_ID} autoBoot>
      <GoogleAnalytics />
      {/* <ThemeProvider attribute="class" disableTransitionOnChange> */}
      {children}
      {/* </ThemeProvider> */}
    </IntercomProvider>
  );
}
