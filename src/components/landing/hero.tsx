import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
    return (
        <section className="relative w-full flex items-center justify-center text-center text-white py-20 md:py-32 lg:py-40">
            <div 
                className="absolute inset-0 bg-cover bg-center brightness-50"
                style={{ backgroundImage: "url('https://www.exotravel.com/blog/wp-content/uploads/2024/05/Asir-Blog-Feature.png')" }}
                data-ai-hint="saudi arabia landscape"
            ></div>
            <div className="relative z-10 p-4 mx-auto max-w-4xl">
                <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                    Navigate Investment in Asir
                </h1>
                <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-neutral-200">
                    A data-driven platform for exploring tourism and agricultural opportunities in the heart of Saudi Arabia.
                </p>
                <div className="mt-10">
                    <Button asChild size="lg" className="group">
                        <Link href="/map">
                            Launch Interactive Map
                            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
