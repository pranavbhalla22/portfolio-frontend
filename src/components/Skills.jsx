import { FaReact, FaPython, FaNodeJs, FaDocker } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFlask } from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "React", icon: <FaReact className="text-sky-400" size={40} /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" size={40} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" size={40} /> },
    { name: "Python", icon: <FaPython className="text-yellow-500" size={40} /> },
    { name: "Flask", icon: <SiFlask className="text-gray-700 dark:text-white" size={40} /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-600" size={40} /> },
    { name: "Docker", icon: <FaDocker className="text-blue-500" size={40} /> },
  ];

  return (
    <section id="skills" className="bg-gray-100 dark:bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-gray-800 dark:text-white">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white dark:bg-gray-800 shadow-md p-4 rounded-xl hover:shadow-xl transition"
            >
              {skill.icon}
              <p className="mt-3 text-gray-700 dark:text-gray-300 font-medium">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
