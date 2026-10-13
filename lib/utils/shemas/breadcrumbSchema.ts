export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "name": "Site Breadcrumbs",
  "description": "Breadcrumb navigation for Anton Belousov's CV and blog pages",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://abelous0v.xyz"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://abelous0v.xyz/blog"
    }
  ]
};
