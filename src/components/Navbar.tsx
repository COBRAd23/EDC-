import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", href: "/#home" },
  { label: "Nosotros", href: "/#nosotros" },
  { label: "Servicios", href: "/#servicios" },
  { label: "Contacto", href: "/#contacto" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container">
        <nav
          className={`flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong shadow-elevated" : "bg-transparent"
          }`}
        >
          <Link to="/" className="flex items-center group">
            <img
              src="/img/logo%20navbar%20y%20footer.png"
              alt="EDC Arborismo"
              className="h-8 w-auto md:h-9"
              loading="eager"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-sm text-muted-foreground hover:text-foreground transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button variant="hero" size="sm" asChild>
              <Link to="/portfolio">Portfolio</Link>
            </Button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-foreground p-2"
            aria-label="Menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-2 glass-strong rounded-2xl p-5 flex flex-col gap-4"
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-muted-foreground hover:text-primary"
                >
                  {l.label}
                </a>
              ))}
              <Button variant="hero" size="sm" asChild>
                <Link to="/portfolio" onClick={() => setOpen(false)}>Portfolio</Link>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Navbar;
