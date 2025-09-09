import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Award, TrendingUp } from 'lucide-react';

export const stats = [
    {
      icon: Users,
      value: '500+',
      label: 'Healthcare Partners'
    },
    {
      icon: Award,
      value: '99.7%',
      label: 'Accuracy Rate'
    },
    {
      icon: TrendingUp,
      value: '40%',
      label: 'Efficiency Increase'
    },
    {
      icon: Target,
      value: '24/7',
      label: 'System Availability'
    }
];

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{
            opacity: 0,
            y: 50
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.8
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
            Built by Healthcare Professionals,{' '}
            <span className="gradient-text">For Healthcare Professionals</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Every day, healthcare teams waste hours navigating complex medical records when they should be focused on patients. At MediFlow, we solve this problem by turning scattered medical data into clear, actionable insights that help clinicians make better decisions faster.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Mission Content */}
          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our mission is simple: give healthcare professionals the right information at the right time. We organize complex medical data into clear insights, so clinicians can focus on what they do best—caring for patients.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-3"></div>
                <p className="text-gray-700">
                  <strong className="text-gray-900">Data Organization:</strong> Transform chaotic medical records into structured, searchable databases
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full mt-3"></div>
                <p className="text-gray-700">
                  <strong className="text-gray-900">AI Analysis:</strong> Leverage machine learning to identify patterns and predict outcomes
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-teal-500 rounded-full mt-3"></div>
                <p className="text-gray-700">
                  <strong className="text-gray-900">Clinical Support:</strong> Provide real-time decision assistance to healthcare professionals
                </p>
              </div>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{
              opacity: 0,
              x: 50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            className="relative"
          >
            <img
              alt="Healthcare data visualization and AI analysis dashboard"
              className="rounded-2xl shadow-xl"
              src="https://images.unsplash.com/photo-1516383274235-5f42d6c6426d"
            />
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{
            opacity: 0,
            y: 50
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true
          }}
          transition={{
            duration: 0.8
          }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1
              }}
              className="text-center glass-effect rounded-xl p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="medical-gradient w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-blue-700 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
