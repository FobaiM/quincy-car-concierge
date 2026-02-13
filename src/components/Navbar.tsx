import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Areas", href: "#areas" },
    { label: "About", href: "#about" },
    { label: "Book Now", href: "#booking" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-gold-subtle"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#home" className="flex items-center gap-2">
            <span className="text-2xl font-display font-bold text-gradient-gold">
              PRISTINE
            </span>
            <span className="text-xs font-body tracking-[0.3em] text-muted-foreground uppercase">
              Auto Detail
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-sm tracking-wider text-muted-foreground hover:text-primary transition-colors duration-300 uppercase"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+12405448324"
              className="flex items-center gap-2 bg-gradient-gold text-primary-foreground px-5 py-2.5 rounded-sm font-body text-sm font-semibold tracking-wider uppercase hover:shadow-gold transition-shadow duration-300"
            >
              <Phone className="w-4 h-4" />
              Call Us
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-gold-subtle"
          >
            <div className="px-4 py-6 space-y-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block font-body text-sm tracking-wider text-muted-foreground hover:text-primary transition-colors uppercase"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
