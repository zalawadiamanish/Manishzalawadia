import { Code, Cpu, BarChart3, Users } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const skillCategories = [
  {
    icon: Code,
    title: "Programming Languages",
    skills: ["C", "C++", "Python"],
    color: "primary",
  },
  {
    icon: Cpu,
    title: "Core Computer Engineering",
    skills: [
      "Operating Systems",
      "Computer Networks",
      "Digital Systems & Architecture",
      "Microprocessor 8085",
      "Microprocessor 8086",
      "Microcontroller 8051",
    ],
    color: "accent",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics Tools",
    skills: ["Machine Learning with Python", "MS Excel", "Power BI"],
    color: "primary",
  },
  {
    icon: Users,
    title: "Teaching & Academic Skills",
    skills: [
      "Curriculum Design",
      "Semester Planning (1st–6th Sem)",
      "Lab Instruction",
      "Student Mentorship",
      "Academic Evaluation",
    ],
    color: "accent",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding relative bg-card/30">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-0 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-primary/3 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-48 sm:w-64 md:w-72 h-48 sm:h-64 md:h-72 bg-accent/3 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <span className="text-primary font-medium text-xs sm:text-sm uppercase tracking-wider">
              Expertise
            </span>
            <h2 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-heading font-bold mt-2 mb-3 sm:mb-4">
              Skills & <span className="gradient-text">Expertise</span>
            </h2>
            <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <ScrollReveal key={category.title} delay={index * 0.1}>
              <div className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 hover-glow group h-full">
                {/* Card Header */}
                <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 flex-shrink-0 ${
                      category.color === "primary"
                        ? "bg-primary/15 text-primary"
                        : "bg-accent/15 text-accent"
                    }`}
                  >
                    <category.icon className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                  </div>
                  <h3 className="text-base sm:text-lg md:text-xl font-heading font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full text-xs sm:text-sm font-medium transition-all hover:scale-105 ${
                        category.color === "primary"
                          ? "bg-primary/10 text-primary border border-primary/20 hover:bg-primary/15"
                          : "bg-accent/10 text-accent border border-accent/20 hover:bg-accent/15"
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
