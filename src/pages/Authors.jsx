import React from 'react';
import { Download, ExternalLink, Calendar, CheckCircle2, ChevronRight } from 'lucide-react';

const PageHero = ({ title, subtitle }) => (
  <section className="bg-[#0a0a2a] py-20 relative overflow-hidden text-center md:text-left">
     <div className="absolute top-0 right-0 w-1/4 h-full bg-ieee-blue/5 blur-3xl"></div>
     <div className="container-boxed px-6 relative z-10">
        <div className="max-w-4xl space-y-4">
           <span className="text-ieee-blue font-black uppercase tracking-[0.4em] text-[10px]">Author Center</span>
           <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none">{title}</h1>
           <div className="w-16 h-1 bg-ieee-blue mx-auto md:mx-0"></div>
           <p className="text-gray-400 font-medium tracking-wide text-sm">{subtitle}</p>
        </div>
     </div>
  </section>
);

const tracksData = [
  {
    id: 'A',
    title: 'Computational Techniques and Informatics',
    topics: ["Artificial Intelligence", "Machine Learning", "Data Science", "Cloud Computing", "IoT", "Cybersecurity", "Bioinformatics", "Quantum Computing", "Generative AI"]
  },
  {
    id: 'B',
    title: 'Smart Electronics & Communication',
    topics: ["5G/6G", "Wireless Communication", "Antennas", "VLSI", "FPGA Design", "Robotics", "Signal Processing", "Terahertz Systems"]
  },
  {
    id: 'C',
    title: 'Electrical Infrastructure and Automation',
    topics: ["Power Electronics", "Smart Grid", "Electric Vehicles", "Renewable Energy", "Industrial Automation", "Fault Monitoring", "AC/DC Drives"]
  },
  {
    id: 'D',
    title: 'Interdisciplinary Science and Engineering',
    topics: ["Energy Technologies", "Smart Cities", "Sustainable Infrastructure", "Advanced Materials", "Structural Health Monitoring", "Additive Manufacturing"]
  }
];

const CallForPapers = () => (
  <div className="min-h-screen">
    <PageHero title="Call for Papers" subtitle="ICCE 2026 invites innovative research across four primary technical tracks." />
    <div className="container-boxed py-24 px-6">
       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {tracksData.map((track) => (
            <div key={track.id} className="boutique-card p-10 relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-full -z-10 group-hover:bg-blue-50 transition-colors"></div>
               <span className="text-4xl font-black text-slate-100 absolute top-4 right-8 select-none group-hover:text-ieee-blue/10 transition-colors">{track.id}</span>
               <h3 className="text-2xl font-black text-[#191961] mb-6 uppercase tracking-tight max-w-[80%]">Track {track.id}: <br/>{track.title}</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {track.topics.map((topic, i) => (
                    <div key={i} className="flex items-center text-xs font-bold text-gray-400 hover:text-ieee-blue transition-colors cursor-default">
                       <ChevronRight className="mr-1 text-ieee-blue" size={12} />
                       {topic}
                    </div>
                  ))}
               </div>
            </div>
          ))}
       </div>
       
       <div className="mt-20 bg-[#191961] rounded-[30px] p-12 text-center text-white space-y-6">
          <h2 className="text-3xl font-black uppercase tracking-tight">Probable Publication</h2>
          <p className="max-w-2xl mx-auto text-sm text-gray-400 font-medium leading-relaxed italic">
             "All accepted and presented papers will be submitted to the IEEE Xplore Digital Library for probable inclusion, subject to IEEE quality review and compliance with publication policies."
          </p>
          <div className="w-16 h-1 bg-ieee-blue mx-auto"></div>
       </div>
    </div>
  </div>
);

const ImportantDates = () => {
  const dates = [
    { event: 'Paper Submission Deadline', date: 'July 15, 2026', firm: true },
    { event: 'Notification of Acceptance', date: 'August 31, 2026' },
    { event: 'Camera Ready Submission', date: 'September 10, 2026' },
    { event: 'Early Bird Registration', date: 'Sept 1 – Sept 15, 2026' },
    { event: 'Conference Dates', date: 'Nov 19 – 21, 2026', primary: true },
  ];

  return (
    <div className="min-h-screen">
      <PageHero title="Important Dates" subtitle="Mark your calendar for the ICCE 2026 submission and registration cycle." />
      <div className="container-boxed py-24 px-6 max-w-5xl">
         <div className="space-y-6">
            {dates.map((item, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center justify-between p-8 rounded-2xl border-2 transition-all duration-300 ${item.primary ? 'bg-[#191961] border-[#191961] text-white shadow-xl scale-105' : 'bg-white border-slate-50 hover:border-ieee-blue shadow-sm'}`}>
                 <div className="flex flex-col text-center md:text-left mb-4 md:mb-0">
                    <span className={`text-[10px] font-black uppercase tracking-[0.3em] mb-1 ${item.primary ? 'text-ieee-blue' : 'text-gray-400'}`}>{item.event}</span>
                    <h3 className={`text-2xl font-black uppercase tracking-tight ${item.primary ? 'text-white' : 'text-[#191961]'}`}>{item.date}</h3>
                 </div>
                 {item.firm && (
                    <div className="px-4 py-1 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full">Firm Deadline</div>
                 )}
                 {item.primary && (
                    <Calendar size={32} className="text-ieee-blue hidden md:block" />
                 )}
              </div>
            ))}
         </div>
         
         <div className="mt-20 p-12 bg-slate-50 rounded-[40px] text-center space-y-4">
            <h4 className="text-sm font-black text-gray-400 uppercase tracking-widest">Need a Reminder?</h4>
            <p className="text-lg font-bold text-[#191961]">Follow our social media channels for real-time deadline updates.</p>
         </div>
      </div>
    </div>
  );
};

export { CallForPapers, ImportantDates };
