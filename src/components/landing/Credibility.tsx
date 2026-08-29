import { Database, RefreshCcw, LineChart, Clipboard } from "lucide-react";

import { ScrollReveal } from "@/components/ui/scroll-text";

const pillars = [
  {
    icon: RefreshCcw,
    title: "Up-to-date Data",
    body: "Player & team stats, coaching records, and season outcomes refresh automatically as games are played. Projections reflect the league as it stands this week.",
  },
  {
    icon: Database,
    title: "The model's engine",
    body: "Every model is trained on actual play-by-play and full-season data. Down, distance, time, personnel, the granular stuff that decides football games, all processed in a Markov Chain.",
  },
  {
    icon: LineChart,
    title: "The core: Machine learning",
    body: "Outcomes come out of trained models, so a projection is statistically grounded and reproducible in distribution. Strong ML and AI engineering = Your projections are significant.",
  },
  {
    icon: Clipboard,
    title: "Built for you to understand",
    body: "Machine learning and AI can contain fluff, and unnecessary technical knowledge you may not bother to learn. None of that here. Just straight numbers that drives the excitement of the game.",
  },
];

export function Credibility() {
  return (
    <section id="engine" className="relative overflow-hidden py-24 md:py-32">
      <div aria-hidden="true" className="yard-lines pointer-events-none absolute inset-0" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-100 w-250 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric-deep/25 blur-[130px]"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        <ScrollReveal direction="up" className="max-w-3xl">
          <p className="label-kicker">Under the hood</p>
          <h2 className="mt-4 text-4xl md:text-6xl">
            Why the numbers
            <br />
            <span className="text-gradient-electric">actually hold up</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Anyone can shuffle names into a lineup. The hard part is telling you what that lineup
            would really do in September, in December, and in the playoff. What's the most realistic
            outcome for your team if they played a full NFL season or a real NFL team?
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {pillars.map((p, i) => (
            <ScrollReveal key={p.title} direction="up" delay={i * 0.08}>
              <div className="panel-glow h-full p-7">
                <p.icon className="size-6 text-electric" />
                <h3 className="mt-5 text-2xl">{p.title}</h3>
                <p className="mt-3 text-muted-foreground">{p.body}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
