import React, { useState, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Image as ImageIcon, Maximize, Filter, Layers, Camera, 
  Sparkles, ChevronRight, ArrowUpRight, Grid, Search,
  GraduationCap, Palette, Trophy, Microscope, Zap
} from 'lucide-react';

// --- UNIQUE UI UTILITIES ---

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

const Gallery = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeCohort, setActiveCohort] = useState('all');

  const galleryData = [
    {
      id: 1,
      title: "Neural Robotics Finals",
      cohort: "gr11-12",
      category: "labs",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      span: "md:col-span-2 md:row-span-2"
    },
    {
      id: 2,
      title: "Digital Anthropology Mural",
      cohort: "gr9-10",
      category: "arts",
      image: "https://images.unsplash.com/photo-1544717297-fa154da09f9b",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      id: 3,
      title: "Quantum Math Symposium",
      cohort: "gr11-12",
      category: "academics",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
      span: "md:col-span-1 md:row-span-2"
    },
    {
      id: 4,
      title: "Primary Code Camp",
      cohort: "gr6-8",
      category: "labs",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4",
      span: "md:col-span-1 md:row-span-1"
    },
    {
      id: 5,
      title: "Annual Bio-Inquiry Expo",
      cohort: "all",
      category: "labs",
      image: "https://images.unsplash.com/photo-1532187875605-1ef6c747094d",
      span: "md:col-span-2 md:row-span-1"
    },
    {
      id: 6,
      title: "Cinematic Storytelling",
      cohort: "gr9-10",
      category: "arts",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f",
      span: "md:col-span-1 md:row-span-1"
    }
  ];

  const filteredItems = galleryData.filter(item => {
    const categoryMatch = activeFilter === 'all' || item.category === activeFilter;
    const cohortMatch = activeCohort === 'all' || item.cohort === activeCohort || item.cohort === 'all';
    return categoryMatch && cohortMatch;
  });

  return (
    <div ref={containerRef} className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-1000 selection:bg-blue-600 selection:text-white">
      
      {/* 1. ATMOSPHERIC HERO */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
           <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
           <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] animate-pulse" />
        </div>

        <div className="container mx-auto text-center z-10">
          <SectionLabel>Nexus Visual Archive</SectionLabel>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[10vw] font-black tracking-tighter leading-[0.8] mb-12"
          >
            THE <br/><span className="text-blue-600 italic font-serif opacity-80 text-[8vw] md:text-[12vw]">GALLERY.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium"
          >
            A curated perspective of the events, breakthroughs, and daily synchronizations within our sanctuary.
          </motion.p>
        </div>
      </section>

      {/* 2. ARCHIVE CONTROLS (Cohort & Activity Filters) */}
      <section className="sticky top-20 z-30 py-8 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-y border-slate-100 dark:border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            {/* Grade Cohort Switcher */}
            <div className="flex bg-slate-100 dark:bg-white/5 p-1 rounded-2xl">
              {[
                { id: 'all', label: 'All Cohorts' },
                { id: 'gr6-8', label: 'Gr 6-8' },
                { id: 'gr9-10', label: 'Gr 9-10' },
                { id: 'gr11-12', label: 'Gr 11-12' }
              ].map(cohort => (
                <button
                  key={cohort.id}
                  onClick={() => setActiveCohort(cohort.id)}
                  className={`px-6 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                    activeCohort === cohort.id 
                      ? 'bg-blue-600 text-white shadow-lg' 
                      : 'text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {cohort.label}
                </button>
              ))}
            </div>

            {/* Activity Category Filters */}
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { id: 'all', icon: Grid },
                { id: 'labs', icon: Microscope },
                { id: 'arts', icon: Palette },
                { id: 'academics', icon: GraduationCap }
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all border ${
                    activeFilter === cat.id 
                      ? 'bg-blue-600 text-white border-blue-600 shadow-xl shadow-blue-600/20' 
                      : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-white/5 text-slate-400 hover:border-blue-600'
                  }`}
                >
                  <cat.icon size={18} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. THE PERSPECTIVE MOSAIC (Dynamic Gallery) */}
      <section className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[300px] gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, i) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`relative group rounded-[2.5rem] overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-100 dark:border-white/5 ${item.span}`}
              >
                {/* Image Component */}
                <img 
                  src={`${item.image}?auto=format&fit=crop&q=80&w=1200`} 
                  alt={item.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
                />
                
                {/* Overlay Interface */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="absolute bottom-8 left-8 right-8 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-[8px] font-black uppercase tracking-widest">
                      {item.cohort.replace('-', '–')}
                    </span>
                    <span className="text-[8px] font-black uppercase tracking-widest text-white/50">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-white tracking-tighter leading-none mb-4">{item.title}</h3>
                  <button className="flex items-center gap-2 text-blue-400 font-black uppercase tracking-widest text-[9px]">
                    Expand View <Maximize size={12} />
                  </button>
                </div>

                {/* Technical Meta Tag (Top Right) */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                   <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                      <Camera size={16} />
                   </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="py-40 text-center space-y-6"
          >
            <ImageIcon size={60} className="mx-auto text-slate-200 dark:text-slate-800" />
            <h3 className="text-2xl font-black text-slate-400 uppercase tracking-tighter">No data found in this frequency.</h3>
            <button onClick={() => {setActiveFilter('all'); setActiveCohort('all');}} className="text-blue-600 font-black uppercase tracking-widest text-xs">Reset All Signals</button>
          </motion.div>
        )}
      </section>

      {/* 4. STATISTICS STRIP (School Impact) */}
      <section className="bg-blue-600 py-24 text-white overflow-hidden relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Archived Syncs", val: "12,400+" },
              { label: "Lab Breakthroughs", val: "850+" },
              { label: "Global Credits", val: "42" },
              { label: "Neural Pathways", val: "150" }
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-black tracking-tighter mb-2">{stat.val}</div>
                <div className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION: CAPTURE THE FUTURE */}
      <section className="container mx-auto px-6 py-60 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto space-y-12"
        >
          <Sparkles size={60} className="mx-auto text-blue-600 animate-pulse mb-8" />
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-none uppercase">Document <br/>The <span className="text-blue-600">Evolution.</span></h2>
          <p className="text-xl text-slate-500 max-w-xl mx-auto font-medium">Are you a student creator? Submit your projects and campus memories to the Neural Archive.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-16 py-8 bg-blue-600 text-white rounded-full font-black uppercase tracking-[0.4em] text-[10px] shadow-2xl hover:scale-105 transition-all">Submit Media</button>
            <button className="px-16 py-8 border border-slate-200 dark:border-white/10 rounded-full font-black uppercase tracking-[0.4em] text-[10px] hover:bg-slate-100 dark:hover:bg-white/5 transition-all">Request Access</button>
          </div>
        </motion.div>
      </section>

      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 bottom-0 w-1 bg-blue-600 z-[100] origin-top" 
        style={{ scaleY: smoothProgress }} 
      />

    </div>
  );
};

export default Gallery;