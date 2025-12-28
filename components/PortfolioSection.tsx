import { motion } from "framer-motion";
import { 
  Code2, 
  Brain, 
  Zap, 
  Trophy, 
  HeartHandshake,
  Globe,
  Sparkles,
  Terminal
} from "lucide-react";

export default function PortfolioSection({ isDarkMode }: { isDarkMode: boolean }) {
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
      className="space-y-12 max-w-4xl mx-auto"
    >
      {/* Professional Summary */}
      <motion.section variants={item} id="experience">
        <div className={`group relative overflow-hidden rounded-2xl ${isDarkMode ? 'bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20' : 'bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50'} p-8 backdrop-blur-xl border ${isDarkMode ? 'border-white/10' : 'border-gray-200'} shadow-2xl`}>
          <div className={`absolute inset-0 ${isDarkMode ? 'bg-gradient-to-r from-cyan-500/10 to-purple-600/10' : 'bg-gradient-to-r from-blue-100/50 to-purple-100/50'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
          <div className="relative flex items-start gap-4">
            <div className={`p-3 rounded-xl ${isDarkMode ? 'bg-gradient-to-br from-cyan-500 to-blue-600' : 'bg-gradient-to-br from-blue-600 to-purple-600'} shadow-lg`}>
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className={`text-3xl font-bold ${isDarkMode ? 'bg-gradient-to-r from-cyan-400 to-purple-400' : 'bg-gradient-to-r from-blue-600 to-purple-600'} bg-clip-text text-transparent`}>
                Professional Summary
              </h2>
              <p className={`mt-4 text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Software Engineer at <span className={`font-semibold ${isDarkMode ? 'text-cyan-400' : 'text-blue-600'}`}>Carelon Global Solutions</span>, 
                building scalable cloud systems, <span className={`font-medium ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>LLM-powered platforms</span>, 
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
          <span className={`${isDarkMode ? 'bg-gradient-to-r from-yellow-400 to-orange-500' : 'bg-gradient-to-r from-yellow-600 to-orange-600'} bg-clip-text text-transparent`}>Experience</span>
        </h2>
        <div className="grid gap-4">
          <div className={`flex items-start gap-4 p-5 rounded-xl ${isDarkMode ? 'bg-white/5 border-white/10 hover:bg-white/10' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'} border transition-all duration-300 backdrop-blur-sm`}>
            <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-gradient-to-br from-blue-500 to-purple-600' : 'bg-gradient-to-br from-blue-600 to-purple-600'}`}>
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className={`font-semibold text-xl ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Software Engineer</h3>
              <p className={isDarkMode ? 'text-cyan-400' : 'text-blue-600'}>Carelon Global Solutions</p>
              <p className={`mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>LLM-powered Data Catalogue • AWS Automation • Enterprise Dashboards</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Technical Skills */}
      <motion.section variants={item} id="skills">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Terminal className="w-8 h-8 text-green-500" />
          <span className={`${isDarkMode ? 'bg-gradient-to-r from-green-400 to-cyan-500' : 'bg-gradient-to-r from-green-600 to-cyan-600'} bg-clip-text text-transparent`}>Technical Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-3">
            <h3 className={`font-semibold text-lg ${isDarkMode ? 'text-cyan-300' : 'text-cyan-700'}`}>Languages</h3>
            <div className="flex flex-wrap gap-3">
              {["Python", "Java", "JavaScript/TypeScript", "SQL"].map((skill) => (
                <span key={skill} className={`px-4 py-2 rounded-full ${isDarkMode ? 'bg-white/10 border-white/20 hover:bg-white/20' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'} border text-sm font-medium transition-all backdrop-blur-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className={`font-semibold text-lg ${isDarkMode ? 'text-purple-300' : 'text-purple-700'}`}>Frameworks & Libraries</h3>
            <div className="flex flex-wrap gap-3">
              {["React", "Next.js", "Spring Boot", "LangChain", "TensorFlow/PyTorch"].map((skill) => (
                <span key={skill} className={`px-4 py-2 rounded-full ${isDarkMode ? 'bg-white/10 border-white/20 hover:bg-white/20' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'} border text-sm font-medium transition-all backdrop-blur-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className={`font-semibold text-lg ${isDarkMode ? 'text-teal-300' : 'text-teal-700'}`}>Cloud & Tools</h3>
            <div className="flex flex-wrap gap-3">
              {["AWS (EC2, S3, Lambda, Bedrock)", "Docker", "Git", "CI/CD"].map((skill) => (
                <span key={skill} className={`px-4 py-2 rounded-full ${isDarkMode ? 'bg-white/10 border-white/20 hover:bg-white/20' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'} border text-sm font-medium transition-all backdrop-blur-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className={`font-semibold text-lg ${isDarkMode ? 'text-orange-300' : 'text-orange-700'}`}>AI/ML & Data</h3>
            <div className="flex flex-wrap gap-3">
              {["Large Language Models", "RAG", "Neural Networks", "Data Pipelines", "Prompt Engineering"].map((skill) => (
                <span key={skill} className={`px-4 py-2 rounded-full ${isDarkMode ? 'bg-white/10 border-white/20 hover:bg-white/20' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'} border text-sm font-medium transition-all backdrop-blur-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className={`font-semibold text-lg ${isDarkMode ? 'text-pink-300' : 'text-pink-700'}`}>Other</h3>
            <div className="flex flex-wrap gap-3">
              {["System Design", "Algorithms & Data Structures", "Microservices"].map((skill) => (
                <span key={skill} className={`px-4 py-2 rounded-full ${isDarkMode ? 'bg-white/10 border-white/20 hover:bg-white/20' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'} border text-sm font-medium transition-all backdrop-blur-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section variants={item} id="projects">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Brain className="w-8 h-8 text-purple-500" />
          <span className={`${isDarkMode ? 'bg-gradient-to-r from-purple-400 to-pink-500' : 'bg-gradient-to-r from-purple-600 to-pink-600'} bg-clip-text text-transparent`}>Featured Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          <motion.div 
            whileHover={{ scale: 1.03, y: -5 }}
            className={`p-6 rounded-2xl ${isDarkMode ? 'bg-gradient-to-br from-orange-900/30 to-red-900/30 border-orange-500/30' : 'bg-gradient-to-br from-orange-50 to-red-50 border-orange-300'} border backdrop-blur-md shadow-xl cursor-pointer`}
            onClick={() => window.open("https://research-project-frontend-five.vercel.app/")}
          >
            <div className="text-4xl mb-3">🔥</div>
            <h3 className={`text-xl font-bold ${isDarkMode ? 'text-orange-300' : 'text-orange-700'}`}>ML Heat Transfer Prediction</h3>
            <p className={`text-3xl font-bold mt-2 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>99.2% Accuracy</p>
            <p className={`text-sm mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Advanced neural network for thermal dynamics modeling</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.03, y: -5 }}
            className={`p-6 rounded-2xl ${isDarkMode ? 'bg-gradient-to-br from-emerald-900/30 to-teal-900/30 border-emerald-500/30' : 'bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-300'} border backdrop-blur-md shadow-xl`}
            onClick={() => window.open("https://medical-frontend-gamma-three.vercel.app/")}
          >
            <div className="text-4xl mb-3">🚑</div>
            <h3 className={`text-xl font-bold ${isDarkMode ? 'text-emerald-300' : 'text-emerald-700'}`}>Emergency Response System</h3>
            <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Real-time coordination platform for crisis management</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Hobbies */}
      <motion.section variants={item}>
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <HeartHandshake className="w-8 h-8 text-pink-500" />
          <span className={`${isDarkMode ? 'bg-gradient-to-r from-pink-400 to-red-500' : 'bg-gradient-to-r from-pink-600 to-red-600'} bg-clip-text text-transparent`}>Hobbies & Interests</span>
        </h2>
        <div className="flex flex-wrap gap-3">
          {["Competitive Coding", "System Design", "AI Experiments", "Tech Blogging", "Open Source"].map((hobby) => (
            <span key={hobby} className={`px-5 py-3 rounded-full ${isDarkMode ? 'bg-white/10 border-white/20 hover:bg-white/20' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'} border text-sm font-medium transition-all backdrop-blur-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
              {hobby}
            </span>
          ))}
        </div>
      </motion.section>

      {/* Awards */}
      <motion.section variants={item} id="achievements">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Trophy className="w-8 h-8 text-yellow-500" />
          <span className={`${isDarkMode ? 'bg-gradient-to-r from-yellow-400 to-amber-600' : 'bg-gradient-to-r from-yellow-600 to-amber-700'} bg-clip-text text-transparent`}>Achievements & Awards</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className={`text-center p-6 rounded-2xl ${isDarkMode ? 'bg-gradient-to-br from-yellow-900/40 to-amber-900/40 border-yellow-500/30' : 'bg-gradient-to-br from-yellow-50 to-amber-50 border-yellow-300'} border`}>
            <Globe className="w-10 h-10 mx-auto text-yellow-400 mb-2" />
            <p className={`font-bold ${isDarkMode ? 'text-yellow-300' : 'text-yellow-700'}`}>Google Kickstart</p>
            <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Rank 1445</p>
          </div>
          <div className={`text-center p-6 rounded-2xl ${isDarkMode ? 'bg-gradient-to-br from-blue-900/40 to-cyan-900/40 border-cyan-500/30' : 'bg-gradient-to-br from-blue-50 to-cyan-50 border-cyan-300'} border`}>
            <div className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-700'}`}>AI-900</div>
            <p className={`font-bold ${isDarkMode ? 'text-cyan-300' : 'text-cyan-700'}`}>Microsoft Azure</p>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Certified</p>
          </div>
          <div className={`text-center p-6 rounded-2xl ${isDarkMode ? 'bg-gradient-to-br from-purple-900/40 to-pink-900/40 border-purple-500/30' : 'bg-gradient-to-br from-purple-50 to-pink-50 border-purple-300'} border`}>
            <Trophy className="w-10 h-10 mx-auto text-purple-400 mb-2" />
            <p className={`font-bold ${isDarkMode ? 'text-purple-300' : 'text-purple-700'}`}>5+ Impact Awards</p>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Carelon Excellence</p>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}