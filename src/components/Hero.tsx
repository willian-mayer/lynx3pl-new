import { Star } from "lucide-react";
import { motion } from "framer-motion";

import heroData from "../data/hero.json";
import routes from "../data/routes.json";
import Navbar from "./Navbar";

export default function Hero() {
  const { contact } = heroData;

  return (
    <section className="h-screen overflow-hidden bg-white flex flex-col justify-between p-[0.1em] py-4 sm:p-10">
      {/* Navbar */}
      <Navbar title="Your Company" routes={routes} />

      {/* Contenido central con flex (ajustado con espacio arriba) */}
<div className="flex-1 flex items-end px-4 mb-8">
  <motion.h1
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="
      text-left 
      font-bold 
      text-gray-900 
      leading-snug 
      sm:leading-snug 
      md:leading-tight
      pt-[10vh] sm:pt-[15vh] md:pt-[18vh]
      w-full max-w-5xl mx-auto
    "
    style={{ fontFamily: "Times New Roman, Times, serif" }}
  >
<span className="block text-5xl sm:text-8xl md:text-6xl lg:text-6xl xl:text-6xl exo-2">
  Reliable <br />fulfillment center,
</span>
<span className="block mt-4 text-5xl sm:text-8xl md:text-6xl lg:text-6xl xl:text-6xl exo-2">
  B2B, FBA, FBM, <br />and more.
</span>

  </motion.h1>
</div>


      {/* Parte inferior: ahora SIEMPRE en dos columnas */}
      <motion.div
        className="grid grid-cols-2 items-center justify-between gap-4 pb-6 w-full max-w-6xl mx-auto px-2 sm:px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {/* Review a la izquierda */}
        <div className="justify-self-start bg-white flex flex-col items-center justify-center gap-y-1 sm:gap-y-2 text-xs sm:text-sm md:text-base lg:text-lg rounded-md">
          <div className="flex items-center gap-[2px] sm:gap-1 md:gap-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="text-red-700 fill-red-700"
                size={14}
                style={{
                  width: "1rem",
                }}
              />
            ))}
          </div>
          <p className="text-black leading-snug text-center whitespace-nowrap font-medium">
            Client's reviews
          </p>
        </div>

        {/* Botón a la derecha */}
        <a
          href="#form"
          className="justify-self-end bg-black text-white border-2 px-5 py-3 sm:px-6 sm:py-3.5 md:px-8 md:py-4 lg:px-10 lg:py-5 text-xs sm:text-sm md:text-base lg:text-lg hover:bg-gray-900 font-bold transition flex items-center justify-center rounded-full h-auto whitespace-nowrap"
        >
          {contact.title}
        </a>
      </motion.div>
    </section>
  );
}
