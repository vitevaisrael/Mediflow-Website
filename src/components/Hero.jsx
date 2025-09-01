import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, Shield, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = sectionId => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="pt-24 pb-16 px-6 overflow-hidden">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.8
            }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  delay: 0.2
                }}
                className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium"
              >
                <Zap className="h-4 w-4" />
                <span>AI-Powered Clinical Decision Support Solutions</span>
              </motion.div>
              
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-900">
                <span className="gradient-text">Intelligent</span> Digital Medicine
              </h1>
              
              <p className="text-xl text-gray-700 leading-relaxed">
                MediFlow revolutionizes medical data organization and clinical decision-making through advanced algorithms and innovative AI-Powered systems, empowering healthcare professionals to deliver exceptional patient care.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection('contact')}
                size="lg"
                className="medical-gradient text-white hover:medical-gradient-hover hover:shadow-xl transition-all duration-300 group"
              >
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                onClick={() => scrollToSection('solutions')}
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 hover:bg-gray-50 text-gray-700 hover:text-gray-800 transition-all duration-300"
              >
                Explore Solutions
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-teal-600" />
                <span className="text-sm text-gray-700 font-medium">HIPAA Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Brain className="h-5 w-5 text-purple-600" />
                <span className="text-sm text-gray-700 font-medium">AI-Powered</span>
              </div>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.3
            }}
            className="relative"
          >
            <div className="relative">
              <img
                alt="Medical professionals using AI technology for data analysis"
                className="rounded-2xl shadow-2xl floating"
                src="https://horizons-cdn.hostinger.com/1c73b180-06cb-4a03-9009-3e0b2c62f2b2/generated-image-august-31-2025---1_19pm-vtf0V.jpeg"
              />
              
              {/* Floating Cards */}
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  delay: 0.8
                }}
                className="absolute -top-4 -left-4 glass-effect rounded-xl p-4 pulse-glow"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-800">Real-time Analysis</span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{
                  opacity: 0,
                  y: 20
                }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  delay: 1
                }}
                className="absolute -bottom-4 -right-4 glass-effect rounded-xl p-4"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold gradient-text">99.7%</div>
                  <div className="text-xs text-gray-600">Accuracy Rate</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
