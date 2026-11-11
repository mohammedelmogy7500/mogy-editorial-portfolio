"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { site, navigation } from "@/lib/site";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b-4 border-brutalist-ink bg-brutalist-cream">
      <div className="mx-auto flex h-20 max-w-7xl 2xl:max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8 2xl:px-12">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="Go to homepage"
        >
          <div className="flex flex-col">
            <span className="text-sm font-black uppercase tracking-widest text-brutalist-ink sm:text-base">
              MOHAMED
            </span>
            <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-brutalist-muted">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              {site.location} · AVAILABLE
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main Navigation">
          {navigation.map((item) => {
            const isActive = item.isHash
              ? false
              : pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`border-2 px-3 py-1.5 text-xs font-bold uppercase tracking-widest transition-all ${isActive
                    ? "border-brutalist-ink bg-brutalist-ink text-brutalist-cream shadow-[2px_2px_0_0_#1a1a1a]"
                    : "border-transparent text-brutalist-ink hover:border-brutalist-ink hover:bg-brutalist-ink hover:text-brutalist-cream"
                  }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden items-center gap-1.5 border-4 border-brutalist-ink bg-brutalist-ink px-4 py-2 text-xs font-bold uppercase tracking-wider text-brutalist-cream shadow-[4px_4px_0_0_#FF5A36] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none sm:inline-flex"
          >
            LET&apos;S TALK <ArrowUpRight size={14} />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-11 w-11 items-center justify-center border-4 border-brutalist-ink bg-brutalist-cream shadow-[3px_3px_0_0_#1a1a1a] transition-all hover:bg-brutalist-yellow lg:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={22} className="stroke-[3]" /> : <Menu size={22} className="stroke-[3]" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="border-t-4 border-brutalist-ink bg-brutalist-cream p-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {navigation.map((item) => {
              const isActive = item.isHash
                ? false
                : pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block border-4 border-brutalist-ink px-5 py-3 text-base font-bold uppercase tracking-wider transition-colors ${isActive
                      ? "bg-brutalist-ink text-brutalist-cream"
                      : "bg-brutalist-cream text-brutalist-ink hover:bg-brutalist-yellow"
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 block border-4 border-brutalist-ink bg-brutalist-ink px-5 py-3.5 text-center text-base font-bold uppercase tracking-wider text-brutalist-cream shadow-[4px_4px_0_0_#FF5A36]"
            >
              LET&apos;S WORK TOGETHER →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
