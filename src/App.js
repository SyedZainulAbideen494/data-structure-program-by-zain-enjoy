import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MESSAGES = [
  "Attendance successfully avoided. Your parents are proud.",
  "DSA logic: O(n) complexity, O(0) brain activity.",
  "Error 404: Career ambition not found.",
  "Copied from GitHub. Still doesn't run. Impressive.",
  "You learned nothing today. Maximum efficiency reached.",
  "Reel scrolled. Productivity buried.",
  "A degree is just a very expensive receipt.",
  "Future CEO of 'Checking the Fridge' repeatedly."
];

const DS_ROASTS = [
  "Your Linked List is just a chain of bad decisions.",
  "If you can scroll Insta for 4 hours, you can write a loop lazy kid.",
  "Stack Overflow is tired of carrying your GPA.",
  "The code isn't the problem. The user is.",
  "Binary Search for your dignity... 404 Not Found."
];

const STATS = [
  { label: "Academic Willpower", value: "2%", note: "Extinct species", width: "2%" },
  { label: "Caffeine Saturation", value: "98%", note: "Only thing keeping you upright", width: "98%" },
  { label: "Social Life", value: "Error", note: "Server timed out", width: "0%" },
  { label: "Bunking Level", value: "99.999%", note: "Professional boundary crosser", width: "100%" },
  { label: "Attendance", value: "18%", note: "No exam for u", width: "18%" },
];

export default function BoredApp() {
  const [chaosMsg, setChaosMsg] = useState("");
  const [showStats, setShowStats] = useState(false);
  const [dsMsg, setDsMsg] = useState("");
  const [realityCheck, setRealityCheck] = useState(false);
  
  // New states to track button engagement
  const [hasClickedBigBtn, setHasClickedBigBtn] = useState(false);
  const [hasClickedDsBtn, setHasClickedDsBtn] = useState(false);

  const cycleMessage = (current, list, setter, trackSetter) => {
    if (trackSetter) trackSetter(true); // Mark as clicked
    const filtered = list.filter(m => m !== current);
    const randomItem = filtered[Math.floor(Math.random() * filtered.length)];
    setter(randomItem);
  };

  return (
    <div className="min-h-screen bg-[#FDFDFB] text-[#121212] font-sans selection:bg-indigo-100 flex flex-col items-center px-6 py-16">
      
      <header className="text-center mb-16 space-y-2">
        <h1 className="text-4xl font-black tracking-tight uppercase">Bored in College?</h1>
        <p className="text-sm font-medium text-gray-400 tracking-widest uppercase">A scientifically useless experience.</p>
      </header>

      <main className="w-full max-w-sm flex flex-col items-center space-y-12">
        
        {/* THE BIG BUTTON */}
        <div className="relative group w-full flex flex-col items-center">
          <motion.button
            onClick={() => cycleMessage(chaosMsg, MESSAGES, setChaosMsg, setHasClickedBigBtn)}
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, rotate: [0, -2, 2, 0] }}
            className="w-44 h-44 rounded-full bg-white border-[6px] border-[#121212] shadow-[8px_8px_0px_0px_rgba(18,18,18,1)] flex items-center justify-center text-2xl font-black italic tracking-tighter hover:bg-indigo-50 transition-colors"
          >
            {/* UPDATED LABEL */}
            {hasClickedBigBtn ? "CLICK AGAIN" : "CLICK"}
          </motion.button>

          <AnimatePresence mode="wait">
            {chaosMsg && (
              <motion.div 
                key={chaosMsg}
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -10 }}
                className="mt-8 p-5 bg-white border-2 border-[#121212] rounded-xl shadow-[4px_4px_0px_0px_rgba(18,18,18,1)] text-center font-bold"
              >
                "{chaosMsg}"
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* SECTION 2: STATS */}
        <div className="w-full flex flex-col items-center">
          <button 
            onClick={() => setShowStats(!showStats)}
            className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-indigo-600 transition-colors py-2"
          >
            {showStats ? "[ Close Classified Data ]" : "[ View My Stats ]"}
          </button>

          <AnimatePresence>
            {showStats && (
              <motion.section 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="w-full mt-4 bg-[#121212] text-white p-6 rounded-2xl space-y-6 shadow-2xl"
              >
                {STATS.map((stat) => (
                  <div key={stat.label} className="space-y-2">
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] font-bold uppercase text-indigo-400">{stat.label}</span>
                      <span className="text-xs font-mono">{stat.value}</span>
                    </div>
                    <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: stat.width }}
                        className="h-full bg-white"
                        transition={{ duration: 1.2, ease: "circOut" }}
                      />
                    </div>
                    <p className="text-[10px] italic text-gray-500">{stat.note}</p>
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-800 text-center">
                  <span className="text-[9px] text-gray-600 uppercase tracking-tighter">System generated roast • Refresh for nothing</span>
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </div>

        {/* SECTION 3: THE TRAP (DS ROASTS) */}
        <div className="w-full">
          <button 
            onClick={() => cycleMessage(dsMsg, DS_ROASTS, setDsMsg, setHasClickedDsBtn)}
            className="w-full py-4 bg-white border-2 border-[#121212] font-black uppercase text-xs tracking-widest hover:bg-black hover:text-white transition-all active:translate-y-1"
          >
            {/* UPDATED LABEL */}
            {hasClickedDsBtn ? "Ok sry, click again for code" : "Tomorrow’s DS Program"}
          </button>
          
          <AnimatePresence mode="wait">
            {dsMsg && (
              <motion.div 
                key={dsMsg}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="mt-3 p-4 bg-red-50 border border-red-200 text-red-900 text-xs font-bold rounded-lg text-center"
              >
                {dsMsg}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* SECTION 4: REALITY CHECK */}
        <div className="pt-12 pb-20 w-full flex flex-col items-center">
          {!realityCheck ? (
            <motion.button 
              onClick={() => setRealityCheck(true)}
              whileHover={{ scale: 1.05 }}
              className="group relative flex flex-col items-center p-4"
            >
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-gray-400 group-hover:text-red-500 transition-colors duration-300">
                Click here
              </span>
              <div className="mt-2 relative w-12 h-[2px] bg-gray-200 overflow-hidden">
                <motion.div 
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                  className="absolute inset-0 bg-red-500"
                />
              </div>
              <span className="absolute -bottom-2 opacity-0 group-hover:opacity-100 group-hover:bottom-[-12px] text-[8px] text-gray-400 transition-all duration-500 italic">
                (don't do it)
              </span>
            </motion.button>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center px-6 py-8 bg-red-50 border-2 border-red-600 rounded-2xl"
            >
              <h2 className="text-3xl font-black uppercase tracking-tighter text-red-600 mb-2">
                Go study for your DS exam.
              </h2>
              <p className="text-lg font-bold text-red-900">Dude wtf. Lazy kid.</p>
              <p className="text-xs text-red-400 mt-6 font-medium tracking-tight">
                This site cannot save your GPA. Only effort can.
              </p>
              
              <button 
                onClick={() => {
                    setRealityCheck(false);
                    setHasClickedDsBtn(false); // Reset this for extra annoyance
                }}
                className="mt-6 text-[10px] uppercase tracking-widest font-bold text-red-600 underline underline-offset-4 opacity-50 hover:opacity-100"
              >
                I'm sorry, take me back
              </button>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}