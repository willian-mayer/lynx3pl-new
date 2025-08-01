import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React from "react";
import warehousingData from "../data/newwarehousing.json";

export default function NewWarehousing() {
  const { title, desc } = warehousingData;
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="w-full bg-white md:px-24 md:px-10 lg:px-20 py-10 min-h-screen flex items-center"
    >
      {/* Mobile: flex-col (imagen → título → desc) | Desktop: grid tipo Partners */}
      <div
        className="
          w-full 
          flex flex-col items-center justify-center 
          md:grid md:grid-rows-5 md:grid-cols-2 md:gap-6
        "
      >
        {/* Imagen */}
        <div className="flex items-center justify-center mb-6 md:mb-0 md:row-span-3 md:col-start-2">
          <motion.img
            src="/newwarehousing/image.png"
            alt="Warehousing"
            className="w-full object-cover shadow-md "
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          />
        </div>

        {/* Title */}
        <div className="px-6 text-center md:text-left flex items-center justify-center md:row-span-3 md:col-start-1 pt-12">
          <motion.h2
            className="text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h2>
        </div>

        {/* Descripción */}
        <div className="px-6 md:px-0 text-center md:text-left md:col-span-2 flex items-center justify-center">
          <motion.p
            className="text-xl md:text-[1.3em] text-gray-700 max-w-7xl"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {desc}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
