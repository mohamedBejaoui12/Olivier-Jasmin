"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf as LeafIcon, Sprout, Wheat } from "lucide-react";
import { Leaf } from "@/components/ui/Leaf";

const values = [
  {
    icon: Sprout,
    title: "Produits du Terroir",
    text: "Légumes, herbes et huile d'olive sélectionnés auprès de producteurs tunisiens de confiance.",
  },
  {
    icon: Wheat,
    title: "Savoir-Faire Authentique",
    text: "Des recettes transmises de génération en génération, réinterprétées avec précision.",
  },
  {
    icon: LeafIcon,
    title: "Esprit Botanique",
    text: "Un cadre pensé comme un jardin intérieur, propice à la sérénité et à la dégustation.",
  },
];

export function About() {
  return (
    <section id="a-propos" className="section-pad relative overflow-hidden" style={{ backgroundColor: "var(--color-warm-white)" }}>
      <Leaf className="absolute -left-10 top-10 h-40 w-28 opacity-60" color="#B7C9A8" />
      <Leaf className="absolute -right-8 bottom-10 h-56 w-36 rotate-180 opacity-40" color="#5A7D4E" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-[var(--shadow-lift)]">
            <Image
              src="https://picsum.photos/seed/about-restaurant-story/900/1100"
              alt="Le chef préparant un plat tunisien dans une cuisine baignée de verdure"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div
            className="absolute -bottom-8 -right-6 hidden w-52 rounded-2xl border border-[var(--color-gold)]/30 bg-[var(--color-warm-white)] p-5 shadow-[var(--shadow-soft)] sm:block"
          >
            <p className="font-display text-3xl" style={{ color: "var(--color-gold)" }}>
              12+
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-charcoal/60">
              Années de passion culinaire
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          <span className="text-xs sm:text-sm uppercase tracking-[0.35em] font-medium" style={{ color: "var(--color-olive)" }}>
            Notre Histoire
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl leading-[1.1]" style={{ color: "var(--color-dark-green)" }}>
            Une table où la Tunisie respire.
          </h2>
          <div className="mt-4 h-px w-20 bg-[var(--color-gold)]" />

          <p className="mt-6 text-base sm:text-lg leading-relaxed text-charcoal/75">
            Né d&apos;un amour profond pour les saveurs tunisiennes, Olivier &amp;
            Jasmin est né du désir de sublimer notre patrimoine culinaire dans un
            cadre à la hauteur de sa richesse. Ici, chaque assiette raconte une
            histoire : celle des marchés d&apos;Ariana, des jardins d&apos;oliviers
            et des recettes de nos grand-mères, réinterprétées avec la précision
            d&apos;une grande maison.
          </p>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-charcoal/75">
            Entourés de plantes méditerranéennes et de matières nobles, nos hôtes
            vivent une expérience sensorielle complète — du premier thé à la
            menthe jusqu&apos;au dernier morceau de pâtisserie tunisienne.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.title} className="flex flex-col gap-2.5">
                <value.icon className="h-6 w-6" style={{ color: "var(--color-gold)" }} strokeWidth={1.4} />
                <h3 className="font-display text-lg" style={{ color: "var(--color-dark-green)" }}>
                  {value.title}
                </h3>
                <p className="text-sm leading-relaxed text-charcoal/65">{value.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
