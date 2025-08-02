import { Contact } from "@/components/landing/contact";
import { Features } from "@/components/landing/features";
import { Footer } from "@/components/landing/footer";
import { Hero } from "@/components/landing/hero";
import { Navbar } from "@/components/landing/navbar";

export default function Home() {
  return (
    <div className="flex min-h-dvh w-full flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
