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
  Info
} from 'lucide-react';

const Submission = () => {
  const resources = [
    {
      id: "1",
      title: "IEEE Conference Template (MS Word)",
      description: "Download the standard MS Word template from IEEE.",
      link: "https://www.ieee.org/conferences/publishing/templates.html",
      type: "external"
    },
    {
      id: "2",
      title: "IEEE Conference Template (LaTeX)",
      description: "Access the LaTeX template on IEEE's portal.",
      link: "https://www.ieee.org/conferences/publishing/templates.html",
      type: "external"
    }
  ];

  const reviewPolicies = [
     "All submissions will be checked for plagiarism.",
     "Each paper will be reviewed by at least two independent reviewers.",
     "Acceptance based on originality, quality, relevance, and clarity.",
     "Accepted papers must be registered and presented for inclusion."
  ];

  const instructions = [
    "Submit only original, unpublished work.",
    "At least one author must register for the conference.",
    "Non-presented papers will not be in the proceedings.",
    "Manuscripts must comply with IEEE formatting."
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
          <div className="max-w-xl md:text-right">
             <p className="text-sm font-medium text-slate-600 leading-relaxed">
               The Organizing Committee of ICCE 2026 cordially invites researchers, academicians, industry professionals, and students to submit their original and unpublished research work to the International Conference for Convergence in Engineering (ICCE 2026).
             </p>
          </div>
        </div>
      </header>

      <main className="container-boxed pt-4 pb-12 px-6">
        
        {/* --- IMPORTANT DATES (Compact) --- */}
        <section className="mb-10">
           <div className="flex items-center gap-3 mb-4">
              <div className="p-1.5 bg-blue-50 rounded-lg">
                <Clock size={16} className="text-ieee-blue" />
              </div>
              <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Submission Deadlines</h2>
              <div className="h-px flex-1 bg-slate-100"></div>
           </div>
           <div className="flex flex-col md:flex-row justify-between gap-3 bg-slate-50/50 p-5 rounded-3xl border border-slate-50 shadow-sm">
              <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                 <span className="text-[9px] font-black text-ieee-blue uppercase tracking-widest">Submission Deadline</span>
                 <p className="text-sm font-black text-[#191961]">July 15, 2026 (Firm)</p>
              </div>
              <div className="hidden md:block w-px h-8 bg-slate-200 self-center"></div>
              <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                 <span className="text-[9px] font-black text-ieee-blue uppercase tracking-widest">Notification of Acceptance</span>
                 <p className="text-sm font-black text-[#191961]">August 31, 2026</p>
              </div>
              <div className="hidden md:block w-px h-8 bg-slate-200 self-center"></div>
              <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
                 <span className="text-[9px] font-black text-ieee-blue uppercase tracking-widest">Camera Ready Submission</span>
                 <p className="text-sm font-black text-[#191961]">September 10, 2026</p>
              </div>
           </div>
        </section>

        {/* --- CONTENT GRID --- */}
        <div className="flex flex-col lg:flex-row gap-10 mb-10">
           
           {/* LEFT COLUMN */}
           <div className="flex-grow lg:max-w-[68%] space-y-8">
              {/* Submission Portal Section */}
              <section>
                <div className="flex items-center gap-4 mb-6">
                   <h2 className="text-lg font-black text-icce-blue uppercase tracking-tight">Submission System</h2>
                   <div className="h-px flex-1 bg-slate-100"></div>
                </div>
                
                <motion.div 
                   initial={{ opacity: 0, y: 10 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="p-8 rounded-3xl border border-slate-100 bg-slate-50/30 relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-ieee-blue/5 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
                  <div className="space-y-6">
                    <p className="text-sm font-medium text-slate-600 leading-relaxed italic text-justify">
                      Authors must submit their manuscripts electronically through the Microsoft CMT (Conference Management Toolkit) online submission system. Submissions sent via email will not be accepted.
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                      <a 
                        href="https://cmt3.research.microsoft.com/ICCE2026" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-3.5 bg-ieee-blue text-white font-black uppercase tracking-widest text-[10px] rounded-full hover:bg-[#191961] transition-all shadow-lg hover:shadow-ieee-blue/20"
                      >
                         📌 Paper Submission Link <ExternalLink className="ml-2" size={14} />
                      </a>
                    </div>

                    {/* Review Policy & Support Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 pt-8 border-t border-slate-100">
                        {/* Review Policy */}
                        <div className="bg-[#191961] p-5 rounded-2xl text-white shadow-md relative overflow-hidden">
                            <div className="flex items-center gap-2 mb-3">
                                <ShieldCheck size={16} className="text-yellow-400" />
                                <h3 className="text-[11px] font-black uppercase tracking-tight">Review Process</h3>
                            </div>
                            <ul className="space-y-1.5">
                                {reviewPolicies.map((policy, i) => (
                                    <li key={i} className="flex items-start gap-2 text-[10px] font-bold text-slate-300">
                                        <ArrowRightCircle size={10} className="text-yellow-400 shrink-0 mt-0.5" />
                                        <span className="leading-tight">{policy}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Submission Support */}
                        <div className="bg-slate-900 p-5 rounded-2xl text-white shadow-md">
                            <div className="flex items-center gap-2 mb-3">
                                <Mail size={16} className="text-yellow-400" />
                                <h3 className="text-[11px] font-black uppercase tracking-tight">Submission Support</h3>
                            </div>
                            <div className="space-y-2">
                                <div className="flex flex-col">
                                    <span className="text-[9px] uppercase text-slate-500 font-black tracking-widest">Email</span>
                                    <a href="mailto:icce2026@nsec.ac.in" className="text-[11px] font-black text-yellow-400 hover:text-white transition-colors">icce2026@nsec.ac.in</a>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[9px] uppercase text-slate-500 font-black tracking-widest">Phone</span>
                                    <a href="tel:+919831817307" className="text-[11px] font-black text-white hover:text-yellow-400 transition-colors">+91 9831817307</a>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </motion.div>
              </section>
           </div>

           {/* RIGHT COLUMN (Sidebar) */}
           <div className="lg:w-[32%] space-y-4">
              {/* Important Instructions */}
              <section className="p-6 border border-slate-100 rounded-3xl bg-slate-50/30">
                 <div className="flex items-center gap-2 mb-4 text-[#191961]">
                    <Info size={18} className="text-yellow-600" />
                    <h3 className="text-sm font-black uppercase tracking-tight">Important Instructions</h3>
                 </div>
                 <div className="space-y-4">
                    {instructions.map((step, i) => (
                      <div key={i} className="flex gap-3 items-start group">
                         <div className="w-5 h-5 rounded-full bg-blue-50 text-ieee-blue flex items-center justify-center shrink-0 text-[10px] font-black group-hover:bg-ieee-blue group-hover:text-white transition-colors">
                            {i+1}
                         </div>
                         <p className="text-[11px] font-bold text-slate-600 leading-tight pt-0.5">{step}</p>
                      </div>
                    ))}
                 </div>
              </section>

              {/* Publication Notice */}
              <section className="p-6 rounded-3xl bg-blue-50/50 border border-blue-100 space-y-4">
                <div className="flex items-center gap-2 text-ieee-blue">
                   <ShieldCheck size={18} />
                   <h3 className="text-xs font-black uppercase tracking-tight">Publication</h3>
                </div>
                <p className="text-[10px] font-bold text-slate-600 leading-relaxed italic">
                   All submitted papers will undergo a rigorous peer-review process. Selected high-quality accepted papers may be submitted for possible publication in the <strong>IEEE Xplore Digital Library</strong>, subject to meeting the scope and quality requirements of IEEE.
                </p>
                <div className="bg-white/50 p-2 rounded-lg border border-ieee-blue/10">
                   <p className="text-[9px] font-black text-ieee-blue uppercase tracking-tighter">IEEE approval is under process / subject to final confirmation.</p>
                </div>
              </section>
           </div>
        </div>

        {/* Paper Preparation Guidelines Section - Moved Full Width */}
        <section className="mt-12">
            <div className="flex items-center gap-4 mb-6">
                <h2 className="text-lg font-black text-icce-blue uppercase tracking-tight">Paper Preparation Guidelines</h2>
                <div className="h-px flex-1 bg-slate-100"></div>
            </div>
            
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm mb-6">
                <p className="text-sm font-medium text-slate-600 leading-relaxed">
                    Authors are requested to prepare their manuscripts following the standard IEEE conference format. Papers must be written in English and should typically be <strong>4–6 pages</strong>, including figures, tables, and references.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {resources.map((res) => (
                    <motion.div 
                    key={res.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-5 rounded-2xl border border-slate-100 bg-white shadow-sm hover:border-ieee-blue/20 hover:shadow-md transition-all flex items-start gap-4"
                    >
                    <div className="w-10 h-10 bg-blue-50 text-ieee-blue rounded-xl flex items-center justify-center shrink-0">
                        <FileText size={20} />
                    </div>
                    <div className="space-y-1 flex-1">
                        <h3 className="text-[12px] font-black text-[#191961] uppercase tracking-tight leading-tight">
                            {res.title}
                        </h3>
                        <p className="text-[10px] font-medium text-slate-500 leading-snug">
                            {res.description}
                        </p>
                        <a href={res.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-[9px] font-black text-ieee-blue uppercase tracking-widest mt-2 hover:translate-x-1 transition-transform">
                            Template Link <ExternalLink size={10} className="ml-1" />
                        </a>
                    </div>
                    </motion.div>
                ))}
            </div>
        </section>

      </main>
    </div>
  );
};

export default Submission;
