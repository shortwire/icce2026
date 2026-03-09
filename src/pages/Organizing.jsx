import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  GraduationCap, 
  Globe, 
  Briefcase,
  Star,
  CheckCircle2,
  ArrowRightCircle,
  Award,
  ShieldCheck,
  Zap,
  Layout,
  Target
} from 'lucide-react';

const Organizing = () => {
  const committeeSections = [
    {
      title: "Patrons",
      members: [
        { name: "Satyam Roy Chowdhury", role: "Chief Patron", affiliation: "Chancellor, SNU & MD, TIG" },
        { name: "Dhrubajyoti Chattopadhyay", role: "Patron", affiliation: "Vice Chancellor, SNU" },
        { name: "Arindam Ray", role: "Patron", affiliation: "Director, NSEC" },
      ]
    },
    {
      title: "Core Organizing Team",
      members: [
        { name: "Amal Kr. Ghosh", role: "General Chair" },
        { name: "Sukumar Roy", role: "General Co-Chair" },
        { name: "Piyali Chatterjee", role: "Organizing Chair" },
        { name: "Anuradha Saha", role: "Organizing Co-Chair" },
        { name: "Rajkumar Patra", role: "Conference Secretary" },
        { name: "Tridibesh Nag", role: "Finance Chair" },
        { name: "Soumava Goswami", role: "Sponsorship & Industry Forum Chair" },
        { name: "Koushik Dutta", role: "Technical Program Committee Chair" },
        { name: "Chandan Banerjee", role: "Program Chair" },
        { name: "Anupam Ghosh", role: "Publication Committee Chair" },
        { name: "Atanu Das", role: "Publicity Chair" },
        { name: "Sabyasachi Bagchi", role: "Registration Chair" },
        { name: "Indranil Ghosh", role: "Hospitality Chair" },
        { name: "Partha Ghosh", role: "Invited Talks and Tutorials Chair" },
        { name: "Samir Kr. Ghosh", role: "Student Activity Chair" },
        { name: "Riya Majumder", role: "WIE Activity Chair" },
        { name: "Abhishek Saha", role: "SIGHT Activity Chair" },
        { name: "Partha Sarathi Pal", role: "Web Committee Chair" },
      ]
    }
  ];

  const statistics = [
    { label: "Patrons", count: "3", icon: Target },
    { label: "General Chairs", count: "2", icon: Award },
    { label: "Core Chairs", count: "16", icon: Layout },
    { label: "Total Leadership", count: "21", icon: Users },
    { label: "Strategic Units", count: "12", icon: ShieldCheck },
    { label: "Industry Liaison", count: "Active", icon: Briefcase },
    { label: "Execution Standard", count: "100%", icon: Zap }
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
                Organizing <br/>
                <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px #191961' }}>Committee</span>
             </h1>
          </div>
          <div className="max-w-3xl md:text-right">
             <p className="text-[10px] font-black uppercase tracking-[0.3em] text-ieee-blue opacity-50 mb-2">Conference Execution</p>
             <p className="text-sm font-bold text-slate-500 leading-tight">The Organizing Committee is dedicated to the seamless execution of ICCE 2026. Comprised of professionals and academics from various fields, they work tirelessly to ensure that every aspect of the conference—from technical tracks to hospitality—is managed with excellence.</p>
          </div>
        </div>
      </header>

      <main className="container-boxed pt-4 pb-12 px-6">
        
        {/* --- MAIN CONTENT --- */}
        <div className="flex flex-col lg:flex-row gap-10">
           
           {/* LEFT: Members Grid */}
           <div className="flex-grow lg:max-w-[70%]">
              {committeeSections.map((section, sectionIdx) => (
                <div key={sectionIdx} className="mb-12 last:mb-0">
                  <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-lg font-black text-icce-blue uppercase tracking-tight">{section.title}</h2>
                    <div className="h-px flex-1 bg-slate-100"></div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                    {section.members.map((member, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="group transition-all"
                      >
                        <div className="flex items-start gap-3 relative">
                           <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 mt-2 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity relative z-10"></div>
                           <div className="space-y-1 relative">
                              <div className="relative inline-block">
                                 <h3 className="text-[13px] font-black text-icce-blue uppercase tracking-tight leading-tight group-hover:text-ieee-blue transition-colors relative z-10">
                                    {member.name}
                                 </h3>
                                 <div className="absolute top-1/2 -left-1 -right-1 h-[2px] bg-yellow-400/30 -rotate-2 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                              </div>
                              <div className="flex flex-col gap-0.5">
                                 <p className="text-[10px] font-black text-ieee-blue opacity-50 uppercase tracking-widest leading-none">
                                    {member.role}
                                 </p>
                                 {member.affiliation && (
                                   <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight leading-tight">
                                      {member.affiliation}
                                   </p>
                                 )}
                              </div>
                           </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
           </div>

           {/* RIGHT: Sidebar */}
           <div className="lg:w-[30%] space-y-6">
              <section className="bg-[#191961] p-6 rounded-[32px] text-white shadow-xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-bl-full"></div>
                 <div className="flex items-center gap-3 mb-5 relative z-10">
                    <ShieldCheck size={20} className="text-yellow-400" />
                    <h3 className="text-lg font-black uppercase tracking-tight">Core Logistics</h3>
                 </div>
                 <div className="space-y-4 relative z-10">
                    {statistics.map((stat, idx) => (
                      <div key={idx} className="flex flex-col gap-0.5 border-b border-white/5 pb-2 last:border-0">
                         <div className="flex items-center gap-2">
                            <stat.icon size={12} className="text-yellow-400" />
                            <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">{stat.label}</span>
                         </div>
                         <div className="text-2xl font-black text-white">{stat.count}</div>
                      </div>
                    ))}
                 </div>
              </section>

              <section className="p-8 border-2 border-slate-100 rounded-[40px] bg-slate-50/50">
                 <div className="flex items-center gap-3 mb-6">
                    <Star size={24} className="text-ieee-blue" />
                    <h3 className="text-xl font-black text-icce-blue uppercase tracking-tight">Responsibilities</h3>
                 </div>
                 <div className="space-y-4">
                    <p className="text-xs font-bold text-slate-600 leading-relaxed">
                      The committee members coordinate various aspects of the conference to provide a world-class experience for all participants.
                    </p>
                    <div className="space-y-3 pt-2">
                       {[
                         "Event logistical planning",
                         "Sponsorship management",
                         "Track & session organization",
                         "Publication coordination",
                         "Registration & hospitality"
                       ].map((item, i) => (
                         <div key={i} className="flex items-center gap-2">
                            <ArrowRightCircle size={10} className="text-ieee-blue" />
                            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tight">{item}</span>
                         </div>
                       ))}
                    </div>
                 </div>
              </section>
           </div>
        </div>
      </main>
    </div>
  );
};

export { Organizing };
