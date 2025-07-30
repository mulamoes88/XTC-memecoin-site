import { motion } from "framer-motion";
import { useState } from "react";

export default function MemeSection() {
  const [pillCount, setPillCount] = useState(0);

  return (
    <section className="mt-10 p-6 bg-purple-100 rounded-lg shadow-lg max-w-md mx-auto text-center">
      <motion.h2
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold mb-4 text-purple-700"
      >
        XTC Pills Memes
      </motion.h2>

      <motion.button
        whileTap={{ scale: 0.9 }}
        className="bg-purple-600 text-white px-4 py-2 rounded-md"
        onClick={() => setPillCount(pillCount + 1)}
      >
        Pak een pil! 💊
      </motion.button>

      <motion.p
        key={pillCount}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="mt-4 text-lg text-purple-800 font-semibold"
      >
        Je hebt {pillCount} pillen genomen!
      </motion.p>
    </section>
  );
}
