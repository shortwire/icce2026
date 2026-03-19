import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download, ExternalLink, Calendar, CheckCircle2, ChevronRight, ArrowRight, FileUp, Trophy, Zap, Globe, Users, Upload } from 'lucide-react';

const tracksData = [
  { 
    id: '01', 
    title: 'Computational Techniques & Informatics', 
    category: 'Track A',
    summary: 'Focusing on AI, Data Science, and advanced computing paradigms shaping digital transformation.',
    details: [
      'Artificial Intelligence, Machine Learning, Deep Learning, Soft Computing, Pattern Recognition, Artificial Neural Networks, Evolutionary Computing, Swarm Intelligence, Fuzzy Logic, Natural Computing, Data Science, Image processing, Big Data Analytics, Big Data Analysis, Data Mining, Web Mining.',
      'Text Mining, Social Media Mining, Business Intelligence, Data Fusion, Data Warehousing and Mining, Explainable AI, Generative AI, Foundation Models, Federated Learning, Multimodal AI, Computer Vision, Natural Language Processing, Brain Modelling, Cognitive Computing, Smart Systems, Human–Computer Interaction.',
      'High Performance Computing, Distributed Computing, Cluster Computing, Cloud Computing, Quantum Computing, Edge Computing, Ubiquitous Computing, Serverless Computing, Fog Computing, Green Computing, Software Defined Networking, Digital Twins, Internet of Things.',
      'Cyber Physical Systems & security, IoT Security, Edge AI, Mobile Computing, Sensor Networks, Autonomous and Intelligent Systems, Cryptography, Network Security, Information Security, Cybersecurity, Convergence in Digital Security, Blockchain Technology.',
      'Bioinformatics, Computational Biology, Computational Genomics, Biomedical Informatics, Computational Neuroscience, Software Engineering, Advanced Computing, Computing Technologies, Innovation and Technology Integration, Digital Transformation.'
    ]
  },
  { 
    id: '02', 
    title: 'Smart Electronics & Communication', 
    category: 'Track B',
    summary: 'Next-gen wireless communication and integrated electronic systems for a connected world.',
    details: [
      '5G/6G Communication, Wireless & Mobile Communication, Antennas & Propagation, Smart Antenna Systems, MIMO Systems, RF & Microwave, RADAR, Signal Processing, Image & Video Processing, Biomedical Image & Signal Processing.',
      'Medical Electronics, Embedded Systems, VLSI & Microelectronics, FPGA Design, MEMS and NEMS, IoT, Cognitive Radio, Error Control and Coding, Communication & Security, Computer Networks, Brain–Computer Interfacing, Bioinspired Systems & Instrumentation.',
      'Biomedical Engineering, Biomedical Control, Process Instrumentation, Process Control, Nonlinear Dynamic Modeling, Healthcare Technologies, Optoelectronics, Solid State Devices & Nanotechnology, Analog Electronic Circuits, Robotics & Automation.',
      'Visible Light Communications, Terahertz & Millimeter Wave Systems, Reconfigurable Intelligent Surfaces, Software Defined Radio, Optical Wireless Communications, Edge AI for Sensors, Wearable & Implantable Electronics, Wireless Body Area Networks.',
      'Lab on Chip & Point of Care Diagnostics, Digital Health & Telemedicine, Biomaterials & Tissue Engineering.'
    ]
  },
  { 
    id: '03', 
    title: 'Electrical Infrastructure & Automation', 
    category: 'Track C',
    summary: 'Advancing power systems, renewable energy, and smart automation technologies.',
    details: [
      'Power Electronics, Electric Vehicles and Charging Infrastructure, Smart Grid, Micro Grid, Renewable and Green Energy Systems, Energy Storage Systems, Power Quality Issues and Solutions, Power Controllers and Conversion Topologies.',
      'AC/DC Drives, Industrial Motor Drives, Switchgear and Protection, Electrical Machines and Retrofitting, Intelligent and Nonlinear Control, Applications of Control Theory, Process Control and Automation, Industrial Measurement Techniques.',
      'Fault Estimation and Monitoring using AI/ML, Big Data and AI in Energy Conversion, Sustainable and Green Automation Technologies, Integration of Multiple Energy Sources, Soft Switching Techniques, Electromagnetic Device Design.',
      'Aerospace and Shipboard Energy Conversion Systems, Factory Automation, Remote Sensing and GIS, Fuzzy Neural Systems.'
    ]
  },
  { 
    id: '04', 
    title: 'Interdisciplinary Science & Engineering', 
    category: 'Track D',
    summary: 'Bridging engineering with sustainability, management, and humanitarian technology.',
    details: [
      'Energy Technologies, Climate Change Mitigation, Smart Cities, Sustainable Infrastructure, Green Building Technology, Advanced Materials, Structural Health Monitoring, Additive Manufacturing.',
      'Mechatronics, Applied Science and Mathematics, Environmental Engineering, Computational Materials Science, Bio Inspired Engineering, Autonomous Systems, Smart Manufacturing, Human–Environment Interaction.',
      'Resilient Infrastructure Systems, Sustainable Engineering & Project Management, Humanitarian Technology Management, Ethical Technology Deployment, Program Management and Innovation.'
    ]
  }
];

const TrackCard = ({ track, i }) => {
  const [activeDetail, setActiveDetail] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveDetail((prev) => (prev + 1) % track.details.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [track.details.length]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      className="group relative h-full"
    >
       {/* Abstract Shape Behind Tile */}
       <div className={`absolute -inset-1 bg-gradient-to-tr ${i % 2 === 0 ? 'from-icce-blue/5 to-yellow-400/5' : 'from-yellow-400/5 to-ieee-blue/5'} rounded-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl`}></div>
       
          <div className="relative boutique-card p-5 md:p-7 flex flex-col h-full bg-white border border-slate-200 shadow-md hover:border-yellow-400/30 hover:shadow-2xl transition-all duration-700 overflow-hidden">
          {/* Corner Accent (Yellow) */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400/10 -mr-12 -mt-12 rounded-full blur-2xl group-hover:bg-yellow-400/30 transition-all duration-700"></div>
          
          <div className="flex items-center space-x-3 mb-4">
             <Link to={`/topics#track-${track.category.split(' ')[1]}`} className="relative group/track">
                <div className="absolute -inset-2 bg-ieee-blue/5 rounded-lg opacity-0 group-hover/track:opacity-100 transition-opacity"></div>
                <span className="relative z-10 text-[12px] font-black uppercase tracking-[0.3em] text-ieee-blue bg-ieee-blue/5 px-3 py-1 rounded-md border border-ieee-blue/10 group-hover/track:bg-ieee-blue group-hover/track:text-white transition-all duration-300">
                  {track.category}
                </span>
             </Link>
             <div className="h-px flex-grow bg-slate-100"></div>
          </div>
          
          <h3 className="text-xl md:text-2xl font-black text-icce-blue uppercase leading-[1.1] tracking-tighter mb-2 group-hover:translate-x-2 transition-transform duration-500">
             {track.title}
          </h3>

          <p className="text-[10px] font-black text-icce-blue/60 uppercase tracking-widest mb-3 border-l-2 border-yellow-400 pl-3 origin-left skew-x-[-15deg]">
             {track.summary}
          </p>
          
          {/* Cycling Details Area */}
          <div 
            onClick={() => setActiveDetail((prev) => (prev + 1) % track.details.length)}
            className="relative flex-grow mb-3 bg-[#eff1f8]/80 p-5 border-l-4 border-yellow-400/70 rounded-[60px_20px_60px_20px] overflow-hidden shadow-inner group-hover:shadow-lg transition-all duration-700 cursor-pointer active:scale-[0.98]"
          >
            {/* Unique Abstract Decoration */}
            <div className="absolute -left-10 -top-10 w-32 h-32 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-icce-blue/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-yellow-400/10 transition-all duration-1000"></div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeDetail}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.6 }}
                className="text-[11px] font-black text-slate-500 leading-relaxed italic relative z-10"
              >
                {track.details[activeDetail]}
              </motion.div>
            </AnimatePresence>
            
            {/* Animated Micro-Indicators - Manual Control Enabled */}
            <div className="absolute bottom-4 right-8 flex items-center space-x-2 z-10">
              {track.details.map((_, dot) => (
                <button 
                  key={dot} 
                  onClick={() => setActiveDetail(dot)}
                  className={`rounded-full transition-all duration-500 outline-none ${activeDetail === dot ? 'h-0.5 w-4 bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.5)]' : 'h-0.5 w-0.5 bg-slate-600 hover:bg-icce-blue'}`}
                />
              ))}
            </div>
          </div>
          
          <div className="pt-2 border-t border-slate-50 flex items-center justify-end">
             <Link to={`/topics#track-${track.category.split(' ')[1]}`} className="inline-flex items-center text-[10px] font-black uppercase tracking-widest text-icce-blue hover:text-ieee-blue transition-all group/btn">
                Know More 
                <div className="ml-2 w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center group-hover/btn:bg-yellow-400 group-hover/btn:text-white transition-all">
                   <ArrowRight size={14} />
                </div>
             </Link>
          </div>
       </div>
    </motion.div>
  );
};

const CallForPapers = () => (
  <div className="min-h-screen bg-white relative overflow-hidden font-sans">
    {/* Background elements */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ieee-blue/[0.01] rounded-full blur-3xl pointer-events-none"></div>

    {/* --- HERO SECTION --- */}
    <header className="container-boxed pt-8 pb-6 px-6 relative z-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-50 pb-8">
        <div className="relative group">
           <h1 className="text-4xl md:text-5xl font-black text-icce-blue uppercase leading-none tracking-tighter">
              Call for <br/>
              <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px #191961' }}>Papers</span>
           </h1>
        </div>
        <div className="max-w-3xl md:text-right">
           <p className="text-[10px] font-black uppercase tracking-[0.3em] text-ieee-blue opacity-50 mb-2">Author Center</p>
           <p className="text-sm font-bold text-slate-500 leading-tight">
             ICCE 2026 invites innovative research across four primary technical tracks, encompassing the latest advancements in computational techniques, smart electronics, electrical infrastructure, and interdisciplinary engineering sciences.
           </p>
        </div>
      </div>
    </header>
    
    <div className="container-boxed pt-4 pb-12 px-6 relative z-10">
      {/* Introduction */}
      <div className="mb-12 space-y-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div className="flex items-center gap-4 flex-grow">
            <h2 className="text-lg font-black text-icce-blue uppercase tracking-tight">Introduction</h2>
            <div className="h-px flex-1 bg-slate-100"></div>
          </div>
          <a 
            href="/assets/docs/ICCE2026-Call for Paper.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#191961] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-ieee-blue transition-all group shadow-md"
          >
            <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
            Download CFP PDF
          </a>
        </div>
        <p className="text-sm font-bold text-slate-600 leading-relaxed text-justify">
          ICCE 2026 aims to bring together leading academicians, researchers, scientists, and industry professionals from across the globe to exchange knowledge and share research outcomes on recent advancements and emerging trends in science and technology. The conference will serve as a premier interdisciplinary forum for showcasing cutting-edge research, novel methodologies, and practical applications through keynote lectures, invited talks, tutorials, and interactive oral and poster presentations of peer-reviewed papers. This will strengthen academia–industry collaboration, advance knowledge sharing, and drive innovation in emerging technologies.
        </p>
      </div>

      {/* Info Boxes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {/* Important Dates Box */}
        <div className="bg-[#0a0a2a] p-6 rounded-[1.5rem] text-white border-b-4 border-ieee-blue shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-ieee-blue/20 rounded-bl-full group-hover:bg-ieee-blue/30 transition-all duration-500"></div>
          <div className="relative z-10">
            <h3 className="text-xl font-black uppercase tracking-tighter mb-4 group-hover:text-yellow-400 transition-colors">Important Dates</h3>
            <ul className="space-y-2 mb-6">
              <li className="flex justify-between items-center border-b border-white/5 pb-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Submission</span>
                <span className="text-xs font-black text-yellow-400">15 July 2026</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/5 pb-1">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Notification</span>
                <span className="text-xs font-black text-yellow-400">31 Aug 2026</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Early Bird</span>
                <span className="text-xs font-black text-white">15 Sept 2026</span>
              </li>
            </ul>
            <Link to="/dates" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-ieee-blue hover:text-yellow-400 transition-colors">
              Know more <ExternalLink size={12} />
            </Link>
          </div>
        </div>

        {/* Reduced Registration Fee Box */}
        <div className="bg-[#fcfdfd] p-6 rounded-[1.5rem] border border-slate-100 shadow-lg relative overflow-hidden group hover:border-yellow-200 transition-all duration-500">
          <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-50 rounded-bl-full group-hover:bg-yellow-100 transition-all duration-500"></div>
          <div className="relative z-10">
            <h3 className="text-xl font-black uppercase tracking-tighter text-[#191961] mb-3">Registration Fee</h3>
            <div className="bg-yellow-50 text-yellow-700 px-3 py-1 rounded-lg text-[9px] font-black uppercase tracking-widest inline-block mb-4">
              Reduced rates available
            </div>
            <p className="text-[11px] font-bold text-slate-500 leading-relaxed mb-6 max-w-xs">
              Significant discounts for students, IEEE members, and early-bird registrations.
            </p>
            <Link to="/registration" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#191961] hover:text-yellow-600 transition-colors">
              Know more <ExternalLink size={12} />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-lg font-black text-icce-blue uppercase tracking-tight">Conference Core Tracks</h2>
        <div className="h-px flex-1 bg-slate-100"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {tracksData.map((track, i) => (
          <TrackCard key={track.id} track={track} i={i} />
        ))}
      </div>

      {/* Probable Publication & Submission */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-50 border border-ieee-blue/10 rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-black text-[#191961] uppercase mb-3">Publication</h3>
            <p className="text-[11px] text-gray-600 font-bold leading-relaxed italic">
              "All accepted and presented papers will be submitted to the IEEE Xplore Digital Library for possible publication, subject to IEEE quality review and compliance with publication policies."
            </p>
          </div>

          <div className="bg-[#fffdf5] border border-yellow-100 rounded-xl p-6 shadow-sm group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-50 rounded-bl-full group-hover:bg-yellow-100 transition-colors duration-500"></div>
            <h3 className="text-lg font-black text-[#191961] uppercase mb-4 relative z-10">
              PAPER SUBMISSION
            </h3>
            <ul className="space-y-2 mb-6 relative z-10">
              <li className="flex items-start gap-2 text-[11px] font-bold text-gray-600">
                <ChevronRight size={14} className="text-yellow-600 flex-shrink-0 mt-0.5" />
                Page limit: 6 pages. Additional charges apply per page (Max: 2 Pages)
              </li>
              <li className="flex items-start gap-2 text-[11px] font-bold text-gray-600">
                <ChevronRight size={14} className="text-yellow-600 flex-shrink-0 mt-0.5" />
                Extended versions of selected high-quality papers will be invited for submission to reputed indexed Journals
              </li>
            </ul>
            <div className="flex flex-wrap items-center gap-6 relative z-10">
              <a 
                href="https://cmt3.research.microsoft.com/ICCE2026" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#191961] hover:text-yellow-600 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-yellow-50 flex items-center justify-center group-hover:bg-yellow-100 transition-colors">
                  <Upload size={14} className="text-yellow-600" />
                </div>
                Submission Portal
              </a>
              <Link to="/submission" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#191961] hover:text-yellow-600 transition-colors">
                Know more <ExternalLink size={12} />
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-[#191961] rounded-xl p-6 text-white shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400/10 rounded-bl-full group-hover:bg-yellow-400/20 transition-colors"></div>
          <h3 className="text-lg font-black uppercase mb-4 text-yellow-400 relative z-10">Conference Highlights</h3>
          <ul className="space-y-3 text-[11px] font-bold relative z-10">
            <li className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-ieee-blue" />
              Publication in IEEE Xplore Digital Library*
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-ieee-blue" />
              <Link to="/special-sessions" className="hover:text-yellow-400 transition-colors underline decoration-ieee-blue/30">Special Sessions for IEEE WIE/SIGHT/YP</Link>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-ieee-blue" />
              Industry-Academia Interactive Sessions
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-ieee-blue" />
              Best Paper Awards
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-ieee-blue" />
              <Link to="/fees" className="hover:text-yellow-400 transition-colors underline decoration-ieee-blue/30">IEEE Membership Drive</Link>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-ieee-blue" />
              Research & Innovation Showcase by Students
            </li>
          </ul>
        </div>
      </div>

      {/* Activities, Awards, Exhibition */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="space-y-6">
          <div className="bg-[#fffdf5] border border-yellow-100 rounded-xl p-5 shadow-sm">
            <h3 className="text-base font-black text-[#191961] uppercase mb-3 flex items-center justify-between">
              <Link to="/special-sessions" className="hover:text-ieee-blue transition-colors">WIE Activity</Link>
              <span className="h-0.5 w-16 bg-yellow-400/20"></span>
            </h3>
            <div className="text-[11px] text-gray-600 font-bold leading-relaxed italic">
              ICCE 2026 will host IEEE WIE sessions featuring women innovators, mentorship interactions, and opportunities to connect with the broader WIE community.
            </div>
          </div>
          <div className="bg-[#fffdf5] border border-yellow-100 rounded-xl p-5 shadow-sm">
            <h3 className="text-base font-black text-[#191961] uppercase mb-3 flex items-center justify-between">
              <Link to="/special-sessions" className="hover:text-ieee-blue transition-colors">SIGHT Activity</Link>
              <span className="h-0.5 w-16 bg-yellow-400/20"></span>
            </h3>
            <div className="text-[11px] text-gray-600 font-bold leading-relaxed italic">
              IEEE SIGHT sessions to showcase real-world impactful projects on humanitarian technologies and collaborate with researchers and community partners.
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-[#fffdf5] border border-yellow-100 rounded-xl p-5 shadow-sm">
            <h3 className="text-base font-black text-[#191961] uppercase mb-3 flex items-center justify-between">
              <span className="hover:text-ieee-blue transition-colors">Awards</span>
              <span className="h-0.5 w-16 bg-yellow-400/20"></span>
            </h3>
            <ul className="space-y-2 text-[11px] font-bold text-gray-600">
              <li className="flex items-center gap-2">
                <ChevronRight size={14} className="text-yellow-600" /> Best Paper Awards for Each Track
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight size={14} className="text-yellow-600" /> Best Student Paper Awards (Male & Female)
              </li>
              <li className="flex items-center gap-2">
                <ChevronRight size={14} className="text-yellow-600" /> Best student Poster Presentation Award
              </li>
            </ul>
          </div>
          <div className="bg-[#fffdf5] border border-yellow-100 rounded-xl p-5 shadow-sm">
            <h3 className="text-base font-black text-[#191961] uppercase mb-3 flex items-center justify-between">
              <Link to="/sponsors" className="hover:text-ieee-blue transition-colors">Exhibition & Sponsorship</Link>
              <span className="h-0.5 w-16 bg-yellow-400/20"></span>
            </h3>
            <div className="text-[11px] text-gray-600 font-bold leading-relaxed mb-3 italic">
              Industries & organizations are invited to showcase innovative products, technologies & services while gaining global visibility.
            </div>
            <Link to="/sponsors" className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#191961] hover:text-yellow-600 transition-colors">
              Visit Sponsors <ExternalLink size={12} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export { CallForPapers };
