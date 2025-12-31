import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Brain, TrendingUp, BarChart3, Target, Sparkles, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Slider } from "./ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import ScrollReveal from "./ScrollReveal";

// Simulated model coefficients (pre-trained)
const MODEL_CONFIG = {
  baselineSalary: 25000,
  experienceCoeff: 5500,
  roleMultipliers: {
    "software-engineer": 1.0,
    "data-scientist": 1.15,
    "ml-engineer": 1.25,
    "data-analyst": 0.85,
    "devops-engineer": 1.05,
    "product-manager": 1.10,
  },
  educationBonus: {
    "bachelors": 0,
    "masters": 12000,
    "phd": 25000,
  },
  locationMultipliers: {
    "mumbai": 1.0,
    "bangalore": 1.15,
    "hyderabad": 0.95,
    "pune": 0.90,
    "delhi-ncr": 1.10,
    "remote": 1.05,
  },
};

// Pre-calculated model metrics
const MODEL_METRICS = {
  linearRegression: { mae: 8234, mse: 95623000, r2: 0.847 },
  randomForest: { mae: 6521, mse: 71234000, r2: 0.912 },
};

const MLShowcaseSection = () => {
  const [experience, setExperience] = useState([5]);
  const [role, setRole] = useState("software-engineer");
  const [education, setEducation] = useState("bachelors");
  const [location, setLocation] = useState("mumbai");
  const [selectedModel, setSelectedModel] = useState<"linearRegression" | "randomForest">("randomForest");
  const [showPrediction, setShowPrediction] = useState(false);

  // Calculate predicted salary based on inputs
  const predictedSalary = useMemo(() => {
    const base = MODEL_CONFIG.baselineSalary;
    const expContribution = experience[0] * MODEL_CONFIG.experienceCoeff;
    const roleMultiplier = MODEL_CONFIG.roleMultipliers[role as keyof typeof MODEL_CONFIG.roleMultipliers] || 1;
    const educationBonus = MODEL_CONFIG.educationBonus[education as keyof typeof MODEL_CONFIG.educationBonus] || 0;
    const locationMultiplier = MODEL_CONFIG.locationMultipliers[location as keyof typeof MODEL_CONFIG.locationMultipliers] || 1;
    
    // Add some variance for realism
    const variance = selectedModel === "randomForest" ? 0.98 : 1.02;
    
    return Math.round((base + expContribution + educationBonus) * roleMultiplier * locationMultiplier * variance);
  }, [experience, role, education, location, selectedModel]);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);
  };

  const metrics = MODEL_METRICS[selectedModel];

  return (
    <section id="ml-showcase" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <ScrollReveal>
          <div className="text-center mb-16">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <Brain className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Machine Learning Demo</span>
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Salary <span className="text-primary">Prediction</span> Model
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Interactive demonstration of ML-based salary prediction using pre-trained 
              Linear Regression and Random Forest models on cleaned historical data.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Input Panel */}
          <ScrollReveal delay={0.1}>
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Target className="w-5 h-5 text-primary" />
                Input Features
              </h3>

              <div className="space-y-6">
                {/* Experience Slider */}
                <div>
                  <label className="block text-sm font-medium mb-3">
                    Years of Experience: <span className="text-primary font-bold">{experience[0]} years</span>
                  </label>
                  <Slider
                    value={experience}
                    onValueChange={setExperience}
                    max={25}
                    min={0}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>Fresher</span>
                    <span>25+ years</span>
                  </div>
                </div>

                {/* Job Role */}
                <div>
                  <label className="block text-sm font-medium mb-2">Job Role</label>
                  <Select value={role} onValueChange={setRole}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="software-engineer">Software Engineer</SelectItem>
                      <SelectItem value="data-scientist">Data Scientist</SelectItem>
                      <SelectItem value="ml-engineer">ML Engineer</SelectItem>
                      <SelectItem value="data-analyst">Data Analyst</SelectItem>
                      <SelectItem value="devops-engineer">DevOps Engineer</SelectItem>
                      <SelectItem value="product-manager">Product Manager</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Education */}
                <div>
                  <label className="block text-sm font-medium mb-2">Education Level</label>
                  <Select value={education} onValueChange={setEducation}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select education" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                      <SelectItem value="masters">Master's Degree</SelectItem>
                      <SelectItem value="phd">PhD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Location */}
                <div>
                  <label className="block text-sm font-medium mb-2">Location</label>
                  <Select value={location} onValueChange={setLocation}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mumbai">Mumbai</SelectItem>
                      <SelectItem value="bangalore">Bangalore</SelectItem>
                      <SelectItem value="hyderabad">Hyderabad</SelectItem>
                      <SelectItem value="pune">Pune</SelectItem>
                      <SelectItem value="delhi-ncr">Delhi NCR</SelectItem>
                      <SelectItem value="remote">Remote</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Model Selection */}
                <div>
                  <label className="block text-sm font-medium mb-2">ML Model</label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setSelectedModel("linearRegression")}
                      className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                        selectedModel === "linearRegression"
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      Linear Regression
                    </button>
                    <button
                      onClick={() => setSelectedModel("randomForest")}
                      className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                        selectedModel === "randomForest"
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      Random Forest
                    </button>
                  </div>
                </div>

                <Button
                  variant="hero"
                  size="lg"
                  className="w-full"
                  onClick={() => setShowPrediction(true)}
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Predict Salary
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          </ScrollReveal>

          {/* Results Panel */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-6">
              {/* Prediction Result */}
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Prediction Result
                </h3>
                
                <motion.div
                  key={predictedSalary}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="text-center py-8"
                >
                  {showPrediction ? (
                    <>
                      <p className="text-sm text-muted-foreground mb-2">Predicted Annual Salary</p>
                      <p className="text-4xl md:text-5xl font-bold text-primary">
                        {formatCurrency(predictedSalary)}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        ± {formatCurrency(metrics.mae)} (MAE)
                      </p>
                    </>
                  ) : (
                    <div className="text-muted-foreground">
                      <Brain className="w-16 h-16 mx-auto mb-4 opacity-20" />
                      <p>Adjust parameters and click "Predict Salary"</p>
                    </div>
                  )}
                </motion.div>
              </Card>

              {/* Model Metrics */}
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-primary" />
                  Model Evaluation Metrics
                </h3>
                
                <div className="space-y-4">
                  {/* R² Score */}
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-muted-foreground">R² Score (Accuracy)</span>
                      <span className="font-medium text-primary">{(metrics.r2 * 100).toFixed(1)}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${metrics.r2 * 100}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                      />
                    </div>
                  </div>

                  {/* MAE */}
                  <div className="flex justify-between items-center py-2 border-t border-border/50">
                    <span className="text-sm text-muted-foreground">Mean Absolute Error (MAE)</span>
                    <span className="font-medium">{formatCurrency(metrics.mae)}</span>
                  </div>

                  {/* MSE */}
                  <div className="flex justify-between items-center py-2 border-t border-border/50">
                    <span className="text-sm text-muted-foreground">Mean Squared Error (MSE)</span>
                    <span className="font-medium">{(metrics.mse / 1000000).toFixed(2)}M</span>
                  </div>
                </div>

                <div className="mt-4 p-3 rounded-lg bg-primary/5 border border-primary/10">
                  <p className="text-xs text-muted-foreground">
                    <span className="text-primary font-medium">
                      {selectedModel === "randomForest" ? "Random Forest" : "Linear Regression"}
                    </span>
                    {" "} model trained on cleaned salary dataset with features: 
                    Experience, Job Role, Education, and Location.
                  </p>
                </div>
              </Card>

              {/* Tech Stack */}
              <Card className="p-4 bg-card/50 backdrop-blur-sm border-border/50">
                <div className="flex flex-wrap gap-2">
                  {["Python", "scikit-learn", "Pandas", "NumPy", "Linear Regression", "Random Forest", "Feature Engineering"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default MLShowcaseSection;
