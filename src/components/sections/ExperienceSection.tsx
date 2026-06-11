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
        "Isolated ~$7M in annualized incremental spend from a spend-and-get campaign with a difference-in-differences design and placebo validation across 355K+ cardholders.",
        "Cut campaign outreach ~30% while retaining ~90% of incremental spend with a Qini-validated Causal Forest uplift model (100K-cardholder A/B test), tiering cardholders by lift and forecasting per-tier incremental spend into a dollar-ranked budget.",
        "Flagged at-risk cardholders before closure with an XGBoost model (0.87 AUC, top decile capturing ~60% of closures) on spend velocity, utilization, decline frequency, FICO, and tenure, feeding retention outreach.",
        "Built automated Tableau campaign-performance dashboards tracking lift, campaign ROI, and retention guardrails, giving marketing partners self-serve reads between experiments."
      ],
      technologies: ["Causal Forest", "XGBoost", "Diff-in-Diff", "Tableau", "A/B Testing"],
      impact: "~$7M annualized incremental spend isolated",
      color: "primary"
    },
    {
      company: "Equifax",
      role: "Data Science Intern",
      period: "Boise, ID · May 2025 – Aug 2025",
      achievements: [
        "Improved response efficiency ~2.2x on a 1M+ prospect consumer financial-offer campaign, with the top two deciles capturing ~68% of responders, using a calibrated gradient-boosted propensity model in Equifax Ignite.",
        "Measured ~+1.8 pp incremental response lift with power-sized test-versus-control holdouts, then analyzed lift by SHAP-informed driver segment, showing the highest-propensity prospects were not always the most persuadable.",
        "Built reusable SQL/Python analysis pipelines in Equifax Ignite automating decile-lift, responder-capture, and test-versus-control readouts, delivering experiment insights at scale for marketing stakeholders."
      ],
      technologies: ["Equifax Ignite", "Gradient Boosting", "SHAP", "SQL", "Python"],
      impact: "~2.2x response efficiency on 1M+ prospects",
      color: "accent"
    },
    {
      company: "Truist Bank (Graduate Research Assistant, GSU)",
      role: "Data Scientist",
      period: "Atlanta, GA · Aug 2024 – May 2025",
      achievements: [
        "Led a 4-person team segmenting 500K+ mortgage customers into 5 cohorts with silhouette-tuned K-means on equity, payment behavior, tenure, and mortgage-rate gap to target refinance and home-equity cross-sell.",
        "Built an interpretable multivariate GLM for refinance/home-equity response retaining ~95% of a gradient-boosted model's AUC, giving stakeholders transparent propensity drivers while preserving most of the predictive performance.",
        "Estimated cross-sell incrementality by cohort with a mail-versus-control design, isolating a ~3 pp response lift in high-equity, high-rate-gap segments while low-rate-gap cohorts showed near-zero, sharpening mail targeting.",
        "Forecasted monthly refinance and home-equity production to within ~8% MAPE with a funnel model decomposing response, approval, and booking rates, presented to marketing leadership and adopted for quarterly outreach-volume and budget planning."
      ],
      technologies: ["K-means", "GLM", "Gradient Boosting", "Forecasting", "Segmentation"],
      impact: "~3 pp response lift in target cohorts",
      color: "primary"
    },
    {
      company: "South Asian University (SAU)",
      role: "Research Data Scientist",
      period: "New Delhi, India · Feb 2023 – Jul 2024",
      achievements: [
        "Identified an ~18% qualified-applicant expansion opportunity by applying K-means geographic segmentation across feeder schools, travel distance, and historical enrollment yield, pinpointing under-targeted high-yield regions.",
        "Concentrated ~70% of eventual enrollees in the top 3 deciles with a gradient-boosted prospect-to-enroll scoring model on 30K+ inquiries across the inquiry → application → admit → enroll funnel.",
        "Lifted enrollment yield ~6% by translating funnel, segment, and channel-mix analysis into recruitment recommendations adopted by enrollment leadership."
      ],
      technologies: ["K-means", "Gradient Boosting", "Funnel Analysis", "Segmentation"],
      impact: "~6% enrollment yield lift",
      color: "accent"
    },
    {
      company: "MetLife",
      role: "Data Science Intern",
      period: "New Delhi, India · Aug 2022 – Dec 2022",
      achievements: [
        "Cut manual review of 100K+ call and survey records ~40% with a BERT topic-modeling pipeline converting unstructured feedback into structured churn-driver themes for retention analysis.",
        "Linked complaint themes to retention and service KPIs, helping CX and marketing teams target high-friction issues like claims delays, pricing, and service dissatisfaction.",
        "Automated Tableau and Power BI dashboards tracking feedback volume, sentiment, themes, and retention-risk drivers, giving stakeholders self-serve reads to prioritize follow-up."
      ],
      technologies: ["BERT", "Topic Modeling", "Tableau", "Power BI", "NLP"],
      impact: "~40% reduction in manual review",
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