import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";
const AboutSection = () => {
  const education = [{
    degree: "MS Data Science & Analytics",
    institution: "Georgia State University",
    period: "2024–2025",
    status: "Completed"
  }, {
    degree: "PG Diploma in Data Analytics",
    institution: "GGSIPU",
    period: "2021–2022",
    status: "Completed"
  }, {
    degree: "BA (Honors) Economics",
    institution: "Shaheed Bhagat Singh College, University of Delhi",
    period: "2018–2021",
    status: "Completed"
  }];
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 animate-fade-in">
            About <span className="bg-primary-gradient bg-clip-text text-transparent">Me</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Personal Bio */}
            <div className="animate-fade-in-left">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Who Am I?</h3>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm <span className="text-foreground font-semibold">Abhay Prabhakar</span>, a Data Scientist on <span className="text-primary">Visa's credit card analytics team</span>, where I measure what marketing actually causes: a difference-in-differences study that isolated ~$7M in annualized incremental spend across 355K+ cardholders, a Qini-validated Causal Forest uplift model that cut campaign outreach ~30% while keeping ~90% of incremental spend, and an XGBoost early-attrition model (0.87 AUC) feeding retention outreach before cardholders close.
                </p>
                <p>
                  Before Visa, my work centered on risk modeling in financial services. At <span className="text-accent">Equifax</span>, I built calibrated propensity models for a 1M+ prospect campaign, improving response efficiency ~2.2x, with test-versus-control holdouts showing the highest-propensity prospects weren't always the most persuadable. At <span className="text-accent">Truist</span> (through Georgia State), I led a team building a cost-sensitive mortgage-fraud model on 500K applications, with SHAP reason codes giving underwriters a per-case explanation. Earlier, in New Delhi, I built a tax-fraud model on 1.4M invoices at South Asian University, layering network analysis to catch circular-trading rings, and BERT pipelines at <span className="text-accent">MetLife</span> surfacing staged-accident narratives in 100K+ adjuster notes.
                </p>
                <p>
                  Two things show up in everything I ship: the impact has to survive a proper test — holdouts, diff-in-diff, placebo checks — not just a backtest, and the output has to be explainable to the person acting on it, whether that's an underwriter reading a reason code or a marketing partner working a dollar-ranked budget.
                </p>
                <p>
                  I work in <span className="text-primary">Python, SQL, Snowflake, and Spark</span>. MS in Data Science & Analytics from Georgia State, 3.9 GPA. If you work in marketing analytics, experimentation, fraud, or risk, happy to connect.
                </p>
              </div>
            </div>

            {/* Education Timeline */}
            <div className="animate-fade-in-right">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Education</h3>
              <div className="space-y-6">
                {education.map((edu, index) => <Card key={index} className="bg-card-gradient border-border shadow-card hover:shadow-primary transition-all duration-300 hover:scale-105">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-primary/20 rounded-lg">
                          <GraduationCap className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg text-foreground mb-1">
                            {edu.degree}
                          </h4>
                          <p className="text-primary font-medium mb-2">{edu.institution}</p>
                          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.period}</span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${edu.status === "In Progress" ? "bg-accent/20 text-accent" : "bg-primary/20 text-primary"}`}>
                              {edu.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>)}
              </div>
            </div>
          </div>

          {/* Achievement Highlights */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 animate-fade-in">
            <Card className="bg-card-gradient border-border shadow-card hover:shadow-accent transition-all duration-300 hover:scale-105 text-center">
              <CardContent className="p-8">
                <div className="text-3xl font-bold text-primary mb-2">$10M+</div>
                <div className="text-muted-foreground">Estimated Impact Made</div>
              </CardContent>
            </Card>
            <Card className="bg-card-gradient border-border shadow-card hover:shadow-accent transition-all duration-300 hover:scale-105 text-center">
              <CardContent className="p-8">
                <div className="text-3xl font-bold text-accent mb-2">&lt;50ms</div>
                <div className="text-muted-foreground">Inference Latency</div>
              </CardContent>
            </Card>
            <Card className="bg-card-gradient border-border shadow-card hover:shadow-accent transition-all duration-300 hover:scale-105 text-center">
              <CardContent className="p-8">
                <div className="text-3xl font-bold text-primary mb-2">15B+</div>
                <div className="text-muted-foreground">Rows Dataset Architected From Multiple Sources</div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>;
};
export default AboutSection;