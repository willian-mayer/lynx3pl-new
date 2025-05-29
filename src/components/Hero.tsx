// src/components/Hero.tsx
import { Star } from "lucide-react";
import heroData from "../data/hero.json";
import { motion } from "framer-motion";

export default function Hero() {
  const { title, description, rating, contact } = heroData;

  return (
    <section className="min-h-screen flex flex-col bg-white px-6 pt-12 pb-12">
      {/* Título y descripción centrados */}
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <motion.h1
          className="font-bold text-gray-900 mb-4 text-5xl sm:text-[40px] md:text-[60px] lg:text-[80px] xl:text-[100px] leading-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h1>

        <motion.p
          className="text-gray-700 text-[20px] sm:text-[28px] md:text-[40px] lg:text-[52px] xl:text-[64px] leading-snug"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {description}
        </motion.p>
      </div>

      <motion.div
        className="w-full max-w-4xl flex flex-col lg:flex-row items-center lg:justify-between gap-6 mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="bg-gray-100 rounded-xl p-6 shadow-md w-full lg:w-auto text-center lg:text-left">
          <div className="flex justify-center lg:justify-start mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="text-yellow-500 fill-yellow-500" />
            ))}
          </div>
          <p className="italic text-gray-600">"{rating.quote}"</p>
          <p className="mt-2 text-sm font-semibold text-gray-900">— {rating.author}</p>
        </div>

        <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition whitespace-nowrap">
          {contact.title}
        </button>
      </motion.div>
    </section>
  );
}
