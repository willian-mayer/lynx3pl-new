// src/components/Storage.tsx
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import data from "../data/storage.json";

const Storage = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 }); // lg: breakpoint
  const { title, desc, desktop, smartphone } = data;

  return (
    <section className="w-full bg-white">
      {isDesktop ? (
        // 🖥 Desktop Layout - 5 columnas con 6 imágenes
        <div className="grid grid-cols-5 grid-rows-2 w-full h-screen px-40 py-30 gap-0">
          {/* Fila 1 */}
          <motion.div
            className="col-span-2 row-span-1 flex flex-col justify-end px-8 bg-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold leading-8 text-left mr-20 mb-3">
              {title}
            </h2>
          </motion.div>

          <div className="col-span-3 row-span-1 grid grid-cols-3">
            {desktop.slice(0, 3).map((img, i) => (
              <motion.img
                key={i}
                src={img.imageUrl}
                alt={`Storage ${i + 1}`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
              />
            ))}
          </div>

          {/* Fila 2 */}
          <motion.div
            className="col-span-2 row-span-1 flex items-center px-8 bg-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-black font-medium leading-6 text-left mr-27">
              {desc}
            </p>
          </motion.div>

          <div className="col-span-3 row-span-1 grid grid-cols-3">
            {desktop.slice(3, 6).map((img, i) => (
              <motion.img
                key={i + 3}
                src={img.imageUrl}
                alt={`Storage ${i + 4}`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 * i }}
              />
            ))}
          </div>
        </div>
      ) : (
        // 📱 Mobile Layout (igual que antes)
        <div className="flex flex-col items-center justify-between min-h-screen">
          {/* Imagen top */}
          <motion.img
            src={smartphone[0].imageTop}
            alt="Storage top"
            className="w-full max-h-40 object-contain mt-20"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          />

          {/* Texto central */}
          <motion.div
            className="text-center flex-1 flex flex-col justify-start  py-2 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-[1em] font-bold mb-2 text-left leading-4 ml-26">
              Versatile storage options <br />& individual office spaces
            </h2>
            <p className="text-[.5em] text-black font-medium text-left ml-26">
              Our individual small offices and individual warehouse <br />spaces,
              ranging from 600 to 5,000 square feet, are <br />uniquely designed and
              completely separate from our <br />main warehouse. These private
              workspaces offer <br />flexibility and privacy, making them ideal for <br />
              entrepreneurs with specialized business needs.
            </p>
          </motion.div>

          {/* Imagen bottom */}
          <motion.img
            src={smartphone[1].imageBottom}
            alt="Storage bottom"
            className="w-full object-contain pb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
        </div>
      )}
    </section>
  );
};

export default Storage;
