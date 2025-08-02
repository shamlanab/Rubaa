import { Skeleton } from "@/components/ui/skeleton";
import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Skeleton className="h-full w-full" />
      <div className="absolute inset-0 flex items-center justify-center bg-background/50">
        <div className="flex items-center gap-4 rounded-lg bg-background p-6 shadow-2xl">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <p className="text-lg font-semibold text-foreground">Loading Rubaa Navigator...</p>
        </div>
      </div>
       <Skeleton className="absolute top-4 left-4 h-12 w-48 rounded-lg" />
       <Skeleton className="absolute top-4 right-4 h-12 w-32 rounded-lg" />
    </div>
  );
}
