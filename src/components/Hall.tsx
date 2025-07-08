import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import data from "../data/hall.json";

export default function Hall() {
  const { title, imgUrl } = data;
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="bg-white px-4 md:px-10 py-10 flex flex-col items-center text-center"
    >
      <motion.h2
        className="text-2xl md:text-4xl font-bold mb-8 max-w-4xl"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>

      <motion.img
        src={imgUrl}
        alt="Hall Image"
        className="w-full max-w-3xl h-auto rounded-xl shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      />
    </section>
  );
}
