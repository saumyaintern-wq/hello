"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ROUTES } from "@/lib/routes";
import { fadeUp, fadeIn } from "@/components/animations/fade";
import { staggerContainer, staggerItem } from "@/components/animations/stagger";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={staggerItem} className="hero-label">
            POLITICAL NARRATIVE INTELLIGENCE
          </motion.p>

          <motion.h1 variants={fadeUp} className="hero-title">
            <span className="hero-title-gradient">
              Detect, understand, and predict
            </span>{" "}
            political narratives in real time.
          </motion.h1>

          <motion.p variants={staggerItem} className="hero-desc">
            Nitisetu AI connects social signals, editorial coverage, narrative
            clustering, influence mapping, and crisis detection into a single
            operator-first workspace — built for teams who cannot afford blind
            spots during high-stakes moments.
          </motion.p>

          <motion.div variants={fadeIn} className="hero-cta">
            <Link
              href={`${ROUTES.home}#contact`}
              className={cn("btn", "primary", "btn-lg")}
            >
              Request demo
            </Link>
            <Link
              href={ROUTES.products}
              className={cn("btn", "ghost", "btn-lg")}
            >
              Explore products
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}