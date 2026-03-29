"use client";

import { type ReactNode } from "react";

interface CarouselProps {
  children: ReactNode;
  speed?: number;
  className?: string;
}

export function Carousel({ children, speed = 30, className = "" }: CarouselProps) {
  return (
    <div className={`carousel-mask overflow-hidden ${className}`}>
      <div
        className="flex gap-4 animate-carousel w-max"
        style={{ animationDuration: `${speed}s` }}
      >
        {/* Double the children for seamless loop */}
        {children}
        {children}
      </div>
    </div>
  );
}

export function CarouselItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`shrink-0 font-mono text-sm text-text-2 bg-card-bg border border-card-border px-5 py-3 rounded-xl hover:border-accent-1/40 hover:text-text transition-all duration-200 ${className}`}
    >
      {children}
    </div>
  );
}
