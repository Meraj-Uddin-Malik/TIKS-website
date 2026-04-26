import React, { useState, useRef } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Globe,
  Clock,
  ShieldCheck,
  Zap,
  Sparkles,
  ChevronDown,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

// --- SHARED UI UTILITIES ---

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

const Contact = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  const [formState, setFormState] = useState("idle"); // idle, sending, success, error

  // --- FORM SUBMISSION LOGIC ---
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState("sending");

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xyklvvgr", {
        // REPLACE THIS WITH YOUR FORMSPREE ID
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setFormState("success");
        form.reset();
      } else {
        setFormState("error");
      }
    } catch (error) {
      setFormState("error");
    }
  };

  return (
    <div
      ref={containerRef}
      className="bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-1000 selection:bg-blue-600 selection:text-white"
    >
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[70vh] flex items-center justify-center px-6 overflow-hidden pt-20">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-30 dark:opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <motion.circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.05"
              className="text-blue-600"
              animate={{ r: [35, 42, 35], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
          </svg>
        </div>

        <div className="container mx-auto text-center z-10">
          <SectionLabel>Contact our team</SectionLabel>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-10"
          >
            GET IN <br />
            <span className="text-blue-600 italic font-serif opacity-80">
              TOUCH.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-xl mx-auto font-medium"
          >
            Have questions about admissions or our programs? We're here to
            provide the information you need.
          </motion.p>
        </div>
      </section>

      {/* 2. CONTACT INFO CARDS */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              label: "Email Us",
              val: "info@eia-nexus.edu",
              icon: Mail,
              desc: "For general inquiries and admissions support.",
            },
            {
              label: "Call Us",
              val: "+1 (555) 000-1234",
              icon: Phone,
              desc: "Available Monday to Friday, 8am – 5pm.",
            },
            {
              label: "Visit Us",
              val: "Innovation Way, City Center",
              icon: MapPin,
              desc: "Schedule a campus tour via the form below.",
            },
          ].map((node, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="p-10 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-white/5 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-white dark:bg-slate-800 text-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <node.icon size={20} />
              </div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-2">
                {node.label}
              </p>
              <h4 className="text-xl font-black tracking-tight mb-4">
                {node.val}
              </h4>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                {node.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. CONTACT FORM & MAP */}
      <section className="container mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Map Side */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="rounded-[3rem] overflow-hidden border border-slate-200 dark:border-white/10 h-[500px] w-full relative shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.324330095434!2d66.96087277358438!3d24.92101884283506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb315c05289dc05%3A0xd6c68a28db42254f!2sZEMIMAAS!5e0!3m2!1sen!2s!4v1777203134938!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  filter: "grayscale(1) invert(0.9) contrast(1.2)",
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="dark:opacity-80"
              />

              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl border border-white dark:border-white/10">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-600 rounded-lg text-white">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="font-black text-sm uppercase tracking-tight">
                      Main Branch Address
                    </p>
                    <p className="text-xs text-slate-500 font-medium">
                      ZEMIMAAS, UG49 Rubby Cenima & Shopping Mall, Karachi, Pakistan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="order-1 lg:order-2">
            <motion.form
              onSubmit={handleSubmit}
              className="p-10 md:p-12 rounded-[3.5rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-white/5 shadow-xl space-y-6"
            >
              <AnimatePresence mode="wait">
                {formState === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-20 text-center space-y-6"
                  >
                    <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-3xl font-black tracking-tighter">
                      Thank You!
                    </h3>
                    <p className="text-slate-500 font-medium">
                      Your message has been received. Our team will contact you
                      shortly.
                    </p>
                    <button
                      onClick={() => setFormState("idle")}
                      className="text-blue-600 font-black uppercase tracking-widest text-[10px]"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <div className="space-y-6">
                    <h3 className="text-3xl font-black tracking-tighter mb-8">
                      Send a Message
                    </h3>

                    {formState === "error" && (
                      <p className="text-red-500 text-xs font-bold uppercase mb-4">
                        Transmission failed. Please try again.
                      </p>
                    )}

                    <div className="grid md:grid-cols-2 gap-4">
                      <input
                        required
                        name="full_name"
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-8 py-5 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-white/5 focus:ring-2 focus:ring-blue-600 transition-all outline-none font-bold text-sm"
                      />
                      <input
                        required
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        className="w-full px-8 py-5 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-white/5 focus:ring-2 focus:ring-blue-600 transition-all outline-none font-bold text-sm"
                      />
                    </div>
                    <select
                      name="subject"
                      className="w-full px-8 py-5 bg-white dark:bg-slate-800 rounded-full border border-slate-200 dark:border-white/5 focus:ring-2 focus:ring-blue-600 transition-all outline-none font-bold text-sm appearance-none cursor-pointer"
                    >
                      <option>General Inquiry</option>
                      <option>Admissions Question</option>
                      <option>Campus Tour Request</option>
                      <option>Technical Support</option>
                    </select>
                    <textarea
                      name="message"
                      rows="4"
                      placeholder="How can we help you?"
                      className="w-full px-8 py-6 bg-white dark:bg-slate-800 rounded-[2rem] border border-slate-200 dark:border-white/5 focus:ring-2 focus:ring-blue-600 transition-all outline-none font-bold text-sm resize-none"
                    ></textarea>

                    <button
                      type="submit"
                      disabled={formState === "sending"}
                      className="w-full py-6 bg-blue-600 text-white rounded-full font-black uppercase tracking-[0.3em] text-[10px] shadow-lg hover:bg-blue-700 transition-all flex items-center justify-center gap-3 group"
                    >
                      {formState === "sending" ? (
                        "Sending Signal..."
                      ) : (
                        <>
                          Send Message{" "}
                          <ArrowUpRight
                            size={18}
                            className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                          />
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-center gap-6 pt-6 opacity-40">
                      <div className="flex items-center gap-2">
                        <ShieldCheck size={14} />{" "}
                        <span className="text-[9px] font-bold uppercase tracking-widest">
                          Secure Form
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={14} />{" "}
                        <span className="text-[9px] font-bold uppercase tracking-widest">
                          24h Response
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </AnimatePresence>
            </motion.form>
          </div>
        </div>
      </section>

      {/* 4. SIMPLE FAQ SECTION */}
      <section className="bg-slate-50 dark:bg-slate-900/30 py-32 border-y border-slate-100 dark:border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-black tracking-tighter mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "When are the school hours?",
                  a: "Classes run from 8:30 AM to 3:30 PM, Monday through Friday.",
                },
                {
                  q: "How do I apply for the next semester?",
                  a: "You can start the process on our Enroll page or download the prospectus for full details.",
                },
                {
                  q: "Are campus tours available?",
                  a: "Yes, we host guided campus tours every Tuesday and Thursday. Please book via the contact form.",
                },
              ].map((faq, i) => (
                <details
                  key={i}
                  className="group bg-white dark:bg-slate-900 rounded-3xl border border-slate-100 dark:border-white/5 overflow-hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer list-none p-8">
                    <span className="text-lg font-bold tracking-tight">
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={20}
                      className="group-open:rotate-180 transition-transform text-blue-600"
                    />
                  </summary>
                  <p className="px-8 pb-8 text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER SOCIALS CTA */}
      <section className="container mx-auto px-6 py-40 text-center">
        <SectionLabel>Stay Connected</SectionLabel>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-12">
          Follow Our <span className="text-blue-600">Journey.</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {["Instagram", "LinkedIn", "Twitter", "Facebook"].map((social) => (
            <button
              key={social}
              className="px-10 py-4 rounded-full border border-slate-200 dark:border-white/10 font-black uppercase tracking-widest text-[9px] hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all"
            >
              {social}
            </button>
          ))}
        </div>
      </section>

      {/* Scroll Scrubber */}
      <motion.div
        className="fixed top-0 left-0 bottom-0 w-1 bg-blue-600 z-[100] origin-top"
        style={{ scaleY: smoothProgress }}
      />
    </div>
  );
};

export default Contact;
