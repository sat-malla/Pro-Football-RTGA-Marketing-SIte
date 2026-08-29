import { ArrowRight } from "lucide-react";
import { NumberCounter } from "@/components/ui/number-counter";
import footballBg from "@/assets/hero-football.jpg.asset.json";

const heroStats = [
  { value: 32, label: "Teams in the pool", suffix: "" },
  { value: 1700, label: "Active players", suffix: "+" },
  { value: 11, label: "Seasons of data", suffix: "" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-45"
        style={{ backgroundImage: `url(${footballBg.url})` }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background"
      />
      <div
        aria-hidden="true"
        className="yard-lines pointer-events-none absolute inset-0 opacity-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-electric/20 blur-[140px]"
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <div>
          <h1 className="mt-7 text-5xl leading-[0.92] sm:text-6xl md:text-7xl xl:text-8xl">
            Generate, analyze,
            <br />
            and simulate
            <br />
            <span className="text-gradient-electric">a team of random NFL players!</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg text-muted-foreground">
            Spin up a full NFL roster at random from real, current player data! Run it through the
            machine-learning powered simulation and AI analysis trained on years of data. Projected
            player stats, projected wins, projected playoff odds, Super Bowl odds. What capability
            does your team have?
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#download"
              className="group inline-flex items-center gap-2 rounded-md bg-primary px-7 py-3.5 font-display text-lg font-semibold tracking-wide uppercase text-primary-foreground glow-ring transition-transform hover:-translate-y-0.5"
            >
              Get the app
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#generate"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-surface/60 px-7 py-3.5 font-display text-lg font-semibold tracking-wide uppercase text-foreground backdrop-blur transition-colors hover:border-electric/60"
            >
              How it works
            </a>
          </div>

          <dl className="mt-12 grid max-w-3xl grid-cols-3 gap-4">
            {heroStats.map((s) => (
              <div key={s.label} className="panel px-4 py-4">
                <dd className="text-stat text-3xl text-chalk md:text-4xl">
                  <NumberCounter value={s.value} suffix={s.suffix} />
                </dd>
                <dt className="mt-1 text-xs leading-tight text-muted-foreground uppercase tracking-wider">
                  {s.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
