import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-16 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <div className="medical-gradient p-2 rounded-lg">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">MediFlow</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Transforming healthcare through AI-powered medical data management 
              and clinical decision support solutions.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                <Linkedin className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors cursor-pointer">
                <Twitter className="h-5 w-5" />
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4"
          >
            <span className="text-lg font-semibold">Quick Links</span>
            <div className="space-y-2">
              {['About', 'Solutions', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block text-slate-300 hover:text-white transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <span className="text-lg font-semibold">Solutions</span>
            <div className="space-y-2">
              {[
                'Data Organization',
                'AI Decision Support',
                'Analytics Platform',
                'Workflow Automation'
              ].map((solution) => (
                <p key={solution} className="text-slate-300 hover:text-white transition-colors cursor-pointer">
                  {solution}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            <span className="text-lg font-semibold">Contact</span>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-slate-400" />
                <span className="text-slate-300">mediflowy@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-slate-400" />
                <span className="text-slate-300">+972535236450</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-slate-400" />
                <span className="text-slate-300">San Francisco, CA</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
        >
          <p className="text-slate-400 text-sm">
            © 2023 MediFlow. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <span className="text-slate-400 hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="text-slate-400 hover:text-white transition-colors cursor-pointer">
              Terms of Service
            </span>
            <span className="text-slate-400 hover:text-white transition-colors cursor-pointer">
              HIPAA Compliance
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
