import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "Backend",
      skills: ["Python", "Flask", "Node.js", "REST APIs", "PostgreSQL", "MongoDB"],
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "Tools & Others",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Docker", "AWS", "Vercel"],
      color: "from-purple-500/20 to-pink-500/20",
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My <span className="text-accent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className={`p-8 bg-gradient-to-br ${category.color} backdrop-blur-sm border-border hover:border-accent transition-all duration-300 hover:scale-105 animate-fade-in-up`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                <span className="w-2 h-2 bg-accent rounded-full animate-glow" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className="bg-card/80 text-foreground hover:bg-accent hover:text-accent-foreground transition-colors cursor-default text-sm py-1.5 px-4"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
