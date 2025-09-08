// components/Process.tsx
'use client';

import { motion } from 'framer-motion';
import {
    UserPlus,
    FileText,
    BarChart3,
    TrendingUp,
    Send,
    CheckCircle2,
    Clock,
    ArrowRight
} from 'lucide-react';

const Process = () => {
    const steps = [
        {
            icon: <UserPlus size={24} className="text-white" />,
            title: "Sign Up in Seconds",
            description: "Create your account with just an email. No credit card required to get started.",
            time: "30 seconds",
            color: "from-blue-500 to-blue-600",
            details: ["Free forever plan", "No credit card needed", "Instant setup"]
        },
        {
            icon: <FileText size={24} className="text-white" />,
            title: "Create Beautiful Invoices",
            description: "Use our designer templates or create your own custom invoice in minutes.",
            time: "2 minutes",
            color: "from-purple-500 to-purple-600",
            details: ["Custom templates", "Brand customization", "Auto numbering"]
        },
        {
            icon: <Send size={24} className="text-white" />,
            title: "Send to Clients",
            description: "Deliver invoices directly via email or generate shareable links for your clients.",
            time: "1 minute",
            color: "from-pink-500 to-pink-600",
            details: ["Email delivery", "Shareable links", "Client portal"]
        },
        {
            icon: <CheckCircle2 size={24} className="text-white" />,
            title: "Get Paid Faster",
            description: "Accept online payments, track invoice status, and send automatic reminders.",
            time: "Real-time",
            color: "from-green-500 to-green-600",
            details: ["Online payments", "Status tracking", "Auto reminders"]
        },
        {
            icon: <BarChart3 size={24} className="text-white" />,
            title: "Gain Valuable Insights",
            description: "Analyze your business performance with detailed reports and analytics.",
            time: "Instant access",
            color: "from-orange-500 to-orange-600",
            details: ["Revenue reports", "Client analytics", "Expense tracking"]
        },
        {
            icon: <TrendingUp size={24} className="text-white" />,
            title: "Grow Your Business",
            description: "Use data-driven insights to make better decisions and scale your business.",
            time: "Continuous",
            color: "from-red-500 to-red-600",
            details: ["Data-driven decisions", "Scale efficiently", "Maximize profits"]
        }
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 40,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1]
            }
        }
    };

    const lineVariants = {
        hidden: {
            scaleX: 0,
            originX: 0
        },
        visible: {
            scaleX: 1,
            transition: {
                duration: 1.2,
                ease: [0.25, 0.1, 0.25, 1]
            }
        }
    };

    return (
        <section id="process" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-72 bg-gradient-to-r from-blue-50/30 to-indigo-50/30"></div>
            <div className="absolute -right-32 -top-32 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
            <div className="absolute -left-32 -bottom-32 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-20"
                >
                    <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
                        <Clock size={16} className="mr-2" />
                        SIMPLE PROCESS
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        How Bill Buddy Works
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Streamline your billing in six simple steps. From signup to growth, we&apos;ve got you covered.
                    </p>
                </motion.div>

                {/* Process Steps - Desktop */}
                <div className="hidden lg:block relative">
                    {/* Connecting line */}
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="absolute left-20 right-20 top-20 h-1 bg-gradient-to-r from-blue-300 via-purple-300 to-red-300 rounded-full"
                    />

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="grid grid-cols-6 gap-6"
                    >
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="flex flex-col items-center text-center"
                            >
                                {/* Step number and icon */}
                                <div className="relative mb-6">
                                    <div className="absolute -inset-4 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"></div>
                                    <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                                        {step.icon}
                                    </div>
                                    <div className="absolute -top-3 -right-3 w-7 h-7 bg-white border-2 border-gray-100 rounded-full flex items-center justify-center shadow-md">
                                        <span className="text-xs font-bold text-gray-700">{index + 1}</span>
                                    </div>
                                </div>

                                {/* Step content */}
                                <div className="px-2">
                                    <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                                    <p className="text-sm text-gray-600 mb-3">{step.description}</p>
                                    <div className="inline-flex items-center text-xs font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                                        <Clock size={12} className="mr-1" />
                                        {step.time}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Process Steps - Mobile & Tablet */}
                <div className="lg:hidden">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="space-y-8"
                    >
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="flex group"
                            >
                                {/* Timeline line */}
                                <div className="flex flex-col items-center mr-6">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center shadow-md`}>
                                        {step.icon}
                                    </div>
                                    {index < steps.length - 1 && (
                                        <div className="flex-grow w-0.5 bg-gradient-to-b from-blue-200 to-purple-200 my-2"></div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="flex-1 pb-8">
                                    <div className="flex items-center mb-2">
                                        <span className="text-sm font-semibold text-gray-500 mr-3">Step {index + 1}</span>
                                        <div className="h-0.5 w-8 bg-gray-200"></div>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                                    <p className="text-gray-600 mb-3">{step.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {step.details.map((detail, i) => (
                                            <span key={i} className="text-xs font-medium text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
                                                {detail}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center text-sm text-gray-500">
                                        <Clock size={14} className="mr-1" />
                                        {step.time}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mt-20 text-center"
                >
                    <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/5 rounded-full"></div>
                        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/5 rounded-full"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                Ready to transform your billing process?
                            </h3>
                            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                                Join thousands of businesses using Bill Buddy to save time, get paid faster, and grow their business.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <motion.button
                                    whileHover={{
                                        scale: 1.05,
                                        boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)"
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center"
                                >
                                    Get Started Free
                                    <ArrowRight size={18} className="ml-2" />
                                </motion.button>
                                <motion.button
                                    whileHover={{
                                        scale: 1.05,
                                    }}
                                    whileTap={{ scale: 0.95 }}
                                    className="border border-gray-300 text-gray-700 font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:border-blue-300 hover:bg-blue-50/50"
                                >
                                    Watch Demo
                                </motion.button>
                            </div>
                            <p className="text-sm text-gray-500 mt-6">
                                No credit card required • Free forever plan • Setup in minutes
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Process;