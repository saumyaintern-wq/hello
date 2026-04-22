"use client";

import { motion } from "framer-motion";
import { PRODUCT_PREVIEWS } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/components/animations/stagger";
import { fadeUp } from "@/components/animations/fade";

export default function ProductPreview() {
  return (
    <section className="product-preview">
      <div className="container">

        {/* Header */}
        <motion.div
          className="preview-header"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div>
            <motion.p variants={staggerItem} className="preview-label">PRODUCT</motion.p>
            <motion.h2 variants={fadeUp} className="preview-title">Product preview</motion.h2>
          </div>
          <motion.p variants={staggerItem} className="preview-desc">
            Clean operator-first surfaces for monitoring entities, drilling into
            narratives, and running scenario analysis.
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="preview-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {PRODUCT_PREVIEWS.map((p) => (
            <motion.div
              key={p.caption}
              className="preview-card"
              variants={staggerItem}
              whileHover={{ y: -6, boxShadow: "0 24px 70px rgba(0,0,0,0.45)" }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              <div className="preview-ui">

                {/* Traffic lights */}
                <div className="ui-dots">
                  <span style={{ background: "#ef4444" }} />
                  <span style={{ background: "#f59e0b" }} />
                  <span style={{ background: "#22c55e" }} />
                </div>

                {/* Topbar */}
                <div className="ui-bar" style={{ background: `${p.accent}22` }}>
                  <div
                    style={{
                      height: "100%",
                      width: "40%",
                      borderRadius: "8px",
                      background: `${p.accent}44`,
                    }}
                  />
                </div>

                {/* Two boxes */}
                <div className="ui-row">
                  <div className="ui-box" style={{ background: `${p.accent}1a` }} />
                  <div className="ui-box" style={{ background: "#111827" }} />
                </div>

                {/* Large area */}
                <div
                  className="ui-large"
                  style={{
                    background: `linear-gradient(135deg, ${p.accent}22, #111827)`,
                  }}
                />

              </div>

              <p className="preview-caption">{p.caption}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}