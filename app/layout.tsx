import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "China Supply Radar | Avoid China Supplier Delays & Stockouts",
  description:
    "Track China holiday shutdowns, supplier reliability, reorder timing, and sourcing risks before stockouts happen.",
  metadataBase: new URL("https://chinasupplyradar.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "China Supply Radar | Avoid China Supplier Delays & Stockouts",
    description:
      "Track China holiday shutdowns, supplier reliability, reorder timing, and sourcing risks before stockouts happen.",
    url: "https://chinasupplyradar.com",
    siteName: "China Supply Radar",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "China Supply Radar | Avoid China Supplier Delays & Stockouts",
    description:
      "Track China holiday shutdowns, supplier reliability, reorder timing, and sourcing risks before stockouts happen.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
