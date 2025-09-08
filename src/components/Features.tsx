// components/Features.tsx
'use client';

import { motion, easeOut } from 'framer-motion';
import { 
  FileText, 
  BarChart3, 
  Users, 
  Shield, 
  Zap, 
  Globe,
  CreditCard,
  Bell
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <FileText size={28} className="text-blue-600" />,
      title: "Easy Invoicing",
      description: "Create professional invoices in seconds with customizable templates and automatic numbering.",
      highlights: ["Custom templates", "Auto numbering", "Brand customization"]
    },
    {
      icon: <BarChart3 size={28} className="text-blue-600" />,
      title: "Financial Insights",
      description: "Get detailed reports and analytics to understand your business finances and track performance.",
      highlights: ["Revenue reports", "Expense tracking", "Profit analysis"]
    },
    {
      icon: <Users size={28} className="text-blue-600" />,
      title: "Client Management",
      description: "Manage all your clients in one place with detailed payment histories and contact information.",
      highlights: ["Client database", "Payment history", "Contact management"]
    },
    {
      icon: <Shield size={28} className="text-blue-600" />,
      title: "Secure Payments",
      description: "Multiple secure payment options with bank-level encryption and compliance standards.",
      highlights: ["Encrypted data", "PCI compliant", "Multiple gateways"]
    },
    {
      icon: <Zap size={28} className="text-blue-600" />,
      title: "Automated Reminders",
      description: "Set up automatic payment reminders to reduce late payments and improve cash flow.",
      highlights: ["Custom schedules", "Friendly templates", "Tracking"]
    },
    {
      icon: <Globe size={28} className="text-blue-600" />,
      title: "Multi-Currency",
      description: "Create invoices in multiple currencies and get paid from clients around the world.",
      highlights: ["100+ currencies", "Real-time rates", "Auto conversions"]
    },
    {
      icon: <CreditCard size={28} className="text-blue-600" />,
      title: "Online Payments",
      description: "Accept credit cards, bank transfers, and digital wallets directly through your invoices.",
      highlights: ["Multiple methods", "Instant notifications", "Secure processing"]
    },
    {
      icon: <Bell size={28} className="text-blue-600" />,
      title: "Real-Time Notifications",
      description: "Get instant alerts when invoices are viewed, paid, or when payments are overdue.",
      highlights: ["Email alerts", "Mobile push", "Custom triggers"]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30 
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: easeOut
      }
    }
  };

  const hoverVariants = {
    rest: { 
      scale: 1,
      y: 0
    },
    hover: { 
      scale: 1.03,
      y: -5,
      transition: {
        duration: 0.2,
        ease: easeOut
      }
    }
  };

  return (
    <section id="features" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-blue-50">
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
            POWERFUL FEATURES TO HELP YOU
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built with features for growing businesses. Everything you need to manage your billing efficiently.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              initial="rest"
              animate="rest"
              className="group h-full"
            >
              <motion.div
                variants={hoverVariants}
                className="h-full bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col"
              >
                {/* Icon */}
                <div className="mb-4 p-3 bg-blue-100 rounded-full w-14 h-14 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                  {feature.icon}
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-600 mb-4 flex-grow">
                  {feature.description}
                </p>
                
                {/* Highlights */}
                <ul className="space-y-1">
                  {feature.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-center text-sm text-gray-500">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to streamline your billing process?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses using Bill Buddy to save time, get paid faster, and grow their business.
            </p>
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(255, 255, 255, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full transition-all duration-300"
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;