import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const ResumeSection = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://drive.google.com/uc?export=download&id=1Nn1jmBsdHxN3pftRO3qy6dJ3Hq9E9_fJ';
    link.download = 'Abhay_Prabhakar_Resume.png';
    link.click();
  };

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 animate-fade-in">
            My <span className="bg-primary-gradient bg-clip-text text-transparent">Resume</span>
          </h2>
          
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in">
            Download my detailed resume to learn more about my experience, skills, and achievements in data science and fraud analytics.
          </p>

          <div className="animate-fade-in">
            <Card className="bg-card-gradient border-border shadow-card hover:shadow-primary transition-all duration-300 max-w-md mx-auto">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Download className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Download Resume</h3>
                  <p className="text-muted-foreground">Get a comprehensive overview of my professional journey</p>
                </div>
                <Button 
                  onClick={handleResumeDownload} 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-all duration-300" 
                  size="lg"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;