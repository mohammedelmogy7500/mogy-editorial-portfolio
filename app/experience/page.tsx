import Link from "next/link";
import { ArrowUpRight, Award, Briefcase, GraduationCap, CheckCircle2 } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { experience, education, course, certificates } from "@/lib/site";

export default function ExperiencePage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-brutalist-cream font-mono">
      <PageIntro
        eyebrow="BACKGROUND & TRACK RECORD"
        title="APPLIED EXPERIENCE"
        description="A timeline of analytical, clinical research, and data engineering experience grounded in real datasets and certified specializations."
        accentColor="bg-brutalist-red"
      />

      <div className="mx-auto max-w-7xl 2xl:max-w-[1600px] px-6 py-10 md:px-10 md:py-16 lg:px-12 2xl:px-16 lg:py-20">
        {/* ========================================== */}
        {/* 1. PROFESSIONAL ROLES                     */}
        {/* ========================================== */}
        <div>
          <div className="mb-8 flex items-center justify-between border-b-4 border-brutalist-ink pb-4">
            <h2 className="text-2xl font-bold uppercase tracking-tight text-brutalist-ink sm:text-4xl">
              EXPERIENCE & RESEARCH
            </h2>
            <span className="border-2 border-brutalist-ink bg-brutalist-yellow px-2 py-1 text-xs font-black text-brutalist-ink">
              2022 — 2025
            </span>
          </div>

          <div className="space-y-8">
            {experience.map((item, index) => (
              <article
                key={index}
                className="border-4 border-brutalist-ink bg-white p-6 shadow-[8px_8px_0_0_#1a1a1a] md:p-8"
              >
                <div className="flex flex-col justify-between gap-2 border-b-2 border-brutalist-ink pb-4 sm:flex-row sm:items-center">
                  <div>
                    <span className="border border-brutalist-ink bg-brutalist-cream px-2 py-0.5 text-[10px] font-black uppercase text-brutalist-ink">
                      {item.type}
                    </span>
                    <h3 className="mt-2 text-xl font-bold uppercase text-brutalist-ink sm:text-2xl">
                      {item.role}
                    </h3>
                    <p className="text-xs font-bold uppercase text-brutalist-muted">
                      {item.organization}
                    </p>
                  </div>
                  <div className="border-2 border-brutalist-ink bg-brutalist-cream px-3 py-1 text-xs font-bold uppercase text-brutalist-ink">
                    {item.period}
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {item.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs font-bold uppercase leading-relaxed text-brutalist-ink sm:text-sm"
                    >
                      <span className="mt-1.5 inline-block h-2.5 w-2.5 shrink-0 bg-brutalist-red" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>

        {/* ========================================== */}
        {/* 2. SPECIAL TRAINING / DEPI GOOGLE PROGRAM  */}
        {/* ========================================== */}
        <div className="mt-16">
          <div className="border-4 border-brutalist-ink bg-brutalist-yellow p-6 shadow-[8px_8px_0_0_#1a1a1a] md:p-8">
            <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <span className="border-2 border-brutalist-ink bg-brutalist-ink px-2.5 py-0.5 text-xs font-black uppercase text-brutalist-yellow">
                  {course.badge}
                </span>
                <h3 className="mt-3 text-2xl font-bold uppercase text-brutalist-ink sm:text-3xl">
                  {course.name}
                </h3>
                <p className="text-xs font-bold uppercase text-brutalist-ink/80">
                  {course.provider} · {course.period}
                </p>
              </div>
            </div>
            <p className="mt-4 text-xs uppercase leading-relaxed tracking-wider text-brutalist-ink sm:text-sm">
              {course.description}
            </p>
          </div>
        </div>

        {/* ========================================== */}
        {/* 3. CERTIFICATIONS GRID                    */}
        {/* ========================================== */}
        <div className="mt-16">
          <div className="mb-8 flex items-center justify-between border-b-4 border-brutalist-ink pb-4">
            <h2 className="text-2xl font-bold uppercase tracking-tight text-brutalist-ink sm:text-4xl">
              CERTIFICATES & SPECIALIZATIONS
            </h2>
            <span className="border-2 border-brutalist-ink bg-brutalist-teal px-2 py-1 text-xs font-black text-brutalist-cream">
              {certificates.length} VERIFIED
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="flex flex-col justify-between border-4 border-brutalist-ink bg-brutalist-cream p-5 shadow-[4px_4px_0_0_#1a1a1a] transition-all hover:bg-white hover:shadow-[6px_6px_0_0_#1a1a1a]"
              >
                <div>
                  <div className="flex items-center justify-between text-[10px] font-black uppercase text-brutalist-muted">
                    <span>CERT #{String(index + 1).padStart(2, "0")}</span>
                    <span className="border border-brutalist-ink bg-brutalist-yellow/50 px-1.5 py-0.5 text-brutalist-ink">
                      {cert.category}
                    </span>
                  </div>
                  <h4 className="mt-3 text-sm font-bold uppercase leading-snug text-brutalist-ink">
                    {cert.title}
                  </h4>
                </div>
                <div className="mt-4 border-t-2 border-brutalist-ink pt-2 text-[10px] font-bold uppercase text-brutalist-muted">
                  {cert.issuer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
