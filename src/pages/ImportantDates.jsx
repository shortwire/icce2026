import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  ShieldCheck, 
  ArrowRightCircle, 
  Info,
  Timer,
  Zap,
  CheckCircle2,
  FileText
} from 'lucide-react';
import { Link } from 'react-router-dom';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;
      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="relative group">
          <div className="bg-white rounded-xl p-1.5 md:p-2 shadow-lg border border-slate-100 flex flex-col items-center justify-center transform transition-transform group-hover:-translate-y-1">
            <div className={`text-xl md:text-2xl font-black ${unit === 'seconds' ? 'text-yellow-400' : 'text-icce-blue'} leading-none`}>
              {value.toString().padStart(2, '0')}
            </div>
            <div className="text-[7px] font-black uppercase tracking-[0.1em] text-slate-400 mt-0.5">{unit}</div>
          </div>
          {unit !== 'seconds' && (
             <div className="hidden md:block absolute top-1/2 -right-3 -translate-y-1/2 text-slate-300 font-black text-xl">:</div>
          )}
        </div>
      ))}
    </div>
  );
};

const ImportantDates = () => {
  const dates = [
    { label: 'Paper Submission Deadline', date: 'July 15, 2026', status: 'upcoming', icon: FileText, desc: 'Final date for electronic manuscript submission through Microsoft CMT.' },
    { label: 'Notification of Acceptance', date: 'August 31, 2026', status: 'pending', icon: CheckCircle2, desc: 'Authors will be notified of the review results via email.' },
    { label: 'Camera Ready Submission', date: 'September 10, 2026', status: 'pending', icon: ShieldCheck, desc: 'Submission of final, IEEE-compliant manuscripts for accepted papers.' },
    { label: 'Early Bird Registration', date: 'September 1 - 15, 2026', status: 'pending', icon: Zap, desc: 'Take advantage of reduced registration fees during this period.' },
    { label: 'Conference Dates', date: 'November 19, 20, & 21, 2026', status: 'pending', icon: Calendar, desc: 'Main conference events, technical sessions, and keynote speeches.' }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden font-sans">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-ieee-blue/[0.02] rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-400/[0.02] rounded-full blur-3xl pointer-events-none"></div>
      
      {/* --- HERO SECTION --- */}
      <header className="container-boxed pt-4 pb-2 px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-50 pb-4">
          <div className="relative group">
             <h1 className="text-4xl md:text-5xl font-black text-icce-blue uppercase leading-none tracking-tighter">
                Important <br/>
                <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px #191961' }}>Dates</span>
             </h1>
          </div>
          <div className="max-w-3xl md:text-right">
             <p className="text-[10px] font-black uppercase tracking-[0.3em] text-ieee-blue opacity-50 mb-2">Conference Roadmap</p>
             <p className="text-sm font-bold text-slate-500 leading-tight">Keep track of the key milestones for ICCE 2026. All deadlines are firm and follow the Anywhere on Earth (AoE) time zone.</p>
          </div>
        </div>
      </header>

      <main className="container-boxed pt-0 pb-20 px-6">
        
        {/* --- COUNTDOWN SECTION --- */}
        <section className="mb-8">
           <div className="bg-[#191961] rounded-[1.5rem] p-4 md:p-6 relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-ieee-blue/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>
              
              <div className="relative z-10 flex flex-col items-center text-center space-y-4">
                 <div className="space-y-1">
                    <div className="flex items-center justify-center gap-2 mb-0.5">
                       <Timer className="text-yellow-400 animate-pulse" size={16} />
                       <span className="text-[9px] font-black uppercase tracking-[0.4em] text-yellow-400">Countdown to Deadline</span>
                    </div>
                    <h2 className="text-lg md:text-2xl font-black text-white uppercase tracking-tighter leading-none">
                       Paper Submission Closes In
                    </h2>
                    <p className="text-blue-300 text-[10px] font-bold">Deadline: July 15, 2026 (23:59 AoE)</p>
                 </div>

                 <CountdownTimer targetDate="July 15, 2026 23:59:59" />

                 <div className="pt-1">
                    <Link 
                      to="/submission" 
                      className="px-6 py-2.5 bg-yellow-400 text-icce-blue rounded-lg font-black uppercase tracking-widest text-[9px] hover:bg-white hover:scale-105 transition-all shadow-xl flex items-center gap-2 group"
                    >
                      Submit Your Paper <ArrowRightCircle size={12} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                 </div>
              </div>
           </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-16">
           
           {/* LEFT: Roadmap Timeline */}
           <div className="flex-grow lg:max-w-[65%]">
              <div className="flex items-center gap-4 mb-12">
                 <h2 className="text-xl font-black text-icce-blue uppercase tracking-tight leading-none">The Roadmap</h2>
                 <div className="h-px flex-1 bg-slate-100"></div>
              </div>

              <div className="space-y-12 relative">
                 {/* Timeline vertical line */}
                 <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-100 hidden md:block"></div>

                 {dates.map((item, idx) => (
                   <motion.div 
                     key={idx}
                     initial={{ opacity: 0, x: -20 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: idx * 0.1 }}
                     className="relative flex flex-col md:flex-row items-start gap-8 group"
                   >
                      {/* Date Icon Circle */}
                      <div className={`w-12 h-12 rounded-2xl shadow-lg flex items-center justify-center shrink-0 z-10 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3 ${idx === 0 ? 'bg-yellow-400 text-icce-blue' : 'bg-white border border-slate-100 text-ieee-blue group-hover:bg-ieee-blue group-hover:text-white'}`}>
                         <item.icon size={20} />
                      </div>

                      <div className="flex-grow space-y-3 bg-slate-50/50 p-6 rounded-[2rem] border border-slate-100 group-hover:bg-white group-hover:shadow-xl transition-all duration-500">
                         <div className="flex flex-col md:flex-row md:items-center justify-between gap-2">
                            <h3 className="text-lg font-black text-icce-blue uppercase tracking-tight">{item.label}</h3>
                            <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${item.status === 'upcoming' ? 'bg-yellow-100 text-yellow-700' : 'bg-slate-100 text-slate-400'}`}>
                               {item.status}
                            </span>
                         </div>
                         <div className="flex items-center gap-2 text-ieee-blue">
                            <Clock size={14} className="opacity-50" />
                            <span className="text-sm font-black italic">{item.date}</span>
                         </div>
                         <p className="text-[11px] font-bold text-slate-500 leading-relaxed max-w-xl">
                            {item.desc}
                         </p>
                      </div>
                   </motion.div>
                 ))}
              </div>
           </div>

           {/* RIGHT: Sidebar Info */}
           <div className="lg:w-[35%] space-y-10">
              
              <section className="bg-slate-50 p-8 rounded-[3rem] border border-slate-100 shadow-sm space-y-6">
                 <div className="flex items-center gap-3">
                    <Info size={20} className="text-ieee-blue" />
                    <h3 className="text-sm font-black uppercase tracking-tight text-icce-blue">Important Note</h3>
                 </div>
                 <div className="space-y-4">
                    <div className="p-5 bg-white rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden group">
                       <div className="absolute top-0 left-0 w-1 h-full bg-ieee-blue"></div>
                       <p className="text-[11px] font-bold text-slate-600 leading-relaxed uppercase tracking-tight">
                          All deadlines are strict and are at 23:59 <span className="text-ieee-blue font-black">AoE (Anywhere on Earth)</span>.
                       </p>
                    </div>
                    <p className="text-[11px] font-medium text-slate-500 leading-relaxed text-justify italic">
                       Authors are encouraged to submit their work well in advance of the final deadline to avoid any last-minute technical issues with the submission system.
                    </p>
                 </div>
              </section>

              <section className="p-8 border-2 border-dashed border-slate-200 rounded-[3rem] space-y-6">
                 <div className="flex items-center gap-3">
                    <Zap size={20} className="text-yellow-500" />
                    <h3 className="text-sm font-black uppercase tracking-tight text-icce-blue">Submission Reminders</h3>
                 </div>
                 <div className="space-y-4">
                    {[
                      "Check IEEE formatting compliance",
                      "Ensure original, unpublished work",
                      "Embed all fonts in the final PDF",
                      "Maximum paper length: 6 pages",
                      "Email submissions are NOT accepted"
                    ].map((reminder, i) => (
                      <div key={i} className="flex items-center gap-3">
                         <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
                         <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{reminder}</span>
                      </div>
                    ))}
                 </div>
              </section>

           </div>
        </div>
      </main>
    </div>
  );
};

export default ImportantDates;