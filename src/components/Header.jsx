import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Home as HomeIcon, ShieldCheck } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      name: 'ABOUT', 
      dropdown: [
        { name: 'About ICCE 2026', path: '/about' },
        { name: 'Topics', path: '/topics' },
        { name: 'About NSEC', path: '/about-nsec' },
        { name: 'About Kolkata', path: '/about-kolkata' },
        { name: 'Contact Us', path: '/contact' },
      ]
    },
    { 
      name: 'COMMITTEES', 
      dropdown: [
        { name: 'Advisory Committee', path: '/advisory' },
        { name: 'Organising Committee', path: '/organising' },
        { name: 'Technical Committee', path: '/tpc' },
        { name: 'Publication Committee', path: '/publication' },
        { name: 'All Other Committees', path: '/other-committees' },
      ]
    },
    { 
      name: 'AUTHORS', 
      dropdown: [
        { name: 'Important Dates', path: '/dates' },
        { name: 'Call for Papers', path: '/cfp' },
        { name: 'Paper Template', path: '/template' },
        { name: 'Submission Guidelines', path: '/guidelines' },
        { name: 'Paper Submission', path: '/submission' },
        { name: 'Support to Students', path: '/students' },
      ]
    },
    { 
      name: 'PROGRAM', 
      dropdown: [
        { name: 'At a Glance', path: '/program' },
        { name: 'Keynote Speakers', path: '/keynotes' },
        { name: 'Special Sessions', path: '/special-sessions' },
        { name: 'Workshop', path: '/workshop' },
        { name: 'Tutorials', path: '/tutorials' },
      ]
    },
    { 
      name: 'REGISTRATION', 
      dropdown: [
        { name: 'Registration to ICCE 2026', path: '/registration' },
        { name: 'Important Information', path: '/imp-info' },
        { name: 'Registration Fees', path: '/fees' },
        { name: 'Accommodation', path: '/accommodation' },
        { name: 'Visa', path: '/visa' },
      ]
    },
    { 
      name: 'PARTNERS', 
      dropdown: [
        { name: 'IEEE Chapters', path: '/ieee' },
        { name: 'Industry Partners', path: '/partners' },
        { name: 'Sponsors', path: '/sponsors' },
        { name: 'Sponsor Opportunity', path: '/sponsor-opp' },
      ]
    },
    { name: 'VENUE', path: '/venue' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <header className="w-full z-50 flex flex-col font-sans">
      {/* 0. STICKY NOTIFICATION BAR */}
      <div className="w-full bg-ieee-blue text-white py-1.5 overflow-hidden sticky top-0 z-[60]">
        <div className="container-boxed flex justify-center items-center px-4">
          <div className="flex items-center space-x-3 animate-pulse">
            <ShieldCheck size={14} className="text-white" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap">
              Deadline Reminder: Paper Submission Closes July 15, 2026
            </span>
            <Link to="/submission" className="bg-white text-ieee-blue px-2 py-0.5 rounded text-[8px] font-black uppercase tracking-widest hover:bg-slate-100 transition-all">
              Submit Now
            </Link>
          </div>
        </div>
      </div>

      {/* 1. SUBTLE TOP UTILITY BAR (Very compact) */}
      <div className="w-full bg-[#f8f9fa] border-b border-gray-100 py-1 text-[9px] text-gray-400 font-bold uppercase tracking-widest">
        <div className="max-w-[1200px] mx-auto flex justify-center md:justify-start items-center space-x-4 px-4">
          <a href="https://www.ieee.org" className="hover:text-ieee-blue transition-colors">IEEE.org</a>
          <span className="text-gray-200">|</span>
          <a href="https://ieeexplore.ieee.org" className="hover:text-ieee-blue transition-colors">IEEE <i>Xplore</i></a>
          <span className="text-gray-200">|</span>
          <a href="https://standards.ieee.org" className="hover:text-ieee-blue transition-colors">IEEE Standards</a>
          <span className="text-gray-200">|</span>
          <a href="https://spectrum.ieee.org" className="hover:text-ieee-blue transition-colors">IEEE Spectrum</a>
          <span className="text-gray-200">|</span>
          <a href="http://www.ieee.org/sitemap.html?WT.mc_id=mn_smap" className="hover:text-ieee-blue transition-colors">More Sites</a>

        </div>
      </div>

      {/* 2. BOUTIQUE LOGO SECTION (Thin & High Density) */}
      <div className="w-full bg-white py-2 md:py-3 border-b border-slate-50">
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-4 md:gap-0">
          {/* Main Identity */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <Link to="/" className="flex-shrink-0">
              <img src="/assets/logos/icce2026-logo-FINAL.jpg" alt="ICCE 2026" className="h-14 md:h-16" />
            </Link>
            <div className="border-l border-slate-100 pl-4 md:pl-6">
              <h1 className="text-lg md:text-xl lg:text-[24px] font-black text-icce-blue tracking-tighter leading-none uppercase font-heading">
                International Conference for<br className="hidden md:block"/> Convergence in Engineering
              </h1>

            </div>
          </div>

          {/* Partner Logos Horizontal Array (Aligned precisely to image) */}
          <div className="flex items-center space-x-6 md:space-x-10 shrink-0">
             <img src="/assets/logos/ieee-ap-mtt.png" alt="IEEE AP-MTT" className="h-10 md:h-12 object-contain" />
             <div className="h-10 w-px bg-slate-100"></div>
             <img src="/assets/logos/iqac.png" alt="IQAC NSEC" className="h-10 md:h-12 object-contain" />
             <div className="h-10 w-px bg-slate-100"></div>
             
             {/* New Combined TIG Logo Image */}
             <div className="flex flex-col items-center">
                <img src="/assets/logos/nsec.jpg" alt="TIG & NSEC Initiative" className="h-10 md:h-12 object-contain" />
             </div>
          </div>
        </div>
      </div>

      {/* 3. PRECISE NAVIGATION (Condensed Height) */}
      <nav className={`w-full transition-all duration-300 ${scrolled ? 'bg-icce-blue/95 backdrop-blur-md shadow-xl sticky top-0' : 'bg-[#264E68]'}`}>
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex items-center h-10">
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center w-full h-full">
              <Link to="/" className={`px-4 h-full flex items-center transition-colors ${location.pathname === '/' ? 'bg-icce-blue text-white' : 'text-white hover:bg-icce-blue/50'}`}>
                <HomeIcon size={16} />
              </Link>
              
              {navItems.map((item) => (
                <div key={item.name} className="relative group h-full">
                  {item.dropdown ? (
                    <>
                      <button className="px-4 h-full flex items-center text-[11px] font-black text-white tracking-widest hover:bg-icce-blue/50 transition-all border-r border-white/5 last:border-0">
                        {item.name}
                        <ChevronDown size={10} className="ml-1 opacity-50 group-hover:rotate-180 transition-transform" />
                      </button>
                      {/* Boutique Dropdown */}
                      <div className="absolute left-0 top-full w-56 bg-white shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-[100] border-t-2 border-ieee-blue">
                        {item.dropdown.map((sub) => (
                          <Link 
                            key={sub.name} 
                            to={sub.path} 
                            className="block px-5 py-2.5 text-[10px] text-gray-600 font-bold uppercase tracking-widest hover:bg-slate-50 hover:text-ieee-blue transition-colors border-b border-gray-50 last:border-0"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    item.name !== 'Home' && (
                      <Link to={item.path} className="px-4 h-full flex items-center text-[11px] font-black text-white tracking-widest hover:bg-icce-blue/50 transition-all border-r border-white/5 last:border-0">
                        {item.name}
                      </Link>
                    )
                  )}
                </div>
              ))}
              
              {/* Search Icon placeholder */}
              <div className="ml-auto flex items-center h-full px-4 border-l border-white/5 text-white/50 hover:text-white cursor-pointer transition-colors">
                 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
              </div>
            </div>

            {/* Mobile Toggle */}
            <div className="lg:hidden flex items-center justify-between w-full h-full text-white">
               <span className="font-black text-[10px] tracking-[0.3em] uppercase opacity-70">Menu</span>
               <button onClick={() => setIsOpen(!isOpen)} className="p-2">
                 {isOpen ? <X size={24} /> : <Menu size={24} />}
               </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-500 bg-[#14144d] ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
           <div className="px-6 py-8 space-y-6">
              {navItems.map((item) => (
                <div key={item.name} className="space-y-3">
                   <div className="text-ieee-blue font-black text-[10px] uppercase tracking-[0.3em] opacity-50 border-b border-white/5 pb-1">
                     {item.name}
                   </div>
                   {item.dropdown ? (
                      <div className="flex flex-col space-y-3 ml-2">
                        {item.dropdown.map((sub) => (
                          <Link key={sub.name} to={sub.path} onClick={() => setIsOpen(false)} className="text-gray-300 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                   ) : (
                     <Link to={item.path} onClick={() => setIsOpen(false)} className="text-white text-xs font-black uppercase tracking-widest ml-2">
                        {item.name}
                     </Link>
                   )}
                </div>
              ))}
           </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
