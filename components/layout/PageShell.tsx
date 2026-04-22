import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GlowBackground from "@/components/shared/GlowBackground";

type Variant = "home" | "inner";

export default function PageShell({
  children,
  variant = "inner",
}: {
  children: React.ReactNode;
  variant?: Variant;
}) {
  return (
    <main className={`page-shell page-shell--${variant}`}>
      <GlowBackground />
      <Navbar />
      <div
        className={variant === "inner" ? "page-body page-body--inner" : "page-body"}
      >
        {children}
      </div>
      <Footer />
    </main>
  );
}
