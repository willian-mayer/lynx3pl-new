// src/components/Hero.tsx
import { Star } from "lucide-react";
import { motion } from "framer-motion";

import heroData from "../data/hero.json";
import routes from "../data/routes.json";
import Navbar from "./Navbar";

export default function Hero() {
  const { rating, contact } = heroData;

  return (
    <section className="h-screen overflow-hidden bg-white flex flex-col justify-between p-4 sm:p-10">
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
          className="text-xl sm:text-xl md:text-5xl leading-tight font-bold text-gray-900 text-center"
          style={{ fontFamily: "Times New Roman, Times, serif" }}
        >
          <span className="text-[2em] md:text-[1.1em]">Reliable fulfillment center,</span>
          <br />
          <span className="text-[2em] md:text-[1em]">B2B, FBA, FBM, and more.</span>
        </motion.h1>
      </div>

      {/* Parte inferior: review + botón */}
<motion.div
  className="flex flex-row items-center justify-between flex-wrap gap-2 pb-4 w-full max-w-6xl mx-auto"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.4 }}
>
  {/* Review */}
  <div className="bg-gray-200 border-2 border-lime-500 px-3 py-1 sm:px-4 sm:py-2 shadow-sm flex flex-col items-center justify-center gap-y-1 sm:gap-y-2 text-xs sm:text-sm flex-shrink">
    <div className="flex items-center gap-[2px] sm:gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={12} className="text-red-700 fill-red-700 sm:size-[14px]" />
      ))}
    </div>
    <p className=" text-black leading-snug text-center whitespace-nowrap">
      Client's reviews
    </p>
  </div>

  {/* Botón */}
  <a
    href="#form"
    className="bg-black text-white border-2 border-lime-500 px-4 sm:px-8 py-4 text-xs sm:text-sm hover:bg-gray-900 font-bold transition flex items-end justify-center rounded-full h-auto whitespace-nowrap flex-shrink"
  >
    {contact.title}
  </a>
</motion.div>


    </section>
  );
}
