import PageShell from "@/components/layout/PageShell";
import PageHeader from "@/components/pages/PageHeader";
import Container from "@/components/ui/Container";
import Prose from "@/components/pages/Prose";
import { SITE_TAGLINE } from "@/lib/constants";

export const metadata = {
  title: "About — Nitisetu AI",
  description: "Mission, team focus, and how we build political narrative intelligence.",
};

export default function AboutPage() {
  return (
    <PageShell variant="inner">
      <Container>
        <PageHeader
          eyebrow="COMPANY"
          title="Operators first"
          subtitle={`${SITE_TAGLINE} We build software for desks that cannot miss a forming story or a reputational spike — especially when timelines compress to minutes.`}
        />
        <Prose>
          <h2>Mission</h2>
          <p>
            Nitisetu exists to make political and civic conversation legible at
            scale: what is being said, who is amplifying it, and how it could
            escalate — without drowning analysts in raw feeds.
          </p>
          <h2>How we work</h2>
          <p>
            Product, research, and forward-deployed analysts sit in the same loop.
            Ship cycles are driven by real incident drills and customer war rooms,
            not slide decks.
          </p>
          <h2>Contact</h2>
          <p>
            For partnerships and press:{" "}
            <a href="mailto:hello@nitisetu.ai">hello@nitisetu.ai</a>
          </p>
        </Prose>
      </Container>
    </PageShell>
  );
}
