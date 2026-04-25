import { motion, useScroll, useTransform } from "framer-motion";
import { Sparkles, ArrowRight, ArrowUpRight, Globe, Zap } from "lucide-react";
import MagneticButton from "./MagneticButton"; // Assuming you extracted this correctly!

const HeroSection = ({ setPage }) => {
  const { scrollYProgress } = useScroll();

  // Parallax and fade effects tied to scrolling
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const yParallaxReverse = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 px-6">
      {/* 1. Immersive Animated Background */}
      <motion.div
        style={{ scale, opacity }}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-slate-50/50 to-white dark:from-blue-900/20 dark:via-slate-900/50 dark:to-slate-950" />

        {/* Glowing Orbs */}
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

        {/* Floating Abstract Icons */}
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

      {/* 2. Main Content */}
      <div className="container mx-auto relative z-10 pt-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mt-8 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-black uppercase tracking-widest mb-8 border border-blue-100 dark:border-blue-800/50">
            <Sparkles size={14} /> Redefining Education
          </div>

          {/* Headline */}
          <h1 className="text-6xl md:text-[8rem] lg:text-[6rem] font-black text-slate-900 dark:text-white leading-[0.85] mb-8 tracking-tighter">
            BEYOND <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 relative">
              LIMITS.
              {/* Decorative Animated Underline */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 1 }}
                className="absolute -bottom-4 left-0 h-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
              />
            </span>
          </h1>

          <p className="mt-16 text-md md:text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-3xl leading-relaxed">
            <strong> The Indus Karakuram School : </strong>A world-class
            sanctuary where curiosity meets innovation. We are architecting the
            leaders of the 22nd century through specialized mentorship and
            cutting-edge intelligence labs.
          </p>

          {/* Premium Buttons */}
          <div className="flex flex-wrap gap-6 items-center">
            <MagneticButton
              onClick={() => setPage("admissions")}
              className="bg-blue-600 text-white shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:shadow-[0_0_60px_rgba(37,99,235,0.6)]"
            >
              Join Now <ArrowUpRight size={20} />
            </MagneticButton>

            <button
              onClick={() => setPage("about")}
              className="group flex items-center gap-3 px-8 py-4 rounded-2xl font-bold bg-white/50 dark:bg-slate-900/50 backdrop-blur-md border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition-all"
            >
              Explore{" "}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-2 transition-transform"
              />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
