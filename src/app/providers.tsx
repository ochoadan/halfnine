import Script from "next/script";

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

function Hotjar() {
  return (
    <Script id="hotjar-script">
      {`(function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:3702256,hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`}
    </Script>
  );
}

function Tidio() {
  return (
    <Script src="//code.tidio.co/cepzufzkjmuip93mcouc64iud4m9bfvq.js" async />
  );
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GoogleAnalytics />
      <Tidio />
      <Hotjar />
      {children}
    </>
  );
}
