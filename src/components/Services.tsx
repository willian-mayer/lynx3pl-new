import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import services from "../data/services.json";

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="snap-start flex items-center justify-center px-5 h-full">
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center gap-6 text-center">
        {/* Imagen hero */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="w-full h-[60vh] overflow-hidden rounded-lg shadow-md"
        >
          <img
            src="/services/services.jpg"
            alt="Services"
            className="w-full h-full object-fill"
          />
        </motion.div>

        {/* Letras con animación escalonada */}
        <motion.div
          className="bg-white w-full flex flex-wrap justify-center items-end gap-7 py-4 px-4 z-10 relative rounded-lg"
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
          {services.map((service, index) => {
            const isFulfillment = service.title.toLowerCase() === "fulfillment";

            return (
              <motion.a
                key={index}
                href={service.route}
                className={`font-medium text-gray-900 transition-transform duration-300 hover:scale-125 ${
                  isFulfillment ? "text-5xl" : "text-3xl"
                }`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                {service.title}
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
