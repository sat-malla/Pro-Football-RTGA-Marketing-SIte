import { ArrowRight } from "lucide-react";
import iconAsset from "@/assets/official-PF-RTGA-icon.png";

const navLinks = [
  { href: "#generate", label: "Generate" },
  { href: "#analysis", label: "Analysis" },
  { href: "#simulate", label: "Simulate" },
  { href: "#optimize", label: "Optimize" },
  { href: "#engine", label: "Engine" },
];

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-3">
          <img
            src={iconAsset}
            alt="Pro Football RTGA logo"
            className="size-11 rounded-xl ring-1 ring-electric/40 md:size-12"
          />
          <span className="font-display text-lg font-semibold tracking-[0.12em] uppercase">
            Pro Football <span className="text-electric">RTGA</span>
          </span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-wide text-muted-foreground uppercase transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#download"
          className="inline-flex items-center gap-2 rounded-md border border-electric/50 bg-electric/10 px-4 py-2 font-display text-sm font-semibold tracking-widest uppercase transition-colors hover:bg-electric/20"
        >
          Download
          <ArrowRight className="size-3.5" />
        </a>
      </div>
    </header>
  );
}

export function DownloadCta() {
  return (
    <section id="download" className="relative px-6 pb-24">
      <div className="panel-glow mx-auto max-w-5xl overflow-hidden px-8 py-16 text-center md:px-16 md:py-20">
        <div
          aria-hidden="true"
          className="hash-marks pointer-events-none absolute inset-x-0 bottom-0 h-24 opacity-60"
        />
        <p className="label-kicker">Kickoff</p>
        <h2 className="mt-4 text-4xl md:text-6xl">
          Your new roster is
          <br />
          <span className="text-gradient-electric">one tap away</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
          Generate, simulate, analyze, and learn what it takes to win it all!
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <a
            href="#download"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-8 py-4 font-display text-lg font-semibold tracking-wide uppercase text-primary-foreground glow-ring transition-transform hover:-translate-y-0.5"
          >
            Download for iOS
          </a>
          <a
            href="https://intelligent-lupin-a6c.notion.site/Pro-Football-RTGA-Page-3c115e0a717080ceb491ec11f6df6846?source=copy_link"
            className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-7 py-3.5 font-display text-lg font-semibold tracking-wide uppercase text-foreground backdrop-blur transition-colors hover:border-electric/60"
          >
            Visit to Learn More
          </a>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
        <div className="flex flex-row items-center justify-center gap-5">
          <img
            src={iconAsset}
            alt="Pro Football RTGA logo"
            className="size-11 rounded-xl ring-1 ring-electric/40 md:size-12"
          />
          <span className="font-display tracking-[0.12em] uppercase">
            Pro Football <span className="text-electric">RTGA</span>
          </span>
        </div>
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Pro Football RTGA. Not affiliated with or endorsed by
          the National Football League.
        </p>
      </div>
    </footer>
  );
}
