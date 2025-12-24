import { FileText, Download, Eye, GraduationCap, Briefcase, Award, BookOpen } from "lucide-react";
import { Button } from "./ui/button";

const resumeHighlights = [
  {
    icon: GraduationCap,
    title: "Education",
    description: "M.E. & B.E. in Computer Engineering",
  },
  {
    icon: Briefcase,
    title: "Experience",
    description: "5+ Years in Academia",
  },
  {
    icon: BookOpen,
    title: "Expertise",
    description: "15+ Core Subjects",
  },
  {
    icon: Award,
    title: "Research",
    description: "Covert Channel Detection",
  },
];

const ResumeSection = () => {
  return (
    <section id="resume" className="section-padding relative">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-accent/5 to-transparent rounded-full" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Credentials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-2 mb-4">
            My <span className="gradient-text">Resume</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Resume Card */}
          <div className="glass-card rounded-2xl p-8 lg:p-12 text-center mb-12 animate-fade-up">
            {/* Icon */}
            <div className="w-24 h-24 rounded-2xl bg-gradient-primary mx-auto mb-6 flex items-center justify-center animate-float">
              <FileText size={48} className="text-primary-foreground" />
            </div>

            <h3 className="text-2xl font-heading font-bold text-foreground mb-4">
              Manish Zalawadia
            </h3>
            <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
              Access my complete curriculum vitae including academic qualifications,
              teaching experience, research work, and professional achievements.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl">
                <Download size={20} />
                Download Resume
              </Button>
              <Button variant="heroOutline" size="xl">
                <Eye size={20} />
                View Resume
              </Button>
            </div>
          </div>

          {/* Resume Highlights */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {resumeHighlights.map((item, index) => (
              <div
                key={item.title}
                className="glass-card rounded-xl p-5 text-center hover-glow animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/20 mx-auto mb-3 flex items-center justify-center">
                  <item.icon size={24} className="text-primary" />
                </div>
                <h4 className="font-heading font-semibold text-foreground mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
