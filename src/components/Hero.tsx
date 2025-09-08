// components/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import { Download, FileText, BarChart3, Users, Shield, Zap, CheckCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-16 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <div className="mb-2">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4"
            >
              <Zap size={16} className="mr-2" />
              Trusted by 10,000+ businesses
            </motion.span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
            Simplify Your <span className="text-blue-600">Billing</span> Process
          </h1>
          
          <p className="text-xl text-gray-700">
            Bill Buddy is the ultimate billing solution that helps growing businesses streamline invoicing, 
            track payments, and gain valuable financial insights—all in one place.
          </p>

          <div className="space-y-3">
            {[
              "Create professional invoices in 60 seconds",
              "Track payments and send automatic reminders",
              "Get real-time financial insights and reports",
              "Manage clients and payment history securely"
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center"
              >
                <CheckCircle size={20} className="text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white font-semibold py-4 px-8 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-lg"
            >
              <Download size={20} />
              Get Started Free
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-300 text-gray-700 font-semibold py-4 px-8 rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50/50"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"></path>
              </svg>
              Watch Demo
            </motion.button>
          </div>

          <div className="pt-4">
            <div className="flex items-center text-sm text-gray-600">
              <Shield size={16} className="text-green-500 mr-2" />
              <span>Secure & compliant • Free 14-day trial • No credit card required</span>
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
                    <div className="w-6 h-6 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                      <svg className="w-3 h-3" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path>
                      </svg>
                    </div>
                  </div>
                  
                  {/* Stats */}
                  <div className="bg-white bg-opacity-10 rounded-xl p-4 mb-4">
                    <p className="text-xs opacity-80 mb-1">Current Balance</p>
                    <p className="text-2xl font-bold">$12,458</p>
                    <p className="text-xs opacity-80 mt-1">+$2,340 this month</p>
                  </div>
                  
                  {/* Recent invoices */}
                  <div className="flex-grow mb-4">
                    <h3 className="text-sm font-medium mb-3">Recent Invoices</h3>
                    <div className="space-y-2">
                      {[
                        { client: "Client A", amount: 1250, status: "paid" },
                        { client: "Client B", amount: 895, status: "pending" },
                        { client: "Client C", amount: 2350, status: "paid" }
                      ].map((invoice, i) => (
                        <div key={i} className="flex justify-between items-center p-2 bg-white bg-opacity-5 rounded-lg">
                          <div>
                            <p className="text-sm font-medium">{invoice.client}</p>
                            <p className="text-xs opacity-70">{invoice.status === "paid" ? "Paid" : "Due in 3 days"}</p>
                          </div>
                          <div className="text-right">
                            <span className="font-bold">${invoice.amount.toLocaleString()}</span>
                            <div className={`w-2 h-2 rounded-full mt-1 ml-auto ${invoice.status === "paid" ? "bg-green-400" : "bg-yellow-400"}`}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Quick actions */}
                  <div className="bg-white bg-opacity-5 rounded-lg p-2 flex justify-between">
                    <button className="text-xs bg-white bg-opacity-20 px-3 py-1 rounded-full">New Invoice</button>
                    <button className="text-xs bg-white bg-opacity-20 px-3 py-1 rounded-full">View Reports</button>
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
                <div>
                  <p className="text-xs font-medium">Invoice Sent</p>
                  <p className="text-xs text-gray-500">+$1,250</p>
                </div>
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
                <div>
                  <p className="text-xs font-medium">Active Clients</p>
                  <p className="text-xs text-gray-500">24</p>
                </div>
              </div>
            </motion.div>

            {/* Third floating element */}
            <motion.div 
              className="absolute top-1/2 -right-6 bg-white p-3 rounded-xl shadow-lg"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <div className="flex items-center">
                <div className="bg-purple-100 p-1 rounded-full mr-2">
                  <BarChart3 size={14} className="text-purple-600" />
                </div>
                <div>
                  <p className="text-xs font-medium">This Month</p>
                  <p className="text-xs text-gray-500">+15% revenue</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Trusted by section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-0 right-0"
      >
        <div className="container mx-auto text-center">
          <p className="text-gray-500 text-sm mb-4">Trusted by businesses worldwide</p>
          <div className="flex justify-center items-center gap-8 opacity-60">
            {["ForangeX", "Khataa Kitab", "Urban Mall", "The Fizze Corp", "Vijay Sales", "H&P Grocers Market"].map((company, index) => (
              <div key={index} className="text-gray-700 font-medium text-sm">{company}</div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;