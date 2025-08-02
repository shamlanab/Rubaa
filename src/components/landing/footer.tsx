import { Mountain } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Mountain className="h-6 w-6 text-primary" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with love
          </p>
        </div>
        <div className="flex gap-4">
            <Link href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Features
            </Link>
            <Link href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Contact
            </Link>
             <Link href="/map" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Map
            </Link>
        </div>
      </div>
    </footer>
  );
};
