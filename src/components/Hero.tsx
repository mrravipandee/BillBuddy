// components/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import { Download, Smartphone, FileText, BarChart3, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            Bill Buddy
          </h1>
          <p className="text-xl text-gray-700">
            The ultimate billing solution for growing businesses. Streamline your invoicing, track payments, and gain valuable insights.
          </p>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full flex items-center gap-2 transition-all duration-300 shadow-lg"
          >
            <Download size={20} />
            Download App
          </motion.button>
          
          {/* Feature highlights */}
          <div className="pt-6 grid grid-cols-3 gap-4">
            <div className="flex flex-col items-center text-center">
              <div className="p-2 bg-blue-100 rounded-full mb-2">
                <FileText size={20} className="text-blue-600" />
              </div>
              <span className="text-sm font-medium">Easy Invoicing</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="p-2 bg-blue-100 rounded-full mb-2">
                <BarChart3 size={20} className="text-blue-600" />
              </div>
              <span className="text-sm font-medium">Financial Insights</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="p-2 bg-blue-100 rounded-full mb-2">
                <Users size={20} className="text-blue-600" />
              </div>
              <span className="text-sm font-medium">Client Management</span>
            </div>
          </div>
        </motion.div>
        
        {/* Right Content - Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-blue-200 rounded-3xl blur-lg opacity-70"></div>
            
            {/* Phone mockup */}
            <div className="relative bg-white p-6 rounded-3xl shadow-2xl border-8 border-gray-800">
              <div className="w-64 h-96 bg-gradient-to-b from-blue-400 to-indigo-600 rounded-2xl overflow-hidden">
                {/* App screen content */}
                <div className="p-5 text-white h-full flex flex-col">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="font-bold text-lg">Bill Buddy</h2>
                    <div className="w-6 h-6 rounded-full bg-white bg-opacity-20"></div>
                  </div>
                  
                  {/* Stats */}
                  <div className="bg-white bg-opacity-10 rounded-xl p-4 mb-4">
                    <p className="text-xs opacity-80">Current Balance</p>
                    <p className="text-2xl font-bold">$12,458</p>
                  </div>
                  
                  {/* Recent invoices */}
                  <div className="flex-grow">
                    <h3 className="text-sm font-medium mb-3">Recent Invoices</h3>
                    <div className="space-y-2">
                      {['Client A', 'Client B', 'Client C'].map((client, i) => (
                        <div key={i} className="flex justify-between items-center p-2 bg-white bg-opacity-5 rounded-lg">
                          <div>
                            <p className="text-sm font-medium">{client}</p>
                            <p className="text-xs opacity-70">2 days ago</p>
                          </div>
                          <span className="font-bold">${(1200 + i * 350).toLocaleString()}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Navigation */}
                  <div className="flex justify-around pt-4 border-t border-white border-opacity-20">
                    {[FileText, BarChart3, Users].map((Icon, i) => (
                      <div key={i} className={`p-2 rounded-full ${i === 0 ? 'bg-white bg-opacity-20' : ''}`}>
                        <Icon size={18} />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div 
              className="absolute -top-4 -right-4 bg-white p-3 rounded-xl shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="flex items-center">
                <div className="bg-green-100 p-1 rounded-full mr-2">
                  <FileText size={14} className="text-green-600" />
                </div>
                <p className="text-xs font-medium">Invoice Sent</p>
              </div>
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-4 -left-4 bg-white p-3 rounded-xl shadow-lg"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <div className="flex items-center">
                <div className="bg-blue-100 p-1 rounded-full mr-2">
                  <Users size={14} className="text-blue-600" />
                </div>
                <p className="text-xs font-medium">+24 Clients</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;