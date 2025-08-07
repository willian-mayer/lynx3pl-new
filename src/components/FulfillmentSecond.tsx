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
      <div className="w-full max-w-6xl flex flex-col items-center md:mt-6">
        
        {/* Title + Description */}
        <div className="text-center mb-8">
          <motion.h2
            className="text-md md:text-[2.2em] font-bold leading-tight pt-10 md:mx-24 md:pb-2"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-gray-800 text-xs md:text-xl font-medium leading-snug"
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
          <div className="flex-shrink-0 flex justify-center flex-col lg:justify-center lg:items-center w-[240px] lg:w-[480px]">
            <motion.img
              src="/fulfillmentSecond/image.jpg"
              alt="Fulfillment Service"
              className="w-full object-cover rounded-lg shadow-md mb-2 surface-duo-img md:ml-22"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
            />
                <a
      href="#form"
      className="bg-black text-white text-base text-sm px-2 font-bold lg:px-4 lg:py-2 rounded-full hover:bg-gray-900 transition whitespace-nowrap w-min border-2 border-black ml-5 lg:ml-20"
    >
      Looking for a new partner?
    </a>
          </div>

          {/* Right: Benefits */}
          <div className="flex-1 flex flex-col justify-center w-full md:pl-36">
            <div className="space-y-3 ">
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.2 * i }}
                >
                  <h4 className="text-xs md:text-[1.1em] font-bold">
                    ● {b.title}
                    <span className="text-xs md:text-[1.1em] text-black font-normal leading-tight">
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
