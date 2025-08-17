import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import transboardingData from "../data/transboarding.json";

const Transboarding: React.FC = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 }); // lg: breakpoint Tailwind
  const { title, shipImageUrl } = transboardingData;

  return (
    <section className="w-full h-screen flex items-center justify-center lg:px-12 pt-18">
      {isDesktop ? (
        // 🖥 Desktop Layout
        <div className="flex w-full h-full items-center justify-center gap-8 mx-38">
          {/* Columna izquierda con imágenes */}
          <div className="flex flex-col items-center w-2/3">
            {/* Imagen arriba */}
            <motion.img
              src="/transboarding/top.png"
              alt="Top decoration"
              className="w-full h-auto object-contain"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            />

            {/* Imagen principal */}
            <motion.img
              src={shipImageUrl}
              alt={title}
              className="w-full h-96 object-cover rounded-lg my-2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            />

            {/* Imagen abajo */}
            <motion.img
              src="/transboarding/bottom.png"
              alt="Bottom decoration"
              className="w-full h-auto object-contain"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            />
          </div>

          {/* Título - derecha */}
          <motion.div
            className="flex items-center justify-center w-1/3"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold ml-30">{title}</h1>
          </motion.div>
        </div>
      ) : (
        // 📱 Mobile Layout
        <div className="flex flex-col w-full h-full">
          {/* Título */}
          <motion.h1
            className="text-right text-xl font-bold my-10 ml-50 mr-10 text-[#006050]"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h1>

          {/* Imagen principal */}
          <motion.img
            src={shipImageUrl}
            alt={title}
            className="w-full h-[160px] object-cover"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />

          {/* Imagen secundaria small.png */}
          <motion.img
            src="/transboarding/small-new.png"
            alt="Extra visual"
            className="w-full h-auto object-contain mt-8 px-15"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
        </div>
      )}
    </section>
  );
};

export default Transboarding;
