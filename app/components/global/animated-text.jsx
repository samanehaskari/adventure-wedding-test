"use client";
import { motion } from "motion/react";
import React from "react";
import Typography from "./typography";

export default function AnimatedText({ text }) {
  const ref = React.useRef(null);

  return (
    <motion.div ref={ref} initial="hidden" animate={"show"}>
      <Typography variant="h1" as="h1" className="text-white font-clash">
        {text.split("").map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.07 }}
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </Typography>
    </motion.div>
  );
}
