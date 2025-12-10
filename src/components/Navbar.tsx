'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Music, Globe, Users, Star, Mail, Menu, Megaphone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const pathname = usePathname();
    const navItems = [
        { name: 'Home', icon: <Home size={16} />, href: '/' },
        { name: 'Services', icon: <Music size={16} />, href: '#' },
        { name: 'Distribution', icon: <Globe size={16} />, href: '/distribution' },
        { name: 'Advert', icon: <Megaphone size={16} />, href: '/advertisement' },
        { name: 'Team', icon: <Users size={16} />, href: '/team' },
        { name: 'About', icon: <Star size={16} />, href: '/about' },
        { name: 'Contact', icon: <Mail size={16} />, href: '/contact' },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-lg border-b border-white/10"
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative">
                        <div className="w-10 h-10 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
                            <span className="text-white font-bold text-xl">G</span>
                        </div>
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-cyan-500/30 blur-lg rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Ghosal Group
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-2 bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-md">
                    {navItems.map((item, index) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={index}
                                href={item.href}
                                className={`flex items-center gap-2 px-4 py-2 text-sm rounded-full transition-all duration-300 ${isActive
                                    ? 'bg-white/20 text-white shadow-lg border border-white/10'
                                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                {item.icon} {item.name}
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg relative z-50"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <Menu size={24} />
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-black border-b border-white/10 p-4 md:hidden shadow-2xl"
                    >
                        <div className="flex flex-col gap-2">
                            {navItems.map((item, index) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${isActive
                                            ? 'bg-white/20 text-white'
                                            : 'text-gray-400 hover:text-white hover:bg-white/5'
                                            }`}
                                    >
                                        {item.icon}
                                        <span className="font-medium">{item.name}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
