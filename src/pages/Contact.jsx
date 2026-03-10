import React from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  UserCheck,
  Clock
} from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden font-sans">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ieee-blue/[0.01] rounded-full blur-3xl pointer-events-none"></div>
      
      {/* --- HERO SECTION --- */}
      <header className="container-boxed pt-8 pb-4 px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 border-b border-slate-100 pb-6">
          <div className="relative group">
             <h1 className="text-3xl md:text-5xl font-black text-icce-blue uppercase leading-none tracking-tighter">
                Contact <br/>
                <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1.5px #191961' }}>Us</span>
             </h1>
          </div>
          <div className="max-w-md md:text-right">
             <p className="text-[9px] font-black uppercase tracking-[0.3em] text-ieee-blue opacity-50 mb-1">Technical Excellence</p>
             <p className="text-xs font-bold text-slate-500 leading-snug">Get in touch with the ICCE 2026 team for inquiries regarding submissions, registration, or general info.</p>
          </div>
        </div>
      </header>

      <main className="container-boxed py-6 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
           
           {/* LEFT: Contact Details */}
           <div className="lg:col-span-5 space-y-6">
              <section>
                 <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-[10px] font-black text-icce-blue uppercase tracking-[0.2em]">Communications</h2>
                    <div className="h-px flex-1 bg-slate-100"></div>
                 </div>
                 
                 <div className="space-y-3">
                    <div className="bg-slate-50 p-5 rounded-[20px] border border-slate-100 flex items-start gap-4 hover:border-ieee-blue/20 transition-all group">
                        <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm shrink-0 group-hover:bg-ieee-blue group-hover:text-white transition-all">
                            <Mail size={18} />
                        </div>
                        <div>
                            <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mb-0.5">Official Email</p>
                            <a href="mailto:icce2026@nsec.ac.in" className="text-xs font-black text-icce-blue hover:text-ieee-blue transition-colors">icce2026@nsec.ac.in</a>
                        </div>
                    </div>

                    <div className="bg-[#191961] p-5 rounded-[20px] flex items-start gap-4 text-white shadow-lg shadow-blue-900/10">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shadow-sm shrink-0 text-ieee-blue">
                            <UserCheck size={18} />
                        </div>
                        <div>
                            <p className="text-[9px] font-black uppercase tracking-widest text-ieee-blue mb-0.5">Conference Secretary</p>
                            <p className="text-sm font-black uppercase tracking-tight mb-0.5">Rajkumar Patra</p>
                            <a href="tel:8240699041" className="text-xs font-bold text-blue-200 hover:text-white transition-colors flex items-center gap-1.5">
                                <Phone size={10} /> 8240699041
                            </a>
                        </div>
                    </div>
                 </div>
              </section>

              <section>
                 <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-[10px] font-black text-icce-blue uppercase tracking-[0.2em]">Support Availability</h2>
                    <div className="h-px flex-1 bg-slate-100"></div>
                 </div>
                 <div className="bg-white border-2 border-slate-50 p-5 rounded-[20px] flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center shrink-0 text-slate-400">
                        <Clock size={18} />
                    </div>
                    <div className="flex-1">
                        <p className="text-[11px] font-bold text-slate-500 leading-snug mb-3">
                          Available for inquiries during Indian Standard Time (IST).
                        </p>
                        <div className="flex items-center justify-between gap-4 border-t border-slate-50 pt-3">
                           <span className="text-[9px] font-black uppercase tracking-widest text-icce-blue">Mon - Sat</span>
                           <span className="text-[9px] font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded-full">10 AM - 6 PM</span>
                        </div>
                    </div>
                 </div>
              </section>
           </div>

           {/* RIGHT: Venue Map */}
           <div className="lg:col-span-7">
              <section className="h-full flex flex-col">
                 <div className="flex items-center gap-3 mb-4">
                    <h2 className="text-[10px] font-black text-icce-blue uppercase tracking-[0.2em]">Host Institution</h2>
                    <div className="h-px flex-1 bg-slate-100"></div>
                 </div>
                 
                 <div className="bg-slate-50 p-3 rounded-[30px] border border-slate-100 flex-grow flex flex-col gap-3">
                    <div className="px-3 py-1 flex items-center gap-2">
                        <MapPin size={14} className="text-ieee-blue shrink-0" />
                        <p className="text-[10px] font-bold text-slate-600 leading-tight">
                            Netaji Subhash Engineering College, Techno City, Garia, Kolkata, India. 700 152
                        </p>
                    </div>
                    
                    <div className="flex-grow min-h-[300px] bg-white rounded-[24px] overflow-hidden shadow-inner border border-white relative group">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.7570123512347!2d88.4123703!3d22.4762837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02722b05a38e87%3A0x276c0d30e6be12ea!2sNetaji%20Subhash%20Engineering%20College!5e0!3m2!1sen!2sin!4v1709650000000!5m2!1sen!2sin" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
                        ></iframe>
                        <div className="absolute inset-0 pointer-events-none border-[8px] border-slate-50 rounded-[24px]"></div>
                        <a href="https://www.google.co.in/maps/place/Netaji+Subhash+Engineering+College/@22.4762837,88.4123703,17z" target="_blank" rel="noopener noreferrer" className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur p-2 rounded-xl shadow-lg hover:bg-white transition-colors">
                           <MapPin size={14} className="text-ieee-blue" />
                        </a>
                    </div>
                 </div>
              </section>
           </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
