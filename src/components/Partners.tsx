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
      className="bg-white px-4 md:px-10 py-10 h-screen flex items-center"
    >
      <div className="w-full max-w-3xl mx-auto h-full grid grid-rows-5 grid-cols-2 gap-6">
        {/* Title */}
        <div className="row-span-3 flex items-center justify-center">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-green-800"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            {title}
          </motion.h2>
        </div>

        {/* Years */}
        <div className="row-span-3 flex items-center justify-start">
          <div className="bg-black h-full text-white p-6 rounded-xl flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="text-6xl md:text-8xl font-bold"
            >
              {count}+
            </motion.div>
            <p className="mt-4 text-start text-xl md:text-2xl font-medium">
              {years[0].desc}
            </p>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="col-span-2 w-full h-full flex flex-col justify-between gap-y-4">
          {/* Primera fila */}
          <div className="w-full flex justify-between items-center gap-x-4">
            {partners.slice(0, 4).map((p, i) => (
              <motion.div
                key={i}
                className="w-1/5 min-w-[80px] h-20 flex items-center justify-center"
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

          {/* Segunda fila */}
          <div className="w-full flex justify-between items-center gap-x-4">
            {partners.slice(4).map((p, i) => (
              <motion.div
                key={i + 4}
                className="w-1/4 min-w-[100px] h-24 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: (i + 4) * 0.05 }}
              >
                <img
                  src={p.partnersUrl}
                  alt={`Partner ${i + 5}`}
                  className="w-full h-full object-contain scale-110"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
