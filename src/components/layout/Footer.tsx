'use client';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, Clapperboard, Code } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#05020a] border-t border-purple-900/20 pt-16 pb-8 text-gray-400">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div>
                        <Link href="/" className="inline-block mb-6 group">
                            <span className="flex items-center gap-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-200 to-purple-400 font-cinzel">
                                <Clapperboard className="text-amber-400 group-hover:rotate-12 transition-transform duration-300" />
                                CineVerse
                            </span>
                        </Link>
                        <p className="mb-6 leading-relaxed text-sm">
                            Targeting Success, Blessed by Khatu Shyam. A 360° global powerhouse connecting creativity with global visibility.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-purple-900/10 flex items-center justify-center text-gray-400 hover:bg-purple-600 hover:text-white transition-all duration-300 border border-purple-500/10 hover:border-purple-400 hover:shadow-[0_0_15px_rgba(147,51,234,0.3)]">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-cinzel font-bold text-lg mb-6 tracking-wide border-b border-purple-800/30 inline-block pb-1">Quick Links</h4>
                        <ul className="space-y-3">
                            {['Home', 'Distribution', 'Advertisement', 'Team', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="hover:text-amber-400 transition-colors inline-flex items-center gap-2 group text-sm">
                                        <span className="w-1 h-1 rounded-full bg-purple-500 group-hover:bg-amber-400 transition-colors"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info (Kolkata) */}
                    <div>
                        <h4 className="text-white font-cinzel font-bold text-lg mb-6 tracking-wide border-b border-purple-800/30 inline-block pb-1">Kolkata Office</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-amber-400 mt-1 shrink-0" />
                                <span>15/4 NN Ghosh Road,<br />Ashok Nagar, Tollygunge,<br />Kolkata, 700040</span>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info (Dhanbad) */}
                    <div>
                        <h4 className="text-white font-cinzel font-bold text-lg mb-6 tracking-wide border-b border-purple-800/30 inline-block pb-1">Branch Office</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-amber-400 mt-1 shrink-0" />
                                <span>Baramasia Shani Mandir,<br />Dhanbad, Jharkhand 826001</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-amber-400 shrink-0" />
                                <div className="flex flex-col">
                                    <a href="tel:7488050524" className="hover:text-white transition-colors">7488050524</a>
                                    <a href="tel:8789732987" className="hover:text-white transition-colors">8789732987</a>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-amber-400 shrink-0" />
                                <a href="mailto:contact@ghosalgroup.com" className="hover:text-white transition-colors">contact@ghosalgroup.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-purple-900/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
                    <p>© 2025 Shyam Surma CineVerse. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
                    </div>
                </div>

                {/* Developer Credit */}
                <div className="mt-8 flex justify-center">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 hover:bg-purple-900/20 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 group cursor-default hover:scale-105 active:scale-95">
                        <Code size={14} className="text-purple-400 group-hover:text-amber-400 group-hover:rotate-12 transition-all" />
                        <span className="text-xs text-gray-500 group-hover:text-gray-300 transition-colors">
                            Website developed by <span className="font-semibold text-gray-300 group-hover:text-amber-400 transition-colors">Suvojeet Sengupta</span>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
