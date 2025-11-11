import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-background border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm flex items-center gap-2">
            Feito com <Heart className="w-4 h-4 text-primary fill-primary" /> por Allany Filgueiras
          </p>
          
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
