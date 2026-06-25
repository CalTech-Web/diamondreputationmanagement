import Script from "next/script";
import { SITE } from "@/lib/site";

// Renders the GA4 tag only when a Measurement ID is configured.
export function Analytics() {
  if (!SITE.gaId) return null;
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${SITE.gaId}`}
        strategy="lazyOnload"
      />
      <Script id="ga4" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${SITE.gaId}');
        `}
      </Script>
    </>
  );
}
