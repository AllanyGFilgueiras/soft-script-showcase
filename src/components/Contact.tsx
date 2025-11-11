import { Mail, Linkedin, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contato" className="py-20 px-6 bg-gradient-soft">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
            Vamos <span className="bg-gradient-secondary bg-clip-text text-transparent">Conversar?</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Estou sempre aberta a novas oportunidades e colaborações
          </p>
        </div>

        <Card className="p-8 md:p-12 shadow-card border-2 border-primary/10 bg-card animate-slide-in">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <a 
              href="mailto:allanyfilgueiras@gmail.com"
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-primary/5 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <p className="text-muted-foreground text-sm break-all">allanyfilgueiras@gmail.com</p>
              </div>
            </a>

            <a 
              href="tel:+5583987593416"
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-secondary/5 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Telefone</h3>
                <p className="text-muted-foreground text-sm">+55 83 98759 3416</p>
              </div>
            </a>

            <a 
              href="https://linkedin.com/in/allanyfilgueiras"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-4 rounded-xl hover:bg-accent/5 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Linkedin className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">LinkedIn</h3>
                <p className="text-muted-foreground text-sm">/in/allanyfilgueiras</p>
              </div>
            </a>

            <div className="flex items-start gap-4 p-4 rounded-xl">
              <div className="w-12 h-12 rounded-xl bg-peach/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-peach-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Localização</h3>
                <p className="text-muted-foreground text-sm">Brasil</p>
              </div>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-border">
            <p className="text-muted-foreground mb-6">
              Disponível para oportunidades remotas e projetos freelance
            </p>
            <Button 
              size="lg"
              className="bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-soft"
              asChild
            >
              <a href="mailto:allanyfilgueiras@gmail.com">
                Enviar Email
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
