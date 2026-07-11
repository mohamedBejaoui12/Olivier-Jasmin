"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const current = testimonials[index];

  const go = (dir: 1 | -1) => {
    setIndex((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-pad" style={{ backgroundColor: "var(--color-sage)" }}>
      <div className="mx-auto max-w-4xl px-6 sm:px-8">
        <SectionHeading eyebrow="Avis" title="Ils Nous Ont Rendu Visite" />

        <div className="relative mt-14">
          <Quote
            className="mx-auto mb-6 h-10 w-10 opacity-40"
            style={{ color: "var(--color-emerald)" }}
            strokeWidth={1.2}
          />

          <div className="relative min-h-[220px] sm:min-h-[190px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0 flex flex-col items-center text-center"
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" style={{ color: "var(--color-gold)" }} />
                  ))}
                </div>
                <p className="font-display text-xl sm:text-2xl leading-relaxed" style={{ color: "var(--color-dark-green)" }}>
                  &ldquo;{current.quote}&rdquo;
                </p>
                <div className="mt-6">
                  <p className="font-medium" style={{ color: "var(--color-forest)" }}>
                    {current.name}
                  </p>
                  <p className="text-sm text-charcoal/60">{current.role}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6">
            <button
              onClick={() => go(-1)}
              aria-label="Avis précédent"
              className="rounded-full border border-[var(--color-emerald)]/30 p-2.5 hover:bg-white/40 transition-colors duration-300"
            >
              <ChevronLeft className="h-5 w-5" style={{ color: "var(--color-emerald)" }} strokeWidth={1.5} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setIndex(i)}
                  aria-label={`Aller à l'avis ${i + 1}`}
                  className="h-2 rounded-full transition-all duration-300"
                  style={{
                    width: i === index ? 24 : 8,
                    backgroundColor: i === index ? "var(--color-emerald)" : "rgba(20,48,31,0.25)",
                  }}
                />
              ))}
            </div>

            <button
              onClick={() => go(1)}
              aria-label="Avis suivant"
              className="rounded-full border border-[var(--color-emerald)]/30 p-2.5 hover:bg-white/40 transition-colors duration-300"
            >
              <ChevronRight className="h-5 w-5" style={{ color: "var(--color-emerald)" }} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
