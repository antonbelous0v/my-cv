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
    "Frontend Platform",
    "TypeScript, JavaScript, React 19, React Router with SSR, Next.js, Vite, HTML, CSS, SCSS, Tailwind, Three.js, WebGL, GLSL",
  ],
  [
    "Software Architecture",
    "Modular and layered architecture, vertical slices, bounded contexts, dependency injection, composition roots, ports and adapters, repository pattern, application services, MVVM, public API boundaries, separation of concerns, high cohesion and low coupling",
  ],
  [
    "State Management & APIs:",
    "Reatom, Redux Toolkit, REST, GraphQL, Apollo Client, DTO mapping, runtime data validation, optimistic updates, local-first architecture",
  ],
  [
    "SEO",
    "Semantic HTML, Schema.org, WHATWG standards, technical SEO audits, Screaming Frog SEO Spider, Google Search Console, Google Analytics 4, PageSpeed Insights, Google Trends, Google Keyword Planner, Ahrefs, DataForSEO, Surfer, AccuRanker",
  ],
  [
    "Quality, Testing & Performance",
    "Vitest, Playwright, React Testing Library, ESLint plugin development, architecture enforcement, GitHub Actions, CI/CD, benchmarking, accessibility testing, Core Web Vitals",
  ],
];

export default function CVTemplate() {
  return (
    <article
      className="cv mx-auto w-full max-w-5xl bg-transparent px-5 py-7 text-base leading-relaxed text-[#201d19] sm:px-8 md:px-10"
      itemScope
      itemType="https://schema.org/Person"
    >
      <header className="mb-8">
        <div className="grid grid-cols-[128px_minmax(0,1fr)] gap-x-4 gap-y-4 max-[767px]:grid-cols-[96px_1fr] max-[767px]:gap-x-3 md:grid-cols-[minmax(0,1fr)_200px] md:gap-x-8 md:gap-y-0">
          <div className="col-start-2 row-start-1 min-w-0 max-[767px]:self-center md:col-start-1">
            <h1
              className="font-serif text-[clamp(1.15rem,6vw,2.5rem)] font-bold leading-tight sm:text-5xl"
              itemProp="name"
            >
              Anton Belousov
            </h1>
            <p
              className="mt-1 text-2xl text-[#37312b] max-[767px]:text-lg"
              itemProp="jobTitle"
            >
              Senior Frontend Engineer
            </p>
          </div>

          <p className="col-start-2 row-start-2 mt-1 text-[#6d665e] max-md:mt-0 max-[767px]:col-span-2 md:col-start-1">
            React · TypeScript · Frontend Architecture · JavaScript Systems
          </p>

          <figure
            className="rounded-[2px] relative col-start-1 row-start-1 h-32 w-32 overflow-hidden justify-self-start rounded-lg max-[767px]:h-24 max-[767px]:w-24 md:col-start-2 md:row-span-3 md:h-auto md:w-full md:self-stretch md:justify-self-end"
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

          <address className="max-w-[500px] col-span-2 row-start-3 flex flex-wrap gap-x-4 gap-y-1 not-italic text-[#49423b] md:col-span-1 md:col-start-1 md:mt-2">
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

      <section className="mb-7" aria-labelledby="summary-title">
        <h2
          className="mb-3 border-b border-[#cfc5b7] pb-1 font-serif text-xl font-bold"
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

      <section className="mb-7" aria-labelledby="skills-title">
        <h2
          className="mb-3 border-b border-[#cfc5b7] pb-1 font-serif text-xl font-bold"
          id="skills-title"
        >
          Technical Skills
        </h2>
        <dl className="flex flex-col gap-[15px] space-y-1">
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

      <section className="mb-7" aria-labelledby="experience-title">
        <h2
          className="mb-4 border-b border-[#cfc5b7] pb-1 font-serif text-xl font-bold"
          id="experience-title"
        >
          Work Experience
        </h2>

        <div className="space-y-6">
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
                <p className="text-sm text-gray-600">
                  <meta itemProp="startDate" content={role.startDate} />
                  <meta itemProp="endDate" content={role.endDate} />
                  {role.date}
                </p>
              </div>
              <ul
                className="mt-2 list-disc space-y-1 pl-5"
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
              <p className="text-sm text-gray-600">
                Oct 2020 — Jul 2023
              </p>
            </div>
            <p className="mt-1">
              Frontend Developer (Freelance) · Junior Frontend Developer (NDA)
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
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


        </div>
      </section>

      <section aria-labelledby="projects-title">
        <h2
          className="mb-4 border-b border-[#cfc5b7] pb-1 font-serif text-xl font-bold"
          id="projects-title"
        >
          Selected Projects
        </h2>
        <div className="space-y-6">
          <section
            className="break-inside-avoid"
            itemScope
            itemType="https://schema.org/CreativeWork"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-semibold" itemProp="name">
                Student Management System — Kyiv European University
              </h3>
              <p className="text-sm text-gray-600">Jan 2025 — Jun 2025</p>
            </div>
            <p className="mt-1" itemProp="description">
              Contract project. Independently delivered a production React student
              system, owning frontend architecture, API integration, and deployment
              readiness.
            </p>
          </section>
          <section className="break-inside-avoid">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-semibold">Technical SEO & Performance Audits</h3>
              <p className="text-sm text-gray-600">Freelance, 10+ clients</p>
            </div>
            <p className="mt-1">
              Completed 10+ commercial audits, improving PageSpeed results by
              30–50% and implementing Schema.org structured data.
            </p>
          </section>
        </div>
      </section>

      <footer className="mt-8 flex items-center justify-between border-t border-[#cfc5b7] pt-3 text-sm">
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
