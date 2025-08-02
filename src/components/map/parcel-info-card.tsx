"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Parcel } from "@/lib/types";

interface ParcelInfoCardProps {
  parcel: Parcel;
}

export const ParcelInfoCard = ({ parcel }: ParcelInfoCardProps) => {
  const getViabilityColor = (viability: string) => {
    switch (viability) {
      case 'Excellent':
        return 'bg-green-500';
      case 'Good':
        return 'bg-blue-500';
      case 'Fair':
        return 'bg-yellow-500';
      case 'Poor':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low':
        return 'bg-green-100 text-green-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'High':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getDemandColor = (demand: string) => {
    switch (demand) {
      case 'Very High':
        return 'bg-purple-100 text-purple-800';
      case 'High':
        return 'bg-blue-100 text-blue-800';
      case 'Medium':
        return 'bg-orange-100 text-orange-800';
      case 'Low':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    return type === 'Tourism' ? '🏨' : '🌾';
  };

  return (
    <Card className="w-96">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{parcel.name}</CardTitle>
          <span className="text-2xl">{getTypeIcon(parcel.type)}</span>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="capitalize">
            {parcel.type}
          </Badge>
          <Badge className={`${getViabilityColor(parcel.viability)} text-white`}>
            {parcel.viability}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{parcel.description}</p>
        
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <p className="text-xs font-medium text-muted-foreground">Investment</p>
            <p className="text-sm font-semibold">{parcel.investment}</p>
          </div>
          <div className="space-y-1">
            <p className="text-xs font-medium text-muted-foreground">Visitor Score</p>
            <p className="text-sm font-semibold">{parcel.score}/100</p>
          </div>
        </div>

        <div className="space-y-3 pt-2 border-t">
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <p className="text-xs font-medium text-muted-foreground">Daily Visitors</p>
              <p className="text-sm font-semibold text-blue-600">{parcel.visitorDensity}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-medium text-muted-foreground">Expected ROI</p>
              <p className="text-sm font-semibold text-green-600">{parcel.investmentSuccess}</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <p className="text-xs font-medium text-muted-foreground">Time to ROI</p>
              <p className="text-sm font-semibold">{parcel.timeToROI}</p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-medium text-muted-foreground">Risk Level</p>
              <Badge className={getRiskColor(parcel.riskLevel)}>{parcel.riskLevel}</Badge>
            </div>
          </div>

          <div className="space-y-1">
            <p className="text-xs font-medium text-muted-foreground">Market Demand</p>
            <Badge className={getDemandColor(parcel.marketDemand)}>{parcel.marketDemand}</Badge>
          </div>
        </div>

        <div className="pt-2 border-t">
          <p className="text-xs text-muted-foreground">
            📍 {parcel.position.lat.toFixed(4)}, {parcel.position.lng.toFixed(4)}
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            📊 Data from telecom partner visitor tracking
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
