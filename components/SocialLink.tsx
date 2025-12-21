import { Github, Linkedin, Code2, FileText } from "lucide-react";

export default function SocialLinks({ isDarkMode }: { isDarkMode: boolean }) {
  const links = [
    {
      name: "GitHub",
      url: "https://github.com/Soorajm100",
      icon: <Github className="w-5 h-5" />,
      color: isDarkMode ? "from-gray-600 to-gray-800" : "from-gray-700 to-gray-900"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sooraj123/",
      icon: <Linkedin className="w-5 h-5" />,
      color: isDarkMode ? "from-blue-600 to-blue-800" : "from-blue-600 to-blue-800"
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/unknow2001/",
      icon: <Code2 className="w-5 h-5" />,
      color: isDarkMode ? "from-orange-500 to-orange-700" : "from-orange-600 to-orange-800"
    },
    {
      name: "Resume",
      url:  "/Sooraj_resume.pdf" ,
      icon: <FileText className="w-5 h-5" />,
      color: isDarkMode ? "from-purple-600 to-purple-800" : "from-purple-600 to-purple-800"
    }
  ];

  return (
    <div className={`${isDarkMode ? 'bg-slate-800/50' : 'bg-white'} backdrop-blur-sm rounded-2xl p-6 lg:p-8 border ${isDarkMode ? 'border-white/10' : 'border-gray-200'} shadow-xl`}>
      <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
        Connect With Me
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col items-center justify-center gap-3 p-5 rounded-xl bg-gradient-to-br ${link.color} text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
          >
            {link.icon}
            <span className="font-semibold text-sm">{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}