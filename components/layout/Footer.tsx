"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { FOOTER_LINKS, SOCIAL_LINKS, SITE_TAGLINE } from "@/lib/constants";
import { ROUTES } from "@/lib/routes";
import { staggerContainer, staggerItem } from "@/components/animations/stagger";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";

const socials = [
  { icon: FaXTwitter, href: SOCIAL_LINKS.twitter, label: "X / Twitter" },
  { icon: FaLinkedinIn, href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
  { icon: FaYoutube, href: SOCIAL_LINKS.youtube, label: "YouTube" },
  { icon: FaInstagram, href: SOCIAL_LINKS.instagram, label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <motion.div
          className="footer-inner"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={staggerItem} className="footer-left">
            <Link href={ROUTES.home} className="footer-brand">
              Nitisetu AI
            </Link>
            <div className="footer-links">
              {FOOTER_LINKS.map(({ label, href }) => (
                <Link key={href} href={href}>
                  {label}
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div variants={staggerItem} className="footer-right">
            <p className="footer-tagline">{SITE_TAGLINE}</p>

            <div className="social-icons">
              {socials.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 18 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.p
          className="footer-copy"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          © {new Date().getFullYear()} Nitisetu AI. All rights reserved.
        </motion.p>
      </Container>
    </footer>
  );
}
