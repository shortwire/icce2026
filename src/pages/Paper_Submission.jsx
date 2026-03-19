import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  ExternalLink,
  Download,
  ArrowRightCircle,
  FileText,
  ShieldCheck,
  Info,
  ChevronRight,
  ClipboardCheck,
  FileUp,
  Monitor
} from 'lucide-react';

const Submission = () => {
  const instructions = [
    "Submit only original, unpublished work that is not under consideration elsewhere.",
    "At least one author of each accepted paper must register for the conference.",
    "Papers not presented at the conference will not be included in the proceedings.",
    "Authors should ensure that their manuscripts comply with IEEE formatting requirements."
  ];

  const reviewPolicies = [
    "All submissions will be checked for plagiarism.",
    "Each paper will be reviewed by at least two independent reviewers.",
    "Acceptance will be based on originality, technical quality, relevance, and clarity.",
    "Authors of accepted papers must register and present their work at the conference for inclusion in the proceedings."
  ];

  const submissionSteps = [
    {
      step: "Step 1",
      title: "Prepare Your Manuscript",
      items: [
        "Prepare your paper using the IEEE Conference Template (Word).",
        "The manuscript should be written in English.",
        "The paper length should be maximum 6 pages, including figures, tables, and references.",
        "Ensure that the paper follows IEEE formatting guidelines."
      ]
    },
    {
      step: "Step 2",
      title: "Convert the Paper to PDF",
      items: [
        "Convert the manuscript into PDF format.",
        "Ensure that all fonts are embedded.",
        "Check that the PDF file is clear and properly formatted."
      ]
    },
    {
      step: "Step 3",
      title: "Submission through Microsoft CMT",
      items: [
        "All papers must be submitted through the Microsoft Conference Management Toolkit (CMT).",
        "Authors are required to create an account/login to the CMT submission system.",
        "Use a valid email ID for registration and communication.",
        "Access the ICCE 2026 submission portal and proceed with the paper submission process."
      ]
    },
    {
      step: "Step 4",
      title: "Start a New Paper Submission",
      items: [
        "Click on \"New Submission\".",
        "Enter the required information:",
        "Paper title",
        "Author names and affiliations",
        "Corresponding author details",
        "Abstract and keywords",
        "Selected conference track"
      ]
    },
    {
      step: "Step 5",
      title: "Upload the Manuscript",
      items: [
        "Upload the PDF version of your paper.",
        "Ensure that the uploaded file matches the information entered in the submission form.",
        "Verify that the file size and format meet the portal requirements."
      ]
    },
    {
      step: "Step 6",
      title: "Confirm Submission",
      items: [
        "Review all entered details carefully.",
        "Submit the paper.",
        "After submission, you will receive a Paper ID and confirmation email."
      ]
    },
    {
      step: "Step 7",
      title: "Track Your Submission",
      items: [
        "Authors can log in to the submission system anytime to:",
        "Check the review status",
        "Respond to reviewer comments",
        "Upload revised versions (if required)"
      ]
    },
    {
      step: "Step 8",
      title: "Camera-Ready Submission (For Accepted Papers)",
      highlight: "If your paper is accepted:",
      items: [
        "Revise the paper according to reviewer comments.",
        "Generate an IEEE-compliant PDF using PDF eXpress.",
        "Upload the final camera-ready paper.",
        "Complete the IEEE copyright form.",
        "Ensure at least one author registers for the conference."
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
                Paper <br/>
                <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px #191961' }}>Submission</span>
             </h1>
          </div>
          <div className="max-w-3xl md:text-right">
             <p className="text-[10px] font-black uppercase tracking-[0.3em] text-ieee-blue opacity-50 mb-2">Submission Standards</p>
             <p className="text-sm font-bold text-slate-500 leading-tight">The ICCE 2026 Organizing Committee invites original research contributions for submission to the International Conference for Convergence in Engineering.</p>
          </div>
        </div>
      </header>

      <main className="container-boxed pt-2 pb-10 px-6">
        
        <div className="flex flex-col lg:flex-row gap-8">
           
           {/* LEFT COLUMN */}
           <div className="flex-grow lg:max-w-[65%] space-y-8">
              
              {/* Innovative & Professional Submission Portal Section */}
              <section className="relative">
                 <div className="absolute inset-0 bg-gradient-to-r from-icce-blue to-ieee-blue rounded-[2.5rem] transform -rotate-1 opacity-10 blur-xl group-hover:rotate-0 transition-transform duration-700"></div>
                 <div className="relative p-1 rounded-[2.5rem] bg-gradient-to-br from-slate-100 via-white to-slate-200 shadow-2xl overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-ieee-blue/5 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-yellow-400/10 transition-colors duration-1000"></div>
                    
                    <div className="bg-white rounded-[2.3rem] p-8 md:p-10 relative z-10">
                       <div className="flex flex-col xl:flex-row items-stretch justify-between gap-10">
                          
                          {/* Left Segment: Portal Branding */}
                          <div className="flex-1 space-y-6">
                             <div className="flex items-center gap-5">
                                <div className="w-16 h-16 bg-[#191961] rounded-2xl flex items-center justify-center shadow-lg transform -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                                   <Monitor size={32} className="text-yellow-400" />
                                </div>
                                <div>
                                   <h2 className="text-3xl font-black uppercase tracking-tighter text-icce-blue leading-tight mb-1">
                                      Submission <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1px #191961' }}>Portal</span>
                                   </h2>
                                   <div className="flex items-center gap-2">
                                      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                      <p className="text-[11px] font-black text-slate-500 uppercase tracking-[0.2em]">Microsoft CMT Live System</p>
                                   </div>
                                </div>
                             </div>
                             
                             <p className="text-sm font-bold text-slate-600 leading-relaxed max-w-lg">
                                All manuscripts must be submitted electronically. Please ensure your paper follows the template before final submission.
                             </p>

                             <div className="pt-2">
                                <span className="text-[10px] font-black text-red-500 uppercase tracking-widest bg-red-50 px-4 py-2 rounded-lg border border-red-100 shadow-sm inline-block">
                                   Submissions sent via email will not be accepted.
                                </span>
                             </div>
                          </div>

                          {/* Right Segment: Action Hub */}
                          <div className="xl:w-1/3 flex flex-col justify-between gap-6 border-l border-slate-100 pl-0 xl:pl-10">
                             
                             <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                   <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-ieee-blue shrink-0">
                                      <FileUp size={16} />
                                   </div>
                                   <div className="flex flex-col">
                                      <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Author Resources</span>
                                      <a 
                                        href="https://www.ieee.org/conferences/publishing/templates.html" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-xs font-black text-icce-blue hover:text-yellow-600 flex items-center gap-2 transition-colors group/tpl"
                                      >
                                         Download IEEE Template <Download size={12} className="group-hover/tpl:translate-y-0.5 transition-transform" />
                                      </a>
                                   </div>
                                </div>
                             </div>

                             <div className="pt-4">
                                <a 
                                  href="https://cmt3.research.microsoft.com/ICCE2026" 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="w-full py-5 bg-[#191961] text-white rounded-[1.5rem] font-black uppercase tracking-[0.2em] text-xs hover:bg-icce-blue hover:shadow-2xl transition-all flex items-center justify-center gap-4 group/btn relative overflow-hidden"
                                >
                                  <div className="absolute inset-0 bg-yellow-400 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                                  <span className="relative z-10 group-hover/btn:text-icce-blue transition-colors duration-500">Access Portal</span>
                                  <ExternalLink size={16} className="relative z-10 group-hover/btn:text-icce-blue transition-colors duration-500 group-hover/btn:translate-x-1 transition-transform" />
                                </a>
                             </div>

                          </div>
                       </div>
                    </div>
                 </div>
              </section>

              {/* Submission guidelines for Authors (Steps) */}
              <section>
                 <div className="flex items-center gap-4 mb-6">
                    <h2 className="text-base font-black text-icce-blue uppercase tracking-tight">Submission guidelines for Authors</h2>
                    <div className="h-px flex-1 bg-slate-100"></div>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    {submissionSteps.map((step, idx) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="relative pl-10 group"
                      >
                        {/* Step Number Circle */}
                        <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center z-10 group-hover:border-ieee-blue transition-colors">
                           <span className="text-[10px] font-black text-icce-blue">{idx + 1}</span>
                        </div>
                        <div className="space-y-2">
                           <h3 className="text-[11px] font-black text-[#191961] uppercase tracking-tight leading-tight">{step.step}: {step.title}</h3>
                           {step.highlight && <p className="text-[10px] font-black text-icce-blue italic mb-1">{step.highlight}</p>}
                           <ul className="space-y-1">
                              {step.items.map((item, i) => (
                                <li key={i} className="flex items-start gap-2 text-[10px] font-bold text-gray-500 leading-tight">
                                   <div className="w-1 h-1 rounded-full bg-yellow-400 shrink-0 mt-1.5"></div>
                                   <span>{item}</span>
                                </li>
                              ))}
                           </ul>
                        </div>
                      </motion.div>
                    ))}
                 </div>

                 <div className="mt-8 p-6 rounded-2xl bg-white border-2 border-dashed border-slate-200">
                    <div className="flex items-start gap-3">
                       <ClipboardCheck size={18} className="text-ieee-blue mt-0.5" />
                       <div className="space-y-2">
                          <h4 className="text-xs font-black uppercase tracking-widest text-icce-blue">Important Note</h4>
                          <p className="text-[10px] font-bold text-slate-600 leading-relaxed text-justify">
                            Only accepted and presented papers will be submitted to the <strong>IEEE Xplore Digital Library</strong> for probable inclusion, subject to IEEE quality review and compliance with IEEE publication policies.
                          </p>
                       </div>
                    </div>
                 </div>
              </section>
           </div>

           {/* RIGHT COLUMN (Sidebar) */}
           <div className="lg:w-[35%] space-y-6">
              
              {/* IMPORTANT INSTRUCTIONS FOR AUTHORS (Moved here) */}
              <section className="p-6 border border-slate-100 rounded-[30px] bg-slate-50 shadow-sm">
                 <div className="flex items-center gap-3 mb-4">
                    <Info size={18} className="text-ieee-blue" />
                    <h2 className="text-xs font-black text-icce-blue uppercase tracking-tight">Important Instructions</h2>
                 </div>
                 <div className="space-y-3">
                    {instructions.map((inst, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-slate-100 shadow-sm">
                         <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                            <ArrowRightCircle size={12} className="text-ieee-blue" />
                         </div>
                         <p className="text-[10px] font-bold text-slate-600 leading-tight">{inst}</p>
                      </div>
                    ))}
                 </div>
              </section>

              {/* PUBLICATION (Restored Verbatim) */}
              <section className="p-6 border border-slate-100 rounded-[30px] bg-slate-50 shadow-sm">
                 <div className="flex items-center gap-2 mb-4 text-[#191961]">
                    <FileText size={18} className="text-yellow-600" />
                    <h3 className="text-xs font-black uppercase tracking-tight">Publication</h3>
                 </div>
                 <div className="space-y-4">
                    <p className="text-[11px] font-bold text-slate-600 leading-relaxed text-justify italic">
                      All submitted papers will undergo a rigorous peer-review process by the Technical Program Committee and domain experts. 
                    </p>
                    <p className="text-[11px] font-bold text-slate-600 leading-relaxed text-justify">
                      Selected high-quality accepted papers may be submitted for possible publication in the <strong>IEEE Xplore Digital Library</strong>, subject to meeting the scope and quality requirements of IEEE.
                    </p>
                    <div className="bg-white p-4 rounded-2xl border border-ieee-blue/10 shadow-sm">
                       <p className="text-[10px] font-black text-ieee-blue uppercase tracking-tight leading-tight text-center">
                         IEEE APPROVAL IS UNDER PROCESS / SUBJECT TO FINAL CONFIRMATION.
                       </p>
                    </div>
                 </div>
              </section>

              {/* Peer Review Policy (Verbatim) */}
              <section className="bg-icce-blue p-6 rounded-[30px] border border-white/10 shadow-xl text-white">
                 <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                    <ShieldCheck size={20} className="text-yellow-400" />
                    <h3 className="text-sm font-black uppercase tracking-tight">REVIEW PROCESS</h3>
                 </div>
                 <ul className="space-y-6">
                    {reviewPolicies.map((policy, i) => (
                      <li key={i} className="flex items-start gap-4 group">
                         <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0 mt-1.5"></div>
                         <span className="text-[11px] font-bold text-slate-200 leading-relaxed">{policy}</span>
                      </li>
                    ))}
                 </ul>
              </section>

              {/* Submission Support (Compact) */}
              <section className="bg-slate-900 p-6 rounded-[30px] text-white relative overflow-hidden">
                 <div className="relative z-10">
                    <h3 className="text-xs font-black uppercase tracking-tight mb-4 text-blue-400">Submission Support</h3>
                    <div className="space-y-3">
                       <div className="flex items-center gap-3">
                          <Mail size={14} className="text-slate-400" />
                          <a href="mailto:icce2026@nsec.ac.in" className="text-[10px] font-bold hover:text-yellow-400 transition-colors">icce2026@nsec.ac.in</a>
                       </div>
                    </div>
                 </div>
              </section>
           </div>
        </div>

        {/* Platform Acknowledgment */}
        <section className="mt-4 pt-6 border-t border-slate-50">
           <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-8 rounded-full bg-yellow-400/10 flex items-center justify-center border border-yellow-400/20 shadow-sm">
                 <Info size={14} className="text-yellow-600" />
              </div>
              <h2 className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400">ACKNOWLEDGMENT — MICROSOFT CMT</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-slate-100 to-transparent"></div>
           </div>
           
           <div className="relative p-6 md:p-8 rounded-[2rem] bg-gradient-to-br from-yellow-50/50 via-white to-slate-50 border-l-4 border-yellow-400 shadow-xl overflow-hidden group">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-yellow-400/5 rounded-full blur-3xl transition-transform duration-1000 group-hover:scale-110"></div>
              
              <div className="relative z-10 space-y-4">
                 <p className="text-[12px] font-medium text-slate-500 leading-relaxed text-justify italic italic">
                   The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
                 </p>
                 <div className="pt-3 border-t border-yellow-100">
                    <p className="text-[12px] font-black text-[#191961] leading-relaxed uppercase tracking-tight">
                       The organizers gratefully acknowledge the support provided by Microsoft through the Microsoft Conference Management Toolkit (CMT) service for managing the paper submission and review process.
                    </p>
                 </div>
              </div>
           </div>
        </section>
      </main>
    </div>
  );
};

export default Submission;