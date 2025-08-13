import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import data from "../data/fulfillmentFirst.json";

export default function FulfillmentFirst() {
  const { title } = data;
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="w-full bg-white sm:px-10 lg:px-20 py-10 min-h-screen flex items-center"
    >
      <div
        className="
          w-full
          flex flex-col md:flex-row items-center justify-center 
          gap-8 lg:mx-24
          text-center md:text-left
        "
      >
        {/* Imagen (primero en escritorio) */}
        <div className="relative flex items-center justify-center md:w-1/2 max-h-[450px] md:rounded-xl overflow-hidden order-2 md:order-1 md:ml-6">
          <motion.img
            src="/fulfillmentFirst/image.jpg"
            alt={title}
            className="w-full object-cover"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-white rounded-xl">
            <p className="text-center text-lg md:text-xl font-semibold leading-snug text-black md:px-10 lg:px-16">
              Our box is open,<br /> we welcome business of all sizes to connect with us!
            </p>
          </div>
        </div>
{/* Texto (primero en móvil, segundo en escritorio) */}
<div className="
  flex flex-col md:w-1/2 order-1 md:order-2
  justify-start md:justify-end
  h-auto md:h-full
  md:mt-40
  md:mr-5
  md:mb-2
">
  <motion.h2
    className="text-3xl md:text-6xl font-bold text-black mb-4 md:mb-16 md:mt-0 text-right mr-4 md:mr-0"
    initial={{ opacity: 0, y: -20 }}
    animate={inView ? { opacity: 1, y: 0 } : {}}
    transition={{ duration: 0.6 }}
  >
    {title}
  </motion.h2>
<motion.p
  className="text-base md:text-xl text-black md:mx-0 md:px-0 text-right ml-20 w-62 md:w-full md:ml-0 mr-4 md:mr-0"
  initial={{ opacity: 0, y: -10 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.6, delay: 0.2 }}
>
  Managing fulfillment can be stressful and{" "}
  time<span className="inline md:block">consuming.</span>{" "}
  <span className="inline md:block">We take care of</span>{" "}
  <span className="inline md:block"></span>{" "}
  inventory, packing, and shipping,<span className="inline md:block"></span> so you can
  focus on growing your business.
</motion.p>
</div>

      </div>
    </section>
  );
}
