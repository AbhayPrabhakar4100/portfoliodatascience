import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import abhayHeadshot from "@/assets/abhay-real-headshot.jpg";

interface HeroSectionProps {
  onSectionChange: (section: string) => void;
}

const HeroSection = ({ onSectionChange }: HeroSectionProps) => {
  return (
    <section className="min-h-screen w-full relative flex items-center justify-center overflow-hidden bg-background p-6">
      {/* Ambient Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[10%] w-[30%] h-[30%] bg-accent/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center animate-fade-in pt-16">
        {/* Avatar */}
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-110" />
          <div className="relative w-32 h-32 rounded-full border-2 border-primary/30 p-1 bg-background overflow-hidden">
            <img
              src={abhayHeadshot}
              alt="Abhay Prabhakar - Data Scientist"
              className="w-full h-full rounded-full object-cover object-top"
            />
          </div>
        </div>

        {/* Typography */}
        <div className="space-y-2 mb-8">
          <span className="text-primary font-semibold tracking-[0.2em] text-sm uppercase mb-4 block">
            Data Scientist
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight leading-[1.1]">
            Machine Learning <br className="hidden md:block" />
            <span className="text-muted-foreground">&</span> Analytics
          </h1>
          <h2 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent tracking-tight py-2">
            Generative AI
          </h2>
        </div>

        <p className="text-muted-foreground text-lg md:text-xl font-light max-w-xl leading-relaxed mb-12">
          Teaching machines to spot patterns humans miss.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
          <Button
            size="lg"
            onClick={() => onSectionChange("projects")}
            className="px-8 py-3.5 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-300"
          >
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => onSectionChange("contact")}
            className="px-8 py-3.5 bg-white/5 border-white/10 hover:bg-white/10 text-foreground font-medium rounded-full backdrop-blur-md transition-all duration-300"
          >
            Contact Me
          </Button>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-8">
          <a
            href="https://linkedin.com/in/abhay-prabhakar04"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/AbhayPrabhakar4100"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="mailto:abhay.prabhakar.93@gmail.com?subject=Portfolio%20Inquiry%20%E2%80%93%20Abhay%20Prabhakar&body=Hi%20Abhay,%20I%27d%20like%20to%20connect%20about..."
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
