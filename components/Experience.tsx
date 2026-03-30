"use client";

import { experiences } from "@/lib/data";
import { SectionReveal, StaggerContainer, StaggerItem } from "./SectionReveal";

export function Experience() {
  return (
    <section id="experience" className="py-12 md:py-16">
      <div className="mx-auto max-w-[1160px] px-6 md:px-12">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-7 h-px bg-accent-1" />
            <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent-1">
              Experience
            </span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight mb-8">
            Where I&apos;ve <span className="gradient-text">worked.</span>
          </h2>
        </SectionReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-1 via-accent-2 to-accent-3 opacity-30 hidden md:block" />

          <StaggerContainer className="space-y-10">
            {experiences.map((exp, i) => (
              <StaggerItem key={i}>
                <div className="flex gap-6 md:gap-10">
                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-col items-center pt-2">
                    <div className="w-[23px] h-[23px] rounded-full border-2 border-accent-1 flex items-center justify-center bg-bg shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-accent-1" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 group">
                    <span className="font-mono text-xs text-text-3 mb-3 block">
                      {exp.date}
                    </span>
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-accent-1/10 via-accent-2/10 to-accent-3/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative bg-card-bg border border-card-border rounded-2xl p-6 md:p-8">
                        <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                          <div>
                            <h3 className="font-sans text-lg font-semibold">
                              {exp.role}
                            </h3>
                            <p className="font-body text-text-2 mt-1">
                              {exp.company}
                              <span className="text-text-3"> · </span>
                              {exp.location}
                            </p>
                          </div>
                          {exp.current && (
                            <span className="font-mono text-[10px] tracking-widest uppercase px-3 py-1 rounded-full bg-accent-1/10 text-accent-1 border border-accent-1/20">
                              Current
                            </span>
                          )}
                        </div>

                        <ul className="space-y-2 mb-5">
                          {exp.bullets.map((bullet, j) => (
                            <li
                              key={j}
                              className="font-body text-sm text-text-2 leading-relaxed pl-4 relative before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent-2/40"
                            >
                              {bullet}
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2">
                          {exp.tags.map((tag) => (
                            <span
                              key={tag}
                              className="font-mono text-[11px] text-text-3 bg-bg-2 px-3 py-1 rounded-lg"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
