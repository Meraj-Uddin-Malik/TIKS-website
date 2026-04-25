import React from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const ScrollingTicker = () => {
  return (
    // 1. Upgraded to a vibrant gradient, added border-y for sharpness, and elevated with z-20 & shadow-2xl
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-5 -rotate-2 scale-105 shadow-2xl z-20 border-y border-white/10">
      <motion.div
        className="flex whitespace-nowrap items-center font-black uppercase tracking-[0.2em] text-sm md:text-base"
        animate={{ x: ["0%", "-50%"] }}
        // 2. Slowed down slightly (duration: 25) for a more elegant, cinematic feel
        transition={{ ease: "linear", duration: 25, repeat: Infinity }}
      >
        {/* 3. Added more items to the array loop to make it look dense and professional */}
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center">
            <span className="mx-8 drop-shadow-md hover:text-blue-200 transition-colors cursor-default">
              Innovation
            </span> 
            <Star size={14} className="opacity-50 fill-white/20" />
            
            <span className="mx-8 drop-shadow-md hover:text-blue-200 transition-colors cursor-default">
              Excellence
            </span> 
            <Star size={14} className="opacity-50 fill-white/20" />
            
            <span className="mx-8 drop-shadow-md hover:text-blue-200 transition-colors cursor-default">
              Global Leadership
            </span> 
            <Star size={14} className="opacity-50 fill-white/20" />
            
            <span className="mx-8 drop-shadow-md hover:text-blue-200 transition-colors cursor-default">
              Curiosity
            </span> 
            <Star size={14} className="opacity-50 fill-white/20" />
            
            <span className="mx-8 drop-shadow-md hover:text-blue-200 transition-colors cursor-default">
              Future Ready
            </span> 
            <Star size={14} className="opacity-50 fill-white/20" />
            
            <span className="mx-8 drop-shadow-md hover:text-blue-200 transition-colors cursor-default">
              Beyond Limits
            </span> 
            <Star size={14} className="opacity-50 fill-white/20" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingTicker;