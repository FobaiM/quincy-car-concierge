import { motion } from "framer-motion";
import { Droplets, Shield, Sparkles, Car, SprayCan, Sun } from "lucide-react";
import detailingClose from "@/assets/detailing-close.jpg";
import interiorDetail from "@/assets/interior-detail.jpg";

const services = [
  {
    icon: Droplets,
    title: "Exterior Wash & Detail",
    description: "Hand wash, clay bar, polish, and premium wax for a showroom finish.",
    price: "From $149",
  },
  {
    icon: Car,
    title: "Interior Deep Clean",
    description: "Full vacuum, steam clean, leather conditioning, and odor elimination.",
    price: "From $129",
  },
  {
    icon: Shield,
    title: "Ceramic Coating",
    description: "Professional-grade ceramic protection for years of lasting shine.",
    price: "From $499",
  },
  {
    icon: SprayCan,
    title: "Paint Correction",
    description: "Multi-stage paint correction to remove swirls, scratches, and oxidation.",
    price: "From $349",
  },
  {
    icon: Sun,
    title: "Full Detail Package",
    description: "Complete interior & exterior detail — the ultimate transformation.",
    price: "From $299",
  },
  {
    icon: Sparkles,
    title: "Express Detail",
    description: "Quick but thorough exterior wash and interior wipe-down in 60 minutes.",
    price: "From $79",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-gradient-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-body tracking-[0.4em] text-primary uppercase">
            What We Offer
          </span>
          <h2 className="text-4xl sm:text-5xl font-display font-bold mt-4 mb-6 text-foreground">
            Our <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Every service is performed with professional-grade products and obsessive attention to detail.
          </p>
        </motion.div>

        {/* Service images */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-sm overflow-hidden aspect-[4/3]"
          >
            <img src={detailingClose} alt="Professional exterior car detailing in action" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-primary font-body text-sm tracking-widest uppercase">Exterior</p>
              <p className="text-foreground font-display text-2xl font-bold">Precision Polish</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-sm overflow-hidden aspect-[4/3]"
          >
            <img src={interiorDetail} alt="Professional interior car detailing and leather care" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-primary font-body text-sm tracking-widest uppercase">Interior</p>
              <p className="text-foreground font-display text-2xl font-bold">Deep Restoration</p>
            </div>
          </motion.div>
        </div>

        {/* Service cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card border border-border hover:border-primary/30 rounded-sm p-8 transition-all duration-500 hover:shadow-gold"
            >
              <service.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-display text-xl font-bold text-foreground mb-2">{service.title}</h3>
              <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
              <p className="font-body text-primary font-semibold tracking-wider text-sm">{service.price}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
