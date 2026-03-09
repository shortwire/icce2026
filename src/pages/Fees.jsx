import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  Clock,
  UserCheck,
  CheckCircle2,
  Star,
  ArrowRightCircle,
  CreditCard,
  Info
} from 'lucide-react';

const RegistrationFees = () => {
  const indianFees = [
    { category: "Student* (UG/PG/Research Scholar)", earlyIEEE: "4500", earlyNonIEEE: "5500", lateIEEE: "5500", lateNonIEEE: "6500" },
    { category: "2nd Author, Student*", earlyIEEE: "4500", earlyNonIEEE: "5500", lateIEEE: "5500", lateNonIEEE: "6500" },
    { category: "Academician", earlyIEEE: "5500", earlyNonIEEE: "6500", lateIEEE: "6500", lateNonIEEE: "7500" },
    { category: "2nd paper, Academician", earlyIEEE: "5000", earlyNonIEEE: "6000", lateIEEE: "6000", lateNonIEEE: "7000" },
    { category: "Industry Professional", earlyIEEE: "7500", earlyNonIEEE: "8500", lateIEEE: "8500", lateNonIEEE: "9500" },
    { category: "Attendees", earlyIEEE: "2000", earlyNonIEEE: "3000", lateIEEE: "3000", lateNonIEEE: "4000" },
  ];

  const foreignFees = [
    { category: "Student* (UG/PG/Research Scholar)", earlyIEEE: "---", earlyNonIEEE: "---", lateIEEE: "---", lateNonIEEE: "---" },
    { category: "Academician", earlyIEEE: "---", earlyNonIEEE: "---", lateIEEE: "---", lateNonIEEE: "---" },
    { category: "Attendees", earlyIEEE: "---", earlyNonIEEE: "---", lateIEEE: "---", lateNonIEEE: "---" },
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden font-sans">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ieee-blue/[0.01] rounded-full blur-3xl pointer-events-none"></div>
      
      {/* --- HERO SECTION --- */}
      <header className="container-boxed pt-8 pb-6 px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-50 pb-8 text-center md:text-left">
          <div className="relative group">
             <h1 className="text-4xl md:text-5xl font-black text-icce-blue uppercase leading-none tracking-tighter">
                Registration <br/>
                <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px #191961' }}>Fees</span>
             </h1>
          </div>
          <div className="max-w-3xl md:text-right">
             <p className="text-[10px] font-black uppercase tracking-[0.3em] text-ieee-blue opacity-50 mb-2">Registration Tiers</p>
             <p className="text-sm font-bold text-slate-500 leading-tight">Our registration structure is designed to be inclusive, offering significant discounts for IEEE members and students to promote widespread engagement. Participants are encouraged to register during the early-bird period to secure their place at this premier engineering event at reduced rates.</p>
          </div>
        </div>
      </header>

      <main className="container-boxed pt-4 pb-12 px-6">
        
        {/* --- CONTENT GRID --- */}
        <div className="flex flex-col lg:flex-row gap-10">
           
           {/* Fee Table Section */}
           <div className="lg:w-[70%] flex flex-col justify-between">
              <div className="space-y-4">
                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm bg-white">
                  <table className="w-full text-left border-collapse table-fixed min-w-[700px]">
                    <thead>
                      <tr className="border-b border-slate-200 bg-slate-50/50">
                        <th rowSpan="2" className="px-4 py-4 uppercase text-[11px] font-black text-[#191961] text-center border-r border-slate-200 w-1/3">
                          INDIAN DELEGATES
                        </th>
                        <th colSpan="2" className="px-2 py-2 text-[11px] font-black text-[#191961] text-center border-r border-slate-200">
                          On/before September 15, 2026
                        </th>
                        <th colSpan="2" className="px-2 py-2 text-[11px] font-black text-[#191961] text-center">
                          After September 15, 2026
                        </th>
                      </tr>
                      <tr className="border-b border-slate-200 bg-slate-50/30">
                        <th className="px-2 py-2 text-[10px] font-black text-[#191961] text-center border-r border-slate-200 italic">IEEE Member</th>
                        <th className="px-2 py-2 text-[10px] font-black text-[#191961] text-center border-r border-slate-200 italic">Non-IEEE Member</th>
                        <th className="px-2 py-2 text-[10px] font-black text-[#191961] text-center border-r border-slate-200 italic">IEEE Member</th>
                        <th className="px-2 py-2 text-[10px] font-black text-[#191961] text-center italic">Non-IEEE Member</th>
                      </tr>
                    </thead>
                    <tbody>
                      {indianFees.map((fee, i) => (
                        <tr key={i} className="border-b border-slate-100 last:border-b-0 hover:bg-blue-50/20 transition-colors">
                          <td className="px-4 py-3 text-[11px] font-bold text-gray-800 border-r border-slate-100">{fee.category}</td>
                          <td className="px-2 py-3 text-center text-xs font-black text-ieee-blue border-r border-slate-100">₹ {fee.earlyIEEE}</td>
                          <td className="px-2 py-3 text-center text-xs font-black text-gray-800 border-r border-slate-100">₹ {fee.earlyNonIEEE}</td>
                          <td className="px-2 py-3 text-center text-xs font-black text-ieee-blue border-r border-slate-100">₹ {fee.lateIEEE}</td>
                          <td className="px-2 py-3 text-center text-xs font-black text-gray-800">₹ {fee.lateNonIEEE}</td>
                        </tr>
                      ))}
                      <tr className="border-y border-slate-200 bg-slate-50/80">
                        <th rowSpan="2" className="px-4 py-4 uppercase text-[11px] font-black text-[#191961] text-center border-r border-slate-200">
                          FOREIGN DELEGATES
                        </th>
                        <th colSpan="2" className="px-2 py-2 text-[11px] font-black text-[#191961] text-center border-r border-slate-200">
                          On/before September 15, 2026
                        </th>
                        <th colSpan="2" className="px-2 py-2 text-[11px] font-black text-[#191961] text-center">
                          After September 15, 2026
                        </th>
                      </tr>
                      <tr className="border-b border-slate-200 bg-slate-50/30">
                        <th className="px-2 py-2 text-[10px] font-black text-[#191961] text-center border-r border-slate-200 italic">IEEE Member</th>
                        <th className="px-2 py-2 text-[10px] font-black text-[#191961] text-center border-r border-slate-200 italic">Non-IEEE Member</th>
                        <th className="px-2 py-2 text-[10px] font-black text-[#191961] text-center border-r border-slate-200 italic">IEEE Member</th>
                        <th className="px-2 py-2 text-[10px] font-black text-[#191961] text-center italic">Non-IEEE Member</th>
                      </tr>
                      {foreignFees.map((fee, i) => (
                        <tr key={i} className="border-b border-slate-100 last:border-b-0 hover:bg-blue-50/20 transition-colors">
                          <td className="px-4 py-3 text-[11px] font-bold text-gray-800 border-r border-slate-100">{fee.category}</td>
                          <td className="px-2 py-3 text-center text-xs font-black text-ieee-blue border-r border-slate-100">$ {fee.earlyIEEE}</td>
                          <td className="px-2 py-3 text-center text-xs font-black text-gray-800 border-r border-slate-100">$ {fee.earlyNonIEEE}</td>
                          <td className="px-2 py-3 text-center text-xs font-black text-ieee-blue border-r border-slate-100">$ {fee.lateIEEE}</td>
                          <td className="px-2 py-3 text-center text-xs font-black text-gray-800">$ {fee.lateNonIEEE}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-[10px] font-bold text-gray-700 italic">
                  * The first author must be a student for the Student Author Paper.
                </p>
              </div>
           </div>


           {/* RIGHT: Sidebar (Compact) */}
           <div className="lg:w-[30%] space-y-4">
              {/* Payment Details */}
              <section className="p-5 border border-slate-100 rounded-3xl bg-slate-50/30">
                 <div className="flex items-center gap-2 mb-3 text-[#191961]">
                    <CreditCard size={18} className="text-yellow-600" />
                    <h3 className="text-sm font-black uppercase tracking-tight">Payment Method</h3>
                 </div>
                 <div className="space-y-3">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Registration Portal:</p>
                    <div className="bg-white p-4 rounded-2xl border border-slate-100 text-center">
                       <p className="text-xs font-bold text-slate-600 mb-3 italic">The online registration portal will be active from April 1, 2026.</p>
                       <button disabled className="w-full py-2.5 bg-slate-100 text-slate-400 text-[10px] font-black uppercase tracking-widest rounded-xl cursor-not-allowed">
                          Register Now (Coming Soon)
                       </button>
                    </div>
                    <div className="flex items-start gap-2 pt-1">
                      <CheckCircle2 size={12} className="text-ieee-blue mt-0.5" />
                      <p className="text-[10px] font-bold text-gray-500">Payments can be made via Credit Card, Debit Card, or Net Banking through the portal.</p>
                    </div>
                 </div>
              </section>

              {/* Contact Information */}
              <section className="bg-slate-900 p-5 rounded-3xl text-white border-b-4 border-yellow-400">
                 <div className="flex items-center gap-2 mb-3 border-b border-white/10 pb-2">
                    <Mail size={18} className="text-yellow-400" />
                    <h3 className="text-sm font-black uppercase tracking-tight">Registration Queries</h3>
                 </div>
                 <div className="space-y-3">
                    <p className="text-[9px] font-bold text-slate-400 leading-relaxed italic">For any registration related issues, please contact:</p>
                    <div className="space-y-3">
                       <div className="flex flex-col gap-0.5">
                          <span className="text-xs font-black text-white uppercase tracking-tight">Registration Chair</span>
                       </div>
                       <div className="flex flex-col gap-0.5">
                          <span className="text-[9px] uppercase text-slate-500 font-black tracking-widest">Email</span>
                          <a href="mailto:icce2026@nsec.ac.in" className="text-xs font-black text-yellow-400 hover:text-white transition-colors">icce2026@nsec.ac.in</a>
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

export { RegistrationFees };
