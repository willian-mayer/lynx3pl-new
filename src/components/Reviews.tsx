import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import data from "../data/reviews.json";

export default function Reviews() {
  const { main, reviews } = data;
  const mainReview = main[0];

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const renderStars = (count: number) =>
    Array.from({ length: count }).map((_, i) => (
      <Star
        key={i}
        className="w-2 h-2 text-red-600 fill-red-600 inline-block mr-[1px] mt-1"
      />
    ));

  return (
    <section
      ref={ref}
      className="
        bg-white 
        px-8 md:px-2 
        py-10 
        min-h-screen 
        flex flex-col 
        gap-6 
        justify-center
        md:justify-center
        md:items-center
        md:h-full
        pt-20
      "
    >
      <div
        className="
          w-full max-w-6xl mx-auto
          flex flex-col md:flex-row md:items-stretch
          gap-2
        "
      >
        {/* Left column - Main Review */}
        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {/* Imagen para móviles (antes de md) */}
          <img
            src="/review/quote.png"
            alt="Quote Mobile"
            className="block md:hidden w-auto object-contain"
          />

          {/* Imagen para md+ */}
          <img
            src="/review/quote-md.png"
            alt="Quote Desktop"
            className="hidden md:block w-full max-w-md object-contain"
          />
        </motion.div>
        <p className="text-sm text-red-700 font-semibold text-center md:text-right md:mr-20 ml-10">
          — {mainReview.author}, {mainReview.country} ({mainReview.year})
        </p>
        {/* Right column - Other Reviews */}
        <div className="md:w-[40%] flex flex-col justify-end lg:ml-10">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-start my-1"
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
            >
              <div className="flex items-start ml-25 mr-7">
                <div className="flex mr-2 mb-2">{renderStars(r.stars)}</div>
                <p className="text-black text-[0.6em] md:text-[1em] font-semibold mb-2">
                  “{r.review}”
                </p>
              </div>
              <p className="text-[0.6em] lg:text-[0.9em] text-red-700 font-semibold pl-6 md:my-2 ml-30 mr-8">
                — {r.author}, {r.country} ({r.year})
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
