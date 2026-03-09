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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 pb-20 border-b border-white/5">
          
          {/* Column 1: Identity */}
          <div className="lg:col-span-1 space-y-8">
             <div className="flex flex-col">
                <img src="/assets/logos/icce2026-logo-FINAL_red.png" alt="ICCE 2026" className="h-16 w-auto object-contain mb-4 filter brightness-0 invert" />
                <span className="text-xl font-black tracking-tighter text-white leading-tight uppercase">ICCE 2026</span>
                <span className="text-ieee-blue font-black uppercase tracking-[0.3em] text-[10px]">Kolkata, India</span>
             </div>
             <p className="text-[11px] text-gray-400 leading-relaxed text-justify italic font-medium">
                The 2nd International Conference for Convergence in Engineering (ICCE 2026) provides a global platform for interdisciplinary research in emerging engineering domains.
             </p>
             <div className="flex space-x-3">
                {[Facebook, Twitter, Linkedin].map((Icon, i) => (
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
                <li><Link to="/submission" className="hover:text-white transition-all flex items-center gap-2"><ChevronRight size={10} /> Guidelines</Link></li>
                <li><Link to="/registration" className="hover:text-white transition-all flex items-center gap-2"><ChevronRight size={10} /> Registration</Link></li>
                <li><Link to="/venue" className="hover:text-white transition-all flex items-center gap-2"><ChevronRight size={10} /> Venue Info</Link></li>
                <li><Link to="/accommodation" className="hover:text-white transition-all flex items-center gap-2"><ChevronRight size={10} /> Accommodation</Link></li>
             </ul>
          </div>

          {/* Column 4: Contact & Support */}
          <div className="space-y-8">
             <h4 className="text-xs font-black uppercase tracking-[0.3em] text-ieee-blue border-l-2 border-ieee-blue pl-3">Support</h4>
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
                      <span className="text-[9px] uppercase font-black text-gray-500 tracking-widest mb-1">Organizing Secretary</span>
                      <span className="text-[11px] font-black uppercase text-white">Rajkumar Patra</span>
                      <a href="tel:+919831817307" className="text-[10px] font-bold text-gray-400 hover:text-white transition-colors mt-1">+91 9831817307</a>
                   </div>
                </li>
                <li className="flex items-start gap-3">
                   <MapPin className="text-ieee-blue shrink-0 mt-0.5" size={16} />
                   <div className="flex flex-col">
                      <span className="text-[9px] uppercase font-black text-gray-500 tracking-widest mb-1">Host Institution</span>
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
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="flex flex-col items-center md:items-start space-y-2">
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">
                © {currentYear} ICCE 2026. Technical Co-Sponsorship of IEEE Kolkata Section.
              </p>
           </div>
           <div className="flex items-center space-x-6 text-[9px] font-black uppercase tracking-widest text-gray-500">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Use</Link>
              <a href="https://www.ieee.org" target="_blank" className="flex items-center gap-1 hover:text-white transition-colors">
                IEEE.org <ExternalLink size={10} />
              </a>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
