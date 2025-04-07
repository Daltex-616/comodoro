
import { Card } from "@/components/ui/card";

interface WorkArea {
  id: number;
  title: string;
  image: string;
  color: string;
}

const workAreas: WorkArea[] = [
  {
    id: 1,
    title: "PEQUEÑAS UNIDADES DE NEGOCIOS",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpdPL0JVVp92jJrgGY502M1MPSau2H6YTF7A&s",
    color: "from-yellow-500/60 to-amber-600/60",
  },
  {
    id: 2,
    title: "SEGURIDAD ALIMENTARIA",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLQQRXC_m5dIhDAT14kuo5WOVdRFSBcFSrsQ&s",
    color: "from-green-500/60 to-emerald-600/60",
  },
  {
    id: 3,
    title: "DINAMIZACIÓN DE PYMES Y CADENAS DE VALOR",
    image: "https://www.consellopatagonico.com/assets/img/galeria/2024-05-11/47137.jpg",
    color: "from-orange-500/60 to-rose-600/60",
  },
  {
    id: 4,
    title: "CID MAR AUSTRAL",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTmoaQ7wLIqCt7QEGAcuwj8oDIls1gLHhnHA&s",
    color: "from-blue-500/60 to-cyan-600/60",
  },
  {
    id: 5,
    title: "OFICINA DE ASESORAMIENTO Y GESTIÓN EN PROPIEDAD INTELECTUAL",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4B_ywaAthvnkqVGpfr7A0Ox1LEZG3sIrTDQ&s",
    color: "from-purple-500/60 to-violet-600/60",
  },
  {
    id: 6,
    title: "CAPACIDADES Y HABILIDADES PARA EL TRABAJO EN EL SIGLO XXI",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF01iiIUPmrvGdmPD60-fqYVc19jQqjoq-5g&s",
    color: "from-pink-500/60 to-rose-600/60",
  },
];

export function WorkAreas() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          <span className="text-gradient">Áreas de trabajo técnicas</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {workAreas.map((area) => (
            <a key={area.id} href="#" className="area-card group h-64">
              <img
                src={area.image}
                alt={area.title}
                className="w-full h-full object-cover transition-all duration-300"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${area.color} transition-opacity duration-300 group-hover:opacity-0`}></div>
              <div className="area-card-title">{area.title}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
