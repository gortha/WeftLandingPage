import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

const roboto_mono = Roboto_Mono({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: false,
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Weft Finance V2 - Advanced DeFi Lending Platform on Radix DLT",
  description: "Weft Finance V2 features Wefties NFT CDPs, isolation mode, efficiency mode, and advanced collateral management on Radix DLT. Experience the next generation of decentralized lending.",
  keywords: "DeFi, lending, borrowing, Radix, blockchain, cryptocurrency, Web3, staking, Weft Finance, V2, NFT, CDPs, Wefties, isolation mode, efficiency mode, Scrypto, Cerberus",
  authors: [{ name: "Weft Finance", url: "https://app.weft.finance/market" }],
  creator: "Weft Finance",
  publisher: "Weft Finance",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://app.weft.finance/market"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://app.weft.finance/market",
    title: "Weft Finance V2 - Advanced DeFi Lending Platform",
    description: "Weft Finance V2 features Wefties NFT CDPs, isolation mode, efficiency mode, and advanced collateral management on Radix DLT.",
    siteName: "Weft Finance",
    images: [
      {
        url: "/assets/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Weft Finance V2 - Advanced DeFi Platform on Radix DLT",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Weft Finance V2 - Advanced DeFi on Radix",
    description: "Weft Finance V2 features Wefties NFT CDPs, isolation mode, efficiency mode on Radix DLT.",
    images: ["/assets/images/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" style={{ fontFamily: `var(--font-roboto-mono)` }}>
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.svg" />
        <link rel="manifest" href="/manifest.json" />
        {/* <meta name="theme-color" content="#0066FF" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${roboto.variable} ${roboto_mono.variable}`}>
        {children}
      </body>
    </html>
  );
}
