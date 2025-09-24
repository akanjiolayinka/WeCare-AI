import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { 
  Sun, 
  Droplets, 
  Utensils, 
  Moon, 
  Shield,
  RefreshCw,
  Clock,
  Heart
} from "lucide-react";

const TipsPage = () => {
  const tips = [
    {
      icon: Sun,
      category: "Sun Protection",
      title: "Use sunscreen daily to protect your skin",
      description: "Apply broad-spectrum SPF 30+ sunscreen 15-30 minutes before going outside, even on cloudy days.",
      time: "Daily"
    },
    {
      icon: Droplets,
      category: "Hydration",
      title: "Stay hydrated — your skin loves water",
      description: "Drink 8-10 glasses of water daily to maintain skin moisture and flush out toxins.",
      time: "All day"
    },
    {
      icon: Utensils,
      category: "Nutrition",
      title: "Eat foods rich in antioxidants",
      description: "Include berries, leafy greens, and nuts in your diet for healthy, glowing skin.",
      time: "With meals"
    },
    {
      icon: Moon,
      category: "Sleep Care",
      title: "Change pillowcases weekly to avoid acne",
      description: "Clean pillowcases reduce bacteria and oil buildup that can clog pores.",
      time: "Weekly"
    },
    {
      icon: Shield,
      category: "Skincare",
      title: "Use gentle, fragrance-free products",
      description: "Avoid harsh chemicals and fragrances that can irritate sensitive skin.",
      time: "Daily"
    },
    {
      icon: Droplets,
      category: "Cleansing",
      title: "Cleanse your face twice daily",
      description: "Use a mild cleanser morning and night to remove dirt, oil, and makeup.",
      time: "Morning & Night"
    }
  ];

  const todaysTip = {
    icon: Heart,
    title: "Moisturize immediately after showering",
    description: "Apply moisturizer to damp skin within 3 minutes of showering to lock in hydration and prevent dryness.",
    category: "Hydration"
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Skin Health Tips</h1>
          <p className="text-muted-foreground">Simple, science-backed advice for healthier skin</p>
        </div>

        {/* Today's Tip */}
        <Card className="p-6 mb-8 gradient-hero text-white">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-white/20 rounded-lg">
              <todaysTip.icon className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm bg-white/20 px-2 py-1 rounded-full">Today's Tip</span>
                <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Get New Tip
                </Button>
              </div>
              <h2 className="text-xl font-semibold mb-2">{todaysTip.title}</h2>
              <p className="text-white/90">{todaysTip.description}</p>
            </div>
          </div>
        </Card>

        {/* Tips Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tips.map((tip, index) => (
            <Card key={index} className="p-6 hover-lift">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <tip.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="h-3 w-3 mr-1" />
                    {tip.time}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <span className="text-xs bg-muted px-2 py-1 rounded-full">{tip.category}</span>
                  <h3 className="font-semibold">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{tip.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Categories */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-6">Browse by Category</h2>
          <div className="flex flex-wrap gap-3">
            {['Sun Protection', 'Hydration', 'Nutrition', 'Sleep Care', 'Skincare', 'Cleansing'].map((category) => (
              <Button key={category} variant="outline" size="sm">
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TipsPage;