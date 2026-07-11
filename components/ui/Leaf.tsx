import { cn } from "@/lib/utils";

interface LeafProps {
  className?: string;
  color?: string;
}

export function Leaf({ className, color = "#5A7D4E" }: LeafProps) {
  return (
    <svg
      viewBox="0 0 64 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none", className)}
      aria-hidden="true"
    >
      <path
        d="M32 2C48 14 60 32 60 52C60 74 48 92 32 94C16 92 4 74 4 52C4 32 16 14 32 2Z"
        fill={color}
        fillOpacity="0.18"
      />
      <path
        d="M32 6V90"
        stroke={color}
        strokeOpacity="0.35"
        strokeWidth="1.5"
      />
    </svg>
  );
}
