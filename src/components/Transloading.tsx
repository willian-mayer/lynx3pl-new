import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import transloadingData from "../data/transloading.json";

export default function Transloading() {
  const { title, ["why-us"]: whyUs, imgUl } = transloadingData;
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="w-full bg-white sm:px-10 lg:px-64 py-10 min-h-screen flex items-center"
    >
      <div
        className="
          w-full
          flex flex-col items-center justify-center 
          lg:grid lg:grid-rows-[auto_1fr] lg:grid-cols-1 lg:gap-8 lg:mx-24 lg:mt-14
        "
      >
        {/* Imagen */}
        <div className="flex items-center justify-center mb-6 lg:mb-0 lg:col-span-1">
          <motion.img
            src={imgUl}
            alt={title}
            className="
              w-full 
              lg:h-[280px] 
              object-cover 
              object-center
            "
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          />
        </div>

        {/* Lista */}
        <div className="w-full grid grid-cols-1 gap-2 px-2">
          {/* Título */}
          <motion.h2
            className="text-2xl font-bold text-black inter-bold mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h2>

          {/* Items */}
          {whyUs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-md font-normal text-black inter">
                • {item.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
