import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  Clock,
  CheckCircle2,
  ExternalLink,
  Download,
  ArrowRightCircle,
  FileText,
  ShieldCheck,
  Star,
  Info,
  Link as LinkIcon
} from 'lucide-react';

const Submission = () => {
  const reviewPolicies = [
    "All submissions will be checked for plagiarism.",
    "Each paper will be reviewed by at least two independent reviewers.",
    "Acceptance will be based on originality, technical quality, relevance, and clarity.",
    "Authors of accepted papers must register and present their work at the conference for inclusion in the proceedings."
  ];

  const instructions = [
    "Submit only original, unpublished work that is not under consideration elsewhere.",
    "At least one author of each accepted paper must register for the conference.",
    "Papers not presented at the conference will not be included in the proceedings.",
    "Authors should ensure that their manuscripts comply with IEEE formatting requirements."
  ];

  const resources = [
    {
      title: "IEEE Conference Template (MS Word)",
      link: "https://www.ieee.org/conferences/publishing/templates.html"
    },
    {
      title: "IEEE Conference Template (LaTeX)",
      link: "https://www.ieee.org/conferences/publishing/templates.html"
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
                Paper <br/>
                <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px #191961' }}>Submission</span>
             </h1>
          </div>
          <div className="max-w-3xl md:text-right">
             <p className="text-[10px] font-black uppercase tracking-[0.3em] text-ieee-blue opacity-50 mb-2">Submission Standards</p>
             <p className="text-sm font-bold text-slate-500 leading-tight">The Organizing Committee of ICCE 2026 cordially invites researchers, academicians, industry professionals, and students to submit their original and unpublished research contributions to the International Conference for Convergence in Engineering (ICCE 2026).</p>
          </div>
        </div>
      </header>

      <main className="container-boxed pt-4 pb-12 px-6">
        
        {/* --- INTRODUCTION --- */}
        <section className="mb-10">
           <p className="text-sm font-medium text-slate-500 leading-relaxed text-justify italic">
             The conference aims to provide a premier interdisciplinary platform for presenting innovative research and developments across various domains of engineering and technology.
           </p>
        </section>

        <div className="flex flex-col lg:flex-row gap-10">
           
           {/* LEFT COLUMN */}
           <div className="flex-grow lg:max-w-[65%] space-y-10">
              
              {/* Submission System */}
              <section>
                 <div className="flex items-center gap-4 mb-6">
                    <h2 className="text-lg font-black text-icce-blue uppercase tracking-tight">Submission System</h2>
                    <div className="h-px flex-1 bg-slate-100"></div>
                 </div>
                 <div className="p-6 rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-all">
                    <p className="text-xs font-bold text-slate-600 leading-relaxed mb-6">
                      Authors must submit their manuscripts electronically through the Microsoft CMT (Conference Management Toolkit) online submission system.
                    </p>
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                       <div className="flex items-center gap-3 mb-4">
                          <LinkIcon size={18} className="text-ieee-blue" />
                          <h3 className="text-[13px] font-black text-[#191961] uppercase tracking-tight">Paper Submission Link</h3>
                       </div>
                       <a 
                         href="https://cmt3.research.microsoft.com/ICCE2026" 
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="text-xs font-black text-ieee-blue hover:text-[#191961] transition-colors break-all"
                       >
                         https://cmt3.research.microsoft.com/ICCE2026
                       </a>
                    </div>
                    <p className="mt-4 text-[10px] font-black text-red-600 uppercase tracking-widest italic bg-red-50 px-3 py-1.5 rounded-lg inline-block">
                       Submissions sent via email will not be accepted.
                    </p>
                 </div>
              </section>

              {/* Paper Preparation Guidelines */}
              <section>
                 <div className="flex items-center gap-4 mb-6">
                    <h2 className="text-lg font-black text-icce-blue uppercase tracking-tight">Paper Preparation Guidelines</h2>
                    <div className="h-px flex-1 bg-slate-100"></div>
                 </div>
                 <div className="space-y-6">
                    <p className="text-xs font-bold text-slate-600 leading-relaxed">
                      Authors are requested to prepare their manuscripts following the standard IEEE conference format. Papers must be written in English and should typically be <strong>4–6 pages</strong>, including figures, tables, and references.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       {resources.map((res, idx) => (
                         <div key={idx} className="p-5 rounded-2xl border border-slate-100 bg-white shadow-sm hover:border-ieee-blue/20 hover:shadow-md transition-all flex items-start gap-4">
                            <div className="w-10 h-10 bg-blue-50 text-ieee-blue rounded-xl flex items-center justify-center shrink-0">
                               <Download size={20} />
                            </div>
                            <div className="space-y-2 flex-1">
                               <h3 className="text-[12px] font-black text-[#191961] uppercase tracking-tight leading-tight">
                                  {res.title}
                               </h3>
                               <a href={res.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[9px] font-black text-ieee-blue uppercase tracking-widest hover:translate-x-1 transition-transform">
                                  Template Link <ExternalLink size={10} className="ml-1" />
                               </a>
                            </div>
                         </div>
                       ))}
                    </div>
                 </div>
              </section>

              {/* Important Instructions for Authors */}
              <section>
                 <div className="flex items-center gap-4 mb-6">
                    <h2 className="text-lg font-black text-icce-blue uppercase tracking-tight">Important Instructions for Authors</h2>
                    <div className="h-px flex-1 bg-slate-100"></div>
                 </div>
                 <div className="p-6 rounded-3xl border border-slate-100 bg-white shadow-sm">
                    <ul className="space-y-4">
                       {instructions.map((item, i) => (
                         <li key={i} className="flex items-start gap-3 text-[11px] font-bold text-gray-600 leading-snug">
                            <ArrowRightCircle size={14} className="text-ieee-blue shrink-0 mt-0.5" />
                            <span>{item}</span>
                         </li>
                       ))}
                    </ul>
                 </div>
              </section>

           </div>

           {/* RIGHT COLUMN (Sidebar) */}
           <div className="lg:w-[35%] space-y-6">
              
              {/* Review Process */}
              <section className="bg-[#191961] p-6 rounded-3xl text-white shadow-lg relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-20 h-20 bg-yellow-400/10 rounded-bl-full"></div>
                 <div className="flex items-center gap-2 mb-6 relative z-10 border-b border-white/10 pb-4">
                    <ShieldCheck size={18} className="text-yellow-400" />
                    <h3 className="text-sm font-black uppercase tracking-tight">Review Process</h3>
                 </div>
                 <div className="space-y-6 relative z-10">
                    <ul className="space-y-4">
                       {reviewPolicies.map((policy, i) => (
                         <li key={i} className="flex items-start gap-3 text-[11px] font-bold text-slate-200 leading-snug border-b border-white/5 pb-3 last:border-0">
                            <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0 mt-1.5"></div>
                            <span>{policy}</span>
                         </li>
                       ))}
                    </ul>
                 </div>
              </section>

              {/* Publication */}
              <section className="p-6 border border-slate-100 rounded-3xl bg-slate-50/30">
                 <div className="flex items-center gap-2 mb-4 text-[#191961]">
                    <FileText size={18} className="text-yellow-600" />
                    <h3 className="text-sm font-black uppercase tracking-tight">Publication</h3>
                 </div>
                 <div className="space-y-4">
                    <p className="text-[11px] font-bold text-slate-600 leading-relaxed text-justify italic">
                      All submitted papers will undergo a rigorous peer-review process by the Technical Program Committee and domain experts. 
                    </p>
                    <p className="text-[11px] font-bold text-slate-600 leading-relaxed text-justify">
                      Selected high-quality accepted papers may be submitted for possible publication in the <strong>IEEE Xplore Digital Library</strong>, subject to meeting the scope and quality requirements of IEEE.
                    </p>
                    <div className="bg-white/50 p-4 rounded-2xl border border-ieee-blue/10">
                       <p className="text-[10px] font-black text-ieee-blue uppercase tracking-tight leading-tight">
                         IEEE approval is under process / subject to final confirmation.
                       </p>
                    </div>
                 </div>
              </section>

              {/* Contact Support */}
              <section className="bg-slate-900 p-6 rounded-3xl text-white border-b-4 border-yellow-400">
                 <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-3">
                    <Mail size={18} className="text-yellow-400" />
                    <h3 className="text-sm font-black uppercase tracking-tight">Submission Support</h3>
                 </div>
                 <div className="space-y-4">
                    <div className="space-y-3">
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

        {/* Acknowledgment — Microsoft CMT */}
        <section className="mt-12 pt-8 border-t border-slate-100">
           <div className="flex items-center gap-3 mb-6">
              <Info size={16} className="text-slate-400" />
              <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Acknowledgment — Microsoft CMT</h2>
              <div className="h-px flex-1 bg-slate-100"></div>
           </div>
           <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 space-y-4 shadow-sm">
              <p className="text-xs font-medium text-slate-500 leading-relaxed text-justify italic">
                The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
              </p>
              <p className="text-sm font-black text-icce-blue leading-relaxed text-justify">
                The organizers gratefully acknowledge the support provided by Microsoft through the Microsoft Conference Management Toolkit (CMT) service for managing the paper submission and review process.
              </p>
           </div>
        </section>

      </main>
    </div>
  );
};

export default Submission;
