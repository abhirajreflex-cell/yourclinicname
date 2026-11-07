import { Geist } from "next/font/google";
import "./globals.css";
import { clinic } from "@/lib/clinic";
import JsonLd from "../../components/JsonLd";

const geist = Geist({ subsets: ["latin"], display: "swap" });

const fullTitle = `${clinic.name} | Best Dentist in ${clinic.city}`;

export const metadata = {
  metadataBase: new URL(clinic.website),
  title: {
    default: fullTitle,
    template: `%s | ${clinic.name}`,
  },
  description: clinic.heroSubtitle,
  keywords: clinic.keywords,
  alternates: { canonical: "/" },
  robots: {
    index: clinic.indexable,
    follow: clinic.indexable,
  },
  openGraph: {
    title: fullTitle,
    description: clinic.heroSubtitle,
    url: clinic.website,
    siteName: clinic.name,
    type: "website",
    locale: "en_IN",
    images: [
      { url: clinic.ogImage, width: 1200, height: 630, alt: `${clinic.name} dental clinic` },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: fullTitle,
    description: clinic.heroSubtitle,
    images: [clinic.ogImage],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth scroll-pt-20">
      <body className={`${geist.className} antialiased text-slate-800`}>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}