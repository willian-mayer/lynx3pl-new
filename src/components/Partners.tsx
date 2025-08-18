// src/components/Partners.tsx
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import data from "../data/partners.json";

export default function Partners() {
  const { title, years, partners } = data;
  const [count, setCount] = useState(0);
  const targetYear = years[0].year;

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const isDesktop = useMediaQuery({ minWidth: 1024 }); // lg breakpoint

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
      <div className="w-full max-w-6xl flex flex-col items-center gap-6 mt-20 md:mt-40">
        {isDesktop ? (
          // 🖥 Desktop Layout
          <div className="w-full max-w-5xl flex flex-row items-center gap-10">
            {/* Texto del título */}
            <motion.h2
              className="text-5xl font-bold text-[#008000] text-right ml-32 mt-56 flex-1"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              {title}
            </motion.h2>

            {/* Cuadro negro con número */}
            <div className="bg-black text-white flex items-end justify-center w-80 h-80">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-6xl font-bold m-6"
              >
                {count}+
                <p className="text-start text-[0.44em] font-medium pr-5">
                  {years[0].desc}
                </p>
              </motion.div>
            </div>
          </div>
        ) : (
          // 📱 Mobile Layout
          <div className="w-full max-w-5xl flex flex-col-reverse items-center gap-10">
            {/* Texto del título */}
            <motion.h2
              className="text-3xl font-bold text-[#008000] text-right ml-16 mt-4 flex-1"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              {title}
            </motion.h2>

            {/* Cuadro negro con número */}
            <div className="bg-black text-white flex items-end justify-center w-55 h-55">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="text-5xl font-bold m-6"
              >
                {count}+
                <p className="text-start text-[0.38em] font-medium">
                  {years[0].desc}
                </p>
              </motion.div>
            </div>
          </div>
        )}

        {/* Partner Logos */}
        <div className="w-full flex flex-wrap justify-center items-end gap-1 mt-5 px-10 gap-3 md:px-0 md:gap-2">
          {partners.map((p, i) => (
            <motion.div
              key={i}
              className="flex items-end justify-center w-[15%] md:w-auto md:flex-1"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <img
                src={p.partnersUrl}
                alt={`Partner ${i + 1}`}
                className="object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
  