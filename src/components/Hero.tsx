import { Mail, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-soft">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary-foreground text-sm font-medium mb-4">
              Disponível para novos projetos
            </span>
          </div>
          
          <h1 className="font-display text-5xl md:text-7xl font-bold text-foreground mb-6">
            Olá, eu sou <span className="bg-gradient-primary bg-clip-text text-transparent">Allany Filgueiras</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-4">
            Fullstack Software Engineer
          </p>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Especializada em criar aplicações web escaláveis e eficientes com React, Node.js e TypeScript. 
            Apaixonada por código limpo, boas práticas e experiências de usuário encantadoras.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-soft"
              asChild
            >
              <a href="#contato">Entre em Contato</a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-primary/30 hover:bg-primary/5"
              asChild
            >
              <a href="#projetos">Ver Projetos</a>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-6 text-muted-foreground">
            <a 
              href="mailto:allanyfilgueiras@gmail.com" 
              className="flex items-center gap-2 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
              <span className="hidden sm:inline">allanyfilgueiras@gmail.com</span>
            </a>
            
            <a 
              href="https://linkedin.com/in/allanyfilgueiras" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span className="hidden sm:inline">Brasil</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
