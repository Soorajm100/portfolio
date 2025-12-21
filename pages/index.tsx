import Scene from "@/components/Scene";
import PortfolioSection from "@/components/PortfolioSection";
import SocialLinks from "@/components/SocialLink";
import { Menu, X, Download, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasWelcomed, setHasWelcomed] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!hasWelcomed && "speechSynthesis" in window) {
        const utterance = new SpeechSynthesisUtterance(
          "Welcome to Sooraj's portfolio"
        );
        utterance.rate = 0.9;
        utterance.pitch = 1;
        utterance.volume = 0.8;
        window.speechSynthesis.cancel();
        window.speechSynthesis.speak(utterance);
        setHasWelcomed(true);
        window.removeEventListener("click", handleFirstInteraction);
      }
    };

    window.addEventListener("click", handleFirstInteraction);
    return () => {
      window.removeEventListener("click", handleFirstInteraction);
    };
  }, [hasWelcomed]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className={`min-h-screen relative overflow-hidden ${isDarkMode ? 'bg-slate-900' : 'bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100'}`}>
      {/* Light Mode Animated Background Elements */}
      {!isDarkMode && (
        <>
          {/* Floating Circles */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-yellow-200 to-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-br from-orange-200 to-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-br from-purple-200 to-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-yellow-100/20 via-transparent to-orange-100/20"></div>
        </>
      )}

      {/* Dark Mode Background Pattern */}
      {isDarkMode && (
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 opacity-50"></div>
      )}

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 ${isDarkMode ? 'bg-slate-900/95' : 'bg-white/80'} backdrop-blur-md border-b ${isDarkMode ? 'border-white/10' : 'border-orange-200/50'} shadow-lg`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={scrollToTop}
              className={`text-2xl font-bold bg-gradient-to-r ${isDarkMode ? 'from-cyan-400 to-blue-500' : 'from-orange-600 to-amber-600'} text-transparent bg-clip-text hover:scale-105 transition-transform`}
            >
              Portfolio
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {["About", "Why hire me", "Resume", "Experience", "Achievements"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                  className={`${isDarkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-700 hover:text-orange-600'} transition-colors duration-300 relative group font-medium`}
                >
                  {item}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${isDarkMode ? 'bg-cyan-400' : 'bg-orange-600'} group-hover:w-full transition-all duration-300`}></span>
                </button>
              ))}
              
              {/* Dark/Light Mode Toggle */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-white/10' : 'hover:bg-orange-100'} transition-colors`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-white/10' : 'hover:bg-orange-100'} transition-colors`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-white/10' : 'hover:bg-orange-100'} transition-colors`}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className={isDarkMode ? 'text-white' : 'text-slate-900'} /> : <Menu className={isDarkMode ? 'text-white' : 'text-slate-900'} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className={`md:hidden py-4 ${isDarkMode ? 'bg-slate-800' : 'bg-white/95'} border-t ${isDarkMode ? 'border-white/10' : 'border-orange-200'}`}>
              {["About", "Why hire me", "Resume", "Experience", "Skills", "Projects", "Achievements"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                  className={`block w-full text-left ${isDarkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-700 hover:text-orange-600'} text-lg py-2 transition-colors font-medium`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Main Split Layout */}
      <div className="flex flex-col lg:flex-row pt-16 relative z-10">
        {/* Left: Sticky 3D Avatar with Info - Stays fixed and centered */}
        <div className="lg:fixed lg:left-0 lg:top-16 lg:bottom-0 lg:w-2/5 flex flex-col items-center justify-center p-4 lg:p-8">
          {/* Avatar Container - Takes up most space */}
          <div className="flex items-center justify-center w-full max-w-xl">
            <Scene />
          </div>
          
          {/* Quick Info Below Avatar - Visible on Desktop */}
          <div className="hidden lg:block mt-8 text-center space-y-3">
            <p className={`font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'} text-xl`}>Sooraj Poojary</p>
            <p className={`${isDarkMode ? 'text-cyan-400' : 'text-orange-600'} font-medium`}>Software Engineer</p>
            <div className="flex items-center justify-center gap-6 mt-4">
              <a 
                href="https://github.com/Soorajm100" 
                target="_blank"
                rel="noopener noreferrer"
                className={`${isDarkMode ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-orange-600'} transition-colors`}
                aria-label="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/sooraj123/" 
                target="_blank"
                rel="noopener noreferrer"
                className={`${isDarkMode ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-orange-600'} transition-colors`}
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="https://leetcode.com/u/unknow2001/" 
                target="_blank"
                rel="noopener noreferrer"
                className={`${isDarkMode ? 'text-gray-400 hover:text-cyan-400' : 'text-gray-600 hover:text-orange-600'} transition-colors`}
                aria-label="LeetCode"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-2.365-1.89-5.832-1.61-7.872.633l-4.176 4.97a5.786 5.786 0 0 0-.984 1.88 5.786 5.786 0 0 0 .984 5.83l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263.024-.793.349-1.469 1.022-2.049l4.127-4.905a1.384 1.384 0 0 0-.103-1.951 1.382 1.382 0 0 0-1.951.103l-4.127 4.905a5.786 5.786 0 0 0-.984 1.88 5.786 5.786 0 0 0 .984 5.83l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263.024-.793.349-1.469 1.022-2.049l4.127-4.905c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-2.365-1.89-5.832-1.61-7.872.633l-4.176 4.97a5.786 5.786 0 0 0-.984 1.88z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right: Scrollable Content - Offset for left panel */}
        <div className="w-full lg:w-3/5 lg:ml-[40%] space-y-8 p-4 lg:p-8 min-h-screen">
          {/* About */}
          <div id="about" className={`${isDarkMode ? 'bg-slate-800/50' : 'bg-white/90'} backdrop-blur-sm rounded-2xl p-6 lg:p-8 border ${isDarkMode ? 'border-white/10' : 'border-orange-200'} shadow-xl`}>
            <h1 className={`text-4xl lg:text-5xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Sooraj Poojary
            </h1>
            <p className={`text-xl lg:text-2xl mb-4 bg-gradient-to-r ${isDarkMode ? 'from-cyan-400 to-blue-400' : 'from-orange-600 to-amber-600'} text-transparent bg-clip-text font-semibold`}>
              Software Engineer @ Carelon Global Solutions
            </p>
            <p className={`text-base lg:text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              Building scalable cloud systems, LLM-powered platforms, and intelligent dashboards that drive real impact.
            </p>
          </div>

          {/* Why Hire Me Section */}
          <div id="why-hire-me" className={`${isDarkMode ? 'bg-slate-800/50' : 'bg-white/90'} backdrop-blur-sm rounded-2xl p-6 lg:p-8 border ${isDarkMode ? 'border-white/10' : 'border-orange-200'} shadow-xl`}>
            <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Why hire me?
            </h2>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-8 leading-relaxed`}>
              Embarking on an enriching developer journey, I've traversed the realms of code, constantly expanding my skill set and embracing the challenges that come with crafting innovative solutions. From the initial lines of code to the intricate architecture of applications, every challenge met has been a stepping stone in my continuous evolution as a passionate and dedicated developer.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Backend Card */}
              <div className={`${isDarkMode ? 'bg-slate-700/50' : 'bg-gradient-to-br from-orange-50 to-red-50'} rounded-xl p-6 border-2 ${isDarkMode ? 'border-orange-400/30' : 'border-orange-300'} hover:border-orange-500 transition-all duration-300 hover:scale-105 shadow-md`}>
                <div className="text-5xl mb-4">😎</div>
                <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Backend</h3>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-700'} text-sm`}>
                  Node.JS, Express, Redux, MongoDB
                </p>
              </div>

              {/* Frontend Card */}
              <div className={`${isDarkMode ? 'bg-slate-700/50' : 'bg-gradient-to-br from-yellow-50 to-amber-50'} rounded-xl p-6 border-2 ${isDarkMode ? 'border-yellow-400/30' : 'border-yellow-400'} hover:border-yellow-500 transition-all duration-300 hover:scale-105 shadow-md`}>
                <div className="text-5xl mb-4">🤗</div>
                <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Frontend</h3>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-700'} text-sm`}>
                  React, Angular, Tailwind CSS, JavaScript
                </p>
              </div>

              {/* Agentic Flow Development Card */}
              <div className={`${isDarkMode ? 'bg-slate-700/50' : 'bg-gradient-to-br from-green-50 to-emerald-50'} rounded-xl p-6 border-2 ${isDarkMode ? 'border-green-400/30' : 'border-green-400'} hover:border-green-500 transition-all duration-300 hover:scale-105 shadow-md`}>
                <div className="text-5xl mb-4">😊</div>
                <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Agentic Flow Development</h3>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-700'} text-sm`}>
                  LangChain, VectorDB, Python, FastApi, SQL, Streamed Response
                </p>
              </div>

              {/* Cloud Card */}
              <div className={`${isDarkMode ? 'bg-slate-700/50' : 'bg-gradient-to-br from-blue-50 to-cyan-50'} rounded-xl p-6 border-2 ${isDarkMode ? 'border-blue-400/30' : 'border-blue-400'} hover:border-blue-500 transition-all duration-300 hover:scale-105 shadow-md`}>
                <div className="text-5xl mb-4">☁️</div>
                <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Cloud</h3>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-700'} text-sm`}>
                  AWS, S3, Lambda, Docker, CI/CD, Terraform, IAM, Automation
                </p>
              </div>
            </div>
          </div>

          {/* Resume - Compact & Prominent */}
          <div id="resume" className={`${isDarkMode ? 'bg-gradient-to-r from-cyan-900/30 to-blue-900/30' : 'bg-gradient-to-r from-orange-100 to-amber-100'} backdrop-blur-sm rounded-2xl p-6 lg:p-8 border ${isDarkMode ? 'border-cyan-500/30' : 'border-orange-300'} shadow-xl`}>
            <h2 className={`text-2xl lg:text-3xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Download Resume
            </h2>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-4 text-sm lg:text-base`}>
              Full experience, skills & achievements in PDF format
            </p>
            <a
              href="/Sooraj_resume.pdf"
              download
              className={`inline-flex items-center gap-2 ${isDarkMode ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600' : 'bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700'} text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg`}
            >
              <Download className="w-5 h-5" />
              Download PDF
            </a>
          </div>

          {/* Portfolio Sections */}
          <PortfolioSection isDarkMode={isDarkMode} />

          {/* Social Links */}
          <SocialLinks isDarkMode={isDarkMode} />
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}