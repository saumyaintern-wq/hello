import PageShell from "@/components/layout/PageShell";
import PageHeader from "@/components/pages/PageHeader";
import Container from "@/components/ui/Container";
import { PRODUCT_SECTIONS } from "@/lib/constants";

export const metadata = {
  title: "Products — Nitisetu AI",
  description:
    "Narrative intelligence, KedarSetu simulation, influence mapping, and API access.",
};

export default function ProductsPage() {
  return (
    <PageShell variant="inner">
      <Container>
        <PageHeader
          eyebrow="PRODUCTS"
          title="One platform, four surfaces"
          subtitle="Mix and match narrative intelligence, influence mapping, scenario simulation, and APIs — aligned to how your desk actually works."
        />
        <div className="product-sections">
          {PRODUCT_SECTIONS.map((block) => (
            <section key={block.id} id={block.id} className="product-block">
              <h2>{block.title}</h2>
              <p>{block.body}</p>
              <ul>
                {block.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Container>
    </PageShell>
  );
}
