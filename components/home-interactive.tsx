"use client";

import { useState } from "react";
import { Check, Copy, ArrowUpRight, Mail, Github, Linkedin, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function ContactInteractive() {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleCopy = () => {
    navigator.clipboard.writeText(site.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    setFormSent(true);
    setTimeout(() => {
      setName("");
      setEmail("");
      setMessage("");
    }, 1500);
  };

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-12 lg:gap-12">
      {/* Left: Direct Info & Quick Copy */}
      <div className="lg:col-span-5 space-y-6">
        <div className="border-4 border-brutalist-ink bg-brutalist-yellow p-6 shadow-[6px_6px_0_0_#1a1a1a]">
          <p className="text-xs font-bold uppercase tracking-widest text-brutalist-ink/70">
            FASTEST CONTACT
          </p>
          <p className="mt-2 text-lg font-black uppercase text-brutalist-ink">
            DIRECT EMAIL
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:items-center">
            <span className="truncate border-2 border-brutalist-ink bg-brutalist-cream px-3 py-2 text-xs font-bold text-brutalist-ink sm:text-sm">
              {site.email}
            </span>
            <button
              onClick={handleCopy}
              className="inline-flex shrink-0 items-center justify-center gap-1.5 border-2 border-brutalist-ink bg-brutalist-ink px-4 py-2 text-xs font-bold uppercase text-brutalist-cream transition-transform hover:translate-x-0.5 hover:translate-y-0.5"
            >
              {copied ? (
                <>
                  <Check size={14} className="text-emerald-400" /> COPIED!
                </>
              ) : (
                <>
                  <Copy size={14} /> COPY
                </>
              )}
            </button>
          </div>
        </div>

        {/* Quick links */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between border-4 border-brutalist-ink bg-brutalist-cream p-4 font-mono text-xs font-bold uppercase text-brutalist-ink shadow-[4px_4px_0_0_#1a1a1a] transition-all hover:bg-brutalist-ink hover:text-brutalist-cream hover:shadow-none"
          >
            <span className="flex items-center gap-2">
              <Linkedin size={16} /> LINKEDIN
            </span>
            <ArrowUpRight size={16} />
          </a>

          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between border-4 border-brutalist-ink bg-brutalist-cream p-4 font-mono text-xs font-bold uppercase text-brutalist-ink shadow-[4px_4px_0_0_#1a1a1a] transition-all hover:bg-brutalist-ink hover:text-brutalist-cream hover:shadow-none"
          >
            <span className="flex items-center gap-2">
              <Github size={16} /> GITHUB
            </span>
            <ArrowUpRight size={16} />
          </a>

          <a
            href={`tel:${site.phone.replace(/\s+/g, "")}`}
            className="flex items-center justify-between border-4 border-brutalist-ink bg-brutalist-cream p-4 font-mono text-xs font-bold uppercase text-brutalist-ink shadow-[4px_4px_0_0_#1a1a1a] transition-all hover:bg-brutalist-ink hover:text-brutalist-cream hover:shadow-none"
          >
            <span className="flex items-center gap-2">
              <Phone size={16} /> {site.phone}
            </span>
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      {/* Right: Message Form */}
      <div className="lg:col-span-7">
        <div className="border-4 border-brutalist-ink bg-brutalist-cream p-6 shadow-[8px_8px_0_0_#1a1a1a] md:p-8">
          <p className="text-xs font-bold uppercase tracking-widest text-brutalist-muted">
            SEND A MESSAGE
          </p>
          <h3 className="mt-1 text-2xl font-bold uppercase tracking-tight text-brutalist-ink sm:text-3xl">
            LET&apos;S START A PROJECT
          </h3>

          {formSent ? (
            <div className="mt-6 border-4 border-brutalist-ink bg-brutalist-yellow p-6 text-center">
              <p className="text-base font-bold uppercase text-brutalist-ink">
                ✦ MESSAGE READY TO SEND!
              </p>
              <p className="mt-2 text-xs text-brutalist-ink">
                Thank you, {name || "friend"}! Feel free to also email directly at {site.email}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-brutalist-ink">
                  YOUR NAME *
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-2 w-full border-4 border-brutalist-ink bg-brutalist-cream px-4 py-3 font-mono text-sm text-brutalist-ink placeholder:text-brutalist-placeholder focus:bg-white focus:outline-none focus:ring-2 focus:ring-brutalist-yellow"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-brutalist-ink">
                  YOUR EMAIL *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 w-full border-4 border-brutalist-ink bg-brutalist-cream px-4 py-3 font-mono text-sm text-brutalist-ink placeholder:text-brutalist-placeholder focus:bg-white focus:outline-none focus:ring-2 focus:ring-brutalist-yellow"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-brutalist-ink">
                  PROJECT / INQUIRY DETAILS
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-2 w-full border-4 border-brutalist-ink bg-brutalist-cream px-4 py-3 font-mono text-sm text-brutalist-ink placeholder:text-brutalist-placeholder focus:bg-white focus:outline-none focus:ring-2 focus:ring-brutalist-yellow"
                />
              </div>

              <button
                type="submit"
                className="mt-4 flex w-full items-center justify-center gap-2 border-4 border-brutalist-ink bg-brutalist-ink px-6 py-4 text-sm font-bold uppercase tracking-wider text-brutalist-cream shadow-[6px_6px_0_0_#FF5A36] transition-transform hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
              >
                SUBMIT INQUIRY →
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

