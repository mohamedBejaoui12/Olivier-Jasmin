"use client";

import { motion } from "framer-motion";
import { Clock, Phone, MapPin, CalendarCheck } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const cards = [
  {
    icon: Clock,
    title: "Horaires",
    lines: ["Lun — Ven : 08h00 — 23h00", "Sam — Dim : 09h00 — 00h00"],
  },
  {
    icon: Phone,
    title: "Téléphone",
    lines: ["+216 71 234 567", "Réservations & renseignements"],
  },
  {
    icon: MapPin,
    title: "Adresse",
    lines: ["12 Avenue des Oliviers", "Ariana, Tunisie"],
  },
];

export function Contact() {
  return (
    <section id="contact" className="section-pad relative" style={{ backgroundColor: "var(--color-ivory)" }}>
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Nous Trouver"
          title="Contact & Réservation"
          description="Réservez votre table pour une expérience culinaire tunisienne raffinée, à toute heure de la journée."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: "easeOut", delay: i * 0.1 }}
              className="rounded-3xl bg-[var(--color-warm-white)] p-7 shadow-[var(--shadow-soft)] border border-[var(--color-sage)]/25"
            >
              <div
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-full"
                style={{ backgroundColor: "rgba(15,81,50,0.08)" }}
              >
                <card.icon className="h-5 w-5" style={{ color: "var(--color-emerald)" }} strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-xl mb-2" style={{ color: "var(--color-dark-green)" }}>
                {card.title}
              </h3>
              {card.lines.map((line) => (
                <p key={line} className="text-sm text-charcoal/65 leading-relaxed">
                  {line}
                </p>
              ))}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mt-10 flex flex-col items-center justify-center gap-5 rounded-3xl p-10 text-center sm:flex-row sm:justify-between sm:text-left"
          style={{ backgroundColor: "var(--color-emerald)" }}
        >
          <div>
            <h3 className="font-display text-2xl sm:text-3xl text-[var(--color-warm-white)]">
              Prêt à vivre l&apos;expérience ?
            </h3>
            <p className="mt-2 max-w-md text-sm text-[var(--color-sage)]/90">
              Notre équipe vous accueille chaque jour pour un moment hors du temps.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              href="https://maps.google.com"
              variant="outline"
              className="!border-[var(--color-gold)]/60 !text-[var(--color-warm-white)] hover:!bg-white/10"
              icon={<MapPin className="h-4 w-4" strokeWidth={1.5} />}
            >
              Itinéraire
            </Button>
            <Button href="tel:+21671234567" icon={<CalendarCheck className="h-4 w-4" strokeWidth={1.5} />}>
              Réserver une table
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
