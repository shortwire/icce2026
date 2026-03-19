import React from 'react';
import { motion } from 'framer-motion';
import { 
  Info,
  ShieldCheck,
  CreditCard,
  UserCheck,
  CheckCircle2,
  AlertCircle,
  ArrowRightCircle
} from 'lucide-react';

const ImportantInformation = () => {
  const authorPolicies = [
    "At least one author of each accepted paper must register for the conference at the full registration rate by the specified deadline for the paper to be included in the conference program.",
    "Each full registration covers the publication and presentation of one accepted paper. Additional accepted papers by the same author require a separate registration or additional paper registration fee.",
    "Only registered and presented papers will be submitted to the IEEE Xplore Digital Library, subject to IEEE quality review and compliance with IEEE publication policies.",
    "Authors must submit the final camera-ready manuscript in the prescribed IEEE format within the specified deadline.",
    "No-show papers (papers not presented during the conference) will not be submitted to IEEE Xplore.",
    "All authors must comply with IEEE policies on plagiarism, publication ethics, and copyright."
  ];

  const extraCharges = [
    "The maximum paper length is 6 pages in the IEEE conference format.",
    "Authors may include up to 2 additional pages beyond the standard limit, subject to payment of extra page charges per additional page as determined by the conference organizers."
  ];

  const studentPolicy = [
    "Student authors are eligible for a discounted registration fee upon submission of a valid student ID or proof of enrollment.",
    "Student registration is applicable only for full-time undergraduate, postgraduate, or doctoral students.",
    "At least one author of the accepted paper must complete a full registration (non-student category) for the paper to be included in the conference proceedings and considered for submission to IEEE Xplore."
  ];

  const attendeePolicy = [
    "All participants attending the conference, including authors, co-authors, speakers, students, and industry delegates, must complete the conference registration through the official registration portal.",
    "Registered attendees will be entitled to access technical sessions, keynote lectures, invited talks, tutorials, and conference materials, as per the conference schedule.",
    "Participants are expected to adhere to the conference code of conduct and maintain professional and respectful interaction throughout the event.",
    "All attendees must comply with IEEE policies on ethics, plagiarism, and professional conduct.",
    "The conference organizers reserve the right to modify the program schedule or session arrangements if necessary.",
    "Registration fees once paid are generally non-refundable, except under special circumstances as determined by the organizing committee."
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
                Important <br/>
                <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px #191961' }}>Information</span>
             </h1>
          </div>
          <div className="max-w-3xl md:text-right">
             <p className="text-[10px] font-black uppercase tracking-[0.3em] text-ieee-blue opacity-50 mb-2">Registration Page</p>
             <p className="text-sm font-bold text-slate-500 leading-tight">Essential guidelines for authors, students, and attendees of ICCE 2026. Please review the registration policies and ethical compliance requirements carefully.</p>
          </div>
        </div>
      </header>

      <main className="container-boxed pt-4 pb-12 px-6">
        
        <div className="flex flex-col lg:flex-row gap-10">
           
           {/* LEFT: Policies */}
           <div className="flex-grow lg:max-w-[65%] space-y-10">
              
              {/* Authors Policy */}
              <section>
                 <div className="flex items-center gap-4 mb-6">
                    <div className="p-2 bg-blue-50 rounded-xl">
                        <ShieldCheck size={20} className="text-ieee-blue" />
                    </div>
                    <h2 className="text-lg font-black text-icce-blue uppercase tracking-tight">Registration policy for Authors</h2>
                    <div className="h-px flex-1 bg-slate-100"></div>
                 </div>
                 <div className="bg-slate-50/50 p-6 rounded-3xl border border-slate-50 shadow-sm space-y-4">
                    {authorPolicies.map((policy, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-start gap-3"
                      >
                         <ArrowRightCircle size={14} className="text-ieee-blue shrink-0 mt-0.5" />
                         <p className="text-[11px] font-bold text-slate-600 leading-relaxed">{policy}</p>
                      </motion.div>
                    ))}
                 </div>
              </section>

              {/* Extra Page Charges */}
              <section>
                 <div className="flex items-center gap-4 mb-6">
                    <div className="p-2 bg-yellow-50 rounded-xl">
                        <CreditCard size={20} className="text-yellow-700" />
                    </div>
                    <h2 className="text-lg font-black text-icce-blue uppercase tracking-tight">Extra Page Charges</h2>
                    <div className="h-px flex-1 bg-slate-100"></div>
                 </div>
                 <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm space-y-4">
                    {extraCharges.map((charge, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                         <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 shrink-0 mt-1.5"></div>
                         <p className="text-[11px] font-bold text-slate-600 leading-relaxed">{charge}</p>
                      </div>
                    ))}
                 </div>
              </section>

              {/* Attendee Policy */}
              <section>
                 <div className="flex items-center gap-4 mb-6">
                    <div className="p-2 bg-emerald-50 rounded-xl">
                        <UserCheck size={20} className="text-emerald-700" />
                    </div>
                    <h2 className="text-lg font-black text-icce-blue uppercase tracking-tight">Policy for All Conference Attendees</h2>
                    <div className="h-px flex-1 bg-slate-100"></div>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {attendeePolicy.map((policy, idx) => (
                      <motion.div 
                        key={idx}
                        className="bg-slate-50 p-5 rounded-2xl border border-slate-100 flex items-start gap-3"
                      >
                         <CheckCircle2 size={12} className="text-emerald-600 shrink-0 mt-0.5" />
                         <p className="text-[10px] font-bold text-slate-600 leading-snug">{policy}</p>
                      </motion.div>
                    ))}
                 </div>
              </section>
           </div>

           {/* RIGHT: Sidebar */}
           <div className="lg:w-[35%] space-y-6">
              
              {/* Student Policy */}
              <section className="bg-[#191961] p-8 rounded-[40px] text-white shadow-2xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-bl-full"></div>
                 <div className="flex items-center gap-3 mb-6 relative z-10">
                    <div className="p-2 bg-white/10 rounded-xl">
                        <AlertCircle size={20} className="text-yellow-400" />
                    </div>
                    <h3 className="text-base font-black uppercase tracking-tight">Student Discount Policy</h3>
                 </div>
                 <div className="space-y-5 relative z-10">
                    {studentPolicy.map((policy, idx) => (
                      <div key={idx} className="flex items-start gap-3 border-b border-white/5 pb-4 last:border-0 last:pb-0">
                         <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0 mt-1.5"></div>
                         <p className="text-[11px] font-bold text-slate-200 leading-relaxed">{policy}</p>
                      </div>
                    ))}
                    <div className="bg-yellow-400/10 border-l-4 border-yellow-400 p-4 rounded-xl mt-4">
                       <p className="text-[10px] font-black text-yellow-400 italic leading-snug">
                          Valid student ID or proof of enrollment is mandatory for discounted rates.
                       </p>
                    </div>
                 </div>
              </section>

              {/* Quick Summary Card */}
              <section className="bg-slate-50 p-8 rounded-[40px] border border-slate-100">
                 <h3 className="text-xs font-black text-icce-blue uppercase tracking-widest mb-6 flex items-center gap-2">
                    <Info size={14} /> Quick Summary
                 </h3>
                 <div className="space-y-4">
                    <div className="flex justify-between items-center py-2 border-b border-slate-200">
                       <span className="text-[10px] font-bold text-slate-500">Max Pages</span>
                       <span className="text-[10px] font-black text-icce-blue">6 + 2 (extra)</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-slate-200">
                       <span className="text-[10px] font-bold text-slate-500">IEEE Xplore</span>
                       <span className="text-[10px] font-black text-emerald-600">Included*</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                       <span className="text-[10px] font-bold text-slate-500">Refunds</span>
                       <span className="text-[10px] font-black text-red-600">Non-refundable</span>
                    </div>
                 </div>
              </section>
           </div>
        </div>
      </main>
    </div>
  );
};

export { ImportantInformation };
