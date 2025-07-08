import { motion } from "framer-motion";

export default function WatchUs() {
  return (
    <section className="h-screen grid grid-cols-3 grid-rows-3 font-bold text-3xl md:text-5xl uppercase tracking-tight">
      {/* Imagen: columnas 1 y 2 */}
      <div className="col-span-2 row-span-3 relative">
        <img
          src="/watchus/image.JPG"
          alt="Watch Us"
          className="w-full h-full object-cover"
        />

        {/* Textos de la segunda fila: parte izquierda */}
        <div className="absolute inset-0 flex items-center justify-end pr-2 row-start-2 col-span-2">
          <div className="space-y-2 text-right text-white drop-shadow-md">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Watch Us 
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Effici
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Accu
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Trans
            </motion.div>
          </div>
        </div>
      </div>

      {/* Columna de color con el resto de las palabras */}
      <div className="col-span-1 row-span-3 bg-[#e8e4dc] relative">
        <div className="absolute inset-0 flex items-center justify-start pl-1 row-start-2 col-start-3">
          <div className="space-y-2 text-left text-black">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Work
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              ency
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              racy
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              parency
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
