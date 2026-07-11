export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  badge?: "Nouveau" | "Populaire";
  featured?: boolean;
}

export interface MenuCategory {
  id: string;
  label: string;
  icon: string;
  description: string;
  items: MenuItem[];
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  span?: "row-span-2" | "";
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
}
