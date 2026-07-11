import { Hero } from "@/components/hero/Hero";
import { Menu } from "@/components/menu/Menu";
import { FeaturedDishes } from "@/components/menu/FeaturedDishes";
import { About } from "@/components/about/About";
import { Gallery } from "@/components/gallery/Gallery";
import { Testimonials } from "@/components/testimonials/Testimonials";
import { Contact } from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Menu />
      <FeaturedDishes />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
    </>
  );
}
