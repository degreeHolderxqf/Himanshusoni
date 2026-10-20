import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import ApproachPage from './pages/ApproachPage';
import AboutPage from './pages/AboutPage';
import PlannerPage from './pages/PlannerPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';

import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        
        <main style={{ flex: 1 }}>
          <Routes>
            {/* Page A: Home */}
            <Route path="/" element={<HomePage />} />

            {/* Page E: Website Portfolio */}
            <Route path="/website-portfolio" element={<PortfolioPage />} />
            <Route path="/website-portfolio/" element={<PortfolioPage />} />

            {/* Page D: Approach */}
            <Route path="/approach" element={<ApproachPage />} />
            <Route path="/approach/" element={<ApproachPage />} />

            {/* Page F: About Us / About Me */}
            <Route path="/aboutus" element={<AboutPage />} />
            <Route path="/aboutus/" element={<AboutPage />} />
            <Route path="/about" element={<Navigate to="/aboutus" replace />} />

            {/* Page C: Planner */}
            <Route path="/planner" element={<PlannerPage />} />
            <Route path="/planner/" element={<PlannerPage />} />

            {/* Page B: Contact Us */}
            <Route path="/contactus" element={<ContactPage />} />
            <Route path="/contactus/" element={<ContactPage />} />
            <Route path="/contact" element={<Navigate to="/contactus" replace />} />

            {/* Services Page */}
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/" element={<ServicesPage />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}
