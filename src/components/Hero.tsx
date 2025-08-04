import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import heroData from "../data/hero.json";

export default function Hero() {
  const { contact } = heroData;

  // Estado para tamaño de estrellas
  const [starSize, setStarSize] = useState(20);
  const [starWidth, setStarWidth] = useState("1rem");

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setStarSize(20);
        setStarWidth("2rem");
      } else {
        setStarSize(20);
        setStarWidth("1rem");
      }
    }

    handleResize(); // tamaño inicial al montar
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="h-screen overflow-hidden bg-white flex flex-col justify-between sm:mx-48 pt-16">
      {/* Contenido central con flex (ajustado con espacio arriba) */}
      <div className="flex-1 flex items-center justify-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="
            text-black 
            font-black 
            text-left
            text-[2.4em]        /* móvil */
            sm:text-[2.3em]     /* sm */
            md:text-[2.8em]     /* md más grande */
            lg:text-[3em]     /* lg aún más */
            xl:text-[4.2em]
            leading-tight
            w-full 
            mx-auto 
            exo-2
            mt-20
            md:mt-0
          "
          style={{ fontFamily: "Times New Roman, Times, serif" }}
        >
          <span className="block sm:inline inter-bold">Reliable </span>
          <span className="block sm:inline inter-bold">fulfillment, </span>
          <span className="block sm:inline inter-bold">B2B, FBA, FBM,</span>
          <span className="block inter-bold">warehouse & more.</span>
        </motion.h1>
      </div>

      {/* Parte inferior: ahora SIEMPRE en dos columnas */}
      <motion.div
        className="
          grid grid-cols-2 
          items-end
          justify-between 
          gap-4 
          pb-6 
          w-full 
          px-3
          md:pb-10
        "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {/* Review a la izquierda */}
        <div
          className="
            justify-self-start 
            flex flex-col 
            items-center 
            justify-center
            text-xs sm:text-sm 
            md:text-lg lg:text-xl
            rounded-md
          "
        >
          <div className="flex items-center gap-[1px]">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="text-red-500 fill-red-500"
                size={starSize}
                style={{
                  width: starWidth,
                }}
              />
            ))}
          </div>
          <p className="text-black text-md sm:text-2xl leading-snug text-center whitespace-nowrap font-medium">
            Client's reviews
          </p>
        </div>

        {/* Botón a la derecha */}
        <a
          href="#form"
          className="
            justify-self-end 
            bg-black 
            text-white 
            px-4 py-1.5 
            sm:px-5 sm:py-2
            md:px-6 md:py-3
            text-md 
            sm:text-sm 
            md:text-lg
            hover:bg-gray-900 
            font-bold 
            transition 
            flex 
            items-center 
            justify-center 
            rounded-full 
            whitespace-nowrap
          "
        >
          {contact.title}
        </a>
      </motion.div>
    </section>
  );
}
