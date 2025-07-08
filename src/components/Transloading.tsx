import data from "../data/transloading.json";
import { motion } from "framer-motion";

export default function Transloading() {
  const { title, "why-us": reasons, imgUl } = data;

  return (
    <section className="h-screen snap-start bg-white flex justify-center items-center px-4">
      <div className="max-w-6xl w-full h-full grid grid-cols-3">
        {/* Left Column: Text */}
        <div className="h-full flex flex-col justify-center space-y-6 gap-10">
          {/* Title */}
          <motion.h2
            className="text-3xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>

          {/* Subtitle */}


          {/* List */}
          <div className="space-y-2">
                      <motion.h3
            className="text-xl md:text-2xl font-semibold"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            Why Us?
          </motion.h3>
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
        </div>

        {/* Middle Column: Empty space */}
        <div className="h-full"></div>

        {/* Right Column: Image */}
        <motion.div
          className="h-full w-full overflow-hidden rounded-lg shadow-md"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={imgUl}
            alt="Transloading"
            className="w-full h-full object-cover object-bottom"
          />
        </motion.div>
      </div>
    </section>
  );
}
