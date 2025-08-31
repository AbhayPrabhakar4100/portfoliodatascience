import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, TrendingUp, Brain, Shield } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Fraud Detection Pipeline",
      description: "Advanced fraud detection system using XGBoost with SMOTE for handling imbalanced datasets. Achieved 0.90 AUC with comprehensive feature engineering and real-time inference capabilities.",
      achievements: [
        "AUC Score: 0.90",
        "Real-time inference <50ms",
        "Handles 1M+ transactions/day",
        "Advanced feature engineering"
      ],
      technologies: ["XGBoost", "SMOTE", "Python", "Scikit-learn", "Pandas"],
      github: "https://github.com/abhay-prabhakar/fraud-detection",
      demo: "#",
      icon: Shield,
      color: "primary",
      impact: "90% Accuracy"
    },
    {
      title: "Synthetic Applicants Pipeline",
      description: "Generative AI pipeline using Llama 3.1 and LangChain to create 8K synthetic fraud profiles with 82% similarity to real data for model training and testing.",
      achievements: [
        "8K synthetic profiles generated",
        "82% similarity to real data",
        "Automated pipeline with LangChain",
        "Fraud pattern replication"
      ],
      technologies: ["Llama 3.1", "LangChain", "Python", "OpenAI", "Transformers"],
      github: "https://github.com/abhay-prabhakar/synthetic-applicants",
      demo: "#",
      icon: Brain,
      color: "accent",
      impact: "82% Data Similarity"
    },
    {
      title: "Real-time ML Inference System",
      description: "High-performance ML inference system built on AWS with optimized XGBoost models for fraud detection. Achieved sub-50ms latency at scale.",
      achievements: [
        "Sub-50ms inference latency",
        "Auto-scaling architecture",
        "99.9% uptime SLA",
        "Cost-optimized deployment"
      ],
      technologies: ["AWS", "Docker", "XGBoost", "FastAPI", "Redis"],
      github: "https://github.com/abhay-prabhakar/ml-inference",
      demo: "#",
      icon: TrendingUp,
      color: "primary",
      impact: "<50ms Latency"
    },
    {
      title: "Snowflake Data Lake Architecture",
      description: "$500M+ data lake architecture designed for fraud analytics at scale. Implemented efficient data pipelines with optimized query performance.",
      achievements: [
        "$500M+ data processing",
        "Multi-petabyte architecture", 
        "Real-time data ingestion",
        "Advanced security controls"
      ],
      technologies: ["Snowflake", "dbt", "Airflow", "Python", "SQL"],
      github: "https://github.com/abhay-prabhakar/data-lake",
      demo: "#",
      icon: TrendingUp,
      color: "accent",
      impact: "$500M+ Scale"
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