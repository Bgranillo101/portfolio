"use client";

import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { educationData } from "@/lib/data";
import { SectionReveal, StaggerContainer, StaggerItem } from "./SectionReveal";

export function Education() {
  return (
    <section id="education" className="py-16 md:py-20">
      <div className="mx-auto max-w-[1160px] px-6 md:px-12">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-7 h-px bg-accent-1" />
            <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent-1">
              Education
            </span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight mb-12">
            Where I&apos;m <span className="gradient-text">trained.</span>
          </h2>
        </SectionReveal>

        {/* School card */}
        <SectionReveal delay={0.1}>
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-accent-1/10 via-accent-2/10 to-accent-3/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-card-bg border border-card-border rounded-2xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-1/10 flex items-center justify-center shrink-0">
                  <GraduationCap size={24} className="text-accent-1" />
                </div>
                <div>
                  <h3 className="font-sans text-xl font-semibold">
                    {educationData.school}
                  </h3>
                  <p className="font-body text-text-2 mt-1">
                    {educationData.degree}
                  </p>
                  <div className="flex flex-wrap gap-3 mt-3">
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-text-3 bg-bg-2 px-3 py-1.5 rounded-lg">
                      <Calendar size={12} />
                      {educationData.expected}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs text-text-3 bg-bg-2 px-3 py-1.5 rounded-lg">
                      <MapPin size={12} />
                      {educationData.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="text-center md:text-right shrink-0">
                <span className="block font-sans text-4xl font-bold gradient-text">
                  {educationData.gpa}
                </span>
                <span className="block font-mono text-xs text-text-3 mt-1 tracking-wide uppercase">
                  GPA
                </span>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Coursework */}
        <SectionReveal delay={0.2}>
          <div className="mt-8">
            <h4 className="font-mono text-xs tracking-widest uppercase text-text-3 mb-4">
              Relevant Coursework
            </h4>
            <StaggerContainer className="flex flex-wrap gap-3">
              {educationData.coursework.map((course) => (
                <StaggerItem key={course}>
                  <span className="gradient-border inline-block font-body text-sm text-text-2 bg-card-bg px-4 py-2 rounded-xl border border-card-border hover:text-text transition-colors duration-200">
                    {course}
                  </span>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
