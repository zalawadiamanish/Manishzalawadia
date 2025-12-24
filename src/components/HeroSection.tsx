import { ArrowDown, Mail, MapPin, Phone, Github } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow animation-delay-200" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      <div className="section-container relative z-10 pt-20">
        <div className="flex flex-col items-center text-center gap-8">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-primary p-1 animate-float">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                <span className="text-4xl md:text-5xl font-heading font-bold gradient-text">
                  MZ
                </span>
              </div>
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center animate-pulse">
              <span className="text-primary-foreground text-xs font-bold">✓</span>
            </div>
          </motion.div>

          {/* Name & Role */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold">
              <span className="text-foreground">Hi, I'm </span>
              <span className="gradient-text">Manish Zalawadia</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-medium">
              Assistant Professor – Computer Science
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Educator | Computer Engineering Specialist | Mentor in IT, CS & Data Science
            </p>
          </motion.div>

          {/* Contact Info Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=zalawadiamanish@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors text-sm"
            >
              <Mail size={16} className="text-primary" />
              <span className="text-muted-foreground">zalawadiamanish@gmail.com</span>
            </a>
            <a
              href="tel:+919920221024"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors text-sm"
            >
              <Phone size={16} className="text-primary" />
              <span className="text-muted-foreground">+91 99202 21024</span>
            </a>
            <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm">
              <MapPin size={16} className="text-primary" />
              <span className="text-muted-foreground">Mumbai, India</span>
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">Let's Connect</a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=zalawadiamanish@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail size={20} />
                Send Email
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center gap-4"
          >
            <a
              href="https://github.com/zalawadiamanish"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary hover:bg-primary/20 flex items-center justify-center transition-all hover:scale-110 hover:shadow-glow"
            >
              <Github size={22} className="text-foreground" />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=zalawadiamanish@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary hover:bg-primary/20 flex items-center justify-center transition-all hover:scale-110 hover:shadow-glow"
            >
              <Mail size={22} className="text-foreground" />
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.a
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            href="#about"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float"
          >
            <ArrowDown size={24} className="text-muted-foreground" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
