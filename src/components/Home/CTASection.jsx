import React from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import MagneticButton from "./MagneticButton";

const CTASection = ({ setPage }) => {
  return (
    <section className="container mx-auto px-6 text-center pt-10 pb-22">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        whileInView={{ opacity: 1, scale: 1 }} 
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto space-y-10"
      >
        {/* 1. Rotated & Tinted Icon Container */}
        <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-[2rem] flex items-center justify-center mx-auto mb-8 rotate-12 shadow-sm transition-transform hover:rotate-0 duration-500">
          <GraduationCap size={40} />
        </div>

        {/* 2. Massive Cinematic Typography */}
        <h2 className="text-5xl md:text-7xl lg:text-6xl font-black tracking-tighter text-slate-900 dark:text-white leading-[0.9]">
          READY TO SHAPE <br className="hidden md:block"/>THE FUTURE?
        </h2>

        {/* 3. Supporting Subtext */}
        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Applications for the Fall 2026 cohort are now open. Join the world's most innovative academic community.
        </p>

        {/* 4. Oversized Glowing Magnetic Button */}
        <div className="flex justify-center pt-0">
          <MagneticButton 
            onClick={() => setPage("admissions")}
            // Added explicit sizing and a custom glow shadow
            className="bg-blue-600 text-white text-sm px-12 py-6 shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:shadow-[0_0_60px_rgba(37,99,235,0.6)] w-full md:w-auto"
          >
            Begin Application
          </MagneticButton>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;