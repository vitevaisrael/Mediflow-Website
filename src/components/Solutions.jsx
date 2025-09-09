import React from 'react';
import { motion } from 'framer-motion';
import { Database, Brain, Shield, Zap, BarChart3, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';

const Solutions = () => {
  const navigate = useNavigate();
  
  const solutions = [
    {
      icon: Database,
      title: 'Medical Data Organization',
      description: 'Transform unstructured medical records into organized, searchable databases with automated categorization and intelligent tagging.',
      features: ['Automated data extraction', 'Smart categorization', 'Real-time synchronization', 'HIPAA compliance'],
      route: '/solutions/medical-data-organization'
    },
    {
      icon: Brain,
      title: 'AI Clinical Decision Support',
      description: 'Leverage advanced machine learning algorithms to provide evidence-based recommendations and predictive insights for better patient outcomes.',
      features: ['Predictive analytics', 'Risk assessment', 'Treatment recommendations', 'Outcome prediction'],
      route: '/solutions/ai-clinical-decision-support'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics Platform',
      description: 'Comprehensive analytics dashboard providing deep insights into patient data, treatment efficacy, and operational efficiency.',
      features: ['Custom dashboards', 'Real-time reporting', 'Trend analysis', 'Performance metrics'],
      route: '/solutions/advanced-analytics-platform'
    },
    {
      icon: Shield,
      title: 'Secure Data Management',
      description: 'Enterprise-grade security ensuring patient data protection with end-to-end encryption and compliance with healthcare regulations.',
      features: ['End-to-end encryption', 'Access controls', 'Audit trails', 'Compliance monitoring'],
      route: '/solutions/secure-data-management'
    },
    {
      icon: Zap,
      title: 'Workflow Automation',
      description: 'Streamline healthcare workflows with intelligent automation, reducing manual tasks and improving operational efficiency.',
      features: ['Process automation', 'Task scheduling', 'Alert systems', 'Integration APIs'],
      route: '/solutions/workflow-automation'
    },
    {
      icon: Users,
      title: 'Collaborative Platform',
      description: 'Enable seamless collaboration between healthcare teams with shared insights, secure communication, and coordinated care plans.',
      features: ['Team collaboration', 'Secure messaging', 'Shared insights', 'Care coordination'],
      route: '/solutions/collaborative-platform'
    }
  ];

  const handleLearnMore = (solution) => {
    if (solution.route) {
      navigate(solution.route);
    } else {
      toast({
        title: "🚧 Feature Details",
        description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
        duration: 3000,
      });
    }
  };

  return (
    <section id="solutions" className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Comprehensive{' '}
            <span className="gradient-text">Healthcare Solutions</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our integrated suite of AI-powered tools transforms how healthcare organizations 
            manage data, make decisions, and deliver patient care.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="medical-gradient w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <solution.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{solution.title}</h3>
              <p className="text-gray-700 mb-6 leading-relaxed">{solution.description}</p>
              
              <ul className="space-y-2 mb-6">
                {solution.features.map((feature, featureIndex) => (
                  <li key={feature} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Button
                onClick={() => handleLearnMore(solution)}
                variant="outline"
                className="w-3/4 mx-auto border-2 border-gray-300 hover:border-blue-500 hover:bg-blue-50 text-gray-700 hover:text-blue-700 transition-all duration-300 rounded-xl shadow-sm hover:shadow-md font-medium py-3 group"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-300 inline-flex items-center">
                  Learn More
                  <svg className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Button>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center glass-effect rounded-2xl p-12"
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Healthcare Operations?
          </h3>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Join hundreds of healthcare organizations already using MediFlow to improve 
            patient outcomes and operational efficiency.
          </p>
          <Button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            size="lg"
            className="medical-gradient text-white hover:medical-gradient-hover hover:shadow-xl transition-all duration-300"
          >
            Schedule a Demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;
