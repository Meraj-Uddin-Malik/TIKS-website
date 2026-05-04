import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, ArrowRight, ArrowUpRight, Globe, Zap } from "lucide-react";
import MagneticButton from "./MagneticButton";

// ✅ IMPORT YOUR IMAGE
import schoolImg from "../../assets/Tiks.jpeg";

const HeroSection = ({ setPage }) => {
  const { scrollYProgress } = useScroll();

  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const yParallaxReverse = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6">
      
      {/* 🔥 BACKGROUND */}
      <motion.div
        style={{ scale, opacity }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        {/* ✅ SCHOOL IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30 scale-105"
          style={{
            backgroundImage: `url(${schoolImg})`,
          }}
        />

        {/* ✅ GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 via-white/80 to-white dark:from-blue-900/30 dark:via-slate-900/70 dark:to-slate-950" />

        {/* 🔥 ORBS */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] bg-blue-500/20 rounded-full blur-[120px]"
        />

        <motion.div
          animate={{ scale: [1, 1.5, 1], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-500/15 rounded-full blur-[100px]"
        />

        {/* 🔥 FLOATING ICONS */}
        <motion.div
          style={{ y: yParallax }}
          className="absolute top-[20%] right-[15%] text-blue-500/20 hidden md:block"
        >
          <Globe size={180} className="animate-[spin_40s_linear_infinite]" />
        </motion.div>

        <motion.div
          style={{ y: yParallaxReverse }}
          className="absolute bottom-[25%] left-[10%] text-purple-500/20 hidden md:block"
        >
          <Zap size={120} className="animate-pulse" />
        </motion.div>
      </motion.div>

      {/* 🔥 CONTENT */}
      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mt-8 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-black uppercase tracking-widest mb-8 border border-blue-100 dark:border-blue-800/50">
            <Sparkles size={14} /> Why Choose TIKSchools
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight mb-6 tracking-tight">
            BEYOND <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 relative">
              LIMITS.
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 1 }}
                className="absolute -bottom-3 left-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
              />
            </span>
          </h1>

          {/* Text */}
          <p className="text-md md:text-lg text-slate-700 dark:text-slate-300 mb-10 max-w-2xl leading-relaxed">
            <strong>The Indus Karakuram School:</strong> A modern learning
            space where creativity meets technology. We prepare students
            for the future with smart education and innovation.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <MagneticButton
              onClick={() => setPage("admissions")}
              className="bg-blue-600 text-white shadow-lg hover:shadow-xl"
            >
              Join Now <ArrowUpRight size={20} />
            </MagneticButton>

            <button
              onClick={() => setPage("about")}
              className="group flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-white/60 dark:bg-slate-900/60 backdrop-blur border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              Explore
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;