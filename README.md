# Olivier & Jasmin — Café & Restaurant Tunisien de Luxe

Site vitrine premium (menu digital) pour un café-restaurant tunisien, dans un
esprit "Michelin meets modern botanical hotel". Design minimaliste, organique
et haut de gamme, entièrement en français.

![Stack](https://img.shields.io/badge/Next.js-15-black) ![TypeScript](https://img.shields.io/badge/TypeScript-5-blue) ![Tailwind](https://img.shields.io/badge/Tailwind-v4-38bdf8) ![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11-purple)

## ✨ Aperçu

- **Hero** plein écran avec parallax doux, feuilles flottantes animées et CTA.
- **Menu** complet : 10 catégories (Cafés, Petit Déjeuner, Plats, Salades,
  Boissons, Desserts, Pizza, Burgers, Grillades, Cocktails), navigation à
  onglets collante avec indicateur animé, cartes plats premium.
- **Nos Spécialités** : mise en avant des créations signature du chef.
- **À propos** : histoire du restaurant en deux colonnes, valeurs, imagerie
  nature.
- **Galerie** : masonry responsive avec zoom au survol.
- **Témoignages** : carrousel automatique avec notation étoiles.
- **Contact** : horaires, téléphone, adresse, boutons itinéraire & réservation.
- **Navbar** collante avec effet verre (glassmorphism) et tiroir mobile animé.
- **Footer** minimaliste avec séparateur doré.

Palette "Luxury Nature" (émeraude, forêt, olive, sauge, or), typographie
Cormorant Garamond (titres) + Inter (texte courant), animations Framer Motion
partout mais toujours discrètes, respect de `prefers-reduced-motion`.

## 🧱 Stack technique

- **Next.js 15** (App Router, React 19)
- **TypeScript** strict
- **Tailwind CSS v4** (configuration via `@theme` dans `app/globals.css`,
  aucun fichier `tailwind.config.js` requis)
- **Framer Motion** pour toutes les animations
- **Lucide React** pour les icônes
- **next/image** pour l'optimisation et le lazy loading des images
- **next/font/google** pour l'auto-hébergement des polices (aucun CLS)

## 📁 Structure du projet

```
app/
  layout.tsx        → layout racine, polices, métadonnées SEO
  page.tsx           → assemblage des sections de la page d'accueil
  globals.css        → thème Tailwind v4 (@theme), styles de base
  icon.svg            → favicon / icône d'app

components/
  ui/                 → Button, SectionHeading, Leaf, FloatingLeaves
  layout/             → Navbar, Footer
  hero/               → Hero
  menu/               → Menu, CategoryNav, MenuCategorySection, MenuCard,
                         FeaturedDishes, icon-map
  about/              → About
  gallery/             → Gallery
  testimonials/        → Testimonials
  contact/              → Contact

data/
  menu.ts             → catégories & plats (contenu tunisien réaliste, prix en DT)
  gallery.ts          → images de la galerie
  testimonials.ts      → avis clients

lib/
  utils.ts            → cn() et formatPrice()

types/
  index.ts            → types partagés (MenuItem, MenuCategory, etc.)

public/
  favicon.svg
```

## 🚀 Installation

Prérequis : **Node.js 18.18+** (recommandé : Node 20 LTS) et npm.

```bash
# 1. Extraire l'archive puis se placer dans le dossier du projet
cd olivier-et-jasmin

# 2. Installer les dépendances
npm install

# 3. Lancer le serveur de développement
npm run dev
```

Le site est ensuite disponible sur **http://localhost:3000**.

### Autres commandes

```bash
npm run build   # build de production optimisé
npm run start   # démarre le serveur en mode production (après build)
npm run lint    # vérifie le code avec ESLint
```

> Note : la première exécution de `npm run build` ou `npm run dev` télécharge
> les polices Google Fonts (Cormorant Garamond, Inter) — une connexion
> internet est requise lors de cette étape (elles sont ensuite auto-hébergées
> par Next.js, aucun appel externe n'est fait au runtime).

## 🖼️ Images

Le projet utilise des images de substitution (placeholders photographiques)
servies via `picsum.photos` et optimisées par `next/image`. Pour la mise en
production, remplacez simplement les URLs dans `data/menu.ts`,
`data/gallery.ts`, `components/hero/Hero.tsx` et `components/about/About.tsx`
par vos propres photographies (idéalement dans `public/images/` ou un CDN),
puis mettez à jour `next.config.ts` si vous changez de nom de domaine
d'images.

## 🎨 Personnalisation rapide

- **Couleurs & typographie** : `app/globals.css`, bloc `@theme`.
- **Contenu du menu / prix** : `data/menu.ts`.
- **Coordonnées & horaires** : `components/contact/Contact.tsx` et
  `components/layout/Footer.tsx`.
- **Texte du hero / slogan** : `components/hero/Hero.tsx`.

## ♿ Accessibilité & performance

- Contrastes vérifiés sur fond ivoire / vert forêt.
- Focus visible (`:focus-visible`) sur tous les éléments interactifs.
- `prefers-reduced-motion` respecté (animations désactivées automatiquement).
- Images en `next/image` (lazy loading, formats AVIF/WebP, tailles responsives).
- Découpage en composants réutilisables, aucun code dupliqué.
- Build testé : compilation TypeScript stricte réussie, 0 erreur.

## 📄 Licence

Projet livré à des fins d'implémentation pour le client. Adaptez librement le
contenu, les couleurs et l'architecture à vos besoins.
