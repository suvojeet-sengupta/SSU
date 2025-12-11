'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { NAV_ITEMS } from '@/data/site';

const Navbar = () => {
    const pathname = usePathname();
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    // Track scroll direction
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        // Hide only if scrolled down more than 100px and moving down
        if (latest > previous && latest > 100) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: -100 }
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-xl border-b border-white/10"
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative">
                        <div className="w-10 h-10 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
                            <span className="text-white font-bold text-xl">S</span>
                        </div>
                        {/* Glow effect */}
                        <div className="absolute inset-0 bg-cyan-500/30 blur-lg rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>
                    <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                        Shyam Surma CineVerse
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-2 bg-white/5 p-1 rounded-full border border-white/5 backdrop-blur-md">
                    {NAV_ITEMS.map((item, index) => {
                        const isActive = pathname === item.href;
                        const Icon = item.icon;
                        return (
                            <Link
                                key={index}
                                href={item.href}
                                aria-label={item.name}
                                className={`flex items-center gap-2 px-4 py-2 text-sm rounded-full transition-all duration-300 ${isActive
                                    ? 'bg-white/20 text-white shadow-lg border border-white/10'
                                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                                    }`}
                            >
                                <Icon size={16} /> {item.name}
                            </Link>
                        );
                    })}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg relative z-50 transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-3xl border-b border-white/10 overflow-hidden md:hidden shadow-2xl"
                    >
                        <div className="p-4 flex flex-col gap-2">
                            {NAV_ITEMS.map((item, index) => {
                                const isActive = pathname === item.href;
                                const Icon = item.icon;
                                return (
                                    <Link
                                        key={index}
                                        href={item.href}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`flex items-center gap-4 px-6 py-4 rounded-xl transition-all border ${isActive
                                            ? 'bg-white/10 text-white border-white/10'
                                            : 'text-gray-400 border-transparent hover:bg-white/5 hover:text-white'
                                            }`}
                                    >
                                        <div className={`p-2 rounded-lg ${isActive ? 'bg-cyan-500/20 text-cyan-400' : 'bg-white/5'}`}>
                                            <Icon size={20} />
                                        </div>
                                        <span className="font-medium text-lg">{item.name}</span>
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
