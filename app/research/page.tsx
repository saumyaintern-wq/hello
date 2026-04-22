import PageShell from "@/components/layout/PageShell";
import PageHeader from "@/components/pages/PageHeader";
import Container from "@/components/ui/Container";
import Prose from "@/components/pages/Prose";

export const metadata = {
  title: "Research — Nitisetu AI",
  description:
    "Evaluation protocols, model documentation, and methodology notes for narrative intelligence.",
};

export default function ResearchPage() {
  return (
    <PageShell variant="inner">
      <Container>
        <PageHeader
          eyebrow="RESEARCH"
          title="Transparent by design"
          subtitle="We publish how we evaluate narrative models, where datasets come from, and how we mitigate misuse — so teams can deploy with confidence."
        />
        <Prose>
          <h2>Evaluation &amp; benchmarks</h2>
          <p>
            Our clustering and risk models are scored against held-out time windows
            and human-labeled crisis events. We track calibration across regions and
            languages, not just aggregate accuracy — political context is never
            one-size-fits-all.
          </p>
          <h2>Dataset cards</h2>
          <p>
            Each production release ships with provenance: source mix, retention,
            PII handling, and known gaps (e.g. thin coverage in certain states or
            languages). Customers can map our signals to their own compliance
            policies.
          </p>
          <h2>Bias &amp; misuse reviews</h2>
          <p>
            We run red-team style reviews for partisan skew, stereotype
            amplification, and adversarial flooding. Findings feed into model
            gates and product safeguards such as rate limits and human escalation
            paths.
          </p>
          <h2>What we don&apos;t claim</h2>
          <p>
            Nitisetu does not predict election outcomes or individual behavior. It
            surfaces narrative dynamics and risk signals to support human judgment —
            not replace it.
          </p>
        </Prose>
      </Container>
    </PageShell>
  );
}
