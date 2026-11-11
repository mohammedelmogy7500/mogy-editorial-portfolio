import Link from "next/link";
import { ArrowUpRight, GraduationCap, Award, Compass, BookOpen, MapPin, CheckCircle2 } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { site, education } from "@/lib/site";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-brutalist-cream font-mono">
      <PageIntro
        eyebrow="PROFILE & PHILOSOPHY"
        title="ABOUT ME"
        description="Curious by nature, rigorous by practice. I work across artificial intelligence, clinical computer vision, computational biology, and analytical engineering."
        accentColor="bg-brutalist-yellow"
      />

      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10 md:py-16 lg:px-12 lg:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-10">
            {/* Perspective */}
            <div className="border-4 border-brutalist-ink bg-white p-6 shadow-[6px_6px_0_0_#1a1a1a] md:p-8">
              <span className="border-2 border-brutalist-ink bg-brutalist-yellow px-2 py-0.5 text-xs font-black uppercase text-brutalist-ink">
                01 / PERSPECTIVE
              </span>
              <h2 className="mt-4 text-2xl font-bold uppercase leading-tight text-brutalist-ink sm:text-3xl">
                MAKING SENSE OF COMPLEX SYSTEMS
              </h2>
              <div className="mt-4 space-y-3 text-xs uppercase leading-relaxed tracking-wider text-brutalist-ink sm:text-sm">
                <p>
                  I’m Mohamed Waleed Elmogy, an AI Engineer and Data Analyst with an academic
                  background in Artificial Intelligence and Bioinformatics from Delta University
                  for Science and Technology.
                </p>
                <p>
                  My work focuses on translating intricate datasets — whether clinical X-ray
                  scans, multi-branch retail transactions, or genomic sequences — into transparent,
                  high-accuracy computational models.
                </p>
                <p>
                  I love every phase of the problem-solving cycle: formalizing the hypothesis,
                  auditing and cleaning raw data, architecting the model, and building
                  interpretability around the conclusions.
                </p>
              </div>
            </div>

            {/* Philosophy */}
            <div className="border-4 border-brutalist-ink bg-brutalist-cream p-6 shadow-[6px_6px_0_0_#1a1a1a] md:p-8">
              <span className="border-2 border-brutalist-ink bg-brutalist-teal px-2 py-0.5 text-xs font-black uppercase text-brutalist-cream">
                02 / PHILOSOPHY
              </span>
              <h2 className="mt-4 text-2xl font-bold uppercase leading-tight text-brutalist-ink sm:text-3xl">
                GOOD AI STARTS WITH DEEP DATA INTEGRITY
              </h2>
              <p className="mt-4 text-xs uppercase leading-relaxed tracking-wider text-brutalist-ink sm:text-sm">
                Too many AI projects fail not because of algorithm choice, but because the
                data pipeline is fragile. I prioritize rigorous exploratory data analysis,
                leakage-free validation, and clear communication of uncertainty before scaling.
              </p>
            </div>
          </div>

          {/* Right Column: Profile Photograph & Education */}
          <div className="lg:col-span-5 space-y-8">
            {/* Professional Profile Photograph Card */}
            <div className="border-4 border-brutalist-ink bg-white p-6 shadow-[8px_8px_0_0_#1a1a1a]">
              <div className="relative overflow-hidden border-4 border-brutalist-ink bg-brutalist-yellow">
                <img
                  src={site.avatar}
                  alt={site.name}
                  className="h-80 w-full object-cover object-center transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-3 right-3 rotate-3 border-2 border-brutalist-ink bg-brutalist-red px-2.5 py-1 text-[10px] font-black uppercase text-brutalist-cream shadow-[2px_2px_0_0_#1a1a1a]">
                  {site.nickname} ✦
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between border-t-2 border-brutalist-ink pt-3">
                <div>
                  <h3 className="text-base font-black uppercase text-brutalist-ink">
                    {site.name}
                  </h3>
                  <p className="text-[11px] font-bold uppercase text-brutalist-muted">
                    {site.role}
                  </p>
                </div>
                <span className="flex items-center gap-1 text-[10px] font-bold uppercase text-emerald-600 border border-brutalist-ink bg-emerald-50 px-2 py-1">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  AVAILABLE
                </span>
              </div>
            </div>

            {/* Education Card */}
            <div className="border-4 border-brutalist-ink bg-brutalist-yellow p-6 shadow-[8px_8px_0_0_#1a1a1a] md:p-8">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-brutalist-ink">
                <GraduationCap size={18} />
                <span>FORMAL EDUCATION</span>
              </div>
              <h3 className="mt-3 text-xl font-bold uppercase leading-tight text-brutalist-ink">
                {education.degree}
              </h3>
              <p className="mt-2 text-xs font-bold uppercase text-brutalist-ink/80">
                {education.institution}
              </p>
              <div className="mt-4 inline-block border-2 border-brutalist-ink bg-brutalist-ink px-3 py-1 text-xs font-bold uppercase text-brutalist-cream">
                GPA {education.gpa} · {education.period}
              </div>

              <div className="mt-6 border-t-2 border-brutalist-ink pt-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-brutalist-ink/70">
                  HIGHLIGHTS & THESIS
                </p>
                <ul className="mt-2 space-y-2">
                  {education.highlights.map((h, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs font-bold uppercase leading-snug text-brutalist-ink"
                    >
                      <span className="mt-1 inline-block h-2 w-2 shrink-0 bg-brutalist-red" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick attributes */}
            <div className="border-4 border-brutalist-ink bg-white p-6 shadow-[6px_6px_0_0_#1a1a1a]">
              <p className="text-xs font-bold uppercase tracking-widest text-brutalist-muted">
                PROFESSIONAL ATTRIBUTES
              </p>
              <ul className="mt-4 space-y-2.5">
                {[
                  "Medical Imaging & DICOM pipelines",
                  "Critical scientific inquiry & statistics",
                  "Cross-functional communication",
                  "Production-grade Python code & pipelines",
                  "Continuous learning in LLMs & ML research",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2.5 text-xs font-bold uppercase text-brutalist-ink"
                  >
                    <span className="inline-block h-2 w-2 bg-brutalist-ink" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t-2 border-brutalist-ink pt-4">
                <Link
                  href="/contact"
                  className="flex w-full items-center justify-center gap-2 border-2 border-brutalist-ink bg-brutalist-ink p-3 text-xs font-bold uppercase text-brutalist-cream hover:bg-brutalist-yellow hover:text-brutalist-ink"
                >
                  GET IN TOUCH →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
