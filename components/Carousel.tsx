"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Carousel({ isDarkMode }: { isDarkMode: boolean }) {
  const slides = [
    {
      title: "Reliable Engineering",
      desc: "Scalable backend systems, monitoring, and performance.",
    },
    {
      title: "AI Integrations",
      desc: "LLM-driven features, RAG pipelines and automation.",
    },
    {
      title: "Cloud & DevOps",
      desc: "Infrastructure as Code, CI/CD, and cost-optimized deployments.",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="w-full mb-6">
      <div className={`${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} rounded-2xl p-4 border shadow-md`}>
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
            className="min-h-[88px] flex flex-col justify-center"
          >
            <h3 className={`${isDarkMode ? 'text-white' : 'text-slate-900'} font-semibold text-lg`}>{slides[index].title}</h3>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-sm mt-1`}>{slides[index].desc}</p>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-2 mt-3">
          {slides.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`${i === index ? 'w-8 h-2 rounded-full bg-blue-600' : 'w-4 h-2 rounded-full bg-gray-300/60'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
