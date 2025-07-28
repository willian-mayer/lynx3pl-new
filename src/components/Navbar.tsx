// src/components/Navbar.tsx
import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { Route } from "../types/routes";
import ContactButton from "./ContactButton";

type NavbarProps = {
  title: string;
  routes: Route[];
};

export default function Navbar({ title, routes }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 left-0 right-0 z-50 px-2">
      <div className="max-w-6xl mx-auto w-full flex items-center justify-between px-4 sm:px-6 py-2">
        {/* Logo */}
        <a href="/" className="cursor-pointer">
          <img
            src="/logo-black.png"
            alt={title}
            width={20}
            height={20}
            className="h-8 sm:h-8 md:h-8 lg:h-12 w-auto"
          />
        </a>

        {/* Links + Botón en pantallas SM+ */}
        <div className="hidden sm:flex items-center space-x-4">
          {routes.map((route) => (
            <a
              key={route.path}
              href={route.path}
              className="text-md sm:text-md font-bold text-black hover:text-blue-600 transition-colors"
            >
              {route.name}
            </a>
          ))}
          <ContactButton />
        </div>

        {/* Menú hamburguesa XS */}
        <div className="flex sm:hidden">
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

          {/* Contact Button también aquí */}
          <div onClick={() => setIsOpen(false)}>
            <ContactButton />
          </div>
        </div>
      </div>
    </nav>
  );
}
