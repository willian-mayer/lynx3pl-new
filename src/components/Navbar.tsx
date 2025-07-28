import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { Route } from "../types/routes";

type NavbarProps = {
  title: string;
  routes: Route[];
};

export default function Navbar({ title, routes }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 left-0 right-0 z-50 px-2">
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between px-6 py-2">
        {/* Logo */}
        <a href="/" className="cursor-pointer">
          <img
            src="/logo-black.png"
            alt={title}
            width={20}
            height={20}
            className="h-12 w-auto"
          />
        </a>

        {/* Menú escritorio (sm en adelante) */}
        <div className="hidden sm:flex space-x-4 sm:space-x-6">
          {routes.map((route) => (
            <a
              key={route.path}
              href={route.path}
              className="text-xs sm:text-sm md:text-base font-bold text-black hover:text-blue-600 transition-colors"
            >
              {route.name}
            </a>
          ))}
        </div>

        {/* Botón hamburguesa solo en pantallas < sm */}
        <div className="flex sm:hidden mt-1">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black font-bold"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menú móvil (sólo visible en XS) */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out sm:hidden ${
          isOpen ? "max-h-96 opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col space-y-2 bg-white px-4 pb-4">
          {routes.map((route) => (
            <a
              key={route.path}
              href={route.path}
              className="text-black font-bold hover:text-blue-600"
              onClick={() => setIsOpen(false)}
            >
              {route.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
