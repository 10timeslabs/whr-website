import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "whr.ai - Premier Event Intelligence Platform",
  description: "Discover whr.ai's event intelligence platform for real-time forecasting, demand planning, and maximizing event impact.",
  verification: {
    google: "KcRKKC-PQ7QtLvpfL-QPyrWNfS7jwFrK3_UEwft9dKI", 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0], j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
              j.async=true; j.src='https://www.googletagmanager.com/gtm.js?id=' + i + dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KCBN5FJX');
            `,
          }}
        />
         <meta name="theme-color" content="#6750a4" />
      </head>
      <body className={GeistSans.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KCBN5FJX"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Breadcrumbs />
        <div>{children}</div>
      </body>
    </html>
  );
}
