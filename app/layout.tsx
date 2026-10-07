import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE } from "@/content/site";
import { siteMetadata, buildOrganizationJsonLd, buildFaqJsonLd } from "@/lib/seo";
import { faqs } from "@/content/copy";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title: siteMetadata.title,
  description: siteMetadata.description,
  keywords: siteMetadata.keywords.join(", "),
  authors: [{ name: SITE.brandFull }],
  creator: SITE.brandFull,
  publisher: SITE.brandFull,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: SITE.baseUrl,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE.baseUrl,
    siteName: SITE.brandFull,
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [
      {
        url: siteMetadata.ogImage,
        width: 1200,
        height: 630,
        alt: `${SITE.brandFull} — Pabrik Rak Minimarket & Setup Toko Retail`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.ogImage],
  },
  other: {
    "theme-color": SITE.themeColor,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const orgJsonLd = buildOrganizationJsonLd();
  const faqJsonLd = buildFaqJsonLd(
    faqs.map((f) => ({ question: f.question, answer: f.answer }))
  );

  return (
    <html lang="id" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">
        {children}
      </body>
    </html>
  );
}
