import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import data from "../data/fulfillmentSecond.json";

export default function FulfillmentSecond() {
  const { title, desc, benefits } = data[0];
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="bg-white px-4 md:px-6 py-10 min-h-screen flex items-center justify-center overflow-y-auto"
    >
      <div className="w-full max-w-6xl flex flex-col items-center">
        
        {/* Title + Description */}
        <div className="text-center mb-10 ">
          <motion.h2
            className="text-2xl md:text-5xl font-bold leading-tight pt-10  md:mx-24 md:pb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-gray-800 text-sm md:text-xl font-medium leading-snug"
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {desc}
          </motion.p>
        </div>

        {/* Image + Benefits */}
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start gap-8">
          
          {/* Left: Image */}
          <div className="flex-shrink-0 flex justify-center lg:justify-start w-full lg:w-1/2">
            <motion.img
              src="/fulfillmentSecond/image.jpg"
              alt="Fulfillment Service"
              className="w-full max-w-xl object-cover rounded-lg shadow-md"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
            />
          </div>

          {/* Right: Benefits */}
          <div className="flex-1 flex flex-col justify-center w-full lg:w-1/2">
            <div className="space-y-3">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 * i }}
                >
                  <h4 className="text-sm md:text-lg font-bold">
                    {b.title}
                    <span className="text-xs md:text-lg text-black font-normal leading-tight">
                      : {b.desc.trim()}
                    </span>
                  </h4>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
