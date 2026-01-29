"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
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
  Palette,
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
  CheckCircle2
} from "lucide-react";

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  // Carousel auto-rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((i) => (i + 1) % carouselSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMenuOpen(false);
  };

  const carouselSlides = [
    {
      title: "Reliable Engineering",
      desc: "Scalable backend systems, monitoring, and performance optimization.",
    },
    {
      title: "AI Integrations",
      desc: "LLM-driven features, RAG pipelines and intelligent automation.",
    },
    {
      title: "Cloud & DevOps",
      desc: "Infrastructure as Code, CI/CD, and cost-optimized AWS deployments.",
    },
  ];

  const skills = {
    languages: ["Python", "Java", "JavaScript/TypeScript", "SQL"],
    frameworks: ["React", "Next.js", "Spring Boot", "LangChain", "TensorFlow/PyTorch"],
    cloud: ["AWS (EC2, S3, Lambda, Bedrock)", "Docker", "Git", "CI/CD"],
    aiml: ["Large Language Models", "RAG", "Neural Networks", "Data Pipelines", "Prompt Engineering"],
    other: ["System Design", "Algorithms & Data Structures", "Microservices"]
  };

  const projects = [
    {
      icon: <Flame className="w-12 h-12" />,
      title: "ML Heat Transfer Prediction",
      metric: "99.2% Accuracy",
      desc: "Advanced neural network for thermal dynamics modeling with state-of-the-art performance in predicting heat transfer coefficients",
      link: "https://research-project-frontend-five.vercel.app/",
      gradient: "from-red-500 to-orange-500"
    },
    {
      icon: <Activity className="w-12 h-12" />,
      title: "Emergency Response System",
      desc: "Real-time coordination platform for crisis management with live tracking, resource allocation, and intelligent routing algorithms",
      link: "https://medical-frontend-gamma-three.vercel.app/",
      gradient: "from-blue-500 to-cyan-500"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Soorajm100",
      icon: <Github className="w-6 h-6" />,
      color: "from-gray-700 to-gray-900"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sooraj123/",
      icon: <Linkedin className="w-6 h-6" />,
      color: "from-blue-600 to-blue-700"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/unknow2001/",
      icon: <Code2 className="w-6 h-6" />,
      color: "from-orange-500 to-orange-600"
    },
    {
      name: "Email",
      url: "mailto:sooraj.poojary@example.com",
      icon: <Mail className="w-6 h-6" />,
      color: "from-blue-600 to-blue-700"
    }
  ];

  // Reusable Components
  const SectionHeader = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
    return (
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.9, delay }}
        className="text-4xl md:text-6xl font-bold mb-12 text-center"
      >
        {children}
      </motion.h2>
    );
  };

  const FadeInSection = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay }}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
      {/* Fixed Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl ${isDarkMode ? 'bg-black/90' : 'bg-white/90'} border-b ${isDarkMode ? 'border-white/10' : 'border-gray-200'}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-blue-500 cursor-pointer font-semibold"
            onClick={() => scrollToSection('hero')}
          >
            SP
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {["About", "Why Me", "Skills", "Experience", "Projects", "Achievements", "Certifications", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                className={`text-sm font-medium transition-colors ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'}`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile + Theme Toggle */}
          <div className="flex items-center gap-3">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-white/10' : 'hover:bg-gray-100'} transition-colors`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg ${isDarkMode ? 'hover:bg-white/10' : 'hover:bg-gray-100'} transition-colors`}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`lg:hidden border-t ${isDarkMode ? 'border-white/10 bg-black' : 'border-gray-200 bg-white'}`}
            >
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
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.4) 0%, transparent 50%),
                               radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.4) 0%, transparent 50%),
                               radial-gradient(circle at 40% 20%, rgba(236, 72, 153, 0.4) 0%, transparent 50%)`,
              backgroundSize: "200% 200%",
            }}
          />
          
          {/* Light Stream Animation - Left to Right */}
          <motion.div
            className="absolute -left-96 top-1/3 w-96 h-96 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-transparent opacity-30 blur-3xl"
            animate={{ 
              x: [0, 1400, 0],
              y: [0, -100, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Light Stream Animation - Right to Left */}
          <motion.div
            className="absolute -right-96 bottom-1/4 w-96 h-96 rounded-full bg-gradient-to-l from-blue-600 via-cyan-400 to-transparent opacity-25 blur-3xl"
            animate={{ 
              x: [-1400, 0, -1400],
              y: [0, 100, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          
          {/* Floating Orb */}
          <motion.div
            className="absolute top-20 right-32 w-32 h-32 rounded-full bg-blue-500 opacity-15 blur-3xl"
            animate={{ 
              y: [0, -40, 0],
              x: [0, 20, 0],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <motion.div 
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative z-10 text-center px-6 max-w-5xl"
        >
          <motion.h1 
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          >
            Sooraj Poojary
          </motion.h1>
          
          <motion.p
            className="text-xl sm:text-2xl md:text-4xl mb-8 font-light text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Software Engineer @ Carelon Global Solutions
          </motion.p>

          <motion.p
            className={`text-base sm:text-lg md:text-xl mb-12 max-w-3xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Building high-performance backend systems, AI-powered applications, and cloud infrastructure 
            that power enterprise solutions at scale.
          </motion.p>

          <motion.div
            className="flex gap-4 justify-center flex-wrap"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 rounded-full font-semibold text-white shadow-2xl shadow-blue-500/50 transition-all"
            >
              Get in Touch
            </motion.button>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/Sooraj_resume.pdf"
              download
              className={`px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold flex items-center gap-2 ${isDarkMode ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-900 hover:bg-gray-800 text-white'}`}
            >
              <Download size={20} />
              Resume
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown size={32} className={isDarkMode ? 'text-gray-600' : 'text-gray-400'} />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Carousel Section */}
      <section className={`py-16 ${isDarkMode ? 'bg-gradient-to-b from-black to-gray-900' : 'bg-gradient-to-b from-white to-gray-50'}`}>
        <div className="max-w-4xl mx-auto px-6">
          <FadeInSection>
            <div className={`${isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200'} rounded-3xl p-8 border backdrop-blur-xl shadow-2xl`}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={carouselIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.6 }}
                  className="min-h-[100px] flex flex-col justify-center"
                >
                  <h3 className={`${isDarkMode ? 'text-white' : 'text-slate-900'} font-bold text-2xl mb-3`}>
                    {carouselSlides[carouselIndex].title}
                  </h3>
                  <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-lg`}>
                    {carouselSlides[carouselIndex].desc}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="flex justify-center gap-2 mt-6">
                {carouselSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCarouselIndex(i)}
                    className={`transition-all duration-300 ${
                      i === carouselIndex 
                        ? 'w-8 h-2 rounded-full bg-blue-600' 
                        : 'w-4 h-2 rounded-full bg-gray-400/40 hover:bg-gray-400/60'
                    }`}
                  />
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader>
            <span className="text-white">
              About Me
            </span>
          </SectionHeader>
          
          <FadeInSection>
            <div className={`${isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200'} rounded-3xl p-8 sm:p-12 border backdrop-blur-xl shadow-2xl`}>
              <div className="flex items-start gap-6 mb-6">
                <div className="p-4 rounded-2xl bg-blue-600 shadow-lg">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4">Professional Summary</h3>
                  <p className={`text-lg sm:text-xl leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Software Engineer at <span className="font-semibold text-blue-400">Carelon Global Solutions</span>, 
                    building scalable cloud systems, <span className="font-medium text-blue-400">LLM-powered platforms</span>, 
                    and high-performance dashboards that drive real business impact.
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Why Hire Me Section */}
      <section id="why-me" className={`py-24 sm:py-32 ${isDarkMode ? 'bg-gradient-to-b from-gray-900 to-black' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader>
            <span className="text-white">
              Why Hire Me?
            </span>
          </SectionHeader>
          
          <FadeInSection>
            <div className="max-w-4xl mx-auto">
              <p className={`text-lg sm:text-xl leading-relaxed text-center ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Specializing in backend architecture, cloud infrastructure, and AI-powered systems, I design and build 
                scalable solutions that handle millions of requests. From optimizing database queries to implementing 
                intelligent agentic workflows with LangChain and RAG pipelines, I focus on creating robust, production-ready 
                solutions that deliver measurable performance improvements.
              </p>
            </div>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {[
              { icon: <Code size={32} />, title: "Backend & APIs", skills: "Node.js, Express, FastAPI, Python, RESTful APIs, WebSockets, Microservices", gradient: "from-blue-500 to-cyan-500" },
              { icon: <Brain size={32} />, title: "AI & Agentic Systems", skills: "LangChain, RAG Pipelines, FAISS, Vector Databases, NL to SQL, Intelligent Agents", gradient: "from-blue-500 to-cyan-500" },
              { icon: <Database size={32} />, title: "Database & Caching", skills: "MySQL, MongoDB, Redis, Query Optimization, Indexing, Aggregation Pipelines", gradient: "from-green-500 to-emerald-500" },
              { icon: <Cloud size={32} />, title: "Cloud & DevOps", skills: "AWS (EC2, Lambda, S3, IAM), Docker, Terraform, CI/CD, Infrastructure as Code", gradient: "from-orange-500 to-red-500" },
              { icon: <Palette size={32} />, title: "Frontend Development", skills: "React, Next.js, TypeScript, Tailwind CSS, Redux", gradient: "from-indigo-500 to-blue-500" },
              { icon: <Rocket size={32} />, title: "Best Practices", skills: "Clean Code, Design Patterns, Testing, Documentation, Code Review, Agile", gradient: "from-yellow-500 to-amber-500" }
            ].map((item, index) => (
              <FadeInSection key={item.title} delay={index * 0.03}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  className={`p-6 sm:p-8 rounded-2xl ${isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200'} border backdrop-blur-sm transition-all cursor-pointer group`}
                >
                  <div className={`mb-6 bg-gradient-to-br ${item.gradient} w-16 h-16 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform shadow-lg`}>
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {item.skills}
                  </p>
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader>
            <span className="text-white">
              Technical Skills
            </span>
          </SectionHeader>
          
          <div className="grid gap-8">
            {[
              { title: "Languages", items: skills.languages, icon: <Terminal className="w-6 h-6" /> },
              { title: "Frameworks & Libraries", items: skills.frameworks, icon: <Code className="w-6 h-6" /> },
              { title: "Cloud & Tools", items: skills.cloud, icon: <Cloud className="w-6 h-6" /> },
              { title: "AI/ML & Data", items: skills.aiml, icon: <Brain className="w-6 h-6" /> },
              { title: "Other Expertise", items: skills.other, icon: <Cpu className="w-6 h-6" /> }
            ].map((category, index) => (
              <FadeInSection key={category.title} delay={index * 0.03}>
                <div className={`${isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200'} rounded-2xl p-6 sm:p-8 border backdrop-blur-sm h-full flex flex-col`}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 rounded-lg bg-blue-600 text-white">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3 flex-1 content-start">
                    {category.items.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                          isDarkMode 
                            ? 'bg-slate-700/50 border-slate-600 hover:bg-slate-600 text-gray-200' 
                            : 'bg-gray-100 border-gray-300 hover:bg-gray-200 text-gray-800'
                        } border cursor-default`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-24 sm:py-32 ${isDarkMode ? 'bg-gradient-to-b from-black to-gray-900' : 'bg-gradient-to-b from-white to-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader>
            <div className="flex items-center justify-center gap-4">
              <Zap className="w-12 h-12 text-yellow-500" />
              <span className="text-white">
                Experience
              </span>
            </div>
          </SectionHeader>
          
          <FadeInSection>
            <motion.div
              whileHover={{ x: 8 }}
              className={`${isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200'} rounded-3xl p-8 sm:p-12 border backdrop-blur-xl shadow-2xl`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-600 shadow-lg">
                    <Code2 className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2">Software Engineer</h3>
                    <p className="text-lg sm:text-xl text-blue-400 font-semibold">
                      Carelon Global Solutions
                    </p>
                  </div>
                </div>
                <span className="px-5 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold shadow-lg">
                  Current
                </span>
              </div>
              
              <div className="space-y-4 mt-8">
                {[
                  { color: "blue", text: "Architected LLM-powered Data Catalogue with AI-driven metadata management" },
                  { color: "purple", text: "Built enterprise dashboards handling real-time analytics for millions of users" },
                  { color: "pink", text: "Implemented AWS automation reducing infrastructure costs by 40%" },
                  { color: "green", text: "Designed RAG pipelines and intelligent agents using LangChain and vector databases" },
                  { color: "orange", text: "Optimized database queries and caching strategies improving performance by 60%" }
                ].map((achievement, i) => (
                  <div
                    key={i}
                    className="flex gap-4"
                  >
                    <CheckCircle2 className={`text-${achievement.color}-500 flex-shrink-0`} size={20} />
                    <span className={`text-base sm:text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      {achievement.text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </FadeInSection>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader>
            <div className="flex items-center justify-center gap-4">
              <Brain className="w-12 h-12 text-purple-500" />
              <span className="text-white">
                Featured Projects
              </span>
            </div>
          </SectionHeader>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <FadeInSection key={project.title} delay={index * 0.05}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  onClick={() => project.link && window.open(project.link, '_blank')}
                  className={`${isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200'} rounded-2xl p-6 sm:p-8 border backdrop-blur-sm cursor-pointer group transition-all shadow-lg hover:shadow-2xl`}
                >
                  <div className={`h-2 rounded-full bg-gradient-to-r ${project.gradient} mb-6 group-hover:h-3 transition-all`} />
                  
                  <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-red-500/20 to-orange-500/20 mb-4 text-red-500">
                    {project.icon}
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-blue-500 transition-colors">
                    {project.title}
                  </h3>
                  
                  {project.metric && (
                    <p className="text-2xl sm:text-3xl font-bold mb-4 text-blue-400">
                      {project.metric}
                    </p>
                  )}
                  
                  <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                    {project.desc}
                  </p>
                  
                  {project.link && (
                    <div className="flex items-center gap-2 text-blue-500 font-semibold">
                      <span>View Project</span>
                      <ExternalLink size={16} />
                    </div>
                  )}
                </motion.div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className={`py-24 sm:py-32 ${isDarkMode ? 'bg-gradient-to-b from-gray-900 to-black' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader>
            <div className="flex items-center justify-center gap-4">
              <Trophy className="w-12 h-12 text-yellow-500" />
              <span className="text-white">
                Achievements & Awards
              </span>
            </div>
          </SectionHeader>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Globe className="w-10 h-10 text-yellow-400" />, title: "Google Kickstart", value: "Rank 1445", gradient: "from-yellow-500 to-orange-500" },
              { icon: <Award className="w-10 h-10 text-blue-400" />, title: "Microsoft Azure AI-900", value: "Certified", gradient: "from-blue-500 to-cyan-500" },
              { icon: <Trophy className="w-10 h-10 text-yellow-400" />, title: "Carelon Excellence", value: "5+ Impact Awards", gradient: "from-blue-500 to-cyan-500" }
            ].map((achievement, index) => (
              <FadeInSection key={achievement.title} delay={index * 0.05}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.05 }}
                  className={`${isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200'} rounded-2xl p-8 border text-center backdrop-blur-sm cursor-pointer transition-all shadow-lg hover:shadow-2xl`}
                >
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${achievement.gradient} mb-4 shadow-lg`}>
                    {achievement.icon}
                  </div>
                  <p className={`font-bold text-lg mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    {achievement.title}
                  </p>
                  <p className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    {achievement.value}
                  </p>
                </motion.div>
              </FadeInSection>
            ))}
          </div>

          {/* Hobbies */}
          <FadeInSection>
            <div className="mt-16">
              <div className="flex items-center justify-center gap-3 mb-8">
                <HeartHandshake className="w-8 h-8 text-pink-500" />
                <h3 className="text-2xl sm:text-3xl font-bold text-white">
                  Hobbies & Interests
                </h3>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {["Competitive Coding", "System Design", "AI Experiments", "Tech Blogging", "Open Source"].map((hobby) => (
                  <motion.span
                    key={hobby}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`px-5 py-3 rounded-full text-sm font-medium transition-all ${
                      isDarkMode 
                        ? 'bg-slate-700/50 border-slate-600 hover:bg-slate-600 text-gray-200' 
                        : 'bg-gray-100 border-gray-300 hover:bg-gray-200 text-gray-800'
                    } border cursor-default`}
                  >
                    {hobby}
                  </motion.span>
                ))}
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader>
            <span className="text-white">
              Certifications
            </span>
          </SectionHeader>
          
          <FadeInSection>
            <div className="max-w-4xl mx-auto">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`${isDarkMode ? 'bg-blue-950/30 border-slate-700' : 'bg-blue-50 border-gray-200'} rounded-3xl p-12 border backdrop-blur-xl text-center shadow-2xl`}
              >
                <div className="inline-flex p-6 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-500 mb-6 shadow-2xl">
                  <Award size={64} className="text-white" />
                </div>
                
                <h3 className="text-3xl sm:text-4xl font-bold mb-4">Professional Certifications</h3>
                
                <p className={`text-lg sm:text-xl mb-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} max-w-2xl mx-auto`}>
                  Certified in Azure AI, Cloud Technologies, and Enterprise Solutions
                </p>
                
                <div className="grid sm:grid-cols-3 gap-4 mb-8">
                  {[
                    { title: "AI-900", subtitle: "Microsoft Azure AI" },
                    { title: "Cloud Practitioner", subtitle: "AWS Fundamentals" },
                    { title: "ML Specializations", subtitle: "Deep Learning & Systems" }
                  ].map((cert) => (
                    <div key={cert.title} className={`p-6 rounded-xl ${isDarkMode ? 'bg-slate-800/50' : 'bg-white'} border ${isDarkMode ? 'border-slate-700' : 'border-gray-200'}`}>
                      <h4 className="font-bold text-lg mb-2">{cert.title}</h4>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{cert.subtitle}</p>
                    </div>
                  ))}
                </div>
                
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/CERTIFICATIONS.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold text-white shadow-2xl shadow-blue-500/50"
                >
                  <ExternalLink size={20} />
                  View All Certifications
                </motion.a>
              </motion.div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-24 sm:py-32 ${isDarkMode ? 'bg-gradient-to-b from-black to-gray-900' : 'bg-gradient-to-b from-white to-gray-50'}`}>
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader>
            <span className="text-white">
              Let's Connect
            </span>
          </SectionHeader>
          
          <FadeInSection>
            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className={`text-lg sm:text-xl ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>
          </FadeInSection>
          
          <FadeInSection>
            <div className={`${isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200'} rounded-3xl p-8 sm:p-12 border backdrop-blur-xl shadow-2xl max-w-4xl mx-auto`}>
              <h3 className="text-2xl font-bold mb-8 text-center">Connect With Me</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target={link.name !== "Email" ? "_blank" : undefined}
                    rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-gradient-to-br ${link.color} text-white shadow-lg hover:shadow-2xl transition-all`}
                  >
                    {link.icon}
                    <span className="font-semibold text-sm">{link.name}</span>
                  </motion.a>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-gray-700 text-center">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/Sooraj_resume.pdf"
                  download
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full font-semibold text-white shadow-2xl shadow-blue-500/50"
                >
                  <FileText size={20} />
                  Download Full Resume
                </motion.a>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-12 border-t ${isDarkMode ? 'border-white/10' : 'border-gray-200'}`}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className={`${isDarkMode ? 'text-gray-500' : 'text-gray-400'} mb-4`}>
            © 2026 Sooraj Poojary. Crafted with passion and code.
          </p>
          <div className="flex justify-center gap-6">
            {socialLinks.slice(0, 3).map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${isDarkMode ? 'text-gray-600 hover:text-white' : 'text-gray-400 hover:text-gray-900'} transition-colors`}
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