"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ZoomIn, ZoomOut, Satellite, Map, RotateCcw } from "lucide-react";

interface MapViewControlsProps {
  mapInstance: google.maps.Map | null;
}

export const MapViewControls = ({ mapInstance }: MapViewControlsProps) => {
  const handleZoomIn = () => {
    if (mapInstance) {
      const currentZoom = mapInstance.getZoom() || 12;
      const newZoom = Math.min(currentZoom + 1, 16); // Max zoom 16
      mapInstance.setZoom(newZoom);
    }
  };

  const handleZoomOut = () => {
    if (mapInstance) {
      const currentZoom = mapInstance.getZoom() || 12;
      const newZoom = Math.max(currentZoom - 1, 9); // Min zoom 9
      mapInstance.setZoom(newZoom);
    }
  };

  const toggleSatelliteView = () => {
    if (mapInstance) {
      const currentType = mapInstance.getMapTypeId();
      if (currentType === 'hybrid') {
        mapInstance.setMapTypeId('roadmap');
      } else {
        mapInstance.setMapTypeId('hybrid');
      }
    }
  };

  const resetView = () => {
    if (mapInstance) {
      mapInstance.setCenter({ lat: 18.216667, lng: 42.508333 });
      mapInstance.setZoom(12);
    }
  };

  return (
    <Card className="absolute top-20 right-4 z-10 p-2">
      <div className="flex flex-col gap-2">
        <Button
          variant="outline"
          size="sm"
          onClick={handleZoomIn}
          className="h-8 w-8 p-0"
          title="Zoom In"
        >
          <ZoomIn className="h-4 w-4" />
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={handleZoomOut}
          className="h-8 w-8 p-0"
          title="Zoom Out"
        >
          <ZoomOut className="h-4 w-4" />
        </Button>
        
        <div className="w-full h-px bg-border my-1" />
        
        <Button
          variant="outline"
          size="sm"
          onClick={toggleSatelliteView}
          className="h-8 w-8 p-0"
          title="Toggle Satellite View"
        >
          <Satellite className="h-4 w-4" />
        </Button>
        
        <Button
          variant="outline"
          size="sm"
          onClick={resetView}
          className="h-8 w-8 p-0"
          title="Reset View"
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
}; 