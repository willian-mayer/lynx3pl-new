import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import data from "../data/hall.json";

export default function Hall() {
  const { title, imgUrl } = data;
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="
        bg-white 
        px-4 md:px-10 
        py-10 
        min-h-screen 
        flex flex-col 
        items-center 
        text-center 
        justify-center
      "
    >
      {/* Title */}
      <motion.h2
        className="text-2xl md:text-4xl font-bold mb-8 max-w-4xl"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>

      {/* Image + Button */}
      <div className="relative w-full max-w-5xl">
        {/* Image */}
        <motion.img
          src={imgUrl}
          alt="Hall Image"
          className="w-full h-auto rounded-xl shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        />

        {/* Button over image */}
        <motion.a
          href="#"
          className="
            absolute left-1/2 -translate-x-1/2 
            bottom-0 translate-y-1/2
            bg-black text-white px-6 py-3 
            rounded-lg shadow-lg 
            hover:bg-gray-800 transition
            w-auto md:w-auto
            max-md:w-[90%] max-md:text-sm
          "
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Contact Us for a Custom Quote
        </motion.a>
      </div>
    </section>
  );
}
