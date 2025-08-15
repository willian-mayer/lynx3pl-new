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
        <div className="flex w-full h-full">
          {/* Imagen - 2/3 izquierda */}
          <motion.div
            className="w-2/3 h-full m-20"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={shipImageUrl}
              alt={title}
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>

          {/* Título - derecha */}
          <motion.div
            className="w-1/3 flex items-start justify-start p-6"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold">{title}</h1>
          </motion.div>
        </div>
      ) : (
        // 📱 Mobile Layout
        <div className="flex flex-col w-full h-full">
          {/* Título */}
          <motion.h1
            className="text-left text-2xl font-bold mb-4 ml-45 mr-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h1>

          {/* Imagen */}
          <motion.img
            src={shipImageUrl}
            alt={title}
            className="w-full h-[200px] object-cover "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
        </div>
      )}
    </section>
  );
};

export default Transboarding;
