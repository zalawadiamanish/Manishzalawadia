import { Shield, ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "Covert Channel Detection in Communication Systems",
    category: "Academic / Research",
    description:
      "Detection and analysis of covert communication channels within network systems to identify hidden data transmission techniques and improve communication security.",
    technologies: ["Computer Networks", "Security Concepts", "Python (ML – ongoing)"],
    featured: true,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative bg-card/30">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <span className="text-primary font-medium text-xs sm:text-sm uppercase tracking-wider">
              Portfolio
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-heading font-bold mt-2 mb-3 sm:mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.1}>
              <div className="glass-card rounded-xl sm:rounded-2xl overflow-hidden hover-glow">
                {/* Project Header */}
                <div className="bg-gradient-primary p-4 sm:p-5 md:p-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary-foreground" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-primary-foreground/80 text-xs sm:text-sm font-medium">
                        {project.category}
                      </span>
                      <h3 className="text-base sm:text-lg md:text-xl font-heading font-bold text-primary-foreground leading-tight">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 sm:p-6 lg:p-8">
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base mb-4 sm:mb-6">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4 sm:mb-6">
                    <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mb-2 sm:mb-3">
                      Technologies Used
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs sm:text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex flex-col xs:flex-row flex-wrap gap-2 sm:gap-3">
                    <Button variant="hero" size="default" className="w-full xs:w-auto">
                      <ExternalLink size={16} />
                      View Project
                    </Button>
                    <Button variant="heroOutline" size="default" className="w-full xs:w-auto">
                      <Github size={16} />
                      Source Code
                    </Button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
