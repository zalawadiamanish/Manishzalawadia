import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, X } from "lucide-react";
import { useTheme } from "next-themes";

const themes = [
  {
    name: "Ocean",
    primary: "200 65% 55%",
    primaryLight: "210 70% 45%",
    accent: "185 55% 50%",
    accentLight: "195 60% 40%",
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    name: "Sunset",
    primary: "25 95% 55%",
    primaryLight: "25 90% 45%",
    accent: "45 100% 55%",
    accentLight: "45 95% 45%",
    gradient: "from-orange-500 to-red-500",
  },
  {
    name: "Forest",
    primary: "155 60% 45%",
    primaryLight: "155 55% 35%",
    accent: "140 50% 50%",
    accentLight: "140 45% 40%",
    gradient: "from-emerald-400 to-green-500",
  },
  {
    name: "Violet",
    primary: "270 70% 60%",
    primaryLight: "270 65% 50%",
    accent: "290 60% 55%",
    accentLight: "290 55% 45%",
    gradient: "from-violet-400 to-purple-500",
  },
  {
    name: "Crimson",
    primary: "350 80% 55%",
    primaryLight: "350 75% 45%",
    accent: "0 70% 55%",
    accentLight: "0 65% 45%",
    gradient: "from-rose-500 to-red-600",
  },
  {
    name: "Midnight",
    primary: "220 70% 55%",
    primaryLight: "220 65% 45%",
    accent: "240 60% 60%",
    accentLight: "240 55% 50%",
    gradient: "from-blue-500 to-indigo-600",
  },
];

const ThemeColorPicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState("Ocean");
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("portfolio-color-theme");
    if (savedTheme) {
      const theme = themes.find(t => t.name === savedTheme);
      if (theme) {
        setActiveTheme(savedTheme);
        applyTheme(theme, false);
      }
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      const theme = themes.find(t => t.name === activeTheme);
      if (theme) {
        applyTheme(theme, false);
      }
    }
  }, [resolvedTheme, mounted]);

  const applyTheme = (theme: typeof themes[0], save = true) => {
    const root = document.documentElement;
    const isDark = resolvedTheme === "dark";
    
    const primaryValue = isDark ? theme.primary : theme.primaryLight;
    const accentValue = isDark ? theme.accent : theme.accentLight;
    
    root.style.setProperty("--primary", primaryValue);
    root.style.setProperty("--accent", accentValue);
    root.style.setProperty("--ring", primaryValue);
    
    const primaryHsl = `hsl(${primaryValue})`;
    const accentHsl = `hsl(${accentValue})`;
    root.style.setProperty("--gradient-primary", `linear-gradient(135deg, ${primaryHsl} 0%, ${accentHsl} 100%)`);
    root.style.setProperty("--gradient-text", `linear-gradient(90deg, ${primaryHsl} 0%, ${accentHsl} 100%)`);
    
    if (save) {
      localStorage.setItem("portfolio-color-theme", theme.name);
      setActiveTheme(theme.name);
      setIsOpen(false);
    }
  };

  if (!mounted) return null;

  return (
    <>
      {/* Floating Theme Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-24 right-6 z-50 w-12 h-12 rounded-full bg-primary/90 backdrop-blur-sm shadow-lg flex items-center justify-center text-primary-foreground hover:bg-primary transition-all"
        whileHover={{ scale: 1.1, rotate: 15 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        title="Theme Colors"
      >
        <Palette size={22} />
      </motion.button>

      {/* Theme Picker Panel - Side Panel like in reference */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed right-6 bottom-40 z-50"
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <div className="bg-card border border-border rounded-2xl p-4 shadow-2xl min-w-[200px]">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-heading font-semibold text-foreground">
                  Theme Colors
                </h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-6 h-6 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                >
                  <X size={14} />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-3">
                {themes.map((theme) => (
                  <motion.button
                    key={theme.name}
                    onClick={() => applyTheme(theme)}
                    className="flex flex-col items-center gap-1.5 group"
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="relative">
                      <div
                        className={`w-12 h-12 rounded-full bg-gradient-to-br ${theme.gradient} shadow-md transition-all ${
                          activeTheme === theme.name
                            ? "ring-2 ring-primary ring-offset-2 ring-offset-card"
                            : ""
                        }`}
                      />
                      {activeTheme === theme.name && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full border-2 border-card" />
                      )}
                    </div>
                    <span className={`text-[10px] font-medium transition-colors ${
                      activeTheme === theme.name 
                        ? "text-foreground" 
                        : "text-muted-foreground group-hover:text-foreground"
                    }`}>
                      {theme.name}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ThemeColorPicker;