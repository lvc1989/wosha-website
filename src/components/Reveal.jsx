import { useReveal } from "../useReveal.js";

export default function Reveal({ children, delay = 0, className = "", style = {} }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`wipe-reveal ${visible ? "visible" : ""} ${className}`} style={{ ...style, transitionDelay: visible ? `${delay}ms` : "0ms" }}>
      {children}
    </div>
  );
}
