import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import data from "../data/partners.json";

export default function Partners() {
  const { title, years, partners } = data;
  const [count, setCount] = useState(0);
  const targetYear = years[0].year;

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const interval = setInterval(() => {
        start += 1;
        if (start > targetYear) {
          clearInterval(interval);
        } else {
          setCount(start);
        }
      }, 30);
      return () => clearInterval(interval);
    }
  }, [inView, targetYear]);

  return (
    <section
      ref={ref}
      className="bg-white px-4 md:px-10 py-10 flex flex-col items-center mt-20"
    >
      <div className="w-full max-w-5xl flex flex-col items-center gap-6 mt-20 md:mt-40 ">
        {/* Cuadro negro con número */}
        <div className="w-full max-w-5xl flex flex-col-reverse md:flex-row items-center gap-10 ">
          {/* Texto del título */}
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-[#008000] text-right md:text-right ml-32 mt-4 md:mt-0 flex-1 md:mt-56"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h2>

          {/* Cuadro negro con número */}
          <div className="bg-black text-white flex items-end justify-center w-55 h-55 md:w-80 md:h-80 mt-0 md:mt-0">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-5xl md:text-6xl font-bold m-6"
            >
              {count}+
              <p className="text-start text-[0.38em] md:text-[0.44em] font-medium md:pr-5">
                {years[0].desc}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="w-full flex flex-wrap justify-start gap-1 mt-5 px-10 ml-15 md:ml-0 md:px-0 md:gap-10">
          {partners.map((p, i) => (
            <motion.div
              key={i}
              className="flex items-center justify-center w-[20%] md:w-auto md:flex-1 h-[40px] md:h-20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <img
                src={p.partnersUrl}
                alt={`Partner ${i + 1}`}
                className="w-full h-full object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
