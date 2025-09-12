// components/Hero.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Download, CheckCircle, Play, X, Menu } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { BillBuddyIcon } from '../../public';

const Hero = () => {
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleDownload = () => {
    // Create a temporary anchor element to trigger the download
    const link = document.createElement('a');
    link.href = '/billbuddy.apk'; // Path to your APK file in public folder
    link.download = 'BillBuddy.apk';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-[80vh] flex flex-col px-4 py-8 bg-gradient-to-br from-[#fff] to-[#fff] relative overflow-hidden">
      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg overflow-hidden w-full max-w-4xl aspect-video relative">
            <button
              onClick={() => setShowVideoModal(false)}
              className="absolute top-4 right-4 z-10 bg-white rounded-full p-1 hover:bg-gray-200 transition-colors"
            >
              <X size={24} />
            </button>
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your actual demo video URL
              title="BillBuddy Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}

      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-200 rounded-full opacity-20 blur-3xl"></div>

      {/* Navigation Bar */}
      <header className="w-full">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo on the left */}
          <Image
            src={BillBuddyIcon}
            alt="Bill Buddy Logo"
            width={60}
            height={50}
          />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <ul className="flex space-x-6">
              <li>
                <a href="#features" className="text-gray-700 hover:text-[#0C4CA1] transition-colors relative group">
                  Features
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0C4CA1] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-700 hover:text-[#0C4CA1] transition-colors relative group">
                  Pricing
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0C4CA1] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-700 hover:text-[#0C4CA1] transition-colors relative group">
                  Contact
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#0C4CA1] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
            
            {/* Download button in navbar */}
            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0C4CA1] text-white font-semibold py-2 px-4 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:bg-[#0C4CA1]/90 text-sm"
            >
              <Download size={16} />
              Download
            </motion.button>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={28} />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t border-gray-200"
            >
              <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
                <a 
                  href="#features" 
                  className="text-gray-700 hover:text-[#0C4CA1] transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Features
                </a>
                <a 
                  href="#pricing" 
                  className="text-gray-700 hover:text-[#0C4CA1] transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </a>
                <a 
                  href="#contact" 
                  className="text-gray-700 hover:text-[#0C4CA1] transition-colors py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <motion.button
                  onClick={handleDownload}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#0C4CA1] text-white font-semibold py-3 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:bg-[#0C4CA1]/90 mt-2"
                >
                  <Download size={18} />
                  Download App
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Hero Content */}
      <div className="container mx-auto text-center relative z-10 max-w-3xl flex-1 flex flex-col justify-center">
        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0C4CA1] mb-4 md:mb-6"
        >
          Bill Buddy{' '}
          <span className="text-gray-900">makes billing simple</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl text-gray-700 mb-6 md:mb-8 max-w-2xl mx-auto px-4"
        >
          From payments to inventory, manage your entire shop with ease.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-6 md:mb-8 px-4"
        >
          <motion.button
            onClick={handleDownload}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#0C4CA1] text-white font-semibold py-3 px-6 md:py-4 md:px-8 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:bg-[#0C4CA1]/90 text-sm md:text-base"
          >
            <Download size={20} />
            Download APP
          </motion.button>
          
          {/* <motion.button
            onClick={() => setShowVideoModal(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-gray-300 text-gray-700 font-semibold py-3 px-6 md:py-4 md:px-8 rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:border-[#0C4CA1]/70 hover:bg-[#0C4CA1]/10 text-sm md:text-base"
          >
            <Play size={20} />
            Watch Demo
          </motion.button> */}
        </motion.div>

        {/* Subtext */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="text-xs sm:text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-center flex-wrap gap-1 sm:gap-2 px-4"
        >
          <span>Free 30-day trial</span>
          <span className="hidden sm:inline">•</span>
          <span>No credit card required</span>
          <span className="hidden sm:inline">•</span>
          <span>Secure & reliable</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;