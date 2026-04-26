import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import * as Icons from 'lucide-react';

const { 
  BookOpen, Cpu, Atom, Layers, Palette, Microscope, 
  Binary, Globe, Zap, Sparkles, ChevronRight, 
  ArrowUpRight, Quote, Code, Component, FlaskConical
} = Icons;

// --- REFINED UI UTILITIES ---

const SectionLabel = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-600/5 text-blue-600 dark:text-blue-400 text-[9px] font-black uppercase tracking-[0.4em] mb-12 border border-blue-600/10 shadow-sm"
  >
    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
    {children}
  </motion.div>
);

const Curriculum = ({ setPage }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Helper to safely render icons
  const SafeIcon = ({ icon: IconComponent, ...props }) => {
    if (!IconComponent) return <Icons.HelpCircle {...props} />;
    return <IconComponent {...props} />;
  };

  return (
    <div ref={containerRef} className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-1000 selection:bg-blue-600 selection:text-white">
      
      {/* 1. KINETIC HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 px-6 overflow-hidden">
        <div className="container mx-auto text-center z-10">
          <SectionLabel>Academic Blueprint v4.0</SectionLabel>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-[10vw] font-black tracking-tighter leading-[0.8] mb-10"
          >
            THE <span className="text-blue-600">GUILDS.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-tight mb-12"
          >
            We don't teach subjects; we master disciplines. Our curriculum is an interconnected web of logic, creativity, and ethical inquiry.
          </motion.p>
          <div className="flex justify-center gap-4">
             <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="w-px h-24 bg-gradient-to-b from-blue-600 to-transparent" />
          </div>
        </div>
      </section>

      {/* 2. THE ACADEMIC GUILDS (School Levels) */}
      <section className="container mx-auto px-6 py-40">
        <div className="grid lg:grid-cols-3 gap-8">
          {[
            { 
              level: "The Foundation", 
              title: "Primary Guild", 
              age: "Grades 6–8",
              icon: Layers,
              desc: "Focusing on cognitive plasticity, linguistic depth, and the fundamentals of algorithmic thinking."
            },
            { 
              level: "The Expansion", 
              title: "Secondary Nexus", 
              age: "Grades 9–10",
              icon: Component,
              desc: "Deep integration of complex systems, theoretical physics, and world-building through the arts."
            },
            { 
              level: "The Mastery", 
              title: "Advanced Core", 
              age: "Grades 11–12",
              icon: Cpu,
              desc: "Specialized pathways in Bio-Genetics, Quantum Logic, and Global Diplomacy under expert mentorship."
            }
          ].map((guild, i) => (
            <motion.div 
              key={guild.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[3rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/5 shadow-xl hover:border-blue-600/50 transition-all duration-500 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <SafeIcon icon={guild.icon} size={32} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-2 block">{guild.level}</span>
              <h3 className="text-3xl font-black mb-4 tracking-tighter">{guild.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 font-medium mb-8 leading-relaxed">{guild.desc}</p>
              <div className="flex items-center justify-between pt-8 border-t border-slate-100 dark:border-white/5">
                <span className="text-xs font-black uppercase tracking-widest text-slate-400">{guild.age}</span>
                <ChevronRight size={18} className="text-blue-600" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. INNOVATION LABS (High Contrast Staggered) */}
      <section className="container mx-auto px-6 py-40">
        <SectionLabel>Specialized Labs</SectionLabel>
        <div className="space-y-32 mt-20">
          {[
            {
              title: "Neural Robotics Lab",
              icon: Zap,
              image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
              desc: "Students build and program autonomous systems that respond to biometric feedback loops."
            },
            {
              title: "Bio-Genetics Suite",
              icon: Microscope,
              image: "https://images.unsplash.com/photo-1532187875605-1ef6c747094d?auto=format&fit=crop&q=80&w=1200",
              desc: "Exploring the code of life through CRISPR simulations and advanced molecular biology studies."
            }
          ].map((lab, i) => (
            <div key={lab.title} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 md:gap-24`}>
              <motion.div 
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="flex-1 space-y-8"
              >
                <div className="p-4 bg-blue-600 text-white rounded-2xl w-fit">
                   <SafeIcon icon={lab.icon} size={28} />
                </div>
                <h3 className="text-4xl md:text-6xl font-black tracking-tighter leading-none">{lab.title}</h3>
                <p className="text-xl text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{lab.desc}</p>
                <button className="flex items-center gap-2 text-blue-600 font-black uppercase tracking-widest text-[10px] group">
                  Lab Protocol Docs <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="flex-1 aspect-video lg:aspect-square rounded-[3rem] overflow-hidden shadow-3xl border border-slate-200 dark:border-white/5 relative group"
              >
                <img src={lab.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105" alt={lab.title} />
                <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay" />
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. THE MATRIX (Grid Matrix of Subjects) */}
      <section className="py-40 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <SectionLabel>The Discipline Matrix</SectionLabel>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20">
            {[
              { name: "Quantum Mechanics", icon: Atom },
              { name: "Advanced Syntax", icon: Code },
              { name: "Global Ethics", icon: Globe },
              { name: "Algorithmic Logic", icon: Binary },
              { name: "Digital Arts", icon: Palette },
              { name: "Theoretical Math", icon: Component },
              { name: "Bio-Informatics", icon: FlaskConical },
              { name: "Future History", icon: BookOpen }
            ].map((subject, i) => (
              <motion.div 
                key={subject.name}
                whileHover={{ backgroundColor: "rgba(37, 99, 235, 0.15)", y: -5 }}
                className="p-8 rounded-[2rem] border border-white/5 bg-white/5 flex flex-col items-center text-center transition-all duration-500"
              >
                <SafeIcon icon={subject.icon} size={24} className="text-blue-500 mb-6" />
                <h4 className="text-sm font-black uppercase tracking-widest">{subject.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA: JOURNEY OF MASTERY */}
      <section className="container mx-auto px-6 py-60 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto space-y-12"
        >
          <Sparkles size={60} className="mx-auto text-blue-600 animate-pulse" />
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-none">MASTER THE <span className="text-blue-600">UNSEEN.</span></h2>
          <p className="text-xl text-slate-500 dark:text-slate-400 font-medium">Ready to step into the future of learning? Join a Guild today.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <button 
              onClick={() => setPage('admissions')}
              className="px-12 py-6 bg-blue-600 text-white rounded-full font-black uppercase tracking-[0.4em] text-[10px] shadow-2xl hover:scale-105 transition-all"
            >
              Start Application
            </button>
            <button className="px-12 py-6 border border-slate-200 dark:border-white/10 rounded-full font-black uppercase tracking-[0.4em] text-[10px] hover:bg-slate-100 dark:hover:bg-white/5 transition-all">
              Download Syllabus
            </button>
          </div>
        </motion.div>
      </section>

      {/* Global Scroll Scrubber */}
      <motion.div 
        className="fixed top-0 left-0 bottom-0 w-1 bg-blue-600 z-[100] origin-top" 
        style={{ scaleY: smoothProgress }} 
      />

    </div>
  );
};

export default Curriculum;