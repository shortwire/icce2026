import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import { AdvisoryCommittee, OrganizingCommittee } from './pages/Committees'
import { CallForPapers, ImportantDates, PaperSubmission } from './pages/Authors'
import { SupportToStudents } from './pages/SupportToStudents'
import { Registration, Contact } from './pages/Registration'
import { RegistrationFees } from './pages/Registration_Fees'
import Venue from './pages/Venue'
import ComingSoon from './pages/ComingSoon'

// Generic Page Hero Component
const PageHero = ({ title, subtitle }) => (
  <section className="bg-[#0a0a2a] py-20 relative overflow-hidden text-center md:text-left">
     <div className="absolute top-0 right-0 w-1/4 h-full bg-ieee-blue/5 blur-3xl"></div>
     <div className="container-boxed px-6 relative z-10">
        <div className="max-w-4xl space-y-4">
           <span className="text-ieee-blue font-black uppercase tracking-[0.4em] text-[10px]">ICCE 2026</span>
           <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none">{title}</h1>
           <div className="w-16 h-1 bg-ieee-blue mx-auto md:mx-0"></div>
           <p className="text-gray-400 font-medium tracking-wide text-sm">{subtitle}</p>
        </div>
     </div>
  </section>
);

const About = () => (
  <div className="min-h-screen">
    <PageHero 
      title="About ICCE 2026" 
      subtitle="The 2nd International Conference for Convergence in Engineering." 
    />
    <div className="container-boxed py-24 px-8 grid grid-cols-1 lg:grid-cols-3 gap-20">
       <div className="lg:col-span-2 space-y-12">
          <div className="prose prose-lg max-w-none text-gray-500 leading-relaxed text-justify italic">
             <p>
                Netaji Subhash Engineering College (NSEC), in collaboration with the IEEE AP-MTT Kolkata Chapter and with Technical Co-Sponsorship from the IEEE Kolkata Section, is proud to organize the 2nd International Conference for Convergence in Engineering (ICCE 2026).
             </p>
          </div>
          <div className="space-y-8">
             <h2 className="text-2xl font-black text-[#191961] mb-8 uppercase tracking-widest border-l-4 border-ieee-blue pl-4">
                Conference Objectives
             </h2>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  "Provide a global platform for interdisciplinary research in emerging engineering domains.",
                  "Promote high-quality, peer-reviewed research aligned with IEEE standards.",
                  "Foster academia–industry collaboration and innovation.",
                  "Encourage sustainable and socially responsible technological development.",
                  "Support students and early-career researchers through knowledge exchange and networking opportunities."
                ].map((obj, i) => (
                  <div key={i} className="boutique-card p-6 border-l-4 border-ieee-blue flex items-start gap-4">
                     <span className="text-2xl font-black text-slate-100">{i+1}</span>
                     <p className="text-sm font-bold text-[#191961] leading-tight">{obj}</p>
                  </div>
                ))}
             </div>
          </div>
       </div>
       <div className="lg:col-span-1 space-y-8">
          <div className="bg-[#191961] p-10 rounded-[30px] text-white space-y-6 shadow-2xl">
             <h3 className="text-xl font-bold uppercase tracking-widest text-ieee-blue">Venue</h3>
             <p className="text-sm text-gray-400 leading-relaxed font-medium">
                Techno City, Panchpota, Garia,<br/>
                Kolkata, West Bengal, India. PIN: 700 152
             </p>
             <div className="h-px bg-white/10"></div>
             <h3 className="text-xl font-bold uppercase tracking-widest text-ieee-blue">Dates</h3>
             <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">19 - 21 November 2026</p>
          </div>
       </div>
    </div>
  </div>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#F9FAFB] font-sans selection:bg-ieee-blue selection:text-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<SupportToStudents />} />
            <Route path="/about" element={<ComingSoon />} />
            <Route path="/advisory" element={<ComingSoon />} />
            <Route path="/organising" element={<ComingSoon />} />
            <Route path="/cfp" element={<ComingSoon />} />
            <Route path="/topics" element={<ComingSoon />} />
            <Route path="/dates" element={<ComingSoon />} />
            <Route path="/submission" element={<ComingSoon />} />
            <Route path="/registration" element={<ComingSoon />} />
            <Route path="/fees" element={<RegistrationFees />} />
            <Route path="/venue" element={<ComingSoon />} />
            <Route path="/contact" element={<ComingSoon />} />
            <Route path="/about-nsec" element={<ComingSoon />} />
            <Route path="/about-kolkata" element={<ComingSoon />} />
            <Route path="/tpc" element={<ComingSoon />} />
            <Route path="/publication" element={<ComingSoon />} />
            <Route path="/other-committees" element={<ComingSoon />} />
            <Route path="/template" element={<ComingSoon />} />
            <Route path="/guidelines" element={<ComingSoon />} />
            <Route path="/program" element={<ComingSoon />} />
            <Route path="/keynotes" element={<ComingSoon />} />
            <Route path="/special-sessions" element={<ComingSoon />} />
            <Route path="/workshop" element={<ComingSoon />} />
            <Route path="/tutorials" element={<ComingSoon />} />
            <Route path="/imp-info" element={<ComingSoon />} />
            <Route path="/accommodation" element={<ComingSoon />} />
            <Route path="/visa" element={<ComingSoon />} />
            <Route path="/ieee" element={<ComingSoon />} />
            <Route path="/partners" element={<ComingSoon />} />
            <Route path="/sponsors" element={<ComingSoon />} />
            <Route path="/sponsor-opp" element={<ComingSoon />} />
            <Route path="*" element={<ComingSoon />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
