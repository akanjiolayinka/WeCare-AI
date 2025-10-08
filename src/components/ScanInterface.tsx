import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

import { Label } from "@/components/ui/label";
import { 
  Camera, 
  Upload, 
  Volume2, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  Globe,
  Shield
} from "lucide-react";

const ScanInterface = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [language, setLanguage] = useState("en");
  const [result, setResult] = useState<any>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = () => {
    if (!selectedImage) return;
    
    setIsAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setResult({
        condition: "Acne Vulgaris",
        confidence: 92,
        urgency: "monitor",
        description: "Moderate acne vulgaris with comedones and inflammatory papules. Commonly affects adolescents and young adults.",
        nextSteps: "Continue gentle skincare routine. Consider topical retinoids. Consult dermatologist if condition persists.",
        riskLevel: "low"
      });
      setIsAnalyzing(false);
    }, 3000);
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case "urgent": return "urgent";
      case "monitor": return "warning";
      case "low": return "safe";
      default: return "secondary";
    }
  };

  const getUrgencyIcon = (urgency: string) => {
    switch (urgency) {
      case "urgent": return <AlertTriangle className="h-5 w-5" />;
      case "monitor": return <Clock className="h-5 w-5" />;
      case "low": return <CheckCircle className="h-5 w-5" />;
      default: return <CheckCircle className="h-5 w-5" />;
    }
  };

  return (
    <div className="container max-w-4xl mx-auto p-6 space-y-8">
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Upload Section */}
        <Card className="p-6 space-y-6 shadow-card">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold flex items-center">
              <Camera className="mr-2 h-5 w-5 text-primary" />
              Upload Photo
            </h2>
            
            {/* Upload Area */}
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center space-y-4">
              {selectedImage ? (
                <div className="space-y-4">
                  <img 
                    src={selectedImage} 
                    alt="Selected skin area" 
                    className="max-w-full h-48 object-cover mx-auto rounded-lg"
                  />
                  <Button 
                    variant="outline" 
                    onClick={() => setSelectedImage(null)}
                    size="sm"
                  >
                    Remove Image
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                    <Upload className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <p className="text-muted-foreground">
                    Drag and drop your image here, or click to browse
                  </p>
                </div>
              )}
            </div>

            {/* Upload Buttons */}
            <div className="flex gap-4">
              <div className="flex-1">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="file-upload"
                />
                <label htmlFor="file-upload" className="w-full">
                  <Button variant="outline" className="w-full" asChild>
                    <span>
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Photo
                    </span>
                  </Button>
                </label>
              </div>
              <Button variant="outline" className="flex-1">
                <Camera className="mr-2 h-4 w-4" />
                Take Photo
              </Button>
            </div>
          </div>

          {/* Settings */}
          <div className="space-y-4 border-t pt-6">
            <h3 className="font-semibold flex items-center">
              <Globe className="mr-2 h-4 w-4 text-secondary" />
              Settings
            </h3>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>Language</Label>
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="yo">Yoruba</SelectItem>
                    <SelectItem value="ha">Hausa</SelectItem>
                    <SelectItem value="ig">Igbo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Analyze Button */}
          <Button 
            variant="professional" 
            size="lg" 
            className="w-full shadow-medical"
            onClick={handleAnalyze}
            disabled={!selectedImage || isAnalyzing}
          >
            {isAnalyzing ? (
              <>
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                Analyzing...
              </>
            ) : (
              <>
                <Shield className="mr-2 h-4 w-4" />
                Analyze Skin Condition
              </>
            )}
          </Button>
        </Card>

        {/* Results Section */}
        <Card className="p-6 space-y-6 shadow-card">
          <h2 className="text-xl font-semibold flex items-center">
            <Shield className="mr-2 h-5 w-5 text-success" />
            Analysis Results
          </h2>

          {!result && !isAnalyzing && (
            <div className="text-center py-12 space-y-4">
              <div className="mx-auto w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                <Shield className="h-8 w-8 text-muted-foreground" />
              </div>
              <p className="text-muted-foreground">
                Upload an image to get started with AI analysis
              </p>
            </div>
          )}

          {isAnalyzing && (
            <div className="text-center py-12 space-y-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="text-muted-foreground">
                AI is analyzing your image...
              </p>
            </div>
          )}

          {result && (
            <div className="space-y-6 animate-fade-in">
              {/* Condition and Confidence */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{result.condition}</h3>
                <Badge 
                  variant={result.urgency === "urgent" ? "destructive" : result.urgency === "monitor" ? "warning" : "success"} 
                  className="flex items-center"
                >
                  {getUrgencyIcon(result.urgency)}
                  <span className="ml-1 capitalize">{result.urgency}</span>
                </Badge>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">Confidence:</span>
                  <div className="flex-1 bg-muted rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-500"
                      style={{ width: `${result.confidence}%` }}
                    />
                  </div>
                  <span className="text-sm font-medium">{result.confidence}%</span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">Description</h4>
                  <Button variant="ghost" size="sm">
                    <Volume2 className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {result.description}
                </p>
              </div>

              {/* Next Steps */}
              <div className="space-y-2">
                <h4 className="font-medium">Recommended Next Steps</h4>
                <p className="text-muted-foreground leading-relaxed">
                  {result.nextSteps}
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4">
                <Button variant="outline" size="sm" className="flex-1">
                  <Volume2 className="mr-2 h-4 w-4" />
                  Play Audio
                </Button>
                <Button variant="ghost" size="sm" className="flex-1">
                  Save to History
                </Button>
              </div>
            </div>
          )}
        </Card>
      </div>

      {/* Disclaimer */}
      <Card className="p-4 bg-orange-50 border-orange-200 dark:bg-orange-950/20 dark:border-orange-900">
        <p className="text-sm text-orange-800 dark:text-orange-200 text-center">
          <AlertTriangle className="inline h-4 w-4 mr-2" />
          WeCare AI is not a replacement for professional medical advice. Always consult a doctor for proper diagnosis and treatment.
        </p>
      </Card>
    </div>
  );
};

export default ScanInterface;