import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Tag, Share2, Github } from "lucide-react";
import { site } from "@/lib/site";

export function ArticleLayout({
  title,
  category,
  date,
  readTime,
  summary,
  children,
}: {
  title: string;
  category: string;
  date: string;
  readTime: string;
  summary: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-brutalist-cream font-mono">
      {/* Top Navigation */}
      <div className="border-b-4 border-brutalist-ink bg-white px-6 py-4 lg:px-12">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <Link
            href="/notes"
            className="inline-flex items-center gap-2 border-2 border-brutalist-ink bg-brutalist-cream px-3 py-1.5 text-xs font-bold uppercase text-brutalist-ink shadow-[2px_2px_0_0_#1a1a1a] transition-transform hover:translate-x-0.5 hover:translate-y-0.5"
          >
            <ArrowLeft size={14} /> BACK TO ARTICLES
          </Link>
          <div className="flex items-center gap-2">
            <span className="border border-brutalist-ink bg-brutalist-yellow px-2 py-0.5 text-[10px] font-black uppercase">
              TECHNICAL NOTE
            </span>
          </div>
        </div>
      </div>

      {/* Article Header */}
      <header className="border-b-8 border-brutalist-ink bg-brutalist-yellow/30 px-6 py-12 lg:px-12 lg:py-16">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="border-2 border-brutalist-ink bg-brutalist-yellow px-3 py-1 text-xs font-black uppercase text-brutalist-ink shadow-[2px_2px_0_0_#1a1a1a]">
              {category}
            </span>
            <span className="flex items-center gap-1.5 text-xs font-bold uppercase text-brutalist-muted">
              <Calendar size={13} /> {date}
            </span>
            <span className="flex items-center gap-1.5 text-xs font-bold uppercase text-brutalist-muted">
              <Clock size={13} /> {readTime}
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-black uppercase leading-tight tracking-tight text-brutalist-ink sm:text-4xl md:text-5xl">
            {title}
          </h1>

          <div className="mt-4 h-3.5 w-32 border-2 border-brutalist-ink bg-brutalist-cyan" />

          <p className="mt-6 text-sm font-medium uppercase leading-relaxed text-brutalist-ink/90 sm:text-base border-l-4 border-brutalist-red pl-4">
            {summary}
          </p>

          <div className="mt-8 flex items-center gap-3 border-t-2 border-brutalist-ink pt-4">
            <img
              src={site.avatar}
              alt={site.name}
              className="h-10 w-10 border-2 border-brutalist-ink object-cover object-center"
            />
            <div>
              <p className="text-xs font-black uppercase text-brutalist-ink">{site.name}</p>
              <p className="text-[10px] font-bold uppercase text-brutalist-muted">{site.role}</p>
            </div>
          </div>
        </div>
      </header>

      {/* MDX Body Content */}
      <main className="mx-auto max-w-4xl px-6 py-12 lg:px-12 lg:py-16">
        <div className="border-4 border-brutalist-ink bg-white p-6 shadow-[8px_8px_0_0_#1a1a1a] sm:p-10 lg:p-12">
          {children}
        </div>

        {/* Footer callout */}
        <div className="mt-12 border-4 border-brutalist-ink bg-brutalist-cream p-6 shadow-[6px_6px_0_0_#1a1a1a] sm:p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-brutalist-muted">
            DISCUSS OR REPRODUCE
          </p>
          <h3 className="mt-2 text-xl font-bold uppercase text-brutalist-ink">
            QUESTIONS, FEEDBACK OR DATA COLLABORATIONS?
          </h3>
          <p className="mt-2 text-xs uppercase leading-relaxed text-brutalist-ink sm:text-sm">
            Have questions regarding this implementation or working on a similar machine learning problem?
            Reach out directly or explore the accompanying repositories on GitHub.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="border-2 border-brutalist-ink bg-brutalist-ink px-4 py-2 text-xs font-bold uppercase text-brutalist-cream shadow-[3px_3px_0_0_#FF5A36] hover:bg-brutalist-yellow hover:text-brutalist-ink"
            >
              CONTACT AUTHOR →
            </Link>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 border-2 border-brutalist-ink bg-brutalist-cream px-4 py-2 text-xs font-bold uppercase text-brutalist-ink shadow-[3px_3px_0_0_#1a1a1a] hover:bg-brutalist-ink hover:text-brutalist-cream"
            >
              <Github size={14} /> EXPLORE REPOSITORIES
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

