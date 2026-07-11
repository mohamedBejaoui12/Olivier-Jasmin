import { GalleryImage } from "@/types";

const img = (seed: string, w = 800, h = 1000) => `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const galleryImages: GalleryImage[] = [
  { id: "g1", src: img("galerie-salle", 900, 1200), alt: "Salle principale du restaurant baignée de lumière naturelle", span: "row-span-2" },
  { id: "g2", src: img("galerie-plat-1", 800, 800), alt: "Couscous à l'agneau dressé avec finesse" },
  { id: "g3", src: img("galerie-jardin", 800, 900), alt: "Terrasse ombragée entourée de plantes méditerranéennes" },
  { id: "g4", src: img("galerie-dessert", 800, 800), alt: "Assortiment de pâtisseries tunisiennes" },
  { id: "g5", src: img("galerie-bar", 900, 1200), alt: "Comptoir en marbre vert et laiton doré", span: "row-span-2" },
  { id: "g6", src: img("galerie-cafe", 800, 800), alt: "Préparation du café tunisien à la cardamome" },
  { id: "g7", src: img("galerie-details", 800, 900), alt: "Détail botanique et vaisselle artisanale" },
  { id: "g8", src: img("galerie-soiree", 800, 800), alt: "Ambiance du soir aux lumières chaleureuses" },
];
