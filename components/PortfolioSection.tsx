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
      <motion.section variants={item} id="experience" className="snap-start min-h-screen flex items-center">
        <div className={`group relative overflow-hidden rounded-2xl ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} p-8 backdrop-blur-xl border shadow-lg hover:shadow-xl transition-shadow duration-300`}>
          <div className="relative flex items-start gap-4">
            <div className={`p-3 rounded-xl ${isDarkMode ? 'bg-blue-600' : 'bg-blue-600'} shadow-lg`}>
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className={`text-3xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
                Professional Summary
              </h2>
              <p className={`mt-4 text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Software Engineer at <span className={`font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Carelon Global Solutions</span>, 
                building scalable cloud systems, <span className={`font-medium ${isDarkMode ? 'text-blue-300' : 'text-blue-700'}`}>LLM-powered platforms</span>, 
                and high-performance dashboards that drive real business impact.
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Experience */}
      <motion.section variants={item} className="snap-start min-h-screen flex items-center">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Zap className="w-8 h-8 text-yellow-500" />
          <span className={`${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>Experience</span>
        </h2>
        <div className="grid gap-4">
          <div className={`flex items-start gap-4 p-5 rounded-xl ${isDarkMode ? 'bg-slate-700 border-slate-600 hover:bg-slate-600' : 'bg-gray-50 border-gray-200 hover:bg-gray-100'} border transition-all duration-300 backdrop-blur-sm`}>
            <div className={`p-2 rounded-lg ${isDarkMode ? 'bg-blue-600' : 'bg-blue-600'}`}>
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className={`font-semibold text-xl ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Software Engineer</h3>
              <p className={isDarkMode ? 'text-blue-400' : 'text-blue-600'}>Carelon Global Solutions</p>
              <p className={`mt-1 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>LLM-powered Data Catalogue • AWS Automation • Enterprise Dashboards</p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Technical Skills */}
      <motion.section variants={item} id="skills" className="snap-start min-h-screen flex items-center">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Terminal className="w-8 h-8 text-green-500" />
          <span className={`${isDarkMode ? 'text-green-400' : 'text-green-600'}`}>Technical Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="space-y-3">
            <h3 className={`font-semibold text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Languages</h3>
            <div className="flex flex-wrap gap-3">
              {["Python", "Java", "JavaScript/TypeScript", "SQL"].map((skill) => (
                <span key={skill} className={`px-4 py-2 rounded-full ${isDarkMode ? 'bg-slate-700 border-slate-600 hover:bg-slate-600' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'} border text-sm font-medium transition-all backdrop-blur-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className={`font-semibold text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Frameworks & Libraries</h3>
            <div className="flex flex-wrap gap-3">
              {["React", "Next.js", "Spring Boot", "LangChain", "TensorFlow/PyTorch"].map((skill) => (
                <span key={skill} className={`px-4 py-2 rounded-full ${isDarkMode ? 'bg-slate-700 border-slate-600 hover:bg-slate-600' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'} border text-sm font-medium transition-all backdrop-blur-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className={`font-semibold text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Cloud & Tools</h3>
            <div className="flex flex-wrap gap-3">
              {["AWS (EC2, S3, Lambda, Bedrock)", "Docker", "Git", "CI/CD"].map((skill) => (
                <span key={skill} className={`px-4 py-2 rounded-full ${isDarkMode ? 'bg-slate-700 border-slate-600 hover:bg-slate-600' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'} border text-sm font-medium transition-all backdrop-blur-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className={`font-semibold text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>AI/ML & Data</h3>
            <div className="flex flex-wrap gap-3">
              {["Large Language Models", "RAG", "Neural Networks", "Data Pipelines", "Prompt Engineering"].map((skill) => (
                <span key={skill} className={`px-4 py-2 rounded-full ${isDarkMode ? 'bg-slate-700 border-slate-600 hover:bg-slate-600' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'} border text-sm font-medium transition-all backdrop-blur-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <h3 className={`font-semibold text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Other</h3>
            <div className="flex flex-wrap gap-3">
              {["System Design", "Algorithms & Data Structures", "Microservices"].map((skill) => (
                <span key={skill} className={`px-4 py-2 rounded-full ${isDarkMode ? 'bg-slate-700 border-slate-600 hover:bg-slate-600' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'} border text-sm font-medium transition-all backdrop-blur-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section variants={item} id="projects" className="snap-start min-h-screen flex items-center">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Brain className="w-8 h-8 text-purple-500" />
          <span className={`${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>Featured Projects</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-5">
          <motion.div 
            whileHover={{ scale: 1.03, y: -5 }}
            className={`p-6 rounded-2xl ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} border backdrop-blur-md shadow-lg hover:shadow-xl transition-shadow cursor-pointer`}
            onClick={() => window.open("https://research-project-frontend-five.vercel.app/")}
          >
            <div className="text-4xl mb-3">🔥</div>
            <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>ML Heat Transfer Prediction</h3>
            <p className={`text-3xl font-bold mt-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>99.2% Accuracy</p>
            <p className={`text-sm mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Advanced neural network for thermal dynamics modeling</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.03, y: -5 }}
            className={`p-6 rounded-2xl ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} border backdrop-blur-md shadow-lg hover:shadow-xl transition-shadow`}
            onClick={() => window.open("https://medical-frontend-gamma-three.vercel.app/")}
          >
            <div className="text-4xl mb-3">🚑</div>
            <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Emergency Response System</h3>
            <p className={`mt-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Real-time coordination platform for crisis management</p>
          </motion.div>
        </div>
      </motion.section>

      {/* Hobbies */}
      <motion.section variants={item} className="snap-start min-h-screen flex items-center">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <HeartHandshake className="w-8 h-8 text-pink-500" />
          <span className={`${isDarkMode ? 'text-pink-400' : 'text-pink-600'}`}>Hobbies & Interests</span>
        </h2>
        <div className="flex flex-wrap gap-3">
          {["Competitive Coding", "System Design", "AI Experiments", "Tech Blogging", "Open Source"].map((hobby) => (
            <span key={hobby} className={`px-5 py-3 rounded-full ${isDarkMode ? 'bg-slate-700 border-slate-600 hover:bg-slate-600' : 'bg-gray-100 border-gray-300 hover:bg-gray-200'} border text-sm font-medium transition-all backdrop-blur-sm ${isDarkMode ? 'text-gray-200' : 'text-gray-800'}`}>
              {hobby}
            </span>
          ))}
        </div>
      </motion.section>

      {/* Awards */}
      <motion.section variants={item} id="achievements" className="snap-start min-h-screen flex items-center">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <Trophy className="w-8 h-8 text-yellow-500" />
          <span className={`${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>Achievements & Awards</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className={`text-center p-6 rounded-2xl ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} border`}>
            <Globe className="w-10 h-10 mx-auto text-yellow-400 mb-2" />
            <p className={`font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Google Kickstart</p>
            <p className={`text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Rank 1445</p>
          </div>
          <div className={`text-center p-6 rounded-2xl ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} border`}>
            <div className={`text-3xl font-bold mb-2 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>AI-900</div>
            <p className={`font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Microsoft Azure</p>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Certified</p>
          </div>
          <div className={`text-center p-6 rounded-2xl ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} border`}>
            <Trophy className="w-10 h-10 mx-auto text-purple-400 mb-2" />
            <p className={`font-bold ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>5+ Impact Awards</p>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Carelon Excellence</p>
          </div>
        </div>
      </motion.section>
      {/* Certifications */}
      <motion.section variants={item} id="certifications" className="snap-start min-h-screen flex items-center">
        <div className={`w-full ${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} rounded-2xl p-8 border shadow-lg`}>
          <h2 className="text-2xl font-bold mb-4">Certifications</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-slate-700' : 'bg-gray-50'} border`}>
              <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>AI-900</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-sm`}>Microsoft Azure - Certified</p>
            </div>
            <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-slate-700' : 'bg-gray-50'} border`}>
              <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Cloud Practitioner</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-sm`}>AWS / Cloud Fundamentals</p>
            </div>
            <div className={`p-4 rounded-lg ${isDarkMode ? 'bg-slate-700' : 'bg-gray-50'} border`}>
              <h3 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>Specializations</h3>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-sm`}>ML & Systems</p>
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  );
}