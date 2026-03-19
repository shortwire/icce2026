import React from 'react';
import { Mail, MapPin, Phone, Facebook, Twitter, Linkedin, ExternalLink, ShieldCheck, Calendar, UserCheck, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const importantDates = [
    { label: 'Paper Submission Deadline', date: 'July 15, 2026', status: 'open' },
    { label: 'Notification of Acceptance', date: 'August 31, 2026', status: 'upcoming' },
    { label: 'Conference Dates', date: 'Nov 19-21, 2026', status: 'event' }
  ];

  return (
    <footer className="bg-[#0a0a2a] text-white pt-12 pb-12 border-t-8 border-ieee-blue relative overflow-hidden">
      {/* Subtle Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-ieee-blue/5 blur-3xl -z-0"></div>
      
      <div className="container-boxed px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 pb-20 border-b border-white/5">
          
          {/* Column 1: Identity */}
          <div className="lg:col-span-1 space-y-8">
             <div className="flex flex-col items-center text-center">
                <img src="/assets/logos/icce2026-logo-FINAL_red.png?v=1.0.1" alt="ICCE 2026" className="h-16 w-auto object-contain mb-4 filter brightness-0 invert" />
                <span className="text-ieee-blue font-black uppercase tracking-[0.3em] text-[10px]">Kolkata, India</span>
             </div>
             <p className="text-[11px] text-gray-400 leading-relaxed text-justify italic font-medium">
                The 2nd International Conference for Convergence in Engineering (ICCE 2026) provides a global platform for interdisciplinary research in emerging engineering domains.
             </p>
             <div className="flex space-x-3">
                <a href="https://www.facebook.com/icce2026/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/5 hover:bg-ieee-blue transition-all rounded-lg flex items-center justify-center border border-white/10 group">
                   <Facebook size={14} className="group-hover:scale-110 transition-transform" />
                </a>
                {[Twitter, Linkedin].map((Icon, i) => (
                  <Link key={i} to="/" className="w-8 h-8 bg-white/5 hover:bg-ieee-blue transition-all rounded-lg flex items-center justify-center border border-white/10 group">
                     <Icon size={14} className="group-hover:scale-110 transition-transform" />
                  </Link>
                ))}
             </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-8">
             <h4 className="text-xs font-black uppercase tracking-[0.3em] text-ieee-blue border-l-2 border-ieee-blue pl-3">Conference</h4>
             <ul className="space-y-3 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                <li><Link to="/about" className="hover:text-white transition-all flex items-center gap-2"><ChevronRight size={10} /> About ICCE</Link></li>
                <li><Link to="/organising" className="hover:text-white transition-all flex items-center gap-2"><ChevronRight size={10} /> Committees</Link></li>
                <li><Link to="/topics" className="hover:text-white transition-all flex items-center gap-2"><ChevronRight size={10} /> Research Tracks</Link></li>
                <li><Link to="/keynotes" className="hover:text-white transition-all flex items-center gap-2"><ChevronRight size={10} /> Keynote Speakers</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-all flex items-center gap-2"><ChevronRight size={10} /> Contact Us</Link></li>
             </ul>
          </div>

          {/* Column 3: Authors & Registration */}
          <div className="space-y-8">
             <h4 className="text-xs font-black uppercase tracking-[0.3em] text-ieee-blue border-l-2 border-ieee-blue pl-3">Submission</h4>
             <ul className="space-y-3 text-[11px] font-bold text-gray-400 uppercase tracking-widest">
                <li><Link to="/cfp" className="hover:text-white transition-all flex items-center gap-2"><ChevronRight size={10} /> Call for Papers</Link></li>
                <li><Link to="/registration" className="hover:text-white transition-all flex items-center gap-2"><ChevronRight size={10} /> Registration</Link></li>
                <li><Link to="/venue" className="hover:text-white transition-all flex items-center gap-2"><ChevronRight size={10} /> Venue Info</Link></li>
                <li><Link to="/accommodation" className="hover:text-white transition-all flex items-center gap-2"><ChevronRight size={10} /> Accommodation</Link></li>
             </ul>
          </div>

          {/* Column 4: Contact & Support */}
          <div className="space-y-8">
             <h4 className="text-xs font-black uppercase tracking-[0.3em] text-ieee-blue border-l-2 border-ieee-blue pl-3">Contact</h4>
             <ul className="space-y-5">
                <li className="flex items-start gap-3">
                   <Mail className="text-ieee-blue shrink-0 mt-0.5" size={16} />
                   <div className="flex flex-col">
                      <span className="text-[9px] uppercase font-black text-gray-500 tracking-widest mb-1">Official Email</span>
                      <a href="mailto:icce2026@nsec.ac.in" className="text-[11px] font-bold hover:text-ieee-blue transition-colors break-all">icce2026@nsec.ac.in</a>
                   </div>
                </li>
                <li className="flex items-start gap-3">
                   <UserCheck className="text-ieee-blue shrink-0 mt-0.5" size={16} />
                   <div className="flex flex-col">
                      <span className="text-[9px] uppercase font-black text-gray-500 tracking-widest mb-1">Conference Secretary</span>
                      <a href="tel:+919831817307" className="text-[11px] font-bold text-white hover:text-ieee-blue transition-colors mt-1">+91 9831817307</a>
                   </div>
                </li>
                <li className="flex items-start gap-3">
                   <MapPin className="text-ieee-blue shrink-0 mt-0.5" size={16} />
                   <div className="flex flex-col">
                      <span className="text-[9px] uppercase font-black text-gray-500 tracking-widest mb-1">Host Institution</span>
                      <span className="text-[11px] font-black uppercase text-white mb-1">Netaji Subhash Engineering College</span>
                      <span className="text-[10px] font-medium text-gray-400 leading-tight">Techno City, Panchpota, Garia, Kolkata,<br/>West Bengal, India. PIN: 700 152</span>
                   </div>
                </li>
             </ul>
          </div>

          {/* Column 5: Important Dates */}
          <div className="space-y-8">
             <h4 className="text-xs font-black uppercase tracking-[0.3em] text-ieee-blue border-l-2 border-ieee-blue pl-3">Deadlines</h4>
             <div className="space-y-4">
                {importantDates.map((item, idx) => (
                  <div key={idx} className="bg-white/5 p-4 rounded-2xl border border-white/5 group hover:bg-white/10 transition-all">
                     <div className="flex items-center justify-between mb-1">
                        <span className="text-[9px] font-black uppercase tracking-widest text-gray-500">{item.label}</span>
                        <Calendar size={10} className="text-ieee-blue opacity-50" />
                     </div>
                     <p className={`text-[11px] font-black uppercase tracking-tighter ${item.status === 'open' ? 'text-yellow-400' : 'text-white'}`}>
                        {item.date}
                     </p>
                  </div>
                ))}
             </div>
          </div>

          {/* Column 6: Venue Map */}
          <div className="lg:col-span-1 space-y-8">
             <h4 className="text-xs font-black uppercase tracking-[0.3em] text-ieee-blue border-l-2 border-ieee-blue pl-3">Location</h4>
             <div className="bg-white/5 rounded-2xl text-white flex flex-col justify-end aspect-square shadow-xl relative overflow-hidden group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60000.7570123512347!2d88.4123703!3d22.4762837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02722b05a38e87%3A0x276c0d30e6be12ea!2sNetaji%20Subhash%20Engineering%20College!5e0!3m2!1sen!2sin!4v1709650000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 w-full h-full filter grayscale contrast-125 opacity-40 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-1000"
                ></iframe>
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a2a] via-[#0a0a2a]/20 to-transparent pointer-events-none group-hover:opacity-0 transition-opacity duration-1000"></div>

                <div className="relative z-10 p-4 pointer-events-none">
                   <MapPin className="text-ieee-blue mb-2 shrink-0" size={16} />
                   <h4 className="text-[11px] font-black uppercase tracking-tighter leading-none mb-1 text-white">NSEC Kolkata</h4>
                   <div className="inline-flex items-center text-[8px] font-black uppercase tracking-[0.2em] text-ieee-blue">
                     Google Maps <ExternalLink size={8} className="ml-1" />
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
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-0 flex flex-col md:flex-row justify-between items-center gap-6 pt-2">
           <div className="flex flex-col items-center md:items-start space-y-2">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                © {currentYear}. 2nd International Conference for Convergence in Engineering.
              </p>
           </div>
           <div className="flex items-center space-x-6 text-[9px] font-black uppercase tracking-widest text-gray-500">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
