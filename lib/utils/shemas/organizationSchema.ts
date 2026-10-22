export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://abelous0v.xyz/#professional-service",
  name: "Anton Belousov Frontend Development",
  url: "https://abelous0v.xyz",
  logo: "https://abelous0v.xyz/img/favicons/android-icon-144x144.png",
  description:
    "Independent frontend development, technical SEO, and web performance services by Anton Belousov.",
  sameAs: [
    "https://github.com/antonbelous0v",
    "https://www.linkedin.com/in/anton-belousov-1803042b1/",
    "https://abelous0v.xyz/blog",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Professional inquiries",
    email: "anton@abelous0v.xyz",
    telephone: "+380663208556",
    areaServed: ["UA", "EU", "US"],
    availableLanguage: [
      {
        "@type": "Language",
        name: "English",
      },
      {
        "@type": "Language",
        name: "Ukrainian",
      },
    ],
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kyiv",
    addressCountry: "Ukraine",
  },
  founder: {
    "@type": "Person",
    "@id": "https://abelous0v.xyz/#person",
    name: "Anton Belousov",
    jobTitle: "Senior Frontend Engineer",
    url: "https://abelous0v.xyz",
    sameAs: [
      "https://github.com/antonbelous0v",
      "https://www.linkedin.com/in/anton-belousov-1803042b1/",
      "https://abelous0v.xyz/blog",
    ],
  },
};
