import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Info, 
  AlertCircle, 
  CreditCard, 
  FileText, 
  Users, 
  Zap,
  ChevronRight,
  ShieldAlert,
  GraduationCap,
  FileStack,
  UserCheck
} from 'lucide-react';

const Registration = () => {
  const indianFees = [
    { category: "Academician / Research Scholar", ebNon: "7500", ebIEEE: "6500", regNon: "8500", regIEEE: "7500" },
    { category: "Student", ebNon: "5500", ebIEEE: "4500", regNon: "6500", regIEEE: "5500" },
    { category: "Industry Professional", ebNon: "9000", ebIEEE: "8000", regNon: "10000", regIEEE: "9000" },
    { category: "Attendee", ebNon: "—", ebIEEE: "—", regNon: "3500", regIEEE: "2500" },
  ];

  const foreignFees = [
    { category: "Academician / Research Scholar", ebNon: "$140", ebIEEE: "$110", regNon: "$150", regIEEE: "$120" },
    { category: "Student", ebNon: "$90", ebIEEE: "$70", regNon: "$100", regIEEE: "$80" },
    { category: "Industry Professional", ebNon: "$190", ebIEEE: "$170", regNon: "$200", regIEEE: "$180" },
    { category: "Attendee", ebNon: "—", ebIEEE: "—", regNon: "$70", regIEEE: "$50" },
  ];

  const policies = [
    {
      title: "Author Registration Policy",
      icon: UserCheck,
      items: [
        "At least one author of each accepted paper must register for the conference.",
        "Each full registration is valid for one accepted paper only.",
        "Each additional accepted paper by the same author requires a separate registration (as per applicable fee).",
        "Only registered and presented papers will be submitted to the IEEE Xplore Digital Library, subject to IEEE quality review and compliance with publication policies."
      ]
    },
    {
      title: "Student Paper Policy",
      icon: GraduationCap,
      items: [
        "To qualify for student registration, the paper must be primarily authored and presented by a student.",
        "Students must provide a valid institutional ID card or certification from their institution during registration."
      ]
    },
    {
      title: "Student Discount Policy",
      icon: Zap,
      items: [
        "Student authors (First Author) and student attendees are eligible for discounted registration fees.",
        "A valid student ID or institutional proof must be submitted at the time of registration."
      ]
    },
    {
      title: "Extra Page Charges",
      icon: FileStack,
      items: [
        "The maximum length of the paper is 6 pages in IEEE conference format.",
        "Authors may include up to 2 additional pages, subject to extra page charges:",
        "₹500 per page (for Indian delegates)",
        "$5 per page (for foreign delegates)"
      ]
    },
    {
      title: "Cancellation and Refund Policy",
      icon: ShieldAlert,
      items: [
        "All registration fees are non-refundable under any circumstances."
      ]
    },
    {
      title: "No-Show Policy",
      icon: AlertCircle,
      items: [
        "Each accepted paper must be presented by at least one registered author at the conference.",
        "If a paper is not presented (No-Show), it will be excluded from submission to the IEEE Xplore Digital Library.",
        "No-show papers will not be eligible for conference certificates or awards.",
        "In case of unforeseen circumstances, authors may request permission for online/remote presentation (subject to approval by the Organizing Committee)."
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden font-sans">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-ieee-blue/[0.02] rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-yellow-400/[0.02] rounded-full blur-3xl pointer-events-none"></div>

      {/* --- HERO SECTION --- */}
      <header className="container-boxed pt-8 pb-4 px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-50 pb-6">
          <div className="relative group">
            <h1 className="text-4xl md:text-5xl font-black text-icce-blue uppercase leading-none tracking-tighter">
              Conference <br/>
              <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px #191961' }}>Registration</span>
            </h1>
          </div>
          <div className="max-w-3xl md:text-right">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-ieee-blue opacity-50 mb-2">Registration Portal</p>
            <p className="text-sm font-bold text-slate-500 leading-tight">
              Join us for ICCE 2026. Review the registration tiers and policies below. 
              Early bird offers are available until September 15, 2026.
            </p>
          </div>
        </div>
      </header>

      {/* --- TOP CTA STRIP --- */}
      <div className="w-full bg-[#191961] py-4 relative overflow-hidden group">
         <div className="absolute inset-0 bg-yellow-400/5 translate-x-full group-hover:translate-x-0 transition-transform duration-1000"></div>
         <div className="container-boxed px-6 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
            <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded-lg bg-yellow-400 flex items-center justify-center shadow-lg">
                  <Zap size={16} className="text-icce-blue animate-pulse" />
               </div>
               <h3 className="text-sm font-black text-white uppercase tracking-tighter">Ready to Register for ICCE 2026?</h3>
            </div>
            <div className="flex items-center gap-6">
               <p className="hidden lg:block text-[10px] font-bold text-blue-200 italic uppercase tracking-widest">Portal opens April 1, 2026</p>
               <button disabled className="px-6 py-2 bg-slate-700 text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-full cursor-not-allowed border border-white/10">
                 Register Now (Coming Soon)
               </button>
            </div>
         </div>
      </div>

      <main className="container-boxed pt-10 pb-20 px-6 relative z-10">
        
        {/* --- TABLES SECTION --- */}
        <div className="space-y-12 mb-20">
          
          {/* Indian Delegates */}
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-black text-icce-blue uppercase tracking-tight">For Indian Delegates</h2>
              <div className="h-px flex-1 bg-slate-100"></div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">INR (₹)</span>
            </div>
            
            <div className="overflow-x-auto rounded-[2rem] border border-slate-100 shadow-xl bg-white">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-[#191961] text-white">
                    <th rowSpan="2" className="px-6 py-8 text-xs font-black uppercase tracking-widest border-r border-white/10">Category</th>
                    <th colSpan="2" className="px-4 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-center border-b border-white/10 border-r border-white/10 text-yellow-400">Early Bird (By 15 Sept)</th>
                    <th colSpan="2" className="px-4 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-center border-b border-white/10">Regular Registration</th>
                  </tr>
                  <tr className="bg-[#191961]/95 text-white">
                    <th className="px-4 py-4 text-[9px] font-black uppercase tracking-widest text-center border-r border-white/10">Non-IEEE</th>
                    <th className="px-4 py-4 text-[9px] font-black uppercase tracking-widest text-center border-r border-white/10 text-yellow-400">IEEE Member</th>
                    <th className="px-4 py-4 text-[9px] font-black uppercase tracking-widest text-center border-r border-white/10">Non-IEEE</th>
                    <th className="px-4 py-4 text-[9px] font-black uppercase tracking-widest text-center text-yellow-400">IEEE Member</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {indianFees.map((fee, i) => (
                    <tr key={i} className="hover:bg-yellow-50/30 transition-colors group">
                      <td className="px-6 py-5 text-[11px] font-black text-[#191961] uppercase tracking-tight border-r border-slate-50">{fee.category}</td>
                      <td className="px-4 py-5 text-center text-xs font-bold text-slate-600 border-r border-slate-50">₹ {fee.ebNon}</td>
                      <td className="px-4 py-5 text-center text-sm font-black text-ieee-blue border-r border-slate-50 bg-blue-50/30 group-hover:bg-yellow-100/50 transition-colors">₹ {fee.ebIEEE}</td>
                      <td className="px-4 py-5 text-center text-xs font-bold text-slate-600 border-r border-slate-50">₹ {fee.regNon}</td>
                      <td className="px-4 py-5 text-center text-sm font-black text-ieee-blue bg-blue-50/30 group-hover:bg-yellow-100/50 transition-colors">₹ {fee.regIEEE}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Foreign Delegates */}
          <section className="space-y-6">
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-black text-icce-blue uppercase tracking-tight">For Foreign Delegates</h2>
              <div className="h-px flex-1 bg-slate-100"></div>
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">USD ($)</span>
            </div>
            
            <div className="overflow-x-auto rounded-[2rem] border border-slate-100 shadow-xl bg-white">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-[#191961] text-white">
                    <th rowSpan="2" className="px-6 py-8 text-xs font-black uppercase tracking-widest border-r border-white/10">Category</th>
                    <th colSpan="2" className="px-4 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-center border-b border-white/10 border-r border-white/10 text-yellow-400">Early Bird (By 15 Sept)</th>
                    <th colSpan="2" className="px-4 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-center border-b border-white/10">Regular Registration</th>
                  </tr>
                  <tr className="bg-[#191961]/95 text-white">
                    <th className="px-4 py-4 text-[9px] font-black uppercase tracking-widest text-center border-r border-white/10">Non-IEEE</th>
                    <th className="px-4 py-4 text-[9px] font-black uppercase tracking-widest text-center border-r border-white/10 text-yellow-400">IEEE Member</th>
                    <th className="px-4 py-4 text-[9px] font-black uppercase tracking-widest text-center border-r border-white/10">Non-IEEE</th>
                    <th className="px-4 py-4 text-[9px] font-black uppercase tracking-widest text-center text-yellow-400">IEEE Member</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {foreignFees.map((fee, i) => (
                    <tr key={i} className="hover:bg-yellow-50/30 transition-colors group">
                      <td className="px-6 py-5 text-[11px] font-black text-[#191961] uppercase tracking-tight border-r border-slate-50">{fee.category}</td>
                      <td className="px-4 py-5 text-center text-xs font-bold text-slate-600 border-r border-slate-50">{fee.ebNon}</td>
                      <td className="px-4 py-5 text-center text-sm font-black text-ieee-blue border-r border-slate-50 bg-blue-50/30 group-hover:bg-yellow-100/50 transition-colors">{fee.ebIEEE}</td>
                      <td className="px-4 py-5 text-center text-xs font-bold text-slate-600 border-r border-slate-50">{fee.regNon}</td>
                      <td className="px-4 py-5 text-center text-sm font-black text-ieee-blue bg-blue-50/30 group-hover:bg-yellow-100/50 transition-colors">{fee.regIEEE}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Quick Notes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-yellow-50 p-6 rounded-[1.5rem] border border-yellow-100 flex items-start gap-4 shadow-sm">
              <Info className="text-yellow-600 shrink-0" size={20} />
              <p className="text-[11px] font-bold text-yellow-800 leading-relaxed uppercase tracking-tight">
                Amount mentioned in INR is inclusive of GST
              </p>
            </div>
            <div className="bg-icce-blue p-6 rounded-[1.5rem] text-white flex items-start gap-4 shadow-lg md:col-span-2 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full group-hover:bg-white/10 transition-colors"></div>
               <Zap className="text-yellow-400 shrink-0 animate-pulse" size={20} />
               <div>
                 <p className="text-[11px] font-black uppercase tracking-widest text-yellow-400 mb-1">Early Bird Offer</p>
                 <p className="text-sm font-bold leading-tight">
                   Register on or before 15th Sept, 2026 to avail discounted rates.
                 </p>
               </div>
            </div>
          </div>
        </div>

        {/* --- POLICIES GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Multiple Paper Concession */}
          <div className="lg:col-span-2 bg-[#fffdf5] p-8 rounded-[2rem] border-2 border-dashed border-yellow-200 flex flex-col md:flex-row items-center gap-6 group hover:border-yellow-400 transition-colors">
             <div className="w-16 h-16 rounded-2xl bg-yellow-400 text-white flex items-center justify-center shrink-0 shadow-lg group-hover:rotate-3 transition-transform">
                <Zap size={32} />
             </div>
             <div>
                <h3 className="text-lg font-black text-[#191961] uppercase tracking-tighter mb-2">Multiple Paper Concession</h3>
                <p className="text-xs font-bold text-slate-600 leading-relaxed italic">
                  Authors with multiple accepted papers will be eligible for a <span className="text-ieee-blue font-black">₹1500 concession</span> on the registration fee for each additional paper, subject to the presence of at least one common registered author.
                </p>
             </div>
          </div>

          {/* Policy Cards */}
          {policies.map((policy, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-bl-full group-hover:bg-yellow-50 transition-colors"></div>
              <div className="relative z-10 space-y-6 flex-grow">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-icce-blue/5 text-icce-blue flex items-center justify-center group-hover:bg-icce-blue group-hover:text-white transition-all">
                    <policy.icon size={20} />
                  </div>
                  <h3 className="text-base font-black text-[#191961] uppercase tracking-tight">{policy.title}</h3>
                </div>
                <ul className="space-y-3">
                  {policy.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <ChevronRight size={14} className="text-yellow-500 shrink-0 mt-0.5" />
                      <p className="text-[11px] font-bold text-slate-500 leading-relaxed italic">{item}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}

        </div>

        {/* --- REGISTRATION CTAs --- */}
        <div className="bg-[#191961] rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-2xl text-center">
           <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-400/10 rounded-full -mr-48 -mt-48 blur-3xl"></div>
           <div className="absolute bottom-0 left-0 w-64 h-64 bg-ieee-blue/20 rounded-full -ml-32 -mb-32 blur-3xl"></div>
           
           <div className="relative z-10 max-w-2xl mx-auto space-y-8">
              <div className="space-y-4">
                 <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter">Ready to Register?</h2>
                 <p className="text-blue-200 text-sm font-medium italic">
                   The online registration portal will be active from <span className="text-yellow-400 font-black">April 1, 2026</span>.
                   For any urgent queries, please reach out to our registration chair.
                 </p>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                 <button disabled className="w-full sm:w-auto px-10 py-4 bg-slate-700 text-slate-400 text-xs font-black uppercase tracking-widest rounded-full cursor-not-allowed border border-white/10">
                   Register Now (Coming Soon)
                 </button>
                 <a href="mailto:icce2026@nsec.ac.in" className="w-full sm:w-auto px-10 py-4 bg-yellow-400 text-icce-blue text-xs font-black uppercase tracking-widest rounded-full hover:bg-yellow-500 transition-all shadow-lg shadow-yellow-400/20">
                   Contact Support
                 </a>
              </div>
           </div>
        </div>

      </main>
    </div>
  );
};

export { Registration };
