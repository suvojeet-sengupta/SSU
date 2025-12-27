'use client';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { SITE_CONFIG } from '@/data/site';
import MagneticButton from '@/components/ui/MagneticButton';

export default function ContactContent() {
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

                {/* Contact Form - Normal POST for activation */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden"
                >
                    <h3 className="text-2xl font-bold mb-8">Send a Message</h3>
                    <form
                        action="https://formsubmit.co/shyamsurmacineverse@gmail.com"
                        method="POST"
                        className="space-y-6"
                    >
                        {/* FormSubmit Configuration */}
                        <input type="hidden" name="_subject" value="New Contact Form Submission - Ghosal Group" />
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_next" value="https://ssu-5jn.pages.dev/contact" />
                        <input type="hidden" name="_template" value="table" />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">First Name</label>
                                <input
                                    name="firstName"
                                    required
                                    type="text"
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                                    placeholder="John"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Last Name</label>
                                <input
                                    name="lastName"
                                    required
                                    type="text"
                                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                                    placeholder="Doe"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">Email Address</label>
                            <input
                                name="email"
                                required
                                type="email"
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                                placeholder="john@example.com"
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">Subject</label>
                            <select
                                name="subject"
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                            >
                                <option value="General Inquiry">General Inquiry</option>
                                <option value="Music Distribution">Music Distribution</option>
                                <option value="Advertising Services">Advertising Services</option>
                                <option value="Partnership">Partnership</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">Message</label>
                            <textarea
                                name="message"
                                required
                                rows={4}
                                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                                placeholder="Tell us about your project..."
                            ></textarea>
                        </div>

                        <MagneticButton className="w-full">
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-indigo-500 to-cyan-500 text-white font-bold py-4 rounded-xl hover:shadow-lg hover:shadow-indigo-500/20 transition-all flex items-center justify-center gap-2"
                            >
                                Send Message <Send size={18} />
                            </button>
                        </MagneticButton>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}
