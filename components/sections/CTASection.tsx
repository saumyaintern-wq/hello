"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SITE_DESCRIPTION } from "@/lib/constants";
import { ROUTES } from "@/lib/routes";
import { cn } from "@/lib/utils";
import { staggerContainer, staggerItem } from "@/components/animations/stagger";
import { fadeUp } from "@/components/animations/fade";
import Container from "@/components/ui/Container";

export default function CTASection() {
  return (
    <section id="contact" className="cta-section">
      <Container>
        <motion.div
          className="cta-inner"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.h2 variants={fadeUp} className="cta-title">
            See Nitisetu on your own data
          </motion.h2>
          <motion.p variants={staggerItem} className="cta-desc">
            {SITE_DESCRIPTION} We&apos;ll walk through a live workspace tailored to
            your entities, regions, and risk thresholds.
          </motion.p>
          <motion.div variants={staggerItem} className="cta-actions">
            <Link
              href="mailto:hello@nitisetu.ai?subject=Demo%20request"
              className={cn("btn", "primary", "btn-lg")}
            >
              Request a demo
            </Link>
            <Link href={ROUTES.help} className={cn("btn", "ghost", "btn-lg")}>
              Talk to product
            </Link>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
