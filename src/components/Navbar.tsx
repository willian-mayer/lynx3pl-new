import type { Route } from "../types/routes";
import ContactButton from "./ContactButton";

type NavbarProps = {
  title: string;
  routes: Route[];
};

export default function Navbar({ title, routes }: NavbarProps) {
  return (
    <nav className="bg-white sticky top-0 left-0 right-0 z-50 w-full px-2 py-1">
      <div className="max-w-6xl mx-auto w-full flex flex-row items-center justify-between flex-wrap gap-x-4 gap-y-2 px-2 sm:px-4">

        {/* Logo */}
        <a href="/" className="cursor-pointer flex-shrink-0">
          <img
            src="/logo-black.png"
            alt={title}
            width={20}
            height={20}
            className="h-5 sm:h-5 md:h-8 lg:h-10 w-auto"
          />
        </a>

        {/* Links + Contact Button */}
        <div className="flex flex-row flex-wrap items-center justify-end gap-x-3 gap-y-2 text-[0.54em] sm:text-xs md:text-sm lg:text-sm">
          {routes.map((route) => (
            <a
              key={route.path}
              href={route.path}
              className="font-semibold text-black hover:text-blue-600 transition-colors whitespace-nowrap"
            >
              {route.name}
            </a>
          ))}
          <div className="flex-shrink-0 scale-[0.9] sm:scale-100">
            <ContactButton />
          </div>
        </div>

      </div>
    </nav>
  );
}
