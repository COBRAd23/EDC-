import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Nosotros from "@/components/Nosotros";
import Servicios from "@/components/Servicios";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const Index = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Navbar />
      <main>
        <Hero />
        <Nosotros />
        <Servicios />
        <Contacto />
        <section className="relative py-24">
          <div className="container">
            <div className="text-xs uppercase tracking-widest text-primary mb-4">PORQUE ELEGIRNOS</div>
            <div className="grid gap-4 md:grid-cols-3">
              <article className="rounded-2xl border border-border bg-card/50 p-6">
                <h3 className="font-display text-xl font-semibold mb-2 text-primary">Seguridad</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Minimizamos riesgos mediante protocolos certificados y equipos de ultima generacion.
                </p>
              </article>
              <article className="rounded-2xl border border-border bg-card/50 p-6">
                <h3 className="font-display text-xl font-semibold mb-2 text-primary">Salud Vegetal</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Nuestra politica es el cuidado del arbol; realizamos intervenciones que favorecen su vida.
                </p>
              </article>
              <article className="rounded-2xl border border-border bg-card/50 p-6">
                <h3 className="font-display text-xl font-semibold mb-2 text-primary">Profesionalismo</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Un equipo apasionado, formado y legalmente respaldado por asociaciones del sector.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <button
        onClick={scrollToTop}
        aria-label="Volver arriba"
        className={`fixed bottom-6 right-6 z-50 size-12 rounded-full border border-border bg-card/90 text-primary shadow-glow transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-primary-foreground ${
          showScrollTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
        }`}
      >
        <ArrowUp className="mx-auto size-5" />
      </button>
    </motion.div>
  );
};

export default Index;
