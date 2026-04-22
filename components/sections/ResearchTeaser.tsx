"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { RESEARCH_TEASER } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { staggerContainer, staggerItem } from "@/components/animations/stagger";
import { fadeUp } from "@/components/animations/fade";
import Container from "@/components/ui/Container";

export default function ResearchTeaser() {
  return (
    <section className="research-teaser">
      <Container>
        <motion.div
          className="research-teaser-inner"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <div className="research-teaser-copy">
            <motion.p variants={staggerItem} className="section-label">
              RESEARCH
            </motion.p>
            <motion.h2 variants={fadeUp} className="section-title">
              {RESEARCH_TEASER.headline}
            </motion.h2>
            <motion.p variants={staggerItem} className="research-teaser-body">
              {RESEARCH_TEASER.body}
            </motion.p>
            <motion.div variants={staggerItem}>
              <Link
                href={RESEARCH_TEASER.href}
                className={cn("btn", "outline", "btn-lg")}
              >
                {RESEARCH_TEASER.cta}
              </Link>
            </motion.div>
          </div>
          <motion.div
            className="research-teaser-visual"
            aria-hidden
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="research-paper-stack">
              <span className="paper paper-a" />
              <span className="paper paper-b" />
              <span className="paper paper-c" />
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
