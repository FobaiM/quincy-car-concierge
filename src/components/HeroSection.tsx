import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import heroCar from "@/assets/hero-car.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroCar}
          alt="Premium car detailing service showing a luxury vehicle with perfect finish"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-body tracking-[0.4em] text-primary uppercase">
            Premium Car Detailing · Quincy, MA
          </span>
          <Sparkles className="w-4 h-4 text-primary" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-5xl sm:text-6xl lg:text-8xl font-display font-bold mb-6 leading-tight"
        >
          <span className="text-foreground">Where Perfection</span>
          <br />
          <span className="text-gradient-gold">Meets Paint</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg sm:text-xl text-muted-foreground font-body max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Experience the art of automotive excellence. We transform your vehicle
          with meticulous hand-crafted detailing that leaves every surface flawless.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#booking"
            className="bg-gradient-gold text-primary-foreground px-10 py-4 rounded-sm font-body font-semibold text-sm tracking-[0.2em] uppercase hover:shadow-gold hover:glow-gold transition-all duration-500"
          >
            Book Your Detail
          </a>
          <a
            href="#services"
            className="border border-primary/30 text-foreground px-10 py-4 rounded-sm font-body text-sm tracking-[0.2em] uppercase hover:border-primary/60 hover:bg-primary/5 transition-all duration-500"
          >
            View Services
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5 text-primary/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
