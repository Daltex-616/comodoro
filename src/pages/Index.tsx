
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Carousel } from "@/components/ui/carousel";
import { WorkAreas } from "@/components/WorkAreas";
import { News } from "@/components/News";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <WorkAreas />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
