import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { 
  Loader2,
  RefreshCw,
  Sparkles,
  Sun,
  Droplets,
  Moon
} from "lucide-react";

const TipsPage = () => {
  const [dailyTip, setDailyTip] = useState<{title: string, description: string} | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchTip = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://api.adviceslip.com/advice');
      const data = await res.json();
      setDailyTip({
        title: "Daily Wisdom",
        description: data.slip.advice
      });
    } catch (error) {
      console.error("Failed to fetch tip:", error);
      setDailyTip({
        title: "Daily Tip",
        description: "Consistency is key. Small healthy habits today lead to significant results tomorrow."
      });
    } finally {
      setLoading(false);
    }
  };

  const sideTips = [
    {
      icon: Sun,
      title: "Morning Protection",
      description: "Apply SPF 30+ every morning, even on cloudy days."
    },
    {
      icon: Droplets,
      title: "Hydration",
      description: "Keep your skin hydrated by drinking water throughout the day."
    },
    {
      icon: Moon,
      title: "Night Recovery",
      description: "Use a heavier moisturizer at night to support skin repair."
    }
  ];

  useEffect(() => {
    fetchTip();
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      
      <main className="flex-1 container py-12 px-4">
        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto items-start">
          
          <div className="lg:col-span-2 flex flex-col items-center justify-center text-center space-y-8 py-8 lg:py-20 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex items-center justify-center gap-2 text-primary mb-4">
              <Sparkles className="h-6 w-6" />
              <span className="text-sm font-medium uppercase tracking-wider">Tip of the Day</span>
            </div>

            {loading ? (
              <div className="flex flex-col items-center justify-center py-12 space-y-4">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
                <p className="text-muted-foreground animate-pulse">Finding the perfect tip for you...</p>
              </div>
            ) : (
              <div className="space-y-12">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight text-foreground">
                  "{dailyTip?.description}"
                </h1>
                
                <div className="flex flex-col items-center gap-4">
                  <div className="h-1.5 w-24 bg-primary rounded-full opacity-20" />
                </div>
              </div>
            )}

            <div className="pt-8">
              <Button 
                size="lg" 
                onClick={fetchTip}
                disabled={loading}
                className="rounded-full px-8 h-12 text-base shadow-lg hover:shadow-xl transition-all"
              >
                <RefreshCw className={`mr-2 h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
                New Tip
              </Button>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6 animate-in fade-in slide-in-from-right-4 duration-700 delay-200">
             <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <span className="text-sm font-medium uppercase tracking-wider">Quick Dailies</span>
             </div>
             {sideTips.map((tip, i) => (
                <Card key={i} className="p-6 hover:shadow-md transition-all cursor-default border-muted/50">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      <tip.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{tip.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{tip.description}</p>
                    </div>
                  </div>
                </Card>
             ))}
          </div>

        </div>
      </main>
    </div>
  );
};

export default TipsPage;