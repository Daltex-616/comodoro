
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Menu, X, Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/Logo";

const navItems = [
  { name: "INICIO", href: "/" },
  { name: "¿QUIÉNES SOMOS?", href: "/quienes-somos" },
  { name: "PROGRAMAS", href: "/programas" },
  { name: "FINANCIAMIENTO", href: "/financiamiento" },
  { name: "CONVOCATORIAS", href: "/convocatorias" },
  { name: "EVENTOS", href: "/eventos" },
  { name: "NOTICIAS", href: "/noticias" },
  { name: "CONTACTO", href: "/contacto" },
];

export function Navbar() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0">
              <Logo className="h-10 w-auto" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="nav-link text-sm font-medium">
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {showSearch ? (
              <div className="hidden md:flex items-center relative">
                <Input
                  type="search"
                  placeholder="Buscar..."
                  className="w-64 pr-8 rounded-full"
                  autoFocus
                />
                <X 
                  className="absolute right-2 h-4 w-4 text-muted-foreground cursor-pointer" 
                  onClick={() => setShowSearch(false)}
                />
              </div>
            ) : (
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setShowSearch(true)}
                className="hidden md:flex"
              >
                <Search className="h-5 w-5" />
              </Button>
            )}

            {/* Mobile Menu Button */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="py-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <Logo className="h-8 w-auto" />
                    <Button variant="ghost" size="icon">
                      <Search className="h-5 w-5" />
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    {navItems.map((item) => (
                      <a 
                        key={item.name} 
                        href={item.href} 
                        className="block p-2 text-sm font-medium text-foreground hover:bg-muted rounded-md"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  
                  <div className="pt-6 border-t border-border">
                    <div className="flex space-x-4 justify-center">
                      <a href="#" className="text-muted-foreground hover:text-foreground">
                        <Instagram size={20} />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-foreground">
                        <Facebook size={20} />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-foreground">
                        <Twitter size={20} />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-foreground">
                        <Youtube size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
}
