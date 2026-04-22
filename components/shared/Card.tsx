"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { staggerItem } from "@/components/animations/stagger";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "light" | "dark";
  animate?: boolean;
}

export default function Card({
  children,
  className,
  variant = "light",
  animate = false,
}: CardProps) {
  const base =
    variant === "dark"
      ? "preview-card"
      : "feature-card";

  if (animate) {
    return (
      <motion.div variants={staggerItem} className={cn(base, className)}>
        {children}
      </motion.div>
    );
  }

  return <div className={cn(base, className)}>{children}</div>;
}
