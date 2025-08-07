import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import data from "../data/fulfillmentThird.json";

export default function FulfillmentThird() {
  const { title, step, imageUrl } = data;
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="w-full bg-white sm:px-10 lg:px-20 py-2 min-h-screen flex items-center"
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
          className="text-3xl md:text-3xl font-bold text-black mt-20"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>

        {/* Steps */}
        <div className="flex flex-col gap-4 lg:gap-0 md:mx-64 px-4 text-left w-full max-w-2xl mb-8 md:mb-0">
          {step.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: -10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * (i + 1) }}
            >
              <h3 className="text-lg md:text-xl font-bold text-black">
                {s.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-lg">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Image */}
        <div className="flex items-center justify-center">
          <motion.img
            src={imageUrl}
            alt={title}
            className="
              w-full 
              md:w-3/4 
              lg:w-[450px]
              object-cover 
              object-top
              md:rounded-xl
            "
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: step.length * 0.2 }}
          />
        </div>
      </div>
    </section>
  );
}
