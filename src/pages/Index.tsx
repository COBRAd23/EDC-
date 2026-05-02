import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Nosotros from "@/components/Nosotros";
import Servicios from "@/components/Servicios";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Index = () => {
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
    </motion.div>
  );
};

export default Index;
