import { Code2, Database, Globe, Wrench } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    color: "primary",
    skills: ["React.js", "TypeScript", "Redux", "Vue.js", "Jest", "Cypress"],
  },
  {
    title: "Backend",
    icon: Database,
    color: "secondary",
    skills: ["Node.js", "Express.js", "PostgreSQL", "MySQL", "REST APIs", "Python", "Go"],
  },
  {
    title: "DevOps & Tools",
    icon: Wrench,
    color: "accent",
    skills: ["Git", "Jira", "Scrum", "Kanban", "CI/CD"],
  },
  {
    title: "Languages",
    icon: Globe,
    color: "peach",
    skills: ["Português (Nativo)", "Inglês", "Espanhol"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Habilidades & <span className="bg-gradient-primary bg-clip-text text-transparent">Tecnologias</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Ferramentas e tecnologias que domino
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={index}
                className="p-6 shadow-card hover:shadow-xl transition-all duration-300 border-2 border-primary/10 hover:border-primary/30 bg-card group animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-xl bg-${category.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent className={`w-6 h-6 text-${category.color}-foreground`} />
                </div>

                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge 
                      key={idx}
                      variant="secondary"
                      className="bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
