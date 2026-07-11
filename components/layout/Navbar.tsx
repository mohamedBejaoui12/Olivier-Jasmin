"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Leaf as LeafIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const links = [
  { href: "#accueil", label: "Accueil" },
  { href: "#menu", label: "Menu" },
  { href: "#specialites", label: "Nos Spécialités" },
  { href: "#a-propos", label: "À propos" },
  { href: "#galerie", label: "Galerie" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const textColorClass = scrolled ? "text-[var(--color-dark-green)]" : "text-[var(--color-warm-white)]";
  const linkColorClass = scrolled
    ? "text-[var(--color-charcoal)]/85 hover:text-[var(--color-emerald)]"
    : "text-[var(--color-warm-white)]/95 hover:text-[var(--color-gold-light)]";
  const ctaClass = scrolled
    ? "!border-[var(--color-gold)]/60 !text-[var(--color-dark-green)] hover:!bg-[var(--color-gold)]/10"
    : "!border-[var(--color-warm-white)]/55 !text-[var(--color-warm-white)] hover:!bg-white/10";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-7xl px-5 sm:px-8 rounded-full transition-all duration-500",
          scrolled ? "glass shadow-[var(--shadow-soft)] border border-[var(--color-sage)]/30" : ""
        )}
      >
        <nav className="flex items-center justify-between py-3">
          <a href="#accueil" className="flex items-center gap-2 group">
            <LeafIcon
              className="h-6 w-6 transition-transform duration-500 group-hover:rotate-12"
              style={{ color: scrolled ? "var(--color-emerald)" : "var(--color-warm-white)" }}
              strokeWidth={1.5}
            />
            <span className={cn("font-display text-xl sm:text-2xl tracking-wide transition-colors duration-500", textColorClass)}>
              Olivier &amp; Jasmin
            </span>
          </a>

          <ul className="hidden lg:flex items-center gap-9">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={cn(
                    "relative text-sm tracking-wide transition-colors duration-300 group",
                    linkColorClass
                  )}
                >
                  {link.label}
                  <span className="absolute left-0 -bottom-1 h-px w-0 bg-[var(--color-gold)] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button href="#contact" variant="outline" className={cn("!px-6 !py-2.5 text-sm", ctaClass)}>
              Réserver
            </Button>
          </div>

          <button
            onClick={() => setOpen(true)}
            aria-label="Ouvrir le menu de navigation"
            className={cn("lg:hidden p-2 rounded-full transition-colors duration-500", textColorClass)}
          >
            <Menu className="h-6 w-6" strokeWidth={1.5} />
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-[var(--color-dark-green)]/40 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 280, damping: 32 }}
              className="fixed top-0 right-0 z-50 h-full w-[82%] max-w-sm glass shadow-[var(--shadow-lift)] lg:hidden flex flex-col"
            >
              <div className="flex items-center justify-between px-6 py-6">
                <span className="font-display text-xl" style={{ color: "var(--color-dark-green)" }}>
                  Menu
                </span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Fermer le menu"
                  className="p-2 rounded-full"
                >
                  <X className="h-6 w-6" style={{ color: "var(--color-dark-green)" }} strokeWidth={1.5} />
                </button>
              </div>
              <ul className="flex flex-col gap-1 px-6 mt-4">
                {links.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05, duration: 0.4 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block py-3.5 text-lg font-display border-b border-[var(--color-sage)]/25"
                      style={{ color: "var(--color-dark-green)" }}
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="px-6 mt-8">
                <Button href="#contact" onClick={() => setOpen(false)} className="w-full">
                  Réserver une table
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
