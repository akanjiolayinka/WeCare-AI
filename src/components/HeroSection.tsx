import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Camera, Smartphone, Shield, Globe } from "lucide-react";
import heroImage from "@/assets/hero-medical.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="AI-powered skin health detection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                AI-powered{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  skin health
                </span>{" "}
                assistant
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Get instant, accurate skin condition analysis for everyone, everywhere. 
                Early detection saves lives.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="medical" className="shadow-medical hover-lift">
                <Camera className="mr-2 h-5 w-5" />
                Start Skin Scan
              </Button>
              <Button size="lg" variant="outline" className="hover-lift">
                Learn More
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-8">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-success" />
                <span className="text-sm text-muted-foreground">HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-primary" />
                <span className="text-sm text-muted-foreground">4 Languages</span>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="space-y-6 animate-slide-up">
            <Card className="p-6 shadow-card hover-lift gradient-card border-0">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Camera className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Instant Analysis</h3>
                  <p className="text-muted-foreground">
                    Upload or snap a photo for immediate AI-powered skin condition detection
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card hover-lift gradient-card border-0">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-secondary/10">
                  <Smartphone className="h-6 w-6 text-secondary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Multi-Language Support</h3>
                  <p className="text-muted-foreground">
                    Get results in English, Yoruba, Hausa, or Igbo with voice playback
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 shadow-card hover-lift gradient-card border-0">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-success/10">
                  <Shield className="h-6 w-6 text-success" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Secure & Private</h3>
                  <p className="text-muted-foreground">
                    Your health data is encrypted and stored with hospital-grade security
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;