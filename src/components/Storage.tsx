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
        // 🖥 Desktop Layout - 6 columnas
        <div className="grid grid-cols-6 grid-rows-2 w-full h-screen px-40 py-35 gap-0">
          {/* Fila 1 */}
          <motion.img
            src={desktop[0].imageUrl}
            alt="Storage 1"
            className="w-full h-full object-cover col-span-2 row-span-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          />
          <motion.img
            src={desktop[1].imageUrl}
            alt="Storage 2"
            className="w-full h-full object-cover col-span-1 row-span-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />
          <motion.img
            src={desktop[2].imageUrl}
            alt="Storage 3"
            className="w-full h-full object-cover col-span-1 row-span-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
          <motion.div
            className="col-span-2 row-span-1 flex flex-col justify-center px-8 bg-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-2xl font-bold leading-tight text-left mx-auto">Versatile storage options <br />& individual office spaces</h2>
          </motion.div>

          {/* Fila 2 */}
          <motion.div
            className="col-span-3 row-span-1 flex items-center px-8 bg-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-black font-medium leading-6 text-left mr-35">{desc}</p>
          </motion.div>

          <motion.img
            src={desktop[3].imageUrl}
            alt="Storage 4"
            className="w-full h-full object-cover col-span-1 row-span-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          />

          <motion.img
            src={desktop[4].imageUrl}
            alt="Storage 5"
            className="w-full h-full object-cover col-span-2 row-span-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
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
            className="text-center flex-1 flex flex-col justify-center p-10 py-2 mt-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-[0.8em] font-bold mb-2 text-left pr-32 pl-4 leading-4">
              {title}
            </h2>
            <p className="text-[.42em] text-black font-medium text-left pr-30 pl-4">
              Our individual small offices and individual <br />warehouse spaces,
              ranging from 600 <br />to 5,000 square feet, are uniquely <br />designed and
              completely separate <br />from our main warehouse. These <br />private
              workspaces offer <br />flexibility and privacy, <br />making them ideal <br />for
              entrepreneurs <br />with specialized <br />business needs.
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
