import { useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Camera, 
  MessageSquare, 
  Lightbulb, 
  MapPin, 
  Activity, 
  Bell,
  ArrowRight,
  Calendar
} from "lucide-react";
import { motion } from "motion/react";
import { 
  Area, 
  AreaChart, 
  CartesianGrid, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
} from "recharts";

const data = [
  { name: "Mon", score: 65 },
  { name: "Tue", score: 70 },
  { name: "Wed", score: 68 },
  { name: "Thu", score: 75 },
  { name: "Fri", score: 82 },
  { name: "Sat", score: 80 },
  { name: "Sun", score: 88 },
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navigation />
      
      <main className="flex-1 container mx-auto px-4 py-6 md:py-8 space-y-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-1"
          >
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground text-lg">
              Welcome back, John. Your skin health is looking great today!
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
             <Button variant="outline" size="icon" className="rounded-full">
               <Bell className="w-5 h-5" />
             </Button>
             <Button onClick={() => navigate('/scan')} className="rounded-full">
               <Camera className="mr-2 w-4 h-4" /> New Scan
             </Button>
          </motion.div>
        </div>

        {/* Top Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Wellness Score Chart */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -5 }}
            className="md:col-span-2"
          >
            <Card className="h-full border-primary/20 bg-gradient-to-br from-card to-primary/5 shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5 text-primary" /> 
                  Wellness Trend
                </CardTitle>
                <CardDescription>Your skin health score over the last 7 days</CardDescription>
              </CardHeader>
              <CardContent className="h-[200px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={data}>
                    <defs>
                      <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--border))" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 12 }} 
                      dy={10}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'hsl(var(--card))', 
                        borderColor: 'hsl(var(--border))', 
                        borderRadius: '8px' 
                      }} 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="score" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth={2}
                      fillOpacity={1} 
                      fill="url(#colorScore)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </motion.div>

          {/* Quick Stats / Streak */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="grid grid-rows-2 gap-6"
          >
            <Card className="hover:border-primary/50 transition-colors shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Current Streak</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-primary">12</span>
                  <span className="text-muted-foreground">days</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Keep it up! Consistent care gives best results.</p>
              </CardContent>
            </Card>
             <Card className="hover:border-primary/50 transition-colors shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">Next Routine</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-1">
                   <Calendar className="w-5 h-5 text-primary" />
                   <span className="text-lg font-semibold">Tonight, 9:00 PM</span>
                </div>
                <p className="text-xs text-muted-foreground">Nighttime moisturizer & cleansing</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             { title: "Smart Scan", icon: Camera, path: "/scan", color: "text-blue-500", bg: "bg-blue-500/10", desc: "Analyze skin health instantly" },
             { title: "AI Assistant", icon: MessageSquare, path: "/chat", color: "text-purple-500", bg: "bg-purple-500/10", desc: "Chat with your skin expert" },
             { title: "Daily Tips", icon: Lightbulb, path: "/tips", color: "text-yellow-500", bg: "bg-yellow-500/10", desc: "Personalized care advice" },
             { title: "Find Clinics", icon: MapPin, path: "/clinics", color: "text-green-500", bg: "bg-green-500/10", desc: "Locate specialists nearby" },
           ].map((feature, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 + (idx * 0.1) }}
               whileHover={{ scale: 1.02 }}
               whileTap={{ scale: 0.98 }}
             >
               <Card 
                 className="cursor-pointer h-full hover:shadow-lg transition-all border-none bg-secondary/30"
                 onClick={() => navigate(feature.path)}
               >
                 <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                   <div className={`w-14 h-14 rounded-full ${feature.bg} flex items-center justify-center`}>
                     <feature.icon className={`w-7 h-7 ${feature.color}`} />
                   </div>
                   <div>
                     <h3 className="font-semibold text-lg">{feature.title}</h3>
                     <p className="text-sm text-muted-foreground">{feature.desc}</p>
                   </div>
                 </CardContent>
               </Card>
             </motion.div>
           ))}
        </div>

        {/* Recent Activity Section */}
         <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.4 }}
               className="md:col-span-2"
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Recent Activity</h2>
                <Button variant="link" className="text-primary hover:no-underline px-0">View All</Button>
              </div>
              <div className="space-y-4">
                 {[
                   { title: "Face Scan Analysis", time: "2 hours ago", icon: Camera, status: "Complete" },
                   { title: "Completed Night Routine", time: "Yesterday, 9:30 PM", icon: Activity, status: "Success" },
                   { title: "AI Consultation", time: "2 days ago", icon: MessageSquare, status: "Saved" },
                 ].map((item, i) => (
                   <Card key={i} className="flex items-center p-4 gap-4 hover:bg-secondary/50 transition-colors cursor-pointer">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.time}</p>
                      </div>
                      <Button size="icon" variant="ghost">
                        <ArrowRight className="w-4 h-4" />
                      </Button>
                   </Card>
                 ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
               <h2 className="text-xl font-semibold mb-4">Daily Insight</h2>
               <Card className="bg-primary text-primary-foreground overflow-hidden relative">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
                 <CardContent className="p-6 relative z-10">
                   <div className="flex items-start justify-between mb-4">
                     <Lightbulb className="w-6 h-6 text-yellow-300 fill-yellow-300" />
                     <span className="text-xs font-medium bg-primary-foreground/20 px-2 py-1 rounded-full">Top Tip</span>
                   </div>
                   <h3 className="font-bold text-lg mb-2">Hydrate Inside & Out</h3>
                   <p className="text-primary-foreground/90 text-sm mb-4">
                     Drinking water is just as important as your moisturizer. Aim for 8 glasses today to help your skin glow!
                   </p>
                   <Button variant="secondary" className="w-full text-primary font-semibold hover:bg-white" onClick={() => navigate('/tips')}>
                     Read More Tips
                   </Button>
                 </CardContent>
               </Card>
            </motion.div>
         </div>
      </main>
    </div>
  );
}