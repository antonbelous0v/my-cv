import CVTemplate from "../cv-template";
import GoogleAnalytics from "./GoogleAnalytics";

const profilePageSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  "@id": "https://abelous0v.xyz/#profile",
  url: "https://abelous0v.xyz/",
  name: "Anton Belousov - Senior JavaScript and Frontend Developer CV",
  about: {
    "@type": "Person",
    "@id": "https://abelous0v.xyz/#person",
  },
  mainEntity: {
    "@type": "Person",
    "@id": "https://abelous0v.xyz/#person",
    name: "Anton Belousov",
    jobTitle: "Senior Frontend Engineer",
    image:
      "https://abelous0v.xyz/img/anton-belousov-senior-frontend-engineer.webp",
    knowsAbout: [
      "JavaScript",
      "React",
      "Next.js",
      "TypeScript",
      "Technical SEO",
      "Core Web Vitals",
      "Frontend Architecture",
    ],
  },
};

export default function Home() {
  return (
    <>
      <GoogleAnalytics trackingId="G-6SDC2SBMCG" />
      <script type="application/ld+json">
        {JSON.stringify(profilePageSchema)}
      </script>
      <main>
        <CVTemplate />
      </main>
    </>
  );
}
