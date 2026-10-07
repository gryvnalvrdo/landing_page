import { SITE } from "@/content/site";

export const siteMetadata = {
  title: "Pabrik Rak Minimarket & Paket Setup Toko | Free Layout 3D",
  description:
    "Pabrik rak minimarket & gondola langsung dari pabrik. Free konsultasi & layout 3D, free ongkir Jawa-Bali. Konsultasi WA gratis.",
  keywords: [
    "pabrik rak minimarket",
    "rak gondola",
    "paket setup toko retail",
    "rak toko",
    "jasa interior toko",
    "rak supermarket",
    "rak minimarket murah",
    "setup toko minimarket",
  ],
  ogImage: `${SITE.baseUrl}/og-image.jpg`,
} as const;

export function buildOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.brandFull,
    description: siteMetadata.description,
    url: SITE.baseUrl,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Surabaya",
      addressRegion: "Jawa Timur",
      addressCountry: "ID",
    },
    areaServed: {
      "@type": "GeoCircle",
      description: "Jawa dan Bali",
    },
    priceRange: "$$",
  };
}

export function buildFaqJsonLd(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
