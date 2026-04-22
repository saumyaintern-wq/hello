import PageShell from "@/components/layout/PageShell";
import PageHeader from "@/components/pages/PageHeader";
import Container from "@/components/ui/Container";
import Prose from "@/components/pages/Prose";

export const metadata = {
  title: "Privacy Policy — Nitisetu AI",
  description: "How we handle data in the Nitisetu platform.",
};

export default function PrivacyPage() {
  return (
    <PageShell variant="inner">
      <Container>
        <PageHeader
          eyebrow="LEGAL"
          title="Privacy policy"
          subtitle="Summary for visitors and customers. Enterprise agreements may add additional terms."
        />
        <Prose>
          <p className="prose-meta">Last updated: April 2026</p>
          <h2>What we collect</h2>
          <p>
            We collect account details (name, email, organization), usage
            telemetry needed to operate the service, and content processed when you
            connect sources or run analyses in the product.
          </p>
          <h2>How we use data</h2>
          <p>
            Data is used to provide, secure, and improve Nitisetu, including support
            and billing. We do not sell personal data. Model improvement uses
            aggregated or de-identified signals unless you opt into broader sharing
            under contract.
          </p>
          <h2>Retention</h2>
          <p>
            Retention windows are configurable for enterprise deployments. Defaults
            are described in your order form or workspace settings.
          </p>
          <h2>Contact</h2>
          <p>
            Privacy questions:{" "}
            <a href="mailto:privacy@nitisetu.ai">privacy@nitisetu.ai</a>
          </p>
        </Prose>
      </Container>
    </PageShell>
  );
}
