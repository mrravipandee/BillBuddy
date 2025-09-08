// components/About.tsx
'use client';

import { motion } from 'framer-motion';
import { FileText, TrendingUp, ArrowRight } from 'lucide-react';

const About = () => {
  const cards = [
    {
      icon: <FileText size={32} className="text-blue-600" />,
      title: "What is Bill Buddy?",
      description: "Bill Buddy is a comprehensive billing and invoice management solution designed to help businesses of all sizes streamline their financial processes. Our platform automates invoice creation, tracks payments, and provides valuable insights into your business finances.",
      features: [
        "Automated invoice generation",
        "Payment tracking and reminders",
        "Multi-currency support",
        "Customizable templates"
      ],
      cta: "Learn more"
    },
    {
      icon: <TrendingUp size={32} className="text-blue-600" />,
      title: "How it helps to grow your business reach",
      description: "By automating your billing processes, Bill Buddy helps you focus on core business activities, reduce errors, and provide better service to your customers. Our analytics tools give you insights to make data-driven decisions.",
      features: [
        "Financial analytics dashboard",
        "Client payment behavior insights",
        "Revenue forecasting",
        "Expense tracking"
      ],
      cta: "See features"
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simplify Your Billing Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bill Buddy helps businesses of all sizes manage their invoicing and payments efficiently.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 relative overflow-hidden"
            >
              {/* Background accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-indigo-600"></div>
              
              {/* Icon */}
              <div className="mb-6 p-3 bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {card.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                {card.title}
              </h3>
              
              {/* Description */}
              <p className="text-gray-600 mb-6">
                {card.description}
              </p>
              
              {/* Features List */}
              <ul className="mb-6 space-y-2">
                {card.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <div className="bg-green-100 p-1 rounded-full mt-1 mr-3 flex-shrink-0">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* CTA Button */}
              <motion.button
                whileHover={{ x: 5 }}
                className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors duration-300"
              >
                {card.cta}
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {[
            { value: "10K+", label: "Active Users" },
            { value: "2M+", label: "Invoices Created" },
            { value: "98%", label: "Customer Satisfaction" },
            { value: "50+", label: "Countries" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-4 bg-blue-50 rounded-xl">
              <p className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;