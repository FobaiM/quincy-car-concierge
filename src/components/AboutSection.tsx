import { motion } from "framer-motion";
import { Award, Clock, Users, ThumbsUp } from "lucide-react";

const stats = [
  { icon: Award, value: "500+", label: "Cars Detailed" },
  { icon: ThumbsUp, value: "100%", label: "Satisfaction" },
  { icon: Clock, value: "Same Day", label: "Service Available" },
  { icon: Users, value: "5★", label: "Google Rating" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-sm font-body tracking-[0.4em] text-primary uppercase">
              About Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-display font-bold mt-4 mb-6 text-foreground">
              Obsessed With <span className="text-gradient-gold">Quality</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              At Pristine Auto Detail, we believe your car deserves more than a wash — it deserves a transformation. Based right here in Quincy, MA, we bring professional-grade detailing to your driveway across the South Shore and Greater Boston.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              Using only premium products and proven techniques, every detail is performed by hand with the precision and care your vehicle demands. From daily drivers to luxury exotics, we treat every car like it's our own.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Eco-Friendly Products", "Fully Insured", "Mobile Service", "Satisfaction Guaranteed"].map((tag) => (
                <span key={tag} className="bg-secondary text-secondary-foreground px-4 py-2 rounded-sm font-body text-xs tracking-wider uppercase border border-border">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card border border-border rounded-sm p-6 text-center hover:border-primary/30 transition-all duration-500"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <p className="text-3xl font-display font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-xs font-body text-muted-foreground tracking-wider uppercase">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
