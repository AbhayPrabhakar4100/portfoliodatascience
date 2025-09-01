import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, TrendingUp } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Kount – Equifax",
      role: "Data Science intern",
      period: "May 2025–Aug 2025",
      achievements: [
        "Built a unified 500M+ row Snowflake dataset (44 features) via JSON parsing & schema unification, cutting ML iteration time by 60%.",
        "Productionized a domain-normalization SQL UDF scaling from 1→40+ domains, tripling email fraud detection coverage (0.35% → 0.95%).",
        "Delivered a 2% accuracy lift in XGBoost fraud model (projected $3M+ annual savings).",
        "Partnered with ML engineers to achieve <50 ms real-time inference latency at 99.9% uptime."
      ],
      technologies: ["Snowflake", "XGBoost", "Python", "AWS", "Real-time ML"],
      impact: "Created a 500m+ row dataset from multiple sources",
      color: "primary"
    },
    {
      company: "Georgia State University x Truist Bank",
      role: "Research Data Scientist",
      period: "Aug 2024–May 2025",
      achievements: [
        "Rebalanced a 1:99 fraud ratio on 500K+ mortgages with engineered features & SMOTE; built XGBoost model with 80% recall & 85% precision, saving $30M+.",
        "Generated 8K+ synthetic applicants using custom Llama 3.1 + LangChain pipeline (82% realistic), enabling robust fraud screening.",
        "Built interactive executive dashboards that accelerated adoption of new fraud policies and cut charge-back rates by 12%.",
        "Designed advanced feature engineering workflows powering next-gen fraud prevention models."
      ],
      technologies: ["XGBoost", "SMOTE", "Llama 3.1", "Python", "Dashboards"],
      impact: "Estimated $30M+ Fraud Prevention",
      color: "accent"
    },
    {
      company: "Institute of Economic Growth",
      role: "Data Science Researcher",
      period: "Feb 2023–Jul 2024",
      achievements: [
        "Developed Random Forest for GST tax fraud detection, boosting recall to 85% and accuracy by 45% over legacy rules.",
        "Automated Spark + Python ML pipelines, cutting manual review workload by 40%.",
        "Built XGBoost macroeconomic forecasting model (AUC-ROC 0.92) guiding $50M+ investment decisions.",
        "Scaled large data workflows and delivered Tableau dashboards adopted by policy analysts & economists."
      ],
      technologies: ["Random Forest", "Spark ML", "Python", "Tax Analytics"],
      impact: "Government Tax Fraud Detection",
      color: "primary"
    },
    {
      company: "MetLife",
      role: "Data science intern",
      period: "Aug 2022–Dec 2022",
      achievements: [
        "Deployed BERT NLP pipeline on 100K+ customer comments (88% accuracy), shaping 2 new product features.",
        "Applied LDA topic modeling to identify pain points, lifting NPS by +12 points.",
        "Built interactive Power BI dashboards for real-time CX sentiment monitoring.",
        "Delivered actionable insights that drove customer experience optimization initiatives."
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