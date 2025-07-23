import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import galleryData from "../data/gallery.json";

export default function Gallery() {
  const { desc, images } = galleryData[0];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <section
      ref={ref}
      className="bg-white h-screen flex items-center justify-center px-4 py-6 pb-10"
    >
      <div className="w-full max-w-6xl h-full flex flex-col justify-center mb-12 pt-2">
        {/* Pantallas grandes */}
        <motion.div
          className="hidden lg:grid grid-cols-3 grid-rows-3 gap-4 h-full px-6"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {images.slice(0, 5).map((img, i) => (
            <motion.img
              key={i}
              src={img.imgUrl}
              alt={`Gallery ${i + 1}`}
              className={`w-full h-full object-cover rounded-xl ${
                i === 3
                  ? "row-span-2 col-start-2 row-start-1"
                  : i === 4
                  ? "row-span-2 col-start-3 row-start-1"
                  : `row-start-${i + 1} col-start-1`
              }`}
              variants={itemVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          ))}

          <motion.div
            className="row-start-3 col-start-2 col-span-2 flex items-center justify-center p-4 bg-gray-800 rounded-xl text-center overflow-hidden h-full"
            variants={itemVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="text-sm md:text-base font-medium text-white leading-tight">
              {desc}
            </p>
          </motion.div>
        </motion.div>

        {/* Pantallas pequeñas */}
        <motion.div
          className="lg:hidden min-h-screen overflow-y-auto flex flex-col items-center gap-4 px-4 py-6 hide-scrollbar"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {images.map((img, index) => (
            <motion.img
              key={index}
              src={img.imgUrl}
              alt={`Gallery ${index + 1}`}
              className="w-full max-w-md object-cover rounded-xl"
              variants={itemVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          ))}
          <motion.p
            className="text-center text-base font-medium text-gray-800 mt-4 px-2"
            variants={itemVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {desc}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
