export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Orthotics NOW",
  "image": "https://orthoticsnow.com/images/logo.png",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "285 Sandwich St S",
    "addressLocality": "Amherstburg",
    "addressRegion": "ON",
    "postalCode": "N9V 2A7",
    "addressCountry": "CA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 42.100742,
    "longitude": -83.108682
  },
  "url": "https://orthoticsnow.com",
  "telephone": "+15197365353",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Thursday"],
      "opens": "07:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "11:00"
    }
  ],
  "priceRange": "$$",
  "medicalSpecialty": "Orthotics"
} 