import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

const CampusSection = () => {
  return (
    <section className="container mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        // 1. Made it a 'group' and used a cinematic aspect ratio (21:9 on desktop)
        className="relative w-full rounded-[3rem] overflow-hidden aspect-video md:aspect-[21/9] shadow-2xl group cursor-pointer"
      >
        
        {/* Background Image & Overlays */}
        <div className="absolute inset-0 bg-slate-900">
          <img
            src="https://images.unsplash.com/photo-1523050335392-93851179ae22?auto=format&fit=crop&q=80&w=2000"
            alt="Campus Cinematic Tour"
            // 2. Image slowly scales up and dims when hovered
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-40 transition-all duration-700"
          />
          {/* 3. Dark gradient at the bottom so text is always readable */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        {/* Interactive Content (Play Button & Text) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
          
          {/* 4. Glassmorphic Play Button with Glow */}
          <div className="w-24 h-24 bg-blue-600/90 backdrop-blur-md rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.5)]">
            {/* Added ml-2 to optically center the play triangle */}
            <Play size={40} className="ml-2 text-white fill-white" />
          </div>
          
          {/* 5. Cinematic Typography */}
          <h3 className="text-3xl md:text-5xl font-black tracking-tighter mb-2 transition-transform duration-500 group-hover:-translate-y-2">
            Campus Cinematic
          </h3>
          <p className="text-sm md:text-base uppercase tracking-widest font-bold text-blue-200 transition-transform duration-500 group-hover:-translate-y-2 delay-75">
            Watch Virtual Tour
          </p>
          
        </div>
      </motion.div>
    </section>
  );
};

export default CampusSection;