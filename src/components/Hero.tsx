import { Star } from "lucide-react";
import heroData from "../data/hero.json";
import { motion } from "framer-motion";

export default function Hero() {
  const { rating, contact } = heroData;

  return (
    <section className="min-h-screen bg-white px-5 py-12 flex items-center justify-center">
      <div className="flex flex-col gap-8 w-full max-w-6xl">
        {/* Título y descripción */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 text-left"
        >
<h1
  className="text-3xl sm:text-4xl md:text-7xl leading-tight font-bold text-gray-900"
  style={{ fontFamily: "Times New Roman, Times, serif" }}
>
  <span className="text-[1.2em]">Reliable fulfillment center,</span><br />
  <span>B2B, FBA, FBM, and more.</span>
</h1>
        </motion.div>

        {/* Reseña + botón */}
        <motion.div
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Review */}
          <div className="bg-gray-200 border-2 border-lime-500 p-4 shadow-sm text-left w-full sm:w-auto max-w-sm">
            <div className="flex items-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="text-red-500 fill-red-500" />
              ))}
            </div>
            <p className="italic text-sm text-gray-600 leading-snug">"{rating.quote}" <span className="mt-1 text-xs font-semibold text-gray-900">— {rating.author}</span></p>
          </div>

          {/* Botón expandible */}
          <a
            href={contact.url}
            className="bg-gray-200 text-black border-2 border-lime-500 px-8 py-[23px] text-base sm:text-lg hover:bg-gray-300 font-bold transition flex-1 text-end"
          >
            {contact.title}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
