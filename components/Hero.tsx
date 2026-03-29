"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { heroData, siteConfig } from "@/lib/data";

const HeroScene = dynamic(
  () => import("./HeroScene").then((mod) => ({ default: mod.HeroScene })),
  { ssr: false }
);

export function Hero() {
  const card = heroData.profileCard;

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-bg" />

      {/* 3D Scene */}
      <HeroScene />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1160px] px-6 md:px-12 w-full pt-[72px]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-8 h-px bg-accent-1" />
              <span className="font-mono text-xs tracking-[0.14em] uppercase text-text-2">
                {heroData.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-sans text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-6"
            >
              <span className="block">{siteConfig.name.split(" ")[0]}</span>
              <span className="block">
                {siteConfig.name.split(" ")[1]}
                <span className="gradient-text">.</span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="font-body text-lg text-text-2 max-w-md mb-8 whitespace-pre-line"
            >
              {heroData.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex gap-4"
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-xl font-sans font-medium text-sm text-white bg-gradient-to-r from-accent-1 via-accent-2 to-accent-3 hover:shadow-lg hover:shadow-accent-1/25 transition-all duration-300 hover:scale-[1.02]"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl font-sans font-medium text-sm text-text-2 border border-border-2 hover:border-accent-1 hover:text-text transition-all duration-300"
              >
                Get In Touch
              </a>
            </motion.div>
          </div>

          {/* Right - Terminal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="hidden lg:block"
          >
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent-1/20 via-accent-2/20 to-accent-3/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-60 group-hover:opacity-100" />

              <div className="relative bg-card-bg border border-card-border rounded-2xl overflow-hidden">
                {/* Card header */}
                <div className="flex items-center justify-between px-5 py-3 border-b border-border">
                  <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="font-mono text-xs text-text-3">
                    profile.sys
                  </span>
                </div>

                {/* Card body */}
                <div className="p-5 space-y-3">
                  {Object.entries(card).map(([key, value]) => (
                    <div key={key} className="flex items-center gap-3">
                      <span className="font-mono text-xs text-accent-2 w-20 shrink-0">
                        {key}
                      </span>
                      <span
                        className={`font-mono text-sm ${
                          key === "gpa"
                            ? "gradient-text font-semibold"
                            : key === "status"
                            ? "text-text flex items-center gap-2"
                            : "text-text-2"
                        }`}
                      >
                        {key === "status" && (
                          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        )}
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-5 h-8 rounded-full border-2 border-text-3 flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-1 rounded-full bg-text-3"
          />
        </div>
        <span className="font-mono text-[10px] tracking-widest uppercase text-text-3">
          scroll
        </span>
      </motion.div>
    </section>
  );
}
