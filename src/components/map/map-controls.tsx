"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Hotel, Sprout } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import { cn } from "@/lib/utils";

interface MapControlsProps {
  showTourism: boolean;
  setShowTourism: Dispatch<SetStateAction<boolean>>;
  showAgriculture: boolean;
  setShowAgriculture: Dispatch<SetStateAction<boolean>>;
}

export const MapControls = ({
  showTourism,
  setShowTourism,
  showAgriculture,
  setShowAgriculture,
}: MapControlsProps) => {
  return (
    <Card className="absolute top-4 right-4 z-10 shadow-lg rounded-lg">
      <CardContent className="p-2 flex gap-2">
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "flex items-center gap-2 sm:w-auto sm:px-4",
            showTourism && "bg-accent text-accent-foreground"
          )}
          onClick={() => setShowTourism((prev) => !prev)}
        >
          <Hotel className="h-5 w-5" />
          <span className="hidden sm:inline">Tourism</span>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className={cn(
            "flex items-center gap-2 sm:w-auto sm:px-4",
            showAgriculture && "bg-accent text-accent-foreground"
          )}
          onClick={() => setShowAgriculture((prev) => !prev)}
        >
          <Sprout className="h-5 w-5" />
          <span className="hidden sm:inline">Agriculture</span>
        </Button>
      </CardContent>
    </Card>
  );
};
