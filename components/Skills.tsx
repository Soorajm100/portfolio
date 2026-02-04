"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaCloud, FaBrain, FaTools } from "react-icons/fa";
const skillsData = [
  {
    title: "Programming Languages",
    subtitle: "Core languages I use for building scalable systems",
    icon: <FaCode />,
    glow: "from-blue-500/20 to-indigo-500/10",
    items: [
      {
        name: "Python",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
            className="w-12 h-12"
            alt="Python"
          />
        ),
      },

    
      {
        name: "JavaScript",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
            className="w-12 h-12"
            alt="JavaScript"
          />
        ),
      },
        {
         name: "C++",

        icon : (<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg"  
             className="w-12 h-12"
            alt="Cpp"
        
        />
          )

      } , 
      {
        name: "TypeScript",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg"
            className="w-12 h-12"
            alt="TypeScript"
          />
        ),
      },
      {
        name: "MySQL",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
            className="w-12 h-12"
            alt="MySQL"
          />
        ),
      },
    ],
  },

  {
    title: "Frameworks & Libraries",
    subtitle: "Frontend, backend and AI frameworks",
    icon: <FaTools />,
    glow: "from-cyan-500/20 to-emerald-500/10",
    items: [
      {
        name: "React",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
            className="w-12 h-12"
            alt="React"
          />
        ),
      },
      {
        name: "Next.js",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
            className="w-12 h-12 dark:invert"
            alt="Next.js"
          />
        ),
      },
      {
        name: "LangChain",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
            className="w-12 h-12"
            alt="LangChain"
          />
        ),
      },
      {
        name: "TensorFlow",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg"
            className="w-12 h-12"
            alt="TensorFlow"
          />
        ),
      },
    ],
  },

  {
    title: "Cloud & DevOps",
    subtitle: "Infrastructure and deployment tools",
    icon: <FaCloud />,
    glow: "from-orange-500/20 to-yellow-500/10",
    items: [
      {
        name: "AWS",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
            className="w-14 h-14"
            alt="AWS"
          />
        ),
      },
      {
        name: "Docker",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
            className="w-12 h-12"
            alt="Docker"
          />
        ),
      },
      {
        name: "Git",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
            className="w-12 h-12"
            alt="Git"
          />
        ),
      },
      {
        name: "CI/CD",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg"
            className="w-12 h-12"
            alt="GitHub Actions"
          />
        ),
      },
    ],
  },

  {
    title: "AI/ML & Data",
    subtitle: "Modern AI workflows and data systems",
    icon: <FaBrain />,
    glow: "from-purple-500/20 to-pink-500/10",
    items: [
      {
        name: "LLMs",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/openapi/openapi-original.svg"
            className="w-12 h-12"
            alt="LLMs"
          />
        ),
      },
      {
        name: "RAG",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/elasticsearch/elasticsearch-original.svg"
            className="w-12 h-12"
            alt="RAG"
          />
        ),
      },
      {
        name: "Neural Nets",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg"
            className="w-12 h-12"
            alt="Neural Nets"
          />
        ),
      },
      {
        name: "ANN",
        icon: (
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apacheairflow/apacheairflow-original.svg"
            className="w-12 h-12"
            alt="ANN"
          />
        ),
      },
    ],
  },
];

const SkillsSection = ({ isDarkMode }: { isDarkMode: boolean }) => {
  return (
    <section
      id="skills"
      className={`relative w-full py-12 overflow-hidden 
      ${isDarkMode ? 'bg-gradient-to-br from-gray-950 via-gray-900 to-black' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'}`}
    >
      {/* Background Blur Orbs */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-blue-400/20 blur-3xl rounded-full" />
      <div className="absolute top-40 -right-20 w-72 h-72 bg-purple-400/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-orange-400/20 blur-3xl rounded-full" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Technical Skills
          </h2>
          <p className={`mt-4 text-base md:text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
            A mix of backend engineering, AI development, and cloud infrastructure
            skills that I use to build production-grade systems.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {skillsData.map((section, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl border 
              ${isDarkMode ? 'border-white/10 bg-white/5' : 'border-gray-200/70 bg-white/60'}
              backdrop-blur-xl shadow-lg p-8 overflow-hidden`}
            >
              {/* Category Gradient Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${section.glow} opacity-70 pointer-events-none`}
              ></div>

              {/* Header */}
              <div className="relative flex items-start justify-between mb-8">
                <div>
                  <h3 className={`text-xl md:text-2xl font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {section.title}
                  </h3>
                  <p className={`mt-2 text-sm md:text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {section.subtitle}
                  </p>
                </div>

                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-2xl 
                  ${isDarkMode ? 'bg-white/10 border-white/10' : 'bg-white/70 border-gray-200'}
                  border shadow-md`}
                >
                  <span className={`text-lg drop-shadow-[0_0_10px_rgba(255,255,255,0.25)] ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {section.icon}
                  </span>
                </div>
              </div>

              {/* Skill Grid */}
              <div className="relative grid grid-cols-2 sm:grid-cols-3 gap-5">
                {section.items.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.35, delay: index * 0.05 }}
                    whileHover={{ scale: 1.03 }}
                    className={`group relative flex flex-col items-center justify-center 
                    p-5 rounded-2xl border 
                    ${isDarkMode ? 'border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20' : 'border-gray-200/70 bg-white/70 hover:bg-white/95 hover:border-gray-300'}
                    backdrop-blur-md
                    hover:shadow-xl transition duration-300`}
                  >
                    {/* Icon Glow */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300">
                      <div className={`absolute inset-0 blur-2xl rounded-2xl ${isDarkMode ? 'bg-white/10' : 'bg-white/40'}`}></div>
                    </div>

                    {/* Icon */}
                    {skill.icon}

                    {/* Text */}
                    <p className={`mt-3 text-sm font-semibold transition relative z-10 ${isDarkMode ? 'text-white/80 group-hover:text-white' : 'text-gray-800 group-hover:text-gray-900'}`}>
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
