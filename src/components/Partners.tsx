// src/components/Partners.tsx
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import data from "../data/partners.json";

export default function Partners() {
  const { title, years, } = data;
  const targetYear = years[0].year;

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const isDesktop = useMediaQuery({ minWidth: 1024 }); // lg breakpoint

  useEffect(() => {
    if (inView) {
      let start = 0;
      const interval = setInterval(() => {
        start += 1;
        if (start > targetYear) {
          clearInterval(interval);
        } else {
        }
      }, 30);
      return () => clearInterval(interval);
    }
  }, [inView, targetYear]);

  // ✅ Elegimos dataset según dispositivo

  return (
    <section
      ref={ref}
      className="bg-white px-4 md:px-10 py-10 flex flex-col items-center mt-20"
    >
      <div className="w-full max-w-6xl flex flex-col items-center gap-6 mt-20 md:mt-40">
        {isDesktop ? (
          // 🖥 Desktop Layout
          <div className="w-full max-w-5xl flex flex-row items-center gap-10">
            {/* Texto del título */}
            <motion.h2
              className="text-[2em] font-bold text-[#045804] text-right ml-32 mt-56 flex-1"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              {title}
            </motion.h2>

            {/* Imagen principal */}
            <motion.img
              src="/partners/main-logo-new.png"
              alt="Main Partner Logo"
              className="w-80 h-80 object-contain"
              initial={{ opacity: 0, y: -10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            />
          </div>
        ) : (
          // 📱 Mobile Layout
          <div className="w-full max-w-5xl flex flex-col-reverse items-center gap-10">
            {/* Texto del título */}
            <motion.h2
              className="text-xl font-bold text-[#045804] text-right ml-35 mt-4 flex-1"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              {title}
            </motion.h2>

            {/* Imagen principal en móvil */}
            <motion.img
              src="/partners/main-logo-new.png"
              alt="Main Partner Logo"
              className="w-55 h-55 object-contain"
              initial={{ opacity: 0, y: -10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            />
          </div>
        )}

        {/* Partner Logos (dinámico en mobile, imagen fija en desktop) */}
        {/* 📱 Mobile */}
        <div className="w-full flex flex-wrap justify-end items-end gap-1 px-10 gap-3 md:hidden">
         <motion.img
            src="/partners/new-logos-small.png"
            alt="Partners Logos"
            className="w-full h-auto object-contain max-w-6xl"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          />
        </div>

        {/* 🖥 Desktop */}
        <div className="hidden md:flex w-full justify-center mt-10 md:mt-5">
          <motion.img
            src="/partners/new-logos-md.png"
            alt="Partners Logos"
            className="w-full h-auto object-contain max-w-6xl"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          />
        </div>
      </div>
    </section>
  );
}
