import { MenuCategory } from "@/types";
import { MenuCard } from "./MenuCard";

interface MenuCategorySectionProps {
  category: MenuCategory;
}

export function MenuCategorySection({ category }: MenuCategorySectionProps) {
  return (
    <div id={category.id} className="scroll-mt-40 py-14 sm:py-20 first:pt-6">
      <div className="mb-10 flex flex-col gap-3 sm:mb-12">
        <span className="text-xs uppercase tracking-[0.3em]" style={{ color: "var(--color-olive)" }}>
          Catégorie
        </span>
        <h3 className="font-display text-3xl sm:text-4xl" style={{ color: "var(--color-dark-green)" }}>
          {category.label}
        </h3>
        <p className="max-w-lg text-sm sm:text-base text-charcoal/65">{category.description}</p>
        <div className="gold-divider mt-2 w-full max-w-xs" />
      </div>

      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {category.items.map((item, i) => (
          <MenuCard key={item.id} item={item} index={i} />
        ))}
      </div>
    </div>
  );
}
