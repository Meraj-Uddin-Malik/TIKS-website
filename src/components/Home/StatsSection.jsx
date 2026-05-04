import React from "react";
import BentoCard from "./BentoCard";
import { Users, Award, GraduationCap, Globe } from "lucide-react";

const StatsSection = () => {
  const stats = [
    { icon: Users, val: "100+", label: "Elite Students" },
    { icon: Award, val: "10+", label: "Awards" },
    { icon: GraduationCap, val: "98%", label: "Nurishment" },
    { icon: Globe, val: "10+", label: "Partners" },
  ];

  return (
    <section className="container mx-auto px-6 pt-10">
      
      {/* 1. Added a clean, cinematic section header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter">
          By The Numbers
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            // 2. Center-aligned the card contents and added deep padding
            <BentoCard 
              key={i} 
              className="text-center group flex flex-col justify-center items-center py-12" 
              delay={i * 0.1} // 3. Staggered animation delay
            >
              
              {/* 4. The Interactive Icon Box */}
              <div className="w-16 h-16 mb-6 bg-slate-50 dark:bg-slate-800 rounded-[1.5rem] flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                <Icon size={28} />
              </div>
              
              {/* 5. Massive Number Typography */}
              <h2 className="text-4xl md:text-5xl font-black mb-2 text-slate-900 dark:text-white tracking-tighter">
                {s.val}
              </h2>
              
              {/* 6. Premium tracking on the label */}
              <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                {s.label}
              </p>

            </BentoCard>
          );
        })}
      </div>
    </section>
  );
};

export default StatsSection;