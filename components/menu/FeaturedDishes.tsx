"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredDishes } from "@/data/menu";
import { formatPrice } from "@/lib/utils";

export function FeaturedDishes() {
  return (
    <section
      id="specialites"
      className="section-pad relative overflow-hidden"
      style={{ backgroundColor: "var(--color-forest)" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 15% 20%, rgba(201,162,39,0.18), transparent 45%), radial-gradient(circle at 85% 80%, rgba(183,201,168,0.15), transparent 40%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Sélection du Chef"
          title="Nos Spécialités"
          description="Les créations signature de notre chef, sublimant le terroir tunisien avec précision et générosité."
          light
        />

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {featuredDishes.map((dish, i) => (
            <motion.article
              key={dish.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut", delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-[2rem] border border-[var(--color-gold)]/25"
            >
              <div className="relative aspect-[16/11]">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(20,48,31,0.05) 0%, rgba(20,48,31,0.9) 88%)",
                  }}
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 p-8">
                <span
                  className="mb-3 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.65rem] uppercase tracking-[0.25em]"
                  style={{ backgroundColor: "var(--color-gold)", color: "var(--color-dark-green)" }}
                >
                  <Sparkles className="h-3 w-3" strokeWidth={2} />
                  {dish.categoryLabel}
                </span>
                <div className="flex items-end justify-between gap-4">
                  <h3 className="font-display text-2xl sm:text-3xl text-[var(--color-warm-white)]">
                    {dish.name}
                  </h3>
                  <span className="font-display text-xl text-gradient-gold whitespace-nowrap">
                    {formatPrice(dish.price)}
                  </span>
                </div>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-[var(--color-sage)]/90">
                  {dish.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
