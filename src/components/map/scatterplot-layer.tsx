
"use client";

import { ScatterplotLayer as DeckScatterplotLayer } from "deck.gl";
import type { PickingInfo } from '@deck.gl/core';

interface ScatterplotLayerProps {
  id: string;
  data: any[];
  visible: boolean;
  radius?: number;
  color?: [number, number, number, number];
  onClick: (info: PickingInfo) => void;
}

export const ScatterplotLayer = ({ id, data, visible, radius = 1000, color = [255, 255, 255, 1], onClick }: ScatterplotLayerProps) => {
  if (!visible || !data || data.length === 0) {
    console.log(`ScatterplotLayer ${id}: Not creating - visible: ${visible}, data length: ${data?.length}`);
    return null;
  }

  console.log(`Creating ScatterplotLayer ${id} with ${data.length} data points`);

  return new DeckScatterplotLayer({
    id,
    data,
    pickable: true,
    opacity: 0.8,
    stroked: false,
    filled: true,
    radiusScale: 6,
    radiusMinPixels: 1,
    radiusMaxPixels: 100,
    getPosition: (d: any) => [d.position.lat, d.position.lng],
    getRadius: (d: any) => radius,
    getFillColor: color,
    onClick,
  });
};
