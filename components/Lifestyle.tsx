"use client";

import { Waves, Circle, Mountain, Dumbbell } from "lucide-react";
import { activities } from "@/lib/data";
import { SectionReveal, StaggerContainer, StaggerItem } from "./SectionReveal";

const iconMap = {
  waves: Waves,
  circle: Circle,
  mountain: Mountain,
  dumbbell: Dumbbell,
};

export function Lifestyle() {
  return (
    <section className="py-12 md:py-16">
      <div className="mx-auto max-w-[1160px] px-6 md:px-12">
        <SectionReveal>
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-7 h-px bg-accent-1" />
              <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent-1">
                Beyond the Terminal
              </span>
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight mb-6">
              Life outside
              <br />
              <span className="gradient-text">the lab.</span>
            </h2>
            <p className="font-body text-text-2 leading-relaxed mb-8">
              Engineering sharpens the mind, but staying active is what keeps me
              sharp. I&apos;m committed to an active lifestyle — the same discipline
              and consistency I bring to the pool, the court, the trail, or the
              gym is the same energy I bring to every project.
            </p>

            <StaggerContainer className="grid grid-cols-2 gap-4">
              {activities.map((activity) => {
                const Icon = iconMap[activity.icon];
                return (
                  <StaggerItem key={activity.name}>
                    <div className="flex items-center gap-3 p-4 bg-card-bg border border-card-border rounded-xl hover:border-accent-1/30 transition-colors duration-200 group">
                      <div className="w-9 h-9 rounded-lg bg-accent-1/10 flex items-center justify-center group-hover:bg-accent-1/20 transition-colors">
                        <Icon size={18} className="text-accent-1" />
                      </div>
                      <span className="font-body text-sm text-text-2 group-hover:text-text transition-colors">
                        {activity.name}
                      </span>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
