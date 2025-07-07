import data from "../data/fulfillment.json";
import { motion } from "framer-motion";

export default function Fulfillment() {
  const { title, desc, steps, benefits } = data[0];
  const stepSection = steps[0];

  return (
    <section className="bg-white h-screen px-4 md:px-6 py-6 flex items-start justify-center">
      <div className="w-full max-w-6xl h-full mx-auto flex flex-col mb-12 pt-2">
        {/* Title & Desc */}
        <div className="text-center mb-6 px-2">
          <motion.h2
            className="text-2xl md:text-4xl font-bold leading-tight mb-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-gray-800 text-sm md:text-base font-medium leading-snug"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {desc}
          </motion.p>
        </div>

        {/* Main content layout */}
        <div className="flex flex-col lg:flex-row gap-6 flex-1 px-2 overflow-visible">
          {/* Steps Section */}
          <div className="flex flex-col flex-1">
            <motion.h3
              className="text-lg md:text-xl font-semibold text-black mb-2"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              {stepSection.title}
            </motion.h3>

            <p className="text-black text-xl font-medium mb-3">
              {stepSection.brief}
            </p>

            <div className="space-y-2">
              {stepSection.step.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 * i }}
                >
                  <h4 className="font-bold text-sm md:text-base text-black mb-1">
                    {s.title}
                    <span className="font-medium text-gray-900 text-xs md:text-sm">
                      : {s.desc}
                    </span>
                  </h4>
                </motion.div>
              ))}
            </div>

            {/* Imagen con altura ajustada para evitar scroll */}
            <div className="w-full h-36 md:h-44 lg:h-52 mt-4 rounded-xl overflow-hidden">
              <img
                src={stepSection.imageUrl}
                alt="Fulfillment"
                className="w-full h-full object-top"
              />
            </div>
          </div>

          {/* Benefits Section */}
          <div className="flex-1 space-y-3">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 * i }}
              >
                <h4 className="text-sm md:text-base font-bold">
                  {b.title}
                  <span className="text-xs md:text-sm text-gray-900 font-medium leading-tight">
                    : {b.desc.trim()}
                  </span>
                </h4>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
