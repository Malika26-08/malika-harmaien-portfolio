import { motion } from "framer-motion";
import useReducedMotion from "../hooks/useReducedMotion";

// A single, quiet reveal used consistently across the page: a short
// opacity + translateY on first scroll into view. No bounce, no per-card
// stagger theatrics — the content is the point, not the entrance.
export default function Reveal({ children, delay = 0, as = "div", className = "" }) {
  const reduced = useReducedMotion();
  const Comp = motion[as] || motion.div;

  if (reduced) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Comp
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </Comp>
  );
}
