import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import * as Icons from 'lucide-react';

const { 
  Fingerprint, Activity, ShieldCheck, Zap, Radio, 
  Share2, Microscope, Orbit, Quote, Sparkles 
} = Icons;

const SectionLabel = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-600/10 text-blue-600 dark:text-blue-400 text-[9px] font-black uppercase tracking-[0.5em] mb-10 border border-blue-600/20"
  >
    <div className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
    {children}
  </motion.div>
);

const FloatingIcon = ({ Icon, className = "", delay = 0 }) => (
  <motion.div
    animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0], scale: [1, 1.1, 1] }}
    transition={{ duration: 5, repeat: Infinity, delay, ease: "easeInOut" }}
    className={`absolute pointer-events-none opacity-20 ${className}`}
  >
    <Icon size={120} />
  </motion.div>
);

const About = ({ setPage }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  // FIXED: We now transform opacity and scale rather than colors.
  // The colors are handled by Tailwind's 'bg-slate-50 dark:bg-slate-950' on the container.
  const heroScale = useTransform(smoothProgress, [0, 0.1], [1, 0.7]);
  const heroRotate = useTransform(smoothProgress, [0, 0.1], [0, -10]);

  return (
    <div 
      ref={containerRef} 
      className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-1000 selection:bg-blue-500 selection:text-white"
    >
      {/* PHASE 1: HERO */}
      <section className="relative h-[120vh] flex items-center justify-center px-6 overflow-hidden">
        <motion.div style={{ scale: heroScale, rotate: heroRotate }} className="container mx-auto text-center z-10">
          <SectionLabel>PHASE 01: GENESIS</SectionLabel>
          <h1 className="text-[16vw] md:text-[14vw] font-black tracking-tighter leading-[0.7] mb-12">
            BORN <br />
            <span className="italic font-serif opacity-50">OF</span> VOID.
          </h1>
          <p className="text-xl md:text-3xl max-w-3xl mx-auto font-medium leading-tight opacity-70">
            EIA Nexus began as a radical experiment: can we teach machines to learn, and humans to feel?
          </p>
        </motion.div>

        <FloatingIcon Icon={Icons.Atom} className="top-1/4 left-1/4" delay={0} />
        <FloatingIcon Icon={Icons.Binary} className="bottom-1/4 right-1/4" delay={1} />
        <FloatingIcon Icon={Orbit} className="top-1/3 right-1/3 text-blue-500" delay={2} />
      </section>

      {/* PHASE 2: SKILL TREE */}
      {/* <section className="container mx-auto px-6 py-40 min-h-screen">
        <SectionLabel>PHASE 02: NEURAL ARCHITECTURE</SectionLabel>
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div className="space-y-12">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">The Skill <br/>Tree.</h2>
            <div className="space-y-8">
              {[
                { title: "Cognitive Fluency", desc: "Adaptive neural paths.", icon: Activity },
                { title: "Planetary Ethics", desc: "Solving the AI age dilemmas.", icon: ShieldCheck },
                { title: "Quantum Logic", desc: "Understanding multi-state physics.", icon: Zap }
              ].map((item, i) => (
                <motion.div key={i} whileHover={{ x: 20 }} className="flex gap-6 items-start border-l-2 border-slate-300 dark:border-slate-700 pl-8 py-4 opacity-50 hover:opacity-100 transition-all cursor-crosshair">
                  <item.icon size={32} />
                  <div>
                    <h4 className="text-2xl font-black">{item.title}</h4>
                    <p className="font-medium opacity-70">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative aspect-square bg-slate-500/5 rounded-[4rem] border border-slate-300 dark:border-white/10 flex items-center justify-center group overflow-hidden">
            <Fingerprint size={120} className="text-blue-500 animate-pulse" />
          </div>
        </div>
      </section> */}

      {/* PHASE 2: SKILL TREE (WITH ORBITAL DESIGN) */}
<section className="container mx-auto px-6 py-40 min-h-screen">
  <SectionLabel>PHASE 02: NEURAL ARCHITECTURE</SectionLabel>
  <div className="grid lg:grid-cols-2 gap-24 items-center">
    <div className="space-y-12">
      <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">The Skill <br/>Tree.</h2>
      <div className="space-y-8">
        {[
          { title: "Cognitive Fluency", desc: "Adaptive neural paths.", icon: Activity },
          { title: "Planetary Ethics", desc: "Solving the AI age dilemmas.", icon: ShieldCheck },
          { title: "Quantum Logic", desc: "Understanding multi-state physics.", icon: Zap }
        ].map((item, i) => (
          <motion.div key={i} whileHover={{ x: 20 }} className="flex gap-6 items-start border-l-2 border-slate-300 dark:border-slate-700 pl-8 py-4 opacity-50 hover:opacity-100 transition-all cursor-crosshair">
            <item.icon size={32} />
            <div>
              <h4 className="text-2xl font-black">{item.title}</h4>
              <p className="font-medium opacity-70">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    {/* RESTORED ORBITAL DESIGN */}
    <div className="relative aspect-square bg-slate-500/5 rounded-[4rem] border border-slate-300 dark:border-white/10 flex items-center justify-center group overflow-hidden">
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity"
      >
        <svg className="w-full h-full" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5 10" className="text-blue-600" />
          <circle cx="100" cy="100" r="60" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="1 4" className="text-blue-500" />
          <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="10 50" className="text-blue-400" />
        </svg>
      </motion.div>
      <div className="relative z-10 text-center">
        <Fingerprint size={120} className="mx-auto mb-8 animate-pulse text-blue-600" />
        <span className="text-[10px] font-black uppercase tracking-[0.5em] block">Biometric Hub</span>
      </div>
    </div>
  </div>
</section>

      {/* PHASE 3: TIMELINE */}
      <section className="py-10 overflow-hidden relative">
        <SectionLabel>PHASE 03: TEMPORAL FLOW</SectionLabel>
        <motion.div 
          style={{ x: useTransform(smoothProgress, [0.4, 0.8], [500, -1500]) }}
          className="flex gap-40 whitespace-nowrap px-20"
        >
          {[
            { year: "1995", title: "THE SPARK", desc: "EIA founded as a small coding retreat." },
            { year: "2010", title: "NEXUS v1", desc: "First decentralized campus logic launched." },
            { year: "2024", title: "NEURAL SYNC", desc: "Real-time AI learning protocols implemented." },
            { year: "2050", title: "ASCENSION", desc: "Integration of biological and machine mind." }
          ].map((node, i) => (
            <div key={i} className="min-w-[400px] flex flex-col gap-8">
              <span className="text-[12rem] font-black opacity-10 leading-none">{node.year}</span>
              <div className="border-t-4 border-slate-300 dark:border-slate-700 pt-8">
                <h4 className="text-4xl font-black mb-4 tracking-tighter">{node.title}</h4>
                <p className="text-xl font-medium opacity-60 whitespace-normal max-w-sm">{node.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </section>

     {/* PHASE 4: LEADERSHIP */}
<section className="container mx-auto px-6 py-10">
  <div className="grid lg:grid-cols-2 gap-20 items-center">
    <div className="order-2 lg:order-1">
      <SectionLabel>PHASE 04: Principal's Thoughts</SectionLabel>
      <Icons.Quote size={80} className="mb-12 opacity-20" />
      <h3 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.85] mb-12">"WE DO NOT <br/>REPRESENT <br/>THE PAST."</h3>
      <p className="text-1xl font-medium opacity-60 leading-tight max-w-lg">
        Principal. Muhammad Riaz founded TIKSchools to be the antidote to factory education. Every failure in our lab is a successful data point for the next evolution.
      </p>
    </div>
    
    {/* Corrected 3D Image Wrapper */}
    <motion.div 
      whileHover={{ rotateY: -10, rotateX: 5 }} 
      className="order-1 lg:order-2 perspective-[1000px]"
    >
      <div className="relative aspect-[3/4] rounded-[4rem] overflow-hidden shadow-2xl border border-slate-300 dark:border-white/10 group">
        <img 
          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJpbmNpcGFsfGVufDB8fDB8fHww" 
          className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105" 
          alt="Sanctuary" 
        />
      </div>
    </motion.div>
  </div>
</section>

      {/* Progress */}
      <motion.div 
        className="fixed top-0 left-0 bottom-0 w-1 bg-blue-600 z-[100] origin-top" 
        style={{ scaleY: smoothProgress }} 
      />
    </div>
  );
};

export default About;