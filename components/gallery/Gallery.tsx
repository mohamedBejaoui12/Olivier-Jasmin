"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryImages } from "@/data/gallery";
import { cn } from "@/lib/utils";

export function Gallery() {
  return (
    <section id="galerie" className="section-pad" style={{ backgroundColor: "var(--color-ivory)" }}>
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="L'Expérience"
          title="Galerie"
          description="Un aperçu de l'atmosphère qui vous attend, entre matières naturelles et lumière douce."
        />

        <div className="mt-14 grid grid-cols-2 auto-rows-[180px] gap-4 sm:auto-rows-[220px] sm:gap-5 md:grid-cols-4">
          {galleryImages.map((image, i) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: "easeOut", delay: (i % 4) * 0.08 }}
              className={cn(
                "group relative overflow-hidden rounded-2xl sm:rounded-3xl",
                image.span === "row-span-2" ? "row-span-2" : "row-span-1"
              )}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[var(--color-dark-green)]/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="flex w-full items-center justify-between p-4">
                  <p className="text-xs text-[var(--color-warm-white)]/90 line-clamp-2 pr-2">
                    {image.alt}
                  </p>
                  <Expand className="h-4 w-4 shrink-0 text-[var(--color-gold-light)]" strokeWidth={1.5} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
