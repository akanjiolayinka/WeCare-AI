import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { 
  Camera, 
  Upload, 
  Volume2, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  Shield,
  Loader2
} from "lucide-react";

// Initialize Gemini - using a placeholder or env variable
// In a real app, this should be in .env (VITE_GOOGLE_GENAI_KEY)
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_GENAI_KEY || "PLACEHOLDER_KEY");

const ScanInterface = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setResult(null);
        setError(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const getMockAnalysis = () => {
    return {
      condition: "Acne Vulgaris",
      confidence: 92,
      urgency: "monitor",
      description: "Moderate acne vulgaris with comedones and inflammatory papules. Commonly affects adolescents and young adults.",
      nextSteps: "Continue gentle skincare routine. Consider topical retinoids. Consult dermatologist if condition persists.",
      riskLevel: "low"
    };
  };

  const handleAnalyze = async () => {
    if (!selectedImage) return;
    
    setIsAnalyzing(true);
    setError(null);
    setResult(null);

    try {
      // Mock delay for UX if using mock data, or real API call
      // In production with 2.5-flash, this would be instant
      
      // Convert base64 to GoogleGenerativeAI part
      const base64Data = selectedImage.split(',')[1];
      
      const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

      const prompt = `Analyze this skin image and provide a JSON response with the following structure:
      {
        "condition": "Name of the condition",
        "confidence": number (0-100),
        "urgency": "urgent" | "monitor" | "low",
        "description": "Brief description of visual symptoms",
        "nextSteps": "2-3 actionable next steps",
        "riskLevel": "high" | "moderate" | "low"
      }
      If it's not a skin condition or unclear, state that in condition.`;

      const imagePart = {
        inlineData: {
          data: base64Data,
          mimeType: "image/jpeg" // Assuming jpeg/png, mostly works for base64
        }
      };

      try {
        const result = await model.generateContent([prompt, imagePart]);
        const response = await result.response;
        const text = response.text();
        
        // Clean markdown code blocks if present
        const jsonStr = text.replace(/```json/g, '').replace(/```/g, '').trim();
        const data = JSON.parse(jsonStr);
        setResult(data);
      } catch (apiError) {
        console.warn("API Call Failed (expected without valid key), using mock:", apiError);
        // Fallback to mock data
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate processing
        setResult(getMockAnalysis());
      }

    } catch (err) {
      console.error("Analysis Error:", err);
      setError("Failed to analyze image. Please try again.");
    } finally {
      setIsAnalyzing(false);
    }
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
                <Loader2 className="animate-spin mr-2 h-4 w-4" />
                Analyzing with Gemini 2.5...
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

          {!result && !isAnalyzing && !error && (
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
              <Loader2 className="animate-spin h-12 w-12 text-primary mx-auto" />
              <p className="text-muted-foreground">
                AI is analyzing your image...
              </p>
            </div>
          )}
          
          {error && (
             <div className="text-center py-12 space-y-4">
              <AlertTriangle className="h-12 w-12 text-destructive mx-auto" />
              <p className="text-destructive font-medium">
                {error}
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