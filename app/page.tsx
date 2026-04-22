import PageShell from "@/components/layout/PageShell";
import Hero from "@/components/sections/Hero";
import StatsStrip from "@/components/sections/StatsStrip";
import PlatformAnswers from "@/components/sections/PlatformAnswers";
import UseCases from "@/components/sections/UseCases";
import Features from "@/components/sections/Features";
import TestimonialBlock from "@/components/sections/TestimonialBlock";
import Preview from "@/components/sections/ProductPreview";
import ResearchTeaser from "@/components/sections/ResearchTeaser";
import HowItWorks from "@/components/sections/HowItWorks";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <PageShell variant="home">
      <Hero />
      <StatsStrip />
      <PlatformAnswers />
      <UseCases />
      <Features />
      <TestimonialBlock />
      <Preview />
      <ResearchTeaser />
      <HowItWorks />
      <CTASection />
    </PageShell>
  );
}
