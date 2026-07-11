"use client";

import { motion } from "framer-motion";
import { Leaf } from "./Leaf";

interface FloatingLeavesProps {
  count?: number;
  className?: string;
}

const positions = [
  { top: "8%", left: "6%", size: 46, delay: 0, duration: 9 },
  { top: "22%", left: "88%", size: 34, delay: 1.2, duration: 11 },
  { top: "62%", left: "4%", size: 30, delay: 0.6, duration: 10 },
  { top: "78%", left: "92%", size: 42, delay: 1.8, duration: 8.5 },
  { top: "42%", left: "50%", size: 24, delay: 2.4, duration: 12 },
];

export function FloatingLeaves({ count = 5, className }: FloatingLeavesProps) {
  const set = positions.slice(0, count);

  return (
    <div className={className} aria-hidden="true">
      {set.map((p, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{ top: p.top, left: p.left, width: p.size, height: p.size * 1.4 }}
          animate={{
            y: [0, -18, 0],
            rotate: [0, 8, -4, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Leaf className="w-full h-full" color="#C9A227" />
        </motion.div>
      ))}
    </div>
  );
}
