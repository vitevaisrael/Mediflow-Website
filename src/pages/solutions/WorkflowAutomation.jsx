import React from 'react';
import { motion } from 'framer-motion';
import { Zap, ArrowLeft, CheckCircle, Settings, Clock, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const WorkflowAutomation = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Settings,
      title: 'Process Automation',
      description: 'Automate routine healthcare processes and administrative tasks to reduce manual work and eliminate human errors in critical workflows.'
    },
    {
      icon: Clock,
      title: 'Task Scheduling',
      description: 'Intelligent scheduling system automatically assigns tasks, manages appointments, and optimizes resource allocation across departments.'
    },
    {
      icon: Bell,
      title: 'Alert Systems',
      description: 'Smart notification system provides real-time alerts for critical events, medication reminders, and important patient updates.'
    },
    {
      icon: Zap,
      title: 'Integration APIs',
      description: 'Seamless integration with existing healthcare systems and third-party applications through robust API connections and data synchronization.'
    }
  ];

  const benefits = [
    'Reduce manual tasks by 70%',
    'Eliminate workflow bottlenecks',
    'Improve operational efficiency',
    'Minimize human errors',
    'Optimize resource utilization',
    'Enhance staff productivity'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
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
              <Zap className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-900">
              Workflow{' '}
              <span className="gradient-text">Automation</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Streamline healthcare workflows with intelligent automation, reducing manual tasks 
              and improving operational efficiency across your entire organization.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
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
              Operational Benefits
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={benefit} className="flex items-center space-x-3">
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
              Automate Your Healthcare Workflows
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Discover how intelligent workflow automation can transform your healthcare 
              operations and free up your staff to focus on patient care.
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

export default WorkflowAutomation;
