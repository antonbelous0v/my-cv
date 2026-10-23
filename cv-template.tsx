import Image from "next/image";
import Link from "next/link";

const profileImageUrl =
  "https://abelous0v.xyz/img/anton-belousov-senior-frontend-engineer.webp";
const profileImageAlt =
  "Anton Belousov, Senior Frontend Engineer specializing in React, Next.js, TypeScript, performance, and technical SEO";

const roles = [
  {
    title: "Senior JavaScript Engineer",
    company: "24 Play LLC",
    companyUrl: "https://24play.games/",
    startDate: "2026-03",
    endDate: "2026-08",
    date: "Mar 2026 — Aug 2026",
    bullets: [
      "Built graphics-heavy interfaces with Three.js, WebGL, and GLSL, optimizing JavaScript execution, rendering, and asset loading across desktop and mobile.",
      "Stabilized adaptive interactions across viewport sizes, device capabilities, and input methods.",
    ],
  },
  {
    title: "Frontend Team Lead",
    company: "Palace NFT",
    companyUrl: "https://t.me/palacenftbot/?startapp",
    startDate: "2025-07",
    endDate: "2026-07",
    date: "Jul 2025 — Jul 2026",
    bullets: [
      "Led 5 frontend engineers through code review, sprint planning, architecture decisions, and delivery.",
      "Designed modular React, Vite, and TypeScript architecture for a Web3 trading platform and standardized ESLint and PR workflows.",
    ],
  },
  {
    title: "Senior Frontend Developer",
    company: "Linken Sphere",
    companyUrl: "https://ls.app/",
    startDate: "2025-02",
    endDate: "2025-10",
    date: "Feb 2025 — Oct 2025",
    bullets: [
      "Built a production frontend from scratch with React, Next.js, and Tailwind, including routing, reusable UI, and deployment setup.",
      "Raised Lighthouse performance scores above 90 through SSR, code splitting, asset loading, technical SEO, and layout stability work.",
    ],
  },
  {
    title: "Middle Frontend Developer",
    company: "Your Price Booking OÜ",
    companyUrl: "https://yourpricebooking.com/en",
    startDate: "2024-03",
    endDate: "2025-02",
    date: "Mar 2024 — Feb 2025",
    bullets: [
      "Delivered booking flows, dynamic forms, maps, data tables, and reusable UI with React and TypeScript.",
      "Reduced page load time by 40% through caching, bundle optimization, code splitting, and lazy loading.",
    ],
  },
];

const skills = [
  [
    "Languages & Frameworks",
    "JavaScript (ES6+), TypeScript, React, Next.js, Vite, Three.js, HTML5, CSS3, Tailwind CSS",
  ],
  [
    "State & Architecture",
    "Redux Toolkit, Apollo Client, GraphQL, REST APIs, Feature-Sliced Design",
  ],
  [
    "Performance & SEO",
    "Core Web Vitals, Lighthouse, SSR/SSG, WebGL, GLSL, code splitting, Schema.org",
  ],
  [
    "Tools & Testing",
    "Git, GitHub Actions, CI/CD, Vercel, Jest, React Testing Library",
  ],
];

export default function CVTemplate() {
  return (
    <article
      className="cv mx-auto w-full max-w-5xl bg-transparent px-5 py-7 text-base leading-relaxed text-[#201d19] sm:px-8 md:px-10 print:max-w-none print:p-0 print:text-[9.5pt] print:leading-[1.28]"
      itemScope
      itemType="https://schema.org/Person"
    >
      <header className="mb-8 print:mb-3">
        <div className="grid grid-cols-[128px_minmax(0,1fr)] gap-x-4 gap-y-4 md:grid-cols-[minmax(0,1fr)_200px] md:gap-x-8 md:gap-y-0 print:block">
          <div className="col-start-2 row-start-1 min-w-0 md:col-start-1">
            <h1
              className="font-serif text-4xl font-bold leading-tight sm:text-5xl print:text-[24pt]"
              itemProp="name"
            >
              Anton Belousov
            </h1>
            <p
              className="mt-1 text-2xl text-[#37312b] print:text-[14pt]"
              itemProp="jobTitle"
            >
              Senior Frontend Engineer
            </p>
            <p className="mt-1 text-[#6d665e]">
              React · Next.js · TypeScript · Frontend Performance
            </p>
          </div>

          <figure
            className="relative col-start-1 row-start-1 h-32 w-32 overflow-hidden justify-self-start rounded-lg md:col-start-2 md:row-span-2 md:h-auto md:w-full md:self-stretch md:justify-self-end print:hidden"
            itemProp="image"
            itemScope
            itemType="https://schema.org/ImageObject"
          >
            <Image
              src="/img/anton-belousov-senior-frontend-engineer.webp"
              width={360}
              height={360}
              sizes="(max-width: 767px) 128px, 200px"
              alt={profileImageAlt}
              itemProp="contentUrl"
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <meta itemProp="url" content={profileImageUrl} />
            <meta itemProp="name" content={profileImageAlt} />
            <meta itemProp="width" content="360" />
            <meta itemProp="height" content="360" />
            <meta itemProp="representativeOfPage" content="true" />
          </figure>

          <address className="col-span-2 row-start-2 flex flex-wrap gap-x-4 gap-y-1 not-italic text-[#49423b] md:col-span-1 md:col-start-1 md:mt-2 print:mt-2 print:text-[9pt]">
            <span itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
              <span itemProp="addressLocality">Kyiv</span>,{" "}
              <span itemProp="addressCountry">Ukraine</span>
            </span>
            <a className="text-blue-700 underline decoration-blue-300 underline-offset-2" href="mailto:anton@abelous0v.xyz" itemProp="email">
              Mail: anton@abelous0v.xyz
            </a>
            <a className="text-blue-700 underline decoration-blue-300 underline-offset-2" href="tel:+380663208556" itemProp="telephone">
              +380 66 320 85 56
            </a>
            <a className="text-blue-700 underline decoration-blue-300 underline-offset-2" href="https://github.com/antonbelous0v" itemProp="sameAs">
              github.com/antonbelous0v
            </a>
            <a className="text-blue-700 underline decoration-blue-300 underline-offset-2" href="https://www.linkedin.com/in/anton-belousov-1803042b1/" itemProp="sameAs">
              LinkedIn
            </a>
          </address>
        </div>
      </header>

      <section className="mb-7 print:mb-3" aria-labelledby="summary-title">
        <h2
          className="mb-3 border-b border-[#cfc5b7] pb-1 font-serif text-xl font-bold print:mb-1 print:text-[12pt]"
          id="summary-title"
        >
          Professional Summary
        </h2>
        <p itemProp="description">
          Senior Frontend Engineer with 6+ years of commercial experience
          specializing in React, Next.js, and TypeScript. Led a team of 5
          engineers and delivered performance-focused frontend systems with
          Lighthouse scores above 90 and technical SEO built into the
          architecture.
        </p>
      </section>

      <section className="mb-7 print:mb-3" aria-labelledby="skills-title">
        <h2
          className="mb-3 border-b border-[#cfc5b7] pb-1 font-serif text-xl font-bold print:mb-1 print:text-[12pt]"
          id="skills-title"
        >
          Technical Skills
        </h2>
        <dl className="space-y-1 print:space-y-0.5">
          {skills.map(([label, value]) => (
            <div key={label}>
              <dt className="inline font-semibold">{label}: </dt>
              <dd className="inline" itemProp="knowsAbout">
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="experience-title">
        <h2
          className="mb-4 border-b border-[#cfc5b7] pb-1 font-serif text-xl font-bold print:mb-1 print:text-[12pt]"
          id="experience-title"
        >
          Work Experience
        </h2>

        <div className="space-y-6 print:space-y-2">
          {roles.map((role) => (
            <section
              className="break-inside-avoid"
              key={role.company}
              itemScope
              itemType="https://schema.org/OrganizationRole"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <h3 className="font-semibold" itemProp="roleName">
                  {role.title} ·{" "}
                  <span itemProp="worksFor" itemScope itemType="https://schema.org/Organization">
                    <a
                      className="text-blue-700 underline decoration-blue-300 underline-offset-2"
                      href={role.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      itemProp="url"
                    >
                      <span itemProp="name">{role.company}</span>
                    </a>
                  </span>
                </h3>
                <p className="text-sm text-gray-600 print:text-[8.5pt]">
                  <meta itemProp="startDate" content={role.startDate} />
                  <meta itemProp="endDate" content={role.endDate} />
                  {role.date}
                </p>
              </div>
              <ul
                className="mt-2 list-disc space-y-1 pl-5 print:mt-0.5 print:space-y-0"
                itemProp="responsibilities"
              >
                {role.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </section>
          ))}

          <section className="break-inside-avoid">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-semibold">Earlier Frontend Experience</h3>
              <p className="text-sm text-gray-600 print:text-[8.5pt]">
                Oct 2020 — Jul 2023
              </p>
            </div>
            <p className="mt-1">
              Frontend Developer (Freelance) · Junior Frontend Developer (NDA)
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5 print:mt-0.5 print:space-y-0">
              <li>
                Built client and product interfaces with React, Redux, Next.js,
                and Vue.js; integrated REST APIs and authentication flows.
              </li>
              <li>
                Set up delivery with GitHub Actions and Vercel and collaborated
                with senior engineers through code reviews and sprint planning.
              </li>
            </ul>
          </section>

          <section
            className="break-inside-avoid"
            itemScope
            itemType="https://schema.org/CreativeWork"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-semibold" itemProp="name">
                Kyiv European University · Contract Project
              </h3>
              <p className="text-sm text-gray-600 print:text-[8.5pt]">
                Jan 2025 — Jun 2025
              </p>
            </div>
            <p className="mt-1" itemProp="description">
              Independently delivered a production React student system,
              owning frontend architecture, API integration, and deployment
              readiness.
            </p>
          </section>

          <section className="break-inside-avoid">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-semibold">Technical SEO & Performance Audits</h3>
              <p className="text-sm text-gray-600 print:text-[8.5pt]">
                Freelance
              </p>
            </div>
            <p className="mt-1">
              Completed 10+ commercial audits, improving PageSpeed results by
              30–50% and implementing Schema.org structured data.
            </p>
          </section>
        </div>
      </section>

      <footer className="mt-8 flex items-center justify-between border-t border-[#cfc5b7] pt-3 text-sm print:mt-3 print:pt-1.5 print:text-[9pt]">
        <span itemProp="knowsLanguage">English: B1/B2</span>
        <Link
          hrefLang="en"
          href="/blog"
          className="font-medium text-blue-700 underline decoration-blue-300 underline-offset-4"
          itemProp="sameAs"
        >
          abelous0v.xyz/blog →
        </Link>
      </footer>
    </article>
  );
}
