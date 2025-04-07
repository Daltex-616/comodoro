
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Newspaper } from "lucide-react";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  category: string;
  summary: string;
  image: string;
}

const newsItems: NewsItem[] = [
  {
    id: 1,
    title: "24 de Marzo: Arte y Memoria. Recomendaciones de películas",
    date: "24 Marzo 2023",
    category: "Noticias",
    summary: "En este Día de la Memoria por la Verdad y la Justicia, te invitamos a reflexionar sobre esta fecha a través de películas y documentales que recuperan las historias de represión, silencio, resistencia...",
    image: "https://media.ambito.com/p/74ec0a754ea80503034c8a412ca6b6a6/adjuntos/239/imagenes/042/322/0042322331/trump-mercadosjpg.jpg",
  },
  {
    id: 2,
    title: "Comodoro Rivadavia consolida sus políticas de desarrollo sostenible integrando la Red de BiodiversCiudades de América Latina y el Caribe",
    date: "21 Marzo 2023",
    category: "Noticias",
    summary: "El programa promueve la integración del medioambiente como eje central del crecimiento urbano. La inclusión de la ciudad, será fortalecida por la Agencia Comodoro Conocimiento, que se abocará a la gen...",
    image: "https://www.parana.gob.ar/writable/uploads/thumb_9a5327f68e2c76f712afad95b35a2800.jpg",
  },
  {
    id: 3,
    title: 'Othar: "Es necesario definir estrategias para resolver el futuro del empleo en la Patagonia"',
    date: "16 Marzo 2023",
    category: "Noticias",
    summary: "En el marco del Seminario del Foro Patagónico de Ciudades Atlánticas (FOPCA), el intendente Othar Macharashvili, hizo un fuerte llamado a la acción para enfrentar regionalmente desempleo y la falta de...",
    image: "https://cdn.www.gob.pe/uploads/document/file/7646756/standard_1111513-d394650f-9e56-4f34-b70f-aaa68c60d177.jpg",
  },
  {
    id: 4,
    title: "El Municipio participó del Foro PescAr en Puerto Madryn",
    date: "08 Marzo 2023",
    category: "Noticias",
    summary: "La primera edición del Foro PescAr fue un encuentro nacional de la industria pesquera argentina, que reunió a expertos, empresarios y actores estratégicos del sector a nivel nacional e internacional...",
    image: "https://f.rpp-noticias.io/2025/01/31/atsapp-audio-2025-01-31-at-3-mp3cutnet-1699756mp3_1699757.jpg",
  },
  {
    id: 5,
    title: "El Municipio consolida una red de investigadores para el desarrollo sostenible a futuro",
    date: "07 Marzo 2023",
    category: "Noticias",
    summary: "La Municipalidad de Comodoro Rivadavia, a través del Ente Comodoro Conocimiento, avanza con decisión en el fortalecimiento de la ciencia y la tecnología local, generando novedosos mecanismos de articul...",
    image: "https://www.legislaturaneuquen.gob.ar/svrfiles/Prensa/Fotos/15873_Temp58.jpg",
  },
  {
    id: 6,
    title: "Con importantes anuncios, Othar abrió el III Período de Sesiones Ordinarias del Concejo Deliberante",
    date: "04 Marzo 2023",
    category: "Noticias",
    summary: "Durante el acto, el intendente Othar Macharashvili enumeró una serie de medidas que llevará adelante el Municipio dado el difícil contexto que se vive a nivel nacional, entre ellas la conformación del...",
    image: "https://i.pinimg.com/736x/f7/f8/8b/f7f88b0379daa05422ca9c6bddb934f7.jpg",
  },
];

export function News() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-navy-blue">Noticias</span>
          </h2>
          <Newspaper className="h-7 w-7 text-comodoro-blue" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-0">
              <div className="relative h-52 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardContent className="p-5">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <span>{item.date}</span>
                  <span>•</span>
                  <span>{item.category}</span>
                </div>
                <h3 className="font-bold text-lg mb-3 line-clamp-2 hover:text-comodoro-blue transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 line-clamp-3 mb-4">
                  {item.summary}
                </p>
                <a 
                  href="#" 
                  className="text-comodoro-blue font-medium hover:underline inline-flex items-center"
                >
                  Leer nota
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
