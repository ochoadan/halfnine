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

          gtag('config', 'G-WS1H53CBCV', { 'anonymize_ip': true });
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

function Clarity() {
  return (
    <Script id="clarity-script">
      {`
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i+"?ref=bwt";
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "mjv7n0ux4w");
      `}
    </Script>
  );
}

function ChatBubble() {
  return (
    <Script id="chatwoot-script">
      {`
          (function(d,t) {
            var BASE_URL="https://app.chatwoot.com";
            var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src=BASE_URL+"/packs/js/sdk.js";
            g.defer = true;
            g.async = true;
            s.parentNode.insertBefore(g,s);
            g.onload=function(){
              window.chatwootSDK.run({
                websiteToken: 'qJqLnqYLcWWWnxPegwKJoLed',
                baseUrl: BASE_URL
              })
            }
          })(document,"script");
        `}
    </Script>
  );
}

function ConsentManager() {
  return (
    <Script
      id="cookieyes"
      type="text/javascript"
      src="https://cdn-cookieyes.com/client_data/3ce44eae20ab5879b7b13311/script.js"
    />
  );
}

function ApolloTracker() {
  return (
    <Script id="apollo-script">
      {`
        function initApollo(){
          var n=Math.random().toString(36).substring(7),
              o=document.createElement("script");
          o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,
          o.async=!0,
          o.defer=!0,
          o.onload=function(){
            window.trackingFunctions.onLoad({appId:"66421e6e1bd79c0300930e5c"})
          },
          document.head.appendChild(o)
        }
        initApollo();
      `}
    </Script>
  );
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <ConsentManager /> */}
      <GoogleAnalytics />
      {/* <ChatBubble /> */}
      <Clarity />
      {/* <ApolloTracker /> */}
      {children}
    </>
  );
}
