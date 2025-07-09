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
<div className="max-w-6xl mx-auto w-full flex items-center justify-between px-6">
        {/* Logo / Título */}
        <a href="/" className="cursor-pointer">
          <img
            src="/logo-black.png"
            alt={title}
            width={20}
            height={20}
            className="h-12 w-auto py-2"
          />
        </a>

        {/* Menú escritorio */}
        <div className="hidden md:flex space-x-6">
          {routes.map((route) => (
            <a
              key={route.path}
              href={route.path}
              className="text-black font-bold hover:text-blue-600"
            >
              {route.name}
            </a>
          ))}
        </div>

        {/* Botón hamburguesa */}
        <div className="md:hidden mt-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black font-bold"
            aria-label="Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
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
