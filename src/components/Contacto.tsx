import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, Mail, Send, MapPin } from "lucide-react";
import { toast } from "sonner";

const Contacto = () => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/corniolaedgar@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        setShowModal(true);
        (e.target as HTMLFormElement).reset();
      } else {
        toast.error("Hubo un error al enviar el mensaje. Intentá de nuevo.");
      }
    } catch (error) {
      toast.error("Error de conexión. Intentá de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contacto" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 size-[500px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-xs uppercase tracking-widest text-primary mb-4">Contacto</div>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
              Solicitá tu <span className="text-gradient-green">presupuesto</span>.
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Contanos sobre tu proyecto. Te respondemos en menos de 24 hs con una propuesta técnica detallada.
            </p>

            <div className="space-y-4">
              <a
                href="https://wa.me/5491150537615"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-5 rounded-2xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group"
              >
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <MessageCircle className="size-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</div>
                  <div className="font-display font-semibold">+54 9 11 5053 7615</div>
                </div>
              </a>

              <a
                href="mailto:corniolaedgar@gmail.com"
                className="flex items-center gap-4 p-5 rounded-2xl border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group"
              >
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="size-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                  <div className="font-display font-semibold">corniolaedgar@gmail.com</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 rounded-2xl border border-border">
                <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Zona de trabajo</div>
                  <div className="font-display font-semibold">CABA · GBA · Provincia BA</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="glass-strong rounded-3xl p-8 md:p-10 space-y-5"
          >
            <div className="space-y-2">
              <Label htmlFor="nombre" className="text-xs uppercase tracking-wider text-muted-foreground">Nombre</Label>
              <Input id="nombre" name="nombre" required placeholder="Tu nombre completo" className="bg-input/50 border-border h-12" />
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-xs uppercase tracking-wider text-muted-foreground">Email</Label>
                <Input id="email" name="email" type="email" required placeholder="tu@email.com" className="bg-input/50 border-border h-12" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="telefono" className="text-xs uppercase tracking-wider text-muted-foreground">Teléfono</Label>
                <Input id="telefono" name="telefono" placeholder="+54 ..." className="bg-input/50 border-border h-12" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="mensaje" className="text-xs uppercase tracking-wider text-muted-foreground">Mensaje</Label>
              <Textarea id="mensaje" name="mensaje" required rows={5} placeholder="Contanos sobre tu proyecto..." className="bg-input/50 border-border resize-none" />
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
              {loading ? "Enviando..." : <>Enviar mensaje <Send className="size-4" /></>}
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Tu mensaje será enviado directamente a nuestra casilla de correo.
            </p>
          </motion.form>
        </div>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="glass-strong rounded-3xl p-8 max-w-md w-full text-center shadow-elevated border border-primary/30"
            >
              <div className="size-16 rounded-full bg-primary/20 flex items-center justify-center text-primary mx-auto mb-6">
                <Send className="size-8" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">¡Mensaje Enviado!</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                ¡Gracias por comunicarte con nosotros! Nos llegó tu consulta a la casilla de mail, en menos de 24hs estaremos respondiendo! Saludos!!
              </p>
              <Button 
                variant="hero" 
                className="w-full h-12" 
                onClick={() => setShowModal(false)}
              >
                OK
              </Button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contacto;
