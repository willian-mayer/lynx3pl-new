import { motion } from "framer-motion";
import data from "../data/weserve.json";

const WeServe = () => {
  const { title, left, right } = data[0];

  return (
    <section className="h-screen bg-white flex flex-col items-center justify-center px-4 md:px-12">
      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold text-center mb-8"
      >
        {title}
      </motion.h2>

      {/* Contenido principal */}
      <div className="flex flex-col md:flex-row w-full h-full md:h-[70%] justify-center items-center gap-4">
        {/* Lista izquierda */}
        <motion.ul
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex-1 grid grid-cols-2 md:grid-cols-1 gap-2 text-right pr-4 text-sm md:text-base"
        >
          {left.map((item, index) =>
            item.name.trim() === "" ? (
              <div key={index} className="h-5 md:h-6"></div>
            ) : (
              <li key={index} className="text-black">
                {item.name}
              </li>
            )
          )}
        </motion.ul>

        {/* Imagen central */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src="/weserve/image.jpg"
            alt="We serve"
            className="object-cover max-h-72 md:max-h-full"
          />
        </div>

        {/* Lista derecha */}
        <motion.ul
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex-1 grid grid-cols-2 md:grid-cols-1 gap-2 text-left pl-4 text-sm md:text-base"
        >
          {right.map((item, index) => (
            <li key={index} className="text-black">
              {item.name}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default WeServe;
