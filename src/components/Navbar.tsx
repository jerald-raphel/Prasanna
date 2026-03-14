import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const residentialProjects = [
  { name: "Golden Grove", path: "/golden-grove" },
  { name: "Grand Vista", path: "/grand-vista" },
  { name: "Urban Cloud", path: "/urban-cloud" },
];

const commercialProjects = [
  { name: "Coming Soon", path: "#" },
];

const navItems = [
  { name: "Home", path: "/" },
  { name: "Residential Property", path: "#", dropdown: residentialProjects },
  { name: "Commercial Property", path: "#", dropdown: commercialProjects },
  { name: "NRI", path: "/nri" },
  { name: "About Us", path: "/about" },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-2xl border-b border-primary/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-gradient-to-b from-background/60 to-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-20 px-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="cursor-hover relative group">
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-500">
              <span className="text-primary font-display font-bold text-lg">P</span>
            </div>
            <div>
              <span className="text-xl font-display font-bold text-foreground tracking-tight">
                Pressana
              </span>
              <span className="text-xl font-display font-bold text-primary ml-1">
                Infra
              </span>
            </div>
          </motion.div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-0.5 bg-card/40 backdrop-blur-xl rounded-full px-2 py-1.5 border border-border/30">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => {
                item.dropdown && setActiveDropdown(item.name);
                setHoveredItem(item.name);
              }}
              onMouseLeave={() => {
                setActiveDropdown(null);
                setHoveredItem(null);
              }}
            >
              <Link
                to={item.path}
                className="cursor-hover relative px-4 py-2 text-[15px] font-medium rounded-full transition-all duration-300 flex items-center gap-1"
                style={{
                  color: isActive(item.path) || hoveredItem === item.name
                    ? 'hsl(var(--primary))'
                    : 'hsl(var(--foreground) / 0.65)',
                }}
              >
                {/* Active/hover pill background */}
                {(isActive(item.path) || hoveredItem === item.name) && (
                  <motion.span
                    layoutId="navPill"
                    className="absolute inset-0 rounded-full bg-primary/10 border border-primary/20"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
                {item.dropdown && (
                  <motion.span
                    className="relative z-10"
                    animate={{ rotate: activeDropdown === item.name ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-3 h-3" />
                  </motion.span>
                )}
              </Link>

              <AnimatePresence>
                {item.dropdown && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 8, scale: 0.96 }}
                    transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 min-w-[220px] bg-card/95 backdrop-blur-2xl rounded-xl border border-border/50 overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                  >
                    <div className="p-2">
                      {item.dropdown.map((sub, i) => (
                        <motion.div
                          key={sub.name}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          <Link
                            to={sub.path}
                            className="cursor-hover flex items-center gap-3 px-4 py-3 text-[14px] text-foreground/70 hover:text-primary rounded-lg hover:bg-primary/5 transition-all duration-200 group"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary group-hover:shadow-[0_0_8px_hsl(var(--primary)/0.5)] transition-all duration-300" />
                            {sub.name}
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <motion.div className="hidden lg:block" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/contact"
            className="cursor-hover px-6 py-2.5 text-[15px] font-semibold rounded-full bg-primary text-primary-foreground hover:shadow-[0_0_25px_hsl(var(--primary)/0.4)] transition-all duration-500"
          >
            Get in Touch
          </Link>
        </motion.div>

        {/* Mobile toggle */}
        <motion.button
          className="lg:hidden cursor-hover text-foreground p-2 rounded-lg hover:bg-card/60 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {mobileOpen ? (
              <motion.div key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <X className="w-6 h-6" />
              </motion.div>
            ) : (
              <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                <Menu className="w-6 h-6" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden bg-background/98 backdrop-blur-2xl border-t border-border/30 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-1">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  {item.dropdown ? (
                    <div>
                      <button
                        className="cursor-hover w-full text-left px-4 py-3 text-foreground/80 hover:text-primary transition-all duration-300 flex items-center justify-between rounded-xl hover:bg-primary/5"
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      >
                        <span className="font-medium">{item.name}</span>
                        <motion.span animate={{ rotate: activeDropdown === item.name ? 180 : 0 }} transition={{ duration: 0.3 }}>
                          <ChevronDown className="w-4 h-4" />
                        </motion.span>
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.name && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="ml-4 pl-4 border-l-2 border-primary/20 space-y-1 py-2">
                              {item.dropdown.map((sub) => (
                                <Link
                                  key={sub.name}
                                  to={sub.path}
                                  className="cursor-hover block px-4 py-2.5 text-sm text-foreground/60 hover:text-primary rounded-lg hover:bg-primary/5 transition-all duration-200"
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`cursor-hover block px-4 py-3 font-medium rounded-xl transition-all duration-300 ${
                        isActive(item.path)
                          ? "text-primary bg-primary/5"
                          : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="pt-4"
              >
                <Link
                  to="/contact"
                  className="cursor-hover block text-center px-5 py-3 text-sm font-medium rounded-xl bg-primary text-primary-foreground"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
