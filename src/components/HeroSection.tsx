import { Mail, Phone, MapPin, Github, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { useTypewriter } from "@/hooks/useTypewriter";
import InteractiveBackground from "./InteractiveBackground";

const HeroSection = () => {
  const { text } = useTypewriter({
    words: [
      "Assistant Professor",
      "Computer Science Expert",
      "Data Science Mentor",
      "IT Specialist",
      "Academic Researcher",
    ],
    typingSpeed: 80,
    deletingSpeed: 40,
    delayBetweenWords: 2500,
  });

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Enhanced Interactive Background */}
      <InteractiveBackground />

      <div className="section-container relative z-10 pt-16 sm:pt-20">
        <div className="flex flex-col items-center justify-center space-y-6 sm:space-y-8 text-center">
          {/* Avatar with glow effect */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full bg-gradient-primary p-[3px] animate-float">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center relative overflow-hidden">
                {/* Inner glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
                <span className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-heading font-bold gradient-text relative z-10">
                  MZ
                </span>
              </div>
            </div>
            <motion.div 
              className="absolute -bottom-1 -right-1 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-primary rounded-full flex items-center justify-center shadow-glow"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-primary-foreground text-xs font-bold">✓</span>
            </motion.div>
          </motion.div>

          {/* Name & Role with Typewriter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-2 sm:space-y-3 md:space-y-4"
          >
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight">
              <span className="text-foreground">Hi, I'm </span>
              <span className="gradient-text">Manish Zalawadia</span>
            </h1>
            
            {/* Typewriter Effect */}
            <div className="h-8 sm:h-10 md:h-12 flex items-center justify-center">
              <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium">
                <span className="text-primary">{text}</span>
                <motion.span
                  className="inline-block w-[3px] h-5 sm:h-6 md:h-7 bg-primary ml-1 align-middle"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </p>
            </div>
            
            <motion.p 
              className="text-sm xs:text-base sm:text-lg text-muted-foreground max-w-xl md:max-w-2xl mx-auto px-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Educator | Computer Engineering Specialist | Mentor in IT, CS & Data Science
            </motion.p>
          </motion.div>

          {/* Contact Info Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col xs:flex-row flex-wrap items-center justify-center gap-2 sm:gap-3"
          >
            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=zalawadiamanish@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-secondary/80 backdrop-blur-sm border border-border/50 hover:bg-secondary hover:border-primary/30 transition-all text-xs sm:text-sm group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail size={14} className="text-primary flex-shrink-0 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" />
              <span className="text-muted-foreground truncate group-hover:text-foreground transition-colors">zalawadiamanish@gmail.com</span>
            </motion.a>
            <motion.a
              href="tel:+919920221024"
              className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-secondary/80 backdrop-blur-sm border border-border/50 hover:bg-secondary hover:border-primary/30 transition-all text-xs sm:text-sm group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Phone size={14} className="text-primary flex-shrink-0 sm:w-4 sm:h-4 group-hover:scale-110 transition-transform" />
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">+91 99202 21024</span>
            </motion.a>
            <motion.span 
              className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-secondary/80 backdrop-blur-sm border border-border/50 text-xs sm:text-sm"
              whileHover={{ scale: 1.02 }}
            >
              <MapPin size={14} className="text-primary flex-shrink-0 sm:w-4 sm:h-4" />
              <span className="text-muted-foreground">Mumbai, India</span>
            </motion.span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col xs:flex-row gap-3 sm:gap-4 pt-2"
          >
            <Button
              variant="hero"
              size="lg"
              className="group"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <span>Let's Connect</span>
              <motion.span
                className="ml-2"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </Button>
            <Button
              variant="heroOutline"
              size="lg"
              className="group"
              onClick={() =>
                window.open(
                  "https://mail.google.com/mail/?view=cm&fs=1&to=zalawadiamanish@gmail.com",
                  "_blank"
                )
              }
            >
              <Mail size={16} className="mr-2 group-hover:scale-110 transition-transform" />
              Send Email
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-4 pt-4"
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 rounded-full bg-secondary/80 backdrop-blur-sm border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={18} className="sm:w-5 sm:h-5" />
            </motion.a>
            <motion.a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=zalawadiamanish@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 sm:p-3 rounded-full bg-secondary/80 backdrop-blur-sm border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={18} className="sm:w-5 sm:h-5" />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center gap-2"
            >
              <span className="text-xs text-muted-foreground/60 uppercase tracking-widest">Scroll</span>
              <ChevronDown size={20} className="text-primary/60" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
