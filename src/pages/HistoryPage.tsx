import { useState } from "react";
import Header from "@/components/Header";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  Eye,
  Volume2,
  Download
} from "lucide-react";

const mockHistory = [
  {
    id: 1,
    date: "2024-01-15",
    time: "14:30",
    condition: "Acne Vulgaris",
    urgency: "monitor",
    confidence: 92,
    image: "/api/placeholder/150/150"
  },
  {
    id: 2,
    date: "2024-01-10",
    time: "09:15",
    condition: "Eczema",
    urgency: "low",
    confidence: 87,
    image: "/api/placeholder/150/150"
  },
  {
    id: 3,
    date: "2024-01-08",
    time: "16:45",
    condition: "Possible Melanoma",
    urgency: "urgent",
    confidence: 78,
    image: "/api/placeholder/150/150"
  }
];

const HistoryPage = () => {
  const [selectedScan, setSelectedScan] = useState<any>(null);

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "urgent": return "destructive";
      case "monitor": return "warning";
      case "low": return "success";
      default: return "secondary";
    }
  };

  const getUrgencyIcon = (urgency: string) => {
    switch (urgency) {
      case "urgent": return <AlertTriangle className="h-4 w-4" />;
      case "monitor": return <Clock className="h-4 w-4" />;
      case "low": return <CheckCircle className="h-4 w-4" />;
      default: return <CheckCircle className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container max-w-6xl mx-auto p-6">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">Scan History</h1>
            <p className="text-muted-foreground">
              View and manage your previous skin condition scans. All data is securely encrypted and HIPAA compliant.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* History List */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold">Recent Scans</h2>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Export All
                </Button>
              </div>

              {mockHistory.map((scan) => (
                <Card
                  key={scan.id}
                  className={`p-6 cursor-pointer transition-all hover-lift shadow-card ${
                    selectedScan?.id === scan.id ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => setSelectedScan(scan)}
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center">
                      <Eye className="h-6 w-6 text-muted-foreground" />
                    </div>
                    
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <h3 className="font-semibold">{scan.condition}</h3>
                        <Badge variant={getUrgencyColor(scan.urgency)} className="flex items-center">
                          {getUrgencyIcon(scan.urgency)}
                          <span className="ml-1 capitalize">{scan.urgency}</span>
                        </Badge>
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-3 w-3" />
                          {scan.date}
                        </div>
                        <div className="flex items-center">
                          <Clock className="mr-1 h-3 w-3" />
                          {scan.time}
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-muted-foreground">Confidence:</span>
                        <div className="flex-1 bg-muted rounded-full h-1.5 max-w-24">
                          <div 
                            className="bg-primary h-1.5 rounded-full"
                            style={{ width: `${scan.confidence}%` }}
                          />
                        </div>
                        <span className="text-xs font-medium">{scan.confidence}%</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}

              {mockHistory.length === 0 && (
                <Card className="p-12 text-center">
                  <div className="space-y-4">
                    <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                      <Calendar className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold">No scans yet</h3>
                      <p className="text-muted-foreground">
                        Start your first skin analysis to see your history here.
                      </p>
                    </div>
                    <Button variant="medical">
                      Start First Scan
                    </Button>
                  </div>
                </Card>
              )}
            </div>

            {/* Detailed View */}
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Scan Details</h2>
              
              {!selectedScan ? (
                <Card className="p-8 text-center">
                  <div className="space-y-4">
                    <div className="mx-auto w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                      <Eye className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <p className="text-muted-foreground">
                      Select a scan to view details
                    </p>
                  </div>
                </Card>
              ) : (
                <Card className="p-6 space-y-6 shadow-card">
                  <div className="space-y-4">
                    <div className="w-full h-40 bg-muted rounded-lg flex items-center justify-center">
                      <Eye className="h-12 w-12 text-muted-foreground" />
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">{selectedScan.condition}</h3>
                        <Badge variant={getUrgencyColor(selectedScan.urgency)} className="flex items-center">
                          {getUrgencyIcon(selectedScan.urgency)}
                          <span className="ml-1 capitalize">{selectedScan.urgency}</span>
                        </Badge>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{selectedScan.date} at {selectedScan.time}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-muted-foreground">Confidence:</span>
                          <div className="flex-1 bg-muted rounded-full h-2">
                            <div 
                              className="bg-primary h-2 rounded-full"
                              style={{ width: `${selectedScan.confidence}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium">{selectedScan.confidence}%</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3 pt-4 border-t">
                      <h4 className="font-medium">Analysis Summary</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        This scan detected {selectedScan.condition} with {selectedScan.confidence}% confidence. 
                        The condition requires {selectedScan.urgency === "urgent" ? "immediate medical attention" : 
                        selectedScan.urgency === "monitor" ? "monitoring and care" : "minimal concern"}.
                      </p>
                    </div>

                    <div className="flex gap-2 pt-4">
                      <Button variant="outline" size="sm" className="flex-1">
                        <Volume2 className="mr-2 h-3 w-3" />
                        Play Audio
                      </Button>
                      <Button variant="ghost" size="sm" className="flex-1">
                        <Download className="mr-2 h-3 w-3" />
                        Export
                      </Button>
                    </div>
                  </div>
                </Card>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HistoryPage;