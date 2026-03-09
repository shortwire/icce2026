import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  Clock,
  UserCheck,
  CheckCircle2,
  Star,
  ArrowRightCircle
} from 'lucide-react';

const SupportToStudents = () => {
  const opportunities = [
    {
      id: "1",
      title: "Student Registration Support",
      details: [
        "Discounted registration fees for undergraduate, postgraduate, and doctoral students",
        "Special early-bird rates",
        "Group registration benefits (if applicable)"
      ]
    },
    {
      id: "2",
      title: "Travel Grants (If Available)",
      description: "Limited travel support may be provided to selected student authors based on:",
      details: [
        "Paper acceptance quality",
        "Financial need",
        "Distance traveled",
        "Academic merit"
      ],
      footer: "Note: Priority may be given to presenting authors."
    },
    {
      id: "3",
      title: "Accommodation Assistance",
      description: "The organizing committee will help students with:",
      details: [
        "Information about nearby hotels and hostels",
        "Affordable accommodation options",
        "Campus or partner accommodation (subject to availability)"
      ]
    },
    {
      id: "4",
      title: "Mentorship & Networking",
      description: "Students will benefit from:",
      details: [
        "Interaction with keynote speakers and experts",
        "Dedicated student networking sessions",
        "Career guidance and research discussion forums",
        "Opportunities to connect with industry professionals"
      ]
    },
    {
      id: "5",
      title: "Best Student Paper Awards",
      description: "Awards will be presented to outstanding student research contributions based on:",
      details: [
        "Technical quality",
        "Innovation",
        "Presentation effectiveness",
        "Reviewer evaluation"
      ],
      footer: "Certificates and recognition will be provided during the valedictory session."
    },
    {
      id: "6",
      title: "Workshops & Tutorials",
      description: "Students may participate in:",
      details: [
        "Hands-on technical workshops",
        "Research methodology sessions",
        "Emerging technology tutorials",
        "Industry-oriented training programs"
      ],
      footer: "(Some workshops may require separate registration.)"
    },
    {
      id: "7",
      title: "Volunteer Opportunities",
      description: "Students can also participate as conference volunteers to gain:",
      details: [
        "Event management experience",
        "Networking opportunities",
        "Certificates of participation"
      ]
    }
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
                Support <br/>
                <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px #191961' }}>To Students</span>
             </h1>
          </div>
          <div className="max-w-3xl md:text-right">
             <p className="text-[10px] font-black uppercase tracking-[0.3em] text-ieee-blue opacity-50 mb-2">Student Empowerment</p>
             <p className="text-sm font-bold text-slate-500 leading-tight">We are deeply committed to fostering student researchers through a comprehensive program including travel grants, discounted registration, and mentorship with global leaders. We encourage all student participants to leverage these unique opportunities to advance their professional and research careers.</p>
          </div>
        </div>
      </header>

      <main className="container-boxed pt-4 pb-12 px-6">
        
        {/* --- IMPORTANT DATES --- */}
        <section className="mb-10">
           <div className="flex items-center gap-3 mb-4">
              <div className="p-1.5 bg-blue-50 rounded-lg">
                <Clock size={16} className="text-ieee-blue" />
              </div>
              <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Important Dates</h2>
              <div className="h-px flex-1 bg-slate-100"></div>
           </div>
           <div className="flex flex-col md:flex-row justify-between gap-3 bg-slate-50/50 p-5 rounded-3xl border border-slate-50 shadow-sm">
              <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                 <span className="text-[9px] font-black text-ieee-blue uppercase tracking-widest">Student Support Application Opens</span>
                 <p className="text-sm font-black text-[#191961]">To be announced</p>
              </div>
              <div className="hidden md:block w-px h-8 bg-slate-200 self-center"></div>
              <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                 <span className="text-[9px] font-black text-ieee-blue uppercase tracking-widest">Application Deadline</span>
                 <p className="text-sm font-black text-[#191961]">To be announced</p>
              </div>
              <div className="hidden md:block w-px h-8 bg-slate-200 self-center"></div>
              <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                 <span className="text-[9px] font-black text-ieee-blue uppercase tracking-widest">Notification of Support</span>
                 <p className="text-sm font-black text-[#191961]">To be announced</p>
              </div>
           </div>
        </section>

        {/* --- CONTENT GRID --- */}
        <div className="flex flex-col lg:flex-row gap-10">
           
           {/* LEFT: Support Opportunities */}
           <div className="flex-grow lg:max-w-[65%]">
              <div className="flex items-center gap-4 mb-6">
                 <h2 className="text-lg font-black text-icce-blue uppercase tracking-tight">Support Opportunities</h2>
                 <div className="h-px flex-1 bg-slate-100"></div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-4">
                 {opportunities.map((opt) => (
                   <motion.div 
                     key={opt.id}
                     initial={{ opacity: 0, y: 10 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     className={`p-5 rounded-2xl border border-slate-100 bg-white shadow-sm hover:border-ieee-blue/20 hover:shadow-md transition-all ${opt.id === "5" ? "md:col-span-2" : ""}`}
                   >
                     <div className="flex items-start gap-3">
                        <div className="space-y-2 flex-1">
                           <h3 className="text-[13px] font-black text-[#191961] uppercase tracking-tight leading-tight group-hover:text-ieee-blue transition-colors">
                              {opt.title}
                           </h3>
                           {opt.description && (
                             <p className="text-[10px] font-bold text-slate-500 italic leading-snug">
                                {opt.description}
                             </p>
                           )}
                           <ul className="space-y-1.5 pt-1">
                              {opt.details.map((detail, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-[10px] font-medium text-gray-600 leading-snug">
                                   <ArrowRightCircle size={9} className="text-ieee-blue shrink-0 mt-0.5" />
                                   <span>{detail}</span>
                                </li>
                              ))}
                           </ul>
                           {opt.footer && (
                             <p className="text-[8px] font-black text-ieee-blue bg-blue-50/50 px-2 py-0.5 rounded inline-block italic mt-2">
                                {opt.footer}
                             </p>
                           )}
                        </div>
                     </div>
                   </motion.div>
                 ))}
              </div>
           </div>

           {/* RIGHT: Sidebar (Compact) */}
           <div className="lg:w-[35%] space-y-4">
              {/* Eligibility */}
              <section className="bg-[#191961] p-6 rounded-3xl text-white shadow-lg relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-400/10 rounded-bl-full"></div>
                 <div className="flex items-center gap-2 mb-4 relative z-10">
                    <UserCheck size={18} className="text-yellow-400" />
                    <h3 className="text-sm font-black uppercase tracking-tight">Eligibility</h3>
                 </div>
                 <div className="space-y-4 relative z-10">
                    <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Student support is typically available for:</p>
                    <ul className="space-y-2">
                       {[
                         "Undergraduate students",
                         "Postgraduate students",
                         "PhD scholars",
                         "Recent graduates (within 1 year)"
                       ].map((item, i) => (
                         <li key={i} className="flex items-center gap-2 text-[11px] font-bold text-slate-200 border-b border-white/5 pb-2 last:border-0">
                            <div className="w-1 h-1 rounded-full bg-yellow-400"></div>
                            {item}
                         </li>
                       ))}
                    </ul>
                    <p className="text-[10px] font-bold text-yellow-400 italic bg-white/5 p-3 rounded-xl leading-tight border-l-2 border-yellow-400">
                       Proof of student status may be required during registration.
                    </p>
                 </div>
              </section>

              {/* How to Apply */}
              <section className="p-6 border border-slate-100 rounded-3xl bg-slate-50/30">
                 <div className="flex items-center gap-2 mb-4 text-[#191961]">
                    <CheckCircle2 size={18} className="text-yellow-600" />
                    <h3 className="text-sm font-black uppercase tracking-tight">How to Apply for Support</h3>
                 </div>
                 <div className="space-y-4">
                    <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Interested students should:</p>
                       {/* How to Apply steps */}
                       {[
                         "Complete conference registration",
                         "Submit required documents (if applying for grants)",
                         "Fill out the Student Support Application Form",
                         "Wait for confirmation from the organizing committee"
                       ].map((step, i) => (
                         <div key={i} className="flex gap-3 items-start group">
                            <p className="text-[11px] font-bold text-slate-600 leading-tight pt-0.5">{step}</p>
                         </div>
                       ))}
                 </div>
              </section>

              {/* Contact Information */}
              <section className="bg-slate-900 p-6 rounded-3xl text-white border-b-4 border-yellow-400">
                 <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-3">
                    <Mail size={18} className="text-yellow-400" />
                    <h3 className="text-sm font-black uppercase tracking-tight">Contact Information</h3>
                 </div>
                 <div className="space-y-4">
                    <p className="text-[9px] font-bold text-slate-400 leading-relaxed italic">For student support queries, please contact:</p>
                    <div className="space-y-3">
                       <div className="flex flex-col gap-0.5">
                          <span className="text-xs font-black text-white uppercase tracking-tight">Conference Secretary</span>
                       </div>
                       <div className="flex flex-col gap-0.5">
                          <span className="text-[9px] uppercase text-slate-500 font-black tracking-widest">Email</span>
                          <a href="mailto:icce2026@nsec.ac.in" className="text-xs font-black text-yellow-400 hover:text-white transition-colors">icce2026@nsec.ac.in</a>
                       </div>
                       <div className="flex flex-col gap-0.5">
                          <span className="text-[9px] uppercase text-slate-500 font-black tracking-widest">Phone</span>
                          <a href="tel:+919831817307" className="text-xs font-black text-white hover:text-yellow-400 transition-colors">+91 9831817307</a>
                       </div>
                    </div>
                 </div>
              </section>
           </div>
        </div>

        {/* --- FOOTER QUOTE --- */}
        <section className="mt-12 pt-8 border-t border-slate-100 text-center">
           <Star size={24} className="text-ieee-blue mx-auto mb-4 opacity-30" />
           <p className="max-w-3xl mx-auto text-lg md:text-xl font-black italic text-[#191961] leading-relaxed tracking-tight px-4">
              "We warmly welcome student participation and encourage young researchers to present their innovative ideas, collaborate globally, and build their academic careers through this conference."
           </p>
        </section>

      </main>
    </div>
  );
};

export { SupportToStudents };
