import Link from "next/link";
import { ArrowUpRight, Code, Database, Cpu, Dna, Terminal } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { skills, marqueeItems } from "@/lib/site";

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-brutalist-cream font-mono">
      <PageIntro
        eyebrow="CAPABILITIES & TOOLKIT"
        title="TECHNICAL SKILLS"
        description="The programming languages, machine learning frameworks, data analytics platforms, and computational biology toolkits I employ daily."
        accentColor="bg-brutalist-yellow"
      />

      <div className="mx-auto max-w-6xl px-6 py-10 md:px-10 md:py-16 lg:px-12 lg:py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skillGroup, index) => (
            <article
              key={skillGroup.group}
              className="flex flex-col justify-between border-4 border-brutalist-ink bg-white p-6 shadow-[6px_6px_0_0_#1a1a1a] transition-all hover:-translate-y-1 hover:shadow-[10px_10px_0_0_#1a1a1a]"
            >
              <div>
                <div className="flex items-center justify-between border-b-2 border-brutalist-ink pb-3">
                  <span className="border border-brutalist-ink bg-brutalist-yellow px-2 py-0.5 text-xs font-black uppercase text-brutalist-ink">
                    0{index + 1} // {skillGroup.tag}
                  </span>
                  <span className="h-2.5 w-2.5 bg-brutalist-red" />
                </div>

                <h3 className="mt-4 text-xl font-bold uppercase leading-tight text-brutalist-ink">
                  {skillGroup.group}
                </h3>

                <div className="mt-5 flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <span
                      key={item}
                      className="border-2 border-brutalist-ink bg-brutalist-cream px-2.5 py-1 text-xs font-bold uppercase text-brutalist-ink transition-colors hover:bg-brutalist-ink hover:text-brutalist-cream"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t-2 border-brutalist-ink pt-3 text-[10px] font-bold uppercase tracking-widest text-brutalist-muted">
                PRACTICED IN PRODUCTION & RESEARCH
              </div>
            </article>
          ))}
        </div>

        {/* Marquee ticker on skills page */}
        <div className="mt-16 border-4 border-brutalist-ink bg-brutalist-ink p-6 text-brutalist-cream">
          <div className="text-center text-xs font-bold uppercase tracking-widest text-brutalist-yellow">
            COMPREHENSIVE STACK SUMMARY
          </div>
          <p className="mt-4 text-center text-xs uppercase leading-relaxed text-brutalist-cream sm:text-sm">
            {marqueeItems.join(" • ")}
          </p>
        </div>
      </div>
    </div>
  );
}
