"use client";

import { User } from "lucide-react";
import { aboutData } from "@/lib/data";
import { SectionReveal, StaggerContainer, StaggerItem } from "./SectionReveal";

export function About() {
  return (
    <section id="about" className="py-16 md:py-20">
      <div className="mx-auto max-w-[1160px] px-6 md:px-12">
        <div className="grid md:grid-cols-[300px_1fr] lg:grid-cols-[360px_1fr] gap-12 lg:gap-20 items-start">
          {/* Photo */}
          <SectionReveal>
            <div className="relative group">
              <div className="absolute -inset-3 bg-gradient-to-br from-accent-1/20 via-accent-2/10 to-accent-3/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative aspect-[3/4] rounded-2xl bg-card-bg border border-card-border flex flex-col items-center justify-center gap-3 text-text-3 overflow-hidden">
                <User size={44} strokeWidth={1.2} />
                <span className="font-mono text-xs">Add Your Photo</span>
              </div>
            </div>
          </SectionReveal>

          {/* Content */}
          <SectionReveal delay={0.15}>
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
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
