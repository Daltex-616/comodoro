
import { Logo } from "@/components/Logo";
import { Instagram, Facebook, Twitter, Youtube, Clock, MapPin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-6">
              <Logo className="h-12 w-auto mr-3" />
              <div>
                <div className="text-lg font-semibold">Comodoro</div>
                <div className="text-lg font-semibold">Conocimiento</div>
              </div>
            </div>
            
            <div className="flex space-x-4 mt-2">
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Horarios</h3>
            <div className="flex items-start mb-3">
              <Clock className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <div className="font-medium">Lunes - Viernes:</div>
                <div className="text-white/70">8:00 hs - 18:00 hs</div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Ubicación</h3>
            <div className="flex items-start mb-3">
              <MapPin className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <div className="font-medium">Hudson 54, Comodoro Rivadavia, Chubut</div>
              </div>
            </div>
            <div className="flex items-start">
              <Mail className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
              <div>
                <div className="font-medium">E-mail:</div>
                <a href="mailto:consultas@conocimiento.gob.ar" className="text-white/70 hover:text-white transition-colors">
                  consultas@conocimiento.gob.ar
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-sm text-white/50">
          © {new Date().getFullYear()} Comodoro Conocimiento. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
