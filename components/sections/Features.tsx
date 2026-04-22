"use client";

import { motion } from "framer-motion";
import { FEATURES } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/components/animations/stagger";
import { fadeUp } from "@/components/animations/fade";

export default function Features() {
  return (
    <section className="features">
      <div className="container">

        {/* Section header */}
        <motion.div
          className="section-header"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <motion.p variants={staggerItem} className="section-label">CAPABILITIES</motion.p>
          <motion.h2 variants={fadeUp} className="section-title">
            Everything operators need
          </motion.h2>
          <motion.p variants={staggerItem} className="section-desc">
            Structured intelligence designed for political operators, campaign teams, and reputation monitoring desks.
          </motion.p>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          className="feature-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {FEATURES.map((feature) => (
            <motion.div
              key={feature.title}
              className="feature-card"
              variants={staggerItem}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}