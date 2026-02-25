'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/data/site';
import MagneticButton from '@/components/ui/MagneticButton';

export default function ContactContent() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch('https://formsubmit.co/ajax/b353078e37eb21bd1cefcd1badf7b0f8', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    firstName: formData.firstName,
                    lastName: formData.lastName,
                    email: formData.email,
                    subject: formData.subject,
                    message: formData.message,
                    _subject: `New Contact Form Submission - ${formData.subject}`,
                    _template: 'table'
                })
            });

            if (response.ok) {
                setStatus('success');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    subject: 'General Inquiry',
                    message: ''
                });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 3000);
            }
        } catch {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    return (
        <div className="container mx-auto px-4 py-12">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="text-center mb-16"
            >
                <div className="inline-block px-4 py-1.5 rounded-full border dark:border-indigo-500/20 border-indigo-500/30 dark:bg-indigo-500/[0.03] bg-indigo-500/[0.05] backdrop-blur-md text-xs dark:text-indigo-300 text-indigo-700 font-semibold mb-8 uppercase tracking-widest">
                    Get in Touch
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter mb-8 transition-colors">
                    Let's Create <span className="dark:text-white/40 text-black/40 italic font-light">History</span>
                </h1>
                <p className="text-lg dark:text-white/50 text-black/50 max-w-2xl mx-auto leading-relaxed font-light">
                    Ready to elevate your content? Using our global network and advanced technology to amplify your reach.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="space-y-6"
                >
                    <div className="backdrop-blur-xl dark:bg-white/[0.02] bg-white border dark:border-white/10 border-black/5 rounded-[2.5rem] p-8 dark:hover:bg-white/[0.04] hover:bg-gray-50 hover:shadow-xl transition-all duration-500">
                        <div className="w-14 h-14 dark:bg-cyan-500/10 bg-cyan-500/10 rounded-2xl flex items-center justify-center mb-6">
                            <Mail className="w-7 h-7 text-cyan-600 dark:text-cyan-400" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 dark:text-white text-black">Email Us</h3>
                        <p className="dark:text-gray-400 text-gray-600 mb-4 font-light">For general inquiries and partnership opportunities.</p>
                        <a href={`mailto:${SITE_CONFIG.contact.email}`} className="dark:text-white text-black font-medium hover:text-cyan-500 transition-colors">
                            {SITE_CONFIG.contact.email}
                        </a>
                    </div>

                    <div className="backdrop-blur-xl dark:bg-white/[0.02] bg-white border dark:border-white/10 border-black/5 rounded-[2.5rem] p-8 dark:hover:bg-white/[0.04] hover:bg-gray-50 hover:shadow-xl transition-all duration-500">
                        <div className="w-14 h-14 dark:bg-purple-500/10 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6">
                            <Phone className="w-7 h-7 text-purple-600 dark:text-purple-400" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 dark:text-white text-black">Call Us</h3>
                        <p className="dark:text-gray-400 text-gray-600 mb-4 font-light">Mon-Fri from 9am to 6pm IST.</p>
                        <a href={`tel:${SITE_CONFIG.contact.phone.replace(/\s/g, '')}`} className="dark:text-white text-black font-medium hover:text-purple-500 transition-colors">
                            {SITE_CONFIG.contact.phone}
                        </a>
                    </div>

                    <div className="backdrop-blur-xl dark:bg-white/[0.02] bg-white border dark:border-white/10 border-black/5 rounded-[2.5rem] p-8 dark:hover:bg-white/[0.04] hover:bg-gray-50 hover:shadow-xl transition-all duration-500">
                        <div className="w-14 h-14 dark:bg-pink-500/10 bg-pink-500/10 rounded-2xl flex items-center justify-center mb-6">
                            <MapPin className="w-7 h-7 text-pink-600 dark:text-pink-400" />
                        </div>
                        <h3 className="text-xl font-bold mb-2 dark:text-white text-black">Visit Us</h3>
                        <p className="dark:text-gray-400 text-gray-600 mb-4 font-light">Come say hello at our global headquarters.</p>
                        <p className="dark:text-white text-black font-medium">{SITE_CONFIG.contact.address}</p>
                    </div>
                </motion.div>

                {/* Contact Form - AJAX */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="backdrop-blur-xl dark:bg-white/[0.02] bg-white border dark:border-white/10 border-black/5 rounded-[2.5rem] p-8 lg:p-12 shadow-2xl relative overflow-hidden"
                >
                    {/* Success Overlay */}
                    <AnimatePresence>
                        {status === 'success' && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 dark:bg-[#030712]/95 bg-white/95 backdrop-blur-md z-20 flex flex-col items-center justify-center text-center p-8 transition-colors duration-700"
                            >
                                <motion.div
                                    initial={{ scale: 0, rotate: -45 }}
                                    animate={{ scale: 1, rotate: 0 }}
                                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                                    className="w-24 h-24 bg-gradient-to-br from-green-500/30 to-emerald-500/30 rounded-full flex items-center justify-center mb-8 shadow-lg shadow-green-500/20"
                                >
                                    <CheckCircle className="w-12 h-12 text-green-500" />
                                </motion.div>
                                <motion.h3
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-3xl font-bold dark:text-white text-black mb-4"
                                >
                                    Message Sent!
                                </motion.h3>
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="dark:text-gray-400 text-gray-600 text-lg font-light"
                                >
                                    Thank you for reaching out. We'll get back to you shortly.
                                </motion.p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Error Overlay */}
                    <AnimatePresence>
                        {status === 'error' && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="absolute inset-0 dark:bg-[#030712]/95 bg-white/95 backdrop-blur-md z-20 flex flex-col items-center justify-center text-center p-8 transition-colors duration-700"
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ type: "spring", delay: 0.1 }}
                                    className="w-24 h-24 bg-gradient-to-br from-red-500/30 to-rose-500/30 rounded-full flex items-center justify-center mb-8 shadow-lg shadow-red-500/20"
                                >
                                    <AlertCircle className="w-12 h-12 text-red-500" />
                                </motion.div>
                                <motion.h3
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-3xl font-bold dark:text-white text-black mb-4"
                                >
                                    Oops! Something went wrong
                                </motion.h3>
                                <motion.p
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="dark:text-gray-400 text-gray-600 text-lg font-light"
                                >
                                    Please try again or email us directly.
                                </motion.p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <h3 className="text-2xl font-bold mb-10 dark:text-white text-black">Send a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium dark:text-gray-400 text-gray-500 ml-1">First Name</label>
                                <input
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    type="text"
                                    className="w-full dark:bg-black/40 bg-gray-50 border dark:border-white/10 border-black/10 rounded-2xl px-5 py-4 dark:text-white text-black focus:outline-none dark:focus:border-indigo-500 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500/20 transition-all"
                                    placeholder="John"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium dark:text-gray-400 text-gray-500 ml-1">Last Name</label>
                                <input
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    type="text"
                                    className="w-full dark:bg-black/40 bg-gray-50 border dark:border-white/10 border-black/10 rounded-2xl px-5 py-4 dark:text-white text-black focus:outline-none dark:focus:border-indigo-500 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500/20 transition-all"
                                    placeholder="Doe"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium dark:text-gray-400 text-gray-500 ml-1">Email Address</label>
                            <input
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                type="email"
                                className="w-full dark:bg-black/40 bg-gray-50 border dark:border-white/10 border-black/10 rounded-2xl px-5 py-4 dark:text-white text-black focus:outline-none dark:focus:border-indigo-500 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500/20 transition-all"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium dark:text-gray-400 text-gray-500 ml-1">Subject</label>
                            <select
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full dark:bg-black/40 bg-gray-50 border dark:border-white/10 border-black/10 rounded-2xl px-5 py-4 dark:text-white text-black focus:outline-none dark:focus:border-indigo-500 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500/20 transition-all"
                            >
                                <option value="General Inquiry">General Inquiry</option>
                                <option value="Music Distribution">Music Distribution</option>
                                <option value="Advertising Services">Advertising Services</option>
                                <option value="Partnership">Partnership</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium dark:text-gray-400 text-gray-500 ml-1">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={4}
                                className="w-full dark:bg-black/40 bg-gray-50 border dark:border-white/10 border-black/10 rounded-2xl px-5 py-4 dark:text-white text-black focus:outline-none dark:focus:border-indigo-500 focus:border-indigo-400 focus:ring-1 focus:ring-indigo-500/20 transition-all resize-none"
                                placeholder="Tell us about your project..."
                            ></textarea>
                        </div>

                        <MagneticButton className="w-full">
                            <button
                                type="submit"
                                disabled={status === 'submitting'}
                                className="w-full bg-gradient-to-r from-indigo-600 to-cyan-600 dark:from-indigo-500 dark:to-cyan-500 text-white font-bold py-5 rounded-2xl hover:shadow-xl dark:hover:shadow-indigo-500/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 group mt-4 shadow-lg active:scale-[0.98] transition-all"
                            >
                                {status === 'submitting' ? (
                                    <>Sending... <Loader2 className="animate-spin" size={18} /></>
                                ) : (
                                    <>Send Message <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>
                                )}
                            </button>
                        </MagneticButton>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
