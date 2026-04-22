import PageShell from "@/components/layout/PageShell";
import PageHeader from "@/components/pages/PageHeader";
import Container from "@/components/ui/Container";
import Prose from "@/components/pages/Prose";

export const metadata = {
  title: "Safety & Security — Nitisetu AI",
  description: "Platform security practices and responsible use.",
};

export default function SafetyPage() {
  return (
    <PageShell variant="inner">
      <Container>
        <PageHeader
          eyebrow="TRUST"
          title="Safety &amp; security"
          subtitle="Nitisetu is built for sensitive civic and political contexts. We combine technical controls with clear use policies."
        />
        <Prose>
          <h2>Security</h2>
          <p>
            Encryption in transit, least-privilege access, audit logging, and
            regular dependency patching are baseline for production workspaces.
            Enterprise customers may require SSO, IP allowlists, and dedicated
            environments.
          </p>
          <h2>Responsible use</h2>
          <p>
            Customers agree not to use Nitisetu for unlawful surveillance,
            harassment, or to manipulate elections. We reserve the right to suspend
            use that violates law or policy.
          </p>
          <h2>Report a vulnerability</h2>
          <p>
            Email <a href="mailto:security@nitisetu.ai">security@nitisetu.ai</a>{" "}
            with reproduction steps. We aim to acknowledge within 72 hours.
          </p>
        </Prose>
      </Container>
    </PageShell>
  );
}
