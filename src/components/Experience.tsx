import { Briefcase, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    company: "Mercado Livre",
    role: "Software Engineer",
    period: "Julho 2022 - Junho 2025",
    location: "Remoto",
    achievements: [
      "Atuei no Backoffice de Promoções do Marketplace do Mercado Livre, desenvolvendo e mantendo sistemas que conectam milhares de lojas oficiais e campanhas promocionais a milhões de usuários da plataforma",
      "Contribuí para o módulo de Lojas Oficiais, otimizando performance e UX com React e TypeScript, garantindo integração fluida entre fluxos de promoções e consistência visual",
      "Evoluí a plataforma de Campanhas Automáticas, criando uma interface tipo planilha em React, com validações em tempo real e edição direta via navegador, substituindo processos manuais e aumentando a eficiência operacional",
      "No backend, implementei aprimoramentos em Node.js, com manipulação e validação de planilhas em massa (multer, read-excel-file), aplicando regras de rollback e consistência de dados em alta escala",
      "Colaborei no desenvolvimento do assistente virtual SANTI, integrado à API do ChatGPT (OpenAI), automatizando fluxos internos, reduzindo tickets operacionais e otimizando o tempo de resposta das equipes",
      "Melhorei a experiência conversacional do SANTI com UX contextual e IA aplicada, otimizando controle de estado, fluxo de mensagens e integração entre frontend e backend",
      "Trabalhei também com Python e Go em serviços de automação e scripts de suporte, aprimorando rotinas internas e integração entre microserviços",
      "Utilizei o Cursor AI como copiloto de desenvolvimento para acelerar entregas, revisar código e aplicar padrões de Clean Code e arquitetura escalável",
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
