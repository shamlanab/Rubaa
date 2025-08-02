'use client';

import { MapContainer } from '@/components/map/map-container';
import { useEffect, useState } from 'react';

export default function MapPage() {
  const [mounted, setMounted] = useState(false);
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading map...</p>
        </div>
      </div>
    );
  }

  if (!apiKey) {
    return (
      <div className="flex h-screen w-full flex-col items-center justify-center bg-background text-center">
        <h1 className="text-2xl font-bold text-destructive">Configuration Error</h1>
        <p className="mt-2 text-muted-foreground">
          Google Maps API key is missing.
        </p>
        <p className="mt-1 text-sm text-muted-foreground">
          Please add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to your .env.local file.
        </p>
      </div>
    );
  }

  return <MapContainer apiKey={apiKey} />;
}
