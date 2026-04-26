import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X, ArrowRight } from "lucide-react"; // Added ArrowRight

const CampusSection = ({ setPage }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  
  // Replace this with your actual YouTube Video ID
  const youtubeVideoId = "L9SZIMZN-7M"; 

  return (
    <section className="container mx-auto px-6 py-10 pt-20">
      
      {/* --- NEW PREMIUM HEADING SECTION --- */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="max-w-2xl">
          <span className="text-blue-600 dark:text-blue-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">
            Campus Life
          </span>
          <h2 className="text-6xl md:text-6xl font-black tracking-tighter text-slate-900 dark:text-white">
            Explore The TIKSchool.
          </h2>
        </div>
        
        {/* Optional: You can route this button to a Gallery or About page */}
        <button 
          onClick={() => setPage && setPage('gallery')}
          className="flex items-center gap-2 font-black uppercase tracking-widest text-xs text-slate-500 hover:text-blue-600 transition-colors"
        >
          View Full Gallery <ArrowRight size={16} />
        </button>
      </div>

      {/* --- CINEMATIC FACADE --- */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
        onClick={() => setIsVideoOpen(true)} 
        className="relative w-full rounded-[3rem] overflow-hidden aspect-video md:aspect-[21/9] shadow-2xl group cursor-pointer"
      >
        {/* Background Image */}
        <div className="absolute inset-0 bg-slate-900">
          <img 
            src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?q=80&w=2000&auto=format&fit=crop" 
            alt="" 
            className="w-full h-full object-cover opacity-60 group-hover:scale-105 group-hover:opacity-40 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        {/* Play Button & Main Title */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
          <div className="w-24 h-24 bg-blue-600/90 backdrop-blur-md rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500 transition-all duration-300 shadow-[0_0_30px_rgba(37,99,235,0.5)]">
            <Play size={40} className="ml-2 text-white fill-white" />
          </div>
          <h3 className="text-3xl md:text-5xl font-black tracking-tighter transition-transform duration-500 group-hover:-translate-y-2">
            Campus Cinematic
          </h3>
        </div>
      </motion.div>

      {/* --- FULL-SCREEN YOUTUBE MODAL --- */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-12"
          >
            {/* Close Button */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-8 right-8 md:top-12 md:right-12 text-white/50 hover:text-white bg-white/10 hover:bg-white/20 p-4 rounded-full transition-all z-10"
            >
              <X size={32} />
            </button>

            {/* Video Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-6xl aspect-video rounded-3xl overflow-hidden bg-black shadow-[0_0_100px_rgba(37,99,235,0.2)] border border-white/10 relative"
            >
              <iframe
                src={`https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0&modestbranding=1`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default CampusSection;