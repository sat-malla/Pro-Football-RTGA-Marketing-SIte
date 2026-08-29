import { Shuffle, BrainCircuit, Radio, SlidersHorizontal, type LucideIcon } from "lucide-react";

import type { ReactNode } from "react";
import { ScrollReveal } from "@/components/ui/scroll-text";

import generatePhoneMockup from "@/assets/generate-phone-mockup-facing-right.png";
import analyzeLeft from "@/assets/analyze-phone-left.png";
import analyzeCenter from "@/assets/analyze-phone-center.png";
import analyzeRight from "@/assets/analyze-phone-right.png";
import simulatePhone from "@/assets/simulate-phone.png";
import optimizePhone from "@/assets/optimize-phone-left.png";

type Feature = {
  id: string;
  no: string;
  kicker: string;
  icon: LucideIcon;
  title: ReactNode;
  body: string;
  bullets: string[];
  visual: ReactNode;
};

function DepthChart() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div
        aria-hidden
        className="absolute inset-x-4 inset-y-10 rounded-[50%] bg-electric/30 blur-[90px]"
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[#3b82f6]/25 blur-[70px]"
      />
      <img
        src={generatePhoneMockup}
        alt="Pro Football RTGA Generate screen shown on a right-facing angled iPhone"
        width={1024}
        height={1536}
        loading="lazy"
        className="relative w-full drop-shadow-[0_30px_60px_rgba(0,75,161,0.55)]"
      />
    </div>
  );
}

function AnalyzeTrio() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div
        aria-hidden
        className="absolute inset-x-2 inset-y-12 rounded-[50%] bg-electric/25 blur-[100px]"
      />
      <div className="relative flex items-end justify-center">
        <img
          src={analyzeLeft}
          alt="Pro Football RTGA season projection screen on an iPhone"
          width={927}
          height={1920}
          loading="lazy"
          className="w-[38%] -mr-[10%] translate-y-8 drop-shadow-[0_24px_50px_rgba(0,75,161,0.55)]"
        />
        <img
          src={analyzeCenter}
          alt="Pro Football RTGA player projections screen with Mike Macdonald on an iPhone"
          width={927}
          height={1920}
          loading="lazy"
          className="relative z-10 w-[46%] drop-shadow-[0_30px_60px_rgba(0,75,161,0.6)]"
        />
        <img
          src={analyzeRight}
          alt="Pro Football RTGA built-in AI analyst chat on an iPhone"
          width={927}
          height={1920}
          loading="lazy"
          className="w-[38%] -ml-[10%] translate-y-8 drop-shadow-[0_24px_50px_rgba(0,75,161,0.55)]"
        />
      </div>
    </div>
  );
}

function BoxScore() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div
        aria-hidden
        className="absolute inset-x-4 inset-y-16 rounded-[50%] bg-electric/25 blur-[100px]"
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[#3b82f6]/20 blur-[80px]"
      />
      <img
        src={simulatePhone}
        alt="Pro Football RTGA simulated game final score and box score on an angled iPhone"
        width={847}
        height={1264}
        loading="lazy"
        className="relative mx-auto w-[78%] drop-shadow-[0_30px_60px_rgba(0,75,161,0.6)]"
      />
    </div>
  );
}

function Optimizer() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div
        aria-hidden
        className="absolute inset-x-4 inset-y-16 rounded-[50%] bg-electric/25 blur-[100px]"
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-2/3 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[#3b82f6]/20 blur-[80px]"
      />
      <img
        src={optimizePhone}
        alt="Pro Football RTGA optimal roster screen with salary cap usage on an angled iPhone"
        width={847}
        height={1264}
        loading="lazy"
        className="relative mx-auto w-[78%] drop-shadow-[0_30px_60px_rgba(0,75,161,0.6)]"
      />
    </div>
  );
}

const features: Feature[] = [
  {
    id: "generate",
    no: "01",
    kicker: "Feature 01",
    icon: Shuffle,
    title: <>Generate your team</>,
    body: "Hit generate and a complete roster lands on your screen pulled at random from real, current players across all 32 teams. Any offensive scheme, any defensive front, every position on the depth chart filled. Yes, we made sure to include special teams!",
    bullets: [
      "29-Player starting NFL team construction: QB through Special Teams",
      "Choose offensive and defensive schemes",
      "Save your team to have a chance to explore and analyze",
    ],
    visual: <DepthChart />,
  },
  {
    id: "analysis",
    no: "02",
    kicker: "Feature 02",
    icon: BrainCircuit,
    title: <>AI-powered team analysis</>,
    body: "Every generated team gets a full season projection — not a guess. The engine simulates the year off real historical player performance and hands back projected wins, playoff odds, Super Bowl odds, and stat lines for every man on the roster.",
    bullets: [
      "Projected stats for individual players at every position: yards, touchdowns, tackles, sacks",
      "Team statistics include Playoff and Super Bowl odds off simulated season outcomes",
      "Talk to a built-in AI analyst and summarizer to learn more about your team's expected outcome",
    ],
    visual: <AnalyzeTrio />,
  },
  {
    id: "simulate",
    no: "03",
    kicker: "Feature 03",
    icon: Radio,
    title: <>Simulate any game</>,
    body: "Line your roster up against any real NFL team from 2015 to today. Home or away. Regular season or playoff intensity. Then watch it play out drive by drive, play by play, down to a full box score.",
    bullets: [
      "Face any real NFL opponent from any season: 2015 to today",
      "Home-field advantages and playoff-mode: At your control",
      "Complete team box score, and simulated game highlights",
    ],
    visual: <BoxScore />,
  },
  {
    id: "optimize",
    no: "04",
    kicker: "Feature 04",
    icon: SlidersHorizontal,
    title: <>Optimize your team</>,
    body: "Random is the start, not the ceiling. Set your constraints and let the optimization engine hunt for the roster construction most likely to produce a Super Bowl-caliber team.",
    bullets: [
      "A different feature, for a different purpose",
      "Given constraints: Salary cap, roster size, and chosen team schemes",
      "Full 29-player roster displayed with salary cap projections",
      "Not every optimal team is the same. But every one has a chance to win it all!",
    ],
    visual: <Optimizer />,
  },
];

export function Features() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
      {features.map((f, i) => (
        <div
          key={f.id}
          id={f.id}
          className="scroll-mt-28 grid items-center gap-20 border-t border-border/60 py-24 first:border-t-0 first:pt-0 last:pb-0 lg:grid-cols-2 lg:gap-32 lg:py-32 xl:gap-44"
        >
          <ScrollReveal direction="up" distance={30} className={i % 2 === 1 ? "lg:order-2" : ""}>
            <div className="panel p-7 md:p-9">
              <div className="flex items-center justify-between gap-4 border-b border-border/70 pb-4">
                <div className="flex items-center gap-3">
                  <span className="text-stat text-4xl text-electric-deep">{f.no}</span>
                  <span className="label-kicker">{f.kicker}</span>
                </div>
                <span className="flex size-10 items-center justify-center rounded-md border border-electric/30 bg-electric/10">
                  <f.icon className="size-5 text-electric" />
                </span>
              </div>

              <h2 className="mt-6 text-4xl md:text-5xl">{f.title}</h2>
              <ul className="mt-7 space-y-3">
                {f.bullets.map((b) => (
                  <li key={b} className="flex gap-3 text-foreground/85">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-2 w-2 shrink-0 rotate-45 bg-electric"
                    />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal
            direction={i % 2 === 1 ? "left" : "right"}
            distance={40}
            className={i % 2 === 1 ? "lg:order-1" : ""}
          >
            {f.visual}
          </ScrollReveal>
        </div>
      ))}
    </section>
  );
}
