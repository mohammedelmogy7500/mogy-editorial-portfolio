import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/site";

export const viewport: Viewport = {
  themeColor: "#f9f7ec",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — AI Engineer & Data Analyst`,
    template: `%s | ${site.name}`,
  },
  description: `${site.name} — AI Engineer and Data Analyst specializing in Medical AI, Deep Learning chest disease diagnosis (DiagnoLink), genomic sequence analysis, and enterprise data wrangling.`,
  keywords: [
    "Mohamed Waleed Elmogy",
    "Mohamed Elmogy",
    "Mohamed",
    "AI Engineer",
    "Data Analyst",
    "Medical AI",
    "Bioinformatics",
    "Deep Learning",
    "Computer Vision",
    "DiagnoLink",
    "NIH ChestX-ray",
    "Data Wrangling",
    "Python",
    "TensorFlow",
    "Delta University AI",
    "Egypt AI Engineer",
  ],
  authors: [{ name: site.name, url: site.portfolio }],
  creator: site.name,
  publisher: site.name,
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
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    title: `${site.name} — AI Engineer & Data Analyst`,
    description: site.description,
    siteName: `${site.name} Portfolio`,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: `${site.name} — AI Engineer, Data Analyst & Bioinformatics Researcher`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — AI Engineer & Data Analyst`,
    description: site.description,
    images: ["/twitter-image.png"],
    creator: "@mooogyyy",
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  // JSON-LD structured data for Google Rich Results
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.url}/#person`,
        name: site.name,
        alternateName: site.nickname,
        jobTitle: "AI Engineer & Data Analyst",
        description: site.description,
        url: site.url,
        image: `${site.url}${site.avatar}`,
        sameAs: [site.github, site.linkedin, site.portfolio],
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Delta University for Science and Technology",
        },
        knowsAbout: [
          "Artificial Intelligence",
          "Medical AI",
          "Deep Learning",
          "Computer Vision",
          "Bioinformatics",
          "Data Wrangling",
          "Python",
          "TensorFlow",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: `${site.name} — Portfolio`,
        publisher: {
          "@id": `${site.url}/#person`,
        },
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-screen bg-brutalist-cream font-mono text-brutalist-ink selection:bg-brutalist-red selection:text-brutalist-cream">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
