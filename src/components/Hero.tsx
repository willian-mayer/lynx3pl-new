// src/components/Hero.tsx
import { Star } from "lucide-react";
import { motion } from "framer-motion";

import heroData from "../data/hero.json";
import routes from "../data/routes.json";
import Navbar from "./Navbar";

export default function Hero() {
  const { contact } = heroData;

  return (
    <section className="h-screen overflow-hidden bg-white flex flex-col justify-between p-4 sm:p-10">
      
      {/* Navbar con logo, rutas y botón integrado */}
      <Navbar title="Your Company" routes={routes} />

      {/* Contenido central (el h1) */}
      <div className="flex-1 flex items-end justify-start md:justify-center px-4 mb-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xl sm:text-xl md:text-5xl leading-tight font-bold text-gray-900 text-left"
          style={{ fontFamily: "Times New Roman, Times, serif" }}
        >
          <span className="text-[2.5em] sm:text-[1.7em] exo-2">
            Reliable <br />fulfillment center,
          </span>
          <br />
          <span className="text-[2.5em] sm:text-[1.7em] exo-2">
            B2B, FBA, FBM, <br />and more.
          </span>
        </motion.h1>
      </div>

      {/* Parte inferior: review + botón principal */}
<motion.div
  className="flex flex-row items-center justify-between flex-wrap gap-4 pb-6 w-full max-w-6xl mx-auto px-2 sm:px-4"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.4 }}
>
  {/* Review */}
  <div className="bg-white px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-4 lg:px-8 lg:py-5 shadow-sm flex flex-col items-center justify-center gap-y-1 sm:gap-y-2 text-xs sm:text-sm md:text-base lg:text-lg flex-shrink rounded-md">
    <div className="flex items-center gap-[2px] sm:gap-1 md:gap-2">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className="text-red-700 fill-red-700"
          size={14} // default
          style={{
            width: "1rem", // default for xs
          }}
        />
      ))}
    </div>
    <p className="text-black leading-snug text-center whitespace-nowrap font-medium">
      Client's reviews
    </p>
  </div>

  {/* Botón de contacto */}
  <a
    href="#form"
    className="bg-black text-white border-2 px-5 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4 lg:px-10 lg:py-5 text-xs sm:text-sm md:text-base lg:text-lg hover:bg-gray-900 font-bold transition flex items-center justify-center rounded-full h-auto whitespace-nowrap flex-shrink"
  >
    {contact.title}
  </a>
</motion.div>

    </section>
  );
}
