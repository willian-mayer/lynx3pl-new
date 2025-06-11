import data from "../data/partners.json";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Partners() {
  const { title, years, partners } = data;
  const [count, setCount] = useState(0);
  const targetYear = years[0].year;

  // Count-up animation effect
  useEffect(() => {
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
  }, [targetYear]);

  return (
    <section className="bg-white px-4 md:px-10 py-10 grid gap-6 lg:grid-cols-2 lg:grid-rows-3 lg:h-screen">
      {/* Title */}
      <div className="lg:row-span-2 flex items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-start">
          {title}
        </h2>
      </div>

      {/* Years Experience */}
      <div className="lg:row-span-2 bg-black text-white flex flex-col justify-center items-center p-6 rounded-xl">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-6xl md:text-8xl font-bold"
        >
          {count}+ 
        </motion.div>
        <p className="mt-4 text-center text-sm md:text-lg font-medium">
          {years[0].desc}
        </p>
      </div>

      {/* Partner Logos */}
      <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 items-center justify-items-center">
        {partners.map((p, i) => (
          <motion.img
            key={i}
            src={p.partnersUrl}
            alt={`Partner ${i + 1}`}
            className="w-20 md:w-28 lg:w-32 object-contain"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          />
        ))}
      </div>
    </section>
  );
}