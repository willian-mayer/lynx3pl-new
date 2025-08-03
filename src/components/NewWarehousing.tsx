import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import warehousingData from "../data/newwarehousing.json";

export default function NewWarehousing() {
  const { title, desc } = warehousingData;
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="w-full bg-white lg:px-6 sm:px-10 lg:px-64 py-10 min-h-screen flex items-center"
    >
      {/* Mobile & Tablet: formato teléfono | Desktop: grid tipo Partners */}
      <div
        className="
          w-full
          flex flex-col items-center justify-center 
          lg:grid lg:grid-rows-3 lg:grid-cols-3 lg:gap-2 lg:mx-24
        "
      >
        {/* Imagen */}
        <div className="flex items-center justify-center mb-6 lg:mb-0 lg:row-span-3 lg:col-start-2 lg:col-span-2">
          <motion.img
            src="/newwarehousing/image.png"
            alt="Warehousing"
            className="w-full h-full shadow-md"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          />
        </div>

        {/* Title */}
        <div className="px-6 text-center flex items-center justify-center lg:text-left lg:items-center lg:justify-start lg:row-span-3 lg:col-start-1 pt-12">
          <motion.h2
            className="text-4xl text-black mb-4 inter-bold sm:text-4xl lg:text-5xl"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h2>
        </div>

        {/* Descripción */}
        <div className="px-6 text-center lg:text-left lg:col-span-3 lg:col-start-1 lg:row-start-5 flex items-center justify-center lg:mt-10">
          <motion.p
            className="text-xl sm:text-2xl text-black inter"
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
