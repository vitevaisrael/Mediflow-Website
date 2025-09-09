import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Solutions from '@/components/Solutions';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import MedicalDataOrganization from '@/pages/solutions/MedicalDataOrganization';
import AIClinicalDecisionSupport from '@/pages/solutions/AIClinicalDecisionSupport';
import AdvancedAnalyticsPlatform from '@/pages/solutions/AdvancedAnalyticsPlatform';
import SecureDataManagement from '@/pages/solutions/SecureDataManagement';
import WorkflowAutomation from '@/pages/solutions/WorkflowAutomation';
import CollaborativePlatform from '@/pages/solutions/CollaborativePlatform';

function App() {
  return (
    <Router>
      <Helmet>
        <title>Mediflow - Intelligent Medicine</title>
        <meta name="description" content="Transform healthcare with Mediflow's intelligent medicine solutions. Advanced AI-powered medical data management and clinical decision support." />
        <meta property="og:title" content="Mediflow - Intelligent Medicine" />
        <meta property="og:description" content="Transform healthcare with Mediflow's intelligent medicine solutions. Advanced AI-powered medical data management and clinical decision support." />
      </Helmet>
      
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
            <Header />
            <Hero />
            <About />
            <Solutions />
            <Contact />
            <Footer />
            <Toaster />
          </div>
        } />
        <Route path="/solutions/medical-data-organization" element={<MedicalDataOrganization />} />
        <Route path="/solutions/ai-clinical-decision-support" element={<AIClinicalDecisionSupport />} />
        <Route path="/solutions/advanced-analytics-platform" element={<AdvancedAnalyticsPlatform />} />
        <Route path="/solutions/secure-data-management" element={<SecureDataManagement />} />
        <Route path="/solutions/workflow-automation" element={<WorkflowAutomation />} />
        <Route path="/solutions/collaborative-platform" element={<CollaborativePlatform />} />
      </Routes>
    </Router>
  );
}

export default App;
