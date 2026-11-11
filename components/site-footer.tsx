"use client";

import Link from "next/link";
import { ArrowUpRight, ArrowUp, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { site, navigation } from "@/lib/site";

export function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t-8 border-brutalist-ink bg-brutalist-ink font-mono text-brutalist-cream">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-12 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand & Manifesto */}
          <div className="lg:col-span-5">
            <div className="inline-block border-4 border-brutalist-cream bg-brutalist-yellow px-3 py-1 text-sm font-black text-brutalist-ink">
              {site.nickname} ✦
            </div>
            <h2 className="mt-4 text-2xl font-black uppercase tracking-tight text-brutalist-cream sm:text-3xl">
              {site.name}
            </h2>
            <p className="mt-3 max-w-md text-xs uppercase leading-relaxed tracking-wider text-brutalist-cream/80">
              {site.role}
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-brutalist-cream/70">
              {site.headline} Specialized in deep learning computer vision for medical imaging,
              genomic sequence analysis, and enterprise data wrangling.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brutalist-yellow">
              <MapPin size={14} />
              BASED IN {site.location} · {site.availability}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3">
            <p className="text-xs font-bold uppercase tracking-widest text-brutalist-cream/60">
              NAVIGATION
            </p>
            <ul className="mt-4 space-y-2.5">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="inline-block text-sm font-bold uppercase tracking-wider text-brutalist-cream hover:text-brutalist-yellow hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect / Socials */}
          <div className="lg:col-span-4">
            <p className="text-xs font-bold uppercase tracking-widest text-brutalist-cream/60">
              CHANNELS & CONNECT
            </p>
            <div className="mt-4 space-y-3">
              <a
                href={`mailto:${site.email}`}
                className="group flex items-center justify-between border-2 border-brutalist-cream/30 bg-brutalist-cream/5 p-3 text-xs font-bold uppercase text-brutalist-cream transition-colors hover:border-brutalist-yellow hover:bg-brutalist-yellow hover:text-brutalist-ink"
              >
                <span className="flex items-center gap-2 truncate">
                  <Mail size={14} className="shrink-0" />
                  <span className="truncate">{site.email}</span>
                </span>
                <ArrowUpRight size={14} className="shrink-0" />
              </a>

              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-2 border-brutalist-cream/30 bg-brutalist-cream/5 p-3 text-xs font-bold uppercase text-brutalist-cream transition-colors hover:border-brutalist-yellow hover:bg-brutalist-yellow hover:text-brutalist-ink"
              >
                <span className="flex items-center gap-2">
                  <Linkedin size={14} />
                  <span>LINKEDIN</span>
                </span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border-2 border-brutalist-cream/30 bg-brutalist-cream/5 p-3 text-xs font-bold uppercase text-brutalist-cream transition-colors hover:border-brutalist-yellow hover:bg-brutalist-yellow hover:text-brutalist-ink"
              >
                <span className="flex items-center gap-2">
                  <Github size={14} />
                  <span>GITHUB</span>
                </span>
                <ArrowUpRight size={14} />
              </a>

              <a
                href={`tel:${site.phone.replace(/\s+/g, "")}`}
                className="group flex items-center justify-between border-2 border-brutalist-cream/30 bg-brutalist-cream/5 p-3 text-xs font-bold uppercase text-brutalist-cream transition-colors hover:border-brutalist-yellow hover:bg-brutalist-yellow hover:text-brutalist-ink"
              >
                <span className="flex items-center gap-2">
                  <Phone size={14} />
                  <span>{site.phone}</span>
                </span>
                <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t-2 border-brutalist-cream/20 pt-8 sm:flex-row">
          <p className="text-xs font-bold uppercase tracking-wider text-brutalist-cream/60">
            © {new Date().getFullYear()} {site.name.toUpperCase()} — ALL RIGHTS RESERVED.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 border-2 border-brutalist-cream px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-brutalist-cream transition-colors hover:bg-brutalist-cream hover:text-brutalist-ink"
          >
            BACK TO TOP <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}
