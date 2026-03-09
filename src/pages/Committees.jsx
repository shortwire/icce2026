import React from 'react';

const PageHero = ({ title, subtitle }) => (
  <section className="bg-[#0a0a2a] py-20 relative overflow-hidden">
     <div className="absolute top-0 right-0 w-1/4 h-full bg-ieee-blue/5 blur-3xl"></div>
     <div className="container-boxed px-6 relative z-10 text-center md:text-left">
        <div className="max-w-4xl space-y-4">
           <span className="text-ieee-blue font-black uppercase tracking-[0.4em] text-[10px]">Committees</span>
           <h1 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight leading-none">{title}</h1>
           <div className="w-16 h-1 bg-ieee-blue mx-auto md:mx-0"></div>
           <p className="text-gray-400 font-medium tracking-wide text-sm">{subtitle}</p>
        </div>
     </div>
  </section>
);

const CommitteeMember = ({ name, role, affiliation }) => (
  <div className="boutique-card p-6 border-l-4 border-ieee-blue hover:scale-[1.02] transition-transform flex flex-col justify-center">
    <div className="text-lg font-black text-[#191961] uppercase tracking-tight">{name}</div>
    {role && <div className="text-[10px] font-black text-ieee-blue uppercase tracking-[0.2em] mt-1 mb-2">{role}</div>}
    {affiliation && <div className="text-xs text-gray-500 font-medium leading-relaxed italic">{affiliation}</div>}
  </div>
);

const AdvisoryCommittee = () => {
  const members = [
    { name: "Anchit Bijalwan (SFHEA, PhD)", affiliation: "Lead Computing, Games and Data Science Research Cluster, British University Vietnam" },
    { name: "Dr. Subhadip Basu", affiliation: "Dept of CSE, JU" },
    { name: "Dr. Arindam Sarkar", affiliation: "Dept. of Computer Science & Electronics, Ramakrishna Mission Vidyamandira" },
    { name: "Prof. (Dr.) Debashis De", affiliation: "Dept. of CSE at Maulana Abul Kalam Azad University of Technology, West Bengal" },
    { name: "Prof. (Dr.) Arijit Sur", affiliation: "Dept. of CSE at IIT Guwahati" },
    { name: "Prof. (Dr.) Kuntal Ghosh", affiliation: "ISI, Kolkata" },
    { name: "Dr. Himadri Sekhar Paul", affiliation: "TCS" },
    { name: "Prof. Anirban Mukherjee", affiliation: "IIT Kgp" },
    { name: "Prof. Rajarshi Mahapatra", affiliation: "IIIT–Naya Raipur" },
    { name: "Prof. Sourav Patra", affiliation: "IIT Kgp" },
    { name: "Prof. Jahar Sarkar", affiliation: "IIT(BHU)" },
    { name: "Prof. Priyaranjan Pal", affiliation: "MNNIT Allahabad" },
    { name: "Prof. Ashutosh Sarkar", affiliation: "IIM (Kozhikode)" },
    { name: "Prof. Amit Konar", affiliation: "Dept of ETCE, JU" },
    { name: "Prof. Sankhayan Chowdhury", affiliation: "Dept of CSE, University of Calcutta" },
    { name: "Prof. Hafizur Rahaman", affiliation: "Dept of IT, IIEST" },
    { name: "Prof. Ranjan Kumar Mallik", affiliation: "Dept. of EE, IIT Delhi" },
    { name: "Mr. Subhomoy Chakraborty", affiliation: "ABP Group" },
    { name: "Prof. Amit Roy Chowdhury", affiliation: "Dept of Aerospace Engineering and Applied Mechanics, IIEST" },
    { name: "Dr. Piyali Basak", affiliation: "School of Bioscience and Engineering, JU" },
  ];

  return (
    <div className="min-h-screen">
      <PageHero 
        title="Advisory Committee" 
        subtitle="Distinguished scholars guiding the technical direction of ICCE 2026." 
      />
      <div className="container-boxed py-24 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <CommitteeMember key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

const OrganizingCommittee = () => {
  return (
    <div className="min-h-screen">
      <PageHero 
        title="Organizing Committee" 
        subtitle="The dedicated team behind the execution of ICCE 2026." 
      />
      <div className="container-boxed py-24 px-6 space-y-24">
        {/* Patrons */}
        <section>
          <div className="flex items-center space-x-4 mb-10">
             <div className="h-8 w-2 bg-ieee-blue"></div>
             <h2 className="text-3xl font-black text-[#191961] uppercase tracking-tight">Patrons</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CommitteeMember name="Satyam Roy Chowdhury" role="Chief Patron" affiliation="Chancellor, SNU & MD, TIG" />
            <CommitteeMember name="Dhrubajyoti Chattopadhyay" role="Patron" affiliation="Vice Chancellor, SNU" />
            <CommitteeMember name="Arindam Ray" role="Patron" affiliation="Director, NSEC" />
          </div>
        </section>

        {/* Core Organizers */}
        <section>
          <div className="flex items-center space-x-4 mb-10">
             <div className="h-8 w-2 bg-ieee-blue"></div>
             <h2 className="text-3xl font-black text-[#191961] uppercase tracking-tight">Core Organizers</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CommitteeMember name="Amal Kr. Ghosh" role="General Chair" />
            <CommitteeMember name="Sukumar Roy" role="General Co-Chair" />
            <CommitteeMember name="Piyali Chatterjee" role="Organizing Chair" />
            <CommitteeMember name="Anuradha Saha" role="Organizing Co-Chair" />
            <CommitteeMember name="Rajkumar Patra" role="Conference Secretary" />
            <CommitteeMember name="Tridibesh Nag" role="Finance Chair" />
          </div>
        </section>

        {/* Area Chairs */}
        <section>
          <div className="flex items-center space-x-4 mb-10">
             <div className="h-8 w-2 bg-ieee-blue"></div>
             <h2 className="text-3xl font-black text-[#191961] uppercase tracking-tight">Area Chairs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CommitteeMember name="Soumava Goswami" role="Sponsorship Chair" />
            <CommitteeMember name="Koushik Dutta" role="Technical Program Chair" />
            <CommitteeMember name="Chandan Banerjee" role="Program Chair" />
            <CommitteeMember name="Anupam Ghosh" role="Publication Chair" />
            <CommitteeMember name="Atanu Das" role="Publicity Chair" />
            <CommitteeMember name="Sabyasachi Bagchi" role="Registration Chair" />
            <CommitteeMember name="Indranil Ghosh" role="Hospitality Chair" />
            <CommitteeMember name="Partha Ghosh" role="Invited Talks & Tutorials Chair" />
            <CommitteeMember name="Samir Kr. Ghosh" role="Student Activity Chair" />
            <CommitteeMember name="Riya Majumder" role="WIE Activity Chair" />
            <CommitteeMember name="Abhishek Saha" role="SIGHT Activity Chair" />
            <CommitteeMember name="Partha Sarathi Pal" role="Web Committee Chair" />
          </div>
        </section>
      </div>
    </div>
  );
};

export { AdvisoryCommittee, OrganizingCommittee };
