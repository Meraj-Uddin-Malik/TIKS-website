import React from "react";
import BentoCard from "./BentoCard";
import { Zap, Heart, Shield, ArrowRight } from "lucide-react";

const PillarsSection = () => {
  // 1. Expanded data to include descriptions for a more complete UI
  const data = [
    {
      title: "Academic Excellence",
      icon: Zap,
      desc: "We provide a strong academic foundation that encourages critical thinking, creativity, and lifelong learning. Our curriculum is designed to help students achieve their highest potential."
    },
    {
      title: "Character Building",
      icon: Heart,
      desc: "We focus on developing honesty, responsibility, and respect. Our goal is to shape students into confident and ethical individuals."
    },
    {
      title: "Learning Environment",
      icon: Shield,
      desc: "With smart classrooms and updated teaching methods, we ensure students learn in an engaging and innovative way."
    },
  ];

  return (
    <section className="container mx-auto px-6 pt-10">

      {/* 2. Added a Premium Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <span className="text-blue-600 dark:text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">
            The Foundation
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white">
            Our Academic Pillars.
          </h2>
        </div>
        {/* <button className="flex items-center gap-2 font-black uppercase tracking-widest text-xs text-slate-500 hover:text-blue-600 transition-colors">
          View Curriculum <ArrowRight size={16} />
        </button> */}
      </div>

      {/* 3. The Grid Layout */}
      <div className="grid md:grid-cols-3 gap-6">
        {data.map((p, i) => {
          const Icon = p.icon;
          return (
            // 4. Made the card a flex column with a minimum height to look like a tall "Bento Box"
            <BentoCard
              key={i}
              delay={i * 0.15}
              className="group min-h-[320px] flex flex-col justify-between hover:-translate-y-2"
            >

              {/* 5. Styled Icon Box with hover scale */}
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <Icon size={24} />
              </div>

              {/* 6. Adaptive Text content */}
              <div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">
                  {p.title}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>

              {/* 7. Hidden Animated Arrow that slides in on hover */}
              <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300 text-blue-600">
                <ArrowRight size={24} />
              </div>

            </BentoCard>
          );
        })}
      </div>
    </section>
  );
};

export default PillarsSection;