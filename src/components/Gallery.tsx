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
      className="bg-white min-h-screen px-4 py-10
                 flex flex-col md:flex md:items-center md:justify-center"
      // Flex en md+ para centrar verticalmente, flex-col para que en móvil el contenido empiece arriba
    >
      <div
        className="w-full md:mx-64 max-w-7xl flex flex-col
                   md:h-auto h-screen overflow-y-auto"
      >
        {/* Pantallas md+ */}
        <motion.div
          className="hidden md:grid grid-cols-3 grid-rows-2 gap-4 w-full"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Fila 1 */}
          {images.slice(0, 3).map((img, i) => (
            <motion.img
              key={i}
              src={img.imgUrl}
              alt={`Gallery ${i + 1}`}
              className="w-full h-72 object-cover shadow-md rounded-xl"
              variants={itemVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          ))}

          {/* Fila 2 */}
          {images.slice(3, 5).map((img, i) => (
            <motion.img
              key={i + 3}
              src={img.imgUrl}
              alt={`Gallery ${i + 4}`}
              className="w-full h-72 object-cover shadow-md rounded-xl"
              variants={itemVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          ))}

          <motion.div
            className="flex items-center justify-center p-4 rounded-xl text-center"
            variants={itemVariants}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <p className="text-sm md:text-lg font-medium text-black leading-relaxed inter">
              {desc}
            </p>
          </motion.div>
        </motion.div>

        {/* Pantallas pequeñas con scroll vertical */}
        <motion.div
          className="md:hidden flex flex-col gap-[-3rem] my-24 md:my-0"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          style={{ scrollBehavior: "smooth" }}
        >
          {images.map((img, index) => (
            <motion.img
              key={index}
              src={img.imgUrl}
              alt={`Gallery ${index + 1}`}
              className={`w-40 h-56 object-cover rounded-xl shadow-md
                ${
                  index % 2 === 0
                    ? "self-end mr-8 -mt-12"
                    : "self-start ml-8 -mt-12"
                }
              `}
              variants={itemVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{ zIndex: images.length - index }}
            />
          ))}

          {/* Texto ahora dentro del scroll */}
          <motion.p
            className="text-center text-base font-medium text-black inter mt-6 px-4"
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
