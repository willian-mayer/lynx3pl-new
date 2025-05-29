// src/components/Entrance.tsx
import { motion } from "framer-motion";

type EntranceProps = {
  onFinish: () => void;
};

export default function Entrance({ onFinish }: EntranceProps) {
  return (
    <motion.div
      className="h-screen bg-black flex justify-center items-center fixed top-0 left-0 w-full z-50"
      initial={{ y: 0 }}
      animate={{ y: "-100%" }} // solo se desliza hacia arriba
      transition={{ duration: 1.5, delay: 2 }}
      onAnimationComplete={onFinish}
    >
      <img src="/logo.png" alt="logo" className="h-32 w-auto rotate-270" />
    </motion.div>
  );
}
