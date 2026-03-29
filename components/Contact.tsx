"use client";

import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { SectionReveal } from "./SectionReveal";

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="mx-auto max-w-[1160px] px-6 md:px-12">
        <SectionReveal>
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-7 h-px bg-accent-1" />
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent-1">
                Contact
              </span>
              <span className="w-7 h-px bg-accent-1" />
            </div>

            <h2 className="font-sans text-4xl sm:text-5xl font-bold tracking-tight mb-6">
              Let&apos;s <span className="gradient-text">connect.</span>
            </h2>

            <p className="font-body text-text-2 leading-relaxed mb-10">
              I&apos;m actively seeking internship and co-op opportunities in
              embedded systems, computer engineering, and systems engineering.
              Whether you have an opportunity, a question, or just want to talk
              tech — my inbox is open.
            </p>

            {/* Email CTA */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-2 text-xl md:text-2xl font-sans font-semibold gradient-text hover:opacity-80 transition-opacity mb-10"
            >
              {siteConfig.email}
              <ArrowUpRight size={20} className="text-accent-2" />
            </a>

            {/* Social links */}
            <div className="flex items-center justify-center gap-5">
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-sm text-text-2 px-5 py-3 rounded-xl border border-border-2 hover:border-accent-1 hover:text-text transition-all duration-200"
              >
                LinkedIn
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-sm text-text-2 px-5 py-3 rounded-xl border border-border-2 hover:border-accent-1 hover:text-text transition-all duration-200"
              >
                GitHub
              </a>
              <a
                href={siteConfig.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-mono text-sm text-white px-5 py-3 rounded-xl bg-gradient-to-r from-accent-1 via-accent-2 to-accent-3 hover:shadow-lg hover:shadow-accent-1/25 transition-all duration-300"
              >
                Resume
              </a>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
