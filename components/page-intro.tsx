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
    <header className="border-b-4 border-brutalist-ink bg-brutalist-cream px-6 py-10 md:px-10 md:py-14 lg:px-12 2xl:px-16 lg:py-16">
      <div className="mx-auto max-w-7xl 2xl:max-w-[1600px]">
        <p className="text-xs font-bold uppercase tracking-widest text-brutalist-muted">
          {eyebrow}
        </p>
        <h1 className="mt-3 text-3xl font-bold uppercase leading-tight tracking-tight text-brutalist-ink sm:text-5xl lg:text-7xl">
          {title}
        </h1>
        <div className={`mt-5 h-3.5 w-28 border-2 border-brutalist-ink ${accentColor}`} />
        <p className="mt-5 max-w-3xl text-xs uppercase leading-relaxed tracking-wider text-brutalist-ink sm:text-sm">
          {description}
        </p>
      </div>
    </header>
  );
}
