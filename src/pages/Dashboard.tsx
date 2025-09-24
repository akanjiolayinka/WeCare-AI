import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { useNavigate } from "react-router-dom";
import { 
  Camera, 
  MessageSquare, 
  Lightbulb, 
  MapPin, 
  ArrowRight,
  Activity,
  Calendar,
  TrendingUp
} from "lucide-react";

const Dashboard = () => {
  const navigate = useNavigate();

  const quickActions = [
    {
      icon: Camera,
      title: "Start New Scan",
      description: "Upload or take a photo to analyze.",
      action: () => navigate('/scan'),
      color: "bg-primary"
    },
    {
      icon: MessageSquare,
      title: "Ask AI Assistant",
      description: "Chat with AI about your skin health.",
      action: () => navigate('/chat'),
      color: "bg-accent"
    },
    {
      icon: Lightbulb,
      title: "Skin Health Tips",
      description: "Daily and personalized tips.",
      action: () => navigate('/tips'),
      color: "bg-success"
    },
    {
      icon: MapPin,
      title: "Nearby Clinics",
      description: "Find pharmacies and hospitals near you.",
      action: () => navigate('/clinics'),
      color: "bg-warning"
    }
  ];

  const recentActivity = [
    {
      type: "scan",
      title: "Facial acne analysis",
      date: "2 hours ago",
      status: "Low concern"
    },
    {
      type: "tip",
      title: "Daily sunscreen reminder",
      date: "1 day ago",
      status: "Completed"
    },
    {
      type: "chat",
      title: "Asked about moisturizers",
      date: "3 days ago",
      status: "Answered"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container px-4 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, John 👋</h1>
          <p className="text-muted-foreground">Ready to take care of your skin health today?</p>
        </div>

        {/* Quick Actions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {quickActions.map((action, index) => (
            <Card key={index} className="p-6 hover-lift cursor-pointer" onClick={action.action}>
              <div className="space-y-4">
                <div className={`w-12 h-12 rounded-lg ${action.color} flex items-center justify-center`}>
                  <action.icon className="h-6 w-6 text-white" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold">{action.title}</h3>
                  <p className="text-sm text-muted-foreground">{action.description}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <Card className="lg:col-span-2 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Recent Activity</h2>
              <Button variant="ghost" size="sm" onClick={() => navigate('/history')}>
                View All
              </Button>
            </div>
            <div className="space-y-4">
              {recentActivity.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-muted/30">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 rounded-full bg-primary"></div>
                    <div>
                      <p className="font-medium text-sm">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.date}</p>
                    </div>
                  </div>
                  <span className="text-xs bg-success/10 text-success px-2 py-1 rounded-full">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          {/* Quick Stats */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-center space-x-3">
                <Activity className="h-8 w-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">12</p>
                  <p className="text-sm text-muted-foreground">Total Scans</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center space-x-3">
                <Calendar className="h-8 w-8 text-accent" />
                <div>
                  <p className="text-2xl font-bold">5</p>
                  <p className="text-sm text-muted-foreground">Days Streak</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-8 w-8 text-success" />
                <div>
                  <p className="text-2xl font-bold">98%</p>
                  <p className="text-sm text-muted-foreground">Health Score</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;