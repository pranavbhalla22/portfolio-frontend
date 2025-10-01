import { Card } from "@/components/ui/card";
import { Code2, Lightbulb, Users } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable and efficient code following best practices",
    },
    {
      icon: Lightbulb,
      title: "Problem Solver",
      description: "Turning complex problems into elegant solutions",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborating effectively with diverse teams",
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-accent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card
                key={index}
                className="p-8 bg-card border-border hover:border-accent transition-all duration-300 hover:scale-105 animate-fade-in-up group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a dedicated software developer with a passion for creating innovative solutions. 
            With expertise in full-stack development, I specialize in building responsive web applications 
            using modern technologies like React, Next.js, and Python Flask. I'm constantly learning and 
            adapting to new technologies to deliver the best possible solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
