"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/components/animations/fade";
import { staggerContainer, staggerItem } from "@/components/animations/stagger";

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.header
      className="page-header"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {eyebrow ? (
        <motion.p variants={staggerItem} className="page-eyebrow">
          {eyebrow}
        </motion.p>
      ) : null}
      <motion.h1 variants={fadeUp} className="page-title">
        {title}
      </motion.h1>
      {subtitle ? (
        <motion.p variants={staggerItem} className="page-subtitle">
          {subtitle}
        </motion.p>
      ) : null}
    </motion.header>
  );
}
