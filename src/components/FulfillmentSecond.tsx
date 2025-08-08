import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import data from "../data/fulfillmentSecond.json";

export default function FulfillmentSecond() {
  const { title, desc, benefits } = data[0];
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="bg-white md:px-6 py-10 min-h-screen flex items-center justify-center overflow-y-auto"
    >
      <div className="w-full max-w-6xl flex flex-col items-center md:mt-6">
        
        {/* Title + Description */}
        <div className="text-center mb-2">
          <motion.h2
            className="text-[1.5em] md:text-[2.2em] font-bold leading-tight pt-10 md:mx-24 md:pb-2 mx-4"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-black text-xs md:text-xl leading-snug mx-26 text-left pl-8 my-4"
            initial={{ opacity: 0, y: -10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {desc}
          </motion.p>
        </div>

        {/* Image + Benefits */}
        <div className="w-full flex flex-col lg:flex-row items-center lg:items-center gap-2 md:px-18">
          
          {/* Left: Image */}
          <div className="flex-shrink-0 flex justify-center flex-col lg:justify-center lg:items-center w-full lg:w-[480px]">
            <motion.img
              src="/fulfillmentSecond/image.jpg"
              alt="Fulfillment Service"
              className="w-full h-36 object-cover mb-2 surface-duo-img md:ml-22 md:cover-center object-bottom"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
            />
          </div>

          {/* Right: Benefits */}
          <div className="flex-1 flex flex-col justify-center w-full pl-36">
            <div className="space-y-1 md:space-y-3 mr-8">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 * i }}
                >
                  <h4 className="text-[0.6em] md:text-[1.1em]">
                    ● {b.title}
                    <span className="text-[1em] md:text-[1.1em] text-black font-normal leading-tight">
                      : {b.desc.trim()}
                    </span>
                  </h4>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Ajuste específico para Surface Duo / pantallas intermedias */}
<style>
  {`
    @media (min-width: 540px) and (max-width: 720px) {
      .surface-duo-img {
        max-width: 50% !important; /* antes era 70% */
      }
    }
  `}
</style>

    </section>
  );
}
