import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/use-toast';

export const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'contact@mediflow.io',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+972 53-5236450',
      description: 'we will get back to you promptly'
    }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateField = (name, value) => {
    const emailRegex = /\S+@\S+\.\S+/;
    const phoneRegex = /^\+?[0-9\s()-]{7,}$/;
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Full name is required.';
        break;
      case 'email':
        if (!value.trim()) return 'Email is required.';
        if (!emailRegex.test(value)) return 'Please enter a valid email address.';
        break;
      case 'message':
        if (!value.trim()) return 'Message is required.';
        break;
      case 'phone':
        if (value && !phoneRegex.test(value)) return 'Please enter a valid phone number.';
        break;
      default:
        break;
    }
    return '';
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = {};
    ['name', 'email', 'message', 'phone'].forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) formErrors[field] = error;
    });
    if (Object.keys(formErrors).length) {
      setErrors(formErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          captchaToken: '' // No CAPTCHA configured, send empty token
        }),
      });

      const result = await response.json();
      if (!response.ok || !result.ok) {
        throw new Error(result.error || 'Failed to send');
      }

      toast({
        title: 'Message sent successfully! ✅',
        description: 'Thank you for your interest in MediFlow. We will get back to you shortly.',
        duration: 5000,
      });

      setFormData({ name: '', email: '', organization: '', phone: '', message: '' });
      setErrors({});
    } catch (err) {
      console.error(err);
      toast({
        title: 'Sending failed',
        description: 'Please try again or email us at contact@mediflow.io.',
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Let's Start Your{' '}
            <span className="gradient-text">Healthcare Transformation</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to revolutionize your medical data management? Get in touch with our team 
            to discuss how MediFlow can transform your healthcare operations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Send us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    required
                    aria-invalid={!!errors.name}
                    className={`w-full ${errors.name ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                    placeholder="Dr. John Smith"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600" aria-live="polite">
                      {errors.name}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    required
                    aria-invalid={!!errors.email}
                    className={`w-full ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                    placeholder="john@hospital.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600" aria-live="polite">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Organization
                  </label>
                  <Input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full"
                    placeholder="General Hospital"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    aria-invalid={!!errors.phone}
                    className={`w-full ${errors.phone ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600" aria-live="polite">
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Message *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  required
                  rows={5}
                  aria-invalid={!!errors.message}
                  className={`w-full ${errors.message ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                  placeholder="Tell us about your healthcare data challenges and how we can help..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600" aria-live="polite">
                    {errors.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full medical-gradient text-white hover:shadow-xl transition-all duration-300 group"
              >
                {isSubmitting ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Preparing email…</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    <span>Send Message</span>
                  </div>
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-800 mb-6">Get in Touch</h3>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Our team of healthcare technology experts is ready to discuss your specific 
                needs and show you how MediFlow can transform your organization.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-start space-x-4 glass-effect rounded-xl p-6"
                >
                  <div className="medical-gradient w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-800 mb-1">{info.title}</h4>
                    <p className="text-lg font-medium text-blue-600 mb-1">{info.content}</p>
                    <p className="text-sm text-slate-600">{info.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-effect rounded-xl p-6"
            >
              <h4 className="font-semibold text-slate-800 mb-4">Why Choose MediFlow?</h4>
              <div className="space-y-3">
                {[
                  'HIPAA compliant and secure',
                  '24/7 technical support',
                  'Seamless integration',
                  'Focus on healthcare ROI'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-slate-600">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
