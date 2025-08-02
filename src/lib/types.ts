export interface Parcel {
  id: string;
  name: string;
  position: {
    lat: number;
    lng: number;
  };
  type: 'Tourism' | 'Agriculture';
  score: number; // Visitor density score from telecom data
  viability: 'Excellent' | 'Good' | 'Fair' | 'Poor';
  description: string;
  investment: string;
  
  // Investment success metrics
  visitorDensity: string; // Daily visitor count from telecom data
  investmentSuccess: string; // Predicted ROI percentage
  riskLevel: 'Low' | 'Medium' | 'High';
  timeToROI: string; // Expected time to return on investment
  marketDemand: 'Very High' | 'High' | 'Medium' | 'Low';
}
