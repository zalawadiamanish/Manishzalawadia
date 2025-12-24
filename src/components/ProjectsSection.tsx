import { Shield, ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

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
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-2 mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        {/* Projects Grid */}
        <div className="max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="glass-card rounded-2xl overflow-hidden hover-glow animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Header */}
              <div className="bg-gradient-primary p-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-primary-foreground/20 flex items-center justify-center">
                    <Shield size={28} className="text-primary-foreground" />
                  </div>
                  <div>
                    <span className="text-primary-foreground/80 text-sm font-medium">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-heading font-bold text-primary-foreground">
                      {project.title}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6 lg:p-8">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">
                    Technologies Used
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap gap-3">
                  <Button variant="hero" size="lg">
                    <ExternalLink size={18} />
                    View Project
                  </Button>
                  <Button variant="heroOutline" size="lg">
                    <Github size={18} />
                    Source Code
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
