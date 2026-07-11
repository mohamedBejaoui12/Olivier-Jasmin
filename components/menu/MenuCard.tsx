"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MenuItem } from "@/types";
import { formatPrice } from "@/lib/utils";

interface MenuCardProps {
  item: MenuItem;
  index: number;
}

export function MenuCard({ item, index }: MenuCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: "easeOut", delay: (index % 3) * 0.08 }}
      whileHover={{ y: -8 }}
      className="group relative flex flex-col overflow-hidden rounded-[1.75rem] bg-[var(--color-ivory)] shadow-[var(--shadow-soft)] transition-shadow duration-500 hover:shadow-[var(--shadow-lift)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark-green)]/35 via-transparent to-transparent" />
        {item.badge && (
          <span
            className="absolute top-4 left-4 rounded-full px-3 py-1 text-[0.65rem] uppercase tracking-[0.2em] font-medium"
            style={{
              backgroundColor:
                item.badge === "Nouveau" ? "var(--color-gold)" : "var(--color-emerald)",
              color: "var(--color-warm-white)",
            }}
          >
            {item.badge}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl sm:text-2xl leading-snug" style={{ color: "var(--color-dark-green)" }}>
            {item.name}
          </h3>
          <span className="whitespace-nowrap font-display text-lg" style={{ color: "var(--color-gold)" }}>
            {formatPrice(item.price)}
          </span>
        </div>
        <div className="h-px w-10 bg-[var(--color-gold)]/50" />
        <p className="text-sm leading-relaxed text-charcoal/70">{item.description}</p>
      </div>
    </motion.article>
  );
}
