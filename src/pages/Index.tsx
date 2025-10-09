import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { 
  Shield, 
  Globe, 
  Clock, 
  Users, 
  Brain,
  Star,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms trained on thousands of dermatological cases for accurate diagnosis.",
      color: "text-primary"
    },
    {
      icon: Globe,
      title: "Multi-Language Support",
      description: "Get results in English, Yoruba, Hausa, or Igbo with natural voice playback in your preferred language.",
      color: "text-secondary"
    },
    {
      icon: Clock,
      title: "Instant Results",
      description: "Receive detailed analysis within seconds. No waiting rooms, no appointments needed.",
      color: "text-success"
    },
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "Your health data is encrypted with hospital-grade security. Complete privacy guaranteed.",
      color: "text-warning"
    }
  ];

  const stats = [
    { value: "98%", label: "Accuracy Rate" },
    { value: "4", label: "Languages" },
    { value: "24/7", label: "Available" },
    { value: "HIPAA", label: "Compliant" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="mb-4">
              Trusted Healthcare Technology
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Why Choose WeCare AI?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge AI technology meets compassionate healthcare to provide instant, 
              accurate skin condition analysis for everyone, everywhere.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 shadow-card hover-lift gradient-card border-0 animate-fade-in">
                <div className="space-y-4">
                  <div className={`p-3 rounded-lg bg-background/50 w-fit ${feature.color}`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 gradient-hero">
        <div className="container px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white animate-scale-in">
                <div className="text-3xl sm:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-white/80 text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get professional-grade skin analysis in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Upload Photo",
                description: "Take or upload a clear photo of the skin area you're concerned about"
              },
              {
                step: "2", 
                title: "AI Analysis",
                description: "Our advanced AI analyzes your image using dermatological expertise"
              },
              {
                step: "3",
                title: "Get Results",
                description: "Receive detailed analysis with next steps in your preferred language"
              }
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4 animate-slide-up">
                <div className="mx-auto w-16 h-16 rounded-full gradient-hero flex items-center justify-center text-white font-bold text-xl shadow-medical">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
                {index < 2 && (
                  <ArrowRight className="hidden md:block absolute top-8 -right-4 h-6 w-6 text-muted-foreground" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4">
          <Card className="p-12 text-center shadow-medical gradient-card border-0 max-w-2xl mx-auto">
            <div className="space-y-6">
              <div className="flex justify-center">
                <Star className="h-16 w-16 text-primary" />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">
                  Ready to Take Control of Your Skin Health?
                </h2>
                <p className="text-muted-foreground text-lg">
                  Join thousands of users who trust WeCare AI for reliable skin condition analysis. 
                  Early detection saves lives.
                </p>
              </div>
              <Button 
                size="lg" 
                variant="professional" 
                className="shadow-medical hover-lift"
                onClick={() => navigate('/scan')}
              >
                Start Your Free Scan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-muted-foreground">
                No registration required • Results in seconds • HIPAA compliant
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t">
        <div className="container px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="h-8 w-8 rounded-lg gradient-hero flex items-center justify-center">
                  <span className="text-white font-bold text-sm">W</span>
                </div>
                <span className="font-bold text-lg">WeCare AI</span>
              </div>
              <p className="text-muted-foreground text-sm">
                AI-powered skin health assistant for everyone, everywhere.
              </p>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold">Product</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Skin Analysis</div>
                <div>Multi-Language</div>
                <div>Voice Playback</div>
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold">Company</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>About Us</div>
                <div>Privacy Policy</div>
                <div>Terms of Service</div>
              </div>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-semibold">Support</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div>Help Center</div>
                <div>Contact Us</div>
                <div>Medical Disclaimer</div>
              </div>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>
              © 2024 WeCare AI. All rights reserved. | 
              <strong className="text-orange-600 ml-1">
                Not a replacement for professional medical advice.
              </strong>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
