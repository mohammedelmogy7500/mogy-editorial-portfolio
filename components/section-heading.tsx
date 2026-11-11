import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SectionHeading({
  eyebrow,
  title,
  href,
  linkLabel = "VIEW ALL",
}: {
  eyebrow: string;
  title: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="mb-10 flex flex-col justify-between gap-4 border-b-4 border-brutalist-ink pb-6 md:flex-row md:items-end">
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-brutalist-muted">
          {eyebrow}
        </p>
        <h2 className="mt-2 text-3xl font-bold uppercase leading-none tracking-tighter text-brutalist-ink sm:text-5xl">
          {title}
        </h2>
      </div>
      {href && (
        <Link
          href={href}
          className="inline-flex items-center gap-1.5 border-2 border-brutalist-ink bg-brutalist-cream px-4 py-2 text-xs font-bold uppercase text-brutalist-ink shadow-[3px_3px_0_0_#1a1a1a] transition-all hover:bg-brutalist-yellow hover:shadow-none"
        >
          {linkLabel} <ArrowUpRight size={14} />
        </Link>
      )}
    </div>
  );
}
