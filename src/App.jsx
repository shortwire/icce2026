import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import { AdvisoryCommittee, OrganizingCommittee } from './pages/Committees'
import { About } from './pages/About'
import { Advisory } from './pages/Advisory'
import { Organizing } from './pages/Organizing'
import { TPC } from './pages/TPC'
import { CallForPapers } from './pages/cfp'
import Submission from './pages/Paper_Submission'
import ImportantDates from './pages/ImportantDates'
import Topics from './pages/Topics'
import { SupportToStudents } from './pages/SupportToStudents'
import { ImportantInformation } from './pages/ImportantInformation'
import { Registration } from './pages/Registration'
import Contact from './pages/Contact'
import Venue from './pages/Venue'
import ComingSoon from './pages/ComingSoon'
import AboutNSEC from './pages/AboutNSEC'
import AboutKolkata from './pages/AboutKolkata'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#F9FAFB] font-sans selection:bg-ieee-blue selection:text-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<SupportToStudents />} />
            <Route path="/about" element={<About />} />
            <Route path="/advisory" element={<Advisory />} />
            <Route path="/organising" element={<Organizing />} />
            <Route path="/cfp" element={<CallForPapers />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/dates" element={<ImportantDates />} />
            <Route path="/submission" element={<Submission />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/fees" element={<Registration />} />
            <Route path="/venue" element={<ComingSoon />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about-nsec" element={<AboutNSEC />} />
            <Route path="/about-kolkata" element={<AboutKolkata />} />
            <Route path="/tpc" element={<TPC />} />
            <Route path="/template" element={<ComingSoon />} />
            <Route path="/program" element={<ComingSoon />} />
            <Route path="/keynotes" element={<ComingSoon />} />
            <Route path="/special-sessions" element={<ComingSoon />} />
            <Route path="/workshop" element={<ComingSoon />} />
            <Route path="/tutorials" element={<ComingSoon />} />
            <Route path="/imp-info" element={<Registration />} />
            <Route path="/accommodation" element={<ComingSoon />} />
            <Route path="/visa" element={<ComingSoon />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/partners" element={<ComingSoon />} />
            <Route path="/sponsors" element={<ComingSoon />} />
            <Route path="/sponsor-opp" element={<ComingSoon />} />
            <Route path="*" element={<ComingSoon />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
