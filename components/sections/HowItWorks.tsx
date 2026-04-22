"use client";

import { motion } from "framer-motion";
import { HOW_IT_WORKS } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/components/animations/stagger";
import { fadeUp } from "@/components/animations/fade";

export default function HowItWorks() {
  return (
    <section className="how">
      <div className="container">
        <div className="how-wrapper">

          {/* Section header */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <motion.p variants={staggerItem} className="how-label">HOW IT WORKS</motion.p>
            <motion.h2 variants={fadeUp} className="section-title" style={{ marginBottom: "40px" }}>
              From raw signal to actionable intelligence
            </motion.h2>
          </motion.div>

          {/* Steps grid */}
          <motion.div
            className="how-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {HOW_IT_WORKS.map((step) => (
              <motion.div
                key={step.step}
                className="how-card"
                variants={staggerItem}
                whileHover={{ y: -4, backgroundColor: "rgba(255,255,255,0.6)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span className="how-step-num">{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}