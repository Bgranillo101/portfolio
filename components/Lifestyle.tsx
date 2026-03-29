"use client";

import { Waves, Circle, Mountain, Dumbbell, Camera } from "lucide-react";
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
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-[1160px] px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
          {/* Content */}
          <SectionReveal>
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
          </SectionReveal>

          {/* Photos grid */}
          <SectionReveal delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {activities.map((activity) => (
                <div
                  key={activity.name}
                  className="aspect-square rounded-2xl bg-card-bg border border-card-border flex flex-col items-center justify-center gap-2 text-text-3"
                >
                  <Camera size={24} strokeWidth={1.5} />
                  <span className="font-mono text-xs">{activity.name}</span>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
