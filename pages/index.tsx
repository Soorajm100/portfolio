"use client";
import { useState, useEffect } from "react";
import { ProjectIcon } from "@/components/ProjectIcon";
import SkillsSection from "@/components/Skills";
import { 
  Menu, 
  X, 
  Download, 
  Moon, 
  Sun, 
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Award,
  Code,
  Database,
  Cloud,
  Cpu,
  Terminal,
  Sparkles,
  Zap,
  Brain,
  Trophy,
  HeartHandshake,
  Globe,
  Code2,
  FileText,
  Rocket,
  Flame,
  Activity,
  CheckCircle2,
  Coffee,
  FileJson,
  Server,
  Box,
  GitBranch,
  Layers
} from "lucide-react";

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Software Engineer @ Carelon Global Solutions",
    "Full-Stack Developer",
    "Cloud & DevOps Engineer",
    "AI/ML Enthusiast"
  ];

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  // Typing effect
  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText === currentRole) {
        // Pause before deleting
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && displayedText === "") {
        // Move to next role
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        // Type or delete character
        setDisplayedText(
          isDeleting
            ? currentRole.substring(0, displayedText.length - 1)
            : currentRole.substring(0, displayedText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMenuOpen(false);
  };

 
  const experiences = [
    {
      date: "Current",
      title: "Software Engineer",
      company: "Carelon Global Solutions",
      location: "Bengaluru, India",
    logo: "/screen.png",
      achievements: [
        "Architected LLM-powered Data Catalogue with AI-driven metadata management",
        "Built enterprise dashboards handling real-time analytics for millions of users",
        "Implemented AWS automation reducing infrastructure costs by 40%",
        "Designed RAG pipelines and intelligent agents using LangChain and vector databases",
        "Optimized database queries and caching strategies improving performance by 60%"
      ],
      techStack: ["Python","FastApi" , "Next.js" , "LangChain", "AWS", "React", "Node.js", "MongoDB", "Redis"]
    }
  ];

const projects = [
  {
    icon: <ProjectIcon type="ml" />,
    title: "ML Heat Transfer Prediction",
    metric: "99.2% Accuracy",
    desc: "Built a neural network model to predict heat transfer coefficients, improving simulation reliability and reducing experimental dependency.",
    highlights: ["Neural Networks", "Feature Engineering", "Thermal Simulation"],
    link: "https://research-project-frontend-five.vercel.app/",
  },
  {
    icon: <ProjectIcon type="emergency" />,
    title: "Emergency Response System",
    metric: "Real-Time Tracking",
    desc: "Designed a crisis response platform enabling live ambulance tracking, hospital allocation, and emergency routing with fast API performance.",
    highlights: ["Real-time Updates", "Route Optimization", "Scalable Backend"],
    link: "https://medical-frontend-gamma-three.vercel.app/",
  },
];

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/sooraj123/",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
        className="w-10 h-10 drop-shadow-[0_0_12px_rgba(59,130,246,0.65)]"
        alt="LinkedIn"
      />
    ),
    color: "bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10",
    textColor: "text-gray-900 dark:text-white",
  },
  {
    name: "GitHub",
    url: "https://github.com/Soorajm100",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
        className="w-10 h-10 drop-shadow-[0_0_12px_rgba(255,255,255,0.35)] dark:invert"
        alt="GitHub"
      />
    ),
    color: "bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10",
    textColor: "text-gray-900 dark:text-white",
  },
  {
    name: "Gmail",
    url: "mailto:sooraj@gmail.com",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg"
        className="w-10 h-10 drop-shadow-[0_0_12px_rgba(239,68,68,0.5)]"
        alt="Gmail"
      />
    ),
    color: "bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10",
    textColor: "text-gray-900 dark:text-white",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/your-handle",
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg"
        className="w-10 h-10 drop-shadow-[0_0_12px_rgba(59,130,246,0.65)]"
        alt="Twitter"
      />
    ),
    color: "bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10",
    textColor: "text-gray-900 dark:text-white",
  },
];


  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      {/* Fixed Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'} border-b shadow-sm`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div 
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            SP
          </div>

          <div className="hidden lg:flex items-center gap-8">
            {["About", "Why Me", "Skills", "Experience", "Projects", "Achievements", "Certifications", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                className={`text-sm font-medium transition-colors ${isDarkMode ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg ${isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'} transition-colors`}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className={`lg:hidden border-t ${isDarkMode ? 'border-gray-800 bg-gray-900' : 'border-gray-200 bg-white'}`}>
            <div className="px-6 py-4 space-y-3">
              {["About", "Why Me", "Skills", "Experience", "Projects", "Achievements", "Certifications", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                  className={`block w-full text-left text-lg font-medium py-2 transition-colors ${isDarkMode ? 'text-gray-300 hover:text-blue-400' : 'text-gray-700 hover:text-blue-600'}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex flex-col justify-center relative pt-20 overflow-hidden">
        {/* Background Layer */}
        <div className="absolute inset-0 z-0">
          {/* Gradient Background */}
          <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-br from-gray-900 via-blue-900/30 to-purple-900/30' : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'}`} />
          
          {/* Floating Gradient Orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute bottom-40 left-1/3 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-2000" />
          
          {/* Geometric Waves at Bottom */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
            <svg className="relative block w-full h-40" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path 
                fill={isDarkMode ? "rgba(59, 130, 246, 0.1)" : "rgba(59, 130, 246, 0.2)"} 
                d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,128C672,107,768,117,864,138.7C960,160,1056,192,1152,192C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </svg>
            <svg className="relative block w-full h-32 -mt-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
              <path 
                fill={isDarkMode ? "rgba(99, 102, 241, 0.15)" : "rgba(99, 102, 241, 0.25)"} 
                d="M0,96L48,112C96,128,192,160,288,165.3C384,171,480,149,576,133.3C672,117,768,107,864,122.7C960,139,1056,181,1152,186.7C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </svg>
          </div>
        </div>

        {/* Main Hero Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto animate-fade-in-up">
          {/* Small Subtitle Above Name */}
          <p className={`text-sm sm:text-base mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} animate-fade-in-down`}>
            Building Tomorrow's Technology Today
          </p>
          
          {/* Name */}
          <h1 className={`text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight ${isDarkMode ? 'text-white' : 'text-gray-900'} animate-fade-in relative inline-block`}>
            Sooraj Poojary
            
        
          </h1>
          
          {/* Typing Effect Role */}
          <div className="h-12 sm:h-16 flex items-center justify-center mb-8">
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              <span className="inline-block">
                {displayedText}
                <span className="border-r-2 border-blue-600 ml-1 animate-blink"></span>
              </span>
            </p>
          </div>

          {/* Description */}
          <p className={`text-base sm:text-lg md:text-xl mb-12 max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} animate-fade-in-up delay-300`}>
            Architecting scalable backend systems, cloud infrastructure, and AI-powered solutions that drive innovation at enterprise scale.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 justify-center flex-wrap mb-16 animate-fade-in-up delay-500">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-full font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-2xl"
            >
              Get in Touch
            </button>
            
            <a
              href="/Sooraj_resume.pdf"
              download
              className={`px-8 py-4 rounded-full font-semibold flex items-center gap-2 border-2 transition-all hover:scale-105 ${isDarkMode ? 'border-gray-600 hover:bg-gray-800 text-white' : 'border-gray-300 hover:bg-white text-gray-900'}`}
            >
              <Download size={20} />
              Resume
            </a>
          </div>
        </div>

        {/* Quick Info Cards */}
        <div className="relative z-10 px-6 pb-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Backend Engineering", desc: "Designing scalable APIs, distributed systems, and optimized databases for enterprise-grade performance." },
              { title: "Cloud & DevOps", desc: "Automating deployments, managing AWS infrastructure, and building CI/CD pipelines that scale reliably." },
              { title: "AI-Powered Solutions", desc: "Building intelligent systems with LLMs, RAG pipelines, and machine learning for real-world impact." }
            ].map((card, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-2xl border backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-slide-in-up ${
                  isDarkMode 
                    ? 'bg-white/5 border-white/10 hover:bg-white/10' 
                    : 'bg-white/60 border-white/40 hover:bg-white/80'
                }`}
                style={{ animationDelay: `${idx * 150}ms` }}
              >
                <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {card.title}
                </h3>
                <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
          <span className={`text-xs uppercase tracking-wider ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>Scroll</span>
          <ChevronDown size={24} className={isDarkMode ? 'text-gray-600' : 'text-gray-400'} />
        </div>
      </section>

      <style jsx>{`
        /* Robot Styles */
        .robot-container {
          position: relative;
          width: 80px;
          height: 100px;
          animation: float 3s ease-in-out infinite;
        }

        .robot {
          position: relative;
          width: 100%;
          height: 100%;
        }

        /* Antenna */
        .antenna {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 2px;
          height: 15px;
          background: linear-gradient(to bottom, #3b82f6, #6366f1);
          animation: antennaWiggle 2s ease-in-out infinite;
        }

        .antenna-ball {
          position: absolute;
          top: -6px;
          left: 50%;
          transform: translateX(-50%);
          width: 8px;
          height: 8px;
          background: #ef4444;
          border-radius: 50%;
          box-shadow: 0 0 10px #ef4444;
          animation: antennaBlink 1.5s ease-in-out infinite;
        }

        /* Head */
        .robot-head {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 50px;
          height: 45px;
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          border-radius: 12px 12px 8px 8px;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
        }

        /* Eyes */
        .eyes {
          position: absolute;
          top: 15px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 12px;
        }

        .eye {
          width: 10px;
          height: 10px;
          background: white;
          border-radius: 50%;
          position: relative;
          animation: blink 3s infinite;
        }

        .pupil {
          position: absolute;
          top: 2px;
          left: 2px;
          width: 6px;
          height: 6px;
          background: #1f2937;
          border-radius: 50%;
          animation: lookAround 4s ease-in-out infinite;
        }

        /* Mouth */
        .mouth {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 8px;
          border: 2px solid white;
          border-top: none;
          border-radius: 0 0 10px 10px;
          animation: smile 2s ease-in-out infinite;
        }

        /* Body */
        .robot-body {
          position: absolute;
          top: 45px;
          left: 50%;
          transform: translateX(-50%);
          width: 45px;
          height: 40px;
          background: linear-gradient(135deg, #3b82f6, #6366f1);
          border-radius: 8px;
          box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
        }

        .body-light {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 12px;
          height: 12px;
          background: #10b981;
          border-radius: 50%;
          box-shadow: 0 0 10px #10b981;
          animation: pulse 1.5s ease-in-out infinite;
        }

        /* Arms */
        .robot-arm {
          position: absolute;
          width: 8px;
          height: 30px;
          background: linear-gradient(to bottom, #3b82f6, #6366f1);
          border-radius: 4px;
          top: 50px;
        }

        .left-arm {
          left: 5px;
          animation: waveLeft 2s ease-in-out infinite;
          transform-origin: top center;
        }

        .right-arm {
          right: 5px;
          animation: waveRight 2s ease-in-out infinite 0.5s;
          transform-origin: top center;
        }

        /* Speech Bubble */
        .speech-bubble {
          position: absolute;
          top: -30px;
          right: -60px;
          background: white;
          color: #1f2937;
          padding: 8px 12px;
          border-radius: 12px;
          font-size: 14px;
          font-weight: 600;
          white-space: nowrap;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          animation: bubblePop 3s ease-in-out infinite;
        }

        .speech-bubble::before {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 20px;
          width: 0;
          height: 0;
          border-left: 8px solid transparent;
          border-right: 8px solid transparent;
          border-top: 8px solid white;
        }

        /* Animations */
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes antennaWiggle {
          0%, 100% { transform: translateX(-50%) rotate(0deg); }
          25% { transform: translateX(-50%) rotate(-5deg); }
          75% { transform: translateX(-50%) rotate(5deg); }
        }

        @keyframes antennaBlink {
          0%, 90%, 100% { opacity: 1; }
          95% { opacity: 0.3; }
        }

        @keyframes blink {
          0%, 90%, 100% { transform: scaleY(1); }
          95% { transform: scaleY(0.1); }
        }

        @keyframes lookAround {
          0%, 100% { transform: translate(2px, 2px); }
          25% { transform: translate(4px, 2px); }
          50% { transform: translate(2px, 3px); }
          75% { transform: translate(0px, 2px); }
        }

        @keyframes smile {
          0%, 100% { height: 8px; }
          50% { height: 10px; }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 10px #10b981; }
          50% { opacity: 0.6; box-shadow: 0 0 20px #10b981; }
        }

        @keyframes waveLeft {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-20deg); }
          75% { transform: rotate(10deg); }
        }

        @keyframes waveRight {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-10deg); }
        }

        @keyframes bubblePop {
          0%, 80%, 100% { opacity: 1; transform: scale(1); }
          85% { opacity: 0; transform: scale(0.8); }
          90% { opacity: 0; transform: scale(0.8); }
          95% { opacity: 1; transform: scale(1.1); }
        }

        /* Cursor Blink */
        @keyframes blink {
          0%, 49% { border-color: rgb(37, 99, 235); }
          50%, 100% { border-color: transparent; }
        }
        
        .animate-blink {
          animation: blink 1s step-end infinite;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fade-in-down {
          animation: fadeInDown 0.6s ease-out forwards;
        }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-slide-in-up {
          animation: slideInUp 0.6s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
          opacity: 0;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        .delay-500 {
          animation-delay: 500ms;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }

        .delay-2000 {
          animation-delay: 2000ms;
        }
      `}</style>

      {/* About Section */}
 <section
  id="about"
  className={`py-24 sm:py-32 ${
    isDarkMode ? "bg-gray-950" : "bg-white"
  }`}
>
  <div className="max-w-6xl mx-auto px-6">
    <h2
      className={`text-3xl md:text-4xl font-semibold mb-16 ${
        isDarkMode ? "text-white" : "text-gray-900"
      } animate-slide-in-up`}
    >
      About
    </h2>

    <div className="grid lg:grid-cols-[280px_1fr] gap-12 items-start">
      {/* PHOTO SECTION - Rounded with animation */}
      <div className="flex justify-center lg:justify-start animate-slide-in-left">
        <div
          className={`w-64 h-64 overflow-hidden rounded-full border-4 ${
            isDarkMode
              ? "bg-gray-900 border-gray-800"
              : "bg-gray-50 border-gray-200"
          } transition-all duration-500 hover:scale-105 hover:shadow-2xl`}
        >
          <img
            src="/profile_sooraj.jpg"
            alt="Sooraj Poojary"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          />
        </div>
      </div>

      {/* TEXT SECTION */}
      <div className="animate-slide-in-right delay-300">
        <div className="mb-8">
          <h3
            className={`text-2xl font-semibold mb-4 ${
              isDarkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Software Engineer
          </h3>

          <p
            className={`text-lg leading-relaxed mb-6 ${
              isDarkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Currently at{" "}
            <span className={isDarkMode ? "text-white" : "text-gray-900"}>
              Carelon Global Solutions
            </span>
            , building scalable cloud systems, LLM-powered platforms, and
            high-performance dashboards that drive measurable business impact.
          </p>

          <p
            className={`text-base leading-relaxed ${
              isDarkMode ? "text-gray-500" : "text-gray-500"
            }`}
          >
            Specialized in distributed systems, cloud architecture, and
            full-stack development. Focused on delivering clean, scalable
            engineering solutions with strong product impact.
          </p>
        </div>

        {/* SKILLS - Clean List */}
        <div className="space-y-3">
          <div
            className={`text-sm font-medium uppercase tracking-wider ${
              isDarkMode ? "text-gray-500" : "text-gray-400"
            }`}
          >
            Focus Areas
          </div>
          <div className="flex flex-wrap gap-4">
            {[
              "Full-Stack Development",
              "Cloud & DevOps",
              "LLM Integration",
              "System Design",
            ].map((tag, idx) => (
              <span
                key={tag}
                className={`text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } transition-all duration-300 hover:scale-110 hover:text-blue-500`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {tag}
              </span>
            ))}
          </div>

          <div
            className={`h-px w-full my-6 ${
              isDarkMode ? "bg-gray-800" : "bg-gray-200"
            }`}
          />

          <div className="flex flex-wrap gap-3 text-sm">
            <span
              className={isDarkMode ? "text-gray-500" : "text-gray-500"}
            >
              Stack:
            </span>
            {["Python", "TypeScript", "FastAPI", "Node.js", "React", "AWS"].map(
              (tech, idx) => (
                <span
                  key={tech}
                  className={`${isDarkMode ? "text-gray-400" : "text-gray-600"} transition-all duration-300 hover:scale-110 hover:text-blue-500`}
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Why Hire Me Section */}
      <section id="why-me" className={`py-24 sm:py-32 ${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-100/50'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <h2 className={`text-4xl md:text-5xl font-bold mb-12 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'} animate-slide-in-up`}>
            Why Hire Me?
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className={`text-lg sm:text-xl leading-relaxed text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-12 animate-slide-in-up delay-300`}>
              Specializing in backend architecture, cloud infrastructure, and AI-powered systems, I design and build 
              scalable solutions that handle millions of requests. From optimizing database queries to implementing 
              intelligent agentic workflows with LangChain and RAG pipelines, I focus on creating robust, production-ready 
              solutions that deliver measurable performance improvements.
            </p>
          </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
  {[
    {
      icon:  "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      title: "Backend & APIs",
      skills:
        "FastAPI , Node.js, Express, , Python, RESTful APIs, WebSockets, Microservices",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      title: "AI & Agentic Systems",
      skills:
        "LangChain, RAG Pipelines, FAISS, Vector Databases, NL to SQL, Intelligent Agents",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
      title: "Database & Caching",
      skills:
        "MySQL, MongoDB, Redis, Query Optimization, Indexing, Aggregation Pipelines",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      title: "Cloud & DevOps",
      skills:
        "AWS (EC2, Lambda, S3, IAM), Docker, Terraform, CI/CD, Infrastructure as Code",
      size: "w-16 h-16"
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      title: "Frontend Development",
      skills: "React, Next.js, TypeScript, Tailwind CSS, Redux",
    },
    {
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
      title: "Best Practices",
      skills: "Clean Code, Design Patterns, Testing, Documentation, Code Review, Agile",
    },
  ].map((item, idx) => (
    <div
      key={item.title}
      className={`relative overflow-hidden p-6 sm:p-8 rounded-2xl border shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-in-up
        ${
          isDarkMode
            ? "bg-gray-800/70 border-gray-700 backdrop-blur-xl"
            : "bg-white/70 border-gray-200 backdrop-blur-xl"
        }`}
      style={{ animationDelay: `${idx * 100}ms` }}
    >
      {/* background glow */}
      <div
        className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-30
          ${isDarkMode ? "bg-blue-500" : "bg-indigo-300"}`}
      ></div>

      {/* icon box */}
      <div
        className={`relative mb-6 w-16 h-16 rounded-xl flex items-center justify-center shadow-sm transition-transform duration-300 hover:scale-110
          ${isDarkMode ? "bg-white/10" : "bg-gray-100"}`}
      >
        {/* icon glow */}
        <div
          className={`absolute inset-0 rounded-xl blur-xl opacity-60
            ${isDarkMode ? "bg-white/10" : "bg-blue-200"}`}
        ></div>

        <img
          src={item.icon}
          alt={item.title}
          className={`relative z-10 ${item.size || "w-12 h-12"} object-contain`}
        />
      </div>

      <h3 className="text-xl font-bold mb-3">{item.title}</h3>

      <p className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
        {item.skills}
      </p>
    </div>
  ))}
</div>

        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="">
      <SkillsSection isDarkMode = {isDarkMode}/>
      </section>

      {/* Experience Section */}

      <section
  id="experience"
  className={`py-24 sm:py-32 ${
    isDarkMode ? "bg-gray-900/40" : "bg-gray-100/60"
  }`}
>
  <div className="max-w-5xl mx-auto px-6">
    <h2
      className={`text-4xl md:text-5xl font-bold mb-12 text-center ${
        isDarkMode ? "text-white" : "text-gray-900"
      } animate-slide-in-up`}
    >
      Experience
    </h2>

    <p
      className={`text-center text-lg mb-16 ${
        isDarkMode ? "text-gray-400" : "text-gray-600"
      } animate-slide-in-up delay-300`}
    >
      My professional journey in Software Development
    </p>

    <div className="space-y-12">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className={`relative overflow-hidden rounded-3xl p-8 sm:p-12 border shadow-lg backdrop-blur-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 animate-slide-in-up
            ${
              isDarkMode
                ? "bg-white/5 border-white/10"
                : "bg-white/70 border-gray-200"
            }`}
        >
          {/* background glow blob */}
          <div
            className={`absolute -top-16 -right-16 w-64 h-64 rounded-full blur-3xl opacity-30
              ${isDarkMode ? "bg-indigo-500/40" : "bg-blue-300/60"}`}
          ></div>

          <div className="relative flex flex-wrap items-start justify-between gap-4 mb-6">
            <div className="flex items-start gap-4">
              {/* Company Icon */}
            {/* Company Icon Container */}
<div
  className={`relative w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg overflow-hidden transition-transform duration-300 hover:scale-110
    ${isDarkMode ? "bg-white/10 border border-white/10" : "bg-gray-100 border border-gray-200"}`}
>
  {/* Icon Glow Effect */}
  <div
    className={`absolute inset-0 rounded-2xl blur-xl opacity-70
      ${isDarkMode ? "bg-indigo-500/30" : "bg-blue-300/50"}`}
  ></div>

 <img
  src={"https://cdn.simpleicons.org/codeforces/2563eb"}
  alt={exp.company}
  className="relative z-10 h-10 w-auto max-w-[80px] object-contain"
/>

</div>
              <div>
                <h3
                  className={`text-2xl sm:text-3xl font-bold mb-2 ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {exp.title}
                </h3>

                <p className="text-lg sm:text-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {exp.company}
                </p>

                <p
                  className={`text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {exp.location}
                </p>
              </div>
            </div>

            <span className="px-5 py-2 rounded-full font-semibold shadow-md bg-gradient-to-r from-green-500 to-emerald-500 text-white">
              {exp.date}
            </span>
          </div>

          {/* Achievements */}
          <div className="relative space-y-4 mt-8 mb-8">
            {exp.achievements.map((achievement, i) => (
              <div key={i} className="flex gap-4 animate-slide-in-left" style={{ animationDelay: `${i * 100}ms` }}>
                {/* Custom Check Bullet */}
                <div className="mt-2 w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 shadow-[0_0_12px_rgba(59,130,246,0.7)] flex-shrink-0"></div>

                <span
                  className={`text-base sm:text-lg ${
                    isDarkMode ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {achievement}
                </span>
              </div>
            ))}
          </div>

          {/* Tech Stack */}
          <div
            className={`relative pt-6 border-t ${
              isDarkMode ? "border-white/10" : "border-gray-200"
            }`}
          >
            <p
              className={`text-xs font-semibold mb-3 tracking-widest ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              TECH STACK
            </p>

            <div className="flex flex-wrap gap-2">
              {exp.techStack.map((tech, idx) => (
                <span
                  key={tech}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 hover:scale-110 animate-slide-in-up
                    ${
                      isDarkMode
                        ? "bg-white/5 text-gray-200 border-white/10 hover:bg-white/10"
                        : "bg-gray-100 text-gray-700 border-gray-200 hover:bg-white"
                    }`}
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

   

      {/* Projects Section */}
      <section id="projects" className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-center gap-4 mb-12 animate-slide-in-up">
            <Brain className="w-12 h-12 text-blue-600" />
            <h2 className={`text-4xl md:text-5xl font-bold text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Featured Projects
            </h2>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((project:any, idx) => (
              <div
                key={project.title}
                onClick={() => project.link && window.open(project.link, '_blank')}
                className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-2xl p-6 sm:p-8 border cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-2 animate-slide-in-up`}
                style={{ animationDelay: `${idx * 200}ms` }}
              >
                <div className={`inline-flex p-4 rounded-2xl ${project.bgColor} mb-4 ${project.iconColor} transition-transform duration-300 hover:scale-110`}>
                  {project.icon}
                </div>
                
                <h3 className="text-xl sm:text-2xl font-bold mb-3">
                  {project.title}
                </h3>
                
                {project.metric && (
                  <p className="text-2xl sm:text-3xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {project.metric}
                  </p>
                )}
                
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                  {project.desc}
                </p>
                
                {project.link && (
                  <div className="flex items-center gap-2 text-blue-600 font-semibold transition-transform duration-300 hover:translate-x-2">
                    <span>View Project</span>
                    <ExternalLink size={16} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}

      <section
  id="achievements"
  className={`py-24 sm:py-32 ${
    isDarkMode ? "bg-gray-800/50" : "bg-gray-100/50"
  }`}
>
  <div className="max-w-6xl mx-auto px-6">
    {/* Title */}
    <div className="flex items-center justify-center gap-4 mb-14 animate-slide-in-up">
      <img
        src="https://img.icons8.com/color/96/trophy.png"
        className="w-12 h-12 drop-shadow-[0_0_18px_rgba(255,193,7,0.7)]"
        alt="Achievement"
      />

      <h2
        className={`text-4xl md:text-5xl font-bold text-center ${
          isDarkMode ? "text-white" : "text-gray-900"
        }`}
      >
        Achievements & Awards
      </h2>
    </div>

    {/* Achievements Grid */}
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
      {[
        {
          title: "Google Kickstart",
          value: "Rank 1445",
          glow: "from-yellow-400/40 to-orange-400/20",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/google/google-original.svg",
        },
        {
          title: "Microsoft Azure AI-900",
          value: "Certified",
          glow: "from-blue-500/40 to-cyan-400/20",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
        },
        {
          title: "Carelon Excellence",
          value: "5+ Impact Awards",
          glow: "from-indigo-500/40 to-purple-400/20",
          icon: "https://img.icons8.com/color/96/trophy.png",
        },
      ].map((achievement, idx) => (
        <div
          key={achievement.title}
          className={`relative overflow-hidden rounded-3xl p-8 border shadow-lg backdrop-blur-xl 
          transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-slide-in-up
          ${
            isDarkMode
              ? "bg-white/5 border-white/10"
              : "bg-white/70 border-gray-200"
          }`}
          style={{ animationDelay: `${idx * 150}ms` }}
        >
          {/* Background glow blob */}
          <div
            className={`absolute -top-20 -right-20 w-72 h-72 rounded-full blur-3xl opacity-40 
            bg-gradient-to-br ${achievement.glow}`}
          ></div>

          {/* Icon */}
          <div className="relative flex justify-center mb-5">
            <div
              className={`w-20 h-20 rounded-2xl flex items-center justify-center border shadow-md transition-transform duration-300 hover:scale-110 hover:rotate-6
              ${
                isDarkMode
                  ? "bg-white/10 border-white/10"
                  : "bg-white border-gray-200"
              }`}
            >
              <img
                src={achievement.icon}
                alt={achievement.title}
                className="w-12 h-12 object-contain drop-shadow-[0_0_18px_rgba(59,130,246,0.35)]"
              />
            </div>
          </div>

          {/* Text */}
          <p
            className={`relative font-bold text-lg text-center mb-2 ${
              isDarkMode ? "text-gray-200" : "text-gray-800"
            }`}
          >
            {achievement.title}
          </p>

          <p className="relative text-center text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {achievement.value}
          </p>
        </div>
      ))}
    </div>

    {/* Hobbies */}
    <div className="mt-20">
      <div className="flex items-center justify-center gap-3 mb-10 animate-slide-in-up">
        <img
          src="https://img.icons8.com/color/96/like--v1.png"
          className="w-10 h-10"
          alt="hobbies"
        />

        <h3
          className={`text-2xl sm:text-3xl font-bold ${
            isDarkMode ? "text-white" : "text-gray-900"
          }`}
        >
          Hobbies & Interests
        </h3>
      </div>

      <div className="flex flex-wrap justify-center gap-3">
        {[
          "Competitive Coding",
          "System Design",
          "AI Experiments",
          "Tech Blogging",
          "Open Source",
        ].map((hobby, idx) => (
          <span
            key={hobby}
            className={`px-5 py-3 rounded-full text-sm font-semibold border backdrop-blur-md transition-all duration-300 hover:scale-110 animate-slide-in-up
            ${
              isDarkMode
                ? "bg-white/5 border-white/10 text-gray-200 hover:bg-white/10"
                : "bg-white/70 border-gray-200 text-gray-800 hover:bg-white"
            }`}
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            {hobby}
          </span>
        ))}
      </div>
    </div>
  </div>
</section>

   

      {/* Certifications Section */}
  <section
  id="certifications"
  className={`py-24 sm:py-32 ${
    isDarkMode ? "bg-gray-900/40" : "bg-gray-100/60"
  }`}
>
  <div className="max-w-6xl mx-auto px-6">
    <h2
      className={`text-4xl md:text-5xl font-bold mb-14 text-center ${
        isDarkMode ? "text-white" : "text-gray-900"
      } animate-slide-in-up`}
    >
      Certifications
    </h2>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          title: "Microsoft Azure AI-900",
          subtitle: "Azure AI Fundamentals Certification",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azure/azure-original.svg",
          glow: "bg-blue-500/30",
        },
        {
          title: "Machine Learning Specialization",
          subtitle: "Deep Learning + Model Training",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
          glow: "bg-yellow-400/30",
        },
        {
          title: "Cloud & DevOps Fundamentals",
          subtitle: "CI/CD + Infrastructure Basics",
          icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
          glow: "bg-cyan-400/30",
        },
      ].map((cert, idx) => (
        <div
          key={cert.title}
          className={`relative overflow-hidden rounded-3xl p-8 border shadow-lg backdrop-blur-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 animate-slide-in-up
          ${
            isDarkMode
              ? "bg-white/5 border-white/10"
              : "bg-white/70 border-gray-200"
          }`}
          style={{ animationDelay: `${idx * 150}ms` }}
        >
          {/* glow blob */}
          <div
            className={`absolute -top-16 -right-16 w-64 h-64 rounded-full blur-3xl opacity-30 ${cert.glow}`}
          ></div>

          <div className="relative flex items-center gap-5 mb-6">
            {/* Icon */}
            <div
              className={`relative w-16 h-16 flex items-center justify-center rounded-2xl border shadow-md transition-transform duration-300 hover:scale-110
              ${
                isDarkMode
                  ? "bg-white/10 border-white/10"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              {/* icon glow */}
              <div
                className={`absolute inset-0 rounded-2xl blur-xl opacity-70 ${cert.glow}`}
              ></div>

              <img
                src={cert.icon}
                alt={cert.title}
                className="relative z-10 w-10 h-10 object-contain"
              />
            </div>

            <div>
              <h3
                className={`text-lg sm:text-xl font-bold ${
                  isDarkMode ? "text-white" : "text-gray-900"
                }`}
              >
                {cert.title}
              </h3>

              <p
                className={`text-sm mt-1 ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {cert.subtitle}
              </p>
            </div>
          </div>

          {/* badge */}
          <div className="relative flex justify-between items-center mt-6">
            <span
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide border
              ${
                isDarkMode
                  ? "bg-white/5 text-gray-200 border-white/10"
                  : "bg-gray-100 text-gray-700 border-gray-200"
              }`}
            >
              Verified Certification
            </span>

            <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              View →
            </span>
          </div>
        </div>
      ))}
    </div>

    {/* button */}
    <div className="mt-14 text-center animate-slide-in-up delay-500">
      <a
        href="/CERTIFICATIONS.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
      >
        View All Certifications
      </a>
    </div>
  </div>
</section>

      {/* Contact Section */}
   

      {/* Footer */}
      <footer className={`py-12 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className={`${isDarkMode ? 'text-gray-500' : 'text-gray-500'} mb-4`}>
            © 2026 Sooraj Poojary. Crafted with passion and code.
          </p>
          <div className="flex justify-center gap-6">
            {socialLinks.slice(0, 3).map((link, idx) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${isDarkMode ? 'text-gray-600 hover:text-white' : 'text-gray-400 hover:text-gray-900'} transition-all duration-300 hover:scale-110`}
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}