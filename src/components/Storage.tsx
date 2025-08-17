import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import data from "../data/storage.json";

const Storage = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 }); // lg: breakpoint
  const { title, desc, desktop, smartphone } = data;

  return (
    <section className="w-full bg-white">
      {isDesktop ? (
        // 🖥 Desktop Layout
        <div className="grid grid-cols-6 grid-rows-2 w-full h-screen p-25">
          {/* Imagen 1 ocupa fila 1 col 1-2 */}
          <motion.img
            src={desktop[0].imageUrl}
            alt="Storage 1"
            className="w-full h-full object-cover col-span-2 row-span-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          />

          {/* Imagen 2, 3 y 4 en fila 1 col 3-6 */}
          <div className="col-span-4 row-span-1 grid grid-cols-3">
            {desktop.slice(1, 4).map((img, i) => (
              <motion.img
                key={i}
                src={img.imageUrl}
                alt={`Storage ${i + 2}`}
                className="w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 * i }}
              />
            ))}
          </div>

          {/* Imagen 5 en fila 2 col 1-2 */}
          <motion.img
            src={desktop[4].imageUrl}
            alt="Storage 5"
            className="w-full h-full object-cover col-span-2 row-span-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          />

          {/* Texto en fila 2 col 3-6 */}
          <motion.div
            className="col-span-4 row-span-1 flex flex-col justify-center text-center px-8 bg-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-[1.5em] font-bold mb-4 mx-67 leading-7">{title}</h2>
            <p className="text-[1.25em] text-black font-medium leading-6 text-left mx-20 mr-12">{desc}</p>
          </motion.div>
        </div>
      ) : (
        // 📱 Mobile Layout
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
            <h2 className="text-[0.8em] font-bold mb-2 text-left pr-34 pl-4 leading-4">Versatile storage options & individual office <br />spaces</h2>
            <p className="text-[.3em] text-black font-medium text-left pr-46 pl-4">{desc}</p>
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
