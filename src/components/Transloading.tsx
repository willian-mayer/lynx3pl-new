import data from "../data/transloading.json";
import { motion } from "framer-motion";

export default function Transloading() {
  const { title, "why-us": reasons, imgUl } = data;

  return (
    <section className="bg-white px-4 md:px-10 py-10 lg:h-screen flex flex-col">
      {/* Grid layout */}
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:flex-1 lg:items-center lg:gap-10">
        {/* Left Column: Title + Why Us */}
        <div className="space-y-6 lg:ml-20 z-10">
          {/* Title (now part of left column) */}
          <motion.h2
            className="text-3xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>

          {/* "Why Us?" subtitle */}
          <motion.h3
            className="text-xl md:text-2xl font-semibold mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            Why Us?
          </motion.h3>

          {/* Items */}
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
            >
              <h4 className="text-lg font-semibold text-black">
                • <span className="font-normal">{item.name}</span>
              </h4>
            </motion.div>
          ))}
        </div>

        {/* Right Column: Image */}
        <motion.div
          className="mt-10 lg:mt-0 flex justify-center items-center w-full lg:pr-10 lg:h-full overflow-hidden"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={imgUl}
            alt="Transloading"
            className="w-full lg:w-[150%] max-w-none lg:max-h-full object-contain transform lg:rotate-90"
          />
        </motion.div>
      </div>
    </section>
  );
}
