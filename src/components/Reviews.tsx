import data from "../data/reviews.json";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Reviews() {
  const { main, reviews } = data;
  const mainReview = main[0];

  const renderStars = (count: number) => {
    return Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="w-4 h-4 text-yellow-500 inline-block mr-1 fill-yellow-500" />
    ));
  };

  return (
<section className="bg-white px-4 md:px-10 py-10 md:h-screen flex flex-col justify-center gap-6">
      {/* Main Review */}
      <motion.div
        className="flex flex-col justify-center items-center text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-black text-lg md:text-6xl font-bold mb-4 ">“{mainReview.review}”</p>
        <p className="text-sm md:text-base text-red-700 font-semibold">
          {mainReview.author} — {mainReview.country} ({mainReview.year})
        </p>
        <div className="mt-1">{renderStars(mainReview.stars)}</div>
      </motion.div>

      {/* Review Row 2 */}
      <div className="grid md:grid-cols-2">
        <div></div>
        <div className="space-y-6">
          {reviews.slice(0).map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 * i }}
            >
              <p className="text-black md:text-sm font-bold mb-2">“{r.review}”</p>
              <p className="text-sm text-red-700 font-semibold">
                {r.author} — {r.country} ({r.year})
              </p>
              <div className="mt-1">{renderStars(r.stars)}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}