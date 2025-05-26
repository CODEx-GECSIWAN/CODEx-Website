"use client";
import { motion } from "framer-motion";
import Team from "@/public/component/TeamSection/team";
import AnimatedBackground from "@/public/component/TeamSection/AnimatedBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gray-900 text-gray-200 overflow-hidden">
      <AnimatedBackground />

      {/* Hero Section */}
      <section className="relative z-10 flex flex-col items-center justify-center px-4 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow-lg"
        >
          Welcome to <span className="text-white">CODEx</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 max-w-2xl text-base md:text-lg text-gray-300"
        >
          "A community of passionate coders building a strong development culture on campus."
        </motion.p>
      </section>

      {/* Team Section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="relative z-10 w-full py-16 px-4 bg-gradient-to-b from-gray-800 to-gray-900"
      >
        <Team />
      </motion.section>
    </main>
  );
}
