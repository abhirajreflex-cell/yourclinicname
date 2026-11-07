import { clinic } from "@/lib/clinic";

export default function sitemap() {
  const base = clinic.website;
  const now = new Date();

  return [
    { url: base, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${base}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${base}/disclaimer`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
  ];
}