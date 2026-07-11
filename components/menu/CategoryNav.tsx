"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { menuCategories } from "@/data/menu";
import { iconMap } from "./icon-map";
import { cn } from "@/lib/utils";

export function CategoryNav() {
  const [active, setActive] = useState(menuCategories[0].id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    menuCategories.forEach((cat) => {
      const el = document.getElementById(cat.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="sticky top-[76px] sm:top-[88px] z-30 -mx-6 px-6 sm:mx-0 sm:px-0">
      <div className="glass rounded-full border border-[var(--color-sage)]/30 shadow-[var(--shadow-soft)] overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-1.5 px-2.5 py-2.5 min-w-max">
          {menuCategories.map((cat) => {
            const Icon = iconMap[cat.icon];
            const isActive = active === cat.id;
            return (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className={cn(
                  "relative flex items-center gap-2 whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-medium transition-colors duration-300",
                  isActive ? "text-[var(--color-warm-white)]" : "text-charcoal/70 hover:text-[var(--color-emerald)]"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="category-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: "var(--color-emerald)" }}
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
                <Icon className="relative z-10 h-4 w-4" strokeWidth={1.5} />
                <span className="relative z-10">{cat.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
