"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { useScroll } from "@/hooks/useScroll";
import { NAV_LINKS, MOBILE_NAV_LINKS } from "@/lib/constants";
import { ROUTES } from "@/lib/routes";
import { fadeDown } from "@/components/animations/fade";

export default function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const { isPastThreshold } = useScroll(60);

  useEffect(() => {
    const close = () => setMenuOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <motion.div
      className={`navbar ${isPastThreshold ? "navbar-scrolled" : ""}`}
      variants={fadeDown}
      initial="hidden"
      animate="visible"
    >
      <div className="navbar-inner">
        <Link href={ROUTES.home} className="logo">
          Nitisetu
        </Link>

        <nav className="nav-links" aria-label="Main navigation">
          {NAV_LINKS.map((link) => {
            if ("children" in link && link.children) {
              return (
                <div
                  key={link.key}
                  className="nav-item"
                  onMouseEnter={() => setActive(link.key)}
                  onMouseLeave={() => setActive(null)}
                >
                  <Link href={link.href} className="nav-item-label">
                    {link.label} ▾
                  </Link>

                  <AnimatePresence>
                    {active === link.key && (
                      <motion.div
                        className="dropdown mega glass"
                        initial={{ opacity: 0, y: 16, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.97 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                      >
                        <div className="dropdown-grid">
                          {link.children.map((item) => (
                            <Link
                              key={item.title}
                              href={item.href}
                              className="dropdown-card"
                            >
                              <h4>{item.title}</h4>
                              <p>{item.desc}</p>
                            </Link>
                          ))}
                        </div>
                        <div className="dropdown-footer">
                          {link.footer.map((f) => (
                            <Link key={f.label} href={f.href}>
                              {f.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            if ("columns" in link && link.columns) {
              return (
                <div
                  key={link.key}
                  className="nav-item"
                  onMouseEnter={() => setActive(link.key)}
                  onMouseLeave={() => setActive(null)}
                >
                  <Link href={link.href} className="nav-item-label">
                    {link.label} ▾
                  </Link>

                  <AnimatePresence>
                    {active === link.key && (
                      <motion.div
                        className="dropdown resources glass"
                        initial={{ opacity: 0, y: 16, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.97 }}
                        transition={{ duration: 0.22, ease: "easeOut" }}
                      >
                        <div className="dropdown-columns">
                          {link.columns.map((col) => (
                            <div key={col.title} className="dropdown-col">
                              <p className="dropdown-title">{col.title}</p>
                              {col.links.map((l) => (
                                <Link key={l.label} href={l.href}>
                                  {l.label}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link key={link.key} href={link.href} className="nav-item nav-item-simple">
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="nav-buttons">
          <Link href={ROUTES.login} className={cn("btn", "primary", "btn-sm")}>
            Login
          </Link>
        </div>

        <button
          className="hamburger"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="ham-line"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
            className="ham-line"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="ham-line"
          />
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            aria-label="Mobile navigation"
          >
            {MOBILE_NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="mobile-link"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={ROUTES.login}
              className={cn("btn", "primary", "mobile-cta")}
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
