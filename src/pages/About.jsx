import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe, 
  Award, 
  Users, 
  Target,
  CheckCircle2,
  Star,
  ArrowRightCircle,
  BookOpen,
  Zap,
  ShieldCheck
} from 'lucide-react';

const About = () => {
  const highlights = [
    {
      id: "1",
      icon: BookOpen,
      title: "Technical Excellence",
      description: "Featuring peer-reviewed technical sessions, keynote lectures, and invited talks by global experts in engineering and technology."
    },
    {
      id: "2",
      icon: Zap,
      title: "Convergence & Innovation",
      description: "A unique platform focused on the convergence of diverse engineering domains to foster interdisciplinary research and breakthrough innovations."
    },
    {
      id: "3",
      icon: ShieldCheck,
      title: "IEEE Standards",
      description: "Maintaining high-quality research standards aligned with IEEE, with papers submitted to IEEE Xplore Digital Library for probable inclusion."
    }
  ];

  const objectives = [
    "Provide a global platform for interdisciplinary research in emerging engineering domains.",
    "Promote high-quality, peer-reviewed research aligned with IEEE standards.",
    "Foster academia–industry collaboration and innovation.",
    "Encourage sustainable and socially responsible technological development.",
    "Support students and early-career researchers through knowledge exchange and networking opportunities."
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden font-sans">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ieee-blue/[0.01] rounded-full blur-3xl pointer-events-none"></div>
      
      {/* --- HERO SECTION --- */}
      <header className="container-boxed pt-8 pb-6 px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-50 pb-8">
          <div className="relative group">
             <h1 className="text-4xl md:text-5xl font-black text-icce-blue uppercase leading-none tracking-tighter">
                About <br/>
                <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px #191961' }}>ICCE 2026</span>
             </h1>
          </div>
          <div className="max-w-3xl md:text-right">
             <p className="text-[10px] font-black uppercase tracking-[0.3em] text-ieee-blue opacity-50 mb-2">Technical Excellence</p>
             <p className="text-sm font-bold text-slate-500 leading-tight">ICCE 2026 serves as a premier international venue for showcasing pioneering research at the intersection of various engineering disciplines. Our mission is to bridge the gap between theoretical research and practical industry applications through collaborative knowledge exchange.</p>
          </div>
        </div>
      </header>

      <main className="container-boxed pt-4 pb-12 px-6">
        
        {/* --- MAIN CONTENT --- */}
        <div className="flex flex-col lg:flex-row gap-10">
           
           {/* LEFT: About Text */}
           <div className="flex-grow lg:max-w-[60%]">
              <section className="mb-12">
                 <div className="flex items-center gap-4 mb-6">
                    <h2 className="text-lg font-black text-icce-blue uppercase tracking-tight">Conference Overview</h2>
                    <div className="h-px flex-1 bg-slate-100"></div>
                 </div>
                 <div className="prose prose-slate max-w-none">
                    <p className="text-sm font-bold text-slate-600 leading-relaxed mb-4 text-justify">
                      Netaji Subhash Engineering College (NSEC), in collaboration with the IEEE AP-MTT Kolkata Chapters and with Technical Co-Sponsorship from the IEEE Kolkata Section, will organize the 2nd International Conference on Convergence in Engineering (ICCE 2026).
                    </p>
                    <p className="text-sm font-bold text-slate-600 leading-relaxed mb-4 text-justify">
                      The conference aims to bring together academicians, researchers, scientists, and industry professionals to present and discuss recent advancements and emerging trends in engineering and technology. The program will include keynote lectures, invited talks, tutorials, and peer-reviewed technical sessions comprising oral and poster presentations.
                    </p>
                    <p className="text-sm font-bold text-slate-600 leading-relaxed text-justify">
                      All accepted and presented papers will be submitted to the IEEE Xplore Digital Library for probable inclusion, subject to IEEE quality review and compliance with publication policies.
                    </p>
                 </div>
              </section>

              <section>
                 <div className="flex items-center gap-4 mb-6">
                    <h2 className="text-lg font-black text-icce-blue uppercase tracking-tight">Conference Objectives</h2>
                    <div className="h-px flex-1 bg-slate-100"></div>
                 </div>
                 <div className="grid grid-cols-1 gap-1.5">
                    {objectives.map((obj, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-4 py-1.5 px-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-ieee-blue/20 transition-all group"
                      >
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0 group-hover:bg-ieee-blue transition-colors">
                           <CheckCircle2 size={16} className="text-ieee-blue group-hover:text-white transition-colors" />
                        </div>
                        <p className="text-xs font-bold text-slate-600 leading-relaxed pt-1">{obj}</p>
                      </motion.div>
                    ))}
                 </div>
              </section>
           </div>

           {/* RIGHT: Highlights & Sidebar */}
           <div className="lg:w-[40%] space-y-6">
              <section className="bg-[#191961] p-8 rounded-[40px] text-white shadow-xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-bl-full"></div>
                 <div className="flex items-center gap-3 mb-6 relative z-10">
                    <Target size={24} className="text-yellow-400" />
                    <h3 className="text-xl font-black uppercase tracking-tight">Key Highlights</h3>
                 </div>
                 <div className="space-y-6 relative z-10">
                    {highlights.map((item) => (
                      <div key={item.id} className="flex gap-4 group">
                         <div className="mt-1">
                            <item.icon size={20} className="text-yellow-400 group-hover:scale-110 transition-transform" />
                         </div>
                         <div className="space-y-1">
                            <h4 className="text-[11px] font-black uppercase tracking-widest text-white">{item.title}</h4>
                            <p className="text-[10px] font-bold text-slate-300 leading-relaxed">{item.description}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </section>

              <section className="p-8 border-2 border-slate-100 rounded-[40px] bg-slate-50/50 relative">
                 <div className="flex items-center gap-3 mb-6">
                    <Award size={24} className="text-ieee-blue" />
                    <h3 className="text-xl font-black text-icce-blue uppercase tracking-tight">Recognition</h3>
                 </div>
                 <div className="space-y-4">
                    <p className="text-xs font-bold text-slate-500 leading-relaxed">
                      Building on the success of the inaugural edition, ICCE 2026 continues its legacy of academic excellence and global recognition.
                    </p>
                    <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                          <Star size={20} className="text-ieee-blue" />
                       </div>
                       <div>
                          <p className="text-[10px] font-black uppercase tracking-widest text-icce-blue">IEEE Xplore</p>
                          <p className="text-[9px] font-bold text-slate-400">Probable inclusion in Digital Library</p>
                       </div>
                    </div>
                 </div>
              </section>
           </div>
        </div>
      </main>
    </div>
  );
};

export { About };
