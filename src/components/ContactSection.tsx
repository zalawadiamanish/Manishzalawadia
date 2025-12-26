import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, BookOpen, Users, Lightbulb, GraduationCap, Youtube } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "./ScrollReveal";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "zalawadiamanish@gmail.com",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=zalawadiamanish@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 99202 21024",
    href: "tel:+919920221024",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Mumbai, India",
    href: null,
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/zalawadiamanish",
    href: "https://github.com/zalawadiamanish",
  },
  {
    icon: Youtube,
    label: "YouTube",
    value: "The Binary Professor",
    href: "https://youtube.com/@manishzalawadia?si=ekpn9crTLhmGxF4q",
  },
];

const contactReasons = [
  { icon: BookOpen, text: "Academic Collaboration" },
  { icon: Users, text: "Mentorship" },
  { icon: Lightbulb, text: "Curriculum Design" },
  { icon: GraduationCap, text: "Research Guidance" },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="section-padding relative bg-card/30">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-amber-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <span className="text-amber-500 font-medium text-xs sm:text-sm uppercase tracking-wider">
              Let's Connect
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-heading font-bold mt-2 mb-3 sm:mb-4">
              Start a <span className="gradient-text">Conversation</span>
            </h2>
            <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-primary to-amber-500 mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <ScrollReveal direction="left">
            <div className="space-y-6">
              {/* Invitation Message */}
              <div className="glass-card rounded-xl p-5 sm:p-6 border-l-4 border-amber-500/50">
                <p className="text-base sm:text-lg text-foreground font-medium leading-relaxed">
                  If you care about <span className="text-primary">strong fundamentals</span>, 
                  <span className="text-amber-500"> ethical systems</span>, and 
                  <span className="text-primary"> real understanding</span> — let's talk.
                </p>
              </div>

              {/* What to contact for */}
              <div className="space-y-3">
                <p className="text-sm text-muted-foreground uppercase tracking-wider">What you can contact me for</p>
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  {contactReasons.map((reason) => (
                    <div
                      key={reason.text}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 border border-border/50"
                    >
                      <reason.icon className="w-4 h-4 text-amber-500 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-foreground">{reason.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Details */}
              <div className="space-y-3">
                {contactInfo.map((item) => (
                  <div
                    key={item.label}
                    className="glass-card rounded-lg sm:rounded-xl p-3 sm:p-4 hover-glow"
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 sm:gap-4"
                      >
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">
                            {item.label}
                          </p>
                          <p className="text-foreground font-medium text-sm sm:text-base truncate">
                            {item.value}
                          </p>
                        </div>
                      </a>
                    ) : (
                      <div className="flex items-center gap-3 sm:gap-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider">
                            {item.label}
                          </p>
                          <p className="text-foreground font-medium text-sm sm:text-base truncate">
                            {item.value}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right">
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="space-y-1.5 sm:space-y-2">
                  <label
                    htmlFor="name"
                    className="text-xs sm:text-sm font-medium text-foreground"
                  >
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary text-sm sm:text-base"
                  />
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <label
                    htmlFor="email"
                    className="text-xs sm:text-sm font-medium text-foreground"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-secondary/50 border-border/50 focus:border-primary text-sm sm:text-base"
                  />
                </div>
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <label
                  htmlFor="subject"
                  className="text-xs sm:text-sm font-medium text-foreground"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-secondary/50 border-border/50 focus:border-primary text-sm sm:text-base"
                />
              </div>

              <div className="space-y-1.5 sm:space-y-2">
                <label
                  htmlFor="message"
                  className="text-xs sm:text-sm font-medium text-foreground"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="bg-secondary/50 border-border/50 focus:border-primary resize-none text-sm sm:text-base"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
