import { notFound } from "next/navigation";
import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import Container from "@/components/ui/Container";
import Prose from "@/components/pages/Prose";
import { BLOG_POSTS } from "@/lib/constants";
import { ROUTES } from "@/lib/routes";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Post" };
  return {
    title: `${post.title} — Nitisetu AI`,
    description: post.excerpt,
  };
}

const ARTICLE_BODY: Record<string, string[]> = {
  "narrative-clusters-101": [
    "We start from embeddings that respect language and script diversity, then apply temporal decay so yesterday’s spike doesn’t drown out today’s formation.",
    "Human reviewers spot-check cluster merges during election windows; disagreements become training signals for the next release.",
    "The goal is not perfect topic labels — it’s stable, explainable groupings that operators can trust under time pressure.",
  ],
  "risk-scores-explained": [
    "Risk combines velocity, cross-platform spread, actor diversity, and historical analogues from similar entities and regions.",
    "Scores are calibrated so that “high” means ‘worth a human look now’, not ‘certainty of harm’. Thresholds are configurable per workspace.",
    "Audit logs retain why a score moved — which signals fired — for post-incident review.",
  ],
  "kedarsetu-simulation": [
    "KedarSetu builds a compact scenario tree: who picks up the narrative next, which regions light up, and how media pickup lags social by hours or days.",
    "Teams use it to rehearse responses before a story crosses into primetime or regulatory attention.",
    "Exports summarize assumptions so leadership sees what the model knew — and what it didn’t.",
  ],
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const paragraphs = ARTICLE_BODY[slug] ?? [
    "Full article content is coming soon. Thanks for reading the preview on the blog index.",
  ];

  return (
    <PageShell variant="inner">
      <Container>
        <p className="blog-back">
          <Link href={ROUTES.blog}>← Back to blog</Link>
        </p>
        <header className="blog-post-header">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-IN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}{" "}
            · {post.readMins} min read
          </time>
          <h1 className="blog-post-title">{post.title}</h1>
          <p className="blog-post-lead">{post.excerpt}</p>
        </header>
        <Prose>
          {paragraphs.map((text, i) => (
            <p key={i}>{text}</p>
          ))}
        </Prose>
      </Container>
    </PageShell>
  );
}
