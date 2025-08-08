import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import data from "../data/fulfillmentSecond.json";

export default function FulfillmentSecond() {
  const { title, desc, benefits } = data[0];
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="relative bg-white md:px-6 pt-10 pb-2 h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="w-full max-w-6xl flex flex-col md:grid md:grid-cols-3 gap-6 items-center h-full">
        
        {/* Columna 1: Título */}
        <div className="flex flex-col justify-center px-4 md:mb-40">
          <motion.h2
            className="text-[1.5em] md:text-4xl font-medium leading-tight mb-4 md:pr-28 mt-10 md:mt-0 text-center md:text-left"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>

          {/* El párrafo aparece aquí en móvil */}
          <motion.p
            className="text-black text-xs md:hidden leading-snug  md:mx-0 ml-30 mr-20"
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {desc}
          </motion.p>
        </div>

        {/* Columna 2: Imagen */}
        <div className="flex justify-center items-center overflow-hidden md:h-[200px] md:mt-62">
          <motion.img
            src="/fulfillmentSecond/image.jpg"
            alt="Fulfillment Service"
            className="
              md:w-auto
              md:h-72 
              object-cover 
              surface-duo-img 
              md:object-[center]
            "
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          />
        </div>

        {/* Columna 3: Benefits */}
        <div className="flex flex-col justify-center px-4">
          <div className="space-y-2">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 * i }}
              >
                <h4 className="text-[0.7em] md:text-[1.05em] mr-2 ml-30 md:mr-0 md:ml-0">
                  ● {b.title}
                  <span className="text-black font-normal">
                    : {b.desc.trim()}
                  </span>
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* El párrafo para pantallas md+ */}
      <motion.p
        className="hidden md:block absolute bottom-8 text-[1.4em] font-bold text-center leading-snug"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {desc}
      </motion.p>

      {/* Ajuste específico para Surface Duo / pantallas intermedias */}
      <style>
        {`
          @media (min-width: 540px) and (max-width: 720px) {
            .surface-duo-img {
              max-width: 50% !important;
            }
          }
        `}
      </style>
    </section>
  );
}
