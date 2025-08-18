import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import transloadingData from "../data/transloading.json";

export default function Transloading() {
  const { title, ["why-us"]: whyUs, imgUl } = transloadingData;
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="w-full bg-white sm:px-10 md:px-50 py-10 min-h-screen flex items-center"
    >
      <div
        className="
          w-full
          flex flex-col items-center justify-center gap-6
          md:grid md:grid-cols-3 md:gap-8
          md:mx-0 lg:mt-14 mt-5
        "
      >
        {/* Columna izquierda: Items + Botón (solo md+) */}
        <div className="w-full grid grid-cols-1 gap-2 px-4 md:px-0 md:col-span-1 ml-10 md:ml-0 md:gap-2 md:mt-12">
          {/* Título solo en móvil */}
          <motion.h2
            className="block md:hidden text-[1.2em] font-black text-black inter-bold mb-4 ml-20 md:ml-0 mr-34 md:mr-0"
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {title} 
          </motion.h2>

          {whyUs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-[0.8em] font-normal text-black inter md:inter-bold md:text-[1em] ml-2">
                • {item.name}
              </h3>
            </motion.div>
          ))}

          {/* Botón solo en md+ */}
          <motion.button
            className="hidden md:block mt-4 bg-[#006050] text-white py-2 rounded-xl font-medium hover:bg-gray-800 transition text-xs md:mt-30 w-50"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: whyUs.length * 0.1 }}
          >
            Contact Us for a Custom Quote​
          </motion.button>
        </div>

        {/* Columna derecha: Imagen + Título + Botón (solo móvil) */}
        <div className="md:col-span-2 flex flex-col items-center md:items-start gap-1 md:gap-15">
          {/* Imagen */}
          <motion.img
            src={imgUl}
            alt={title}
            className="
              h-[120px]
              w-[480px]
              md:w-full
              object-fill
              md:h-[200px] lg:object-cover
              object-center
              md:rounded-xl
            "
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          />

          {/* Título solo en md+ */}
          <motion.h2
            className="hidden md:block text-3xl font-bold text-black inter-bold md:mr-100"
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h2>

          {/* Botón solo en móvil */}
          <motion.button
            className="block md:hidden mt-1 bg-[#006050] text-white px-6 py-2 rounded-xl font-medium hover:bg-gray-800 transition text-xs"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: whyUs.length * 0.1 }}
          >
            Contact Us for a Custom Quote​
          </motion.button>
        </div>
      </div>
    </section>
  );
}
