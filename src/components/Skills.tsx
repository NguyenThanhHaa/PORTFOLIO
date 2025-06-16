import { motion } from 'framer-motion';
import { 
  SiJavascript, 
  SiTypescript, 
  SiReact, 
  SiRedux, 
  SiExpress, 
  SiMysql, 
  SiMongodb, 
  SiFigma, 
  SiGit, 
  SiGithub, 
  SiGitlab,
  SiNodedotjs,
  SiTailwindcss,
  SiBootstrap,
  SiAxios
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { useLanguage } from '../contexts/LanguageContext';

const Skills = () => {
  const { translations } = useLanguage();
  const techStacks = [
    { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
    { icon: <SiTypescript className="text-blue-500" />, name: "TypeScript" },
    { icon: <SiReact className="text-cyan-400" />, name: "ReactJS" },
    { icon: <SiRedux className="text-purple-500" />, name: "Redux" },
    { icon: <img src="src\assets\valtio-logo.png" alt="Valtio" className="w-12 h-12" />, name: "Valtio" },
    { icon: <img src="https://user-images.githubusercontent.com/958486/218346783-72be5ae3-b953-4dd7-b239-788a882fdad6.svg" alt="Zustand" className="w-14 h-14" />, name: "Zustand" },
    { icon: <SiNodedotjs className="text-green-500" />, name: "Node.js" },
    { icon: <SiExpress className="text-gray-300" />, name: "Express.js" },
    { icon: <FaDatabase className="text-red-500" />, name: "SQL Server" },
    { icon: <SiMysql className="text-blue-600" />, name: "MySQL" },
    { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
    { icon: <SiFigma className="text-pink-500" />, name: "Figma" },
    { icon: <SiGit className="text-orange-500" />, name: "Git" },
    { icon: <SiGithub className="text-gray-300" />, name: "GitHub" },
    { icon: <SiGitlab className="text-orange-500" />, name: "GitLab" },
    { icon: <MdOutlineDesignServices className="text-blue-500" />, name: "Material UI" },
    { icon: <SiTailwindcss className="text-cyan-400" />, name: "Tailwind CSS" },
    { icon: <SiBootstrap className="text-purple-600" />, name: "Bootstrap" },
    { icon: <SiAxios className="text-purple-500" />, name: "Axios" },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-12 text-center">{translations.skills.title}</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
            {techStacks.map((stack, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-white cursor-pointer transition-transform hover:scale-110"
                title={stack.name}
              >
                <div className="text-5xl mb-2">{stack.icon}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 