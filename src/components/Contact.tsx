// components/Contact.tsx
'use client';

import { motion, easeOut } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin,
  Send,
  User,
  Clock,
  CheckCircle2,
  MessageSquare
} from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format the message for MessageSquare
    const MessageSquareMessage = `
*New Contact Form Submission* 🚀

*Name:* ${formData.name}
*Email:* ${formData.email}
*Subject:* ${formData.subject}

*Message:*
${formData.message}

*Sent via Bill Buddy Website* 📧
    `.trim();

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(MessageSquareMessage);
    
    // MessageSquare number (replace with your actual number)
    const MessageSquareNumber = "917058548204"; // Remove any spaces or special characters
    
    // Create MessageSquare URL
    const MessageSquareUrl = `https://wa.me/${MessageSquareNumber}?text=${encodedMessage}`;
    
    // Open MessageSquare in a new tab
    window.open(MessageSquareUrl, '_blank');
    
    // Set submitted state
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactMethods = [
    {
      icon: <Mail size={24} className="text-[#0C4CA1]" />,
      title: "Email Us",
      description: "We'll respond quickly",
      details: "support@billbuddy.com",
      action: "mailto:support@billbuddy.com"
    },
    {
      icon: <Phone size={24} className="text-[#0C4CA1]" />,
      title: "Call Us",
      description: "Mon-Fri from 9am to 5pm",
      details: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: <MessageSquare size={24} className="text-[#0C4CA1]" />,
      title: "Live Chat",
      description: "Instant support",
      details: "Start chatting",
      action: "#chat"
    },
    {
      icon: <MapPin size={24} className="text-[#0C4CA1]" />,
      title: "Visit Us",
      description: "Our headquarters",
      details: "123 Business Ave, Suite 100",
      action: "https://maps.google.com"
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
      y: 20 
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

  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-200/20 rounded-full -translate-y-36 translate-x-36 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full -translate-y-36 -translate-x-36 blur-3xl"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-[#0C4CA1]/10 text-[#0C4CA1] rounded-full text-sm font-medium mb-4">
            <MessageSquare size={16} className="mr-2" />
            GET IN TOUCH
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions? We&apos;re here to help. Get in touch with our team.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="space-y-2">
              <h3 className="text-2xl font-bold text-gray-900">Let&apos;s talk</h3>
              <p className="text-gray-600">
                Whether you have questions about features, pricing, or anything else, 
                our team is ready to answer all your questions.
              </p>
            </motion.div>

            {/* Contact Methods */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  variants={itemVariants}
                  href={method.action}
                  className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-[#0C4CA1]/20"
                >
                  <div className="mb-4 p-3 bg-[#0C4CA1]/10 rounded-xl w-12 h-12 flex items-center justify-center group-hover:bg-[#0C4CA1]/20 transition-colors duration-300">
                    {method.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">{method.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">{method.description}</p>
                  <p className="text-[#0C4CA1] font-medium group-hover:text-[#0C4CA1]/80 transition-colors duration-300">
                    {method.details}
                  </p>
                </motion.a>
              ))}
            </div>

            {/* MessageSquare Direct Button */}
            {/* <motion.div variants={itemVariants} className="bg-green-50 rounded-2xl p-6 border border-green-200">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-green-100 rounded-xl w-12 h-12 flex items-center justify-center mr-4">
                  <MessageSquare size={24} className="text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">MessageSquare Message</h4>
                  <p className="text-sm text-gray-600">Get instant support via MessageSquare</p>
                </div>
              </div>
              <motion.a
                href="https://wa.me/917058548204"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MessageSquare size={20} />
                Message on MessageSquare
              </motion.a>
            </motion.div> */}

            {/* Additional Info */}
            <motion.div variants={itemVariants} className="bg-[#0C4CA1]/10 rounded-2xl p-6">
              <div className="flex items-start mb-4">
                <Clock size={20} className="text-[#0C4CA1] mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Response Time</h4>
                  <p className="text-gray-600">We typically respond within 2 business hours</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle2 size={20} className="text-[#0C4CA1] mr-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Support Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 9AM - 6PM (EST)</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={32} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for contacting us. We&apos;ll get back to you shortly.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsSubmitted(false)}
                  className="text-[#0C4CA1] font-semibold hover:text-[#0C4CA1]/80 transition-colors duration-300"
                >
                  Send another message
                </motion.button>
              </motion.div>
            ) : (
              <>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0C4CA1]/20 focus:border-[#0C4CA1] transition-all duration-200"
                          placeholder="Your name"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0C4CA1]/20 focus:border-[#0C4CA1] transition-all duration-200"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="billing">Billing Question</option>
                      <option value="feature">Feature Request</option>
                      <option value="partnership">Partnership</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#0C4CA1]/20 focus:border-[#0C4CA1] transition-all duration-200"
                      placeholder="Tell us how we can help..."
                    ></textarea>
                  </div>
                  <motion.button
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
                    }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-[#0C4CA1] hover:bg-[#0C4CA1]/80 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    Send via MessageSquare
                  </motion.button>
                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to our{' '}
                    <a href="#privacy" className="text-[#0C4CA1] hover:text-[#0C4CA1]/80 underline">
                      Privacy Policy
                    </a>
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;