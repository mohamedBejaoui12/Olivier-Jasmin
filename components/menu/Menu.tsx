import { SectionHeading } from "@/components/ui/SectionHeading";
import { CategoryNav } from "./CategoryNav";
import { MenuCategorySection } from "./MenuCategorySection";
import { menuCategories } from "@/data/menu";

export function Menu() {
  return (
    <section id="menu" className="section-pad relative" style={{ backgroundColor: "var(--color-warm-white)" }}>
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <SectionHeading
          eyebrow="Notre Carte"
          title="Le Menu"
          description="Une carte vivante, entre traditions tunisiennes et gestes de haute gastronomie, composée au fil des saisons."
        />

        <div className="mt-12">
          <CategoryNav />
        </div>

        <div className="divide-y divide-[var(--color-sage)]/25">
          {menuCategories.map((category) => (
            <MenuCategorySection key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}
