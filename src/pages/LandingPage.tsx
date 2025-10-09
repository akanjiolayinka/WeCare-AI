import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { 
  Brain, 
  MessageSquare, 
  Lightbulb, 
  ArrowRight,
  Shield,
  Globe,
  CheckCircle,
  Moon,
  Sun,
  Star,
  Sparkles,
  AlertTriangle
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LandingPage = () => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const features = [
    {
      icon: Brain,
      title: "AI Skin Scan",
      description: "Upload a photo, let AI analyze your skin."
    },
    {
      icon: MessageSquare,
      title: "AI Chat Assistant",
      description: "Ask questions, get simple and clear answers."
    },
    {
      icon: Lightbulb,
      title: "Daily Skin Tips",
      description: "Practical tips for healthier skin."
    }
  ];

  const tips = [
    "Stay hydrated — your skin loves water.",
    "Always wear sunscreen, even on cloudy days.",
    "Change pillowcases weekly to avoid acne buildup."
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <span className="font-bold text-xl">WeCare AI</span>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={toggleTheme}>
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" onClick={() => navigate('/login')}>
              Sign In
            </Button>
            <Button variant="professional" onClick={() => navigate('/signup')}>
              Get Started
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Your AI Assistant for <span className="text-primary">Skin Health</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Snap, Analyze, and Get Guidance on Skin Conditions Instantly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="professional" className="hover-lift" onClick={() => navigate('/signup')}>
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="hover-lift" onClick={() => navigate('/signup')}>
                Try Demo Scan
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Simple, Powerful, Secure</h2>
              <p className="text-muted-foreground text-lg">Everything you need for better skin health</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="p-6 text-center shadow-professional hover-lift">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skin Health Tips */}
      <section className="py-16">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Daily Skin Health Tips</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {tips.map((tip, index) => (
                <Card key={index} className="p-6 hover-lift">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-success mt-1 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{tip}</p>
                  </div>
                </Card>
              ))}
            </div>
            <Button variant="outline" onClick={() => navigate('/signup')}>
              See More Tips
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center items-center space-x-8 mb-8">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-success" />
                <span className="text-sm font-medium">HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">4 Languages</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t bg-card">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <button onClick={() => setIsAboutOpen(true)} className="hover:text-primary transition-colors">
                About
              </button>
              <button onClick={() => setIsPrivacyOpen(true)} className="hover:text-primary transition-colors">
                Privacy Policy
              </button>
              <span>Contact</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 WeCare AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* About Dialog */}
      <Dialog open={isAboutOpen} onOpenChange={setIsAboutOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-2">
              <Star className="h-6 w-6 text-primary" />
              About WeCare AI
            </DialogTitle>
            <DialogDescription className="text-base mt-4">
              WeCare AI is an intelligent health companion designed to make skin health management simple, personalized, and accessible for everyone.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-6 mt-4">
            <div>
              <p className="text-muted-foreground">
                Our mission is to empower individuals with smart tools that use Artificial Intelligence to detect, understand, and manage common skin concerns—helping users make informed decisions about their health before visiting a professional.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Globe className="h-5 w-5 text-primary" />
                Our Vision
              </h3>
              <p className="text-muted-foreground">
                To bridge the gap between technology and healthcare by offering AI-driven tools that promote early detection, preventive care, and better awareness of skin conditions globally.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-primary" />
                Our Features
              </h3>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <Brain className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">AI Skin Analyzer</p>
                    <p className="text-sm text-muted-foreground">Upload or capture a photo to receive instant insights about possible skin conditions.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MessageSquare className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">AI Health Chat</p>
                    <p className="text-sm text-muted-foreground">Ask personalized questions and receive evidence-based guidance in real time.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Lightbulb className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Daily Skin Tips</p>
                    <p className="text-sm text-muted-foreground">Get curated, research-backed advice to maintain healthy and glowing skin.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Globe className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Nearby Clinics</p>
                    <p className="text-sm text-muted-foreground">Find nearby pharmacies, hospitals, and dermatology clinics through integrated geolocation services.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Globe className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">Multi-Language Support</p>
                    <p className="text-sm text-muted-foreground">Communicate effortlessly in your preferred language.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-warning" />
                Disclaimer
              </h3>
              <p className="text-sm text-muted-foreground">
                WeCare AI is not a diagnostic tool and does not replace professional medical advice, diagnosis, or treatment. It serves as an assistive platform to provide preliminary guidance and promote skin health awareness. For medical concerns, always consult a qualified healthcare professional.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Privacy Policy Dialog */}
      <Dialog open={isPrivacyOpen} onOpenChange={setIsPrivacyOpen}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-2">
              <Shield className="h-6 w-6 text-primary" />
              Privacy Policy — WeCare AI
            </DialogTitle>
          </DialogHeader>
          
          <div className="space-y-6 mt-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">1. Introduction</h3>
              <p className="text-sm text-muted-foreground">
                At WeCare AI ("we," "our," "us"), your privacy is a top priority. This Privacy Policy explains how we collect, use, and protect your personal information when you use our services.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                By accessing or using WeCare AI, you agree to the terms outlined in this Privacy Policy.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">2. Information We Collect</h3>
              <p className="text-sm text-muted-foreground mb-3">
                We collect only the data necessary to provide a secure and efficient experience:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                <li><strong>Personal Information:</strong> Such as name, email address, and account credentials.</li>
                <li><strong>Uploaded Images:</strong> Photos submitted for AI skin analysis. These are processed securely and deleted automatically after analysis unless you choose to save them.</li>
                <li><strong>Usage Data:</strong> Information about app interactions, features accessed, and scan history.</li>
                <li><strong>Device and Location Data:</strong> Device type, browser version, and approximate location (used only for geolocation features like clinic suggestions).</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">3. How We Use Your Information</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Your data is used strictly to:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                <li>Deliver and improve core app functionalities.</li>
                <li>Provide personalized health insights and recommendations.</li>
                <li>Maintain your scan history for your reference.</li>
                <li>Enhance user experience and security.</li>
                <li>Communicate updates, technical notices, or support responses.</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-3 font-medium">
                WeCare AI does not sell, rent, or trade user information to third parties.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">4. Data Security</h3>
              <p className="text-sm text-muted-foreground mb-3">
                WeCare AI employs advanced encryption and secure data handling practices to protect user information.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                <li>All communications are transmitted over HTTPS.</li>
                <li>Uploaded images are stored temporarily and erased after processing.</li>
                <li>Saved user data is encrypted and accessible only by the account owner.</li>
                <li>We consistently monitor and update our systems to prevent unauthorized access or misuse.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">5. User Control and Rights</h3>
              <p className="text-sm text-muted-foreground mb-3">
                As a user, you maintain full control over your personal information. You may:
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground ml-4">
                <li>View, edit, or delete your account data at any time.</li>
                <li>Remove stored scan history.</li>
                <li>Request complete account deletion.</li>
                <li>Manage notification or email preferences.</li>
              </ul>
              <p className="text-sm text-muted-foreground mt-3">
                To exercise these rights, contact us at <a href="mailto:support@wecareai.health" className="text-primary hover:underline">support@wecareai.health</a>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">6. Third-Party Services</h3>
              <p className="text-sm text-muted-foreground mb-2">
                WeCare AI integrates certain third-party services (such as maps and AI models) to improve user experience. These services comply with global data privacy standards, including GDPR and CCPA.
              </p>
              <p className="text-sm text-muted-foreground">
                We ensure all third-party integrations adhere to strict security and ethical data handling standards.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">7. Children's Privacy</h3>
              <p className="text-sm text-muted-foreground mb-2">
                WeCare AI is intended for users aged 16 years and above.
                We do not knowingly collect or store personal data from minors. If a child has submitted personal information, please contact us immediately to remove it.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">8. Policy Updates</h3>
              <p className="text-sm text-muted-foreground mb-2">
                We may occasionally update this Privacy Policy to reflect improvements or legal requirements. Any significant updates will be communicated through the platform or email notification.
              </p>
              <p className="text-sm text-muted-foreground font-medium">
                Last Updated: October 2025
              </p>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg border">
              <h3 className="text-lg font-semibold mb-2">9. Contact Us</h3>
              <p className="text-sm text-muted-foreground mb-3">
                For questions, privacy concerns, or feedback, please contact us:
              </p>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>📧 <a href="mailto:support@wecareai.health" className="text-primary hover:underline">support@wecareai.health</a></p>
                <p>🌐 www.wecareai.health</p>
                <p>📍 Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default LandingPage;