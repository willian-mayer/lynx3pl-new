import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import services from "../data/services.json";
import Navbar from "./Navbar";
import routes from "../data/routes.json";

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="snap-start w-full bg-white">
      {/* Navbar fijo arriba */}
      <Navbar title="Your Company" routes={routes} />

      {/* Contenido centrado verticalmente */}
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center gap-6 min-h-screen ">
        
        {/* Imagen hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="w-full px-0 md:px-5 h-[40vh] sm:h-[50vh] md:h-[60vh] overflow-hidden shadow-md"
        >
          <img
            src="/services/services.jpg"
            alt="Services"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Lista de servicios */}
        <motion.div
          className="
            bg-white 
            w-full 
            flex flex-col md:flex-row
            flex-wrap 
            justify-center md:justify-around 
            items-center 
            gap-3 md:gap-1
            py-4 px-4 
            z-10 
            relative 
            rounded-lg
          "
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                delayChildren: 0.8,
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {services.map((service, index) => (
            <motion.a
              key={index}
              href={service.route}
              className="font-medium text-black transition-transform duration-300 hover:scale-110 text-3xl sm:text-xl md:text-2xl"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {service.title}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
