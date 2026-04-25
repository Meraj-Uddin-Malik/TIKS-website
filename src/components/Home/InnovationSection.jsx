import React from "react";
import BentoCard from "./BentoCard";
import { BookOpen, ChevronRight, Globe } from "lucide-react";

const InnovationSection = ({ setPage }) => {
  return (
    <section className="container mx-auto px-6 py-10">
      {/* FIX 1: Removed hardcoded bg-slate-900 and text-white. Let BentoCard handle the theme automatically. */}
      <BentoCard className="flex flex-col lg:flex-row items-center gap-12 border-none p-8 md:p-16">
        
        {/* Left Side: Content */}
        <div className="flex-1 space-y-8 relative z-10">
          
          {/* FIX 2: Made the "Eyebrow" Tag adapt to light/dark mode */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] border border-blue-200 dark:border-blue-500/30">
            <BookOpen size={12} /> Innovation Hub
          </div>
          
          {/* FIX 3: Added text-slate-900 dark:text-white so it's always readable */}
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.1] text-slate-900 dark:text-white">
            Experience the <br className="hidden md:block"/>Nexus Laboratory.
          </h2>
          
          {/* FIX 4: Updated paragraph text colors */}
          <p className="text-slate-500 dark:text-slate-400 text-lg md:text-xl leading-relaxed max-w-xl">
            Our state-of-the-art research facility allows students to engage with Quantum Computing, Bio-Genetics, and Neural Robotics starting from grade 9. 
          </p>
          
          {/* FIX 5: Button adapts to Light/Dark mode nicely */}
          <button 
            onClick={() => setPage && setPage('academics')}
            className="group flex items-center gap-3 px-8 py-4 rounded-2xl font-bold bg-blue-50 dark:bg-white text-blue-600 dark:text-slate-900 hover:bg-blue-100 dark:hover:bg-slate-200 transition-all"
          >
            Explore Programs 
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Right Side: Visual Asset Area (Remains dark & cinematic) */}
        <div className="w-full lg:w-1/2 aspect-square md:aspect-video lg:aspect-square rounded-[2.5rem] bg-gradient-to-tr from-blue-600 to-purple-900 flex items-center justify-center relative overflow-hidden shadow-2xl">
          
          {/* Subtle tech background image using mix-blend-overlay */}
          <div 
            className="absolute inset-0 opacity-20 object-cover mix-blend-overlay bg-center bg-cover" 
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=1000')" }}
          />
          
          {/* Pulsing focal point */}
          <Globe size={180} className="text-white/30 animate-[pulse_4s_ease-in-out_infinite]" />
        </div>

      </BentoCard>
    </section>
  );
};

export default InnovationSection;