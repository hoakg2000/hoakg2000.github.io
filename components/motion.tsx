"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

export const spring = { type: "spring", stiffness: 80, damping: 20, mass: 0.9 } as const;

type RevealProps = HTMLMotionProps<"div"> & { delay?: number };

/** Fades content up once it scrolls into view. */
export function Reveal({ delay = 0, children, ...rest }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ ...spring, delay }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
