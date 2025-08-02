"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mountain, Home } from "lucide-react";
import Link from "next/link";

export const Header = () => {
    return (
        <Card className="absolute top-4 left-4 z-10 shadow-lg rounded-lg">
            <div className="flex items-center p-2 gap-2">
                <div className="flex items-center gap-2">
                    <Mountain className="h-6 w-6 text-primary" />
                    <h1 className="text-lg font-semibold text-foreground hidden sm:block">Rubaa Navigator</h1>
                </div>
                <div className="w-px h-6 bg-border mx-2"></div>
                <Button variant="ghost" asChild>
                    <Link href="/">
                        <Home className="h-5 w-5" />
                        <span className="hidden sm:inline ml-2">Home</span>
                    </Link>
                </Button>
            </div>
        </Card>
    );
};
