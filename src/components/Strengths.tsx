import { motion } from "framer-motion";
import strengthsData from "../data/strengths.json";

export default function Strengths() {
  const { title, description } = strengthsData[0];

  return (
    <section className="flex flex-col lg:flex-row w-full min-h-screen bg-white justify-center lg:justify-normal px-5 py-12">
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
          className="max-w-[280px] w-full h-auto object-contain"
        />
      </motion.div>

      {/* Texto derecha */}
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center p-6 md:p-12"
      >
        <div className="text-center lg:text-left max-w-xl">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 uppercase">
            {title}
          </h2>
          <ul className="space-y-4 text-base md:text-lg lg:text- text-black leading-relaxed">
            {description.map((item, index) => (
              <li key={index} className="relative pl-5">
                <span className="absolute left-0  text-black font-bold">•</span>
                {item.line}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
