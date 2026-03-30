"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects, siteConfig } from "@/lib/data";
import { SectionReveal } from "./SectionReveal";

const cardGradients = [
  "from-accent-1 via-accent-2 to-accent-3",
  "from-accent-2 via-accent-3 to-accent-1",
  "from-accent-3 via-accent-1 to-accent-2",
  "from-accent-1 to-accent-2",
  "from-accent-2 to-accent-3",
];

function GithubIcon({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

export function Projects() {
  return (
    <section id="projects" className="py-12 md:py-16">
      <div className="mx-auto max-w-[1160px] px-6 md:px-12">
        <SectionReveal>
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-7 h-px bg-accent-1" />
                <span className="font-mono text-[11px] tracking-[0.14em] uppercase text-accent-1">
                  Projects
                </span>
              </div>
              <h2 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight">
                Things I&apos;ve <span className="gradient-text">built.</span>
              </h2>
            </div>
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase text-text-2 px-4 py-2 rounded-lg border border-border-2 hover:border-accent-1 hover:text-text transition-all duration-200"
            >
              All Projects
              <ArrowUpRight size={13} />
            </a>
          </div>
        </SectionReveal>

        {/* Bento Grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              {/* Hover glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-1/15 via-accent-2/15 to-accent-3/15 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="gradient-border relative bg-card-bg border border-card-border rounded-2xl overflow-hidden h-full flex flex-col transition-all duration-300 group-hover:border-transparent group-hover:shadow-lg">
                {/* Gradient banner */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${cardGradients[i % cardGradients.length]} opacity-60 group-hover:opacity-100 transition-opacity`} />
                <div className="p-6 md:p-8 flex flex-col flex-1">
                {/* Top row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-md bg-accent-1/10 text-accent-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-text-3 hover:text-text hover:bg-bg-2 transition-all duration-200"
                      aria-label="GitHub"
                    >
                      <GithubIcon size={18} />
                    </a>
                  ) : (
                    <span className="p-2 text-text-3/40">
                      <GithubIcon size={18} />
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="font-sans text-xl font-semibold mb-3 group-hover:text-text transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="font-body text-sm text-text-2 leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] text-text-3 bg-bg-2 px-3 py-1 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
