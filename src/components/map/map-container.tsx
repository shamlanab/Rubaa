"use client";

import { useState, useMemo, useEffect, useRef, useCallback } from "react";
import type { FC } from "react";
import { parcelData } from "@/lib/data";
import { MapControls } from "./map-controls";
import { MapViewControls } from "./map-view-controls";
import { ParcelInfoCard } from "./parcel-info-card";
import { Header } from "../layout/header";
import { Footer } from "../landing/footer";
import { GoogleMapsOverlay } from '@deck.gl/google-maps';
import { ScatterplotLayer } from '@deck.gl/layers';
import { HeatmapLayer } from '@deck.gl/aggregation-layers';
import { Loader } from '@googlemaps/js-api-loader';

const ASIR_CENTER = { lat: 18.216667, lng: 42.508333 };
const ASIR_BOUNDS = {
  north: 20.5,
  south: 17.8,
  west: 41.5,
  east: 43.5,
};

interface MapContainerProps {
  apiKey: string;
}

export const MapContainer: FC<MapContainerProps> = ({ apiKey }) => {
  const [selectedParcelId, setSelectedParcelId] = useState<string | null>(null);
  const [showTourism, setShowTourism] = useState(true);
  const [showAgriculture, setShowAgriculture] = useState(false);
  const [mapReady, setMapReady] = useState(false);
  const mapRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<GoogleMapsOverlay | null>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);

  const selectedParcel = useMemo(
    () => parcelData.find(p => p.id === selectedParcelId),
    [selectedParcelId]
  );

  // Filter data by type
  const tourismData = useMemo(() => 
    parcelData.filter(p => p.type === 'Tourism'), []
  );

  const agricultureData = useMemo(() => 
    parcelData.filter(p => p.type === 'Agriculture'), []
  );

  const handlePointClick = (info: any) => {
    if (info.object) {
      setSelectedParcelId(info.object.id);
    } else {
      setSelectedParcelId(null);
    }
  };

  // Create layers function that can be called with current state
  const createLayers = useCallback(() => {
    const layers = [];

    if (showTourism && tourismData.length > 0) {
      console.log('Creating tourism layers with', tourismData.length, 'points');
      
      // Tourism heatmap layer
      layers.push(
        new HeatmapLayer({
          id: 'tourism-heatmap',
          data: tourismData,
          getPosition: (d: any) => [d.position.lng, d.position.lat],
          getWeight: (d: any) => d.score,
          radiusPixels: 60,
          colorRange: [
            [1, 152, 189],       // Blue
            [73, 227, 206],      // Teal
            [216, 254, 181],     // Light green
            [254, 237, 177],     // Yellow
            [254, 173, 84],      // Orange
            [209, 55, 78]        // Red
          ],
          intensity: 1,
          threshold: 0.03,
          opacity: 0.8,
          pickable: false, // Heatmap layer not clickable
        })
      );

      // Tourism invisible scatterplot layer (for click detection)
      layers.push(
        new ScatterplotLayer({
          id: 'tourism-scatter',
          data: tourismData,
          pickable: true,
          opacity: 0.01, // Nearly invisible but clickable
          stroked: false,
          filled: true,
          radiusScale: 1,
          radiusMinPixels: 20, // Large click area
          radiusMaxPixels: 50,
          getPosition: (d: any) => [d.position.lng, d.position.lat],
          getRadius: 2000,
          getFillColor: [59, 130, 246, 1], // Blue with minimal opacity
          onClick: handlePointClick,
        })
      );
    }

    if (showAgriculture && agricultureData.length > 0) {
      console.log('Creating agriculture layers with', agricultureData.length, 'points');
      
      // Agriculture heatmap layer
      layers.push(
        new HeatmapLayer({
          id: 'agriculture-heatmap',
          data: agricultureData,
          getPosition: (d: any) => [d.position.lng, d.position.lat],
          getWeight: (d: any) => d.score,
          radiusPixels: 60,
          colorRange: [
            [76, 175, 80],       // Green
            [139, 195, 74],      // Light green
            [205, 220, 57],      // Lime
            [255, 235, 59],      // Yellow
            [255, 193, 7],       // Amber
            [255, 152, 0]        // Orange
          ],
          intensity: 1,
          threshold: 0.03,
          opacity: 0.8,
          pickable: false, // Heatmap layer not clickable
        })
      );

      // Agriculture invisible scatterplot layer (for click detection)
      layers.push(
        new ScatterplotLayer({
          id: 'agriculture-scatter',
          data: agricultureData,
          pickable: true,
          opacity: 0.01, // Nearly invisible but clickable
          stroked: false,
          filled: true,
          radiusScale: 1,
          radiusMinPixels: 20, // Large click area
          radiusMaxPixels: 50,
          getPosition: (d: any) => [d.position.lng, d.position.lat],
          getRadius: 2000,
          getFillColor: [16, 185, 129, 1], // Green with minimal opacity
          onClick: handlePointClick,
        })
      );
    }

    console.log('Total layers created:', layers.length);
    return layers;
  }, [showTourism, showAgriculture, tourismData, agricultureData]);

  // Initialize map and overlay
  useEffect(() => {
    if (!mapRef.current || !apiKey) {
      console.log('Map initialization skipped - mapRef or apiKey missing');
      return;
    }

    console.log('Starting map initialization...');
    const loader = new Loader({ apiKey });
    
    loader.importLibrary('maps').then(googlemaps => {
      console.log('Google Maps library loaded');
      const map = new googlemaps.Map(mapRef.current!, {
        center: ASIR_CENTER,
        zoom: 12, // More zoomed in for detailed view
        mapId: "rubaa-navigator-map",
        gestureHandling: 'cooperative',
        disableDefaultUI: true,
        mapTypeId: 'hybrid',
        restriction: {
          latLngBounds: ASIR_BOUNDS,
          strictBounds: true,
        },
        minZoom: 9,
        maxZoom: 16
      });

      mapInstanceRef.current = map;

      // Create overlay
      const overlay = new GoogleMapsOverlay({
        layers: []
      });

      overlay.setMap(map);
      overlayRef.current = overlay;

      // Initial layer creation
      const initialLayers = createLayers();
      overlay.setProps({ layers: initialLayers });

      // Set map as ready
      setMapReady(true);
      console.log('Map initialized successfully');
    }).catch(error => {
      console.error('Failed to load Google Maps:', error);
    });

    return () => {
      if (overlayRef.current) {
        overlayRef.current.setMap(null);
      }
      setMapReady(false);
    };
  }, [apiKey]);

  // Update layers when state changes
  useEffect(() => {
    if (overlayRef.current) {
      console.log('Updating layers - Tourism:', showTourism, 'Agriculture:', showAgriculture);
      const newLayers = createLayers();
      overlayRef.current.setProps({ layers: newLayers });
    }
  }, [createLayers]);

  return (
    <div className="h-screen flex flex-col">
      <div className="relative flex-1 p-5">
        <div className="relative h-full w-full rounded-xl overflow-hidden bg-background shadow-lg">
          <Header />
          <div ref={mapRef} className="w-full h-full" style={{ minHeight: '500px' }} />
          
          {selectedParcel && (
            <div className="absolute top-20 left-4 z-10">
              <div className="bg-white rounded-lg shadow-lg p-4 max-w-sm">
                <ParcelInfoCard parcel={selectedParcel} />
                <button 
                  onClick={() => setSelectedParcelId(null)}
                  className="mt-2 px-3 py-1 bg-gray-200 rounded text-sm hover:bg-gray-300"
                >
                  Close
                </button>
              </div>
            </div>
          )}
          
          <MapControls
            showTourism={showTourism}
            setShowTourism={setShowTourism}
            showAgriculture={showAgriculture}
            setShowAgriculture={setShowAgriculture}
          />
          
          {mapReady && <MapViewControls mapInstance={mapInstanceRef.current} />}
        </div>
      </div>
      <Footer />
    </div>
  );
};
