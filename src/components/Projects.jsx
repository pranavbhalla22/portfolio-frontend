export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with Next.js and Tailwind CSS.",
      link: "#"
    },
    {
      title: "Expense Tracker",
      description: "A Python + Flask app to track expenses and visualize data.",
      link: "#"
    },
    {
      title: "Source Finder",
      description: "App that helps users find reliable sources for research.",
      link: "#"
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition"
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {project.description}
          </p>
          <a
            href={project.link}
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            View Project →
          </a>
        </div>
      ))}
    </div>
  );
}
