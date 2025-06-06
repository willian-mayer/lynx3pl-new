import data from "../data/fulfillment.json";
import { motion } from "framer-motion";

export default function Fulfillment() {
  const { title, desc, steps, benefits } = data[0];
  const stepSection = steps[0];

  return (
    <section className="bg-white px-4 md:px-10 py-10 flex flex-col">
      {/* Title & Desc */}
      <div className="text-center max-w-4xl mx-auto mb-10">
        <motion.h2
          className="text-3xl md:text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {title}
        </motion.h2>
        <motion.p
          className="text-gray-700 text-base md:text-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {desc}
        </motion.p>
      </div>

      {/* Main grid layout */}
      <div className="flex flex-col lg:grid lg:grid-cols-2 lg:gap-12 lg:flex-1 pb-4">
        {/* Steps Section */}
        <div className="flex flex-col gap-6">
          <motion.h3
            className="text-xl md:text-2xl font-semibold text-black"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {stepSection.title}
          </motion.h3>
          <p className="text-gray-700 font-medium text-base md:text-lg">
            {stepSection.brief}
          </p>

          <div className="">
            {stepSection.step.map((s, i) => (
              <motion.div
                key={i}
                className=""
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 * i }}
              >
                <h4 className="font-bold text-black mb-1">{s.title} <span className="font-normal text-sm text-gray-700">: {s.desc}</span></h4>
              </motion.div>
            ))}
          </div>

<img
  src={stepSection.imageUrl}
  alt="Fulfillment"
  className="w-full mt-4 rounded-xl shadow-lg object-cover max-h-[300px] lg:max-h-[250px]"
/>

        </div>

        {/* Benefits Section */}
        <div className="mt-10 lg:mt-0 space-y-6 overflow-y-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              className=""
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.2 * i }}
            >
              <h4 className="text-lg font-bold mb-1">
                {b.title}
                <span className=" text-sm text-gray-700 font-normal leading-relaxed">
                  : {b.desc.trim()}
                </span>
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
