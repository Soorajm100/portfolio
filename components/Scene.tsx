"use client";

import { motion } from "framer-motion";
import { Code2, Lightbulb, Rocket, Brain } from "lucide-react";

export default function Scene({ isDarkMode }: { isDarkMode: boolean }) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const features = [
    { icon: Code2, label: "Clean Code", desc: "Well-structured, maintainable solutions" },
    { icon: Rocket, label: "Fast Delivery", desc: "Rapid development and deployment" },
    { icon: Brain, label: "Smart Solutions", desc: "Intelligent problem-solving approach" },
    { icon: Lightbulb, label: "Innovation", desc: "Always exploring new technologies" },
  ];

  return (
    <motion.div 
      className="w-full max-w-2xl mx-auto px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Main Profile Card */}
      <motion.div 
        variants={itemVariants}
        className={`${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} rounded-2xl p-8 border shadow-lg hover:shadow-xl transition-shadow duration-300`}
      >
        {/* Initials Avatar */}
        <motion.div 
          className={`w-24 h-24 rounded-xl ${isDarkMode ? 'bg-blue-600' : 'bg-blue-500'} flex items-center justify-center mx-auto mb-6 font-bold text-white text-4xl`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          SP
        </motion.div>

        {/* Profile Info */}
        <h2 className={`text-3xl font-bold text-center mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
          Sooraj Poojary
        </h2>
        <p className={`text-center text-lg font-medium mb-6 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
          Software Engineer
        </p>
        <p className={`text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} leading-relaxed`}>
          Expertise in backend systems, cloud infrastructure, and AI-powered applications. Focused on building scalable, production-ready solutions.
        </p>
      </motion.div>

      {/* Features Grid */}
      <motion.div 
        className="grid grid-cols-2 gap-4 mt-8"
        variants={containerVariants}
      >
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className={`${isDarkMode ? 'bg-slate-700 border-slate-600' : 'bg-gray-50 border-gray-200'} rounded-lg p-4 border text-center transition-all duration-300`}
            >
              <Icon className={`w-6 h-6 mx-auto mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`} />
              <h3 className={`font-semibold text-sm ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                {feature.label}
              </h3>
              <p className={`text-xs mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {feature.desc}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}