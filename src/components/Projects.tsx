import { Award, Users, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Hackathon Decola Iteris – Edition Luna",
    role: "2º Lugar - Projeto em Equipe",
    date: "Março 2022",
    icon: Award,
    description: "Colaborei com uma equipe para desenvolver um website mobile-first usando Vue.js, conquistando o 2º lugar pela abordagem inovadora e trabalho em equipe efetivo.",
    achievements: [
      "Desenvolvimento de interface responsiva com Vue.js",
      "Otimização para dispositivos móveis",
      "Prêmio de 2º lugar na competição",
    ],
    tags: ["Vue.js", "Mobile-First", "UX/UI"],
    color: "primary",
  },
  {
    title: "Mercado Livre - IT Bootcamp Front-End Web",
    role: "Participante (Funcionária Contratada)",
    date: "Julho - Setembro 2022",
    icon: Rocket,
    description: "Participei de um bootcamp interno focado em React, SSR, comunicação com APIs e melhores práticas de código enquanto trabalhava como Frontend Engineer.",
    achievements: [
      "Experiência prática com React, Redux, Node.js e Jest/Cypress",
      "Colaboração em squads ágeis",
      "Desenvolvimento de projetos internos com foco em acessibilidade e performance",
    ],
    tags: ["React", "SSR", "Node.js", "Jest", "Agile"],
    color: "secondary",
  },
];

const Projects = () => {
  return (
    <section id="projetos" className="py-20 px-6 bg-gradient-soft">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Projetos & <span className="bg-gradient-secondary bg-clip-text text-transparent">Conquistas</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Alguns destaques da minha carreira
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card 
                key={index}
                className="p-6 shadow-card hover:shadow-xl transition-all duration-300 border-2 border-primary/10 hover:border-primary/30 bg-card group animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-${project.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <IconComponent className={`w-7 h-7 text-${project.color}-foreground`} />
                </div>

                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                
                <p className="text-sm text-primary font-medium mb-1">
                  {project.role}
                </p>
                
                <p className="text-xs text-muted-foreground mb-4">
                  {project.date}
                </p>

                <p className="text-card-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <ul className="space-y-2 mb-4">
                  {project.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex gap-2 text-sm text-card-foreground">
                      <span className="text-primary mt-0.5">✦</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary"
                      className="bg-secondary/50 text-secondary-foreground"
                    >
                      {tag}
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

export default Projects;
