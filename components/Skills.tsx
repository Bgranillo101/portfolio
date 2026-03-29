"use client";

import {
  programmingLanguages,
  technicalSkills,
  classSchedule,
} from "@/lib/data";
import { Carousel, CarouselItem } from "./Carousel";
import { SectionReveal } from "./SectionReveal";
import { Code, Cpu, BookOpen } from "lucide-react";

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-20">
      <div className="mx-auto max-w-[1160px] px-6 md:px-12">
        <SectionReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-7 h-px bg-accent-1" />
            <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent-1">
              Skills
            </span>
          </div>
          <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight mb-16">
            My <span className="gradient-text">toolkit.</span>
          </h2>
        </SectionReveal>

        <div className="space-y-12">
          {/* Carousel 1: Programming Languages */}
          <SectionReveal delay={0.1}>
            <div className="flex items-center gap-2 mb-4">
              <Code size={16} className="text-accent-1" />
              <h3 className="font-mono text-xs tracking-widest uppercase text-text-3">
                Languages & HDL
              </h3>
            </div>
            <Carousel speed={45}>
              {programmingLanguages.map((lang) => (
                <CarouselItem key={lang}>{lang}</CarouselItem>
              ))}
            </Carousel>
          </SectionReveal>

          {/* Carousel 2: Technical Skills */}
          <SectionReveal delay={0.2}>
            <div className="flex items-center gap-2 mb-4">
              <Cpu size={16} className="text-accent-2" />
              <h3 className="font-mono text-xs tracking-widest uppercase text-text-3">
                Technical Skills
              </h3>
            </div>
            <Carousel speed={60}>
              {technicalSkills.map((skill) => (
                <CarouselItem key={skill}>{skill}</CarouselItem>
              ))}
            </Carousel>
          </SectionReveal>

          {/* Carousel 3: Current Class Schedule */}
          <SectionReveal delay={0.3}>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen size={16} className="text-accent-3" />
              <h3 className="font-mono text-xs tracking-widest uppercase text-text-3">
                Current Schedule
              </h3>
            </div>
            <Carousel speed={50}>
              {classSchedule.map((cls) => (
                <CarouselItem
                  key={cls.code}
                  className="flex items-center gap-3"
                >
                  <span className="font-semibold text-accent-2">
                    {cls.code}
                  </span>
                  <span className="text-text-3">—</span>
                  <span>{cls.name}</span>
                  <span className="text-text-3 text-xs">({cls.instructor})</span>
                </CarouselItem>
              ))}
            </Carousel>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
