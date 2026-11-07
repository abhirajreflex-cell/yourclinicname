import { clinic } from "@/lib/clinic";

export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${clinic.website}/#clinic`,
    name: clinic.name,
    description: clinic.heroSubtitle,
    url: clinic.website,
    image: `${clinic.website}${clinic.ogImage}`,
    telephone: clinic.phone,
    email: clinic.email,
    priceRange: clinic.priceRange,
    medicalSpecialty: "Dentistry",
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.address,
      addressLocality: clinic.city,
      addressRegion: clinic.state,
      postalCode: clinic.postalCode,
      addressCountry: clinic.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: clinic.geo.lat,
      longitude: clinic.geo.lng,
    },
    openingHoursSpecification: clinic.openingHours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: clinic.rating,
      reviewCount: clinic.reviewCount,
    },
    sameAs: [clinic.facebook, clinic.instagram],
    employee: {
      "@type": "Physician",
      name: clinic.doctor.name,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}