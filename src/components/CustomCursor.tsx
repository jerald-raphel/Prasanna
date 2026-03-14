import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isText, setIsText] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest("a, button, [role='button'], input, textarea, select, .cursor-hover");
      const isTextEl = target.closest("h1, h2, h3, h4, h5, h6, p, span, .cursor-text");
      setIsHovering(!!isInteractive);
      setIsText(!!isTextEl && !isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
    return null;
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full"
        animate={{
          x: position.x - (isHovering ? 24 : isText ? 20 : 10),
          y: position.y - (isHovering ? 24 : isText ? 20 : 10),
          width: isHovering ? 48 : isText ? 40 : 20,
          height: isHovering ? 48 : isText ? 40 : 20,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
        style={{
          backgroundColor: isText ? "hsl(0 0% 95%)" : "hsl(152 80% 28%)",
          mixBlendMode: isText ? "difference" : isHovering ? "difference" : "normal",
          border: isHovering ? "2px solid hsl(152 80% 40%)" : "none",
          background: isHovering ? "transparent" : isText ? "hsl(0 0% 95%)" : "hsl(152 80% 28% / 0.8)",
        }}
      />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-primary/30"
        animate={{
          x: position.x - 20,
          y: position.y - 20,
          width: 40,
          height: 40,
          opacity: isVisible && !isHovering ? 0.5 : 0,
        }}
        transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.8 }}
      />
    </>
  );
};

export default CustomCursor;
