import { motion } from "framer-motion";
import { Shield, Route, Droplets, Lock } from "lucide-react";

const amenities = [
  { icon: Shield, title: "Gated Community", desc: "24/7 secured gated community with controlled access." },
  { icon: Route, title: "Wide Roads", desc: "Well-planned wide internal roads for smooth access." },
  { icon: Droplets, title: "Water Supply", desc: "24/7 bore well and municipal water supply." },
  { icon: Lock, title: "Security", desc: "Round-the-clock security with CCTV surveillance." },
];

const AmenitiesSection = () => (
  <section className="section-padding">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Amenities</p>
        <h2 className="text-3xl md:text-5xl font-display font-bold">
          World-Class <span className="text-gradient">Amenities</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {amenities.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="cursor-hover glass-card rounded-2xl p-8 text-center group hover:glow-border transition-all duration-300"
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <item.icon className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-muted-foreground text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AmenitiesSection;
