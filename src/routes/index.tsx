import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Credibility } from "@/components/landing/Credibility";
import {
  SiteHeader,
  DownloadCta,
  SiteFooter,
} from "@/components/landing/SiteChrome";

const title = "Pro Football RTGA — Random NFL Teams, Simulated by AI";
const description =
  "Generate a random NFL roster from real players, then simulate the season, talk to an AI analyst, run any matchup since 2015, and optimize for a Super Bowl build.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Features />
        <Credibility />
        <DownloadCta />
      </main>
      <SiteFooter />
    </div>
  );
}
