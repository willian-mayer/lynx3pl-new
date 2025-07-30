import { Star } from "lucide-react";
import { motion } from "framer-motion";

import heroData from "../data/hero.json";
import routes from "../data/routes.json";
import Navbar from "./Navbar";

export default function Hero() {
  const { contact } = heroData;

  return (
    <section className="h-screen overflow-hidden bg-white flex flex-col justify-between p-[0.1em] sm:p-10">
      {/* Navbar */}
      <Navbar title="Your Company" routes={routes} />

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
    text-[1.8em]        /* Tamaño por defecto (móvil) */
    sm:text-[2.2em]     /* Pantallas sm un poco más grande */
    md:text-[2.8em]     /* Pantallas md como lo tienes ahora */
    leading-tight
    w-full 
    max-w-5xl 
    mx-auto 
    exo-2
  "
  style={{ fontFamily: 'Times New Roman, Times, serif' }}
>
  {/* Primera línea */}
  <span className="block sm:inline exo-2">Reliable </span>

  {/* Segunda línea (solo se baja en sm) */}
  <span className="block sm:inline exo-2">fulfillment, </span>

  {/* Tercera línea (solo se baja en sm) */}
  <span className="block sm:inline exo-2">B2B, FBA, FBM,</span>

  {/* Última línea siempre aparte */}
  <span className="block exo-2">warehouse & more.</span>
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
        <div className="justify-self-start bg-white flex flex-col items-center justify-center text-xs sm:text-sm md:text-base lg:text-lg rounded-md">
          <div className="flex items-center gap-[1px]">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="text-red-500 fill-red-500"
                size={20}
                style={{
                  width: "1rem",
                }}
              />
            ))}
          </div>
          <p className="text-black text-sm leading-snug text-center whitespace-nowrap font-medium">
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
    border-1 
    px-4 py-1.5      /* Compacto en móvil */
    text-xs          /* Tamaño por defecto */
    sm:px-5 sm:py-2  /* Un poco más grande en sm */
    sm:text-sm
    md:text-base     /* Tamaño original en desktop */
    hover:bg-gray-900 
    font-bold 
    transition 
    flex 
    items-center 
    justify-center 
    rounded-full 
    h-auto 
    whitespace-nowrap
  "
>
  {contact.title}
</a>

      </motion.div>
    </section>
  );
}
