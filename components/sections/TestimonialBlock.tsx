"use client";

import { motion } from "framer-motion";
import { TESTIMONIAL } from "@/lib/constants";
import { fadeIn } from "@/components/animations/fade";
import Container from "@/components/ui/Container";

export default function TestimonialBlock() {
  return (
    <section className="testimonial-block" aria-label="Customer quote">
      <Container>
        <motion.blockquote
          className="testimonial-inner"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <p className="testimonial-quote">&ldquo;{TESTIMONIAL.quote}&rdquo;</p>
          <footer className="testimonial-meta">
            <span className="testimonial-role">{TESTIMONIAL.role}</span>
            <span className="testimonial-org">{TESTIMONIAL.org}</span>
          </footer>
        </motion.blockquote>
      </Container>
    </section>
  );
}
