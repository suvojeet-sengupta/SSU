'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { SITE_CONFIG } from '@/data/site';
import MagneticButton from '@/components/ui/MagneticButton';

export default function ContactContent() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        // Simulate network request
        await new Promise(resolve => setTimeout(resolve, 2000));

        // For now, always succeed after delay
        setStatus('success');

        // Reset after 3 seconds
        setTimeout(() => setStatus('idle'), 3000);
    };

    return (
        <div className="container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-16"
            >
                <div className="inline-block px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md text-xs text-indigo-300 font-medium mb-6 uppercase tracking-widest">
                    Get in Touch
                </div>
                <h1 className="text-5xl md:text-7xl font-bold mb-6">
                    Let's Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">History</span>
                </h1>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                    Ready to elevate your content? Using our global network and advanced technology to amplify your reach.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                {/* Contact Info */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="space-y-8"
                >
                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors">
                        <Mail className="w-10 h-10 text-cyan-400 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Email Us</h3>
                        <p className="text-gray-400 mb-4">For general inquiries and partnership opportunities.</p>
                        <a href={`mailto:${SITE_CONFIG.contact.email}`} className="text-white font-medium hover:text-cyan-400 transition-colors">
                            {SITE_CONFIG.contact.email}
                        </a>
                    </div>

                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors">
                        <Phone className="w-10 h-10 text-purple-400 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Call Us</h3>
                        <p className="text-gray-400 mb-4">Mon-Fri from 9am to 6pm IST.</p>
                        <a href={`tel:${SITE_CONFIG.contact.phone.replace(/\s/g, '')}`} className="text-white font-medium hover:text-purple-400 transition-colors">
                            {SITE_CONFIG.contact.phone}
                        </a>
                    </div>

                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors">
                        <MapPin className="w-10 h-10 text-pink-400 mb-4" />
                        <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                        <p className="text-gray-400 mb-4">Come say hello at our global headquarters.</p>
                        <p className="text-white font-medium">{SITE_CONFIG.contact.address}</p>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden"
                >
                    <AnimatePresence>
                        {status === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="absolute inset-0 bg-[#030712]/90 backdrop-blur-md z-20 flex flex-col items-center justify-center text-center p-8"
                            >
                                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                                    <CheckCircle className="w-10 h-10 text-green-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                <p className="text-gray-400">We'll get back to you shortly.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">First Name</label>
                                <input required type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Last Name</label>
                                <input required type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Doe" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">Email Address</label>
                            <input required type="email" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="john@example.com" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">Subject</label>
                            <select className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors">
                                <option>General Inquiry</option>
                                <option>Music Distribution</option>
                                <option>Advertising Services</option>
                                <option>Partnership</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">Message</label>
                            <textarea required rows={4} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Tell us about your project..."></textarea>
                        </div>

                        <MagneticButton className="w-full">
                            <button
                                disabled={status === 'submitting'}
                                className="w-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-indigo-500/20 transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                {status === 'submitting' ? (
                                    <>Sending <Loader2 className="animate-spin" size={18} /></>
                                ) : (
                                    <>Send Message <Send size={18} /></>
                                )}
                            </button>
                        </MagneticButton>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
