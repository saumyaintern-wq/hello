import Link from "next/link";
import PageShell from "@/components/layout/PageShell";
import PageHeader from "@/components/pages/PageHeader";
import Container from "@/components/ui/Container";
import { BLOG_POSTS } from "@/lib/constants";
import { ROUTES } from "@/lib/routes";

export const metadata = {
  title: "Blog — Nitisetu AI",
  description: "Notes on narrative modeling, risk scoring, and product design.",
};

export default function BlogPage() {
  return (
    <PageShell variant="inner">
      <Container>
        <PageHeader
          eyebrow="BLOG"
          title="Writing from the team"
          subtitle="Deeper dives into methodology, UX for high-stakes data, and how we ship responsibly."
        />
        <ul className="blog-list">
          {BLOG_POSTS.map((post) => (
            <li key={post.slug}>
              <article className="blog-card">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-IN", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}{" "}
                  · {post.readMins} min read
                </time>
                <h2>
                  <Link href={`${ROUTES.blog}/${post.slug}`}>{post.title}</Link>
                </h2>
                <p>{post.excerpt}</p>
                <Link href={`${ROUTES.blog}/${post.slug}`} className="blog-read-more">
                  Read article →
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </PageShell>
  );
}
