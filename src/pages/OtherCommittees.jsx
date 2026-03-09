import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, 
  GraduationCap, 
  Globe, 
  Briefcase,
  Star,
  ArrowRightCircle,
  Award,
  ShieldCheck,
  Zap,
  Layout,
  Target,
  ChevronRight
} from 'lucide-react';

const OtherCommittees = () => {
  const [activeTab, setActiveTab] = useState(0);

  const committees = [
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

  const statistics = [
    { label: "Specialized Panels", count: "11", icon: Award },
    { label: "Total Members", count: "82", icon: Users },
    { label: "Sub-Committees", count: "11", icon: ShieldCheck },
    { label: "Unique Roles", count: "2", icon: Target },
    { label: "Academic Support", count: "100%", icon: GraduationCap },
    { label: "Industry Sync", count: "Active", icon: Briefcase },
    { label: "Operational Units", count: "11", icon: Layout }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden font-sans">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ieee-blue/[0.01] rounded-full blur-3xl pointer-events-none"></div>
      
      <header className="container-boxed pt-8 pb-6 px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-50 pb-8">
          <div className="relative group">
             <h1 className="text-4xl md:text-5xl font-black text-icce-blue uppercase leading-none tracking-tighter">
                Other <br/>
                <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px #191961' }}>Committees</span>
             </h1>
          </div>
          <div className="max-w-3xl md:text-right">
             <p className="text-[10px] font-black uppercase tracking-[0.3em] text-ieee-blue opacity-50 mb-2">Specialized Task Forces</p>
             <p className="text-sm font-bold text-slate-500 leading-tight">Various specialized committees working in synchronization to handle the diverse operational aspects of the conference, ensuring every detail is addressed with professional precision.</p>
          </div>
        </div>
      </header>

      <main className="container-boxed pt-4 pb-12 px-6">
        <div className="flex flex-col lg:flex-row gap-10">
           
           {/* LEFT: Tab Navigation & Content */}
           <div className="flex-grow lg:max-w-[70%]">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Tabs Sidebar */}
                <div className="md:col-span-4 space-y-2">
                  {committees.map((comm, idx) => (
                    <button
                      key={comm.id}
                      onClick={() => setActiveTab(idx)}
                      className={`w-full text-left px-4 py-3 rounded-xl text-[11px] font-black uppercase tracking-wider transition-all flex items-center justify-between group ${activeTab === idx ? 'bg-icce-blue text-white shadow-lg' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}`}
                    >
                      <span>{comm.title}</span>
                      <ChevronRight size={14} className={`transition-transform ${activeTab === idx ? 'rotate-90' : 'group-hover:translate-x-1'}`} />
                    </button>
                  ))}
                </div>

                {/* Tab Content */}
                <div className="md:col-span-8 bg-slate-50/50 rounded-[32px] p-8 border border-slate-100 min-h-[400px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeTab}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-8"
                    >
                      <div>
                        <h2 className="text-2xl font-black text-icce-blue uppercase tracking-tight mb-1">{committees[activeTab].title}</h2>
                        <div className="h-1 w-12 bg-yellow-400"></div>
                      </div>

                      <div className="space-y-6">
                        <div className="flex flex-col gap-1">
                          <span className="text-[10px] font-black uppercase tracking-widest text-ieee-blue opacity-50">Chairperson</span>
                          <div className="text-lg font-black text-icce-blue uppercase tracking-tight">{committees[activeTab].chair}</div>
                        </div>

                        <div className="space-y-3">
                          <span className="text-[10px] font-black uppercase tracking-widest text-ieee-blue opacity-50">Committee Members</span>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {committees[activeTab].members.map((member, i) => (
                              <div key={i} className="flex items-center gap-2 p-3 bg-white rounded-xl border border-slate-100 group hover:border-yellow-400/50 transition-colors">
                                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0"></div>
                                <span className="text-[11px] font-bold text-slate-600 uppercase tracking-tight">{member}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
           </div>

           {/* RIGHT: Sidebar */}
           <div className="lg:w-[30%] space-y-6">
              <section className="bg-[#191961] p-6 rounded-[32px] text-white shadow-xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-bl-full"></div>
                 <div className="flex items-center gap-3 mb-5 relative z-10">
                    <Layout size={20} className="text-yellow-400" />
                    <h3 className="text-lg font-black uppercase tracking-tight">Organization</h3>
                 </div>
                 <div className="space-y-3 relative z-10">
                    {statistics.map((stat, idx) => (
                      <div key={idx} className="flex flex-col gap-0 border-b border-white/5 pb-2 last:border-0">
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
                    <h3 className="text-xl font-black text-icce-blue uppercase tracking-tight">Strategic Roles</h3>
                 </div>
                 <div className="space-y-4">
                    <p className="text-xs font-bold text-slate-600 leading-relaxed">
                      These committees form the backbone of the conference, handling everything from financial stability to global outreach and student engagement.
                    </p>
                    <div className="space-y-3 pt-2">
                       {[
                         "Financial management",
                         "Industry collaborations",
                         "Public relations & outreach",
                         "Hospitality & logistics",
                         "Web & digital presence"
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

export { OtherCommittees };
