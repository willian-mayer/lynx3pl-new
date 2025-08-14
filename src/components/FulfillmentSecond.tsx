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
      <div className="w-full max-w-6xl flex flex-col md:grid md:grid-cols-2 gap-6 items-center h-full">

        {/* Columna 1: Imagen + Título con orden adaptable */}
        <div className="flex flex-col md:flex-row items-center md:items-start md:mb-23 gap-6">
          
          {/* Imagen (segundo en móvil, primero en escritorio) */}
<div className="flex justify-center items-center overflow-hidden md:h-[180px] md:w-[300px] h-[100px] order-2 md:order-1">
  <motion.picture
    initial={{ opacity: 0, scale: 0.95 }}
    animate={inView ? { opacity: 1, scale: 1 } : {}}
    transition={{ duration: 0.6 }}
  >
    <source
      media="(min-width: 768px)"
      srcSet="/fulfillmentSecond/image-md.jpg"
    />
    <img
      src="/fulfillmentSecond/image.jpg"
      alt="Fulfillment Service"
      className="
        md:h-[180px]
        object-cover 
        md:object-[center]
      "
    />
  </motion.picture>
</div>


          {/* Texto (primero en móvil, segundo en escritorio) */}
          <div className="order-1 md:order-2">
            <motion.h2
              className="text-[1.2em] md:text-2xl font-bold leading-tight mb-4 md:mr-70 mt-10 md:mt-0 text-center md:text-left md:flex-1"
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              {title}
            </motion.h2>

            {/* Descripción solo en móvil */}
            <motion.p
              className="text-black text-[0.58em] leading-snug md:hidden ml-35 mr-4"
              initial={{ opacity: 0, y: -10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {desc}
            </motion.p>
          </div>
        </div>

        {/* Columna 2: Benefits */}
        <div className="flex flex-col justify-center px-4">
          <div className="space-y-3">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 * i }}
              >
                <h4 className="text-[0.58em] md:text-[0.9em] ml-30 md:mr-0 md:ml-0">
                  ● {b.title}
                  <span className="text-black font-normal">
                    : {b.desc.trim()}
                  </span>
                </h4>
              </motion.div>
              
            ))}
                            {/* El párrafo para pantallas md+ */}
      <motion.p
        className="hidden md:block absolute bottom-8 text-[0.9em] font-bold text-left leading-snug mr-46 mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {desc}
      </motion.p>
          </div>

        </div>
      </div>



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
