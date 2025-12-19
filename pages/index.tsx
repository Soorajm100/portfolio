import Scene from "@/components/Scene";
import PortfolioSection from "@/components/PortfolioSection";
import SocialLinks from "@/components/SocialLink";
import { Menu, X, Download } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Speech welcome - only once per session
  useEffect(() => {
    const hasWelcomed = sessionStorage.getItem("portfolioWelcomed");
    if (!hasWelcomed && "speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance("Welcome to Sooraj's portfolio");
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 0.8;
      window.speechSynthesis.speak(utterance);
      sessionStorage.setItem("portfolioWelcomed", "true");
    }
  }, []);

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
    <main className="min-h-screen bg-black text-white relative">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <button
            onClick={scrollToTop}
            className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent cursor-pointer hover:opacity-90 transition"
          >
            Portfolio
          </button>

          <ul className="hidden md:flex items-center gap-8">
            {["About", "Resume", "Experience", "Achievements"].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 group-hover:w-full" />
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-xl border-b border-white/10">
            <ul className="py-6 px-8 space-y-4">
              {["About", "Resume", "Experience", "Skills", "Projects", "Achievements"].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item.toLowerCase().replace(" ", "-"))}
                    className="block w-full text-left text-gray-300 hover:text-cyan-400 text-lg py-2 transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Main Split Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* Left: Sticky 3D Avatar - Always Visible on Desktop */}
        <div className="h-[60vh] md:h-screen md:sticky md:top-0 flex items-center justify-center bg-gradient-to-b from-black to-purple-900/20">
          <Scene />
        </div>

        {/* Right: Scrollable Content */}
        <div className="overflow-y-auto bg-black/40">
          <div className="max-w-2xl mx-auto px-8 py-16 md:py-20 lg:px-12 space-y-16">
            {/* About */}
            <section id="about" className="scroll-mt-20">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Sooraj Poojary
              </h1>
              <p className="text-2xl text-gray-400 mt-4">
                Software Engineer @ Carelon Global Solutions
              </p>
              <p className="text-lg text-gray-500 mt-6 max-w-lg leading-relaxed">
                Building scalable cloud systems, LLM-powered platforms, and intelligent dashboards that drive real impact.
              </p>
            </section>

            {/* Resume - Compact & Prominent */}
            <section id="resume" className="scroll-mt-20">
              <div className="rounded-2xl bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20 p-8 backdrop-blur-md border border-cyan-500/20 shadow-xl text-center">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent mb-4">
                  Download Resume
                </h2>
                <p className="text-gray-400 mb-6">
                  Full experience, skills & achievements in PDF format
                </p>
                <a
                  href="/Sooraj_resume.pdf"
                  download="Sooraj_Poojary_Resume.pdf"
                  className="inline-flex items-center gap-3 px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium shadow-lg hover:shadow-cyan-500/50 hover:scale-105 transition-all duration-300"
                >
                  <Download className="w-5 h-5" />
                  Download PDF
                </a>
              </div>
            </section>

            {/* Portfolio Sections */}
            <section id="experience" className="scroll-mt-20 space-y-12">
              <PortfolioSection />
            </section>

            {/* Social Links */}
            <section id="achievements" className="scroll-mt-20 pb-10">
              <SocialLinks />
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}