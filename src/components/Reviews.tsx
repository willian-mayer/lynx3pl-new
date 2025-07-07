import data from "../data/reviews.json";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function Reviews() {
  const { main, reviews } = data;
  const mainReview = main[0];

  const renderStars = (count: number) => {
    return Array.from({ length: count }).map((_, i) => (
      <Star
        key={i}
        className="w-4 h-4 text-red-600 fill-red-600 inline-block mr-1"
      />
    ));
  };

  return (
    <section className="bg-white px-4 md:px-10 py-10 md:h-screen flex flex-col justify-start gap-6">
      <div className="w-full max-w-6xl mx-auto flex flex-col gap-6">
        {/* Main Review */}
        <motion.div
          className="flex flex-col justify-start items-center text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-black text-lg md:text-6xl font-bold mb-4">
            “{mainReview.review}”
          </p>
          <p className="text-lg text-red-700 font-semibold">
            {mainReview.author} — {mainReview.country} ({mainReview.year})
          </p>
          <div className="mt-1">{renderStars(mainReview.stars)}</div>
        </motion.div>

        {/* Review Row */}
        <div className="grid md:grid-cols-3 w-full">
          <div></div>
          <div className="md:col-span-2 space-y-6">
            {reviews.map((r, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-end"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * i }}
              >
                <div className="flex items-center justify-end text-end">
                  <div className="flex mr-2 mb-4">{renderStars(r.stars)}</div>
                  <p className="text-black md:text-xl font-bold">“{r.review}”</p>
                </div>
                <p className="text-md text-red-700 font-semibold text-end">
                  {r.author} — {r.country} ({r.year})
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
