import type { Metadata } from "next";
import Analytics from "./components/Analytics";
import { siteConfig } from "./config";
import "./globals.css";

export const metadata: Metadata = {
  title: "China Supply Radar | Inventory Risk & Supply Chain Planning for Shopify",
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "China Supply Radar | Inventory Risk & Supply Chain Planning for Shopify",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    type: "website",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "China Supply Radar Chrome extension preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "China Supply Radar | Inventory Risk & Supply Chain Planning for Shopify",
    description: siteConfig.description,
    images: ["/og-image.svg"],
  },
  verification: siteConfig.googleSiteVerification
    ? {
        google: siteConfig.googleSiteVerification,
      }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  );
}
