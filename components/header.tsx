"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { usePreferences } from "./preferences";
import { Container } from "./container";

export function Header() {
  const { t, locale, theme, toggleLocale, toggleTheme } = usePreferences();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  const links = [
    { href: "#work", label: t.nav.work },
    { href: "#experience", label: t.nav.experience },
    { href: "#skills", label: t.nav.skills },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-500 ${
        scrolled || open ? "border-line bg-bg/75 backdrop-blur-md" : "border-transparent"
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="serif-display text-xl tracking-tight" onClick={() => setOpen(false)}>
          Phạm Dương Hòa
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors duration-300 hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button
            onClick={toggleLocale}
            aria-label={t.nav.language}
            title={t.nav.language}
            className="rounded-lg px-2.5 py-2 font-mono text-xs tracking-wider transition-colors hover:bg-accent-soft"
          >
            <span className={locale === "en" ? "text-ink" : "text-faint"}>EN</span>
            <span className="mx-1.5 text-faint">/</span>
            <span className={locale === "vi" ? "text-ink" : "text-faint"}>VI</span>
          </button>
          <button
            onClick={toggleTheme}
            aria-label={t.nav.theme}
            title={t.nav.theme}
            className="grid size-9 place-items-center rounded-lg text-muted transition-colors hover:bg-accent-soft hover:text-ink"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                initial={{ opacity: 0, rotate: -40 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 40 }}
                transition={{ duration: 0.2 }}
              >
                {theme === "dark" ? <Sun size={16} strokeWidth={1.5} /> : <Moon size={16} strokeWidth={1.5} />}
              </motion.span>
            </AnimatePresence>
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label={t.nav.menu}
            aria-expanded={open}
            className="grid size-9 place-items-center rounded-lg text-muted hover:text-ink md:hidden"
          >
            {open ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line md:hidden"
          >
            <Container className="flex flex-col py-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="serif-display border-b border-line py-4 text-3xl last:border-0"
                >
                  {link.label}
                </a>
              ))}
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
