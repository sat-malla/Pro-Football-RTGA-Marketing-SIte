import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Credibility } from "@/components/landing/Credibility";
import {
  SiteHeader,
  DownloadCta,
  SiteFooter,
} from "@/components/landing/SiteChrome";

const title = "Pro Football RTGA: Random NFL Teams and Real AI Simulations";
const description = "An app to generate, analyze, and simulate a random NFL team's outcomes.";

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
