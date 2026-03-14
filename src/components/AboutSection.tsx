import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
            alt="About Pressana Infra"
            className="rounded-2xl w-full object-cover aspect-[4/3]"
          />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-primary rounded-2xl hidden lg:block" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">About Us</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Crafting Spaces, <span className="text-gradient">Building Trust</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Pressana Infra is a leading real estate developer committed to creating premium residential and commercial spaces. With a focus on quality, transparency, and customer satisfaction, we deliver projects that stand the test of time.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Our team of experienced professionals ensures every project is designed with modern aesthetics, robust construction, and world-class amenities. From plots to gated communities, we build communities where families thrive.
          </p>
          <div className="grid grid-cols-3 gap-6">
            {[
              { num: "50+", label: "Projects" },
              { num: "1000+", label: "Happy Families" },
              { num: "15+", label: "Years Experience" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl md:text-3xl font-display font-bold text-primary">{stat.num}</div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
