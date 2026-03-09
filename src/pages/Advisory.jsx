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
  Target
} from 'lucide-react';

const Advisory = () => {
  const members = [
    { name: "DR. ANCHIT BIJALWAN", role: "LEAD COMPUTING & DATA SCIENCE", affiliation: "British University Vietnam" },
    { name: "DR. SUBHADIP BASU", role: "DEPT. OF CSE", affiliation: "Jadavpur University" },
    { name: "DR. ARINDAM SARKAR", role: "DEPT. OF CSE & ELECTRONICS", affiliation: "RKM Vidyamandira" },
    { name: "PROF. (DR.) DEBASHIS DE", role: "DEPT. OF CSE", affiliation: "MAKAUT, West Bengal" },
    { name: "PROF. (DR.) ARIJIT SUR", role: "DEPT. OF CSE", affiliation: "IIT Guwahati" },
    { name: "PROF. (DR.) KUNTAL GHOSH", role: "MACHINE INTELLIGENCE UNIT", affiliation: "ISI, Kolkata" },
    { name: "DR. HIMADRI SEKHAR PAUL", role: "SCIENTIST", affiliation: "TCS Research" },
    { name: "PROF. ANIRBAN MUKHERJEE", role: "PROFESSOR", affiliation: "IIT Kharagpur" },
    { name: "PROF. RAJARSHI MAHAPATRA", role: "PROFESSOR", affiliation: "IIIT-Naya Raipur" },
    { name: "PROF. SOURAV PATRA", role: "PROFESSOR", affiliation: "IIT Kharagpur" },
    { name: "PROF. JAHAR SARKAR", role: "PROFESSOR", affiliation: "IIT(BHU), Varanasi" },
    { name: "PROF. PRIYARANJAN PAL", role: "PROFESSOR", affiliation: "MNNIT Allahabad" },
    { name: "PROF. ASHUTOSH SARKAR", role: "PROFESSOR", affiliation: "IIM (Kozhikode)" },
    { name: "PROF. AMIT KONAR", role: "DEPT OF ETCE", affiliation: "Jadavpur University" },
    { name: "PROF. SANKHAYAN CHOWDHURY", role: "DEPT OF CSE", affiliation: "University of Calcutta" },
    { name: "PROF. HAFIZUR RAHAMAN", role: "DEPT OF IT", affiliation: "IIEST, Shibpur" },
    { name: "PROF. RANJAN KUMAR MALLIK", role: "DEPT. OF EE", affiliation: "IIT Delhi" },
    { name: "MR. SUBHOMOY CHAKRABORTY", role: "VICE PRESIDENT", affiliation: "ABP Group" },
    { name: "PROF. AMIT ROY CHOWDHURY", role: "DEPT OF AEROSPACE ENGG", affiliation: "IIEST, Shibpur" },
    { name: "DR. PIYALI BASAK", role: "SCHOOL OF BIOSCIENCE", affiliation: "Jadavpur University" },
  ];

  const statistics = [
    { label: "Total Members", count: "20", icon: Users },
    { label: "Academicians", count: "18", icon: GraduationCap },
    { label: "Industry Leaders", count: "2", icon: Briefcase },
    { label: "International", count: "1", icon: Globe },
    { label: "Institutions", count: "14", icon: Target },
    { label: "Research Domains", count: "8+", icon: ShieldCheck },
    { label: "Senior Scholars", count: "15+", icon: Award }
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
                Advisory <br/>
                <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px #191961' }}>Committee</span>
             </h1>
          </div>
          <div className="max-w-3xl md:text-right">
             <p className="text-[10px] font-black uppercase tracking-[0.3em] text-ieee-blue opacity-50 mb-2">Technical Guidance</p>
             <p className="text-sm font-bold text-slate-500 leading-tight">Our Advisory Committee comprises esteemed scholars and visionary industry leaders who provide strategic direction and technical oversight to ensure the highest academic standards. Their collective expertise guides the conference towards meaningful convergence and global impact.</p>
          </div>
        </div>
      </header>

      <main className="container-boxed pt-4 pb-12 px-6">
        
        {/* --- MAIN CONTENT --- */}
        <div className="flex flex-col lg:flex-row gap-10">
           
           {/* LEFT: Members Grid */}
           <div className="flex-grow lg:max-w-[70%]">
              <div className="flex items-center gap-4 mb-8">
                 <h2 className="text-lg font-black text-icce-blue uppercase tracking-tight">Committee Members</h2>
                 <div className="h-px flex-1 bg-slate-100"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                 {members.map((member, idx) => (
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
                              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight leading-tight">
                                 {member.affiliation}
                              </p>
                           </div>
                        </div>
                     </div>
                   </motion.div>
                 ))}
              </div>
           </div>

           {/* RIGHT: Sidebar */}
           <div className="lg:w-[30%] space-y-6">
              <section className="bg-[#191961] p-6 rounded-[32px] text-white shadow-xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-bl-full"></div>
                 <div className="flex items-center gap-3 mb-5 relative z-10">
                    <Award size={20} className="text-yellow-400" />
                    <h3 className="text-lg font-black uppercase tracking-tight">Expertise Hub</h3>
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
                    <h3 className="text-xl font-black text-icce-blue uppercase tracking-tight">Role & Purpose</h3>
                 </div>
                 <div className="space-y-4">
                    <p className="text-xs font-bold text-slate-600 leading-relaxed">
                      The Advisory Committee provides vital insights into emerging trends and ensures the conference program addresses the most critical challenges in engineering today.
                    </p>
                    <div className="space-y-3 pt-2">
                       {[
                         "Strategic program direction",
                         "Technical quality oversight",
                         "Global outreach & networking",
                         "Innovation & excellence guidance"
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

export { Advisory };
