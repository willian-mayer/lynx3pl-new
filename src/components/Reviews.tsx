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
        px-4 md:px-10 
        py-10 
        min-h-screen 
        flex flex-col 
        gap-6 
        pt-10
        mt-10
        justify-center          /* En móvil se va al fondo */
        md:justify-center     /* En md+ se centra */
        md:items-center
        md:h-full
        pt-32
      "
    >
      <div className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left column - Main Review */}
        <motion.div
          className="flex flex-col items-end text-left md:pb-92"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="text-black text-2xl md:text-6xl font-bold mb-4">
            “{mainReview.review}”
          </p>
          <p className="text-lg text-red-700 font-semibold">
            — {mainReview.author}, {mainReview.country} ({mainReview.year})
          </p>
        </motion.div>

        {/* Right column - Other Reviews */}
<div className="flex flex-col justify-end h-full">
  {reviews.map((r, i) => (
    <motion.div
      key={i}
      className="flex flex-col items-end my-3"
      initial={{ opacity: 0, x: 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.1 * i }}
    >
      <div className="flex items-start justify-end ">
        <div className="flex mr-2 mb-4">{renderStars(r.stars)}</div>
        <p className="text-black text-sm md:text-xl font-bold text-start">“{r.review}”</p>
      </div>
      <p className="w-full text-md text-red-700 font-semibold text-start my-3">
        — {r.author}, {r.country} ({r.year})
      </p>
    </motion.div>
  ))}
</div>

      </div>
    </section>
  );
}
