"use client";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.25 }}
      transition={{ duration: 2 }}
      className="absolute top-0 left-0 w-full h-full z-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-black animate-pulse"
    />
  );
}
//ashish
