'use client';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import SectionTitle from "@/components/SectionTitle";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#030712] text-white selection:bg-indigo-500/30 pt-32 pb-20">
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
                            <a href="mailto:contact@ghosalgroup.com" className="text-white font-medium hover:text-cyan-400 transition-colors">contact@ghosalgroup.com</a>
                        </div>

                        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors">
                            <Phone className="w-10 h-10 text-purple-400 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Call Us</h3>
                            <p className="text-gray-400 mb-4">Mon-Fri from 9am to 6pm IST.</p>
                            <a href="tel:+919876543210" className="text-white font-medium hover:text-purple-400 transition-colors">+91 98765 43210</a>
                        </div>

                        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors">
                            <MapPin className="w-10 h-10 text-pink-400 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Visit Us</h3>
                            <p className="text-gray-400 mb-4">Come say hello at our global headquarters.</p>
                            <p className="text-white font-medium">123 Innovation Drive, Tech Valley, Mumbai, India</p>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl"
                    >
                        <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">First Name</label>
                                    <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-gray-400">Last Name</label>
                                    <input type="text" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Doe" />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Email Address</label>
                                <input type="email" className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="john@example.com" />
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
                                <textarea rows={4} className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Tell us about your project..."></textarea>
                            </div>

                            <button className="w-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-indigo-500/20 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2">
                                Send Message <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </main>
    );
}
