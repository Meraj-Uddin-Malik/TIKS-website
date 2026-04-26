import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import * as Icons from 'lucide-react';

const { 
  FileText, Cpu, UserPlus, ShieldCheck, ArrowUpRight, 
  Download, Zap, Phone, Mail, Globe, Sparkles, ChevronDown 
} = Icons;

// --- UTILITY COMPONENTS ---

const SectionLabel = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="inline-flex items-center gap-2 md:gap-3 px-3 md:px-4 py-1.5 rounded-full bg-blue-600/10 text-blue-600 dark:text-blue-400 text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] mb-6 md:mb-10 border border-blue-600/20"
  >
    <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
    {children}
  </motion.div>
);

const Admissions = ({ setPage }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  // Hero Parallax Logic - Adjusted for better mobile behavior
  const heroScale = useTransform(smoothProgress, [0, 0.1], [1, 0.9]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.1], [1, 0]);

  return (
    <div ref={containerRef} className="bg-slate-50 dark:bg-slate-950 transition-colors duration-1000 selection:bg-blue-600 selection:text-white overflow-x-hidden">
      
      {/* PHASE 1: THE INVITATION (HERO) */}
      <section className="relative min-h-[90vh] md:h-screen flex items-center justify-center px-6 overflow-hidden">
        <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="container mx-auto text-center z-10 pt-20">
          <SectionLabel>PHASE 01: INVITATION</SectionLabel>
          <h1 className="text-5xl sm:text-7xl md:text-[10vw] lg:text-[12vw] font-black tracking-tighter leading-[0.8] text-slate-900 dark:text-white mb-6 md:mb-10">
            JOIN THE <br /> <span className="text-blue-600">COHORT.</span>
          </h1>
          <p className="text-base md:text-xl lg:text-3xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto font-medium leading-snug md:leading-tight px-2">
            We don't accept students; we recruit the future architects of reality. Your path to the Nexus begins with a single data point.
          </p>
        </motion.div>

        <div className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-30">
           <svg className="w-full h-full" viewBox="0 0 100 100">
              <motion.circle 
                cx="50" cy="50" r="40" 
                fill="none" stroke="currentColor" strokeWidth="0.05"
                className="text-blue-600"
                animate={{ r: [35, 45, 35], opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              />
           </svg>
        </div>
      </section>

      {/* PHASE 2: THE PROTOCOL (PROCESS STEPS) */}
      <section className="container mx-auto px-6 py-20 md:py-40">
        <SectionLabel>PHASE 02: ADMISSION PROTOCOL</SectionLabel>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <div className="lg:sticky lg:top-40 mb-12 lg:mb-0">
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-black tracking-tighter leading-none text-slate-900 dark:text-white mb-6 md:mb-12">
              The Path to <br/><span className="text-blue-600">Ascension.</span>
            </h2>
            <p className="text-base md:text-xl text-slate-500 dark:text-slate-400 mb-8 md:mb-12 max-w-md font-medium">
              Our entrance protocol is designed to identify potential, curiosity, and ethical resonance.
            </p>
            <button className="flex items-center gap-3 px-6 md:px-10 py-3 md:py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl md:rounded-2xl font-black uppercase tracking-widest text-[8px] md:text-[10px] hover:scale-105 transition-all shadow-xl">
              <Download size={18} className="w-4 md:w-5" /> Download Prospectus
            </button>
          </div>

          <div className="space-y-6 md:space-y-12">
            {[
              { 
                step: "01", 
                title: "Portfolio Inquiry", 
                desc: "Submit your achievements, curiosities, and failures. We value growth trajectories over static scorecards.",
                icon: FileText
              },
              { 
                step: "02", 
                title: "Neural Sync Assessment", 
                desc: "A gamified evaluation of problem-solving abilities, logical reasoning, and creative adaptability.",
                icon: Cpu
              },
              { 
                step: "03", 
                title: "Guild Interview", 
                desc: "A direct dialogue with our Lead Architects to see if your vision aligns with the Nexus community.",
                icon: UserPlus
              },
              { 
                step: "04", 
                title: "Data Integration", 
                desc: "Final enrollment and assignment to your specific Academic Guild and specialized Neural Path.",
                icon: ShieldCheck
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative p-6 md:p-10 rounded-[2rem] md:rounded-[3.5rem] bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 shadow-2xl hover:border-blue-500/50 transition-all duration-700 backdrop-blur-xl"
              >
                <span className="absolute top-4 md:top-8 right-6 md:right-10 text-4xl md:text-7xl font-black text-blue-600/5 group-hover:text-blue-600/10 transition-colors">
                  {item.step}
                </span>
                <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600/10 text-blue-600 rounded-xl md:rounded-[1.5rem] flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                  <item.icon size={28} className="w-6 md:w-8" />
                </div>
                <h4 className="text-xl md:text-3xl font-black text-slate-900 dark:text-white mb-2 md:mb-4 uppercase tracking-tighter">{item.title}</h4>
                <p className="text-sm md:text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PHASE 3: ELIGIBILITY MATRIX */}
      <section className="py-20 md:py-40 bg-blue-600 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="container mx-auto px-6 relative z-10">
          <SectionLabel>PHASE 03: ELIGIBILITY MATRIX</SectionLabel>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-20">
            {[
              { title: "Age Cohort", val: "Grade 6 - Grade 12", desc: "We focus on the critical development years of formative and specialized intelligence." },
              { title: "Technical Aptitude", val: "Logic Proficiency", desc: "A base level of mathematical or logical reasoning is required for our core STEM tracks." },
              { title: "Moral Compass", val: "Ethical Integrity", desc: "A mandatory evaluation of collaborative spirit, empathy, and community leadership." }
            ].map((req, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10, backgroundColor: "rgba(255,255,255,0.15)" }}
                className="p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-500"
              >
                <Zap size={32} className="w-8 md:w-10 mb-6 md:mb-10 text-blue-200" />
                <h4 className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-blue-200 mb-2 md:mb-4">{req.title}</h4>
                <div className="text-2xl md:text-4xl font-black mb-4 md:mb-6 tracking-tighter leading-none">{req.val}</div>
                <p className="opacity-80 text-sm md:text-lg font-medium leading-relaxed">{req.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PHASE 4: THE INTAKE FORM (OPTIMIZED RESPONSIVENESS) */}
      <section className="min-h-screen flex items-center justify-center px-6 py-20 md:py-40">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12 md:mb-20">
            <SectionLabel>PHASE 04: INITIALIZATION</SectionLabel>
            <h2 className="text-4xl sm:text-6xl md:text-[8rem] font-black tracking-tighter text-slate-900 dark:text-white leading-none">
              BEGIN YOUR <br /> <span className="text-blue-600">SYNC.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            <div className="space-y-4">
               <input 
                type="text" 
                placeholder="FULL LEGAL NAME" 
                className="w-full px-6 md:px-10 py-4 md:py-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-full font-black uppercase tracking-[0.2em] text-[9px] md:text-[10px] focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-slate-900 dark:text-white shadow-sm" 
               />
               <input 
                type="email" 
                placeholder="SECURE ENCRYPTED EMAIL" 
                className="w-full px-6 md:px-10 py-4 md:py-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-full font-black uppercase tracking-[0.2em] text-[9px] md:text-[10px] focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-slate-900 dark:text-white shadow-sm" 
               />
               <div className="relative">
                  <select className="w-full px-6 md:px-10 py-4 md:py-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-full font-black uppercase tracking-[0.2em] text-[9px] md:text-[10px] focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all text-slate-900 dark:text-white appearance-none shadow-sm cursor-pointer">
                    <option>SELECT TARGET COHORT</option>
                    <option>PRIMARY GUILD (GR 6-8)</option>
                    <option>SECONDARY HUB (GR 9-10)</option>
                    <option>ADVANCED NEXUS (GR 11-12)</option>
                  </select>
                  <div className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                    <ChevronDown size={18} className="w-4 md:w-5" />
                  </div>
               </div>
            </div>
            <div className="flex flex-col gap-4">
               <textarea 
                placeholder="DESCRIBE YOUR VISION FOR THE 22ND CENTURY" 
                rows="4" 
                className="w-full px-6 md:px-10 py-4 md:py-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/5 rounded-[1.5rem] md:rounded-[3rem] font-black uppercase tracking-[0.2em] text-[9px] md:text-[10px] focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600 transition-all resize-none text-slate-900 dark:text-white shadow-sm"
               ></textarea>
               <button className="w-full py-5 md:py-6 bg-blue-600 text-white rounded-full font-black uppercase tracking-[0.4em] text-[10px] shadow-[0_15px_40px_rgba(37,99,235,0.3)] hover:bg-blue-700 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-3 md:gap-4 group">
                  Submit Packet <ArrowUpRight size={20} className="w-5 md:w-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
               </button>
            </div>
          </div>
          
          {/* Footer Contact Metadata */}
          <div className="mt-16 md:mt-24 flex flex-wrap justify-center gap-6 md:gap-12 text-slate-400 dark:text-slate-500">
             <div className="flex items-center gap-2 md:gap-3 group cursor-pointer hover:text-blue-600 transition-colors">
                <div className="p-2 bg-slate-100 dark:bg-slate-900 rounded-lg group-hover:bg-blue-50 transition-colors"><Phone size={14} className="md:w-4" /></div>
                <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest">+1 (555) NEXUS-01</span>
             </div>
             <div className="flex items-center gap-2 md:gap-3 group cursor-pointer hover:text-blue-600 transition-colors">
                <div className="p-2 bg-slate-100 dark:bg-slate-900 rounded-lg group-hover:bg-blue-50 transition-colors"><Mail size={14} className="md:w-4" /></div>
                <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest">admissions@eianexus.edu</span>
             </div>
             <div className="flex items-center gap-2 md:gap-3 group cursor-pointer hover:text-blue-600 transition-colors">
                <div className="p-2 bg-slate-100 dark:bg-slate-900 rounded-lg group-hover:bg-blue-50 transition-colors"><Globe size={14} className="md:w-4" /></div>
                <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest">admissions.eia.edu</span>
             </div>
          </div>
        </div>
      </section>

      {/* Vertical Scroll Progress Scrubber */}
      <motion.div 
        className="fixed top-0 right-0 bottom-0 w-1 bg-blue-600 z-[100] origin-top" 
        style={{ scaleY: smoothProgress }} 
      />

    </div>
  );
};

export default Admissions;