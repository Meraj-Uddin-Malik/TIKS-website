import React, { useState, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Calendar, Clock, MapPin, Users, Zap, Radio, 
  Activity, Trophy, ArrowUpRight, ChevronRight, 
  Sparkles, Filter, Search, HelpCircle, Bell
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

const Events = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [filter, setFilter] = useState('all');

  const eventData = [
    {
      id: 1,
      date: "APR 28",
      year: "2024",
      title: "Neural Robotics Sync",
      category: "Innovation",
      time: "09:00 - 14:00",
      location: "Alpha Lab 01",
      desc: "Live demonstration of autonomous drone swarms and biometric feedback loops integrated with student-built AI.",
      type: "workshop",
      status: "open"
    },
    {
      id: 2,
      date: "MAY 05",
      year: "2024",
      title: "The Ethics of Ascension",
      category: "Philosophy",
      time: "11:00 - 13:00",
      location: "Main Auditorium",
      desc: "A global debate session focusing on the moral implications of bio-digital integration in the 22nd century.",
      type: "symposium",
      status: "open"
    },
    {
      id: 3,
      date: "JUN 12",
      year: "2024",
      title: "Quantum Logic Finals",
      category: "Academics",
      time: "10:00 - 16:00",
      location: "Nexus Server Hub",
      desc: "Advanced Core students present their multi-state computational models to the Faculty Council.",
      type: "presentation",
      status: "restricted"
    }
  ];

  return (
    <div ref={containerRef} className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-1000 selection:bg-blue-600 selection:text-white">
      
      {/* 1. KINETIC HERO (Atmospheric) */}
      <section className="relative min-h-screen flex items-center justify-center pt-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
           <svg className="w-full h-full" viewBox="0 0 1000 1000">
              <motion.path 
                d="M0,500 C200,400 400,600 600,500 S800,400 1000,500" 
                fill="none" stroke="#2563eb" strokeWidth="0.5"
                animate={{ d: ["M0,500 C200,300 400,700 600,500 S800,300 1000,500", "M0,500 C200,600 400,400 600,500 S800,600 1000,500", "M0,500 C200,300 400,700 600,500 S800,300 1000,500"] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
           </svg>
        </div>

        <div className="container mx-auto text-center z-10">
          <SectionLabel>Nexus Live Pulse</SectionLabel>
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-6xl md:text-[12vw] font-black tracking-tighter leading-[0.8] mb-12"
          >
            THE <br/><span className="text-blue-600 italic font-serif opacity-80">SYNC.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium leading-tight"
          >
            Every moment at Nexus is a data point in our collective evolution. Explore upcoming synchronizations and archive milestones.
          </motion.p>
        </div>
      </section>

      {/* 2. TEMPORAL STREAM (Main Events Feed) */}
      <section className="container mx-auto px-6 py-40">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Controls Sidebar */}
          <div className="lg:w-1/4 lg:sticky lg:top-40 h-fit space-y-12">
            <div>
              <h3 className="text-sm font-black uppercase tracking-[0.3em] text-blue-600 mb-6">Filter Signal</h3>
              <div className="flex flex-col gap-3">
                {['all', 'innovation', 'academics', 'philosophy'].map(cat => (
                  <button 
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`text-left px-6 py-3 rounded-2xl font-black uppercase tracking-widest text-[9px] transition-all border ${
                      filter === cat 
                        ? 'bg-blue-600 text-white border-blue-600 shadow-xl shadow-blue-600/20' 
                        : 'bg-white dark:bg-slate-900 border-slate-100 dark:border-white/5 text-slate-400 hover:border-blue-600'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-8 rounded-[2.5rem] bg-blue-600 text-white shadow-2xl relative overflow-hidden group">
              <Bell className="absolute -top-4 -right-4 w-24 h-24 text-white/10 group-hover:rotate-12 transition-transform" />
              <h4 className="text-lg font-black tracking-tight mb-4 relative z-10">Stay Synced</h4>
              <p className="text-xs text-blue-100 mb-6 relative z-10 font-bold uppercase tracking-wider leading-relaxed">Join the notification matrix for instant event alerts.</p>
              <button className="w-full py-4 bg-white text-blue-600 rounded-xl font-black uppercase tracking-widest text-[9px] relative z-10 hover:scale-105 transition-all">Enable Notify</button>
            </div>
          </div>

          {/* Events Stream */}
          <div className="lg:w-3/4 space-y-16 relative">
            <div className="absolute left-[31px] md:left-[51px] top-0 bottom-0 w-px bg-gradient-to-b from-blue-600 via-blue-600/20 to-transparent hidden md:block" />

            {eventData.filter(e => filter === 'all' || e.category.toLowerCase() === filter).map((event, i) => (
              <motion.div 
                key={event.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative md:pl-24"
              >
                {/* Temporal Node */}
                <div className="absolute left-0 top-0 hidden md:flex flex-col items-center gap-4">
                   <div className="w-24 h-24 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-white/10 shadow-xl flex flex-col items-center justify-center">
                      <span className="text-[10px] font-black text-blue-600">{event.year}</span>
                      <span className="text-2xl font-black tracking-tighter leading-none">{event.date.split(' ')[1]}</span>
                      <span className="text-[8px] font-black uppercase tracking-widest text-slate-400">{event.date.split(' ')[0]}</span>
                   </div>
                </div>

                {/* Event Detail Card */}
                <div className="group p-8 md:p-12 rounded-[3.5rem] bg-white dark:bg-slate-900/50 border border-slate-100 dark:border-white/5 shadow-2xl hover:border-blue-600 transition-all duration-500">
                  <div className="flex flex-wrap items-center justify-between gap-6 mb-8">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                        {event.category === 'Innovation' ? <Zap size={24}/> : <Activity size={24}/>}
                      </div>
                      <div>
                        <span className="text-[9px] font-black uppercase tracking-[0.3em] text-blue-600">{event.category}</span>
                        <h3 className="text-3xl md:text-4xl font-black tracking-tighter">{event.title}</h3>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                       <div className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-1">
                          <Clock size={14} /> {event.time}
                       </div>
                       <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                          <MapPin size={14} /> {event.location}
                       </div>
                    </div>
                  </div>
                  
                  <p className="text-slate-500 dark:text-slate-400 font-medium text-lg leading-relaxed mb-10 max-w-2xl">
                    {event.desc}
                  </p>

                  <div className="flex items-center justify-between pt-10 border-t border-slate-100 dark:border-white/5">
                    <div className="flex -space-x-4">
                       {[0,1,2].map(n => (
                         <div key={n} className="w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-slate-200 overflow-hidden">
                            <img src={`https://i.pravatar.cc/100?img=${n+10}`} alt="attendee" className="w-full h-full object-cover" />
                         </div>
                       ))}
                       <div className="w-10 h-10 rounded-full border-4 border-white dark:border-slate-900 bg-blue-600 flex items-center justify-center text-[10px] font-black text-white">+24</div>
                    </div>
                    <button className="px-10 py-5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl font-black uppercase tracking-widest text-[9px] flex items-center gap-3 hover:scale-105 transition-all shadow-xl group">
                       Initialize Sync <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ARCHIVE GRID (Past Highlights) */}
      <section className="bg-slate-900 py-40 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
        <div className="container mx-auto px-6 relative z-10">
          <SectionLabel>Temporal Archive</SectionLabel>
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none">Past <br/>Realities.</h2>
            <button className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors flex items-center gap-2">View Full History <ChevronRight size={16}/></button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Quantum Summit 23", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4" },
              { title: "Bio-Inquiry Expo", img: "https://images.unsplash.com/photo-1532187875605-1ef6c747094d" },
              { title: "Arts Synthesis", img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f" }
            ].map((arc, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="group relative aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10"
              >
                <img src={`${arc.img}?auto=format&fit=crop&q=80&w=800`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" alt={arc.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10">
                   <span className="text-[8px] font-black uppercase tracking-[0.3em] text-blue-500 mb-2 block">Success Protocol</span>
                   <h4 className="text-2xl font-black tracking-tighter">{arc.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA: PROPOSE SYNC */}
      <section className="container mx-auto px-6 py-60 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-4xl mx-auto space-y-12"
        >
          <Trophy size={60} className="mx-auto text-blue-600 animate-bounce mb-8" />
          <h2 className="text-6xl md:text-9xl font-black tracking-tighter leading-none">CRAFT A <br/>NEW <span className="text-blue-600">PULSE.</span></h2>
          <p className="text-xl text-slate-500 max-w-xl mx-auto font-medium">Have a vision for a synchronization? Propose a workshop or symposium to the Council.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-16 py-8 bg-blue-600 text-white rounded-full font-black uppercase tracking-[0.4em] text-[10px] shadow-2xl hover:scale-105 transition-all">Propose Event</button>
          </div>
        </motion.div>
      </section>

      {/* Scroll Scrubber */}
      <motion.div 
        className="fixed top-0 left-0 bottom-0 w-1 bg-blue-600 z-[100] origin-top" 
        style={{ scaleY: smoothProgress }} 
      />

    </div>
  );
};

export default Events;