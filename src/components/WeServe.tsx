import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "react-responsive";
import data from "../data/weserve.json";

const WeServe = () => {
  const { title, left, right } = data[0];
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const isDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <section
      ref={ref}
      className={`bg-white px-4 md:px-12 ${
        isDesktop ? "md:h-screen flex flex-col items-center justify-end pb-30" : "flex flex-col items-center justify-center min-h-screen"
      }`}
    >
      {isDesktop ? (
        // 🖥 Desktop Layout
        <>
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-md font-bold text-center mb-12"
          >
            {title}
          </motion.h2>

          <div className="flex flex-col md:flex-row w-full h-full md:h-[70%] justify-center items-start">
            <motion.ul
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex-1 grid grid-cols-2 md:grid-cols-1 font-normal text-right pr-4 md:text-lg"
            >
              {left.map((item, i) =>
                item.name.trim() === "" ? (
                  <div key={i} className="h-5 md:h-6" />
                ) : (
                  <li key={i} className="text-black">
                    {item.name}
                  </li>
                )
              )}
            </motion.ul>

            <div className="flex justify-center items-center">
              <img
                src="/weserve/image.jpg"
                alt="We serve"
                className="object-cover max-h-72 md:max-h-full px-4"
              />
            </div>

            <motion.ul
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex-1 grid grid-cols-2 md:grid-cols-1 font-normal text-left pl-4 text-sm md:text-lg"
            >
              {right.map((item, i) => (
                <li key={i} className="text-black">
                  {item.name}
                </li>
              ))}
            </motion.ul>
          </div>
        </>
      ) : (
        // 📱 Mobile Layout centrado
        <>
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-md font-bold text-center mb-6 mt-16"
          >
            {title}
          </motion.h2>

          <motion.img
            src="/weserve/image.jpg"
            alt="We serve"
            className="w-auto h-68 object-cover mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          />

          <div className="grid grid-cols-2 gap-7 w-full justify-center">
            <motion.ul
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-right text-xs flex flex-col items-left"
            >
              {left.map((item, i) =>
                item.name.trim() === "" ? (
                  <div key={i} className="h-4" />
                ) : (
                  <li key={i} className="text-black">
                    {item.name}
                  </li>
                )
              )}
            </motion.ul>

            <motion.ul
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-left text-xs flex flex-col items-right"
            >
              {right.map((item, i) => (
                <li key={i} className="text-black">
                  {item.name}
                </li>
              ))}
            </motion.ul>
          </div>
        </>
      )}
    </section>
  );
};

export default WeServe;
