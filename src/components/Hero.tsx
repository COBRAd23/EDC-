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

      <motion.div style={{ opacity }} className="container relative w-full py-24 lg:py-0">
        <div className="grid lg:grid-cols-2 items-center gap-6 lg:gap-8 lg:min-h-screen">

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

            <h1 className="font-display text-4xl sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-[1.05] mb-4 lg:mb-6">
              Soluciones Integrales en{" "}
              <span className="text-gradient-green">Arboricultura</span> y{" "}
              <span className="italic font-light">Poda de Altura</span>
            </h1>

            <p className="text-sm lg:text-base xl:text-lg text-muted-foreground max-w-xl mb-6 lg:mb-8 leading-relaxed">
              Gestión avanzada basada en criterios científicos y estándares internacionales.
              Precisión, seguridad y respeto por la longevidad del entorno.
            </p>

            <div className="flex flex-wrap gap-3"></div>