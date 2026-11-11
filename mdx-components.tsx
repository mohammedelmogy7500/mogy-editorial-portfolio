import type { MDXComponents } from "mdx/types";
import Link from "next/link";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="mt-8 mb-4 text-3xl font-black uppercase leading-tight tracking-tight text-brutalist-ink sm:text-4xl lg:text-5xl border-b-4 border-brutalist-ink pb-3">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="mt-8 mb-4 inline-block border-2 border-brutalist-ink bg-brutalist-yellow px-3 py-1 text-xl font-bold uppercase tracking-tight text-brutalist-ink sm:text-2xl shadow-[3px_3px_0_0_#1a1a1a]">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-6 mb-3 text-lg font-bold uppercase tracking-wide text-brutalist-ink sm:text-xl">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="my-4 text-sm leading-relaxed text-brutalist-ink sm:text-base">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="my-4 space-y-2 border-l-4 border-brutalist-ink pl-4">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="my-4 list-decimal space-y-2 pl-6 text-sm font-bold sm:text-base">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="text-sm font-medium leading-relaxed text-brutalist-ink sm:text-base">
        {children}
      </li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-6 border-4 border-brutalist-ink bg-brutalist-yellow/20 p-4 font-mono text-sm font-bold uppercase text-brutalist-ink shadow-[4px_4px_0_0_#1a1a1a]">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="border border-brutalist-ink bg-brutalist-yellow/30 px-1.5 py-0.5 font-mono text-xs font-bold text-brutalist-ink">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <div className="my-6 overflow-hidden border-4 border-brutalist-ink bg-brutalist-ink shadow-[6px_6px_0_0_#1a1a1a]">
        <div className="flex items-center justify-between border-b-2 border-brutalist-cream/20 bg-brutalist-ink px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-brutalist-yellow">
          <span>CODE TERMINAL // SNIPPET</span>
          <span>PYTHON / CLI</span>
        </div>
        <pre className="overflow-x-auto p-4 font-mono text-xs text-brutalist-cream sm:text-sm">
          {children}
        </pre>
      </div>
    ),
    hr: () => <hr className="my-8 border-t-4 border-brutalist-ink" />,
    a: ({ href, children }) => (
      <Link
        href={href || "#"}
        className="font-bold underline decoration-brutalist-red decoration-2 hover:bg-brutalist-yellow"
      >
        {children}
      </Link>
    ),
    ...components,
  };
}

