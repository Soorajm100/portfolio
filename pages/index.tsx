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
    <div className={`min-h-screen ${isDarkMode ? 'bg-slate-900' : 'bg-gray-50'}`}>
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 ${isDarkMode ? 'bg-slate-900/95' : 'bg-white/95'} backdrop-blur-sm border-b ${isDarkMode ? 'border-white/10' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={scrollToTop}
              className={`text-2xl font-bold bg-gradient-to-r ${isDarkMode ? 'from-cyan-400 to-blue-500' : 'from-blue-600 to-purple-600'} text-transparent bg-clip-text hover:scale-105 transition-transform`}
            >
              Portfolio
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {["About", "Why hire me", "Resume", "Experience", "Achievements"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                  className={`${isDarkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-700 hover:text-blue-600'} transition-colors duration-300 relative group`}
                >
                  {item}
                  <span className={`absolute bottom-0 left-0 w-0 h-0.5 ${isDarkMode ? 'bg-cyan-400' : 'bg-blue-600'} group-hover:w-full transition-all duration-300`}></span>
                </button>
              ))}
              
              {/* Dark/Light Mode Toggle */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-white/10' : 'hover:bg-gray-200'} transition-colors`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-white/10' : 'hover:bg-gray-200'} transition-colors`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-lg ${isDarkMode ? 'hover:bg-white/10' : 'hover:bg-gray-200'} transition-colors`}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className={isDarkMode ? 'text-white' : 'text-slate-900'} /> : <Menu className={isDarkMode ? 'text-white' : 'text-slate-900'} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className={`md:hidden py-4 ${isDarkMode ? 'bg-slate-800' : 'bg-white'} border-t ${isDarkMode ? 'border-white/10' : 'border-gray-200'}`}>
              {["About", "Why hire me", "Resume", "Experience", "Skills", "Projects", "Achievements"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                  className={`block w-full text-left ${isDarkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-700 hover:text-blue-600'} text-lg py-2 transition-colors`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Main Split Layout */}
      <div className="flex flex-col lg:flex-row min-h-screen pt-16">
        {/* Left: Sticky 3D Avatar - Reduced height */}
        <div className="lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)] w-full lg:w-2/5 flex items-center justify-center p-4 lg:p-8">
          <Scene />
        </div>

        {/* Right: Scrollable Content */}
        <div className="w-full lg:w-3/5 space-y-8 p-4 lg:p-8">
          {/* About */}
          <div id="about" className={`${isDarkMode ? 'bg-slate-800/50' : 'bg-white'} backdrop-blur-sm rounded-2xl p-6 lg:p-8 border ${isDarkMode ? 'border-white/10' : 'border-gray-200'} shadow-xl`}>
            <h1 className={`text-4xl lg:text-5xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Sooraj Poojary
            </h1>
            <p className={`text-xl lg:text-2xl mb-4 bg-gradient-to-r ${isDarkMode ? 'from-cyan-400 to-blue-400' : 'from-blue-600 to-purple-600'} text-transparent bg-clip-text font-semibold`}>
              Software Engineer @ Carelon Global Solutions
            </p>
            <p className={`text-base lg:text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
              Building scalable cloud systems, LLM-powered platforms, and intelligent dashboards that drive real impact.
            </p>
          </div>

          {/* Why Hire Me Section */}
          <div id="why-hire-me" className={`${isDarkMode ? 'bg-slate-800/50' : 'bg-white'} backdrop-blur-sm rounded-2xl p-6 lg:p-8 border ${isDarkMode ? 'border-white/10' : 'border-gray-200'} shadow-xl`}>
            <h2 className={`text-3xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Why hire me?
            </h2>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-600'} mb-8 leading-relaxed`}>
              Embarking on an enriching developer journey, I've traversed the realms of code, constantly expanding my skill set and embracing the challenges that come with crafting innovative solutions. From the initial lines of code to the intricate architecture of applications, every challenge met has been a stepping stone in my continuous evolution as a passionate and dedicated developer.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Backend Card */}
              <div className={`${isDarkMode ? 'bg-slate-700/50' : 'bg-gray-50'} rounded-xl p-6 border-2 ${isDarkMode ? 'border-orange-400/30' : 'border-orange-300'} hover:border-orange-400 transition-all duration-300 hover:scale-105`}>
                <div className="text-5xl mb-4">😎</div>
                <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Backend</h3>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                  Node.JS, Express, Redux, MongoDB
                </p>
              </div>

              {/* Frontend Card */}
              <div className={`${isDarkMode ? 'bg-slate-700/50' : 'bg-gray-50'} rounded-xl p-6 border-2 ${isDarkMode ? 'border-yellow-400/30' : 'border-yellow-300'} hover:border-yellow-400 transition-all duration-300 hover:scale-105`}>
                <div className="text-5xl mb-4">🤗</div>
                <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Frontend</h3>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                  React, Angular, Tailwind CSS, JavaScript
                </p>
              </div>

              {/* App Development Card */}
              <div className={`${isDarkMode ? 'bg-slate-700/50' : 'bg-gray-50'} rounded-xl p-6 border-2 ${isDarkMode ? 'border-green-400/30' : 'border-green-300'} hover:border-green-400 transition-all duration-300 hover:scale-105`}>
                <div className="text-5xl mb-4">😊</div>
                <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Agentic Flow Development</h3>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                  LangChain , VectorDB , Python , FastApi , SQL, Streamed Response. 
                </p>
              </div>

              {/* Web Development Card */}
              <div className={`${isDarkMode ? 'bg-slate-700/50' : 'bg-gray-50'} rounded-xl p-6 border-2 ${isDarkMode ? 'border-blue-400/30' : 'border-blue-300'} hover:border-blue-400 transition-all duration-300 hover:scale-105`}>
                <div className="text-5xl mb-4">😎</div>
                <h3 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Cloud</h3>
                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>
                  AWS, S3, Lambda, Docker , CI/CD , AWS Secret Manager , Terraform , IAM , Automation ,Vulnerability  Reduction 
                </p>
              </div>
            </div>
          </div>

          {/* Resume - Compact & Prominent */}
          <div id="resume" className={`${isDarkMode ? 'bg-gradient-to-r from-cyan-900/30 to-blue-900/30' : 'bg-gradient-to-r from-blue-50 to-purple-50'} backdrop-blur-sm rounded-2xl p-6 lg:p-8 border ${isDarkMode ? 'border-cyan-500/30' : 'border-blue-200'} shadow-xl`}>
            <h2 className={`text-2xl lg:text-3xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Download Resume
            </h2>
            <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-4 text-sm lg:text-base`}>
              Full experience, skills & achievements in PDF format
            </p>
            <a
              href="/resume.pdf"
              download
              className={`inline-flex items-center gap-2 ${isDarkMode ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600' : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'} text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg`}
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
    </div>
  );
}