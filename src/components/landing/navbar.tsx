"use client";

import { Button } from "@/components/ui/button";
import { Mountain } from "lucide-react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#contact", label: "Contact" },
];

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center mx-auto">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Mountain className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">Rubaa Navigator</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="transition-colors hover:text-foreground/80 text-foreground/60">
                    {link.label}
                </Link>
            ))}
          </nav>
        </div>
        
        {/* Mobile Nav */}
        <div className="md:hidden">
             <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                        <Menu className="h-6 w-6" />
                        <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left">
                    <div className="flex flex-col gap-6 p-6">
                         <Link href="/" className="flex items-center space-x-2">
                            <Mountain className="h-6 w-6 text-primary" />
                            <span className="font-bold">Rubaa Navigator</span>
                        </Link>
                         <nav className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link key={link.href} href={link.href} className="text-lg font-medium hover:text-primary transition-colors">
                                    {link.label}
                                </Link>
                            ))}
                             <Link href="/map" className="text-lg font-medium hover:text-primary transition-colors">
                                Map
                            </Link>
                        </nav>
                    </div>
                </SheetContent>
            </Sheet>
        </div>

        <div className="flex flex-1 items-center justify-end space-x-2">
           <Button asChild>
             <Link href="/map">Go to Map</Link>
           </Button>
        </div>
      </div>
    </header>
  );
};
