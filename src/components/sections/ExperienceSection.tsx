import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, TrendingUp } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Kount – an Equifax Company",
      role: "Data Science Intern",
      period: "May 2025–Aug 2025",
      achievements: [
        "Built Snowflake ETL pipeline aggregating 15B+ payment transaction records into a unified 44-feature dataset with 3 custom engineered features, reducing ML iteration time by 60%.",
        "Designed A/B experiments measuring campaign performance of custom features within XGBoost models, improving accuracy by 2% and projected to save $3M+ annually through statistical hypothesis testing.",
        "Partnered with cross-functional engineering teams to optimize real-time inference latency below 50ms at 99.9% uptime.",
        "Productionized domain-normalization UDF scaling from 1 to 40+ domains, raising detection coverage from 0.35% to 0.95%."
      ],
      technologies: ["Snowflake", "XGBoost", "Python", "A/B Testing", "ETL"],
      impact: "15B+ payment transactions processed",
      color: "primary"
    },
    {
      company: "Georgia State University – Truist Bank",
      role: "Graduate Research Assistant",
      period: "Aug 2024–May 2025",
      achievements: [
        "Curated 500K+ consumer credit applications; engineered loan-to-value and debt-to-income features with SMOTE rebalancing for 1:99 fraud ratio leading to a 20% lift in the minority class detection.",
        "Led cross-functional 4-person team to build XGBoost ensemble achieving 80% recall and 85% precision, identifying 1,200 fraudulent applications with projected savings of $30M+.",
        "Developed custom Llama 3.1 pipeline generating 8K+ synthetic applicants (82% cosine similarity), then deployed LangChain AI agent for real-time screening automating verification checks.",
        "Created Tableau dashboards tracking key performance metrics and fraud patterns that informed business strategy, reducing chargebacks by 12%."
      ],
      technologies: ["XGBoost", "SMOTE", "Llama 3.1", "LangChain", "Tableau"],
      impact: "$30M+ projected savings",
      color: "accent"
    },
    {
      company: "SAU (South Asian University)",
      role: "Research Data Scientist",
      period: "Feb 2023–Jul 2024",
      achievements: [
        "Developed LightGBM classification models for consumer spending patterns, improving recall to 85% and accuracy by 20% over legacy rule-based system through advanced analytics optimization.",
        "Automated batch ETL pipeline using Spark and Airflow on GCP BigQuery ensuring data quality and governance, reducing manual processing by 40%.",
        "Built Prophet time-series forecasting model identifying emerging market trends; collaborated with cross-functional policy teams to integrate findings into Tableau dashboards adopted by analysts.",
        "Implemented cross-validation and model performance monitoring, improving long-term forecast stability."
      ],
      technologies: ["LightGBM", "Spark", "Airflow", "BigQuery", "Prophet"],
      impact: "Consumer spending pattern analysis",
      color: "primary"
    },
    {
      company: "MetLife",
      role: "Data Science Intern",
      period: "Aug 2022–Dec 2022",
      achievements: [
        "Deployed BERT NLP pipeline for customer segmentation classifying 100K+ payment transaction comments at 88% accuracy, identifying sentiment patterns informing 2 product launches.",
        "Applied LDA topic modeling to uncover customer engagement pain points, contributing to 12-point NPS increase.",
        "Partnered with cross-functional product teams to define success metrics measuring campaign performance and run A/B tests aligned with business objectives.",
        "Built Business Intelligence dashboard in Tableau tracking real-time key performance metrics for executive monitoring."
      ],
      technologies: ["BERT", "NLP", "LDA", "Tableau", "A/B Testing"],
      impact: "12-point NPS increase",
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