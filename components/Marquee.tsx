"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
  text: string;
  separator?: string;
  repeat?: number;
  duration?: number;
  className?: string;
  textClassName?: string;
}

export default function Marquee({
  text,
  separator = "  ✦  ",
  repeat = 8,
  duration = 28,
  className = "",
  textClassName = "",
}: MarqueeProps) {
  const segment = Array(repeat).fill(text).join(separator) + separator;
  const doubled = segment + segment;

  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <motion.div
        className={`inline-block ${textClassName}`}
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
      >
        {doubled}
      </motion.div>
    </div>
  );
}
