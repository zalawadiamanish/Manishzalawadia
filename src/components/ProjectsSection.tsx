import { Shield, Lightbulb, Target, TrendingUp } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "Covert Channel Detection in Communication Systems",
    category: "Security Research",
    problem: "Most covert channels go unnoticed because engineers stop at surface-level metrics. Traditional monitoring misses hidden data exfiltration happening within legitimate traffic.",
    whyItMattered: "Data breaches often happen through channels that look 'normal' — understanding covert communication is critical for modern security.",
    approach: "Applied packet-level analysis combined with ML pattern recognition to identify anomalous data flows that indicate hidden channels.",
    whatILearned: "Security isn't about building walls — it's about understanding how data moves and where it can be exploited.",
    whatIdImprove: "Expanding to real-time detection with lower false-positive rates using behavioral analysis.",
    technologies: ["Computer Networks", "Security Concepts", "Python ML", "Traffic Analysis"],
    icon: Shield,
  },
];

const CaseStudySection = ({ icon: Icon, title, content, accentColor }: { 
  icon: React.ElementType; 
  title: string; 
  content: string;
  accentColor: string;
}) => (
  <div className="flex gap-3 sm:gap-4">
    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${accentColor}`}>
      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
    </div>
    <div>
      <h4 className="text-sm sm:text-base font-semibold text-foreground mb-1">{title}</h4>
      <p className="text-sm text-muted-foreground leading-relaxed">{content}</p>
    </div>
  </div>
);

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding relative bg-card/30">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-amber-500/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <span className="text-amber-500 font-medium text-xs sm:text-sm uppercase tracking-wider">
              Engineering Thinking
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-heading font-bold mt-2 mb-3 sm:mb-4">
              Case <span className="gradient-text">Studies</span>
            </h2>
            <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gradient-to-r from-primary to-amber-500 mx-auto rounded-full" />
            <p className="text-muted-foreground text-sm sm:text-base mt-4 max-w-2xl mx-auto">
              Not just what I built — how I thought through the problem.
            </p>
          </div>
        </ScrollReveal>

        {/* Projects */}
        <div className="max-w-4xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.1}>
              <div className="glass-card rounded-xl sm:rounded-2xl overflow-hidden hover-glow">
                {/* Project Header */}
                <div className="bg-gradient-to-r from-primary to-amber-500 p-4 sm:p-5 md:p-6">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-background/20 flex items-center justify-center flex-shrink-0">
                      <project.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-primary-foreground" />
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
                <div className="p-5 sm:p-6 lg:p-8 space-y-5 sm:space-y-6">
                  {/* The Problem */}
                  <CaseStudySection 
                    icon={Target}
                    title="The Problem"
                    content={project.problem}
                    accentColor="bg-destructive/15 text-destructive"
                  />

                  {/* Why It Mattered */}
                  <CaseStudySection 
                    icon={Lightbulb}
                    title="Why It Mattered"
                    content={project.whyItMattered}
                    accentColor="bg-amber-500/15 text-amber-500"
                  />

                  {/* My Approach */}
                  <CaseStudySection 
                    icon={Shield}
                    title="My Approach"
                    content={project.approach}
                    accentColor="bg-primary/15 text-primary"
                  />

                  {/* What I Learned */}
                  <CaseStudySection 
                    icon={TrendingUp}
                    title="What I Learned"
                    content={project.whatILearned}
                    accentColor="bg-accent/15 text-accent"
                  />

                  {/* What I'd Improve */}
                  <div className="p-4 rounded-lg bg-secondary/50 border border-border/50">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">What I'd improve</p>
                    <p className="text-sm text-foreground">{project.whatIdImprove}</p>
                  </div>

                  {/* Technologies */}
                  <div>
                    <p className="text-[10px] sm:text-xs text-muted-foreground uppercase tracking-wider mb-2 sm:mb-3">
                      Technologies & Concepts Used
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 text-xs sm:text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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
