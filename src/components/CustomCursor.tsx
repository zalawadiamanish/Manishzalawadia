import { useEffect, useState } from "react";

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

      {/* Main cursor - subtle professional dot */}
      {isVisible && (
        <div
          className="fixed pointer-events-none z-[9999] transition-transform duration-150 ease-out"
          style={{
            left: position.x,
            top: position.y,
            transform: `translate(-50%, -50%) scale(${isPointer ? 1.5 : 1})`,
          }}
        >
          {/* Outer ring */}
          <div 
            className={`w-6 h-6 rounded-full border transition-all duration-150 ${
              isPointer 
                ? 'border-primary bg-primary/10' 
                : 'border-muted-foreground/40'
            }`} 
          />
          {/* Inner dot */}
          <div
            className="absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full bg-primary"
            style={{ transform: "translate(-50%, -50%)" }}
          />
        </div>
      )}
    </>
  );
};

export default CustomCursor;
