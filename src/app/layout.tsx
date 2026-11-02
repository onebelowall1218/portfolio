import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { person, siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Anjum Ulazim | AI Engineer",
    template: "%s | Anjum Ulazim",
  },
  description:
    "Anjum Ulazim is an AI engineer building reliable production AI systems, from workflow orchestration and OCR infrastructure to applied machine learning.",
  applicationName: "Anjum Ulazim Portfolio",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Anjum Ulazim",
    title: "Anjum Ulazim | AI Engineer",
    description:
      "Production AI systems, thoughtful engineering, and hands-on machine learning.",
    url: siteUrl,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Anjum Ulazim — AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anjum Ulazim | AI Engineer",
    images: ["/opengraph-image"],
  },
  icons: { icon: "/icon.svg" },
  authors: [{ name: person.name, url: person.linkedin }],
};

export const viewport: Viewport = {
  themeColor: "#f7f5ef",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.role,
    email: `mailto:${person.email}`,
    telephone: person.phoneHref,
    url: siteUrl,
    sameAs: [person.linkedin, person.github],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Gurugram",
      addressCountry: "IN",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Indian Institute of Technology Guwahati",
    },
  };

  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        {children}
        <SiteFooter />
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
