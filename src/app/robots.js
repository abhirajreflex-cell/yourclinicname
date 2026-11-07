import { clinic } from "@/lib/clinic";

export default function robots() {
   if (!clinic.indexable) {
    return {
      rules: [
        { userAgent: ["WhatsApp", "facebookexternalhit", "Twitterbot"], allow: "/" },
        { userAgent: "*", disallow: "/" },
      ],
    };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${clinic.website}/sitemap.xml`,
  };
}