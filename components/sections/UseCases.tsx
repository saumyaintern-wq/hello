"use client";

import { motion } from "framer-motion";
import { USE_CASES } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/components/animations/stagger";
import { fadeUp } from "@/components/animations/fade";
import Container from "@/components/ui/Container";

export default function UseCases() {
  return (
    <section className="use-cases">
      <Container>
        <motion.div
          className="section-header"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p variants={staggerItem} className="section-label">
            WHO IT&apos;S FOR
          </motion.p>
          <motion.h2 variants={fadeUp} className="section-title">
            Built for teams under pressure
          </motion.h2>
          <motion.p variants={staggerItem} className="section-desc">
            From war rooms to newsrooms, Nitisetu turns noisy feeds into a shared
            picture of what is forming, who is driving it, and what happens next.
          </motion.p>
        </motion.div>

        <motion.div
          className="use-cases-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {USE_CASES.map((u) => (
            <motion.article
              key={u.title}
              className="use-case-card"
              variants={staggerItem}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
            >
              <span className="use-case-tag">{u.tag}</span>
              <h3 className="use-case-title">{u.title}</h3>
              <p className="use-case-desc">{u.desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
