import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TreePine, Mountain, Cloud } from "lucide-react";

const projects = [
  {
    name: "Golden Grove",
    path: "/golden-grove",
    icon: TreePine,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    description: "Premium villa plots nestled in nature with world-class amenities, landscaped gardens, and 65ft wide roads.",
    highlights: ["120+ Plots", "14 Cents Onwards", "RERA Approved"],
  },
  {
    name: "Grand Vista",
    path: "/grand-vista",
    icon: Mountain,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    description: "Expansive residential plots with panoramic views, highway connectivity, and modern infrastructure.",
    highlights: ["200+ Plots", "10 Cents Onwards", "Highway Access"],
  },
  {
    name: "Urban Cloud",
    path: "/urban-cloud",
    icon: Cloud,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80",
    description: "Smart urban living with fiber-optic connectivity, EV charging stations, and eco-friendly design.",
    highlights: ["150+ Plots", "8 Cents Onwards", "IT Corridor"],
  },
];

const ProjectsSection = () => (
  <section id="projects" className="section-padding bg-card/30">
    <div className="container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Our Projects</p>
        <h2 className="text-3xl md:text-5xl font-display font-bold">
          Featured <span className="text-gradient">Developments</span>
        </h2>
        <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
          Discover our premium residential projects designed with excellence and built for generations.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
          >
            <Link to={project.path} className="cursor-hover group block">
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-2xl overflow-hidden transition-all duration-500 hover:glow-border-strong"
              >
                <div className="overflow-hidden aspect-[4/3] relative">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.3, type: "spring" }}
                    className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-xl border border-primary/30 flex items-center justify-center"
                  >
                    <project.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.highlights.map((h) => (
                      <span key={h} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                        {h}
                      </span>
                    ))}
                  </div>
                  <span className="text-primary text-sm font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                    View Project →
                  </span>
                </div>
              </motion.div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
