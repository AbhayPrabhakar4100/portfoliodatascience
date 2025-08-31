import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, TrendingUp } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Kount – Equifax",
      role: "Data Science intern",
      period: "May–Aug 2025",
      achievements: [
        "Built $500M+ Snowflake data lake architecture",
        "Developed fraud detection features with advanced ML",
        "Optimized XGBoost models for real-time inference",
        "Reduced inference latency to <50ms"
      ],
      technologies: ["Snowflake", "XGBoost", "Python", "AWS", "Real-time ML"],
      impact: "$500M+ Data Infrastructure",
      color: "primary"
    },
    {
      company: "Georgia State University x Truist Bank",
      role: "Research Data Scientist",
      period: "Aug 2024–May 2025",
      achievements: [
        "Fraud detection pipeline with XGBoost + SMOTE",
        "Llama 3.1 synthetic applicant generation",
        "Interactive dashboards saving $30M+",
        "Advanced feature engineering for fraud prevention"
      ],
      technologies: ["XGBoost", "SMOTE", "Llama 3.1", "Python", "Dashboards"],
      impact: "$30M+ Fraud Prevention",
      color: "accent"
    },
    {
      company: "Institute of Economic Growth",
      role: "Data Science Researcher",
      period: "Jan 2023–Jul 2024",
      achievements: [
        "Random Forest for GST tax fraud detection",
        "Spark ML automation and pipeline optimization",
        "Macroeconomic forecasting models",
        "Large-scale data processing workflows"
      ],
      technologies: ["Random Forest", "Spark ML", "Python", "Tax Analytics"],
      impact: "Government Tax Fraud Detection",
      color: "primary"
    },
    {
      company: "MetLife",
      role: "Data science intern",
      period: "Jun–Aug 2022",
      achievements: [
        "BERT NLP pipeline on customer comments",
        "LDA topic modeling for sentiment analysis",
        "Power BI dashboards for business insights",
        "Customer experience optimization"
      ],
      technologies: ["BERT", "NLP", "LDA", "Power BI", "Python"],
      impact: "Customer Experience Enhancement",
      color: "accent"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 animate-fade-in">
            Professional <span className="bg-primary-gradient bg-clip-text text-transparent">Experience</span>
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary/30"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div 
                  key={index} 
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                  } animate-fade-in`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow z-10"></div>

                  {/* Experience Card */}
                  <Card className={`w-full md:w-5/12 ml-16 md:ml-0 bg-card-gradient border-border shadow-card hover:shadow-${exp.color} transition-all duration-300 hover:scale-105`}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4 mb-4">
                        <div className={`p-2 bg-${exp.color}/20 rounded-lg`}>
                          <Building2 className={`w-6 h-6 text-${exp.color}`} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-xl text-foreground mb-1">{exp.role}</h3>
                          <p className={`text-${exp.color} font-semibold mb-2`}>{exp.company}</p>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                        </div>
                      </div>

                      {/* Impact Highlight */}
                      <div className={`p-3 bg-${exp.color}/10 rounded-lg mb-4 border border-${exp.color}/20`}>
                        <div className="flex items-center space-x-2">
                          <TrendingUp className={`w-4 h-4 text-${exp.color}`} />
                          <span className={`text-${exp.color} font-semibold text-sm`}>Key Impact</span>
                        </div>
                        <p className="text-foreground font-medium mt-1">{exp.impact}</p>
                      </div>

                      {/* Achievements */}
                      <div className="space-y-2 mb-4">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start space-x-2">
                            <div className={`w-2 h-2 bg-${exp.color} rounded-full mt-2 flex-shrink-0`}></div>
                            <p className="text-sm text-muted-foreground leading-relaxed">{achievement}</p>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <Badge 
                            key={i} 
                            variant="secondary" 
                            className={`bg-${exp.color}/10 text-${exp.color} border-${exp.color}/20 hover:bg-${exp.color}/20 transition-colors`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;