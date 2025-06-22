import { motion } from "framer-motion";
import services from "../data/services.json";

export default function Services() {
  return (
    <div className="snap-start flex items-center justify-center px-4 md:px-8 xl:px-20 h-full">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center justify-center gap-6 text-center">

        {/* Imagen hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full h-[60vh] overflow-hidden rounded-lg shadow-md"
        >
          <img
            src="/services/services.jpg"
            alt="Services"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Letras con animación escalonada */}
        <motion.div
          className="bg-white w-full flex flex-wrap justify-center items-center gap-4 py-4 px-4 z-10 relative rounded-lg"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {services.map((service, index) => (
            <motion.a
              key={index}
              href={service.route}
              className="text-base md:text-lg lg:text-xl font-medium text-gray-800 transition-transform duration-300 hover:scale-125 hover:text-blue-600"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {service.title}
            </motion.a>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
