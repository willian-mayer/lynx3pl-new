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
          lg:grid lg:grid-cols-1 lg:grid-rows-[auto_1fr] lg:gap-8 lg:mx-24 lg:mt-14 mt-5
        "
      >
        {/* Texto */}
        <div className="w-full grid grid-cols-1 gap-2 px-18 mb-6 lg:mb-0">
          {/* Título */}
          <motion.h2
            className="text-md font-bold text-black inter-bold mb-4"
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
              <h3 className="text-[0.8em] font-normal text-black inter mr-20">
                • {item.name}
              </h3>
            </motion.div>
          ))}
        </div>

{/* Imagen */}
<div className="flex items-center justify-center lg:col-span-1">
  <motion.img
    src={imgUl}
    alt={title}
    className="
      h-[120px]
      w-[420px]
      object-fill
      lg:h-[280px] lg:object-cover
      object-center
    "
    initial={{ opacity: 0, scale: 0.95 }}
    animate={inView ? { opacity: 1, scale: 1 } : {}}
    transition={{ duration: 0.6 }}
  />
</div>

                  {/* Botón */}
          <motion.button
            className="mt-1 bg-black text-white px-6 py-2 rounded-xl font-medium hover:bg-gray-800 transition text-xs"
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: whyUs.length * 0.1 }}
          >
            Contact Us for a Custom Quote​
          </motion.button>
      </div>
    </section>
  );
}
