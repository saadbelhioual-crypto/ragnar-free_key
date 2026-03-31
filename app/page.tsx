"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, CheckCircle2, Crown, Flame } from 'lucide-react';

export default function RagnarRedeem() {
  const [copied, setCopied] = useState(false);
  const CODE = "RAGNAR-FF10-FREE";

  const handleCopy = () => {
    navigator.clipboard.writeText(CODE).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    });
  };

  return (
    <div className="min-h-screen bg-[#020205] text-white font-mono flex items-center justify-center p-6 overflow-hidden relative">
      {/* Glow Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-20%] w-[60vw] h-[60vw] bg-blue-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-20%] w-[60vw] h-[60vw] bg-red-600/15 blur-[120px] rounded-full" />
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 w-full max-w-lg p-[2px] rounded-[2rem] bg-gradient-to-br from-[#1A73E8] via-transparent to-[#E81A1A] animate-pulse-slow"
      >
        <div className="bg-[#020205]/90 backdrop-blur-xl rounded-[2rem] p-10 shadow-2xl border border-white/5">
          <AnimatePresence mode="wait">
            {!copied ? (
              <motion.div key="ready" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: -20 }} className="text-center space-y-8">
                <div className="flex justify-between items-center opacity-50 text-[10px] tracking-[0.3em]">
                  <Crown size={18} /> <span>RAGNAR SYSTEM</span> <Flame size={18} />
                </div>
                <h1 className="text-4xl font-black italic tracking-tighter">YOUR CODE</h1>
                <div onClick={handleCopy} className="cursor-pointer bg-black/60 border border-[#1A73E8]/40 p-6 rounded-2xl shadow-[0_0_20px_rgba(26,115,232,0.2)] hover:border-[#1A73E8] transition-all">
                  <p className="text-2xl md:text-3xl font-black tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-red-500 italic">
                    {CODE}
                  </p>
                </div>
                <button onClick={handleCopy} className="w-full py-5 bg-white text-black font-black rounded-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3">
                  <Copy size={20} /> COPY CODE
                </button>
              </motion.div>
            ) : (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10 space-y-6">
                <CheckCircle2 size={80} className="text-[#1A73E8] mx-auto drop-shadow-[0_0_15px_rgba(26,115,232,0.5)]" />
                <h2 className="text-3xl font-black italic">CODE COPIED!</h2>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div initial={{ width: 0 }} animate={{ width: "100%" }} transition={{ duration: 2.5 }} className="h-full bg-gradient-to-r from-[#1A73E8] to-[#E81A1A]" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
      <div className="absolute bottom-6 opacity-20 text-[10px] tracking-[0.5em]">RAGNAR OS // SECURE</div>
    </div>
  );
}
