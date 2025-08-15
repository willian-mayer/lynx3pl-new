// src/components/Entrance.tsx
import { useEffect, useState } from "react";
import entranceData from "../data/entrance.json";

export default function Entrance() {
  const [languages, setLanguages] = useState<{ language: string; short: string }[]>([]);

  useEffect(() => {
    setLanguages(entranceData);
  }, []);

  return (
    <div className="h-screen bg-black flex items-center justify-center relative w-screen">
      {/* Logo en el centro */}
      <img src="/logo-entrance.png" alt="logo" className="h-[400px] lg:h-96 w-auto" />

      {/* Idiomas en la esquina superior derecha, en vertical */}
      <div className="absolute top-13 right-30 flex flex-col items-enter space-y-2 text-white invisible md:visible">
        {languages.map((lang) => (
          <div key={lang.short} className="flex items-center space-x-2 hover:underline cursor-pointer">
            <img src="/logo-ico.png" alt="icon" className="h-4 w-auto" />
            <span className="text-sm font-medium">{lang.short}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
