import Header from "@/components/Header";
import ScanInterface from "@/components/ScanInterface";

const ScanPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-8">
        <ScanInterface />
      </main>
    </div>
  );
};

export default ScanPage;