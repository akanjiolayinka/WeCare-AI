import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";
import { 
  MapPin, 
  Navigation as NavigationIcon, 
  Phone, 
  Clock, 
  Star,
  Search,
  Filter
} from "lucide-react";

const ClinicsPage = () => {
  const clinics = [
    {
      id: 1,
      name: "Central Medical Center",
      type: "Hospital",
      distance: "0.8 km",
      rating: 4.8,
      address: "123 Main St, Downtown",
      phone: "+1 234 567 8900",
      hours: "24/7",
      services: ["Dermatology", "Emergency", "General Practice"]
    },
    {
      id: 2,
      name: "Skin Care Specialist Clinic",
      type: "Dermatology Clinic", 
      distance: "1.2 km",
      rating: 4.9,
      address: "456 Oak Ave, Medical District",
      phone: "+1 234 567 8901",
      hours: "8:00 AM - 6:00 PM",
      services: ["Dermatology", "Cosmetic", "Skin Surgery"]
    },
    {
      id: 3,
      name: "HealthPlus Pharmacy",
      type: "Pharmacy",
      distance: "0.5 km",
      rating: 4.6,
      address: "789 Pine St, City Center",
      phone: "+1 234 567 8902",
      hours: "7:00 AM - 10:00 PM",
      services: ["Prescription", "OTC Medications", "Health Consultation"]
    },
    {
      id: 4,
      name: "Family Health Clinic",
      type: "Clinic",
      distance: "2.1 km",
      rating: 4.7,
      address: "321 Elm St, Riverside",
      phone: "+1 234 567 8903",
      hours: "9:00 AM - 5:00 PM",
      services: ["General Practice", "Minor Surgery", "Health Screening"]
    },
    {
      id: 5,
      name: "Wellness Pharmacy & Clinic",
      type: "Pharmacy & Clinic",
      distance: "1.8 km",
      rating: 4.5,
      address: "654 Maple Dr, Northside",
      phone: "+1 234 567 8904",
      hours: "8:00 AM - 8:00 PM",
      services: ["Pharmacy", "Walk-in Clinic", "Vaccinations"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Hospital': return 'bg-destructive/10 text-destructive';
      case 'Dermatology Clinic': return 'bg-primary/10 text-primary';
      case 'Pharmacy': return 'bg-success/10 text-success';
      default: return 'bg-accent/10 text-accent';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container px-4 py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Nearby Clinics & Pharmacies</h1>
          <p className="text-muted-foreground">Find healthcare facilities near you</p>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input 
              placeholder="Search by name or address..." 
              className="pl-10"
            />
          </div>
          <Button variant="outline" className="sm:w-auto">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Map Placeholder */}
          <Card className="lg:col-span-1 p-6 h-[400px] flex items-center justify-center bg-muted/30">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Interactive Map</p>
              <p className="text-sm text-muted-foreground mt-2">
                Map integration coming soon
              </p>
            </div>
          </Card>

          {/* Clinics List */}
          <div className="lg:col-span-2 space-y-4">
            {clinics.map((clinic) => (
              <Card key={clinic.id} className="p-6 hover-lift">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-lg">{clinic.name}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${getTypeColor(clinic.type)}`}>
                          {clinic.type}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{clinic.distance}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 fill-current text-warning" />
                          <span>{clinic.rating}</span>
                        </div>
                      </div>
                    </div>
                    <Button size="sm" variant="professional">
                      <NavigationIcon className="h-4 w-4 mr-2" />
                      Directions
                    </Button>
                  </div>

                  {/* Details */}
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{clinic.address}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{clinic.phone}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                      <span>{clinic.hours}</span>
                    </div>
                  </div>

                  {/* Services */}
                  <div>
                    <p className="text-sm font-medium mb-2">Services:</p>
                    <div className="flex flex-wrap gap-2">
                      {clinic.services.map((service, index) => (
                        <span key={index} className="text-xs bg-muted px-2 py-1 rounded">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Emergency Notice */}
        <Card className="mt-8 p-6 border-destructive/20 bg-destructive/5">
          <div className="flex items-start space-x-3">
            <div className="w-8 h-8 bg-destructive rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold">!</span>
            </div>
            <div>
              <h3 className="font-semibold text-destructive mb-2">Emergency Notice</h3>
              <p className="text-sm text-muted-foreground">
                For urgent medical emergencies, call emergency services immediately. 
                This directory is for routine healthcare needs only.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ClinicsPage;