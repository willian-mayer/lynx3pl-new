import { motion, useInView } from "framer-motion";
import { useRef, Fragment } from "react";
import services from "../data/services.json";

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="snap-start w-full bg-white min-h-screen flex flex-col items-center justify-center gap-8 px-2 sm:px-24"
    >
      {/* Imagen hero responsive con <picture> */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
        className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] overflow-hidden md:px-64"
      >
        <picture>
          {/* Imagen para pantallas md en adelante */}
          <source
            srcSet="/services/service-md.png"
            media="(min-width: 768px)"
          />
          {/* Imagen por defecto para móviles */}
          <img
            src="/services/service-xs.png"
            alt="Services"
            className="w-full h-full object-cover rounded-lg"
          />
        </picture>
      </motion.div>

      {/* Lista de servicios */}
      <motion.div
        className="
          bg-white 
          w-full 
          flex flex-col md:flex-row flex-wrap 
          justify-center md:justify-around 
          items-center 
          py-6 px-4 
          z-10 relative rounded-lg md:px-64
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
          <Fragment key={service.title}>
            <motion.a
              href={service.route}
              className="
                font-semibold text-black 
                transition-transform duration-300 hover:scale-110 
                text-3xl sm:text-lg md:text-2xl 
                py-2 sm:py-0
                w-full sm:w-auto text-center
              "
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {service.title}
            </motion.a>

            {/* Divisor para pantallas pequeñas (vertical) */}
            {index < services.length - 1 && (
              <>
                {/* En mobile → línea separadora */}
                <span className="block sm:hidden w-full h-px my-2" />

                {/* En desktop → divisor vertical */}
                <span className="hidden sm:block w-0.5 h-6 bg-black" />
              </>
            )}
          </Fragment>
        ))}
      </motion.div>
    </section>
  );
}
