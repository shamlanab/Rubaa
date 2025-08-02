"use client";

import { HeatmapLayer as DeckHeatmapLayer } from "deck.gl";
import type { PickingInfo } from '@deck.gl/core';

interface HeatmapLayerProps {
  data: { position: { lat: number, lng: number }, score: number, id: string }[];
  id: string;
  visible: boolean;
  radiusPixels?: number;
  colorRange?: [number, number, number, number][];
}

export const HeatmapLayer = ({ data, id, visible, radiusPixels = 60, colorRange }: HeatmapLayerProps) => {
  if (!visible || !data || data.length === 0) {
    console.log(`HeatmapLayer ${id}: Not creating - visible: ${visible}, data length: ${data?.length}`);
    return null;
  }

  console.log(`Creating HeatmapLayer ${id} with ${data.length} data points`);
  
  return new DeckHeatmapLayer({
    id,
    data,
    getPosition: (d: any) => [d.position.lat, d.position.lng],
    getWeight: (d: any) => d.score,
    radiusPixels,
    colorRange: colorRange || [
      [1, 152, 189],
      [73, 227, 206],
      [216, 254, 181],
      [254, 237, 177],
      [254, 173, 84],
      [209, 55, 78],
    ],
    opacity: 0.8,
    intensity: 1,
    threshold: 0.05,
  });
};
