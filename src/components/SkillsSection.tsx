import { Code, Cpu, BarChart3, Users } from "lucide-react";

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
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mt-2 mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card rounded-2xl p-6 lg:p-8 hover-glow group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                    category.color === "primary"
                      ? "bg-primary/20 text-primary"
                      : "bg-accent/20 text-accent"
                  }`}
                >
                  <category.icon size={28} />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-105 ${
                      category.color === "primary"
                        ? "bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20"
                        : "bg-accent/10 text-accent border border-accent/20 hover:bg-accent/20"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
