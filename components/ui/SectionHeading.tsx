"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-left"
      )}
    >
      <motion.span
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "text-xs sm:text-sm uppercase tracking-[0.35em] font-medium",
          light ? "text-sage" : "text-olive"
        )}
      >
        {eyebrow}
      </motion.span>

      <motion.h2
        initial={{ opacity: 0, y: 18, filter: "blur(6px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
        className={cn(
          "font-display text-4xl sm:text-5xl md:text-6xl leading-[1.08]",
          light ? "text-warm-white" : "text-dark-green"
        )}
        style={{ color: light ? "var(--color-warm-white)" : "var(--color-dark-green)" }}
      >
        {title}
      </motion.h2>

      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
        className="h-px w-20 origin-left"
        style={{ background: "var(--color-gold)" }}
      />

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className={cn(
            "max-w-xl text-base sm:text-lg leading-relaxed",
            light ? "text-sage/90" : "text-charcoal/75"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
