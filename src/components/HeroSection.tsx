import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";

const stats = [
  { value: "500+", label: "Happy Families" },
  { value: "3", label: "Premium Projects" },
  { value: "15+", label: "Years Experience" },
  { value: "100%", label: "RERA Approved" },
];

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img
        src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&q=80"
        alt="Luxury real estate"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-background/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
    </div>

    {/* Animated background particles */}
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-primary/30 rounded-full"
          style={{ left: `${20 + i * 15}%`, top: `${30 + i * 10}%` }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 3 + i, repeat: Infinity, delay: i * 0.5 }}
        />
      ))}
    </div>

    <div className="relative z-10 container mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
      >
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        <span className="text-primary text-sm font-medium tracking-wide">Premium Real Estate Developer</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold leading-tight mb-6"
      >
        Build Your
        <br />
        <span className="text-gradient">Dream Home</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
      >
        Discover premium plots and residential projects crafted with excellence by Pressana Infra.
        Your journey to owning a dream property starts here.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <Link to="/#projects">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(152 80% 28% / 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="cursor-hover bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center gap-2 group"
          >
            Explore Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </Link>

        <motion.a
          href="tel:+919876543210"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-hover border border-primary/40 text-primary px-8 py-4 rounded-full font-semibold text-lg transition-all flex items-center gap-2 hover:bg-primary/10"
        >
          <Phone className="w-5 h-5" />
          Book Site Visit
        </motion.a>
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + i * 0.1 }}
            className="text-center"
          >
            <div className="text-2xl md:text-3xl font-display font-bold text-primary">{s.value}</div>
            <div className="text-xs text-muted-foreground mt-1">{s.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
    >
      <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center pt-2">
        <div className="w-1.5 h-3 bg-primary rounded-full" />
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
