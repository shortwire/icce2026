import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <header className="container-boxed pt-8 pb-2 px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-b border-slate-50 pb-4">
          <div className="relative group">
             <h1 className="text-4xl md:text-5xl font-black text-icce-blue uppercase leading-none tracking-tighter">
                Terms <br/>
                <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px #191961' }}>of Use</span>
             </h1>
          </div>
          <div className="max-w-md md:text-right">
             <p className="text-[10px] font-black uppercase tracking-[0.3em] text-ieee-blue opacity-50 mb-1">ICCE 2026</p>
             <p className="text-xs font-bold text-slate-500 leading-snug">Review our conference terms and conditions.</p>
          </div>
        </div>
      </header>
      <main className="container-boxed pt-2 pb-8 px-6">
        <div className="w-full h-[800px] border-2 border-slate-50 rounded-[30px] overflow-hidden shadow-inner bg-slate-50 relative group">
          <iframe 
            src="/assets/docs/ICCE%202026%20Terms%20of%20Use.pdf" 
            width="100%" 
            height="100%" 
            style={{ border: 'none' }}
            title="Terms of Use"
            className="rounded-[30px]"
          />
        </div>
      </main>
    </div>
  );
};

export default Terms;
