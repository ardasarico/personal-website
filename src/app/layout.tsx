import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://ardasari.co",
  ),
  title: "Arda Sari",
  description: "Developer based in Istanbul",
  openGraph: {
    title: "Arda Sari",
    url: "https://ardasari.co",
    description: "Developer based in Istanbul",
    images: [
      {
        url: "/assets/og-image.jpg",
        width: 1024,
        height: 538,
        alt: "Arda Sari - Developer based in Istanbul",
      },
    ],
    type: "website",
    siteName: "Arda Sari",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arda Sari",
    description: "Developer based in Istanbul",
    images: ["/assets/og-image.jpg"],
  },
  keywords: [
    "Arda",
    "ardasarico",
    "ardasari.co",
    "@ardasarico",
    "Arda Sari",
    "arda sari",
    "arda",
    "sari",
    "sari arda",
    "developer",
    "istanbul",
    "web developer",
    "frontend developer",
  ],
  authors: [{ name: "Arda Sari" }],
  creator: "Arda Sari",
  publisher: "Arda Sari",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://ardasari.co",
  },
  icons: {
    icon: [
      {
        url: "/assets/icons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/assets/icons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      { url: "/assets/icons/favicon.ico", sizes: "any" },
    ],
    apple: [
      {
        url: "/assets/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "icon",
        url: "/assets/icons/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/assets/icons/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </head>
      <body className={"antialiased"}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
