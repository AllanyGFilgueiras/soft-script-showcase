import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    company: "Mercado Livre",
    role: "Software Engineer",
    period: "Julho 2022 - Junho 2025",
    location: "Remoto",
    achievements: [
      "Desenvolvi aplicações fullstack usando React, Node.js (Express) e Nordic SSR, entregando soluções escaláveis usadas por 900+ usuários comerciais na América Latina",
      "Modernizei a plataforma de Campanhas Automatizadas, substituindo fluxos baseados em planilhas por interface dinâmica com validação em tempo real, reduzindo o tempo de configuração em 90%",
      "Implementei e mantive APIs RESTful em Node.js integradas com PostgreSQL, otimizando comunicação entre microserviços e reduzindo tempo médio de resposta em 35%",
      "Utilizei o Andes Design System para construir interfaces acessíveis e consistentes, aplicando Clean Code e princípios de arquitetura de software",
      "Desenvolvi testes unitários com Jest, alcançando 100% de cobertura em rotas críticas",
      "Trabalhei sob metodologias ágeis (Scrum e Kanban) usando Jira, melhorando a eficiência da equipe em 40%",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experiencia" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Experiência <span className="bg-gradient-primary bg-clip-text text-transparent">Profissional</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Minha jornada no desenvolvimento de software
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="p-8 shadow-card hover:shadow-xl transition-all duration-300 border-2 border-primary/10 bg-card animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                <div className="mb-4 md:mb-0">
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-primary font-medium mb-2">
                    <Briefcase className="w-5 h-5" />
                    <span>{exp.company}</span>
                  </div>
                </div>
                
                <div className="flex flex-col items-start md:items-end gap-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{exp.location}</span>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex gap-3 text-card-foreground">
                    <span className="text-primary mt-1.5 flex-shrink-0">✦</span>
                    <span className="leading-relaxed">{achievement}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
