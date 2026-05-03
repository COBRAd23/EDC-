import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, TreePine } from "lucide-react";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative min-h-screen overflow-hidden flex items-center pt-24">
      {/* Parallax background */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-gradient-hero" />
        <img
          src="https://images.unsplash.com/photo-1448375240586-882707db888b?w=1920&q=80"
          alt="Bosque visto desde la copa de un árbol"
          className="w-full h-[120%] object-cover opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      </motion.div>

      {/* Decorative grid */}
      <div className="absolute inset-0 -z-10 opacity-[0.04]" style={{
        backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <motion.div style={{ opacity }} className="container relative">
        <div className="pointer-events-none absolute bottom-0 right-0 hidden translate-y-[20%] lg:block xl:right-4 xl:translate-y-[15%] 2xl:right-8 2xl:translate-y-[10%]">
          <img
            src="/img/isologo_grande%20header.png"
            alt="Isologo EDC Arborismo"
            className="h-auto w-[420px] xl:w-[550px] 2xl:w-[680px] opacity-90 drop-shadow-[0_0_40px_rgba(132,204,22,0.2)] transition-all duration-700"
            loading="eager"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl xl:max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5 mb-8 backdrop-blur-sm">
            <TreePine className="size-4 text-primary" />
            <span className="text-xs font-medium tracking-widest uppercase text-primary">
              Arboricultura Técnica · ISA Certified
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-8">
            Soluciones Integrales en{" "}
            <span className="text-gradient-green">Arboricultura</span> y{" "}
            <span className="italic font-light">Poda de Altura</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Gestión avanzada basada en criterios científicos y estándares internacionales.
            Precisión, seguridad y respeto por la longevidad del entorno.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="xl" asChild>
              <a href="#contacto">
                Solicitar Presupuesto <ArrowRight className="size-5" />
              </a>
            </Button>
            <Button variant="glow" size="xl" asChild>
              <Link to="/portfolio">Ver Trabajos</Link>
            </Button>
          </div>

          <div className="mt-20 grid grid-cols-3 gap-8 max-w-xl">
            {[
              { n: "+15", l: "Años de experiencia" },
              { n: "500+", l: "Intervenciones" },
              { n: "100%", l: "Norma ANSI Z133" },
            ].map((s, i) => (
              <motion.div
                key={s.l}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
              >
                <div className="font-display text-3xl md:text-4xl font-bold text-primary">{s.n}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground/60 text-xs tracking-widest uppercase"
      >
        <div className="flex flex-col items-center gap-2">
          <span>Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
