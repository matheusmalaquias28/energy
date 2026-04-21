import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-[clamp(2rem,4vw,3.5rem)] font-bold text-white leading-tight mb-8 mt-0">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold text-white leading-tight mt-14 mb-5">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold text-white mt-10 mb-4">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-white/60 leading-relaxed mb-6 text-base lg:text-lg">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="text-white/60 leading-relaxed mb-6 space-y-2 list-none pl-0">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="text-white/60 leading-relaxed mb-6 space-y-2 list-decimal pl-6">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="flex items-start gap-2 before:content-['→'] before:text-[#FE4101] before:flex-shrink-0 before:mt-0.5">
        <span>{children}</span>
      </li>
    ),
    strong: ({ children }) => (
      <strong className="text-white font-semibold">{children}</strong>
    ),
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-[#FE4101] hover:text-white transition-colors underline underline-offset-4"
      >
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-2 border-[#FE4101] pl-6 my-8 text-white/50 italic">
        {children}
      </blockquote>
    ),
    hr: () => <hr className="border-white/8 my-12" />,
    ...components,
  };
}
