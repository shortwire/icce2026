import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  Award, 
  Users, 
  Target,
  CheckCircle2,
  Star,
  BookOpen,
  Zap,
  ShieldCheck,
  MapPin,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Building2,
  Lightbulb,
  Mail,
  Phone,
  MessageSquare
} from 'lucide-react';

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

const AboutNSEC = () => {
  const highlights = [
    {
      id: "1",
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "Premier technical institution accredited by NAAC and NBA, offering industry-aligned engineering programs."
    },
    {
      id: "2",
      icon: Lightbulb,
      title: "Research & Innovation",
      description: "A vibrant research culture aiming to develop innovators capable of addressing global technological challenges."
    },
    {
      id: "3",
      icon: Building2,
      title: "Modern Infrastructure",
      description: "State-of-the-art labs and academic environment supported by active industry collaboration."
    }
  ];

  const missionItems = [
    "To impart total quality education to develop innovative, entrepreneurial and ethical future professionals fit for globally competitive environment.",
    "To share with stake holders institutional experience in education and knowledge for mutual enrichment in the field of technical education.",
    "To create an ambience in which new ideas, research and scholarship flourish and from which leaders, innovators and entrepreneurs of tomorrow emerge.",
    "To contribute to the socio-economic development of the society through scientific and technological services."
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
                About <br/>
                <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px #191961' }}>NSEC</span>
             </h1>
          </div>
          <div className="max-w-3xl md:text-right">
             <p className="text-[10px] font-black uppercase tracking-[0.3em] text-ieee-blue opacity-50 mb-2">Techno City Hub</p>
             <p className="text-sm font-bold text-slate-500 leading-tight">Netaji Subhash Engineering College (NSEC) is a premier technical institution in Kolkata, dedicated to excellence in engineering education and research since its inception.</p>
          </div>
        </div>
      </header>

      <main className="container-boxed pt-4 pb-12 px-6">
        
        {/* --- ROW 1: PROFILE & HIGHLIGHTS --- */}
        <div className="flex flex-col lg:flex-row gap-10 mb-12">
           
           {/* LEFT: About Text */}
           <div className="flex-grow lg:max-w-[60%]">
              <section>
                 <div className="flex items-center gap-4 mb-6">
                    <h2 className="text-lg font-black text-icce-blue uppercase tracking-tight">Institutional Profile</h2>
                    <div className="h-px flex-1 bg-slate-100"></div>
                 </div>
                 <div className="prose prose-slate max-w-none">
                    <p className="text-sm font-bold text-slate-600 leading-relaxed mb-4 text-justify">
                      Netaji Subhash Engineering College (NSEC), located in Kolkata, India, is a premier technical institution dedicated to excellence in engineering education, research, and innovation. The college is affiliated with Maulana Abul Kalam Azad University of Technology (MAKAUT), West Bengal, approved by AICTE, and accredited by NAAC.
                    </p>
                    <p className="text-sm font-bold text-slate-600 leading-relaxed mb-4 text-justify">
                      Several undergraduate programs, including Computer Science & Engineering (CSE), Electrical Engineering (EE), Electronics & Communication Engineering (ECE), and Biomedical Engineering (BME), are accredited by the National Board of Accreditation (NBA).
                    </p>
                    <p className="text-sm font-bold text-slate-600 leading-relaxed text-justify mb-8">
                      The institution offers a strong academic environment supported by modern infrastructure, active industry collaboration, and a vibrant research culture, aiming to develop skilled engineers and innovators capable of addressing contemporary technological and societal challenges.
                    </p>

                    <div className="bg-slate-50 p-8 rounded-[40px] border border-slate-100 mb-8">
                        <div className="flex items-center gap-3 mb-4">
                            <Target size={20} className="text-ieee-blue" />
                            <h3 className="text-lg font-black text-icce-blue uppercase tracking-tight">Vision</h3>
                        </div>
                        <p className="text-sm font-bold text-slate-600 leading-relaxed italic border-l-4 border-yellow-400 pl-6">
                            To strive continuously in pursuit of excellence in Education, Research and Entrepreneurship eventually to become a Global Hub, and offer scientific and technological services to the society.
                        </p>
                    </div>

                    <div className="flex items-center gap-4 mb-6">
                        <h2 className="text-lg font-black text-icce-blue uppercase tracking-tight">Mission</h2>
                        <div className="h-px flex-1 bg-slate-100"></div>
                    </div>
                    <div className="grid grid-cols-1 gap-1.5">
                        {missionItems.map((item, idx) => (
                        <motion.div 
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="flex items-start gap-4 py-1.5 px-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-ieee-blue/20 transition-all group"
                        >
                            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm shrink-0 group-hover:bg-ieee-blue transition-colors">
                                <span className="text-[10px] font-black text-ieee-blue group-hover:text-white transition-colors">{idx + 1}</span>
                            </div>
                            <p className="text-xs font-bold text-slate-600 leading-relaxed pt-1">{item}</p>
                        </motion.div>
                        ))}
                    </div>
                 </div>
              </section>
           </div>

           {/* RIGHT: Highlights & Carousel */}
           <div className="lg:w-[40%] space-y-6">
              <section className="bg-[#191961] p-8 rounded-[40px] text-white shadow-xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-bl-full"></div>
                 <div className="flex items-center gap-3 mb-6 relative z-10">
                    <Target size={24} className="text-yellow-400" />
                    <h3 className="text-xl font-black uppercase tracking-tight">Key Highlights</h3>
                 </div>
                 <div className="space-y-6 relative z-10">
                    {highlights.map((item) => (
                      <div key={item.id} className="flex gap-4 group">
                         <div className="mt-1">
                            <item.icon size={20} className="text-yellow-400 group-hover:scale-110 transition-transform" />
                         </div>
                         <div className="space-y-1">
                            <h4 className="text-[11px] font-black uppercase tracking-widest text-white">{item.title}</h4>
                            <p className="text-[10px] font-bold text-slate-300 leading-relaxed">{item.description}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </section>

              <HomeCarousel 
                images={[
                    '/assets/venue/venue_01.jpg',
                    '/assets/venue/venue_02.jpg',
                    '/assets/venue/venue_03.jpg'
                ]} 
                title="Campus Hub" 
                subtitle="NSEC Infrastructure"
              />
           </div>
        </div>

        {/* --- ROW 2: LOCATION & CONTACT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
           
           {/* LEFT (7 cols): Location & Connectivity */}
           <div className="lg:col-span-7">
              <section className="h-full">
                 <div className="flex items-center gap-4 mb-6">
                    <h2 className="text-lg font-black text-icce-blue uppercase tracking-tight">Location & Connectivity</h2>
                    <div className="h-px flex-1 bg-slate-100"></div>
                 </div>
                 <div className="bg-white/5 rounded-[40px] text-white flex flex-col justify-end aspect-video lg:aspect-auto lg:h-[calc(100%-3rem)] shadow-2xl relative overflow-hidden group border-4 border-slate-50">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60000.7570123512347!2d88.4123703!3d22.4762837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02722b05a38e87%3A0x276c0d30e6be12ea!2sNetaji%20Subhash%20Engineering%20College!5e0!3m2!1sen!2sin!4v1709650000000!5m2!1sen!2sin" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        className="absolute inset-0 w-full h-full filter grayscale contrast-125 opacity-70 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"
                    ></iframe>
                    
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a2a] via-transparent to-transparent pointer-events-none group-hover:opacity-0 transition-opacity duration-1000"></div>

                    <div className="relative z-10 p-8 pointer-events-none">
                        <MapPin className="text-ieee-blue mb-2 shrink-0" size={24} />
                        <h4 className="text-xl font-black uppercase tracking-tighter leading-none mb-1 text-white">NSEC Kolkata</h4>
                        <div className="inline-flex items-center text-xs font-black uppercase tracking-[0.2em] text-ieee-blue">
                            View on Google Maps <ExternalLink size={12} className="ml-2" />
                        </div>
                    </div>
                    
                    <a 
                        href="https://www.google.co.in/maps/place/Netaji+Subhash+Engineering+College/@22.4762837,88.4123703,17z/data=!3m1!4b1!4m6!3m5!1s0x3a02722b05a38e87:0x276c0d30e6be12ea!8m2!3d22.4762788!4d88.4149452!16s%2Fm%2F026y4qr?authuser=0&entry=ttu" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="absolute inset-0 z-20"
                        aria-label="View on Google Maps"
                    ></a>
                </div>
              </section>
           </div>

           {/* RIGHT (5 cols): Accreditation & Contact */}
           <div className="lg:col-span-5 space-y-6 flex flex-col">
              {/* Accreditation */}
              <section className="p-8 border-2 border-slate-100 rounded-[40px] bg-slate-50/50 relative">
                 <div className="flex items-center gap-3 mb-6">
                    <Award size={24} className="text-ieee-blue" />
                    <h3 className="text-xl font-black text-icce-blue uppercase tracking-tight">Accreditation</h3>
                 </div>
                 <div className="space-y-4">
                    <p className="text-xs font-bold text-slate-500 leading-relaxed">
                      NSEC is recognized for its commitment to quality education through multiple national accreditations.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                        <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                                <ShieldCheck size={20} className="text-ieee-blue" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-ieee-blue">NAAC Accredited</p>
                                <p className="text-[9px] font-bold text-slate-400">Institutional Excellence</p>
                            </div>
                        </div>
                        <div className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center">
                                <Award size={20} className="text-yellow-600" />
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-widest text-yellow-600">NBA Accredited</p>
                                <p className="text-[9px] font-bold text-slate-400">CSE, EE, ECE, BME Programs</p>
                            </div>
                        </div>
                    </div>
                 </div>
              </section>

              {/* Contact NSEC */}
              <section className="flex-grow">
                 <div className="bg-white rounded-[40px] border-2 border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
                    <div className="p-6 flex flex-row items-center gap-6 bg-slate-50 border-b border-slate-100">
                        <a href="https://nsec.ac.in" target="_blank" rel="noopener noreferrer" className="block shrink-0 hover:scale-105 transition-transform">
                             <img src="/assets/logos/nsec_logo_w1013xh1363.png?v=1.0.1" alt="NSEC Logo" className="h-12 w-auto object-contain" />
                        </a>
                        <div className="space-y-0.5">
                            <span className="text-[9px] font-black uppercase text-ieee-blue tracking-widest block">Official Site</span>
                            <a href="https://nsec.ac.in" target="_blank" rel="noopener noreferrer" className="text-xs font-black text-icce-blue flex items-center gap-1">
                                nsec.ac.in <ExternalLink size={10} />
                            </a>
                        </div>
                    </div>
                    <div className="p-8 space-y-6 flex-grow">
                        <div className="space-y-2">
                             <span className="text-[9px] font-black uppercase text-slate-400 tracking-[0.2em] block">Conference Secretary</span>
                             <div className="flex items-center gap-3">
                                <div className="p-2 bg-ieee-blue/10 rounded-lg">
                                    <Phone size={14} className="text-ieee-blue" />
                                </div>
                                <a href="tel:+919831817307" className="text-base font-black text-icce-blue hover:text-ieee-blue transition-colors">+91 9831817307</a>
                             </div>
                        </div>
                        <div className="h-px bg-slate-100"></div>
                        <div className="space-y-2">
                             <span className="text-[9px] font-black uppercase text-slate-400 tracking-[0.2em] block">Campus Address</span>
                             <div className="flex items-start gap-3">
                                <div className="p-2 bg-ieee-blue/10 rounded-lg mt-1">
                                    <Building2 size={14} className="text-ieee-blue" />
                                </div>
                                <p className="text-[11px] font-bold text-slate-500 leading-relaxed">
                                   Techno City, Panchpota, Garia, Kolkata,<br />
                                   West Bengal, India. PIN: 700 152
                                </p>
                             </div>
                        </div>
                    </div>
                 </div>
              </section>
           </div>
        </div>
      </main>
    </div>
  );
};

export default AboutNSEC;