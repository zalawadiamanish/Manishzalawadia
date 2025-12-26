import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
      
      // Check if hovering over clickable element
      const target = e.target as HTMLElement;
      const isClickable = target.closest('a, button, [role="button"], input, textarea, select, [tabindex]:not([tabindex="-1"])');
      setIsPointer(!!isClickable);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, []);

  // Hide custom cursor on touch devices
  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null;
  }

  return (
    <>
      {/* Hide default cursor */}
      <style>{`
        @media (pointer: fine) {
          * {
            cursor: none !important;
          }
        }
      `}</style>

      {/* Main cursor - cyan circle with ring */}
      {isVisible && (
        <motion.div
          className="fixed pointer-events-none z-[9999]"
          style={{
            left: position.x,
            top: position.y,
          }}
          animate={{
            x: "-50%",
            y: "-50%",
            scale: isPointer ? 1.3 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 28,
            mass: 0.5,
          }}
        >
          {/* Outer ring - animated rotation */}
          <motion.div 
            className="w-8 h-8 rounded-full border-2 flex items-center justify-center"
            style={{
              borderColor: "hsl(var(--primary))",
              boxShadow: isPointer 
                ? "0 0 20px hsl(var(--primary) / 0.5), inset 0 0 10px hsl(var(--primary) / 0.1)" 
                : "0 0 10px hsl(var(--primary) / 0.3)",
            }}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              rotate: {
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          />
          
          {/* Inner dot */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full"
            style={{ 
              backgroundColor: "hsl(var(--primary))",
              transform: "translate(-50%, -50%)",
              boxShadow: "0 0 8px hsl(var(--primary))",
            }}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      )}
    </>
  );
};

export default CustomCursor;
