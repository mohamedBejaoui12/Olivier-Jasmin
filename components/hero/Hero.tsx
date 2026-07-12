"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf as LeafIcon, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { FloatingLeaves } from "@/components/ui/FloatingLeaves";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);

  return (
    <section
      id="accueil"
      ref={ref}
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <Image
          src="https://res.cloudinary.com/dqep315sl/image/upload/v1783894207/images/forest_oyrmss.jpg"
          alt="Forêt luxuriante baignée de lumière douce"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,48,31,0.55) 0%, rgba(15,81,50,0.6) 45%, rgba(15,81,50,0.85) 100%)",
          }}
        />
      </motion.div>

      <FloatingLeaves className="absolute inset-0 z-10 hidden sm:block" count={5} />

      <motion.div style={{ opacity }} className="relative z-20 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[var(--color-gold)]/50"
        >
          <LeafIcon className="h-7 w-7" style={{ color: "var(--color-gold-light)" }} strokeWidth={1.3} />
        </motion.div>

        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="block text-xs sm:text-sm uppercase tracking-[0.4em] text-[var(--color-sage)] mb-5"
        >
          Café &amp; Restaurant — Tunis
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.35, duration: 0.9, ease: "easeOut" }}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.02] text-[var(--color-warm-white)]"
        >
          Olivier &amp; Jasmin
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.7 }}
          className="mt-6 font-display italic text-xl sm:text-2xl md:text-3xl text-gradient-gold"
        >
          La nature dans chaque assiette.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mt-5 mx-auto max-w-xl text-sm sm:text-base text-[var(--color-sage)]/90 leading-relaxed"
        >
          Une table tunisienne d&apos;exception, où produits du terroir et gestes
          précis se rencontrent dans un écrin végétal et raffiné.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="#menu">Découvrir notre Menu</Button>
          <Button href="#contact" variant="outline" className="!border-[var(--color-sage)]/50 !text-[var(--color-warm-white)] hover:!bg-white/10">
            Réserver une table
          </Button>
        </motion.div>
      </motion.div>

      <motion.a
        href="#menu"
        aria-label="Défiler vers le menu"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ opacity: { delay: 1.3, duration: 0.6 }, y: { repeat: Infinity, duration: 2, ease: "easeInOut" } }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-[var(--color-sage)]"
      >
        <ArrowDown className="h-6 w-6" strokeWidth={1.3} />
      </motion.a>
    </section>
  );
}
