import { ArrowDown, Mail, MapPin, Phone, Github } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Elements - More subtle */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-56 sm:w-72 md:w-80 h-56 sm:h-72 md:h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-glow animation-delay-200" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-gradient-radial from-primary/3 to-transparent rounded-full" />
      </div>

      <div className="section-container relative z-10 pt-16 sm:pt-20">
        <div className="flex flex-col items-center text-center gap-5 sm:gap-6 md:gap-8">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="w-24 h-24 xs:w-28 xs:h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full bg-gradient-primary p-[3px] animate-float">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                <span className="text-2xl xs:text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-heading font-bold gradient-text">
                  MZ
                </span>
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-primary rounded-full flex items-center justify-center shadow-glow">
              <span className="text-primary-foreground text-xs font-bold">✓</span>
            </div>
          </motion.div>

          {/* Name & Role */}
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
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium">
              Assistant Professor – Computer Science
            </p>
            <p className="text-sm xs:text-base sm:text-lg text-muted-foreground max-w-xl md:max-w-2xl mx-auto px-2">
              Educator | Computer Engineering Specialist | Mentor in IT, CS & Data Science
            </p>
          </motion.div>

          {/* Contact Info Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col xs:flex-row flex-wrap items-center justify-center gap-2 sm:gap-3"
          >
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=zalawadiamanish@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors text-xs sm:text-sm"
            >
              <Mail size={14} className="text-primary flex-shrink-0 sm:w-4 sm:h-4" />
              <span className="text-muted-foreground truncate">zalawadiamanish@gmail.com</span>
            </a>
            <a
              href="tel:+919920221024"
              className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors text-xs sm:text-sm"
            >
              <Phone size={14} className="text-primary flex-shrink-0 sm:w-4 sm:h-4" />
              <span className="text-muted-foreground">+91 99202 21024</span>
            </a>
            <span className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-secondary text-xs sm:text-sm">
              <MapPin size={14} className="text-primary flex-shrink-0 sm:w-4 sm:h-4" />
              <span className="text-muted-foreground">Mumbai, India</span>
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col xs:flex-row items-center gap-3 sm:gap-4"
          >
            <Button variant="hero" size="lg" asChild className="w-full xs:w-auto">
              <a href="#contact">Let's Connect</a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild className="w-full xs:w-auto">
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=zalawadiamanish@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail size={18} />
                Send Email
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex items-center gap-3 sm:gap-4"
          >
            <a
              href="https://github.com/zalawadiamanish"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-secondary hover:bg-primary/20 flex items-center justify-center transition-all hover:scale-105"
            >
              <Github size={18} className="text-foreground sm:w-5 sm:h-5" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=zalawadiamanish@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full bg-secondary hover:bg-primary/20 flex items-center justify-center transition-all hover:scale-105"
            >
              <Mail size={18} className="text-foreground sm:w-5 sm:h-5" />
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            href="#about"
            className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 animate-float"
          >
            <ArrowDown size={20} className="text-muted-foreground sm:w-6 sm:h-6" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
