import { motion } from "framer-motion";
import { 
  Code2, 
  Brain, 
  Zap, 
  Trophy, 
  HeartHandshake,
  Globe,
  Sparkles,
  Terminal // Adding a suitable icon for Technical Skills
} from "lucide-react";

export default function PortfolioSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-12 max-w-4xl mx-auto px-6 py-12"
    >
      {/* Professional Summary */}
      <motion.section variants={item}>
        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20 p-8 backdrop-blur-xl border border-white/10 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative flex items-start gap-4">
            <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Professional Summary
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-gray-300">
                Software Engineer at <span className="font-semibold text-cyan-400">Carelon Global Solutions</span>, 
                building scalable cloud systems, <span className="text-purple-400 font-medium">LLM-powered platforms</span>, 
                and high-performance dashboards that drive real business impact.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Experience */}
      <motion.section variants={item}>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Zap className="w-8 h-8 text-yellow-500" />
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Experience</span>
        </h2>
        <div className="grid gap-4">
          <div className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
            <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold text-xl text-white">Software Engineer</h3>
              <p className="text-cyan-400">Carelon Global Solutions</p>
              <p className="text-gray-400 mt-1">LLM-powered Data Catalogue • AWS Automation • Enterprise Dashboards</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Technical Skills - New Section */}
      <motion.section variants={item}>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Terminal className="w-8 h-8 text-green-500" />
          <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">Technical Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-3">
            <h3 className="font-semibold text-lg text-cyan-300">Languages</h3>
            <div className="flex flex-wrap gap-3">
              {["Python", "Java", "JavaScript/TypeScript", "SQL"].map((skill) => (
                <span key={skill} className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium hover:bg-white/20 transition-all backdrop-blur-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-lg text-purple-300">Frameworks & Libraries</h3>
            <div className="flex flex-wrap gap-3">
              {["React", "Next.js", "Spring Boot", "LangChain", "TensorFlow/PyTorch"].map((skill) => (
                <span key={skill} className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium hover:bg-white/20 transition-all backdrop-blur-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-lg text-teal-300">Cloud & Tools</h3>
            <div className="flex flex-wrap gap-3">
              {["AWS (EC2, S3, Lambda, Bedrock)", "Docker", "Git", "CI/CD"].map((skill) => (
                <span key={skill} className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium hover:bg-white/20 transition-all backdrop-blur-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-lg text-orange-300">AI/ML & Data</h3>
            <div className="flex flex-wrap gap-3">
              {["Large Language Models", "RAG", "Neural Networks", "Data Pipelines", "Prompt Engineering"].map((skill) => (
                <span key={skill} className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium hover:bg-white/20 transition-all backdrop-blur-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-semibold text-lg text-pink-300">Other</h3>
            <div className="flex flex-wrap gap-3">
              {["System Design", "Algorithms & Data Structures", "Microservices"].map((skill) => (
                <span key={skill} className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium hover:bg-white/20 transition-all backdrop-blur-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section variants={item}>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Brain className="w-8 h-8 text-purple-500" />
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Featured Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          <motion.div 
            whileHover={{ scale: 1.03, y: -5 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-orange-900/30 to-red-900/30 border border-orange-500/30 backdrop-blur-md shadow-xl"
          >
            <div className="text-4xl mb-3" onClick={()=>window.open("https://research-project-frontend-five.vercel.app/")}>🔥</div>
            <h3 className="text-xl font-bold text-orange-300">ML Heat Transfer Prediction</h3>
            <p className="text-3xl font-bold text-white mt-2">99.2% Accuracy</p>
            <p className="text-gray-400 text-sm mt-2">Advanced neural network for thermal dynamics modeling</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.03, y: -5 }}
            className="p-6 rounded-2xl bg-gradient-to-br from-emerald-900/30 to-teal-900/30 border border-emerald-500/30 backdrop-blur-md shadow-xl"
          >
            <div className="text-4xl mb-3">🚑</div>
            <h3 className="text-xl font-bold text-emerald-300">Emergency Response System</h3>
            <p className="text-gray-400 mt-2">Real-time coordination platform for crisis management</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Hobbies */}
      <motion.section variants={item}>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <HeartHandshake className="w-8 h-8 text-pink-500" />
          <span className="bg-gradient-to-r from-pink-400 to-red-500 bg-clip-text text-transparent">Hobbies & Interests</span>
        </h2>
        <div className="flex flex-wrap gap-3">
          {["Competitive Coding", "System Design", "AI Experiments", "Tech Blogging", "Open Source"].map((hobby) => (
            <span key={hobby} className="px-5 py-3 rounded-full bg-white/10 border border-white/20 text-sm font-medium hover:bg-white/20 transition-all backdrop-blur-sm">
              {hobby}
            </span>
          ))}
        </div>
      </motion.section>

      {/* Awards */}
      <motion.section variants={item}>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Trophy className="w-8 h-8 text-yellow-500" />
          <span className="bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">Achievements & Awards</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-yellow-900/40 to-amber-900/40 border border-yellow-500/30">
            <Globe className="w-10 h-10 mx-auto text-yellow-400 mb-2" />
            <p className="font-bold text-yellow-300">Google Kickstart</p>
            <p className="text-2xl font-bold text-white">Rank 1445</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border border-cyan-500/30">
            <div className="text-3xl font-bold text-cyan-400 mb-2">AI-900</div>
            <p className="font-bold text-cyan-300">Microsoft Azure</p>
            <p className="text-sm text-gray-400">Certified</p>
          </div>
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-900/40 to-pink-900/40 border border-purple-500/30">
            <Trophy className="w-10 h-10 mx-auto text-purple-400 mb-2" />
            <p className="font-bold text-purple-300">5+ Impact Awards</p>
            <p className="text-sm text-gray-400">Carelon Excellence</p>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}