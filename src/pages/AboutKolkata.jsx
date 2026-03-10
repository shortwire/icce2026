import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  MapPin, 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight,
  Mail,
  Phone,
  UserCheck,
  Building2,
  Trophy,
  History,
  Palette,
  BookOpen
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
            src={images[index].url}
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
          <h4 className="text-xl font-black text-white uppercase tracking-tight leading-none">{images[index].label}</h4>
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

const AboutKolkata = () => {
  const highlights = [
    {
      id: "1",
      icon: History,
      title: "Cultural Heritage",
      description: "Known as the 'City of Joy', it has a rich legacy of literature, art, and intellectual tradition."
    },
    {
      id: "2",
      icon: BookOpen,
      title: "Academic Hub",
      description: "Home to several renowned universities and research institutions, fostering scholarly exchanges."
    },
    {
      id: "3",
      icon: Building2,
      title: "Modern Infrastructure",
      description: "Vibrant culture and historic landmarks combined with modern infrastructure for global events."
    }
  ];

  const kolkataImages = [
    { url: '/assets/venue/spot-01.jpg', label: 'Victoria Memorial' },
    { url: '/assets/venue/spot-02.jpg', label: 'Indian Museum' },
    { url: '/assets/venue/spot-03.jpg', label: 'Science City' },
    { url: '/assets/venue/spot-04.jpg', label: 'Belur Math' },
    { url: '/assets/venue/spot-05.jpg', label: 'Eco Park' }
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
                <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px #191961' }}>Kolkata</span>
             </h1>
          </div>
          <div className="max-w-3xl md:text-right">
             <p className="text-[10px] font-black uppercase tracking-[0.3em] text-ieee-blue opacity-50 mb-2">The City of Joy</p>
             <p className="text-sm font-bold text-slate-500 leading-tight">A major cultural, educational, and commercial center of India, boasting a rich heritage and a vibrant modern atmosphere.</p>
          </div>
        </div>
      </header>

      <main className="container-boxed pt-4 pb-12 px-6">
        
        {/* --- MAIN CONTENT --- */}
        <div className="flex flex-col lg:flex-row gap-10">
           
           {/* LEFT: About Text */}
           <div className="flex-grow lg:max-w-[60%]">
              <section className="mb-12">
                 <div className="flex items-center gap-4 mb-6">
                    <h2 className="text-lg font-black text-icce-blue uppercase tracking-tight">City Overview</h2>
                    <div className="h-px flex-1 bg-slate-100"></div>
                 </div>
                 <div className="prose prose-slate max-w-none">
                    <p className="text-sm font-bold text-slate-600 leading-relaxed mb-6 text-justify">
                      Kolkata, the capital city of the state of West Bengal, is one of India’s major cultural, educational, and commercial centers. Known as the “City of Joy,” Kolkata has a rich heritage of literature, art, science, and intellectual tradition.
                    </p>
                    <p className="text-sm font-bold text-slate-600 leading-relaxed mb-6 text-justify">
                      The city is home to several renowned universities, research institutions, and technology organizations, making it an important hub for academic and scientific activities.
                    </p>
                    <p className="text-sm font-bold text-slate-600 leading-relaxed text-justify mb-12">
                      With its vibrant culture, historic landmarks, and modern infrastructure, Kolkata provides an ideal environment for international conferences and scholarly exchanges.
                    </p>
                 </div>
              </section>

              <section className="mb-12">
                 <div className="flex items-center gap-4 mb-6">
                    <h2 className="text-lg font-black text-icce-blue uppercase tracking-tight">Location Map</h2>
                    <div className="h-px flex-1 bg-slate-100"></div>
                 </div>
                 <div className="bg-white/5 rounded-[40px] text-white flex flex-col justify-end aspect-video shadow-2xl relative overflow-hidden group border-4 border-slate-50">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117925.33439927715!2d88.2649502!3d22.5354273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1709651000000!5m2!1sen!2sin" 
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
                        <h4 className="text-xl font-black uppercase tracking-tighter leading-none mb-1 text-white">Kolkata, West Bengal</h4>
                        <div className="inline-flex items-center text-xs font-black uppercase tracking-[0.2em] text-ieee-blue">
                            Google Maps <ExternalLink size={12} className="ml-2" />
                        </div>
                    </div>
                    
                    <a 
                        href="https://www.google.com/maps/place/Kolkata,+West+Bengal/@22.5354273,88.2649502,11z" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="absolute inset-0 z-20"
                        aria-label="View on Google Maps"
                    ></a>
                </div>
              </section>
           </div>

           {/* RIGHT: Highlights & Sidebar */}
           <div className="lg:w-[40%] space-y-6">
              <section className="bg-[#191961] p-8 rounded-[40px] text-white shadow-xl relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-400/10 rounded-bl-full"></div>
                 <div className="flex items-center gap-3 mb-6 relative z-10">
                    <Globe size={24} className="text-yellow-400" />
                    <h3 className="text-xl font-black uppercase tracking-tight">City Spirit</h3>
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

              <div className="flex items-center gap-4 mb-4">
                 <h2 className="text-lg font-black text-icce-blue uppercase tracking-tight">Explore Kolkata</h2>
                 <div className="h-px flex-1 bg-slate-100"></div>
              </div>

              <HomeCarousel 
                images={kolkataImages} 
                title="Kolkata Hub" 
                subtitle="City Landmarks"
              />

              <section className="p-8 border-2 border-slate-100 rounded-[40px] bg-slate-50/50 relative overflow-hidden">
                 <div className="absolute -top-10 -right-10 w-32 h-32 bg-ieee-blue/5 rounded-full blur-3xl"></div>
                 <div className="flex items-center gap-3 mb-6">
                    <History size={24} className="text-ieee-blue" />
                    <h3 className="text-xl font-black text-icce-blue uppercase tracking-tight">Cultural Hub</h3>
                 </div>
                 <div className="space-y-4">
                    <p className="text-xs font-bold text-slate-500 leading-relaxed">
                      Experience the unique blend of colonial-era architecture and modern development in India's intellectual capital.
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                        {['Literary Capital', 'Artistic Heritage', 'Academic Center', 'Scientific Hub'].map((tag, idx) => (
                            <div key={idx} className="py-2 px-3 bg-white rounded-xl border border-slate-100 shadow-sm text-[9px] font-black text-icce-blue uppercase tracking-widest text-center">
                                {tag}
                            </div>
                        ))}
                    </div>
                 </div>
              </section>
           </div>
        </div>
      </main>
    </div>
  );
};

export default AboutKolkata;
