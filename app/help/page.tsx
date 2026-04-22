import type { ReactNode } from "react";
import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import PageHeader from "@/components/pages/PageHeader";
import Container from "@/components/ui/Container";
import Prose from "@/components/pages/Prose";
import { ROUTES } from "@/lib/routes";

export const metadata = {
  title: "Help Center — Nitisetu AI",
  description: "Get started, API basics, and security FAQs.",
};

const FAQ: { q: string; a: ReactNode }[] = [
  {
    q: "How do I request a workspace?",
    a: "Use Request a demo on the home page or email hello@nitisetu.ai. We’ll scope entities, regions, and alert rules with your team.",
  },
  {
    q: "Do you offer an API?",
    a: "Yes. REST endpoints and webhooks are available on enterprise tiers with sandbox keys and usage dashboards.",
  },
  {
    q: "Where is data processed?",
    a: "Deployment options include dedicated regions and customer-managed keys. Exact maps are covered under NDA during onboarding.",
  },
  {
    q: "How do I report a safety issue?",
    a: (
      <>
        See our{" "}
        <Link href={ROUTES.safety}>Safety &amp; Security</Link> page for
        coordinated disclosure and contact paths.
      </>
    ),
  },
];

export default function HelpPage() {
  return (
    <PageShell variant="inner">
      <Container>
        <PageHeader
          eyebrow="HELP"
          title="Help center"
          subtitle="Quick answers for pilots and production deployments. For account-specific help, contact your success manager or hello@nitisetu.ai."
        />
        <Prose>
          <dl className="faq-list">
            {FAQ.map((item) => (
              <div key={item.q} className="faq-item">
                <dt>{item.q}</dt>
                <dd>{item.a}</dd>
              </div>
            ))}
          </dl>
        </Prose>
      </Container>
    </PageShell>
  );
}
