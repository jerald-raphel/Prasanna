import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Shield, Route, Droplets, Lock, TreePine, Dumbbell, Car, Zap, X,
  Mountain, Wifi, Leaf, Sun, Building, Fence, Waves, BatteryCharging,
  Phone, ArrowRight
} from "lucide-react";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import EnquiryForm from "@/components/EnquiryForm";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

interface ProjectData {
  title: string;
  tagline: string;
  heroImage: string;
  highlights: { label: string; value: string }[];
  description: string;
  features: string[];
  amenities: { icon: typeof Shield; title: string }[];
  gallery: string[];
  mapEmbed: string;
  reviews: { name: string; text: string; image: string }[];
}

const projectsData: Record<string, ProjectData> = {
  "golden-grove": {
    title: "Golden Grove",
    tagline: "Where Nature Meets Luxury Living",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80",
    highlights: [
      { label: "Frontage", value: "65 Feet" },
      { label: "Starting From", value: "14 Cents" },
      { label: "Total Plots", value: "120+" },
      { label: "Location", value: "Prime Area" },
    ],
    description: "Golden Grove is a premium residential plotted development spread across lush green landscapes. Designed for families who value nature and luxury, this gated community features wide roads, parks, and world-class amenities. Every plot is RERA-approved with clear titles, ensuring a hassle-free investment for your dream home.",
    features: [
      "RERA Approved with clear legal titles",
      "Premium landscaping with native trees and gardens",
      "Underground drainage and sewage system",
      "Dedicated children's play area",
      "Clubhouse with modern amenities",
      "24/7 water and power supply",
    ],
    amenities: [
      { icon: Shield, title: "Gated Community" },
      { icon: Route, title: "65ft Wide Roads" },
      { icon: TreePine, title: "Landscaped Gardens" },
      { icon: Droplets, title: "Water Supply" },
      { icon: Lock, title: "24/7 Security" },
      { icon: Dumbbell, title: "Gymnasium" },
      { icon: Car, title: "Covered Parking" },
      { icon: Zap, title: "Power Backup" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
      "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=600&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5!2d80.2!3d13.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAn!5e0!3m2!1sen!2sin!4v1",
    reviews: [
      { name: "Rajesh Kumar", text: "Best investment decision. The greenery and amenities are unmatched!", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
      { name: "Sunita Devi", text: "We love our plot at Golden Grove. Perfect for our dream villa!", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" },
    ],
  },
  "grand-vista": {
    title: "Grand Vista",
    tagline: "Expansive Views, Elevated Living",
    heroImage: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1920&q=80",
    highlights: [
      { label: "Frontage", value: "60 Feet" },
      { label: "Starting From", value: "10 Cents" },
      { label: "Total Plots", value: "200+" },
      { label: "Location", value: "Highway Access" },
    ],
    description: "Grand Vista offers expansive residential plots with stunning panoramic views and excellent connectivity. Strategically located near major highways and IT corridors, this development combines the tranquility of suburban living with urban convenience. Each plot comes with approved layouts and complete infrastructure.",
    features: [
      "Strategic highway-adjacent location",
      "Panoramic hillside views from every plot",
      "Sports arena with cricket and tennis courts",
      "Dedicated jogging and cycling tracks",
      "Commercial zone for daily essentials",
      "Temple and community gathering spaces",
    ],
    amenities: [
      { icon: Mountain, title: "Panoramic Views" },
      { icon: Route, title: "60ft Wide Roads" },
      { icon: Fence, title: "Boundary Walls" },
      { icon: Waves, title: "Swimming Pool" },
      { icon: Lock, title: "24/7 Security" },
      { icon: Dumbbell, title: "Sports Arena" },
      { icon: Car, title: "Visitor Parking" },
      { icon: Building, title: "Community Hall" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80",
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5!2d80.2!3d13.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAn!5e0!3m2!1sen!2sin!4v1",
    reviews: [
      { name: "Arun Venkatesh", text: "The panoramic views and location made Grand Vista our top choice!", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80" },
      { name: "Meera Iyer", text: "Excellent infrastructure and the sports facilities are fantastic.", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80" },
    ],
  },
  "urban-cloud": {
    title: "Urban Cloud",
    tagline: "Smart Living for the Modern Generation",
    heroImage: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1920&q=80",
    highlights: [
      { label: "Frontage", value: "50 Feet" },
      { label: "Starting From", value: "8 Cents" },
      { label: "Total Plots", value: "150+" },
      { label: "Location", value: "IT Corridor" },
    ],
    description: "Urban Cloud is a futuristic residential development designed for the modern homeowner. With smart infrastructure, fiber-optic connectivity, and eco-friendly design, this project redefines urban living. Located in the heart of the IT corridor, it offers unmatched convenience for working professionals and families alike.",
    features: [
      "Fiber-optic internet connectivity throughout",
      "EV charging stations at every plot",
      "Smart gate access with app control",
      "Rooftop solar power integration ready",
      "Organic farming community gardens",
      "Co-working space within the community",
    ],
    amenities: [
      { icon: Wifi, title: "Smart Connectivity" },
      { icon: Route, title: "50ft Wide Roads" },
      { icon: Leaf, title: "Eco Gardens" },
      { icon: Droplets, title: "Rainwater Harvesting" },
      { icon: Lock, title: "AI Security" },
      { icon: Dumbbell, title: "Fitness Center" },
      { icon: BatteryCharging, title: "EV Charging" },
      { icon: Sun, title: "Solar Power" },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80",
      "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=600&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
    ],
    mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.5!2d80.2!3d13.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAn!5e0!3m2!1sen!2sin!4v1",
    reviews: [
      { name: "Karthik Rajan", text: "The smart features and IT corridor location make Urban Cloud perfect for tech professionals.", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
      { name: "Deepika Nair", text: "Love the eco-friendly approach. Solar power and EV charging are game changers!", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80" },
    ],
  },
};

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const ProjectPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [lightbox, setLightbox] = useState<string | null>(null);
  const project = slug ? projectsData[slug] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-foreground">Project not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <CustomCursor />
      <Navbar />

      {/* Hero */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          src={project.heroImage}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-sm font-medium">Pressana Infra</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-7xl lg:text-8xl font-display font-bold mb-4"
          >
            {project.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-muted-foreground text-lg md:text-xl mb-8"
          >
            {project.tagline}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="tel:+919876543210"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px hsl(152 80% 28% / 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="cursor-hover bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold flex items-center gap-2 justify-center"
            >
              <Phone className="w-5 h-5" />
              Book Site Visit
            </motion.a>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-hover border border-primary/40 text-primary px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-primary/10 transition-colors w-full justify-center"
              >
                Download Brochure
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {project.highlights.map((h, i) => (
              <motion.div
                key={h.label}
                {...fadeUp}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.2, type: "spring" }}
                  className="text-3xl md:text-4xl font-display font-bold text-primary"
                >
                  {h.value}
                </motion.div>
                <div className="text-sm text-muted-foreground mt-2">{h.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Description + Features */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                About <span className="text-gradient">{project.title}</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">{project.description}</p>
              <motion.a
                href="tel:+919876543210"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-hover inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </motion.a>
            </motion.div>
            <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.2 }}>
              <h3 className="text-xl font-display font-bold mb-6">Key Features</h3>
              <div className="space-y-4">
                {project.features.map((f, i) => (
                  <motion.div
                    key={f}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground text-sm">{f}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto">
          <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
            Project <span className="text-gradient">Amenities</span>
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {project.amenities.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="cursor-hover glass-card rounded-xl p-5 md:p-6 text-center hover:glow-border transition-all duration-300"
              >
                <motion.div
                  whileHover={{ rotate: 10, scale: 1.2 }}
                  transition={{ type: "spring" }}
                >
                  <a.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                </motion.div>
                <p className="text-sm font-medium">{a.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section-padding">
        <div className="container mx-auto">
          <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
            Project <span className="text-gradient">Gallery</span>
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {project.gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ scale: 1.03 }}
                onClick={() => setLightbox(img)}
                className="cursor-hover aspect-video overflow-hidden rounded-xl group relative"
              >
                <img src={img} alt={`${project.title} ${i + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-all duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section-padding bg-card/30">
        <div className="container mx-auto max-w-3xl">
          <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
            Client <span className="text-gradient">Reviews</span>
          </motion.h2>
          <div className="space-y-6">
            {project.reviews.map((r, i) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-card rounded-2xl p-6 flex items-start gap-4"
              >
                <img src={r.image} alt={r.name} className="w-12 h-12 rounded-full object-cover border-2 border-primary/30 flex-shrink-0" />
                <div>
                  <h4 className="font-display font-bold text-sm mb-1">{r.name}</h4>
                  <p className="text-muted-foreground text-sm italic">"{r.text}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="section-padding">
        <div className="container mx-auto max-w-4xl">
          <motion.h2 {...fadeUp} className="text-3xl md:text-4xl font-display font-bold mb-12 text-center">
            <span className="text-gradient">Location</span>
          </motion.h2>
          <motion.div {...fadeUp} className="rounded-2xl overflow-hidden border border-border aspect-video">
            <iframe src={project.mapEmbed} className="w-full h-full" loading="lazy" title="Location Map" />
          </motion.div>
        </div>
      </section>

      <EnquiryForm />
      <Footer />
      <FloatingButtons />

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button className="cursor-hover absolute top-6 right-6 text-foreground/60 hover:text-foreground" onClick={() => setLightbox(null)}>
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={lightbox.replace("w=600", "w=1200")}
              alt="Preview"
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectPage;
