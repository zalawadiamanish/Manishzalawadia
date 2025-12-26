import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, X, Sun, Moon, Monitor } from "lucide-react";
import { useTheme } from "next-themes";

const themes = [
  {
    name: "Ocean",
    primary: "200 65% 55%",
    primaryLight: "210 70% 45%",
    accent: "185 55% 50%",
    accentLight: "195 60% 40%",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    name: "Sunset",
    primary: "25 95% 55%",
    primaryLight: "25 90% 45%",
    accent: "45 100% 55%",
    accentLight: "45 95% 45%",
    gradient: "from-orange-500 to-amber-500",
  },
  {
    name: "Forest",
    primary: "155 60% 45%",
    primaryLight: "155 55% 35%",
    accent: "140 50% 50%",
    accentLight: "140 45% 40%",
    gradient: "from-emerald-500 to-green-500",
  },
  {
    name: "Violet",
    primary: "270 70% 60%",
    primaryLight: "270 65% 50%",
    accent: "290 60% 55%",
    accentLight: "290 55% 45%",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    name: "Crimson",
    primary: "350 80% 55%",
    primaryLight: "350 75% 45%",
    accent: "0 70% 55%",
    accentLight: "0 65% 45%",
    gradient: "from-rose-500 to-red-500",
  },
  {
    name: "Midnight",
    primary: "220 70% 55%",
    primaryLight: "220 65% 45%",
    accent: "240 60% 60%",
    accentLight: "240 55% 50%",
    gradient: "from-blue-600 to-indigo-600",
  },
];

const ThemeColorPicker = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState("Ocean");
  const { theme: colorMode, setTheme: setColorMode, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Load saved theme on mount
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

  // Re-apply theme when color mode changes (including system preference changes)
  useEffect(() => {
    if (mounted) {
      const theme = themes.find(t => t.name === activeTheme);
      if (theme) {
        applyTheme(theme, false);
      }
    }
  }, [colorMode, resolvedTheme, mounted]);

  const applyTheme = (theme: typeof themes[0], save = true) => {
    const root = document.documentElement;
    // Use resolvedTheme to get actual theme when in "system" mode
    const isDark = resolvedTheme === "dark";
    
    // Apply different values for light/dark mode
    const primaryValue = isDark ? theme.primary : theme.primaryLight;
    const accentValue = isDark ? theme.accent : theme.accentLight;
    
    root.style.setProperty("--primary", primaryValue);
    root.style.setProperty("--accent", accentValue);
    root.style.setProperty("--ring", primaryValue);
    
    // Update gradient CSS variables
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

  const cycleColorMode = () => {
    // Cycle through: light -> dark -> system -> light
    if (colorMode === "light") {
      setColorMode("dark");
    } else if (colorMode === "dark") {
      setColorMode("system");
    } else {
      setColorMode("light");
    }
  };

  const getModeIcon = () => {
    if (colorMode === "system") {
      return <Monitor size={20} className="text-primary" />;
    } else if (colorMode === "dark" || (colorMode === "system" && resolvedTheme === "dark")) {
      return <Sun size={20} className="text-amber-500" />;
    } else {
      return <Moon size={20} className="text-primary" />;
    }
  };

  if (!mounted) return null;

  return (
    <>
      {/* Floating Theme Buttons */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
        {/* Color Theme Button */}
        <motion.button
          onClick={() => setIsOpen(true)}
          className="w-12 h-12 rounded-full bg-card/90 backdrop-blur-sm border border-border shadow-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <Palette size={20} />
        </motion.button>

        {/* Light/Dark/System Mode Toggle */}
        <motion.button
          onClick={cycleColorMode}
          className="w-12 h-12 rounded-full bg-card/90 backdrop-blur-sm border border-border shadow-lg flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
          title={`Current: ${colorMode === "system" ? "System" : colorMode === "dark" ? "Dark" : "Light"}`}
        >
          {getModeIcon()}
        </motion.button>
      </div>

      {/* Theme Picker Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-50 bg-background/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Modal */}
            <motion.div
              className="fixed left-1/2 top-1/2 z-50 w-[90%] max-w-xs -translate-x-1/2 -translate-y-1/2"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="glass-card rounded-2xl p-5 sm:p-6 shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-lg font-heading font-semibold text-foreground">
                    Theme Colors
                  </h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Light/Dark/System Mode Toggle in Modal */}
                <div className="flex items-center justify-between p-3 mb-4 rounded-xl bg-secondary/50 border border-border/50">
                  <span className="text-sm font-medium text-foreground">Appearance</span>
                  <div className="flex gap-1.5">
                    <button
                      onClick={() => setColorMode("light")}
                      className={`p-2 rounded-lg transition-colors flex items-center gap-1 ${
                        colorMode === "light" 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-secondary text-muted-foreground hover:text-foreground"
                      }`}
                      title="Light mode"
                    >
                      <Sun size={14} />
                    </button>
                    <button
                      onClick={() => setColorMode("dark")}
                      className={`p-2 rounded-lg transition-colors flex items-center gap-1 ${
                        colorMode === "dark" 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-secondary text-muted-foreground hover:text-foreground"
                      }`}
                      title="Dark mode"
                    >
                      <Moon size={14} />
                    </button>
                    <button
                      onClick={() => setColorMode("system")}
                      className={`p-2 rounded-lg transition-colors flex items-center gap-1 ${
                        colorMode === "system" 
                          ? "bg-primary text-primary-foreground" 
                          : "bg-secondary text-muted-foreground hover:text-foreground"
                      }`}
                      title="System preference"
                    >
                      <Monitor size={14} />
                    </button>
                  </div>
                </div>

                {/* Theme Grid */}
                <div className="grid grid-cols-3 gap-4">
                  {themes.map((theme) => (
                    <motion.button
                      key={theme.name}
                      onClick={() => applyTheme(theme)}
                      className="flex flex-col items-center gap-2 group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div
                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br ${theme.gradient} shadow-lg transition-all ${
                          activeTheme === theme.name
                            ? "ring-2 ring-foreground ring-offset-2 ring-offset-background"
                            : "group-hover:ring-2 group-hover:ring-border group-hover:ring-offset-2 group-hover:ring-offset-background"
                        }`}
                      />
                      <span className={`text-xs font-medium transition-colors ${
                        activeTheme === theme.name 
                          ? "text-foreground" 
                          : "text-muted-foreground group-hover:text-foreground"
                      }`}>
                        {theme.name}
                      </span>
                    </motion.button>
                  ))}
                </div>

                {/* Tip */}
                <p className="text-xs text-muted-foreground text-center mt-5 pt-4 border-t border-border">
                  Your preferences are saved automatically
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ThemeColorPicker;
