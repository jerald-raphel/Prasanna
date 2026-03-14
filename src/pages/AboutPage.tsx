import { motion } from "framer-motion";
import { Award, Users, Building, Target, Eye, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import Footer from "@/components/Footer";

const stats = [
  { num: "50+", label: "Projects Delivered" },
  { num: "1000+", label: "Happy Families" },
  { num: "15+", label: "Years Experience" },
  { num: "5+", label: "Cities" },
];

const values = [
  { icon: Target, title: "Our Mission", desc: "To deliver world-class real estate projects that exceed expectations through innovation, quality, and customer-centric approach." },
  { icon: Eye, title: "Our Vision", desc: "To be the most trusted and preferred real estate brand in South India, known for integrity and excellence." },
  { icon: Heart, title: "Our Values", desc: "Transparency, quality construction, timely delivery, and unwavering commitment to customer satisfaction." },
];

const team = [
  { name: "Leadership Team", role: "Founders & Directors", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80" },
  { name: "Architecture", role: "Design & Planning", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" },
  { name: "Operations", role: "Project Execution", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
];

const AboutPage = () => (
  <div className="min-h-screen bg-background">
    <CustomCursor />
    <Navbar />

    {/* Hero */}
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80"
        alt="About Pressana Infra"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative z-10 text-center px-4">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-primary tracking-widest uppercase text-sm mb-4">
          About Us
        </motion.p>
        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-4xl md:text-6xl font-display font-bold mb-4">
          Crafting Spaces, <span className="text-gradient">Building Trust</span>
        </motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A legacy of excellence in real estate development since 2009.
        </motion.p>
      </div>
    </section>

    {/* Stats */}
    <section className="py-16 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-primary">{s.num}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Story */}
    <section className="section-padding">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80" alt="Our Story" className="rounded-2xl w-full object-cover aspect-[4/3]" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary rounded-2xl hidden lg:block" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Our Story</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              A Journey of <span className="text-gradient">Excellence</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Pressana Infra was founded with a vision to transform the real estate landscape in South India. Starting with a single residential project, we have grown into a trusted name delivering premium plotted developments and gated communities.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our team of experienced professionals ensures every project is designed with modern aesthetics, robust construction, and world-class amenities. We believe in building not just properties, but communities where families thrive and investments grow.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Mission, Vision, Values */}
    <section className="section-padding bg-card/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ y: -5 }}
              className="glass-card rounded-2xl p-8 text-center hover:glow-border transition-all"
            >
              <v.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-display font-bold mb-3">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Team */}
    <section className="section-padding">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Our People</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            The <span className="text-gradient">Team</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card rounded-2xl overflow-hidden group hover:glow-border transition-all"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={t.image} alt={t.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-display font-bold">{t.name}</h3>
                <p className="text-muted-foreground text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default AboutPage;
