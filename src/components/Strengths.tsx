import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import strengthsData from "../data/strengths.json";

export default function Strengths() {
  const { title, description } = strengthsData[0];
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="flex flex-col-reverse lg:flex-row w-full min-h-screen bg-white justify-center lg:justify-normal px-5 py-12"
    >
      {/* Video abajo en móvil, izquierda en desktop */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center p-6 md:p-12"
      >
        <video
          src="/watchus/Lynx3PL.mp4"
          className="max-w-xl w-full h-auto object-contain"
          controls
          playsInline
        />
      </motion.div>

      {/* Texto arriba en móvil, derecha en desktop */}
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: {
              delay: 0.8,
              staggerChildren: 0.2,
            },
          },
        }}
        className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center p-6 md:p-12"
      >
        <div className="max-w-xl w-full">
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 uppercase text-right lg:text-left"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {title}
          </motion.h2>

          <ul className="space-y-4 text-base md:text-lg text-black leading-relaxed text-left">
            {description.map((item, index) => (
              <motion.li
                key={index}
                className="relative pl-5"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <span className="absolute left-0 text-black font-bold">•</span>
                {item.line}
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
