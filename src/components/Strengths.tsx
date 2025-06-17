import { motion } from "framer-motion";
import strengthsData from "../data/strengths.json";

export default function Strengths() {
  const { title, description } = strengthsData[0];

  return (
    <section className="flex flex-col lg:flex-row w-full min-h-screen bg-white justify-center lg:justify-normal">
      {/* Imagen izquierda */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center p-6 md:p-12"
      >
        <img
          src="/logo-black.png"
          alt="Strengths Logo"
          className="max-w-[220px] w-full h-auto object-contain"
        />
      </motion.div>

      {/* Texto derecha */}
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center p-6 md:p-12"
      >
        <div className="text-center lg:text-left max-w-md">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 uppercase">
            {title}
          </h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed">
            {description}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
