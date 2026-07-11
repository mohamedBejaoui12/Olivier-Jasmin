"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  icon?: ReactNode;
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  icon,
}: ButtonProps) {
  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-sm sm:text-base font-medium tracking-wide transition-all duration-300 overflow-hidden";

  const variants = {
    primary:
      "bg-[var(--color-emerald)] text-[var(--color-warm-white)] hover:shadow-[0_0_0_1px_var(--color-gold),0_18px_40px_-12px_rgba(201,162,39,0.55)]",
    outline:
      "border border-[var(--color-gold)]/60 text-[var(--color-dark-green)] hover:bg-[var(--color-gold)]/10",
    ghost: "text-[var(--color-dark-green)] hover:text-[var(--color-gold)]",
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      whileHover={{ y: -2, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(base, variants[variant], className)}
    >
      {children}
      {icon}
    </Component>
  );
}
