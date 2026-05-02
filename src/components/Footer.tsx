import { Link } from "react-router-dom";
import { Instagram, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative border-t border-border pt-20 pb-10">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <img
                src="/img/logo%20navbar%20y%20footer.png"
                alt="EDC Arborismo"
                className="h-9 w-auto"
                loading="lazy"
              />
            </div>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Arboricultura técnica y poda de altura con criterio científico.
              Preservando el patrimonio arbóreo bajo estándares internacionales ISA y ANSI Z133.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-primary mb-4">Navegación</div>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
              <li><a href="/#nosotros" className="text-muted-foreground hover:text-primary transition-colors">Nosotros</a></li>
              <li><a href="/#servicios" className="text-muted-foreground hover:text-primary transition-colors">Servicios</a></li>
              <li><Link to="/portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</Link></li>
              <li><a href="/#contacto" className="text-muted-foreground hover:text-primary transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-primary mb-4">Contacto</div>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="https://wa.me/5491150537615" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <MessageCircle className="size-4" /> +54 9 11 5053 7615
                </a>
              </li>
              <li>
                <a href="mailto:corniolaedgar@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="size-4" /> corniolaedgar@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/edc_arborismo/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="size-4" /> @edc_arborismo
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} EDC Arborismo. Todos los derechos reservados.</div>
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            Operativo en CABA & GBA
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
