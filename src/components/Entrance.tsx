// src/components/Entrance.tsx
import { useEffect, useState } from "react";
import entranceData from "../data/entrance.json";

export default function Entrance() {
  const [languages, setLanguages] = useState<{ language: string; short: string }[]>([]);

  useEffect(() => {
    setLanguages(entranceData);
  }, []);

  return (
    <div className="h-screen bg-black flex flex-col md:flex-row items-center justify-center relative w-screen ">
      {/* Logo en el centro */}
      <div className="flex flex-col items-center">
        <img src="/logo-entrance.png" alt="logo" className="h-[400px] lg:h-80 w-auto my-10" />

        {/* 📱 Mobile slogan (debajo del logo) */}
        <p className="text-white text-[.7em] mt-13 md:hidden text-center font-semibold">
          Efficiency. Transparency. Accuracy. 
        </p>
      </div>

      {/* 🌍 Idiomas en la esquina superior derecha (solo desktop) */}
      <div className="absolute top-13 right-30 flex flex-col space-y-2 text-white invisible md:visible">
        {languages.map((lang) => (
          <div
            key={lang.short}
            className="flex items-center space-x-2 hover:underline cursor-pointer"
          >
            <img src="/logo-ico.png" alt="icon" className="h-4 w-auto" />
            <span className="text-sm font-medium">{lang.short}</span>
          </div>
        ))}
      </div>

      {/* 💻 Desktop slogan en esquina inferior izquierda */}
      <p className="absolute bottom-13 left-30 text-white text-xl font-medium hidden md:block">
        Efficiency. <br /> Accuracy.<br />Transparency.
      </p>
    </div>
  );
}
