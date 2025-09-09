import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Shield, ArrowLeft, CheckCircle, Lock, Eye, FileCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const SecureDataManagement = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      description: 'Military-grade encryption protects patient data both in transit and at rest, ensuring complete privacy and security across all systems.'
    },
    {
      icon: Eye,
      title: 'Access Controls',
      description: 'Granular role-based access controls ensure only authorized personnel can access sensitive patient information based on their clinical needs.'
    },
    {
      icon: FileCheck,
      title: 'Audit Trails',
      description: 'Comprehensive logging and monitoring tracks all data access and modifications, providing complete transparency and compliance reporting.'
    },
    {
      icon: Shield,
      title: 'Compliance Monitoring',
      description: 'Automated compliance monitoring ensures adherence to HIPAA, GDPR, and other healthcare regulations with real-time alerts and reporting.'
    }
  ];

  const benefits = [
    'Protect patient privacy',
    'Meet regulatory requirements',
    'Prevent data breaches',
    'Ensure data integrity',
    'Enable secure collaboration',
    'Maintain audit compliance'
  ];

  return (
    <>
      <Helmet>
        <title>Secure Data Management | Mediflow</title>
        <meta
          name="description"
          content="Encrypted, compliant solution for protecting patient information."
        />
        <meta
          property="og:title"
          content="Secure Data Management | Mediflow"
        />
        <meta
          property="og:description"
          content="Encrypted, compliant solution for protecting patient information."
        />
      </Helmet>
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
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900">
              Secure Data{' '}
              <span className="gradient-text">Management</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Enterprise-grade security ensuring patient data protection with end-to-end encryption, 
              comprehensive access controls, and compliance with healthcare regulations.
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
              Security Benefits
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
              Secure Your Healthcare Data
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Protect your patients and organization with enterprise-grade security 
              designed specifically for healthcare data management and compliance.
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
    </>
  );
};

export default SecureDataManagement;
