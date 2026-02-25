'use client';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, Code } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="dark:bg-black bg-gray-50 border-t dark:border-white/5 border-black/5 pt-16 pb-8 dark:text-gray-400 text-gray-600 transition-colors">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="flex flex-col">
                        <Link href="/" className="inline-flex items-center gap-3 mb-6 group w-fit">
                            <div className="w-8 h-8 dark:bg-white bg-black rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shrink-0">
                                <span className="dark:text-black text-white font-bold text-lg">S</span>
                            </div>
                            <span className="text-xl font-medium dark:text-white text-black tracking-tight">
                                Shyam <span className="font-light italic dark:text-white/60 text-black/60">Surma</span>
                            </span>
                        </Link>
                        <p className="mb-8 leading-relaxed text-sm font-light">
                            Targeting Success, Blessed by Khatu Shyam. A 360° global powerhouse connecting creativity with worldwide visibility.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" aria-label="Social Link" className="w-10 h-10 rounded-full dark:bg-white/[0.03] bg-black/[0.03] flex items-center justify-center dark:text-gray-400 text-gray-600 dark:hover:bg-white/10 hover:bg-black/10 dark:hover:text-white hover:text-black transition-all duration-300 border dark:border-white/5 border-black/5">
                                    <Icon size={16} strokeWidth={1.5} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="dark:text-white text-black font-medium tracking-wide mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            {['Home', 'Distribution', 'Advertisement', 'Team', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="dark:hover:text-white hover:text-black transition-colors inline-flex items-center gap-2 group text-sm font-light">
                                        <span className="w-1 h-1 rounded-full dark:bg-white/20 bg-black/20 group-hover:bg-current transition-colors"></span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info (Kolkata) */}
                    <div>
                        <h4 className="dark:text-white text-black font-medium tracking-wide mb-6">Kolkata Office</h4>
                        <ul className="space-y-4 text-sm font-light">
                            <li className="flex items-start gap-3">
                                <MapPin size={16} strokeWidth={1.5} className="dark:text-white/40 text-black/40 mt-0.5 shrink-0" />
                                <span>15/4 NN Ghosh Road,<br />Ashok Nagar, Tollygunge,<br />Kolkata, 700040</span>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info (Dhanbad) */}
                    <div>
                        <h4 className="dark:text-white text-black font-medium tracking-wide mb-6">Branch Office</h4>
                        <ul className="space-y-4 text-sm font-light">
                            <li className="flex items-start gap-3">
                                <MapPin size={16} strokeWidth={1.5} className="dark:text-white/40 text-black/40 mt-0.5 shrink-0" />
                                <span>Baramasia Shani Mandir,<br />Dhanbad, Jharkhand 826001</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={16} strokeWidth={1.5} className="dark:text-white/40 text-black/40 shrink-0" />
                                <div className="flex flex-col">
                                    <a href="tel:7488050524" className="dark:hover:text-white hover:text-black transition-colors">7488050524</a>
                                    <a href="tel:8789732987" className="dark:hover:text-white hover:text-black transition-colors">8789732987</a>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={16} strokeWidth={1.5} className="dark:text-white/40 text-black/40 shrink-0" />
                                <a href="mailto:contact@ghosalgroup.com" className="dark:hover:text-white hover:text-black transition-colors border-b border-transparent dark:hover:border-white/30 hover:border-black/30">contact@ghosalgroup.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t dark:border-white/5 border-black/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs dark:text-gray-500 text-gray-600 font-light">
                    <p>© {new Date().getFullYear()} Shyam Surma CineVerse. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="dark:hover:text-white hover:text-black transition-colors">Privacy Policy</a>
                        <a href="#" className="dark:hover:text-white hover:text-black transition-colors">Terms of Service</a>
                    </div>
                </div>

                {/* Developer Credit */}
                <div className="mt-8 flex justify-center">
                    <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full dark:bg-white/[0.02] bg-black/[0.02] dark:hover:bg-white/[0.05] hover:bg-black/[0.05] border dark:border-white/5 border-black/5 dark:hover:border-white/10 hover:border-black/10 transition-all duration-300 group cursor-default">
                        <Code size={14} strokeWidth={1.5} className="dark:text-white/40 text-black/40 dark:group-hover:text-white group-hover:text-black transition-all" />
                        <span className="text-xs dark:text-gray-500 text-gray-600 font-light transition-colors">
                            Website developed by <span className="font-medium dark:text-gray-300 text-gray-900 dark:group-hover:text-white group-hover:text-black transition-colors">Suvojeet Sengupta</span>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
