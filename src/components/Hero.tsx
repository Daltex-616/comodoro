
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function Hero() {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative w-full h-screen overflow-hidden p-0 m-0">
      <div className="relative w-full h-full overflow-hidden">
        {/* Imagen de fondo con overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 z-10" />
        <img 
          src="https://www.comodoro.gov.ar/wp-content/uploads/2024/06/Charla-Propiedad-Intelectual-1-scaled.jpg" 
          alt="Comodoro Conocimiento" 
          className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 transform scale-100 hover:scale-105" 
        />
        
        {/* Contenido */}
        <div className="absolute inset-0 flex flex-col justify-center items-start z-20 px-6 md:px-12 lg:px-20 xl:container mx-auto">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 md:mb-8">
              Comodoro Conocimiento
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-10">
              Agencia de desarrollo económico para impulsar tu proyecto al siguiente nivel.
            </p>
            <a className="flex flex-wrap gap-4" href="https://hackaton-comodoro.onrender.com/" target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="bg-[#e6007e] hover:bg-[#e6007e]/90 text-white font-medium rounded-full text-base py-6 px-7"
              >
                Visita La Web De La Expo
              </Button>
            </a>
          </div>
        </div>
      </div>
        
      {/* Redes sociales que siguen al hacer scroll */}
      <div 
        className={`fixed right-4 ${
          scrolled ? 'top-20' : 'top-1/2 -translate-y-1/2'
        } flex flex-col gap-3 z-50 transition-all duration-300`}
      >
        <a href="#" aria-label="Instagram" className="bg-[#e6007e] p-2 rounded-md text-white hover:bg-[#e6007e]/80 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
          </svg>
        </a>
        <a href="#" aria-label="Facebook" className="bg-[#4267B2] p-2 rounded-md text-white hover:bg-[#4267B2]/80 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
          </svg>
        </a>
        <a href="#" aria-label="Twitter" className="bg-black p-2 rounded-md text-white hover:bg-black/80 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
          </svg>
        </a>
        <a href="#" aria-label="YouTube" className="bg-[#FF0000] p-2 rounded-md text-white hover:bg-[#FF0000]/80 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
          </svg>
        </a>
      </div>
    </section>
  );
}
