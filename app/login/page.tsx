"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PageShell from "@/components/layout/PageShell";
import Container from "@/components/ui/Container";
import { ROUTES } from "@/lib/routes";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  return (
    <PageShell variant="inner">
      <Container>
        <motion.div
          className="login-card"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 16 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
            },
          }}
        >
          <h1 className="login-title">Sign in</h1>
          <p className="login-sub">
            Workspace access is provisioned by your admin. This preview collects
            nothing — wire your auth provider in production.
          </p>
          <form
            className="login-form"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <label className="login-label">
              Work email
              <input type="email" name="email" autoComplete="email" placeholder="you@org.in" />
            </label>
            <label className="login-label">
              Password
              <input type="password" name="password" autoComplete="current-password" placeholder="••••••••" />
            </label>
            <button type="submit" className={cn("btn", "primary", "btn-lg")} style={{ width: "100%" }}>
              Continue
            </button>
          </form>
          <p className="login-foot">
            <Link href={ROUTES.home}>← Back to home</Link>
          </p>
        </motion.div>
      </Container>
    </PageShell>
  );
}
