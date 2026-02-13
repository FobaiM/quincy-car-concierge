import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const areas = [
  { name: "Quincy", tag: "Home Base" },
  { name: "Weymouth", tag: null },
  { name: "Braintree", tag: null },
  { name: "Hanover", tag: null },
  { name: "Hingham", tag: null },
  { name: "Boston", tag: "Greater Area" },
];

const AreasSection = () => {
  return (
    <section id="areas" className="py-24 bg-surface-elevated relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-body tracking-[0.4em] text-primary uppercase">
            Service Areas
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mt-4 mb-6 text-foreground">
            We Come to <span className="text-gradient-gold">You</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Based in Quincy, MA — we proudly serve the entire South Shore and Greater Boston area. Mobile detailing at your doorstep.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {areas.map((area, index) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-card border border-border hover:border-primary/40 rounded-sm p-6 text-center transition-all duration-500 hover:shadow-gold group"
            >
              <MapPin className="w-6 h-6 text-primary mx-auto mb-3 group-hover:animate-float" />
              <p className="font-display text-lg font-bold text-foreground">{area.name}</p>
              {area.tag && (
                <span className="text-xs font-body text-primary tracking-wider uppercase mt-1 inline-block">{area.tag}</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasSection;
