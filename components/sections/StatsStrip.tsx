"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/components/animations/stagger";
import Container from "@/components/ui/Container";

export default function StatsStrip() {
  return (
    <section className="stats-strip" aria-label="Platform metrics">
      <Container>
        <motion.div
          className="stats-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
        >
          {STATS.map((s) => (
            <motion.div
              key={s.label}
              className="stat-card"
              variants={staggerItem}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
              <span className="stat-sub">{s.sub}</span>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
