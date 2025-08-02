import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import warehousingList from "../data/warehousinglist.json";

export default function WarehousingList() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="w-full bg-white sm:px-10 lg:px-20 py-10 min-h-screen flex items-center"
    >
      <div
        className="
          w-full
          flex flex-col items-center justify-center 
          lg:grid lg:grid-rows-[auto_1fr] lg:grid-cols-1 lg:gap-8 lg:mx-24
        "
      >
        {/* Imagen */}
        <div className="flex items-center justify-center mb-6 lg:mb-0 lg:col-span-1">
          <motion.img
            src="/warehousing/image2.jpg"
            alt="Warehousing"
            className="
              w-full 
              max-h-[400px] 
              object-cover 
              object-bottom 
            "
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          />
        </div>

        {/* Lista */}
        <div className="w-full grid grid-cols-1 gap-2 px-2">
          {warehousingList.map((item, index) => (
            <motion.div
              key={index}
              className=""
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-md md:text-2xl font-bold text-black inter-bold">
                {item.title}: <span className="text-md md:text-2xl text-black font-normal inter">{item.desc}</span>
              </h3>            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
