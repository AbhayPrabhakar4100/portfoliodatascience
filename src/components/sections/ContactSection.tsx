import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github, 
  Send,
  CheckCircle 
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration
      const serviceID = 'service_dc3k9kn';
      const templateID = 'template_lidvu65';
      const publicKey = '2d6lgvybDL_fd15YH';
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'Abhay Prabhakar',
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "abhay.prabhakar.93@gmail.com",
      href: "mailto:abhay.prabhakar.93@gmail.com?subject=Portfolio%20Inquiry%20%E2%80%93%20Abhay%20Prabhakar&body=Hi%20Abhay,%20I%27d%20like%20to%20connect%20about...",
      color: "primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (404) 483-7749",
      href: "tel:+14044837749",
      color: "accent"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Atlanta, GA",
      href: "#",
      color: "primary"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/abhay-prabhakar04",
      color: "primary"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/AbhayPrabhakar4100",
      color: "accent"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16 animate-fade-in">
            Let's <span className="bg-primary-gradient bg-clip-text text-transparent">Connect</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-fade-in-left">
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on innovative projects, 
                or share insights about data science and AI. Whether you're looking for expertise in 
                fraud analytics, generative AI, or scalable ML solutions, let's connect!
              </p>

              {/* Contact Information Cards */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <Card 
                      key={index} 
                      className="bg-card-gradient border-border shadow-card hover:shadow-primary transition-all duration-300 hover:scale-105"
                    >
                      <CardContent className="p-4">
                        <a 
                          href={contact.href}
                          className="flex items-center space-x-4 group"
                        >
                          <div className={`p-3 bg-${contact.color}/20 rounded-lg group-hover:bg-${contact.color}/30 transition-colors`}>
                            <IconComponent className={`w-5 h-5 text-${contact.color}`} />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">{contact.label}</p>
                            <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {contact.value}
                            </p>
                          </div>
                        </a>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-4 bg-card-gradient rounded-lg border border-border shadow-card hover:shadow-${social.color} transition-all duration-300 hover:scale-110 group`}
                    >
                      <IconComponent className={`w-6 h-6 text-${social.color} group-hover:text-${social.color}-glow transition-colors`} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-fade-in-right">
              <Card className="bg-card-gradient border-border shadow-card hover:shadow-accent transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center space-x-2">
                    <Send className="w-6 h-6 text-primary" />
                    <span>Send a Message</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="bg-input border-border focus:border-primary transition-colors"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="bg-input border-border focus:border-primary transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="bg-input border-border focus:border-primary transition-colors min-h-[120px]"
                        placeholder="Tell me about your project or how I can help..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary-gradient hover:shadow-glow transition-all duration-300 hover:scale-105"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center space-x-2">
                          <div className="animate-spin rounded-full h-4 w-4 border-2 border-background border-t-transparent" />
                          <span>Sending...</span>
                        </div>
                      ) : (
                        <div className="flex items-center space-x-2">
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Response Time Notice */}
              <Card className="mt-6 bg-primary/10 border-primary/20">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                    <div className="text-sm">
                      <p className="font-semibold text-primary">Quick Response Guaranteed</p>
                      <p className="text-muted-foreground">I typically respond within 24 hours during business days.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;