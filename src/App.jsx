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
        <title>Mediflow - Intelligent Medicine</title>
        <meta name="description" content="Transform healthcare with Mediflow's intelligent medicine solutions. Advanced AI-powered medical data management and clinical decision support." />
        <meta property="og:title" content="Mediflow - Intelligent Medicine" />
        <meta property="og:description" content="Transform healthcare with Mediflow's intelligent medicine solutions. Advanced AI-powered medical data management and clinical decision support." />
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
