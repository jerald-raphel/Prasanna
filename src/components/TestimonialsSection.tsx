import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Golden Grove Owner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
    text: "Pressana Infra exceeded all my expectations. The plot quality and amenities at Golden Grove are world-class. Best investment decision I've ever made.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Grand Vista Investor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    text: "The transparency and professionalism of Pressana Infra is unmatched. Grand Vista's location and infrastructure make it a perfect choice for our family home.",
    rating: 5,
  },
  {
    name: "Arun Venkatesh",
    role: "NRI Investor",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
    text: "As an NRI, I was worried about investing from abroad. Pressana Infra's dedicated NRI support team made the entire process seamless and trustworthy.",
    rating: 5,
  },
  {
    name: "Deepika Nair",
    role: "Urban Cloud Owner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    text: "Urban Cloud is the future of residential living. Smart infrastructure, eco-friendly design, and a vibrant community. Couldn't ask for more!",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-background">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
          Testimonials
        </p>
        <h2 className="text-3xl md:text-5xl font-display font-bold">
          What Our <span className="text-gradient">Clients Say</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            whileHover={{ y: -6, transition: { duration: 0.3 } }}
            className="glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden group hover:glow-border transition-all duration-500"
          >
            <Quote className="absolute top-4 right-4 w-10 h-10 text-primary/10 group-hover:text-primary/20 transition-colors duration-500" />
            
            <div className="flex items-center gap-4 mb-5">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/30 flex-shrink-0"
              >
                <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
              </motion.div>
              <div>
                <h4 className="font-display font-bold text-foreground">{t.name}</h4>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>

            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <motion.div
                  key={j}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 + j * 0.05 }}
                >
                  <Star className="w-4 h-4 fill-primary text-primary" />
                </motion.div>
              ))}
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed italic">"{t.text}"</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
