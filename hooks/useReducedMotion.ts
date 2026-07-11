"use client";

import { useEffect, useState } from "react";

/**
 * Returns true if the user has requested reduced motion at the OS/browser
 * level. Components can use this to skip decorative animations while still
 * respecting the global CSS fallback in globals.css.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);

    const listener = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener("change", listener);
    return () => query.removeEventListener("change", listener);
  }, []);

  return reduced;
}
