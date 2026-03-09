import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { 
  CheckCircle2,
  Star,
  ArrowRightCircle,
  Cpu,
  Database,
  Layers,
  Network,
  Search
} from 'lucide-react';

const Topics = () => {
  const { hash } = useLocation();
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [hash]);

  const tracks = [
    {
      id: "A",
      title: "Computational Techniques and Informatics",
      topics: [
        "Artificial Intelligence", "Machine Learning", "Deep Learning", "Soft Computing", "Pattern Recognition", "ArtificialNeural Networks", "Evolutionary Computing", "Swarm Intelligence", "Fuzzy Logic", "Natural Computing", "DataScience", "Image processing", "Big Data Analytics", "Big Data Analysis", "Data Mining", "Web Mining", "TextMining", "Social Media Mining", "Business Intelligence", "Data Fusion", "Data Warehousing and Mining", "Explainable AI", "Generative AI", "Foundation Models", "Federated Learning", "Multimodal AI", "ComputerVision", "Natural Language Processing", "Brain Modelling", "Cognitive Computing", "Smart Systems", "Human–Computer Interaction", "HighPerformance Computing", "Distributed Computing", "Cluster Computing", "Cloud Computing", "Quantum Computing", "Edge Computing", "Ubiquitous Computing", "ServerlessComputing", "Fog Computing", "Green Computing", "SoftwareDefined Networking", "Digital Twins", "Internet ofThings", "CyberPhysical Systems & security", "IoT Security", "Edge AI", "Mobile Computing", "Sensor Networks", "Autonomous and Intelligent Systems", "Cryptography", "Network Security", "Information Security", "Cybersecurity", "Convergence in Digital Security", "Blockchain Technology", "Bioinformatics", "ComputationalBiology", "Computational Genomics", "Biomedical Informatics", "Computational Neuroscience", "SoftwareEngineering", "Advanced Computing", "Computing Technologies", "Innovation and Technology Integration", "Digital Transformation"
      ]
    },
    {
      id: "B",
      title: "Smart Electronics & Communication Engineering",
      topics: [
        "5G/6G Communication", "Wireless & Mobile Communication", "Antennas & Propagation", "Smart AntennaSystems", "MIMO Systems", "RF & Microwave", "RADAR", "Signal Processing", "Image & Video Processing", "Biomedical Image & Signal Processing", "Medical Electronics", "Embedded Systems", "VLSI & Microelectronics", "FPGA Design", "MEMS and NEMS", "IoT", "Cognitive Radio", "Error Control and Coding", "Communication & Security", "Computer Networks", "Brain–Computer Interfacing", "Bioinspired Systems & Instrumentation", "Biomedical Engineering", "Biomedical Control", "Process Instrumentation", "Process Control", "Nonlinear Dynamic Modeling", "Healthcare Technologies", "Optoelectronics", "Solid State Devices & Nanotechnology", "Analog Electronic Circuits", "Robotics & Automation", "Visible Light Communications", "Terahertz & Millimeter Wave Systems", "Reconfigurable Intelligent Surfaces", "SoftwareDefined Radio", "Optical Wireless Communications", "Edge AI for Sensors", "Wearable & Implantable Electronics", "WirelessBody Area Networks", "LabonChip & PointofCare Diagnostics", "Digital Health & Telemedicine", "Biomaterials & Tissue Engineering."
      ]
    },
    {
      id: "C",
      title: "Electrical Infrastructure and Automation",
      topics: [
        "Power Electronics", "Electric Vehicles and Charging Infrastructure", "Smart Grid", "Micro Grid", "Renewableand Green Energy Systems", "Energy Storage Systems", "Power Quality Issues and Solutions", "PowerControllers and Conversion Topologies", "AC/DC Drives", "Industrial Motor Drives", "Switchgear and Protection", "Electrical Machines and Retrofitting", "Intelligent and Nonlinear Control", "Applications of Control Theory", "Process Control and Automation", "Industrial Measurement Techniques", "Fault Estimationand Monitoring using AI/ML", "Big Data and AI in Energy Conversion", "Sustainable and Green Automation Technologies", "Integration of Multiple Energy Sources", "Soft Switching Techniques", "ElectromagneticDevice Design", "Aerospace and Shipboard Energy Conversion Systems", "Factory Automation", "RemoteSensing and GIS", "Fuzzy Neural Systems."
      ]
    },
    {
      id: "D",
      title: "Interdisciplinary Science and Engineering",
      topics: [
        "Energy Technologies", "Climate Change Mitigation", "Smart Cities", "Sustainable Infrastructure", "GreenBuilding Technology", "Advanced Materials", "Structural Health Monitoring", "Additive Manufacturing", "Mechatronics", "Applied Science and Mathematics", "Environmental Engineering", "ComputationalMaterials Science", "BioInspired Engineering", "Autonomous Systems", "Smart Manufacturing", "Human–Environment Interaction", "Resilient Infrastructure Systems. Sustainable Engineering &Project Management", "Humanitarian Technology Management", "Ethical Technology Deployment", "ProgramManagement and Innovation"
      ]
    }
  ];

  const highlightMatch = (text, term) => {
    if (!term.trim()) return text;
    const parts = text.split(new RegExp(`(${term})`, 'gi'));
    return (
      <span>
        {parts.map((part, i) => 
          part.toLowerCase() === term.toLowerCase() ? (
            <span key={i} className="bg-yellow-100 text-yellow-600 px-0.5 rounded transition-colors duration-300">
              {part}
            </span>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  const isTrackHighlighted = (track, term) => {
    if (!term.trim()) return false;
    const lowerTerm = term.toLowerCase();
    return (
      track.title.toLowerCase().includes(lowerTerm) ||
      track.topics.some(topic => topic.toLowerCase().includes(lowerTerm))
    );
  };

  return (
    <div className="min-h-screen bg-white relative overflow-hidden font-sans">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-ieee-blue/[0.01] rounded-full blur-3xl pointer-events-none"></div>
      
      {/* --- HERO SECTION --- */}
      <header className="container-boxed pt-8 pb-6 px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-50 pb-8">
          <div className="relative group">
             <h1 className="text-4xl md:text-5xl font-black text-icce-blue uppercase leading-none tracking-tighter">
                General <br/>
                <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px #191961' }}>Topics</span>
             </h1>
          </div>
          <div className="max-w-3xl md:text-right">
             <p className="text-[10px] font-black uppercase tracking-[0.3em] text-ieee-blue opacity-50 mb-2">Conference Thematic Scope</p>
             <p className="text-sm font-bold text-slate-500 leading-tight">ICCE 2026 explores the converging frontiers of technology across multiple engineering disciplines, ranging from Artificial Intelligence to Sustainable Infrastructure. We invite you to delve into our comprehensive list of tracks and discover how your research aligns with our vision for a converged future.</p>
          </div>
        </div>
      </header>

      <main className="container-boxed pt-4 pb-12 px-6">
        
        {/* --- SEARCH SECTION --- */}
        <section className="mb-10">
           <div className="max-w-md relative group">
              <div className="absolute inset-0 bg-ieee-blue/5 rounded-2xl blur-xl group-hover:bg-yellow-400/5 transition-colors duration-500"></div>
              <div className="relative flex items-center bg-white border border-slate-300 rounded-2xl shadow-md group-hover:shadow-lg group-hover:border-ieee-blue/40 transition-all duration-300">
                 <div className="pl-4 text-slate-500">
                    <Search size={18} />
                 </div>
                 <input 
                    type="text"
                    placeholder="Search topics, tracks, technologies..."
                    className="w-full py-4 px-4 bg-transparent outline-none text-sm font-bold text-icce-blue placeholder:text-slate-300 placeholder:font-medium"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                 />
                 {searchTerm && (
                   <button 
                     onClick={() => setSearchTerm('')}
                     className="pr-4 text-[10px] font-black text-ieee-blue uppercase tracking-widest hover:text-yellow-500 transition-colors"
                   >
                     Clear
                   </button>
                 )}
              </div>
           </div>
        </section>

        {/* --- CONTENT GRID --- */}
        <div className="flex flex-col lg:flex-row gap-10">
           
           {/* LEFT: Tracks and Topics */}
           <div className="flex-grow lg:max-w-[100%]">
              <div className="flex items-center gap-4 mb-6">
                 <h2 className="text-lg font-black text-icce-blue uppercase tracking-tight">Conference Tracks</h2>
                 <div className="h-px flex-1 bg-slate-100"></div>
              </div>
              
              <div className="grid grid-cols-1 gap-x-4 gap-y-4">
                 {tracks.map((track) => {
                   const isHighlighted = isTrackHighlighted(track, searchTerm);
                   return (
                     <motion.div 
                       key={track.id}
                       id={`track-${track.id}`}
                       initial={{ opacity: 0, y: 10 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       className={`p-8 rounded-3xl border transition-all duration-500 scroll-mt-32 ${
                         isHighlighted 
                           ? "border-yellow-400/50 bg-yellow-50/10 shadow-lg scale-[1.01]" 
                           : "border-slate-100 bg-white shadow-sm hover:border-ieee-blue/20 hover:shadow-md"
                       }`}
                     >
                     <div className="flex flex-col md:flex-row items-baseline gap-4 md:gap-8">
                          <span className={`text-3xl font-black transition-colors duration-500 whitespace-nowrap ${isHighlighted ? "text-yellow-500" : "text-icce-blue/80"}`}>
                             Track {track.id}
                          </span>
                          <div className="space-y-4 flex-1">
                             <h3 className={`text-2xl font-black uppercase tracking-tight leading-tight transition-colors duration-500 border-b border-slate-50 pb-2 ${
                               isHighlighted ? "text-yellow-600" : "text-[#191961] group-hover:text-ieee-blue"
                             }`}>
                                {highlightMatch(track.title, searchTerm)}
                             </h3>
                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-3">
                                {track.topics.map((topic, idx) => {
                                  const topicMatch = searchTerm && topic.toLowerCase().includes(searchTerm.toLowerCase());
                                  return (
                                    <div key={idx} className={`flex items-start gap-2 text-xs font-bold leading-snug group/item transition-all duration-300 ${
                                      topicMatch ? "text-yellow-600 scale-105" : "text-gray-600"
                                    }`}>
                                       <ArrowRightCircle 
                                         size={10} 
                                         className={`shrink-0 mt-0.5 transition-all ${
                                           topicMatch ? "text-yellow-500 translate-x-1" : "text-ieee-blue group-hover/item:translate-x-1"
                                         }`} 
                                       />
                                       <span>{highlightMatch(topic, searchTerm)}</span>
                                    </div>
                                  );
                                })}
                             </div>
                          </div>
                       </div>
                     </motion.div>
                   );
                 })}
              </div>
           </div>

        </div>

      </main>
    </div>
  );
};

export default Topics;
