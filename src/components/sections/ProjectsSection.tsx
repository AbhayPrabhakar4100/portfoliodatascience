import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, TrendingUp, Brain, Shield } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Fossil Demand Forecasting",
      description: "Forecasting global watch demand for Fossil to optimize inventory and supply chain. Built stacking ensemble with ARIMA features and Bayesian hyperparameter tuning, achieving 5% MAPE.",
      achievements: [
        "44K+ records, 45 features (categorical + numerical)",
        "Lead/lag and ARIMA-based feature engineering",
        "Stacking ensemble model with Bayesian Optimization",
        "$400M savings in carrying costs and $2.8B sales protection"
      ],
      technologies: ["Python", "Scikit-learn", "ARIMA", "Bayesian Optimization", "Forecasting"],
      github: "https://github.com/AbhayPrabhakar4100/Fossil-Demand-Forecasting",
      demo: "#",
      icon: Shield,
      color: "primary",
      impact: "5% MAPE"
    },
    {
      title: "PantherBot – AI Academic Chatbot",
      description: "AI-driven chatbot to assist Georgia State University students in exploring undergraduate and graduate programs. Integrates GPT-4 Turbo, program datasets, and Google Search fallback for accurate recommendations.",
      achievements: [
        "Streamlit frontend with responsive UI",
        "GPT-4 Turbo + multi-turn memory",
        "Real-time tuition, curriculum, and faculty lookup",
        "Google Search fallback with Serper.dev"
      ],
      technologies: ["Python", "Streamlit", "OpenAI", "LangChain", "API Integration"],
      github: "https://github.com/AbhayPrabhakar4100/Panther_Chatbot",
      demo: "#",
      icon: Brain,
      color: "accent",
      impact: "Real-time program guidance"
    },
    {
      title: "Context-Aware AI Agents (RAG Persona Benchmark)",
      description: "Built Retrieval-Augmented Generation (RAG) pipeline to simulate and evaluate AI personas (journalist, researcher) with factual grounding and stylistic consistency.",
      achievements: [
        "Context-specific knowledge retrieval",
        "Persona-based style simulation",
        "Comparative evaluation metrics (accuracy, style, depth)",
        "Extensible framework for multi-agent simulations"
      ],
      technologies: ["Python", "RAG", "LangChain", "Transformers", "NLP"],
      github: "https://github.com/AbhayPrabhakar4100/context-aware-ai-agents",
      demo: "#",
      icon: TrendingUp,
      color: "primary",
      impact: "Persona-grounded LLMs"
    },
    {
      title: "Credit Card Fraud Detection",
      description: "End-to-end fraud detection pipeline on Kaggle dataset with Random Forest, Logistic Regression, and XGBoost. Tuned Random Forest achieved 0.997 ROC-AUC with optimal thresholding.",
      achievements: [
        "Highly imbalanced dataset (0.17% fraud rate)",
        "Precision-Recall curve threshold tuning",
        "Real-time scoring & risk explanations",
        "Reduced manual review workload with automated fraud catch"
      ],
      technologies: ["Python", "Scikit-learn", "XGBoost", "Random Forest", "Fraud Analytics"],
      github: "https://github.com/AbhayPrabhakar4100/cred-card-fraud-detection-",
      demo: "#",
      icon: TrendingUp,
      color: "accent",
      impact: "99.7% ROC-AUC"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 animate-fade-in">
            Featured <span className="bg-primary-gradient bg-clip-text text-transparent">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card 
                  key={index} 
                  className="bg-card-gradient border-border shadow-card hover:shadow-primary transition-all duration-300 hover:scale-105 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 bg-${project.color}/20 rounded-lg group-hover:bg-${project.color}/30 transition-colors`}>
                        <IconComponent className={`w-6 h-6 text-${project.color}`} />
                      </div>
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          asChild
                          className="hover:bg-primary/20"
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                          </a>
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          asChild
                          className="hover:bg-primary/20"
                        >
                          <a href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold text-foreground mb-2">
                      {project.title}
                    </CardTitle>
                    <div className={`inline-flex items-center space-x-2 px-3 py-1 bg-${project.color}/10 border border-${project.color}/20 rounded-full mb-4`}>
                      <TrendingUp className={`w-4 h-4 text-${project.color}`} />
                      <span className={`text-${project.color} font-semibold text-sm`}>{project.impact}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-2 mb-6">
                      {project.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start space-x-2">
                          <div className={`w-2 h-2 bg-${project.color} rounded-full mt-2 flex-shrink-0`}></div>
                          <p className="text-sm text-muted-foreground">{achievement}</p>
                        </div>
                      ))}
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge 
                          key={i} 
                          variant="secondary" 
                          className={`bg-${project.color}/10 text-${project.color} border-${project.color}/20 hover:bg-${project.color}/20 transition-colors`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 animate-fade-in">
            <h3 className="text-2xl font-semibold mb-4">Interested in collaborating?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always excited to work on challenging data science problems and innovative AI solutions. 
              Let's discuss how we can create impact together.
            </p>
            <Button 
              size="lg" 
              className="bg-primary-gradient hover:shadow-glow transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="https://github.com/AbhayPrabhakar4100" target="_blank" rel="noopener noreferrer">
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;