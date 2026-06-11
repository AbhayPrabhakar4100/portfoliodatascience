import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, TrendingUp } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Visa (via Blend360)",
      role: "Data Scientist",
      period: "Atlanta, GA · Jan 2026 – Present",
      achievements: [
        "Built a calibrated XGBoost origination-fraud model (0.89 AUC, top decile capturing ~62% of confirmed fraud), with a cost-sensitive operating point focusing review on the highest credit-line exposure.",
        "Concentrated ~55% of confirmed first-party abuse in the top 10% of accounts with a credit-line-abuse scoring layer on utilization velocity, reversals, spend bursts, and cash-like MCC mix; K-means surfaced distinct bust-out signatures.",
        "Built an XGBoost early-attrition model (0.87 AUC) on spend decay, utilization, and decline frequency; a randomized holdout of top-decile outreach measured a ~7 pp incremental save rate over control.",
        "Cut campaign outreach ~30% while holding ~90% of incremental margin with a Causal Forest uplift model and difference-in-differences design ranking cardholders by individual lift (100K-cardholder A/B test)."
      ],
      technologies: ["XGBoost", "Causal Forest", "K-means", "Diff-in-Diff", "SHAP"],
      impact: "Top decile captures ~62% of confirmed fraud",
      color: "primary"
    },
    {
      company: "Equifax",
      role: "Fraud Data Science Intern",
      period: "Boise, ID · May 2025 – Aug 2025",
      achievements: [
        "Improved email-tumbling fraud recall from 0.33 to 0.95 by normalizing emails across 40+ providers over 15B transactions, linking fake-distinct accounts into identity clusters with detectable velocity and abuse patterns.",
        "Engineered a Simpson Diversity Index feature to quantify coordination inside an identity cluster, ranking top-5 by SHAP in the production fraud model.",
        "Improved fraud capture +18% at a fixed false-positive rate on out-of-time data with a LightGBM challenger that caught a coordinated-abuse pattern the incumbent missed."
      ],
      technologies: ["LightGBM", "SHAP", "Identity Resolution", "SQL", "Python"],
      impact: "Email-tumbling recall 0.33 → 0.95",
      color: "accent"
    },
    {
      company: "Truist Bank (Graduate Research Assistant, GSU)",
      role: "Fraud Risk Data Scientist",
      period: "Atlanta, GA · Aug 2024 – May 2025",
      achievements: [
        "Led a 4-person team building a 500K-record mortgage application dataset with 24 fraud-risk features designed to catch fraud without penalizing legitimate borrowers.",
        "Reached 80% recall at 85% precision (~1,200 high-risk originations surfaced) with a cost-sensitive XGBoost model whose SHAP explanations gave underwriters a per-case reason code.",
        "Showed via SHAP that fraud is not uniform: occupancy misrepresentation clustered in refinances, income misrepresentation in first-time-buyer applications, letting the team route review by type."
      ],
      technologies: ["XGBoost", "SHAP", "Cost-Sensitive Learning", "Feature Engineering"],
      impact: "80% recall at 85% precision on mortgage fraud",
      color: "primary"
    },
    {
      company: "South Asian University (SAU)",
      role: "Research Data Scientist",
      period: "New Delhi, India · Feb 2023 – Jul 2024",
      achievements: [
        "Built a LightGBM tax-fraud model on 1.4M invoices (85% recall vs. a rule-based baseline) using taxpayer-behavior, input-tax-credit, and invoice-pattern features to flag evasion random audits missed.",
        "Layered an invoice-network analysis to surface circular-trading rings (A → B → C → A loops) that single-taxpayer scoring could not see, extending coverage to coordinated evasion.",
        "Concentrated ~58% of confirmed fraud in the top 10% of taxpayers via audit-prioritization tiers, letting auditors recover most fraud while reviewing ~30% of prior volume."
      ],
      technologies: ["LightGBM", "Network Analysis", "Python", "SQL"],
      impact: "~58% of fraud in top 10% of taxpayers",
      color: "accent"
    },
    {
      company: "MetLife",
      role: "Fraud Data Science Intern",
      period: "New Delhi, India · Aug 2022 – Dec 2022",
      achievements: [
        "Built an NLP pipeline over 100K+ adjuster notes, fine-tuning BERT with topic-model features to surface staged-accident and inflated-severity narratives keyword search missed.",
        "Flagged ~22% more suspicious claims than the keyword baseline by turning unstructured narratives into ranked risk signals for investigators.",
        "Built Tableau and Power BI dashboards tracking flagged-claim volume, fraud themes, and investigator hit-rate for the SIU team."
      ],
      technologies: ["BERT", "NLP", "Topic Modeling", "Tableau", "Power BI"],
      impact: "~22% more suspicious claims flagged vs. baseline",
      color: "primary"
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