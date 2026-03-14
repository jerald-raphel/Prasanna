import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80",
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&q=80",
  "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=600&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80",
  "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=600&q=80",
  "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&q=80",
  "https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=600&q=80",
];

const GallerySection = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="section-padding bg-card/30">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">Gallery</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Our <span className="text-gradient">Portfolio</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => setSelected(img)}
              className="cursor-hover aspect-square overflow-hidden rounded-xl group relative"
            >
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-all duration-500 flex items-center justify-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <ZoomIn className="w-8 h-8 text-primary" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <button className="cursor-hover absolute top-6 right-6 text-foreground/60 hover:text-foreground transition-colors" onClick={() => setSelected(null)}>
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={selected.replace("w=600", "w=1200")}
              alt="Gallery preview"
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
