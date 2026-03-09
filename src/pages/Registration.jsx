import React from 'react';
import { Mail, Phone, MapPin, CreditCard, Clock, CheckCircle, Info, MessageSquare, ExternalLink } from 'lucide-react';

const PageHero = ({ title, subtitle }) => (
  <section className="bg-[#0a0a2a] py-20 relative overflow-hidden text-center md:text-left">
     <div className="absolute top-0 right-0 w-1/4 h-full bg-ieee-blue/5 blur-3xl"></div>
     <div className="container-boxed px-6 relative z-10">
        <div className="max-w-4xl space-y-4">
           <span className="text-ieee-blue font-black uppercase tracking-[0.4em] text-[10px]">Portal</span>
           <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none">{title}</h1>
           <div className="w-16 h-1 bg-ieee-blue mx-auto md:mx-0"></div>
           <p className="text-gray-400 font-medium tracking-wide text-sm">{subtitle}</p>
        </div>
     </div>
  </section>
);

const Registration = () => {
  const fees = [
    { type: 'Student (UG/PG/Research Scholar)', early: '5500', late: '6500' },
    { type: '2nd Author, Student', early: '5500', late: '6500' },
    { type: 'Academician', early: '6500', late: '7500' },
    { type: '2nd Paper, Academician', early: '6000', late: '7000' },
    { type: 'Industry Professional', early: '8500', late: '9500' },
    { type: 'Attendees', early: '3000', late: '4000' },
  ];

  return (
    <div className="min-h-screen">
      <PageHero title="Registration Fees" subtitle="Detailed information on attendance fees and member concessions." />
      <div className="container-boxed py-24 px-6 space-y-16">
         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3 overflow-hidden rounded-[30px] shadow-2xl border border-slate-50">
               <table className="w-full text-left border-collapse bg-white">
                  <thead className="bg-[#191961] text-white">
                     <tr>
                        <th className="px-8 py-6 uppercase text-xs font-black tracking-widest border-r border-white/10" rowSpan="2">Indian Delegates</th>
                        <th className="px-8 py-4 uppercase text-[10px] font-black tracking-widest text-center border-b border-white/10" colSpan="2">On/Before Sept 15, 2026</th>
                        <th className="px-8 py-4 uppercase text-[10px] font-black tracking-widest text-center border-b border-white/10" colSpan="2">After Sept 15, 2026</th>
                     </tr>
                     <tr>
                        <th className="px-4 py-4 uppercase text-[9px] font-black tracking-widest text-center border-r border-white/10">IEEE</th>
                        <th className="px-4 py-4 uppercase text-[9px] font-black tracking-widest text-center border-r border-white/10">Non-IEEE</th>
                        <th className="px-4 py-4 uppercase text-[9px] font-black tracking-widest text-center border-r border-white/10">IEEE</th>
                        <th className="px-4 py-4 uppercase text-[9px] font-black tracking-widest text-center">Non-IEEE</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                     {fees.map((fee, i) => (
                        <tr key={i} className="hover:bg-slate-50 transition-colors">
                           <td className="px-8 py-6 font-black text-[#191961] text-xs uppercase tracking-tight">{fee.type}</td>
                           <td className="px-4 py-6 text-center text-sm font-bold text-gray-700">₹ {fee.early}</td>
                           <td className="px-4 py-6 text-center text-sm font-bold text-gray-400">₹ {(parseInt(fee.early) + 1000).toString()}</td>
                           <td className="px-4 py-6 text-center text-sm font-bold text-gray-700">₹ {fee.late}</td>
                           <td className="px-4 py-6 text-center text-sm font-bold text-gray-400">₹ {(parseInt(fee.late) + 1000).toString()}</td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
            <div className="lg:col-span-1 space-y-6">
               <div className="bg-ieee-blue p-8 rounded-[30px] text-white shadow-xl">
                  <Info size={32} className="mb-4" />
                  <h4 className="text-xl font-black mb-4 uppercase tracking-tight leading-none">Important Info</h4>
                  <ul className="text-xs font-medium text-blue-100 space-y-4 leading-relaxed">
                     <li className="flex items-start italic"><CheckCircle size={14} className="mr-2 shrink-0 mt-0.5" /> Includes Kit, Lunch, Refreshments & Certificate.</li>
                     <li className="flex items-start italic"><CheckCircle size={14} className="mr-2 shrink-0 mt-0.5" /> Valid Student ID required for student rates.</li>
                     <li className="flex items-start italic"><CheckCircle size={14} className="mr-2 shrink-0 mt-0.5" /> IEEE membership proof must be submitted during registration.</li>
                  </ul>
               </div>
               <div className="boutique-card p-8 border-l-4 border-red-600 bg-red-50 text-red-900 shadow-sm">
                  <h4 className="text-sm font-black uppercase tracking-widest mb-2">Note</h4>
                  <p className="text-xs leading-relaxed font-bold italic">Registration portal will open on April 1, 2026.</p>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="min-h-screen">
      <PageHero title="Contact Us" subtitle="Get in touch with the ICCE 2026 organizing team." />
      <div className="container-boxed py-24 px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">
         <div className="space-y-12">
            <section className="space-y-8">
               <div className="flex items-center space-x-4">
                  <div className="h-8 w-2 bg-ieee-blue"></div>
                  <h2 className="text-3xl font-black text-[#191961] uppercase tracking-tight">Conference Venue</h2>
               </div>
               <div className="boutique-card p-10 flex items-start space-x-6">
                  <div className="p-4 bg-blue-50 text-ieee-blue rounded-2xl shadow-sm shrink-0">
                     <MapPin size={32} />
                  </div>
                  <div>
                     <h3 className="text-xl font-black text-[#191961] mb-2 uppercase tracking-tight leading-none">Netaji Subhash Engineering College</h3>
                     <p className="text-sm text-gray-500 font-medium leading-relaxed italic">
                        Techno City, Panchpota, Garia,<br />
                        Kolkata, West Bengal, India. PIN: 700 152
                     </p>
                     <a href="https://www.nsec.ac.in" target="_blank" className="mt-4 inline-flex items-center text-xs font-black uppercase tracking-widest text-ieee-blue hover:underline">
                        Visit College Website <ExternalLink className="ml-2" size={12} />
                     </a>
                  </div>
               </div>
            </section>

            <section className="space-y-8">
               <div className="flex items-center space-x-4">
                  <div className="h-8 w-2 bg-ieee-blue"></div>
                  <h2 className="text-3xl font-black text-[#191961] uppercase tracking-tight">Contact Info</h2>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="boutique-card p-8 group transition-colors">
                     <Mail size={24} className="text-ieee-blue mb-4" />
                     <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest block mb-1">Email</span>
                     <a href="mailto:icce2026@nsec.ac.in" className="text-sm font-bold text-[#191961] hover:text-ieee-blue transition-colors">icce2026@nsec.ac.in</a>
                  </div>
                  <div className="boutique-card p-8 group transition-colors">
                     <Phone size={24} className="text-ieee-blue mb-4" />
                     <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest block mb-1">Phone</span>
                     <a href="tel:+919831817307" className="text-sm font-bold text-[#191961] hover:text-ieee-blue transition-colors">+91 9831817307</a>
                  </div>
               </div>
               <div className="boutique-card p-8 flex items-center bg-[#191961] text-white">
                  <div className="p-4 bg-white/5 rounded-2xl mr-6 shrink-0"><MessageSquare size={24} className="text-ieee-blue"/></div>
                  <div>
                     <span className="text-[10px] font-black uppercase text-ieee-blue tracking-widest block mb-1">Organizing Secretary</span>
                     <p className="text-lg font-black uppercase tracking-tight">Rajkumar Patra</p>
                  </div>
               </div>
            </section>
         </div>

         <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-slate-50">
            <div className="bg-[#191961] p-12 text-white">
               <h3 className="text-3xl font-black uppercase tracking-tight leading-none mb-4">Quick Inquiry</h3>
               <p className="text-xs text-blue-200 font-medium">Have questions? Send us a message and we'll reply shortly.</p>
            </div>
            <form className="p-12 space-y-6">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                     <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Full Name</label>
                     <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-ieee-blue outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                     <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Email Address</label>
                     <input type="email" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-ieee-blue outline-none transition-all" placeholder="john@example.com" />
                  </div>
               </div>
               <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Subject</label>
                  <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-ieee-blue outline-none transition-all">
                     <option>General Inquiry</option>
                     <option>Submission Help</option>
                     <option>Registration Query</option>
                  </select>
               </div>
               <div>
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-2">Message</label>
                  <textarea rows="4" className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4 text-sm font-medium focus:ring-2 focus:ring-ieee-blue outline-none transition-all" placeholder="Your message here..."></textarea>
               </div>
               <button type="submit" className="w-full py-5 bg-ieee-blue text-white font-black uppercase tracking-widest text-xs rounded-2xl shadow-xl hover:bg-ieee-dark-blue transition-all transform hover:-translate-y-1">
                  Send Message
               </button>
            </form>
         </div>
      </div>
    </div>
  );
};

export { Registration, Contact };
