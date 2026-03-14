import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => (
  <footer className="border-t border-border bg-card/30">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-display font-bold text-gradient mb-4">Pressana Infra</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Building premium residential and commercial spaces with uncompromising quality and timeless design.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
          <div className="space-y-2">
          {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "NRI", path: "/nri" },
              { name: "Contact Us", path: "/contact" },
            ].map((item) => (
              <Link key={item.name} to={item.path} className="cursor-hover block text-sm text-muted-foreground hover:text-primary transition-colors">
                {item.name}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-foreground mb-4">Projects</h4>
          <div className="space-y-2">
            {[{ name: "Golden Grove", path: "/golden-grove" }, { name: "Grand Vista", path: "/grand-vista" }, { name: "Urban Cloud", path: "/urban-cloud" }].map((p) => (
              <Link key={p.name} to={p.path} className="cursor-hover block text-sm text-muted-foreground hover:text-primary transition-colors">
                {p.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground"
      >
        © {new Date().getFullYear()} Pressana Infra. All rights reserved.
      </motion.div>
    </div>
  </footer>
);

export default Footer;
