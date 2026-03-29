import { siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-[1160px] px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-body text-sm text-text-3">
          &copy; {new Date().getFullYear()} {siteConfig.name}
        </span>
        <div className="flex items-center gap-6">
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-text-3 hover:text-text transition-colors"
          >
            GitHub
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-text-3 hover:text-text transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-mono text-xs text-text-3 hover:text-text transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
