import { useState } from "react";
import { Menu, Newspaper, MapPin, History, FileText, User } from "lucide-react";
import { NavLink } from "./NavLink";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const navItems = [
  { to: "/", label: "Notícias", icon: Newspaper },
  { to: "/cadastro", label: "Cadastro de Resíduos", icon: FileText },
  { to: "/mapa", label: "Mapa de Coleta", icon: MapPin },
  { to: "/historico", label: "Histórico", icon: History },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo e nome */}
          <div className="flex items-center gap-3">
            <img 
              src="/placeholder.svg" 
              alt="Logo da Prefeitura - Reciclagem Têxtil"
              className="h-12 w-12 object-contain"
            />
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-foreground">Reciclagem Têxtil</h1>
              <p className="text-xs text-muted-foreground">Prefeitura Municipal</p>
            </div>
          </div>

          {/* Navegação Desktop */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="px-4 py-2 rounded-md text-sm font-medium text-foreground hover:bg-secondary transition-colors"
                activeClassName="bg-primary text-primary-foreground hover:bg-primary"
              >
                <div className="flex items-center gap-2">
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </div>
              </NavLink>
            ))}
          </nav>

          {/* User Avatar e Menu Mobile */}
          <div className="flex items-center gap-2">
            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="" alt="Usuário" />
                    <AvatarFallback className="bg-gradient-accent text-accent-foreground">
                      <User className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Perfil</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <History className="mr-2 h-4 w-4" />
                  <span>Meu Histórico</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="text-destructive">
                  Sair
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72">
                <div className="flex flex-col gap-4 mt-8">
                  <div className="flex items-center gap-3 pb-4 border-b">
                    <img 
                      src="/placeholder.svg" 
                      alt="Logo da Prefeitura - Reciclagem Têxtil"
                      className="h-12 w-12 object-contain"
                    />
                    <div>
                      <h2 className="font-bold text-foreground">Reciclagem Têxtil</h2>
                      <p className="text-xs text-muted-foreground">Prefeitura Municipal</p>
                    </div>
                  </div>
                  
                  <nav className="flex flex-col gap-2">
                    {navItems.map((item) => (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 rounded-lg text-foreground hover:bg-secondary transition-colors"
                        activeClassName="bg-primary text-primary-foreground hover:bg-primary"
                      >
                        <item.icon className="h-5 w-5" />
                        <span className="font-medium">{item.label}</span>
                      </NavLink>
                    ))}
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};
