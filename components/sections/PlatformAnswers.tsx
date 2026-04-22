"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PLATFORM_QUESTIONS } from "@/lib/constants";
import { staggerContainer, staggerItem } from "@/components/animations/stagger";
import { fadeUp } from "@/components/animations/fade";

const floatingCards = [
  { tag: "NARRATIVES", title: "Real clusters", cls: "card-1", delay: "0s" },
  { tag: "SIGNALS", title: "Live feed", cls: "card-2", delay: "1s" },
  { tag: "RISK", title: "Crisis watch", cls: "card-3", delay: "2s" },
  { tag: "SIMULATION", title: "KedarSetu", cls: "card-4", delay: "3s" },
];

export default function PlatformAnswers() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const i = setInterval(() => {
      setActive((prev) => (prev + 1) % PLATFORM_QUESTIONS.length);
    }, 2800);
    return () => clearInterval(i);
  }, []);

  return (
    <section className="platform-magic">
      <div className="container platform-inner">

        {/* LEFT SIDE */}
        <motion.div
          className="platform-left"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.p variants={staggerItem} className="platform-tag">
            WHAT THE PLATFORM ANSWERS
          </motion.p>

          <div className="questions">
            {PLATFORM_QUESTIONS.map((q, i) => (
              <motion.div
                key={i}
                className={`question ${active === i ? "active" : ""}`}
                animate={{
                  opacity: active === i ? 1 : 0.35,
                  x: active === i ? 0 : -10,
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <span className="highlight" />
                <p>{q}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <div className="platform-right">
          {floatingCards.map((card) => (
            <motion.div
              key={card.cls}
              className={`floating-card ${card.cls}`}
              style={{ animationDelay: card.delay }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: parseFloat(card.delay) * 0.25 }}
              whileHover={{ scale: 1.08, y: -8 }}
            >
              <span>{card.tag}</span>
              <h3>{card.title}</h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}