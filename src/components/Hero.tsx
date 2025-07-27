// src/components/Hero.tsx
import { Star } from "lucide-react";
import { motion } from "framer-motion";

import heroData from "../data/hero.json";
import routes from "../data/routes.json";
import Navbar from "./Navbar";

export default function Hero() {
  const { rating, contact } = heroData;

  return (
    <section className="min-h-screen bg-white flex flex-col justify-between">
      {/* Navbar */}
      <div className="w-full">
        <Navbar title="Your Company" routes={routes} />
      </div>

      {/* Contenido central (el h1) */}
      <div className="flex-1 flex items-center justify-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-7xl leading-tight font-bold text-gray-900 text-center"
          style={{ fontFamily: "Times New Roman, Times, serif" }}
        >
          <span className="text-[1.2em]">Reliable fulfillment center,</span><br />
          <span>B2B, FBA, FBM, and more.</span>
        </motion.h1>
      </div>

{/* Parte inferior: review + botón */}
<motion.div
  className="flex flex-col sm:flex-row items-stretch gap-4 px-4 pb-8 w-full max-w-6xl mx-auto"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.4 }}
>
  {/* Review */}
  <div className="bg-gray-200 border-2 border-lime-500 p-4 py-[20.5px] shadow-sm w-full sm:w-auto flex items-center gap-2 flex-wrap h-full">
    {/* Estrellas */}
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={14} className="text-red-500 fill-red-500" />
      ))}
    </div>
    {/* Cita + autor */}
    <p className="italic text-sm text-gray-600 leading-snug">
      "{rating.quote}"{" "}
      <span className="text-xs font-semibold text-gray-900">— {rating.author}</span>
    </p>
  </div>

  {/* Botón */}
  <a
    href="#form"
    className="bg-gray-200 text-black border-2 border-lime-500 px-8 py-4 text-base sm:text-lg hover:bg-gray-300 font-bold transition flex-1 text-end h-full flex items-center justify-end"
  >
    {contact.title}
  </a>
</motion.div>


    </section>
  );
}
