import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="w-full min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-blue-50 to-white dark:from-slate-950 dark:to-slate-900 px-6">
      <div className="text-center max-w-4xl">
        
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white"
        >
          About <span className="text-blue-600">TIKS</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-sm md:text-lg text-slate-500 dark:text-slate-300"
        >
          A legacy of excellence, innovation, and holistic education shaping future leaders since 1995.
        </motion.p>

      </div>
    </section>
  );
};

export default AboutHero;