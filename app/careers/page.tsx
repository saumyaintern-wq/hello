import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import PageHeader from "@/components/pages/PageHeader";
import Container from "@/components/ui/Container";
import Prose from "@/components/pages/Prose";
import { CAREERS_ROLES } from "@/lib/constants";

export const metadata = {
  title: "Careers — Nitisetu AI",
  description: "Open roles in ML, design, and forward-deployed analysis.",
};

export default function CareersPage() {
  return (
    <PageShell variant="inner">
      <Container>
        <PageHeader
          eyebrow="CAREERS"
          title="Build with us"
          subtitle="We hire for curiosity under pressure, clear writing, and respect for the stakes of political information — wherever you sit."
        />
        <Prose>
          <h2>Open roles</h2>
          <ul className="careers-list">
            {CAREERS_ROLES.map((role) => (
              <li key={role.title}>
                <Link href={role.href} className="careers-role-link">
                  <strong>{role.title}</strong>
                  <span className="careers-meta">
                    {role.location} · {role.type}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p>
            Don&apos;t see a fit? Send a note with your work to{" "}
            <a href="mailto:careers@nitisetu.ai">careers@nitisetu.ai</a>.
          </p>
        </Prose>
      </Container>
    </PageShell>
  );
}
