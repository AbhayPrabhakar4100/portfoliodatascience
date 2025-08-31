import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Brain, 
  Cloud, 
  Database, 
  BarChart3, 
  Settings,
  Cpu
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      color: "primary",
      skills: [
        { name: "Python", level: 95 },
        { name: "SQL", level: 90 },
        { name: "R", level: 80 },
        { name: "PySpark", level: 85 },
        { name: "DSA", level: 75 }
      ]
    },
    {
      title: "Machine Learning & AI",
      icon: Brain,
      color: "accent",
      skills: [
        { name: "XGBoost", level: 95 },
        { name: "PyTorch", level: 90 },
        { name: "TensorFlow", level: 85 },
        { name: "Generative AI/LLMs", level: 90 },
        { name: "Bayesian Inference", level: 80 }
      ]
    },
    {
      title: "Cloud & Data Engineering",
      icon: Cloud,
      color: "primary",
      skills: [
        { name: "AWS", level: 90 },
        { name: "GCP", level: 85 },
        { name: "Snowflake", level: 90 },
        { name: "Databricks", level: 85 },
        { name: "Hadoop", level: 75 }
      ]
    },
    {
      title: "Analytics & Visualization",
      icon: BarChart3,
      color: "accent",
      skills: [
        { name: "Tableau", level: 90 },
        { name: "Power BI", level: 85 },
        { name: "A/B Testing", level: 85 },
        { name: "Real-time Inference", level: 90 },
        { name: "Statistical Analysis", level: 90 }
      ]
    }
  ];

  const specializations = [
    {
      title: "Fraud Analytics",
      description: "Advanced fraud detection systems with real-time inference",
      technologies: ["XGBoost", "SMOTE", "Feature Engineering", "Real-time ML"],
      icon: Settings,
      color: "primary"
    },
    {
      title: "Generative AI",
      description: "LLM pipelines and synthetic data generation",
      technologies: ["Llama 3.1", "LangChain", "OpenAI", "Transformers"],
      icon: Cpu,
      color: "accent"
    },
    {
      title: "Data Engineering",
      description: "Scalable data architecture and pipeline optimization",
      technologies: ["Snowflake", "Spark", "Airflow", "Cloud Architecture"],
      icon: Database,
      color: "primary"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 animate-fade-in">
            Technical <span className="bg-primary-gradient bg-clip-text text-transparent">Skills</span>
          </h2>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card 
                  key={index} 
                  className="bg-card-gradient border-border shadow-card hover:shadow-primary transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 bg-${category.color}/20 rounded-lg`}>
                        <IconComponent className={`w-6 h-6 text-${category.color}`} />
                      </div>
                      <CardTitle className="text-xl font-bold">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.skills.map((skill, i) => (
                        <div key={i} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium text-foreground">{skill.name}</span>
                            <span className={`text-sm text-${category.color} font-semibold`}>
                              {skill.level}%
                            </span>
                          </div>
                          <Progress 
                            value={skill.level} 
                            className="h-2"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Specializations */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-center mb-8 animate-fade-in">
              Core <span className="bg-accent-gradient bg-clip-text text-transparent">Specializations</span>
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {specializations.map((spec, index) => {
                const IconComponent = spec.icon;
                return (
                  <Card 
                    key={index} 
                    className="bg-card-gradient border-border shadow-card hover:shadow-accent transition-all duration-300 hover:scale-105 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-6 text-center">
                      <div className={`p-4 bg-${spec.color}/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center`}>
                        <IconComponent className={`w-8 h-8 text-${spec.color}`} />
                      </div>
                      <h4 className="font-bold text-lg mb-2">{spec.title}</h4>
                      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                        {spec.description}
                      </p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {spec.technologies.map((tech, i) => (
                          <Badge 
                            key={i} 
                            variant="secondary" 
                            className={`bg-${spec.color}/10 text-${spec.color} border-${spec.color}/20 text-xs`}
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
          </div>

          {/* Achievement Highlights */}
          <div className="text-center animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6">Key Achievements</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="p-6 bg-card-gradient rounded-lg border border-border shadow-card">
                <div className="text-2xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="p-6 bg-card-gradient rounded-lg border border-border shadow-card">
                <div className="text-2xl font-bold text-accent mb-2">15+</div>
                <div className="text-sm text-muted-foreground">ML Models Deployed</div>
              </div>
              <div className="p-6 bg-card-gradient rounded-lg border border-border shadow-card">
                <div className="text-2xl font-bold text-primary mb-2">90%+</div>
                <div className="text-sm text-muted-foreground">Model Accuracy</div>
              </div>
              <div className="p-6 bg-card-gradient rounded-lg border border-border shadow-card">
                <div className="text-2xl font-bold text-accent mb-2">100M+</div>
                <div className="text-sm text-muted-foreground">Records Processed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;