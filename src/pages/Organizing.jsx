import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  Target,
  ChevronRight
} from 'lucide-react';

const Organizing = () => {
  const [activeTab, setActiveTab] = useState(-1);

  const committees = [
    {
      id: "publication",
      title: "Publication Committee",
      chair: "Anupam Ghosh",
      members: ["Moujhuri Patra", "Sourav Chandra", "Ratul Chowdhury", "Jit Karmakar", "Prasun Sanki", "Amrendra Kumar", "Namrata Choudhury"]
    },
    {
      id: "finance",
      title: "Finance Committee",
      chair: "Tridibesh Nag",
      members: ["Arnab Bandopadhyay", "Manideepa Pal", "Susanta Mukherjee", "Payel Das", "Sayantee Gangopadhyay", "D Bose"]
    },
    {
      id: "sponsorship",
      title: "Sponsorship & Industry Forum",
      chair: "Soumava Goswami",
      members: ["Tridibesh Nag", "Sayantee Gangopadhyay"]
    },
    {
      id: "program",
      title: "Program Committee",
      chair: "Chandan Banerjee",
      members: ["Nivedita Ray", "Supratim Ghosh", "Swatilekha Das", "Arnab Hazra", "Surajit Chakraborty"]
    },
    {
      id: "publicity",
      title: "Publicity Committee",
      chair: "Atanu Das",
      members: ["Swapna Roy", "Somashree Bhadra", "Soumi Ghosh", "Amrita De", "Paramita Bhattacharya", "Angshuman Sahu", "Ritayan Chatterjee", "Srijita Bhoumik"]
    },
    {
      id: "registration",
      title: "Registration Committee",
      chair: "Sabyasachi Bagchi",
      members: ["Dip Kumar Saha", "Priya Roy Karmakar", "Sourav Dutta", "Soma Chattopadhyay", "Deepashree Dhar", "Subrata Datta", "Anupam Maity", "Lipika Das", "Swati Chakraborty"]
    },
    {
      id: "hospitality",
      title: "Hospitality Committee",
      chair: "Indranil Ghosh",
      members: ["Soumava Goswami", "Tridibesh Nag", "Dhritiman Mandal", "Debarshi Dutta", "Sumana Chatterjee", "Sindura Gupta", "Abira Choudhury", "Sumanta Dey", "Sumit Dhar", "Sayan Mondal", "Reshmi Saha", "Amit Nandy"]
    },
    {
      id: "talks",
      title: "Invited Talks and Tutorials",
      chair: "Partha Ghosh",
      members: ["Sujan Krishna Samanta", "Bijoy Kantha", "Aparajita Datta Sinha"]
    },
    {
      id: "student",
      title: "Student Activity",
      chair: "Samir Kr. Ghosh",
      members: ["Arnab Dutta", "Narayan Chandra Biswas", "Sumitesh Majumder", "Sourav Mitra", "Natasha Ghosh", "Ashis Kar"]
    },
    {
      id: "wie",
      title: "WIE Activity",
      chair: "Riya Majumder",
      members: ["Priyadarshini Dhar", "Anindita Sarkar", "Silpi Sarkar"]
    },
    {
      id: "sight",
      title: "SIGHT Activity",
      chair: "Abhishek Saha",
      members: ["Niladri Shekhar Mishra", "Piyali Bagchi Khatua", "Sukanta Bose"]
    },
    {
      id: "web",
      title: "Web Committee",
      chair: "Partha Sarathi Pal",
      members: ["Kallol Bhattacharya", "Sandip Sadhukhan", "Sayantan Dass", "Biswajit Acharya", "Srijita Bhoumik"]
    }
  ];

  const committeeSections = [
    {
      title: "Patrons",
      members: [
        { name: "Satyam Roy Chowdhury", role: "Chief Patron", affiliation: "Chancellor, SNU & MD, TIG" },
        { name: "Dhrubajyoti Chattopadhyay", role: "Patron", affiliation: "Vice Chancellor, SNU" },
        { name: "Arindam Ray", role: "Patron", affiliation: "Sr Director, TIG & Member, BoG" },
      ]
    },
    {
      title: "Organizing Team",
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
        { name: "Anupam Ghosh", role: "Publication Chair" },
        { name: "Atanu Das", role: "Publicity Chair" },
        { name: "Sabyasachi Bagchi", role: "Registration Chair" },
        { name: "Indranil Ghosh", role: "Hospitality Chair" },
        { name: "Partha Ghosh", role: "Invited Talks and Tutorials Chair" },
        { name: "Samir Kr. Ghosh", role: "Student Activity Chair" },
        { name: "Riya Majumder", role: "WIE Activity Chair" },
        { name: "Abhishek Saha", role: "SIGHT Activity Chair" },
        { name: "Partha Sarathi Pal", role: "Web Chair" },
      ]
    }
  ];

  const statistics = [
    { label: "Patrons", count: "3", icon: Target },
    { label: "General Chairs", count: "2", icon: Award },
    { label: "Core Team", count: "16", icon: Layout },
    { label: "Strategic Units", count: "12", icon: ShieldCheck },
    { label: "Total Members", count: "101", icon: Users },
    { label: "Industry Sync", count: "Active", icon: Briefcase }
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

              <div className="mt-12">
                <div className="flex items-center gap-4 mb-8">
                  <h2 className="text-lg font-black text-icce-blue uppercase tracking-tight">Other Committees</h2>
                  <div className="h-px flex-1 bg-slate-100"></div>
                </div>
                
                <div className="space-y-4">
                  {committees.map((comm, idx) => (
                    <div key={comm.id} className="border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                      <button
                        onClick={() => setActiveTab(activeTab === idx ? -1 : idx)}
                        className={`w-full text-left px-6 py-5 flex items-center justify-between transition-all group relative border-l-4 ${activeTab === idx ? 'bg-icce-blue text-white border-yellow-400' : 'bg-white text-icce-blue hover:bg-slate-50 border-transparent hover:border-yellow-400/50'}`}
                      >
                        <span className="text-[13px] font-black uppercase tracking-widest">{comm.title}</span>
                        <ChevronRight size={18} className={`transition-transform duration-300 ${activeTab === idx ? 'rotate-90 text-yellow-400' : 'text-yellow-500'}`} />
                      </button>

                      <AnimatePresence>
                        {activeTab === idx && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-slate-50/50"
                          >
                            <div className="p-8 space-y-8 border-t border-slate-100">
                              <div className="space-y-6">
                                <div className="flex flex-col gap-1">
                                  <span className={`text-[10px] font-black uppercase tracking-widest ${activeTab === idx ? 'text-ieee-blue' : 'text-slate-600'}`}>Chairperson</span>
                                  <div className="text-xl font-black text-icce-blue uppercase tracking-tight">{comm.chair}</div>
                                </div>

                                <div className="space-y-3">
                                  <span className={`text-[10px] font-black uppercase tracking-widest ${activeTab === idx ? 'text-ieee-blue' : 'text-slate-600'}`}>Committee Members</span>
                                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                                    {comm.members.map((member, i) => (
                                      <div key={i} className="flex items-center gap-2 p-3 bg-white rounded-xl border border-slate-100 group/member hover:border-yellow-400/50 transition-colors shadow-sm">
                                        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0"></div>
                                        <span className="text-[11px] font-bold text-slate-600 uppercase tracking-tight">{member}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
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
