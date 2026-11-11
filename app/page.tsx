import Link from "next/link";
import { ArrowUpRight, ArrowRight, Github, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";
import {
  site,
  services,
  projects,
  notes,
  marqueeItems,
  impactMetrics,
} from "@/lib/site";
import { ContactInteractive } from "@/components/home-interactive";

export default function HomePage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-brutalist-cream font-mono selection:bg-brutalist-red selection:text-brutalist-cream">
      {/* ============================================================== */}
      {/* 1. HERO SECTION (#about)                                       */}
      {/* ============================================================== */}
      <section
        id="about"
        className="overflow-hidden border-b-8 border-brutalist-ink px-6 py-14 md:px-12 2xl:px-16 md:py-20 2xl:py-28"
      >
        <div className="mx-auto grid max-w-7xl 2xl:max-w-[1600px] grid-cols-1 items-center gap-10 md:grid-cols-[1.2fr_auto] 2xl:grid-cols-[1.3fr_auto] md:gap-12 lg:gap-16">
          {/* Left Column: Heading & CTAs */}
          <div className="flex min-w-0 flex-col items-center text-center md:items-start md:text-left">
            {/* Mobile avatar */}
            <div className="mb-5 flex justify-center md:hidden">
              <div className="relative h-28 w-28 overflow-hidden border-4 border-brutalist-ink bg-brutalist-yellow shadow-[4px_4px_0_0_#d92626]">
                <img
                  src={site.avatar}
                  alt={site.name}
                  className="h-full w-full object-cover object-center"
                />
              </div>
            </div>

            {/* Massive Display Title */}
            <h1 className="text-[13vw] font-bold uppercase leading-[0.92] tracking-tighter text-brutalist-ink sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl">
              <span className="block">
                <span className="inline-flex flex-wrap justify-center gap-2 md:justify-start">
                  <span>HEY,</span>
                  <span>IT&apos;S</span>
                </span>
              </span>
              <span className="mt-2 inline-flex items-center justify-center gap-2 md:justify-start">
                <span className="inline-block border-4 border-brutalist-ink bg-brutalist-yellow px-3 py-1 shadow-[4px_4px_0_0_#1a1a1a]">
                  {site.nickname}
                </span>
              </span>
            </h1>

            {/* Subheading & Bio */}
            <p className="mt-7 max-w-xl 2xl:max-w-2xl text-sm font-bold uppercase leading-snug text-brutalist-ink md:text-lg">
              AI Engineer, Data Analyst,
              <br className="md:hidden" /> and Bioinformatics Researcher
            </p>

            <p className="mt-3 max-w-xl 2xl:max-w-2xl text-xs uppercase leading-relaxed tracking-wider text-brutalist-muted sm:text-sm">
              Building thoughtful AI for real-world problems. Turning medical imaging
              data, complex healthcare workflows, and business transactions into high-precision
              neural predictions and actionable intelligence.
            </p>

            {/* Neo-brutalist CTA Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
              <a
                href="#services"
                className="border-4 border-brutalist-ink bg-brutalist-ink px-5 py-3 text-xs font-bold uppercase text-brutalist-cream shadow-[6px_6px_0_0_#FF5A36] transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none md:text-sm"
              >
                Let&apos;s work together →
              </a>
              <a
                href="#companies"
                className="border-4 border-brutalist-ink bg-brutalist-cream px-5 py-3 text-xs font-bold uppercase text-brutalist-ink shadow-[6px_6px_0_0_#00E5FF] transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none md:text-sm"
              >
                AI for your company? ↗
              </a>
            </div>

            {/* Quick status pills */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider md:justify-start">
              <span className="border-2 border-brutalist-ink bg-brutalist-cream px-2.5 py-1">
                📍 {site.location}
              </span>
              <span className="border-2 border-brutalist-ink bg-emerald-100 px-2.5 py-1 text-emerald-900">
                🟢 AVAILABLE FOR CONTRACTS
              </span>
              <span className="border-2 border-brutalist-ink bg-brutalist-yellow/30 px-2.5 py-1">
                B.SC. AI & BIOINFORMATICS
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Brutalist Graphic Card with Real Photo */}
          <div className="hidden justify-center md:flex md:justify-end">
            <div className="relative w-72 border-4 border-brutalist-ink bg-brutalist-cream p-5 shadow-[10px_10px_0_0_#1a1a1a] lg:w-96 2xl:w-[440px] lg:p-6 2xl:p-8">
              {/* Rotated badge */}
              <div className="absolute -top-4 -right-4 rotate-3 border-4 border-brutalist-ink bg-brutalist-red px-3 py-1 text-[11px] font-black uppercase text-brutalist-cream shadow-[3px_3px_0_0_#1a1a1a]">
                MORE FUN THIS WAY ✦
              </div>

              {/* Real Photograph in Brutalist Frame */}
              <div className="relative overflow-hidden border-4 border-brutalist-ink bg-brutalist-yellow">
                <img
                  src={site.avatar}
                  alt={site.name}
                  className="h-56 w-full object-cover object-center transition-transform duration-300 hover:scale-105 lg:h-72 2xl:h-96"
                />
                <div className="absolute bottom-2 left-2 border-2 border-brutalist-ink bg-brutalist-ink px-2 py-0.5 text-[10px] font-black uppercase text-brutalist-yellow">
                  {site.nickname} // AI LAB
                </div>
              </div>

              {/* Title under image */}
              <div className="mt-4 border-b-2 border-brutalist-ink pb-3 text-center">
                <h3 className="text-base font-black uppercase text-brutalist-ink">
                  {site.name}
                </h3>
                <p className="text-[11px] font-bold uppercase tracking-wider text-brutalist-muted">
                  DELTA UNIVERSITY GRADUATE &middot; 2025
                </p>
              </div>

              {/* Quick stats grid inside card */}
              <div className="mt-4 space-y-2.5">
                <div className="flex items-center justify-between border-2 border-brutalist-ink bg-white p-2 text-xs font-bold uppercase">
                  <span className="text-brutalist-muted">DIAGNOSIS AI</span>
                  <span className="border border-brutalist-ink bg-brutalist-teal px-1.5 py-0.5 text-brutalist-cream">
                    97% ACCURACY
                  </span>
                </div>
                <div className="flex items-center justify-between border-2 border-brutalist-ink bg-white p-2 text-xs font-bold uppercase">
                  <span className="text-brutalist-muted">DATA WRANGLED</span>
                  <span className="border border-brutalist-ink bg-brutalist-yellow px-1.5 py-0.5 text-brutalist-ink">
                    10K+ ROWS
                  </span>
                </div>
                <div className="flex items-center justify-between border-2 border-brutalist-ink bg-white p-2 text-xs font-bold uppercase">
                  <span className="text-brutalist-muted">GENOMICS & BIO</span>
                  <span className="border border-brutalist-ink bg-brutalist-red px-1.5 py-0.5 text-brutalist-cream">
                    BLAST / FASTA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 2. SERVICES SECTION (#services)                                */}
      {/* ============================================================== */}
      <section
        id="services"
        className="border-b-8 border-brutalist-ink bg-brutalist-cream px-6 py-14 md:px-12 2xl:px-16 md:py-24"
      >
        <div className="mx-auto max-w-7xl 2xl:max-w-[1600px]">
          <div className="mb-10 text-center md:mb-14 md:text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-brutalist-muted">
              CORE DISCIPLINES & VALUE DELIVERED
            </p>
            <h2 className="mt-2 text-4xl font-bold uppercase leading-none tracking-tighter text-brutalist-ink md:text-6xl">
              LET&apos;S WORK TOGETHER
            </h2>
            <p className="mt-3 max-w-2xl text-xs uppercase leading-relaxed tracking-wider text-brutalist-muted sm:text-sm">
              Practical, production-grade intelligence. From training radiological
              neural models to structuring executive analytics dashboards.
            </p>
          </div>

          {/* 3 Brutalist Cards Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="group flex flex-col justify-between border-4 border-brutalist-ink bg-brutalist-cream p-6 shadow-[6px_6px_0_0_#1a1a1a] transition-all hover:-translate-y-1 hover:shadow-[10px_10px_0_0_#1a1a1a]"
              >
                <div>
                  <div className="flex items-center justify-between border-b-2 border-brutalist-ink pb-3">
                    <span className="text-xs font-black uppercase tracking-widest text-brutalist-ink">
                      {service.number} // {service.tag}
                    </span>
                    <span className="h-3 w-3 border-2 border-brutalist-ink bg-brutalist-yellow" />
                  </div>

                  <h3 className="mt-4 text-xl font-bold uppercase leading-tight text-brutalist-ink sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-1 text-xs font-bold uppercase text-brutalist-muted">
                    {service.subtitle}
                  </p>

                  <p className="mt-4 text-xs leading-relaxed text-brutalist-ink sm:text-sm">
                    {service.description}
                  </p>

                  <div className="mt-6 border-t-2 border-brutalist-ink pt-4">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-brutalist-muted">
                      DELIVERABLES & METHODS
                    </p>
                    <ul className="mt-3 space-y-2">
                      {service.deliverables.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs font-bold uppercase leading-tight text-brutalist-ink"
                        >
                          <span className="mt-1 inline-block h-2.5 w-2.5 shrink-0 bg-brutalist-red" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 border-t-2 border-brutalist-ink pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brutalist-ink hover:text-brutalist-red hover:underline"
                  >
                    INQUIRE ABOUT THIS →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 3. FOR COMPANIES & TEAMS BANNER (#companies)                   */}
      {/* ============================================================== */}
      <section
        id="companies"
        className="border-b-8 border-brutalist-ink bg-brutalist-teal px-6 py-14 md:px-12 2xl:px-16 md:py-20"
      >
        <div className="mx-auto grid max-w-7xl 2xl:max-w-[1600px] grid-cols-1 items-center gap-10 md:grid-cols-[1.1fr_0.9fr] 2xl:grid-cols-[1.2fr_0.8fr] md:gap-14 2xl:gap-16">
          <div>
            <p className="text-xs font-bold tracking-widest text-brutalist-ink/70">
              FOR LABS, CLINICS & ORGANIZATIONS
            </p>
            <h2 className="mt-3 text-4xl font-bold uppercase leading-none tracking-tighter text-brutalist-ink md:text-6xl">
              AI FOR YOUR ORGANIZATION?
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-brutalist-ink md:text-base">
              Then you&apos;re in the right place. I help healthcare startups, research teams,
              and businesses adopt applied AI — building computer vision diagnostics,
              automating high-volume data cleaning, and creating predictive pipelines
              that eliminate guesswork.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center gap-2 border-4 border-brutalist-ink bg-brutalist-ink px-6 py-3 text-xs font-bold uppercase text-brutalist-cream shadow-[4px_4px_0_0_#F7F3E8] transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none md:text-sm"
              >
                <Github size={16} /> VISIT GITHUB REPOSITORIES
              </a>
              <Link
                href="/projects"
                className="inline-flex min-h-12 items-center gap-2 border-4 border-brutalist-ink bg-brutalist-cream px-6 py-3 text-xs font-bold uppercase text-brutalist-ink shadow-[4px_4px_0_0_#1a1a1a] transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none md:text-sm"
              >
                VIEW ALL PROJECTS →
              </Link>
            </div>
          </div>

          <div>
            <div className="border-4 border-brutalist-ink bg-brutalist-cream p-6 shadow-[8px_8px_0_0_#141414] md:p-8">
              <p className="text-[10px] font-bold uppercase tracking-widest text-brutalist-muted">
                WHAT I DELIVER WITH TEAMS
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "Medical imaging disease classification & OpenCV workflows",
                  "Automated data wrangling, cleaning & validation pipelines",
                  "Applied machine learning modeling & accuracy auditing",
                  "Executive analytics dashboards in Power BI & Tableau",
                  "Genomic sequence parsing & BLAST alignment scripts",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 border-t-2 border-brutalist-ink pt-3 text-xs font-bold uppercase leading-snug text-brutalist-ink md:text-sm"
                  >
                    <span className="mt-1 inline-block h-3 w-3 shrink-0 bg-brutalist-red" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex items-center justify-between border-t-2 border-brutalist-ink pt-3 text-[10px] font-bold uppercase tracking-widest text-brutalist-ink/70">
                <span>PORTFOLIO & LAB</span>
                <span>mohammedelmogy7500.github.io</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 4. APPLIED EXPERIENCE & EDUCATION BANNER                       */}
      {/* ============================================================== */}
      <section className="border-b-8 border-brutalist-ink bg-brutalist-yellow px-6 py-14 md:px-12 2xl:px-16 md:py-20">
        <div className="mx-auto max-w-7xl 2xl:max-w-[1600px]">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold tracking-widest text-brutalist-ink/70">
                ACADEMIC & PROFESSIONAL FOUNDATION
              </p>
              <h2 className="mt-3 text-4xl font-bold uppercase leading-none tracking-tighter text-brutalist-ink md:text-6xl">
                HANDS-ON APPLIED EXPERIENCE
              </h2>
              <p className="mt-3 text-xs uppercase leading-relaxed tracking-wider text-brutalist-ink/80 sm:text-sm">
                4 years of applied artificial intelligence, clinical bioinformatics, and
                data wrangling at Delta University and through professional initiatives.
              </p>
            </div>
            <div>
              <Link
                href="/experience"
                className="inline-flex items-center gap-2 border-4 border-brutalist-ink bg-brutalist-ink px-6 py-3.5 text-xs font-bold uppercase text-brutalist-cream shadow-[4px_4px_0_0_#ffffff] transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none sm:text-sm"
              >
                VIEW FULL TIMELINE →
              </Link>
            </div>
          </div>

          {/* 4 Metric Highlight Cards */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {impactMetrics.map((metric, i) => (
              <div
                key={i}
                className="border-4 border-brutalist-ink bg-brutalist-cream p-5 shadow-[6px_6px_0_0_#1a1a1a]"
              >
                <div className="text-3xl font-black uppercase tracking-tight text-brutalist-ink lg:text-4xl">
                  {metric.value}
                </div>
                <div className="mt-2 text-xs font-black uppercase tracking-wider text-brutalist-red">
                  {metric.label}
                </div>
                <div className="mt-1 text-[11px] font-bold uppercase text-brutalist-muted">
                  {metric.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 5. SELECTED WORK / PROJECTS (#projects)                        */}
      {/* ============================================================== */}
      <section
        id="projects"
        className="border-b-8 border-brutalist-ink bg-brutalist-cream px-6 py-14 md:px-12 2xl:px-16 md:py-24"
      >
        <div className="mx-auto max-w-7xl 2xl:max-w-[1600px]">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end md:mb-14">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-brutalist-muted">
                PORTFOLIO & CASE STUDIES
              </p>
              <h2 className="mt-2 text-4xl font-bold uppercase leading-none tracking-tighter text-brutalist-ink md:text-6xl">
                SELECTED WORK
              </h2>
            </div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 border-4 border-brutalist-ink bg-brutalist-cream px-5 py-2.5 text-xs font-bold uppercase text-brutalist-ink shadow-[4px_4px_0_0_#1a1a1a] hover:bg-brutalist-yellow"
            >
              ALL PROJECTS ({projects.length}) →
            </Link>
          </div>

          {/* Projects Cards with GitHub & Demo buttons */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.slice(0, 4).map((proj) => (
              <article
                key={proj.slug}
                className="group flex flex-col justify-between border-4 border-brutalist-ink bg-brutalist-cream p-6 shadow-[8px_8px_0_0_#1a1a1a] transition-all hover:-translate-y-1 hover:shadow-[12px_12px_0_0_#1a1a1a]"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between border-b-2 border-brutalist-ink pb-3">
                    <span className="border-2 border-brutalist-ink bg-brutalist-yellow px-2 py-0.5 text-xs font-black text-brutalist-ink">
                      {proj.number}
                    </span>
                    <span className="text-xs font-bold uppercase text-brutalist-muted">
                      {proj.period}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <h3 className="mt-4 text-2xl font-bold uppercase leading-tight text-brutalist-ink group-hover:text-brutalist-red sm:text-3xl">
                    {proj.title}
                  </h3>

                  <p className="mt-1 text-xs font-bold uppercase tracking-wider text-brutalist-muted">
                    {proj.category}
                  </p>

                  {/* Highlight Stat Pill */}
                  <div className="mt-4 inline-block border-2 border-brutalist-ink bg-brutalist-teal px-2.5 py-1 text-xs font-black uppercase text-brutalist-cream">
                    {proj.stat}
                  </div>

                  <p className="mt-4 text-xs leading-relaxed text-brutalist-ink sm:text-sm">
                    {proj.summary}
                  </p>

                  {/* Bullet points */}
                  <ul className="mt-4 space-y-2 border-t-2 border-brutalist-ink pt-3">
                    {proj.details.slice(0, 3).map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs font-bold leading-snug text-brutalist-ink"
                      >
                        <span className="mt-1 inline-block h-2 w-2 shrink-0 bg-brutalist-ink" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Tags & Actions */}
                <div className="mt-8 border-t-2 border-brutalist-ink pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.stack.map((t) => (
                      <span
                        key={t}
                        className="border border-brutalist-ink bg-white px-2 py-1 text-[11px] font-bold uppercase text-brutalist-ink"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Repos & Live Demos */}
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t-2 border-brutalist-ink pt-3">
                    <span className="text-[11px] font-bold uppercase text-brutalist-muted">
                      {proj.status}
                    </span>
                    <div className="flex items-center gap-2">
                      {proj.github && (
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 border-2 border-brutalist-ink bg-brutalist-ink px-2.5 py-1 text-xs font-bold uppercase text-brutalist-cream hover:bg-brutalist-yellow hover:text-brutalist-ink"
                        >
                          <Github size={12} /> REPO
                        </a>
                      )}
                      {proj.demo && (
                        <a
                          href={proj.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 border-2 border-brutalist-ink bg-brutalist-yellow px-2.5 py-1 text-xs font-bold uppercase text-brutalist-ink hover:bg-brutalist-ink hover:text-brutalist-cream"
                        >
                          <ExternalLink size={12} /> LIVE DEMO
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 6. IMPACT & SKILLS MARQUEE TICKER                              */}
      {/* ============================================================== */}
      <section className="border-b-8 border-brutalist-ink bg-brutalist-ink py-6 text-brutalist-cream">
        <div className="overflow-hidden whitespace-nowrap">
          <div className="inline-flex animate-brutalist-marquee marquee-track">
            {marqueeItems.concat(marqueeItems).map((item, idx) => (
              <span
                key={idx}
                className="mx-6 inline-flex items-center text-sm font-black uppercase tracking-widest text-brutalist-cream sm:text-base md:text-lg"
              >
                <span>{item}</span>
                <span className="ml-6 text-brutalist-yellow">✦</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 7. LATEST NOTES & WRITING (#notes)                             */}
      {/* ============================================================== */}
      <section
        id="notes"
        className="border-b-8 border-brutalist-ink bg-brutalist-cream px-6 py-14 md:px-12 2xl:px-16 md:py-20"
      >
        <div className="mx-auto max-w-7xl 2xl:max-w-[1600px]">
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end md:mb-12">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-brutalist-muted">
                LATEST FROM THE FIELD NOTEBOOK
              </p>
              <h2 className="mt-2 text-4xl font-bold uppercase leading-none tracking-tighter text-brutalist-ink md:text-6xl">
                TECHNICAL ARTICLES
              </h2>
            </div>
            <Link
              href="/notes"
              className="inline-flex items-center gap-1.5 border-4 border-brutalist-ink bg-brutalist-cream px-5 py-2.5 text-xs font-bold uppercase text-brutalist-ink shadow-[4px_4px_0_0_#1a1a1a] hover:bg-brutalist-yellow"
            >
              ALL ARTICLES ({notes.length}) →
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {notes.map((note, idx) => (
              <article
                key={idx}
                className="group flex flex-col justify-between border-4 border-brutalist-ink bg-white p-6 shadow-[6px_6px_0_0_#1a1a1a] transition-all hover:-translate-y-1 hover:shadow-[10px_10px_0_0_#1a1a1a]"
              >
                <div>
                  <div className="flex items-center justify-between border-b-2 border-brutalist-ink pb-2.5">
                    <span className="border border-brutalist-ink bg-brutalist-yellow/40 px-2 py-0.5 text-[10px] font-black uppercase">
                      {note.category}
                    </span>
                    <span className="text-[10px] font-bold uppercase text-brutalist-muted">
                      {note.readTime}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-bold uppercase leading-snug text-brutalist-ink group-hover:text-brutalist-red">
                    <Link href={note.href}>{note.title}</Link>
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-brutalist-muted">
                    {note.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t-2 border-brutalist-ink pt-3 text-xs font-bold uppercase">
                  <span className="text-brutalist-muted">{note.date}</span>
                  <Link
                    href={note.href}
                    className="inline-flex items-center gap-1 text-brutalist-ink hover:text-brutalist-red hover:underline"
                  >
                    READ ARTICLE →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================== */}
      {/* 8. CONTACT & INQUIRY SECTION (#contact)                         */}
      {/* ============================================================== */}
      <section
        id="contact"
        className="border-b-8 border-brutalist-ink bg-brutalist-cream px-6 py-14 md:px-12 2xl:px-16 md:py-24"
      >
        <div className="mx-auto max-w-7xl 2xl:max-w-[1600px]">
          <div className="mb-10 text-center md:mb-14 md:text-left">
            <p className="text-xs font-bold uppercase tracking-widest text-brutalist-muted">
              START A CONVERSATION
            </p>
            <h2 className="mt-2 text-4xl font-bold uppercase leading-none tracking-tighter text-brutalist-ink md:text-6xl">
              GET IN TOUCH
            </h2>
            <p className="mt-3 max-w-xl text-xs uppercase leading-relaxed tracking-wider text-brutalist-muted sm:text-sm">
              Open to machine learning contracts, healthcare AI initiatives, clinical
              computer vision research, and technical consultations.
            </p>
          </div>

          <ContactInteractive />
        </div>
      </section>
    </div>
  );
}
