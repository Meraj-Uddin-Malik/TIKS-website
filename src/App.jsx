import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll } from "framer-motion";

// Layout Components
import Preloader from "./components/layout/Preloader";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Admissions from "./pages/Addmission";
// import Academics from "./pages/Academics";
// import Contact from "./pages/Contact";

export default function App() {
  // --- Global State ---
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState("home");
  
  // --- UI State for Premium Interactions ---
  const [theme, setTheme] = useState("dark"); // Defaulting to the cinematic dark theme
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Global Scroll Progress for the bottom progress bar
  const { scrollYProgress } = useScroll();

  // Navigation Links (Centralized so Header & Mobile Overlay share them)
  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Vision' },
    { id: 'admissions', label: 'Enroll' },
    { id: 'academics', label: 'Labs' },
    { id: 'faculty', label: 'Faculty' },
    { id: 'events', label: 'Events' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
    { id: 'portal', label: 'Portal', isAction: true },
  ];

  // --- Effects ---

  // 1. Initial Preloader
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Slightly longer for the cinematic effect
    return () => clearTimeout(timer);
  }, []);

  // 2. Dynamic Island Header Scroll Listener
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 3. Reset UI on Page Change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false); // Close mobile menu if open
  }, [page]);


  // --- Routing ---
  const renderPage = () => {
    switch (page) {
      case "home": return <Home setPage={setPage} />;
      case "about": return <About setPage={setPage} />;
      case "admissions": return <Admissions setPage={setPage} />;
      case "academics": return <Academics setPage={setPage} />;
      case "contact": return <Contact setPage={setPage} />;
      default: return <Home setPage={setPage} />;
    }
  };

  return (
    // The main wrapper controls the Dark/Light mode class
    <div className={theme}>
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-500 font-sans selection:bg-blue-600 selection:text-white">
        
        {/* Preloader is wrapped in AnimatePresence so it fades out smoothly */}
        <AnimatePresence>
          {loading && <Preloader />}
        </AnimatePresence>

        {!loading && (
          <>
            {/* HEADER (Now handles both Desktop Navbar and Mobile Overlay) */}
            <Header 
              page={page} 
              setPage={setPage} 
              theme={theme} 
              setTheme={setTheme} 
              scrolled={scrolled} 
              isMenuOpen={isMenuOpen} 
              setIsMenuOpen={setIsMenuOpen} 
              navLinks={navLinks}
            />

            {/* PAGE CONTENT WITH SMOOTH ROUTING TRANSITIONS */}
            <main className="min-h-screen">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={page} 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, y: -20 }} 
                  transition={{ duration: 0.4 }}
                >
                  {renderPage()}
                </motion.div>
              </AnimatePresence>
            </main>

            {/* FOOTER */}
            <Footer />

            {/* GLOBAL SCROLL PROGRESS BAR (Bottom of screen) */}
            <motion.div 
              className="fixed bottom-0 left-0 right-0 h-1 bg-blue-600 origin-left z-50" 
              style={{ scaleX: scrollYProgress }} 
            />
          </>
        )}
      </div>
    </div>
  );
}