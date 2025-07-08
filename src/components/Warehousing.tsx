import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import data from "../data/warehousing.json";

export default function Warehousing() {
  const { title, items } = data[0];
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section ref={ref} className="bg-white h-screen px-4 md:px-6 py-6 flex items-center justify-center">
      <div className="w-full max-w-6xl h-full mx-auto flex flex-col justify-center mb-12 pt-2">
        <motion.h2
          className="text-2xl md:text-4xl lg:text-5xl font-bold text-center md:text-end px-2 md:px-0 mb-6 py-2"
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>

        <div className="w-full h-32 md:h-40 lg:h-44 overflow-hidden shadow-md rounded-md mb-6">
          <img
            src="/warehousing/image.jpg"
            alt="Warehousing"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1">
          <div className="flex flex-col justify-start space-y-3 px-2 md:px-0 py-2">
            {items.map((item, index) => (
              <motion.div
                key={index}
                className="text-center md:text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 * index }}
              >
                <h3 className="text-base md:text-lg lg:text-xl font-semibold text-black">
                  • {item.title}:{" "}
                  <span className="text-gray-900 font-normal text-base md:text-lg leading-snug">
                    {item.desc}
                  </span>
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
