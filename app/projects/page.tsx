import Link from "next/link";
import { ArrowUpRight, Github, ExternalLink, Sparkles } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { projects } from "@/lib/site";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-brutalist-cream font-mono">
      <PageIntro
        eyebrow="PORTFOLIO & RESEARCH / 01—06"
        title="SELECTED WORK"
        description="Applied machine learning, clinical computer vision, and computational biology projects I have built, benchmarked, or researched — complete with GitHub repositories and live demos."
        accentColor="bg-brutalist-cyan"
      />

      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10 md:py-16 lg:px-12 lg:py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group flex flex-col justify-between border-4 border-brutalist-ink bg-brutalist-cream p-6 shadow-[8px_8px_0_0_#1a1a1a] transition-all hover:-translate-y-1 hover:shadow-[12px_12px_0_0_#1a1a1a]"
            >
              <div>
                {/* Top header */}
                <div className="flex items-center justify-between border-b-2 border-brutalist-ink pb-3">
                  <span className="border-2 border-brutalist-ink bg-brutalist-yellow px-2 py-0.5 text-xs font-black text-brutalist-ink">
                    {project.number}
                  </span>
                  <span className="text-xs font-bold uppercase text-brutalist-muted">
                    {project.period}
                  </span>
                </div>

                {/* Title */}
                <h2 className="mt-4 text-2xl font-bold uppercase leading-tight text-brutalist-ink sm:text-3xl">
                  {project.title}
                </h2>

                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-brutalist-muted">
                  {project.category}
                </p>

                {/* Stat Pill */}
                <div className="mt-4 inline-block border-2 border-brutalist-ink bg-brutalist-teal px-3 py-1 text-xs font-black uppercase text-brutalist-cream">
                  {project.stat}
                </div>

                <p className="mt-4 text-xs leading-relaxed text-brutalist-ink sm:text-sm">
                  {project.summary}
                </p>

                {/* Details list */}
                <div className="mt-5 border-t-2 border-brutalist-ink pt-3">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-brutalist-muted">
                    KEY ACHIEVEMENTS & IMPLEMENTATION
                  </p>
                  <ul className="mt-2.5 space-y-2">
                    {project.details.map((detail, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs font-bold leading-snug text-brutalist-ink"
                      >
                        <span className="mt-1 inline-block h-2.5 w-2.5 shrink-0 bg-brutalist-red" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Stack & Links */}
              <div className="mt-8 border-t-2 border-brutalist-ink pt-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((t) => (
                    <span
                      key={t}
                      className="border border-brutalist-ink bg-white px-2 py-1 text-[11px] font-bold uppercase text-brutalist-ink"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action buttons: GitHub & Live Demo */}
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t-2 border-brutalist-ink pt-4">
                  <span className="text-[11px] font-bold uppercase text-brutalist-muted">
                    {project.status}
                  </span>
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 border-2 border-brutalist-ink bg-brutalist-ink px-3 py-1.5 text-xs font-bold uppercase text-brutalist-cream shadow-[2px_2px_0_0_#1a1a1a] transition-all hover:bg-brutalist-yellow hover:text-brutalist-ink"
                      >
                        <Github size={13} /> GITHUB
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 border-2 border-brutalist-ink bg-brutalist-yellow px-3 py-1.5 text-xs font-bold uppercase text-brutalist-ink shadow-[2px_2px_0_0_#1a1a1a] transition-all hover:bg-brutalist-ink hover:text-brutalist-cream"
                      >
                        <ExternalLink size={13} /> LIVE DEMO
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Footer info box */}
        <div className="mt-14 border-4 border-brutalist-ink bg-white p-6 shadow-[6px_6px_0_0_#1a1a1a] md:p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-brutalist-muted">
            SOURCE CODE REPOSITORIES & REPRODUCIBILITY
          </p>
          <p className="mt-2 text-xs uppercase leading-relaxed text-brutalist-ink sm:text-sm">
            All algorithms, training scripts, notebooks, and evaluation logs are actively maintained on GitHub.
            For dataset access, Colab notebooks, or live demos, feel free to inspect each repository directly.
          </p>
        </div>
      </div>
    </div>
  );
}
