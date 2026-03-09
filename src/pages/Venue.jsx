import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Navigation, Info, ExternalLink, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

const PageHero = ({ title, subtitle }) => (
  <section className="bg-[#0a0a2a] py-20 relative overflow-hidden text-center md:text-left">
     <div className="absolute top-0 right-0 w-1/4 h-full bg-ieee-blue/5 blur-3xl"></div>
     <div className="container-boxed px-6 relative z-10">
        <div className="max-w-4xl space-y-4">
           <span className="text-ieee-blue font-black uppercase tracking-[0.4em] text-[10px]">Destination</span>
           <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none">{title}</h1>
           <div className="w-16 h-1 bg-ieee-blue mx-auto md:mx-0"></div>
           <p className="text-gray-400 font-medium tracking-wide text-sm">{subtitle}</p>
        </div>
     </div>
  </section>
);

const CircularCarousel = ({ images, title, subtitle, className = "" }) => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const paginate = (newDirection) => {
    setDirection(newDirection);
    setIndex((prev) => (prev + newDirection + images.length) % images.length);
  };

  return (
    <div className={`relative group ${className}`}>
      <div className="absolute -inset-4 bg-gradient-to-tr from-ieee-blue/20 to-transparent blur-2xl rounded-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
      
      <div className="relative bg-white rounded-[40px] shadow-2xl overflow-hidden border border-slate-100 aspect-[4/5] md:aspect-square">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={index}
            src={images[index]}
            alt={`${title} ${index + 1}`}
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
        
        <div className="absolute inset-0 bg-gradient-to-t from-[#191961]/90 via-transparent to-transparent"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-8 space-y-2">
          <div className="flex items-center gap-2">
            <Camera size={14} className="text-ieee-blue" />
            <span className="text-[10px] font-black uppercase tracking-widest text-ieee-blue">{title}</span>
          </div>
          <h3 className="text-2xl font-black text-white uppercase tracking-tight leading-none">{subtitle}</h3>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest italic">Image {index + 1} of {images.length}</p>
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={() => paginate(-1)}
            className="p-3 bg-white/10 backdrop-blur-md hover:bg-white text-white hover:text-ieee-blue rounded-full transition-all"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => paginate(1)}
            className="p-3 bg-white/10 backdrop-blur-md hover:bg-white text-white hover:text-ieee-blue rounded-full transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="absolute top-4 right-4 flex gap-1">
          {images.map((_, i) => (
            <div 
              key={i}
              className={`h-1 rounded-full transition-all duration-500 ${i === index ? 'w-6 bg-ieee-blue' : 'w-2 bg-white/30'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Venue = () => {
  const spotImages = [
    '/assets/venue/spot-01.jpg',
    '/assets/venue/spot-02.jpg',
    '/assets/venue/spot-03.jpg',
    '/assets/venue/spot-04.jpg',
    '/assets/venue/spot-05.jpg'
  ];

  const venueImages = [
    '/assets/venue/venue_01.jpg',
    '/assets/venue/venue_02.jpg',
    '/assets/venue/venue_03.jpg'
  ];

  return (
    <div className="min-h-screen bg-[#F9FAFB]">
      <PageHero 
        title="Venue & Location" 
        subtitle="Experience the vibrant culture of Kolkata at Netaji Subhash Engineering College." 
      />
      
      <div className="container-boxed py-24 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-4 space-y-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-1 bg-ieee-blue"></div>
                <h2 className="text-3xl font-black text-[#191961] uppercase tracking-tight">The Venue</h2>
              </div>
              <p className="text-sm text-gray-500 font-medium leading-relaxed italic text-justify">
                Netaji Subhash Engineering College (NSEC) is one of the pioneer technical institutions in eastern India, dedicated to excellence in engineering education and research.
              </p>
              
              <div className="boutique-card p-8 bg-white space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-50 text-ieee-blue rounded-xl shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-[#191961] uppercase tracking-tight">Address</h4>
                    <p className="text-xs text-gray-500 font-bold italic">
                      Techno City, Panchpota, Garia,<br />
                      Kolkata - 700152, West Bengal, India
                    </p>
                  </div>
                </div>
                <div className="h-px bg-slate-100"></div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Navigation size={14} className="text-ieee-blue" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Garia Station nearby</span>
                  </div>
                  <a 
                    href="https://www.google.co.in/maps/place/Netaji+Subhash+Engineering+College/@22.4762837,88.4123703,17z/data=!3m1!4b1!4m6!3m5!1s0x3a02722b05a38e87:0x276c0d30e6be12ea!8m2!3d22.4762788!4d88.4149452!16s%2Fm%2F026y4qr?authuser=0&entry=ttu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[10px] font-black uppercase tracking-widest text-ieee-blue hover:underline flex items-center gap-1"
                  >
                    Get Directions <ExternalLink size={10} />
                  </a>
                </div>
              </div>
            </div>

            <CircularCarousel 
              images={venueImages} 
              title="Campus Highlights" 
              subtitle="NSEC Infrastructure"
              className="lg:translate-x-8"
            />
          </div>

          <div className="lg:col-span-8 space-y-12">
            <div className="rounded-[40px] overflow-hidden shadow-2xl border-4 border-white aspect-video relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.7570123512347!2d88.4123703!3d22.4762837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02722b05a38e87%3A0x276c0d30e6be12ea!2sNetaji%20Subhash%20Engineering%20College!5e0!3m2!1sen!2sin!4v1709650000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-1000"
              ></iframe>
              <div className="absolute top-6 left-6 pointer-events-none">
                 <div className="bg-[#191961] text-white px-6 py-3 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-md">
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] block mb-1 text-ieee-blue">Interactive Map</span>
                    <h3 className="text-lg font-black uppercase tracking-tight">Locate Us</h3>
                 </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-1 bg-yellow-400"></div>
                  <h2 className="text-3xl font-black text-[#191961] uppercase tracking-tight">Kolkata City</h2>
                </div>
                <p className="text-sm text-gray-500 font-medium leading-relaxed italic text-justify">
                  Known as the 'City of Joy', Kolkata is the cultural capital of India. From colonial-era architecture to world-class cuisine and a deep-rooted passion for arts and science, it offers a unique experience to every visitor.
                </p>
                <div className="boutique-card p-6 border-l-4 border-yellow-400 bg-yellow-50/50">
                  <div className="flex items-center gap-3 mb-2">
                    <Info size={16} className="text-yellow-600" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-yellow-600">Travel Tip</span>
                  </div>
                  <p className="text-xs font-bold text-yellow-800 leading-relaxed">
                    The conference dates coincide with pleasant autumn weather, ideal for exploring the historic landmarks of the city.
                  </p>
                </div>
              </div>
              
              <CircularCarousel 
                images={spotImages} 
                title="City Attractions" 
                subtitle="Explore Kolkata"
                className="md:-translate-y-12"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Venue;
