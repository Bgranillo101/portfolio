"use client";

import { aboutData } from "@/lib/data";
import { SectionReveal, StaggerContainer, StaggerItem } from "./SectionReveal";

export function About() {
  return (
    <section id="about" className="py-12 md:py-16">
      <div className="mx-auto max-w-[1160px] px-6 md:px-12">
        <SectionReveal>
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-px bg-accent-1" />
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent-1">
                About Me
              </span>
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Systems thinker.
              <br />
              <span className="gradient-text">Hands-on builder.</span>
            </h2>

            <div className="space-y-4 mb-10">
              {aboutData.bio.map((paragraph, i) => (
                <p key={i} className="font-body text-text-2 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <StaggerContainer className="flex gap-8 md:gap-12">
              {aboutData.stats.map((stat, i) => (
                <StaggerItem key={i}>
                  <div className="text-center">
                    <span className="block font-sans text-3xl font-bold gradient-text">
                      {stat.value}
                    </span>
                    <span className="block font-mono text-xs text-text-3 mt-1 tracking-wide uppercase">
                      {stat.label}
                    </span>
                  </div>
                  {i < aboutData.stats.length - 1 && (
                    <div className="w-px h-10 bg-border-2 ml-8 md:ml-12 hidden md:block" />
                  )}
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
