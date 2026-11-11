import Link from "next/link";
import { ArrowUpRight, BookOpen, Clock, Calendar } from "lucide-react";
import { PageIntro } from "@/components/page-intro";
import { notes } from "@/lib/site";

export default function NotesPage() {
  return (
    <div className="min-h-screen bg-brutalist-cream font-mono">
      <PageIntro
        eyebrow="FIELD NOTES & ARTICLES / 01—03"
        title="TECHNICAL ARTICLES"
        description="In-depth technical write-ups, reproducible code pipelines, and algorithmic reflections spanning medical AI, data engineering, and computational genomics."
        accentColor="bg-brutalist-cyan"
      />

      <div className="mx-auto max-w-6xl px-6 py-14 lg:px-12 lg:py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {notes.map((note, index) => (
            <article
              key={index}
              className="group flex flex-col justify-between border-4 border-brutalist-ink bg-white p-6 shadow-[6px_6px_0_0_#1a1a1a] transition-all hover:-translate-y-1 hover:shadow-[10px_10px_0_0_#1a1a1a]"
            >
              <div>
                <div className="flex items-center justify-between border-b-2 border-brutalist-ink pb-3">
                  <span className="border border-brutalist-ink bg-brutalist-yellow px-2 py-0.5 text-[10px] font-black uppercase text-brutalist-ink">
                    {note.category}
                  </span>
                  <span className="flex items-center gap-1 text-[10px] font-bold uppercase text-brutalist-muted">
                    <Clock size={11} /> {note.readTime}
                  </span>
                </div>

                <h2 className="mt-4 text-xl font-bold uppercase leading-snug text-brutalist-ink group-hover:text-brutalist-red sm:text-2xl">
                  <Link href={note.href}>{note.title}</Link>
                </h2>

                <p className="mt-4 text-xs leading-relaxed text-brutalist-ink sm:text-sm">
                  {note.description}
                </p>
              </div>

              <div className="mt-8 border-t-2 border-brutalist-ink pt-4">
                <div className="flex items-center justify-between text-xs font-bold uppercase">
                  <span className="text-[11px] font-bold text-brutalist-muted">{note.date}</span>
                  <Link
                    href={note.href}
                    className="inline-flex items-center gap-1.5 border-2 border-brutalist-ink bg-brutalist-ink px-3 py-1.5 text-xs font-bold uppercase text-brutalist-cream shadow-[2px_2px_0_0_#1a1a1a] transition-transform hover:bg-brutalist-yellow hover:text-brutalist-ink"
                  >
                    READ ARTICLE <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Info callout */}
        <div className="mt-14 border-4 border-brutalist-ink bg-brutalist-yellow p-6 shadow-[6px_6px_0_0_#1a1a1a] md:p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-brutalist-ink/70">
            TECHNICAL REPRODUCIBILITY & MDX
          </p>
          <h3 className="mt-2 text-xl font-black uppercase text-brutalist-ink">
            WRITTEN WITH INTERACTIVE MDX & OPEN REPOSITORIES
          </h3>
          <p className="mt-2 text-xs uppercase leading-relaxed text-brutalist-ink sm:text-sm">
            All articles are authored with Next.js MDX and include real Python code, mathematical formulas,
            and data pipeline architectures directly linked to active GitHub repositories.
          </p>
        </div>
      </div>
    </div>
  );
}
