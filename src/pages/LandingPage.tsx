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
  Star,
  Sparkles,
  AlertTriangle,
  Camera,
  Smartphone,
  Activity,
  Heart,
  Lock
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "motion/react";
import heroImage from "@/assets/hero-medical.jpg";

const LandingPage = () => {
  const navigate = useNavigate();
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

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

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container px-4 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
            <span className="font-bold text-xl">WeCare AI</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('how-it-works')} className="text-sm font-medium hover:text-primary transition-colors">
              How it works
            </button>
            <button onClick={() => scrollToSection('features')} className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection('tips')} className="text-sm font-medium hover:text-primary transition-colors">
              Tips
            </button>
            <button onClick={() => setIsAboutOpen(true)} className="text-sm font-medium hover:text-primary transition-colors">
              About
            </button>
          </div>

          <div className="flex items-center space-x-4">
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
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
        <div className="container px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8 relative z-10 text-center lg:text-left"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
               <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                  Your Skin Health, <br/>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                    Demystified.
                  </span>
               </h1>
               <p className="text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
                 Instant analysis, personalized guidance, and peace of mind. 
                 Join thousands using WeCare AI for proactive skin care.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button size="lg" className="rounded-full px-8 h-12 text-lg shadow-lg hover:shadow-xl transition-all" onClick={() => navigate('/signup')}>
                    Start Free Scan
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
               <motion.div 
                 className="flex justify-center lg:justify-start items-center gap-6 text-sm text-muted-foreground pt-4"
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 0.4 }}
               >
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-primary" />
                    <span>Private & Secure</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Activity className="h-4 w-4 text-primary" />
                    <span>Clinically Verified AI</span>
                  </div>
               </motion.div>
            </motion.div>
            
            <motion.div 
              className="relative lg:h-[600px] w-full hidden lg:block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
               {/* Abstract decorative blobs */}
               <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-12 translate-x-12"></div>
               <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl translate-y-12 -translate-x-12"></div>
               
               <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-background h-full transform rotate-1 hover:rotate-0 transition-transform duration-500">
                  <img src={heroImage} alt="App Interface" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                     <div className="text-white">
                        <div className="flex items-center gap-1 mb-2">
                           {[1,2,3,4,5].map((_, i) => (
                              <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                           ))}
                        </div>
                        <p className="font-medium text-lg leading-snug">"This app completely changed how I track my eczema. Incredibly accurate and easy to use!"</p>
                        <p className="text-sm opacity-80 mt-2 font-semibold">- Sarah J.</p>
                     </div>
                  </div>
               </div>
               
               {/* Floating card 1 */}
               <motion.div 
                 initial={{ y: 20, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.8, type: "spring" }}
               >
                 <Card className="absolute top-12 -left-12 p-4 shadow-xl animate-bounce duration-[3000ms] border-primary/20 z-20">
                    <div className="flex items-center gap-3">
                       <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                          <CheckCircle className="h-6 w-6 text-green-600" />
                       </div>
                       <div>
                          <p className="text-sm font-semibold">Analysis Complete</p>
                          <p className="text-xs text-muted-foreground">98% Accuracy</p>
                       </div>
                    </div>
                 </Card>
               </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-background">
        <div className="container px-4">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">How WeCare Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Three simple steps to better skin health understanding.</p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-12 relative"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
             {/* Connecting lines for desktop */}
             <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent border-t border-dashed border-primary/30 z-0"></div>
             
             {[
               { icon: Camera, title: "1. Snap a Photo", desc: "Take a clear picture of the skin concern using your phone." },
               { icon: Brain, title: "2. AI Analysis", desc: "Our advanced AI analyzes the image against medical databases." },
               { icon: MessageSquare, title: "3. Get Insights", desc: "Receive instant information and care recommendations." }
             ].map((step, i) => (
               <motion.div 
                 key={i} 
                 className="relative z-10 flex flex-col items-center text-center group"
                 variants={fadeInUp}
               >
                 <div className="w-24 h-24 rounded-2xl bg-card border shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                   <step.icon className="h-10 w-10 text-primary" />
                 </div>
                 <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                 <p className="text-muted-foreground max-w-xs">{step.desc}</p>
               </motion.div>
             ))}
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-muted/30">
        <div className="container px-4">
          <div className="text-center mb-16">
             <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary mb-4">
                Features
             </div>
             <motion.h2 
               className="text-3xl md:text-4xl font-bold mb-4"
               {...fadeInUp}
             >
               Everything you need
             </motion.h2>
             <motion.p 
               className="text-muted-foreground text-lg max-w-2xl mx-auto"
               {...fadeInUp}
             >
               We combine advanced technology with user-friendly design.
             </motion.p>
          </div>
          
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
             <motion.div variants={fadeInUp}><Card className="p-8 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-background h-full">
                <Brain className="h-10 w-10 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-3">Smart Analysis</h3>
                <p className="text-muted-foreground">Uses state-of-the-art computer vision to identify potential skin conditions with high accuracy.</p>
             </Card></motion.div>
             <motion.div variants={fadeInUp}><Card className="p-8 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-background h-full">
                <MessageSquare className="h-10 w-10 text-purple-600 mb-6" />
                <h3 className="text-xl font-bold mb-3">AI Assistant</h3>
                <p className="text-muted-foreground">Chat with our intelligent assistant to ask follow-up questions about your skin health.</p>
             </Card></motion.div>
             <motion.div variants={fadeInUp}><Card className="p-8 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-background h-full">
                <Globe className="h-10 w-10 text-blue-500 mb-6" />
                <h3 className="text-xl font-bold mb-3">Multi-Language</h3>
                <p className="text-muted-foreground">Full support for multiple languages including English, Yoruba, Hausa, and Igbo.</p>
             </Card></motion.div>
             <motion.div variants={fadeInUp}><Card className="p-8 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-background h-full">
                <Lock className="h-10 w-10 text-green-600 mb-6" />
                <h3 className="text-xl font-bold mb-3">Private & Secure</h3>
                <p className="text-muted-foreground">Your photos and data are encrypted and processed with strict privacy standards.</p>
             </Card></motion.div>
             <motion.div variants={fadeInUp}><Card className="p-8 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-background h-full">
                <Lightbulb className="h-10 w-10 text-amber-500 mb-6" />
                <h3 className="text-xl font-bold mb-3">Daily Tips</h3>
                <p className="text-muted-foreground">Get personalized daily tips to maintain healthy, glowing skin year-round.</p>
             </Card></motion.div>
             <motion.div variants={fadeInUp}><Card className="p-8 border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-background h-full">
                <Activity className="h-10 w-10 text-red-500 mb-6" />
                <h3 className="text-xl font-bold mb-3">Track Progress</h3>
                <p className="text-muted-foreground">Keep a history of your scans to monitor changes in your skin over time.</p>
             </Card></motion.div>
          </motion.div>
        </div>
      </section>

      {/* Skin Health Tips */}
      <section id="tips" className="py-24">
        <div className="container px-4">
          <motion.div 
             className="max-w-4xl mx-auto text-center mb-12"
             {...fadeInUp}
           >
            <h2 className="text-3xl font-bold mb-4">Daily Skin Health Tips</h2>
            <p className="text-muted-foreground">Expert advice to keep your skin looking its best every day.</p>
          </motion.div>
            <motion.div 
               className="grid md:grid-cols-3 gap-8 mb-12 max-w-5xl mx-auto"
               variants={staggerContainer}
               initial="hidden"
               whileInView="show"
               viewport={{ once: true }}
            >
              {tips.map((tip, index) => (
                <motion.div variants={fadeInUp} key={index}>
                  <Card className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-primary h-full">
                    <div className="flex flex-col items-start space-y-4">
                      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <CheckCircle className="h-5 w-5 text-primary" />
                      </div>
                      <p className="text-lg font-medium">{tip}</p>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
            <div className="text-center">
              <Button variant="outline" className="rounded-full" onClick={() => navigate('/tips')}>
                View All Tips
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
         {/* Decorative circles */}
         <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
         <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
         
         <div className="container px-4 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Ready to take control of your skin health?</h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
               Join thousands of users who trust WeCare AI for instant analysis and peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button size="lg" variant="secondary" className="text-primary font-bold text-lg h-14 px-8 shadow-lg hover:shadow-xl" onClick={() => navigate('/signup')}>
                  Get Started for Free
               </Button>
               <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 text-lg h-14 px-8" onClick={() => navigate('/login')}>
                  Sign In
               </Button>
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