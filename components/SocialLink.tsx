import { Github, Linkedin, Code2, FileText } from "lucide-react";

export default function SocialLinks({ isDarkMode }: { isDarkMode: boolean }) {
  const links = [
    {
      name: "GitHub",
      url: "https://github.com/Soorajm100",
      icon: <Github className="w-5 h-5" />,
      // use solid background classes instead of gradients
      bg: isDarkMode ? 'bg-gray-700 text-white hover:bg-gray-600' : 'bg-gray-100 text-slate-900 hover:bg-gray-200'
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sooraj123/",
      icon: <Linkedin className="w-5 h-5" />,
      bg: isDarkMode ? 'bg-blue-700 text-white hover:bg-blue-600' : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
    },
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/unknow2001/",
      icon: <Code2 className="w-5 h-5" />,
      bg: isDarkMode ? 'bg-orange-600 text-white hover:bg-orange-500' : 'bg-orange-50 text-orange-700 hover:bg-orange-100'
    },
    {
      name: "Resume",
      url:  "/Sooraj_resume.pdf" ,
      icon: <FileText className="w-5 h-5" />,
      bg: isDarkMode ? 'bg-purple-700 text-white hover:bg-purple-600' : 'bg-purple-50 text-purple-700 hover:bg-purple-100'
    }
  ];

  return (
    <div className={`${isDarkMode ? 'bg-slate-800 border-slate-700' : 'bg-white border-gray-200'} backdrop-blur-sm rounded-2xl p-6 lg:p-8 border shadow-lg hover:shadow-xl transition-shadow duration-300`}>
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
            className={`flex flex-col items-center justify-center gap-3 p-5 rounded-xl ${link.bg} hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
          >
            {link.icon}
            <span className={`font-semibold text-sm ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}