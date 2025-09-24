import Navigation from "@/components/Navigation";
import ScanInterface from "@/components/ScanInterface";

const ScanPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container px-4 py-8">
        <div className="text-center space-y-4 mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold">
            AI Skin Analysis
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Upload or take a photo for instant, professional-grade skin condition analysis
          </p>
        </div>
        <ScanInterface />
      </div>
    </div>
  );
};

export default ScanPage;