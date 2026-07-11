import { Leaf as LeafIcon, Instagram, Facebook, Phone } from "lucide-react";

const links = [
  { href: "#accueil", label: "Accueil" },
  { href: "#menu", label: "Menu" },
  { href: "#specialites", label: "Nos Spécialités" },
  { href: "#a-propos", label: "À propos" },
  { href: "#galerie", label: "Galerie" },
  { href: "#contact", label: "Contact" },
];

const hours = [
  { day: "Lundi — Vendredi", time: "08h00 — 23h00" },
  { day: "Samedi — Dimanche", time: "09h00 — 00h00" },
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-dark-green)" }} className="text-[var(--color-sage)]">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <a href="#accueil" className="flex items-center gap-2 mb-4">
              <LeafIcon className="h-6 w-6" style={{ color: "var(--color-gold)" }} strokeWidth={1.5} />
              <span className="font-display text-2xl text-[var(--color-warm-white)]">
                Olivier &amp; Jasmin
              </span>
            </a>
            <p className="max-w-sm text-sm leading-relaxed text-[var(--color-sage)]/80">
              Un café-restaurant où la Tunisie authentique rencontre l&apos;élégance
              botanique. Chaque assiette est une invitation au voyage.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" aria-label="Instagram" className="p-2.5 rounded-full border border-[var(--color-gold)]/30 hover:border-[var(--color-gold)] transition-colors duration-300">
                <Instagram className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook" className="p-2.5 rounded-full border border-[var(--color-gold)]/30 hover:border-[var(--color-gold)] transition-colors duration-300">
                <Facebook className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a href="tel:+21671234567" aria-label="Téléphone" className="p-2.5 rounded-full border border-[var(--color-gold)]/30 hover:border-[var(--color-gold)] transition-colors duration-300">
                <Phone className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-lg text-[var(--color-warm-white)] mb-4">Navigation</h3>
            <ul className="space-y-2.5 text-sm">
              {links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-[var(--color-gold)] transition-colors duration-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-lg text-[var(--color-warm-white)] mb-4">Horaires</h3>
            <ul className="space-y-3 text-sm">
              {hours.map((h) => (
                <li key={h.day} className="flex flex-col">
                  <span className="text-[var(--color-warm-white)]/90">{h.day}</span>
                  <span className="text-[var(--color-sage)]/70">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="gold-divider mt-12 mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--color-sage)]/60">
          <p>© {new Date().getFullYear()} Olivier &amp; Jasmin. Tous droits réservés.</p>
          <p>Ariana, Tunisie</p>
        </div>
      </div>
    </footer>
  );
}
