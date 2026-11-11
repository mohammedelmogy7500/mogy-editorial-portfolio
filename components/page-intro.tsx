export function PageIntro({
  eyebrow,
  title,
  description,
  accentColor = "bg-brutalist-cyan",
}: {
  eyebrow: string;
  title: string;
  description: string;
  accentColor?: string;
}) {
  return (
    <header className="border-b-4 border-brutalist-ink bg-brutalist-cream px-6 py-12 lg:px-12 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-bold uppercase tracking-widest text-brutalist-muted">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-4xl font-bold uppercase leading-none tracking-tighter text-brutalist-ink sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <div className={`mt-5 h-3.5 w-28 border-2 border-brutalist-ink ${accentColor}`} />
        <p className="mt-5 max-w-2xl text-xs uppercase leading-relaxed tracking-wider text-brutalist-ink sm:text-sm">
          {description}
        </p>
      </div>
    </header>
  );
}
