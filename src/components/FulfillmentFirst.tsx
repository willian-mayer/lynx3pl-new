import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import data from "../data/fulfillmentFirst.json";

export default function FulfillmentFirst() {
  const { title, desc } = data;
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
          lg:grid lg:grid-rows-[auto_auto_1fr] lg:grid-cols-1 lg:gap-8 lg:mx-24
          text-center
        "
      >
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-black mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-base md:text-2xl text-gray-700 md:mx-64 mb-8 px-4 text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {desc}
        </motion.p>

        {/* Image */}
        <div className="flex items-center justify-center">
          <motion.img
            src="/fulfillmentFirst/image.jpg"
            alt={title}
            className="
              w-full 
              md:w-3/4 
              lg:w-2/3
              max-h-[450px] 
              object-cover 
              md:rounded-xl
            "
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
        </div>
      </div>
    </section>
  );
}
