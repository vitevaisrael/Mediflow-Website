import React from 'react';
import { motion } from 'framer-motion';
import { Brain, ArrowLeft, CheckCircle, TrendingUp, Shield, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export const features = [
    {
      icon: Brain,
      title: 'Predictive Analytics',
      description: 'Advanced machine learning models analyze patient data to predict potential health outcomes and identify at-risk patients before complications arise.'
    },
    {
      icon: Target,
      title: 'Risk Assessment',
      description: 'Comprehensive risk scoring algorithms evaluate multiple factors to provide accurate risk stratification and early intervention recommendations.'
    },
    {
      icon: TrendingUp,
      title: 'Treatment Recommendations',
      description: 'Evidence-based treatment suggestions powered by clinical guidelines and real-world outcomes data for optimal patient care.'
    },
    {
      icon: Shield,
      title: 'Outcome Prediction',
      description: 'AI models predict treatment outcomes and recovery timelines, helping clinicians set realistic expectations and optimize care plans.'
    }
];

export const benefits = [
    'Improve diagnostic accuracy by 40%',
    'Reduce medical errors by 60%',
    'Enhance patient outcomes',
    'Optimize treatment protocols',
    'Enable early intervention',
    'Support evidence-based decisions'
];

const AIClinicalDecisionSupport = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-green-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <Button
            onClick={() => navigate('/')}
            variant="ghost"
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="medical-gradient w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-8">
              <Brain className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900">
              AI Clinical Decision{' '}
              <span className="gradient-text">Support</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Leverage advanced machine learning algorithms to provide evidence-based recommendations 
              and predictive insights for better patient outcomes and clinical decision-making.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-effect rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="medical-gradient w-12 h-12 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="glass-effect rounded-2xl p-12 mb-20"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Clinical Impact
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Transform Your Clinical Decision-Making
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Discover how our AI-powered clinical decision support can enhance patient care 
              and improve clinical outcomes in your healthcare organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate('/#contact')}
                size="lg"
                className="medical-gradient text-white hover:medical-gradient-hover hover:shadow-xl transition-all duration-300"
              >
                Schedule a Demo
              </Button>
              <Button
                onClick={() => navigate('/')}
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 hover:bg-gray-50 text-gray-700 hover:text-gray-800 transition-all duration-300"
              >
                View All Solutions
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AIClinicalDecisionSupport;
