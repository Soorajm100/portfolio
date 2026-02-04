"use client";
import { motion } from "framer-motion";

export const ProjectIcon = ({ type }: { type: "ml" | "emergency" }) => {
  if (type === "ml") {
    return (
      <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 300 }} className="relative w-16 h-16 rounded-2xl flex items-center justify-center overflow-hidden">
        {/* glow background */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-500/30 via-orange-400/20 to-yellow-300/20 blur-xl"></div>

        {/* glass layer */}
        <div className="absolute inset-0 bg-white/40 dark:bg-white/10 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-2xl"></div>

        {/* icon */}
        <svg
          className="relative z-10 w-9 h-9 text-rose-600 dark:text-rose-400 drop-shadow-[0_0_10px_rgba(244,63,94,0.7)]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          viewBox="0 0 24 24"
        >
          <path d="M12 2v6m0 0l2-2m-2 2l-2-2" />
          <path d="M4 14c2-4 5-6 8-6s6 2 8 6" />
          <path d="M6 20c2-3 4-4 6-4s4 1 6 4" />
        </svg>
      </motion.div>
    );
  }

  return (
    <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.98 }} transition={{ type: "spring", stiffness: 300 }} className="relative w-16 h-16 rounded-2xl flex items-center justify-center overflow-hidden">
      {/* glow background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-cyan-400/20 to-indigo-500/20 blur-xl"></div>

      {/* glass layer */}
      <div className="absolute inset-0 bg-white/40 dark:bg-white/10 backdrop-blur-xl border border-white/30 dark:border-white/10 rounded-2xl"></div>

      {/* icon */}
      <svg
        className="relative z-10 w-9 h-9 text-blue-600 dark:text-blue-400 drop-shadow-[0_0_12px_rgba(59,130,246,0.75)]"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        viewBox="0 0 24 24"
      >
        <path d="M12 21s7-4.5 7-11a7 7 0 0 0-14 0c0 6.5 7 11 7 11z" />
        <path d="M12 11v4" />
        <path d="M10 13h4" />
      </svg>
    </motion.div>
  );
};
