import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, Cpu, Zap, Globe, ShieldCheck, Download, FileText, UserPlus, Users, Award, ExternalLink, Mail, Phone, ChevronRight, ChevronLeft, Play, Clock, Search, Mic, Settings, Bot, Layers, BookOpen, Briefcase, GraduationCap, Heart, Handshake, FileBadge, Trophy, Presentation } from 'lucide-react';
import { Link } from 'react-router-dom';

const tracks = [
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

const importantDates = [
  { label: 'Paper Submission Deadline', date: 'July 15', year: '2026' },
  { label: 'Notification of Acceptance', date: '31st Aug', year: '2026' },
  { label: 'Camera Ready Submission', date: '10th Sep', year: '2026' },
  { label: 'Early Bird Registration', date: '1st - 15th Sep', year: '2026' },
  { label: 'Conference Dates', date: '19, 20 & 21 Nov', year: '2026' }
];

const speakers = [
  { name: 'Dr. Anchit Bijalwan', role: 'British University Vietnam', country: 'VN', image: 'https://i.pravatar.cc/150?u=anchit' },
  { name: 'Dr. Subhadip Basu', role: 'Jadavpur University', country: 'IN', image: 'https://i.pravatar.cc/150?u=subhadip' },
  { name: 'Prof. Debashis De', role: 'MAKAUT', country: 'IN', image: 'https://i.pravatar.cc/150?u=debashis' },
  { name: 'Prof. Amit Konar', role: 'Jadavpur University', country: 'IN', image: 'https://i.pravatar.cc/150?u=amit' },
];

const keynoteSpeakers = [
  { 
    name: 'Dr. Dipankar Chakrabarti', 
    role: 'Founder, CtoE Consultancy Services', 
    university: 'Director, BDSCube Technology Pvt. Ltd.', 
    topic: 'Keynote: Smart Computing Paradigms',
    image: '/assets/keynote/speakers-01.webp' 
  },
  { 
    name: 'Prof. Sarah Jenkins', 
    role: 'Lead Researcher, AI Lab', 
    university: 'Stanford University, USA', 
    topic: 'Keynote: Future of Neural Networks',
    image: '/assets/keynote/speakers-02.webp' 
  },
  { 
    name: 'Dr. Marcus Thorne', 
    role: 'Chief Technology Officer', 
    university: 'Cyberdyne Systems Research', 
    topic: 'Keynote: Quantum Communication Security',
    image: '/assets/keynote/speakers-03.webp' 
  },
];

const KeynoteSpeakerCard = ({ speaker, i }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.1 }}
      className="group relative"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-50 to-slate-100 rounded-[32px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl -z-10"></div>
      
      <div className="bg-white p-6 rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-slate-100 flex flex-col items-center text-center h-full hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 overflow-hidden relative">
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none group-hover:bg-yellow-400/10 transition-colors duration-700"></div>
        
        <div className="relative mb-6">
          <div className="w-32 h-32 rounded-full p-0.5 bg-gradient-to-tr from-yellow-400/20 to-icce-blue/20 group-hover:from-yellow-400 group-hover:to-icce-blue transition-all duration-700">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-white shadow-inner bg-slate-50 relative z-10">
              <img 
                src={speaker.image} 
                alt={speaker.name} 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110" 
              />
            </div>
          </div>
          <div className="absolute -bottom-2 inset-x-4 h-6 bg-black/5 rounded-[100%] blur-xl group-hover:bg-black/10 transition-all duration-700"></div>
        </div>

        <div className="space-y-3 relative z-10 flex-grow">
          <h4 className="text-xl font-black text-icce-blue leading-tight uppercase tracking-tight group-hover:text-ieee-blue transition-colors">
            {speaker.name}
          </h4>
          
          <div className="space-y-1.5">
            <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest leading-relaxed px-2">
              {speaker.role}
            </p>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest leading-relaxed italic px-2">
              {speaker.university}
            </p>
            <div className="w-6 h-0.5 bg-yellow-400 mx-auto rounded-full group-hover:w-12 transition-all duration-500 my-2"></div>
            <p className="text-[10px] font-black text-ieee-blue uppercase tracking-tighter bg-ieee-blue/5 py-1 px-3 rounded-full">
              {speaker.topic}
            </p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-50 w-full">
           <span className="text-[8px] font-black text-yellow-500 uppercase tracking-[0.4em]">Keynote Speaker</span>
        </div>
      </div>
    </motion.div>
  );
};

const workshops = [
  {
    id: '01',
    category: 'PRE-CONFERENCE WORKSHOP',
    date: 'MARCH 16, 2026',
    title: 'Voice AI Agents & End-to-End Automation with n8n',
    description: 'A hands-on workshop to explore the future of intelligent automation — build voice-powered AI agents and workflows.',
    organizer: 'GDGoC-IEM & InnovAI CoE',
    tags: [
      { label: 'Voice AI Agents', icon: Mic },
      { label: 'n8n Automation', icon: Settings },
      { label: 'GDGoC-IEM & CoE', icon: Users }
    ],
    gradient: 'from-[#1e293b] via-[#334155] to-[#0f172a]'
  },
  {
    id: '02',
    category: 'TECHNICAL SESSION',
    date: 'MARCH 17, 2026',
    title: 'Mastering Edge AI: Optimized Learning for IoT',
    description: 'Deep dive into deploying computer vision models on low-power hardware for real-time edge intelligence.',
    organizer: 'IEEE Computer Chapter',
    tags: [
      { label: 'Edge AI', icon: Cpu },
      { label: 'IoT Systems', icon: Globe },
      { label: 'CV Deployment', icon: Layers }
    ],
    gradient: 'from-[#0f172a] via-[#1e293b] to-[#020617]'
  },
  {
    id: '03',
    category: 'INNOVATION HUB',
    date: 'MARCH 18, 2026',
    title: 'Quantum Algorithms: Complexity in Finance',
    description: 'Exploring quantum supremacy in financial modeling, risk assessment, and portfolio optimization.',
    organizer: 'Future Tech Initiative',
    tags: [
      { label: 'Quantum', icon: Zap },
      { label: 'FinTech', icon: Award },
      { label: 'Risk Modeling', icon: Search }
    ],
    gradient: 'from-[#334155] via-[#475569] to-[#1e293b]'
  },
  {
    id: '04',
    category: 'SECURITY SUMMIT',
    date: 'MARCH 19, 2026',
    title: 'Securing Generative AI: Defensive Strategies',
    description: 'Protect LLM-based applications from prompt injection attacks and ensure robust data privacy.',
    organizer: 'Cybersecurity Lab',
    tags: [
      { label: 'Gen AI', icon: Bot },
      { label: 'Defense', icon: ShieldCheck },
      { label: 'AI Security', icon: Mail }
    ],
    gradient: 'from-[#1e293b] via-[#0f172a] to-[#334155]'
  }
];

const WorkshopCard = ({ workshop, i }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.15 }}
      className={`group relative h-full flex flex-col p-6 rounded-[40px] bg-gradient-to-br ${workshop.gradient} text-white shadow-2xl hover:scale-[1.02] transition-all duration-700 overflow-hidden ${i % 2 === 1 ? 'lg:translate-y-12' : ''}`}
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none group-hover:bg-white/10 transition-colors duration-1000"></div>
      
      <div className="relative z-10 flex flex-col h-full space-y-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm whitespace-nowrap">
            {workshop.category}
          </span>
          <span className="text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-yellow-400 text-black whitespace-nowrap">
            {workshop.date}
          </span>
        </div>

        <div className="flex-grow space-y-4">
          <h3 className="text-2xl font-black leading-[1.1] tracking-tighter uppercase">
            {workshop.title.split(' ').map((word, idx) => (
              <span key={idx} className={idx % 4 === 3 ? 'text-yellow-400' : ''}>{word}{' '}</span>
            ))}
          </h3>
          <p className="text-[11px] font-medium text-white/70 leading-relaxed italic border-l-2 border-yellow-400/50 pl-4 py-1">
            {workshop.description}
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex flex-col gap-2">
            {workshop.tags.map((tag, idx) => (
              <div key={idx} className="flex items-center space-x-3 px-4 py-2 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors group/tag">
                <tag.icon size={12} className="text-yellow-400 group-hover/tag:scale-125 transition-transform" />
                <span className="text-[10px] font-black uppercase tracking-widest opacity-80">{tag.label}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">Organized By {workshop.organizer}</span>
            <Link to="/submission" className="bg-white text-black p-2 rounded-full hover:bg-yellow-400 transition-all group/btn shadow-xl">
              <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = new Date(targetDate).getTime() - now;
      if (distance < 0) {
        clearInterval(timer);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex space-x-4 md:space-x-8">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <div className={`text-2xl md:text-4xl font-black ${unit === 'seconds' ? 'text-yellow-400' : 'text-icce-blue'}`}>{value}</div>
          <div className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-slate-400">{unit}</div>
        </div>
      ))}
    </div>
  );
};

const HomeCarousel = ({ images, title, subtitle, className = "" }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setIndex((prev) => (prev + newDirection + images.length) % images.length);
  };

  return (
    <div className={`relative group ${className}`}>
      <div className="absolute -inset-4 bg-gradient-to-tr from-ieee-blue/20 to-transparent blur-2xl rounded-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      <div className="relative bg-white rounded-[60px] shadow-2xl overflow-hidden border border-slate-100 aspect-square">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={index}
            src={images[index]}
            alt={`${title} ${index + 1}`}
            custom={direction}
            initial={{ opacity: 0, scale: 1.1, x: direction > 0 ? '20%' : '-20%' }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95, x: direction > 0 ? '-20%' : '20%' }}
            transition={{ 
              x: { type: "spring", stiffness: 100, damping: 20 },
              opacity: { duration: 0.6 },
              scale: { duration: 0.6 }
            }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#191961]/80 via-transparent to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8 space-y-1">
          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-ieee-blue">{title}</span>
          <h4 className="text-xl font-black text-white uppercase tracking-tight leading-none">{subtitle}</h4>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity z-20">
          <button 
            onClick={(e) => { e.preventDefault(); paginate(-1); }}
            className="p-2 bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-ieee-blue rounded-full transition-all"
          >
            <ChevronLeft size={16} />
          </button>
          <button 
            onClick={(e) => { e.preventDefault(); paginate(1); }}
            className="p-2 bg-white/20 backdrop-blur-md hover:bg-white text-white hover:text-ieee-blue rounded-full transition-all"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

const highlights = [
  { title: 'Keynote & Invited Talks', icon: Mic, desc: 'Visionary insights from global pioneers in emerging engineering frontiers.' },
  { title: 'Tutorials', icon: BookOpen, desc: 'Deep-dive technical sessions focusing on practical implementation and skills.' },
  { title: 'Industry Forum', icon: Briefcase, desc: 'Bridging the gap between academic research and real-world industrial applications.' },
  { title: 'Student Research Forum', icon: GraduationCap, desc: 'Empowering the next generation of researchers to showcase their breakthroughs.' },
  { title: 'Women in Engineering (WIE)', icon: Heart, desc: 'Fostering diversity and professional growth for women in the technical community.' },
  { title: 'IEEE SIGHT Humanitarian', icon: Handshake, desc: 'Leveraging technology for social impact and sustainable community development.' },
  { title: 'Best Paper Award', icon: FileBadge, desc: 'Recognizing excellence in original research and technical contribution.' },
  { title: 'Best Student Paper Award', icon: Trophy, desc: 'Celebrating outstanding research quality and presentation by student authors.' },
  { title: 'Best Poster Award', icon: Presentation, desc: 'Honoring effective visual communication of complex scientific concepts.' },
];

const advisoryCommittee = [
  { name: 'Dr. Anchit Bijalwan', role: 'Lead Computing & Data Science', aff: 'British University Vietnam' },
  { name: 'Dr. Subhadip Basu', role: 'Dept. of CSE', aff: 'Jadavpur University' },
  { name: 'Dr. Arindam Sarkar', role: 'Dept. of CSE & Electronics', aff: 'RKM Vidyamandira' },
  { name: 'Prof. (Dr.) Debashis De', role: 'Dept. of CSE', aff: 'MAKAUT, West Bengal' },
  { name: 'Prof. (Dr.) Arijit Sur', role: 'Dept. of CSE', aff: 'IIT Guwahati' },
  { name: 'Prof. (Dr.) Kuntal Ghosh', role: 'Machine Intelligence Unit', aff: 'ISI, Kolkata' },
  { name: 'Dr. Himadri Sekhar Paul', role: 'Scientist', aff: 'TCS Research' },
  { name: 'Prof. Anirban Mukherjee', role: 'Professor', aff: 'IIT Kharagpur' },
  { name: 'Prof. Rajarshi Mahapatra', role: 'Professor', aff: 'IIIT-Naya Raipur' },
  { name: 'Prof. Sourav Patra', role: 'Professor', aff: 'IIT Kharagpur' },
  { name: 'Prof. Jahar Sarkar', role: 'Professor', aff: 'IIT(BHU), Varanasi' },
  { name: 'Prof. Priyaranjan Pal', role: 'Professor', aff: 'MNNIT Allahabad' },
  { name: 'Prof. Ashutosh Sarkar', role: 'Professor', aff: 'IIM Kozhikode' },
  { name: 'Prof. Amit Konar', role: 'Dept. of ETCE', aff: 'Jadavpur University' },
  { name: 'Prof. Sankhayan Chowdhury', role: 'Dept. of CSE', aff: 'University of Calcutta' },
  { name: 'Prof. Hafizur Rahaman', role: 'Dept. of IT', aff: 'IIEST Shibpur' },
  { name: 'Prof. Ranjan Kumar Mallik', role: 'Dept. of EE', aff: 'IIT Delhi' },
  { name: 'Mr. Subhomoy Chakraborty', role: 'Editor/Admin', aff: 'ABP Group' },
  { name: 'Prof. Amit Roy Chowdhury', role: 'Dept. of Aerospace Eng.', aff: 'IIEST Shibpur' },
  { name: 'Dr. Piyali Basak', role: 'School of Bioscience', aff: 'Jadavpur University' },
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
          
          <div className="flex items-center space-x-3 mb-3">
             <Link to={`/topics#track-${track.category.split(' ')[1]}`}>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-ieee-blue opacity-40 hover:opacity-100 transition-opacity">{track.category}</span>
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

const Home = () => {
  return (
    <div className="flex flex-col bg-white overflow-hidden selection:bg-ieee-blue selection:text-white">
      
      {/* 1. PANORAMIC BLENDED HERO - Non-Generic & High End */}
      <section className="relative min-h-[calc(100vh-180px)] flex items-center pt-6 md:pt-8 group">
        {/* Blended Background Picture - Local Kolkata Image */}
        <div className="absolute top-0 right-0 bottom-0 left-0 lg:left-1/2 z-0 overflow-hidden pointer-events-none">
           <img 
             src="/assets/background/kolkata.png" 
             className="w-full h-full object-cover grayscale opacity-100 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105" 
             alt="Kolkata Backdrop" 
           />
           {/* Primary Blending Gradient - active when NOT hovering */}
           <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent transition-opacity duration-1000 group-hover:opacity-0 z-10"></div>
           
           {/* Persistent Left Edge Blend - always active to hide the left border of the image */}
           <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white via-white/5 to-transparent z-20"></div>
           
           {/* Bottom Fade */}
           <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent z-20"></div>
        </div>

        <div className="container-boxed grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-10">
          
          {/* Main Title Layer */}
          <div className="lg:col-span-8 space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-x-6 gap-y-2 mb-4">
                <div className="flex items-center space-x-3 whitespace-nowrap">
                  <div className="h-0.5 w-8 bg-ieee-blue"></div>
                  <span className="text-[12px] font-black uppercase tracking-[0.2em] text-icce-blue">ICCE 2026 • Kolkata</span>
                </div>
                <div className="hidden md:block h-4 w-px bg-slate-200"></div>
                <span className="text-[9px] font-black uppercase tracking-widest text-ieee-blue bg-ieee-blue/5 px-3 py-1 rounded-full border border-ieee-blue/10 text-center">
                  Technical co-sponsorship by IEEE Kolkata Section and Financial Co-Sponsorship by IEEE AP-MTT Kolkata Chapter
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-black text-icce-blue leading-none tracking-tighter uppercase mb-4 drop-shadow-sm">
                Convergence<br/>
                <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2.5px #191961' }}>Engineering</span>
              </h1>
              
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 pt-1">
                 <div className="max-w-xs space-y-3">
                    <p className="text-sm text-slate-500 font-bold leading-relaxed border-l-4 border-ieee-blue pl-6 py-1">
                       Advancing engineering frontiers through interdisciplinary excellence and IEEE standards.
                    </p>
                    <div className="flex items-start space-x-3 pl-6">
                       <ShieldCheck className="text-ieee-blue mt-0.5" size={16} />
                       <div className="flex flex-col">
                          <span className="text-[10px] font-black uppercase tracking-widest text-icce-blue leading-none">Probable Publication in IEEE Xplore</span>
                          <span className="text-[9px] font-black text-slate-600 uppercase tracking-widest leading-tight mt-1.5">Some selected papers will be published in SCI Index Journal</span>
                       </div>
                    </div>
                 </div>
                 
                 {/* 3 CTA Buttons Layer */}
                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Link to="/submission" className="flex flex-col items-center justify-center w-28 h-28 rounded-3xl bg-icce-blue text-white hover:bg-ieee-blue hover:scale-105 transition-all shadow-xl group">
                       <FileText size={20} className="mb-2" />
                       <span className="text-[9px] font-black uppercase tracking-widest text-center">Submit<br/>Paper</span>
                    </Link>
                    <Link to="/registration" className="flex flex-col items-center justify-center w-28 h-28 rounded-3xl bg-white border-2 border-slate-100 text-icce-blue hover:border-icce-blue hover:scale-105 transition-all shadow-lg group">
                       <UserPlus size={20} className="mb-2 text-ieee-blue" />
                       <span className="text-[9px] font-black uppercase tracking-widest text-center">Register<br/>Now</span>
                    </Link>
                    <a href="/cfp.pdf" download className="flex flex-col items-center justify-center w-28 h-28 rounded-3xl bg-slate-50 text-slate-500 hover:bg-slate-100 hover:scale-105 transition-all border border-slate-200 group">
                       <Download size={20} className="mb-2" />
                       <span className="text-[9px] font-black uppercase tracking-widest text-center">Download<br/>CFP</span>
                    </a>
                 </div>
              </div>

              {/* Countdown Timer Strip */}
              <div className="mt-6 md:mt-8 bg-white/40 backdrop-blur-sm p-4 rounded-[30px] border border-white/60 flex flex-col md:flex-row items-center md:space-x-12 space-y-4 md:space-y-0 shadow-sm w-fit">
                 <div className="flex items-center space-x-4 pr-0 md:pr-12 border-b md:border-b-0 md:border-r border-slate-200 pb-4 md:pb-0">
                    <Clock className="text-ieee-blue animate-pulse" size={20} />
                    <div>
                       <div className="text-[9px] font-black uppercase tracking-widest text-icce-blue">Deadline: Paper Submission</div>
                       <div className="text-[10px] font-bold text-slate-400">July 15, 2026</div>
                    </div>
                 </div>
                 <CountdownTimer targetDate="July 15, 2026 23:59:59" />
              </div>
            </motion.div>
          </div>

          {/* Right side area for background image focal point */}
          <div className="lg:col-span-4 hidden lg:block relative h-full">
          </div>
        </div>
      </section>

      {/* 2. UNIFIED TIMELINE & WELCOME - Boutique Redesign */}
      <section className="pt-4 pb-16 bg-white relative z-20 border-t border-slate-50">
        <div className="container-boxed">
           
           {/* Horizontal Boutique Timeline */}
           <div className="relative mb-2 px-4 pt-14 overflow-x-auto pb-6 scrollbar-hide">
              <div className="min-w-[800px] relative">
                 {/* Deepened Timeline Line */}
                 <div className="absolute top-[38px] left-0 w-full h-1 bg-slate-100"></div>
                 <div className="absolute top-[38px] left-0 h-1 bg-icce-blue w-1/5 transition-all duration-1000"></div>
                 
                 <div className="relative flex justify-between items-start">
                    {importantDates.map((item, i) => (
                       <motion.div 
                         key={i}
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: i * 0.1 }}
                         className="flex flex-col items-center group max-w-[150px] text-center"
                       >
                          <div className="relative mb-6">
                             {i === 0 ? (
                                <motion.div 
                                   animate={{ scale: [1, 2.5, 1], opacity: [0.8, 0.2, 0.8] }}
                                   transition={{ duration: 1.5, repeat: Infinity }}
                                   className="absolute inset-0 rounded-full bg-yellow-400 -m-2 blur-sm"
                                />
                             ) : null}
                             <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 border-white shadow-lg transition-all duration-500 z-10 relative ${i === 0 ? 'bg-yellow-400 text-icce-blue' : 'bg-white text-slate-500 group-hover:bg-ieee-blue group-hover:text-white'}`}>
                                <span className="text-[14px] font-black">{i + 1}</span>
                             </div>
                          </div>
                          
                          <div className="space-y-1 px-2">
                             <span className={`text-[10px] font-black uppercase tracking-widest block min-h-[20px] leading-tight ${i === 0 ? 'text-ieee-blue' : 'text-slate-600'}`}>
                                {item.label}
                             </span>
                             <span className="text-xl md:text-2xl font-black text-icce-blue tracking-tighter italic leading-none block group-hover:scale-105 transition-transform">
                                {item.date}
                             </span>
                             <span className="text-[10px] font-black text-slate-500 uppercase block tracking-widest">{item.year}</span>
                          </div>
                       </motion.div>
                    ))}
                 </div>
              </div>
           </div>

           {/* AoE Legend */}
           <div className="flex justify-center mb-10">
              <div className="flex items-center bg-slate-50 px-5 py-2 rounded-full border border-slate-100 shadow-sm">
                 <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">
                    All deadlines are 23:59 <span className="text-ieee-blue font-black">AoE</span> (Anywhere on Earth)
                 </span>
              </div>
           </div>

           {/* Content Grid - Snug Fit & Centered */}
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left: Welcome */}
              <motion.div 
                className="lg:col-span-7 space-y-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                 <div className="space-y-0.5">
                    <span className="text-[9px] font-black uppercase tracking-[0.4em] text-ieee-blue/40">Discovery • Innovation • Standards</span>
                    <h2 className="text-4xl md:text-6xl font-black text-icce-blue uppercase tracking-tighter leading-none">
                       Welcome to<br/>
                       <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1.5px #191961' }}>ICCE 2026</span>
                    </h2>
                 </div>
                 
                 <div className="space-y-4">
                    <p className="text-lg md:text-xl text-slate-800 leading-tight font-black italic pl-2 py-1">
                       Netaji Subhash Engineering College (NSEC), in collaboration with IEEE AP-MTT Kolkata Chapters and IEEE Kolkata Section, organizes the 2nd International Conference for Convergence in Engineering.
                    </p>
                    <div className="text-[11px] text-slate-500 leading-relaxed font-bold text-justify columns-1 md:columns-2 gap-8 pt-2">
                       <p>
                          The conference aims to bring together academicians, researchers, scientists, and industry professionals to present and discuss recent advancements and emerging trends in engineering and technology. The program will include keynote lectures, invited talks, tutorials, and technical sessions.
                       </p>
                       <p>
                          All accepted and presented papers will be submitted to the IEEE Xplore Digital Library for probable inclusion, subject to IEEE quality review and compliance with publication policies. We invite you to join us in this transformative gathering of global minds.
                       </p>
                    </div>
                 </div>
              </motion.div>

              {/* Right: Aims - Abstract Redesign with Spillover Content */}
              <motion.div 
                className="lg:col-span-5 relative self-center"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                 {/* Abstract "Boutique" Shapes in Background - Compacted */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[95%] bg-[#f5f8ff] rounded-[80px] rotate-3 group-hover:rotate-0 transition-transform duration-1000 -z-10 border border-indigo-100/50 shadow-sm"></div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[80%] bg-yellow-400/15 rounded-full blur-3xl -z-10 animate-pulse"></div>
                 
                 <div className="relative z-10 py-2">
                    {/* Caption spills out to the left */}
                    <h3 className="text-xl md:text-2xl font-black text-icce-blue uppercase tracking-tighter italic leading-none flex items-center -ml-12 mb-8 bg-white py-4 px-7 shadow-xl rounded-r-full border-l-8 border-yellow-400 w-max">
                       <Zap className="mr-3 text-yellow-400" size={20} />
                       ICCE 2026 aims to
                    </h3>
                    
                    {/* Objectives spill over the background shapes */}
                    <div className="space-y-4 relative">
                       {[
                          "Global platform for interdisciplinary research",
                          "High-quality peer-reviewed research (IEEE)",
                          "Foster academia–industry collaboration",
                          "Sustainable and socially responsible tech",
                          "Support students and early-career researchers"
                       ].map((obj, i) => (
                          <div key={i} className={`flex items-start space-x-5 group/item ${i % 2 === 1 ? 'translate-x-3' : '-translate-x-1'}`}>
                             <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 shrink-0 mt-1.5 shadow-sm group-hover/item:scale-[1.5] transition-all duration-500"></div>
                             <p className="text-[11px] md:text-[12px] font-black text-slate-700 leading-tight drop-shadow-sm group-hover/item:text-icce-blue transition-colors">
                                {obj}
                             </p>
                          </div>
                       ))}
                    </div>
                    
                    {/* Snug footer also spilling slightly - Compacted */}
                    <div className="mt-8 pt-6 flex items-center justify-between border-t border-slate-200/40 w-full lg:w-[105%] -ml-4">
                       <div className="flex items-center space-x-3">
                          <div className="flex -space-x-2.5">
                             {[1,2,3].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full border-[3px] border-white bg-slate-200 overflow-hidden shadow-lg ring-1 ring-slate-100">
                                   <img src={`https://i.pravatar.cc/100?u=${i+30}`} alt="Attendee" />
                                </div>
                             ))}
                          </div>
                          <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest bg-white px-3 py-1 rounded-full shadow-sm">Impact</span>
                       </div>
                       <Link to="/submission" className="bg-icce-blue text-white px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-widest hover:bg-yellow-400 hover:text-icce-blue transition-all shadow-xl hover:scale-105 active:scale-95">
                          Submit
                       </Link>
                    </div>
                 </div>
              </motion.div>
           </div>
        </div>
      </section>

      {/* 3. INNOVATIVE TRACK GRID - Two Per Row Boutique Design */}
      <section className="mt-6 pb-16 bg-white relative">
        <div className="container-boxed relative z-10">
           
           <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
              <div className="relative group">
                 <h2 className="text-4xl md:text-6xl font-black text-icce-blue uppercase leading-none tracking-tighter">
                    Conference <br/>
                    <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px #191961' }}>CORE TRACKS</span>
                 </h2>
              </div>
              <div className="max-w-xs md:text-right">
                 <p className="text-[10px] font-black uppercase tracking-[0.3em] text-ieee-blue opacity-50 mb-2">Technological Horizons</p>
                 <p className="text-sm font-bold text-slate-500 leading-tight">Explore the diverse interdisciplinary domains covering Computational Informatics to Smart Electronics.</p>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {tracks.map((track, i) => (
                <TrackCard key={track.id} track={track} i={i} />
              ))}
           </div>
        </div>
      </section>

      {/* 2.5 CONFERENCE HIGHLIGHTS - Professional Micro-Grid */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="container-boxed relative z-10">
           
           <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
              <div className="relative group">
                 <h2 className="text-4xl md:text-6xl font-black text-icce-blue uppercase leading-none tracking-tighter">
                    Conference <br/>
                    <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px #191961' }}>HIGHLIGHTS</span>
                 </h2>
              </div>
              <div className="max-w-xs md:text-right">
                 <p className="text-[10px] font-black uppercase tracking-[0.3em] text-ieee-blue opacity-50 mb-2">Strategic Program Features</p>
                 <p className="text-sm font-bold text-slate-500 leading-tight">A diverse ecosystem of technical excellence including Industry Forums, WIE programs, and prestigious awards.</p>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {highlights.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="group bg-white p-6 rounded-3xl border border-slate-100 hover:border-slate-200 hover:shadow-xl transition-all duration-500 flex items-start space-x-5"
                >
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 group-hover:bg-icce-blue group-hover:text-white transition-all duration-500 shadow-sm border border-slate-100">
                    <item.icon size={20} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-black text-icce-blue uppercase tracking-tight group-hover:text-ieee-blue transition-colors flex items-center">
                      <div className="w-1 h-3 bg-yellow-400 mr-2 rounded-full"></div>
                      {item.title}
                    </h4>
                    <p className="text-[11px] font-medium text-slate-500 leading-snug">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>

      {/* 3.5 KEYNOTE SPEAKERS - Boutique Design */}
      <section className="mt-6 pb-24 bg-white relative">
        <div className="container-boxed relative z-10">
           
           <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
              <div className="relative group">
                 <h2 className="text-4xl md:text-6xl font-black text-icce-blue uppercase leading-none tracking-tighter">
                    Keynote <br/>
                    <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px #191961' }}>SPEAKERS</span>
                 </h2>
              </div>
              <div className="max-w-xs md:text-right">
                 <p className="text-[10px] font-black uppercase tracking-[0.3em] text-ieee-blue opacity-50 mb-2">Eminent Visionaries</p>
                 <p className="text-sm font-bold text-slate-500 leading-tight">ICCE 2026 hosts distinguished pioneers fostering global exchange of breakthrough engineering concepts.</p>
              </div>
           </div>

           <div className="relative">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                 {keynoteSpeakers.map((speaker, i) => (
                   <KeynoteSpeakerCard key={i} speaker={speaker} i={i} />
                 ))}
              </div>
              
              {/* Draft Status Overlay */}
              <div className="absolute inset-0 bg-white/20 backdrop-blur-[3px] z-30 flex items-center justify-center -m-4 rounded-[60px]">
                 <div className="bg-icce-blue/95 text-white px-10 py-6 rounded-[40px] shadow-[0_20px_50px_rgba(25,25,97,0.3)] border-2 border-yellow-400/50 flex flex-col items-center gap-2 transform -rotate-1">
                    <span className="text-2xl font-black uppercase tracking-[0.2em] italic">Draft</span>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-70">Confirmation Pending</span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 3.6 PRE-CONFERENCE WORKSHOPS - Staggered Blade Design */}
      <section className="mt-0 pb-24 bg-white relative">
        <div className="container-boxed relative z-10">
           
           <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
              <div className="relative group">
                 <h2 className="text-4xl md:text-6xl font-black text-icce-blue uppercase leading-none tracking-tighter">
                    Pre-Conference <br/>
                    <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px #191961' }}>WORKSHOPS</span>
                 </h2>
              </div>
              <div className="max-w-xs md:text-right">
                 <p className="text-[10px] font-black uppercase tracking-[0.3em] text-ieee-blue opacity-50 mb-2">Immersive Learning</p>
                 <p className="text-sm font-bold text-slate-500 leading-tight">Advanced hands-on sessions led by industry pioneers focused on cutting-edge technological implementation.</p>
              </div>
           </div>

           <div className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 pb-12">
                 {workshops.map((workshop, i) => (
                   <WorkshopCard key={workshop.id} workshop={workshop} i={i} />
                 ))}
              </div>
              
              {/* Draft Status Overlay */}
              <div className="absolute inset-0 bg-white/20 backdrop-blur-[3px] z-30 flex items-center justify-center -m-4 rounded-[60px]">
                 <div className="bg-icce-blue/95 text-white px-10 py-6 rounded-[40px] shadow-[0_20px_50px_rgba(25,25,97,0.3)] border-2 border-yellow-400/50 flex flex-col items-center gap-2 transform -rotate-1">
                    <span className="text-2xl font-black uppercase tracking-[0.2em] italic">Draft</span>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] opacity-70">Confirmation Pending</span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 4. VENUE SECTION - Modern & Immersive */}
      <section className="pt-12 pb-12 bg-white relative overflow-hidden">
         <div className="container-boxed relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
               <div className="relative group">
                  <h2 className="text-4xl md:text-6xl font-black text-icce-blue uppercase leading-none tracking-tighter">
                     Conference <br/>
                     <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px #191961' }}>VENUE</span>
                  </h2>
               </div>
               <div className="max-w-xs md:text-right">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] text-ieee-blue opacity-50 mb-2">Techno City Hub</p>
                  <p className="text-sm font-bold text-slate-500 leading-tight">A premier institution in Kolkata, NSEC provides a state-of-the-art academic environment for researchers.</p>
               </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
               <div className="lg:col-span-4 space-y-8">
                  <div className="space-y-4 text-slate-500 font-medium">
                     <p className="text-lg text-icce-blue font-bold">Netaji Subhash Engineering College</p>
                     <p className="leading-relaxed text-justify italic text-sm">
                        Located in Techno City, Panchpota, Garia, it is well-connected to the main city and international airport, fostering a culture of technical excellence.
                     </p>
                  </div>

                  <div className="flex items-center space-x-6">
                     <div className="flex flex-col">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">City Hub</span>
                        <span className="text-sm font-bold text-icce-blue">Kolkata, India</span>
                     </div>
                     <div className="h-10 w-px bg-slate-200"></div>
                     <div className="flex flex-col">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Campus</span>
                        <span className="text-sm font-bold text-icce-blue">Techno City, Panchpota, Garia, Kolkata, West Bengal, India. PIN: 700 152</span>
                     </div>
                  </div>

                  <div className="pt-4">
                     <Link to="/venue" className="inline-flex items-center text-[10px] font-black uppercase tracking-widest text-ieee-blue hover:text-icce-blue transition-all group">
                        Explore Venue <ChevronRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
                     </Link>
                  </div>
               </div>

               <div className="lg:col-span-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                     <HomeCarousel 
                       images={[
                         '/assets/venue/venue_01.jpg',
                         '/assets/venue/venue_02.jpg',
                         '/assets/venue/venue_03.jpg'
                       ]} 
                       title="Campus Hub" 
                       subtitle="NSEC Infrastructure"
                       className="md:translate-y-12"
                     />
                     
                     <div className="space-y-8">
                        <HomeCarousel 
                          images={[
                            '/assets/venue/spot-01.jpg',
                            '/assets/venue/spot-02.jpg',
                            '/assets/venue/spot-03.jpg',
                            '/assets/venue/spot-04.jpg',
                            '/assets/venue/spot-05.jpg'
                          ]} 
                          title="City Spirit" 
                          subtitle="Explore Kolkata"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* 7. SPONSORS & PARTNERS - High Density Innovative Design */}
      <section className="pt-16 pb-24 bg-white relative overflow-hidden">
        <div className="container-boxed relative z-10">
           <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-8">
              <div className="relative group">
                 <h2 className="text-4xl md:text-6xl font-black text-icce-blue uppercase leading-none tracking-tighter">
                    Conference <br/>
                    <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px #191961' }}>SPONSORS</span>
                 </h2>
              </div>
              <div className="max-w-xs md:text-right">
                 <p className="text-[10px] font-black uppercase tracking-[0.3em] text-ieee-blue opacity-50 mb-2">Technical Excellence</p>
                 <p className="text-sm font-bold text-slate-500 leading-tight">Supported by global leaders in engineering, innovation, and technological development.</p>
              </div>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Featured Tiers (Left Side) */}
              <div className="lg:col-span-5 space-y-8">
                 <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-ieee-blue to-icce-blue rounded-[40px] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                    <div className="relative bg-white p-8 rounded-[40px] border border-slate-100 shadow-xl flex items-center gap-8">
                       <div className="shrink-0 w-32 h-32 bg-white rounded-3xl flex items-center justify-center p-3 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-500">
                          <img src="/assets/sponsor/sponsor_02.png?v=1.0.1" alt="Technical Sponsor" className="w-full h-full object-contain transition-all duration-700" />
                       </div>
                       <div>
                          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-ieee-blue mb-1 block">Technical Sponsor</span>
                          <h4 className="text-lg font-black text-icce-blue uppercase tracking-tight">Main Technical Partner</h4>
                       </div>
                    </div>
                 </div>

                 <div className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-[40px] blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
                    <div className="relative bg-white p-8 rounded-[40px] border border-slate-100 shadow-lg flex items-center gap-8 border-l-4 border-l-yellow-400">
                       <div className="shrink-0 w-32 h-32 bg-white rounded-3xl flex items-center justify-center p-3 shadow-sm border border-slate-100 group-hover:scale-110 transition-transform duration-500 overflow-hidden">
                          <img src="/assets/sponsor/sponsor_08.png?v=1.0.1" alt="Gold Sponsor" className="w-full h-full object-contain transition-all duration-700" />
                       </div>
                       <div>
                          <span className="text-[9px] font-black uppercase tracking-[0.3em] text-yellow-600 mb-1 block">Gold Sponsor</span>
                          <h4 className="text-lg font-black text-icce-blue uppercase tracking-tight">Lead Financial Partner</h4>
                       </div>
                    </div>
                 </div>
              </div>

              {/* Partners Grid (Right Side - High Density) */}
              <div className="lg:col-span-7 bg-slate-50/50 p-10 rounded-[60px] border border-dashed border-slate-200">
                 <div className="flex items-center gap-3 mb-8">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Technical Partners</span>
                    <div className="h-px flex-grow bg-slate-200"></div>
                 </div>
                 <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                    {[
                      '/assets/sponsor/sponsor_01.png?v=1.0.1',
                      '/assets/sponsor/sponsor_03.png?v=1.0.1',
                      '/assets/sponsor/sponsor_04.png?v=1.0.1',
                      '/assets/sponsor/sponsor_05.png?v=1.0.1',
                      '/assets/sponsor/sponsor_06.png?v=1.0.1',
                      '/assets/sponsor/sponsor_07.png?v=1.0.1'
                    ].map((partner, i) => (
                       <motion.div 
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          className="bg-white p-0 rounded-3xl shadow-sm hover:shadow-md transition-all flex items-center justify-center aspect-video group border border-slate-100 overflow-hidden"
                       >
                          <img src={partner} alt={`Partner ${i+1}`} className="w-full h-full object-contain p-2 transition-all duration-700" />
                       </motion.div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
