import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Solutions from '@/components/Solutions';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

function App() {
  return (
    <>
      <Helmet>
        <title>MediFlow - AI-Powered Medical Data Management & Clinical Decision Support</title>
        <meta name="description" content="Transform healthcare with MediFlow's advanced AI-powered medical data management and clinical decision support solutions. Streamline workflows and improve patient outcomes." />
        <meta property="og:title" content="MediFlow - AI-Powered Medical Data Management & Clinical Decision Support" />
        <meta property="og:description" content="Transform healthcare with MediFlow's advanced AI-powered medical data management and clinical decision support solutions. Streamline workflows and improve patient outcomes." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <Header />
        <Hero />
        <About />
        <Solutions />
        <Contact />
        <Footer />
        <Toaster />
      </div>
    </>
  );
}

export default App;
