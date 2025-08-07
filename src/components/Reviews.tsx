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
        className="w-4 h-4 text-red-600 fill-red-600 inline-block mr-1"
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
          gap-8
        "
      >
        {/* Left column - Main Review */}
        <motion.div
          className="md:w-[60%] flex flex-col justify-start lg:mb-64"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-black text-[1.8em] md:text-6xl font-bold mb-4 text-center md:text-center ">
            <span className="text-red-700">“</span>
            {mainReview.review}
            <span className="text-red-700">”</span>
          </p>
          <p className="text-sm text-red-700 font-semibold text-center md:text-right md:mr-20">
            — {mainReview.author}, {mainReview.country} ({mainReview.year})
          </p>
        </motion.div>

        {/* Right column - Other Reviews */}
        <div className="md:w-[40%] flex flex-col justify-end lg:ml-10">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-start my-2"
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
            >
              <div className="flex items-start">
                <div className="flex mr-2 mb-2">{renderStars(r.stars)}</div>
                <p className="text-black text-xs md:text-[1em] font-semibold">
                  “{r.review}”
                </p>
              </div>
              <p className="text-xs lg:text-[0.9em] text-red-700 font-semibold pl-6 md:my-2">
                — {r.author}, {r.country} ({r.year})
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
