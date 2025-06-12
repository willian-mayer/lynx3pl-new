// src/components/Hero.tsx
import { Star } from "lucide-react";
import heroData from "../data/hero.json";
import { motion } from "framer-motion";

export default function Hero() {
  const { title, description, rating, contact } = heroData;

  return (
    <section className="min-h-screen grid grid-cols-1 md:grid-cols-3 bg-white px-4 sm:px-6 lg:px-8 py-12">
      {/* Espacio izquierdo */}
      <div className="hidden md:block" />

      {/* Contenido principal */}
      <div className="flex flex-col justify-center items-start text-left gap-8 w-full max-w-2xl mx-auto">
        {/* Título y descripción */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h1 className="font-bold text-gray-900 text-3xl sm:text-4xl md:text-5xl leading-tight">
            {title}
          </h1>
          <p className="font-bold text-gray-900 text-3xl sm:text-4xl md:text-5xl leading-tight">
            {description}
          </p>
        </motion.div>

        {/* Reseña + botón en fila */}
        <motion.div
          className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Review más pequeño */}
          <div className="bg-gray-100 rounded-lg p-4 shadow-sm text-left w-full sm:w-auto max-w-sm">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <p className="italic text-sm text-gray-600 leading-snug">"{rating.quote}"</p>
            <p className="mt-1 text-xs font-semibold text-gray-900">— {rating.author}</p>
          </div>

          {/* Botón grande */}
          <a
            href={contact.url}
            className="bg-black text-white px-8 py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-800 transition"
          >
            {contact.title}
          </a>
        </motion.div>
      </div>

      {/* Espacio derecho */}
      <div className="hidden md:block" />
    </section>
  );
}
