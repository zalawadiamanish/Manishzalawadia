import { Github, Mail, Heart } from "lucide-react";

const footerLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="section-container py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Bio */}
          <div className="text-center md:text-left">
            <a
              href="#home"
              className="text-2xl font-heading font-bold gradient-text inline-block mb-3"
            >
              MZ
            </a>
            <p className="text-sm text-muted-foreground max-w-xs mx-auto md:mx-0">
              Assistant Professor passionate about educating future tech leaders
              in Computer Science and IT.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center md:justify-end gap-4">
            <a
              href="https://github.com/zalawadiamanish"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/20 flex items-center justify-center transition-all hover:scale-110"
            >
              <Github size={18} className="text-foreground" />
            </a>
            <a
              href="mailto:zalawadiamanish@gmail.com"
              className="w-10 h-10 rounded-full bg-secondary hover:bg-primary/20 flex items-center justify-center transition-all hover:scale-110"
            >
              <Mail size={18} className="text-foreground" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border mt-8 pt-8">
          <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-1">
            © {currentYear} Manish Zalawadia. Made with
            <Heart size={14} className="text-primary fill-primary" />
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
