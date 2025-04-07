
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Logo } from "@/components/Logo";
import { ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col items-center md:items-start">
            <Logo className="h-32 w-auto mb-6" />
            <h2 className="text-2xl font-bold text-center md:text-left mb-2">COMODORO CONOCIMIENTO</h2>
            <p className="text-muted-foreground uppercase text-sm mb-6 text-center md:text-left">
              AGENCIA DE DESARROLLO ECONÓMICO
            </p>
          </div>
          
          <Card className="glass-card overflow-hidden">
            <CardContent className="p-8">
              <div className="text-sm text-primary uppercase font-medium mb-2">CONTACTO</div>
              <h3 className="text-3xl font-bold mb-4">
                ¡Lleva tu proyecto al siguiente nivel!
              </h3>
              <p className="text-muted-foreground mb-6">
                Contáctanos en el área que mejor se adapte a tus necesidades.
              </p>
              <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                Contacto
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
