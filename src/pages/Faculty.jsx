import React, { useState, useRef } from 'react';
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import * as Icons from 'lucide-react';

const { 
  Users, Award, Cpu, GraduationCap, 
  Sparkles, Globe, ArrowUpRight, 
  Quote, Microscope, Palette, 
  Binary, ChevronRight, HelpCircle,
  Mail, Linkedin, BookOpen, Fingerprint
} = Icons;

// --- UNIQUE UI UTILITIES ---

const SidebarLabel = ({ children }) => (
  <div className="absolute left-0 top-0 h-full w-12 hidden xl:flex items-center justify-center">
    <span className="rotate-[-90deg] whitespace-nowrap text-[8px] font-black uppercase tracking-[1em] text-blue-600/30">
      {children}
    </span>
  </div>
);

const Faculty = ({ setPage }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const [activeDossier, setActiveDossier] = useState(0);

  // Safe Icon Helper
  const SafeIcon = ({ icon: IconComponent, ...props }) => {
    const ComponentToRender = IconComponent || HelpCircle;
    return <ComponentToRender {...props} />;
  };

  const facultyData = [
    {
      id: 1,
      name: "Dr. Sarah Mitchell",
      role: "Chief Academic Architect",
      dept: "Strategic Intelligence",
      bio: "Former Research Director at MIT's Neural Media Lab. Specializes in cognitive plasticity and quantum logic systems.",
      achievement: "Architect of the 2050 Nexus Framework",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
      icon: Cpu
    },
    {
      id: 2,
      name: "Prof. James Wilson",
      role: "Lead Science Architect",
      dept: "Quantum Physics",
      bio: "Lead theorist in multi-state reality modeling. Author of 'The Silicon Spirit'. Pioneered the school's robotics sync program.",
      achievement: "Nobel Laureate Nominee 2023",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800",
      icon: Microscope
    },
    {
      id: 3,
      name: "Ms. Elena Rodriguez",
      role: "Visual Media Director",
      dept: "Cinematic Arts",
      bio: "Award-winning creative director focusing on digital anthropology through generative art and immersive storytelling.",
      achievement: "Venice Biennale Grand Prize 2022",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
      icon: Palette
    },
    {
      id: 4,
      name: "Dr. Chen Wei",
      role: "Lead Logic Architect",
      dept: "Quantum Computing",
      bio: "Architect of the first stable bio-digital bridge. His research focuses on the intersection of biological neurons and silicon logic.",
      achievement: "Turing Medal for Algorithmic Ethics",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
      icon: Binary
    },
    {
      id: 5,
      name: "Prof. Amara Okafor",
      role: "Ethics & Diplomacy Lead",
      dept: "Global Governance",
      bio: "Specializes in planetary-scale collaborative systems. Former advisor to the UN on post-scarcity economic modeling.",
      achievement: "World Peace Initiative Fellow",
      image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=800",
      icon: Globe
    }
  ];

  return (
    <div ref={containerRef} className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-1000 selection:bg-blue-600 selection:text-white">
      
      {/* 1. PANORAMIC HERO (Unique Perspective) */}
      <section className="relative min-h-[80vh] flex flex-col justify-end pb-20 px-6 overflow-hidden border-b border-slate-100 dark:border-white/5">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] dark:opacity-[0.05]">
           <span className="text-[35vw] font-black leading-none absolute -top-20 -left-10 select-none uppercase">GUILD</span>
        </div>
        
        <div className="container mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-px bg-blue-600" />
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-600">The Human Core</span>
            </div>
            <h1 className="text-6xl md:text-[8vw] font-black tracking-tighter leading-[0.8] mb-12">
              MEET THE <br/><span className="text-blue-600">ARCHITECTS.</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 dark:text-slate-400 font-medium max-w-2xl leading-tight">
              We have dismantled the role of 'teacher' to create a council of world-class mentors, researchers, and pioneers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. THE DOSSIER LIST (New Design Component) */}
      <section className="relative py-40">
        <SidebarLabel>Faculty Dossiers // v4.0</SidebarLabel>
        
        <div className="container mx-auto px-6">
          <div className="space-y-4">
            {facultyData.map((person, index) => (
              <motion.div 
                key={person.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setActiveDossier(index)}
                className={`group relative overflow-hidden transition-all duration-700 ${
                  activeDossier === index ? 'bg-slate-50 dark:bg-white/5 p-12 rounded-[3rem]' : 'py-8 border-b border-slate-100 dark:border-white/5 px-4'
                }`}
              >
                <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12">
                  {/* Number & Name */}
                  <div className="flex-1">
                    <div className="flex items-center gap-6 mb-4">
                      <span className="text-xs font-black text-blue-600/40">0{index + 1}</span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-blue-600">{person.dept}</span>
                    </div>
                    <h3 className="text-4xl md:text-6xl font-black tracking-tighter group-hover:text-blue-600 transition-colors">
                      {person.name}
                    </h3>
                    <p className="text-lg font-bold text-slate-400 mt-2">{person.role}</p>
                  </div>

                  {/* Visual Expansion */}
                  <AnimatePresence>
                    {activeDossier === index && (
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="lg:flex-1 grid md:grid-cols-2 gap-10 items-center"
                      >
                        <div className="space-y-6">
                          <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed italic">
                            "{person.bio}"
                          </p>
                          <div className="flex items-center gap-3 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-white/10">
                            <SafeIcon icon={Award} size={20} className="text-blue-600" />
                            <span className="text-xs font-black uppercase tracking-widest">{person.achievement}</span>
                          </div>
                          <div className="flex gap-4">
                            {/* <button className="p-3 rounded-full bg-slate-200 dark:bg-white/10 hover:bg-blue-600 hover:text-white transition-all"><Mail size={18} /></button>
                            <button className="p-3 rounded-full bg-slate-200 dark:bg-white/10 hover:bg-blue-600 hover:text-white transition-all"><Linkedin size={18} /></button>
                            <button className="p-3 rounded-full bg-slate-200 dark:bg-white/10 hover:bg-blue-600 hover:text-white transition-all"><ArrowUpRight size={18} /></button> */}
                          </div>
                        </div>
                        <div className="aspect-square rounded-[2rem] overflow-hidden relative border-4 border-white dark:border-slate-800 shadow-2xl">
                          <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. COUNCIL QUOTE (Minimal Contrast) */}
      <section className="bg-blue-600 py-32 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <Quote size={80} className="mx-auto mb-12 opacity-30" />
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter leading-tight max-w-5xl mx-auto italic">
            "A teacher who is not also a student of the future is merely teaching history."
          </h2>
        </div>
      </section>

      {/* 4. DEPARTMENTAL TERMINAL (Unique List Design) */}
      <section className="container mx-auto px-6 py-40">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3 space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-600/5 text-blue-600 text-[10px] font-black uppercase tracking-[0.4em] border border-blue-600/10">
              Council Composition
            </div>
            <h2 className="text-5xl font-black tracking-tighter leading-none">Global <br/>Intelligence <br/>Network.</h2>
            <div className="p-8 rounded-[2.5rem] bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
               <Fingerprint size={48} className="text-blue-600 mb-6" />
               <p className="text-sm font-bold text-slate-400 uppercase tracking-widest leading-loose">
                 Verified Academic Credentials<br/>
                 Industry Mastery Protocols<br/>
                 Psychometric Matching v2.1
               </p>
            </div>
          </div>

          <div className="lg:w-2/3 grid md:grid-cols-2 gap-4">
            {[
              { name: "Stem Architect Guild", members: "32", icon: Binary },
              { name: "Ethics & Logic Hub", members: "14", icon: BookOpen },
              { name: "Bio-Inquiry Lab", members: "19", icon: Microscope },
              { name: "Global Unity Council", members: "21", icon: Globe },
              { name: "Visual Syntax Lab", members: "12", icon: Palette },
              { name: "Neural Robotics", members: "28", icon: Cpu }
            ].map((dept, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 0.98, x: 10 }}
                className="p-8 rounded-[2rem] border border-slate-100 dark:border-white/5 bg-white dark:bg-slate-900 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <SafeIcon icon={dept.icon} size={20} />
                  </div>
                  <h4 className="text-lg font-black tracking-tight uppercase">{dept.name}</h4>
                </div>
                <span className="text-xs font-black text-slate-400">{dept.members}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION: CULTIVATE */}
      <section className="container mx-auto px-6 py-60 text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-5xl mx-auto"
        >
          <Sparkles size={60} className="mx-auto text-blue-600 animate-pulse mb-12" />
          <h2 className="text-6xl md:text-[10vw] font-black tracking-tighter leading-none mb-12">
            JOIN THE <span className="text-blue-600">GUILD.</span>
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium mb-16">
            Are you a world-class innovator looking for a sanctuary? We are constantly scanning for the next lead architect.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="px-12 py-6 bg-blue-600 text-white rounded-full font-black uppercase tracking-[0.4em] text-[10px] shadow-2xl hover:scale-105 transition-all">
              Apply to Counsel
            </button>
            <button className="px-12 py-6 border border-slate-200 dark:border-white/10 rounded-full font-black uppercase tracking-[0.4em] text-[10px] hover:bg-slate-50 dark:hover:bg-white/5 transition-all">
              Mentorship Connect
            </button>
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

export default Faculty;