import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";
const AboutSection = () => {
  const education = [{
    degree: "MS Data Science & Analytics",
    institution: "Georgia State University",
    period: "2024–2025",
    status: "In Progress"
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
              <h3 className="text-2xl font-semibold mb-6 text-primary">Who I Am</h3>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  I am <span className="text-foreground font-semibold">Abhay Prabhakar</span>, a Data Scientist with 
                  extensive experience in fraud analytics and Generative AI. My work spans from architecting 
                  Snowflake data lakes to building XGBoost and LLM pipelines that save millions in fraud prevention.
                </p>
                <p>
                  Skilled in <span className="text-primary">Python, SQL, AWS, and GCP</span>, I specialize in building scalable, 
                  real-time ML solutions that turn arcane data challenges into measurable business impact.
                </p>
                <p>
                  Throughout my career, I've had the privilege of working with industry leaders like 
                  <span className="text-accent"> Equifax, Truist Bank, and MetLife</span>, where I've consistently 
                  delivered innovative solutions that drive business value and prevent financial fraud at scale.
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
                <div className="text-3xl font-bold text-primary mb-2">$30M+</div>
                <div className="text-muted-foreground">Estimated Fraud Losses Prevented</div>
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
                <div className="text-3xl font-bold text-primary mb-2">500M+</div>
                <div className="text-muted-foreground">Rows Dataset Architected From Multiple Sources</div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>;
};
export default AboutSection;