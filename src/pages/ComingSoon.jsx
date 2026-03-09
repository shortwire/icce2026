import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex flex-col items-center pt-10 md:pt-12 relative overflow-hidden bg-[#F9FAFB] px-6">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-ieee-blue/5 blur-[120px] rounded-full -z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-yellow-400/5 blur-[120px] rounded-full -z-0"></div>
      
      {/* Moving Particles */}
      <motion.div 
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-2 h-2 bg-ieee-blue rounded-full"
      ></motion.div>
      <motion.div 
        animate={{ 
          y: [0, 20, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-yellow-400 rounded-full"
      ></motion.div>

      <div className="max-w-3xl w-full text-center space-y-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-ieee-blue/10 border border-ieee-blue/20">
            <Clock size={16} className="text-ieee-blue animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-ieee-blue">Phase in Progress</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-[#191961] uppercase tracking-tighter leading-none">
            Something <br/>
            <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px #191961' }}>EXTRAORDINARY</span><br/>
            is Coming
          </h1>
          
          <p className="text-slate-500 font-medium max-w-xl mx-auto italic text-sm leading-relaxed">
            We're meticulously crafting this section to provide a seamless and innovative experience for ICCE 2026. Stay tuned for the official launch.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="pt-8 border-t border-slate-100 max-w-xs mx-auto"
        >
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em]">
            Official ICCE 2026 Kolkata Portal
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ComingSoon;
