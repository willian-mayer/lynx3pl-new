import { useState } from "react";
import type { Route } from "../types/routes";
import ContactButton from "./ContactButton";
import { Menu, X } from "lucide-react";

type NavbarProps = {
  title: string;
  routes: Route[];
};

export default function Navbar({ title, routes }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white sticky top-0 left-0 right-0 z-50 w-full px-2 md:px-16 py-5">
      <div className="mx-auto flex items-center justify-between px-2 sm:px-7">
        {/* Logo */}
        <a href="/" className="cursor-pointer flex-shrink-0">
          <img
            src="/logo-black.png"
            alt={title}
            width={20}
            height={20}
            className="h-5 sm:h-7 w-auto"
          />
        </a>

        {/* Links + Contact en desktop */}
        <div className="hidden sm:flex flex-row items-center gap-x-5 text-base md:text-lg">
          {routes.map((route) => (
            <a
              key={route.path}
              href={route.path}
              className="font-semibold text-black hover:text-blue-600 transition-colors whitespace-nowrap"
            >
              {route.name}
            </a>
          ))}
          <div className="flex-shrink-0">
            <ContactButton  />
          </div>
        </div>

        {/* Botón menú hamburguesa en móvil */}
        <button
          className="sm:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú móvil */}
      {isOpen && (
        <div className="sm:hidden flex flex-col gap-3 px-4 pb-4 bg-white shadow-md border-t border-gray-200 text-right text-lg">
          {routes.map((route) => (
            <a
              key={route.path}
              href={route.path}
              className="font-semibold text-black hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {route.name}
            </a>
          ))}
          {/* ContactButton alineado a la derecha */}
          <div className="self-end">
            <ContactButton />
          </div>
        </div>
      )}
    </nav>
  );
}
