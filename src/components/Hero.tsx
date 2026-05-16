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
    <section
      ref={ref}
      id="home"
      className="relative overflow-hidden flex items-center"
      style={{ minHeight: "100svh" }}
    >
      {/* Parallax background */}
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
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

      <motion.div style={{ opacity }} className="container relative w-full py-28 lg:py-20 xl:py-0">
        <div className="grid lg:grid-cols-2 items-center gap-6 lg:gap-8 xl:min-h-screen">

          {/* Columna texto */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 mb-4 backdrop-blur-sm w-fit">
              <TreePine className="size-3.5 text-primary" />
              <span className="text-[10px] font-medium tracking-widest uppercase text-primary">
                Arboricultura Técnica · ISA Certified
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-[1.05] mb-4 lg:mb-5">
              Soluciones Integrales en{" "}
              <span className="text-gradient-green">Arboricultura</span> y{" "}
              <span className="italic font-light">Poda de Altura</span>
            </h1>

            <p className="text-sm lg:text-base xl:text-lg text-muted-foreground max-w-xl mb-5 lg:mb-6 leading-relaxed">
              Gestión integral en manejo de arbolado urbano y rural, basada en normas y estándares internacionales.
              Precisión, seguridad y respeto por la longevidad del entorno.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button variant="hero" size="lg" asChild>
                <a href="#contacto">
                  Solicitar Presupuesto <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button variant="glow" size="lg" asChild>
                <Link to="/portfolio">Ver Trabajos</Link>
              </Button>
            </div>

            <div className="mt-8 lg:mt-10 grid grid-cols-3 gap-6 max-w-sm lg:max-w-md">
              {[
                { n: "+15", l: "Años de experiencia" },
                { n: "500+", l: "Intervenciones" },
                { n: "100%", l: "Norma ANSI Z133/A300" },
              ].map((s, i) => (
                <motion.div
                  key={s.l}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.6 }}
                >
                  <div className="font-display text-2xl lg:text-3xl xl:text-4xl font-bold text-primary">{s.n}</div>
                  <div className="text-[10px] lg:text-xs text-muted-foreground mt-1">{s.l}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Columna imagen */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="hidden lg:flex items-end justify-center self-end"
          >
            <img
              src="/img/isologo_grande%20header.png"
              alt="Isologo EDC Arborismo"
              className="w-full max-w-[200px] lg:max-w-[220px] xl:max-w-[500px] 2xl:max-w-[620px] h-auto opacity-90 drop-shadow-[0_0_40px_rgba(132,204,22,0.2)]"
              loading="eager"
            />
          </motion.div>

        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground/60 text-xs tracking-widest uppercase"
      >
        <div className="flex flex-col items-center gap-2">
          <span>Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-primary to-transparent animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;