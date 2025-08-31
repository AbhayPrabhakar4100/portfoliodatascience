import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";
import abhayHeadshot from "@/assets/abhay-real-headshot.jpg";

interface HeroSectionProps {
  onSectionChange: (section: string) => void;
}

const HeroSection = ({ onSectionChange }: HeroSectionProps) => {
  return (
    <section className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-hero-gradient opacity-90" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float" />
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-accent/20 rounded-full animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-40 right-20 w-12 h-12 bg-primary/10 rounded-full animate-float" style={{ animationDelay: "4s" }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src={abhayHeadshot}
                alt="Abhay Prabhakar - Data Scientist"
                className="w-40 h-40 rounded-full border-4 border-primary shadow-glow object-cover animate-scale-in"
              />
              <div className="absolute inset-0 rounded-full bg-primary/20 animate-glow-pulse" />
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-left">
            <span className="bg-primary-gradient bg-clip-text text-transparent">
              Data Scientist
            </span>
            <br />
            <span className="text-foreground">Fraud Analytics</span>
            <br />
            <span className="bg-accent-gradient bg-clip-text text-transparent">
              Generative AI
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/90 max-w-4xl mx-auto mb-8 animate-fade-in-right font-medium">
            Teaching machines to spot patterns humans miss.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Button
              size="lg"
              onClick={() => onSectionChange("projects")}
              className="bg-primary-gradient hover:shadow-glow transition-all duration-300 hover:scale-105"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => onSectionChange("contact")}
              className="border-primary text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105"
            >
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12 animate-scale-in">
            <a
              href="https://linkedin.com/in/abhay-prabhakar04"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary/20 transition-all duration-300 hover:scale-110 shadow-card"
            >
              <Linkedin className="w-6 h-6 text-primary" />
            </a>
            <a
              href="https://github.com/abhay-prabhakar"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary/20 transition-all duration-300 hover:scale-110 shadow-card"
            >
              <Github className="w-6 h-6 text-primary" />
            </a>
            <a
              href="mailto:abhay.prabhakar.93@gmail.com"
              className="p-3 rounded-full bg-card hover:bg-primary/20 transition-all duration-300 hover:scale-110 shadow-card"
            >
              <Mail className="w-6 h-6 text-primary" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <ChevronDown 
              className="w-8 h-8 text-primary mx-auto cursor-pointer hover:text-primary-glow transition-colors"
              onClick={() => onSectionChange("about")}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;