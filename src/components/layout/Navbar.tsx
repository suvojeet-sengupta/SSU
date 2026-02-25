'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { NAV_ITEMS } from '@/data/site';
import { ThemeToggle } from '@/components/common/ThemeToggle';

const Navbar = () => {
    const pathname = usePathname();
    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    // Track scroll direction
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        // Hide only if scrolled down more than 100px and moving down
        if (latest > previous && latest > 100) {
            setHidden((prev) => (prev !== true ? true : prev));
        } else {
            setHidden((prev) => (prev !== false ? false : prev));
        }
    });

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: -100 }
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-50 dark:bg-black/40 bg-white/40 backdrop-blur-xl border-b dark:border-white/10 border-black/10"
        >
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative">
                        <div className="w-10 h-10 dark:bg-white bg-black rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                            <span className="dark:text-black text-white font-bold text-xl">S</span>
                        </div>
                    </div>
                    <span className="text-xl md:text-2xl font-bold dark:text-white text-black tracking-tight">
                        Shyam <span className="font-light italic dark:text-white/60 text-black/60">Surma</span>
                    </span>
                </Link>

                {/* Right Side Items */}
                <div className="flex items-center gap-4">
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1 dark:bg-white/[0.03] bg-black/[0.03] p-1 rounded-full border dark:border-white/10 border-black/10 backdrop-blur-md">
                        {NAV_ITEMS.map((item, index) => {
                            const isActive = pathname === item.href || (item.subItems && item.subItems.some(sub => pathname === sub.href));
                            const Icon = item.icon;

                            if (item.subItems) {
                                return (
                                    <div key={index} className="relative group">
                                        <button
                                            aria-label={item.name}
                                            className={`flex items-center gap-2 px-4 py-2 text-sm rounded-full transition-all duration-300 ${isActive
                                                ? 'dark:bg-white/10 bg-black/10 dark:text-white text-black shadow-sm'
                                                : 'dark:text-white/60 text-black/60 dark:hover:text-white hover:text-black dark:hover:bg-white/5 hover:bg-black/5'
                                                }`}
                                        >
                                            <Icon strokeWidth={isActive ? 2 : 1.5} size={16} /> {item.name}
                                            <ChevronDown size={14} className="transition-transform group-hover:rotate-180 opacity-60" />
                                        </button>
                                        <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                                            <div className="dark:bg-[#111] bg-white border dark:border-white/10 border-black/10 rounded-2xl shadow-xl w-60 overflow-hidden p-2 flex flex-col gap-1">
                                                {item.subItems.map((sub, subIdx) => {
                                                    const SubIcon = sub.icon;
                                                    const isSubActive = pathname === sub.href;
                                                    if (sub.comingSoon) {
                                                        return (
                                                            <div key={subIdx} className="flex items-center justify-between px-3 py-2.5 rounded-xl dark:text-white/40 text-black/40 cursor-not-allowed">
                                                                <div className="flex items-center gap-3">
                                                                    <SubIcon strokeWidth={1.5} size={16} />
                                                                    <span className="text-sm font-medium">{sub.name}</span>
                                                                </div>
                                                                <span className="text-[9px] uppercase tracking-widest font-bold px-1.5 py-0.5 rounded-md dark:bg-white/10 bg-black/10">Soon</span>
                                                            </div>
                                                        );
                                                    }
                                                    return (
                                                        <Link
                                                            key={subIdx}
                                                            href={sub.href}
                                                            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors ${isSubActive ? 'dark:bg-white/10 bg-black/5 dark:text-white text-black' : 'dark:text-white/70 text-black/70 dark:hover:bg-white/5 hover:bg-black/5 dark:hover:text-white hover:text-black'}`}
                                                        >
                                                            <SubIcon strokeWidth={isSubActive ? 2 : 1.5} size={16} />
                                                            <span className="text-sm font-medium">{sub.name}</span>
                                                        </Link>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                );
                            }

                            return (
                                <Link
                                    key={index}
                                    href={item.href!}
                                    aria-label={item.name}
                                    className={`flex items-center gap-2 px-4 py-2 text-sm rounded-full transition-all duration-300 ${isActive
                                        ? 'dark:bg-white/10 bg-black/10 dark:text-white text-black shadow-sm'
                                        : 'dark:text-white/60 text-black/60 dark:hover:text-white hover:text-black dark:hover:bg-white/5 hover:bg-black/5'
                                        }`}
                                >
                                    <Icon strokeWidth={isActive ? 2 : 1.5} size={16} /> {item.name}
                                </Link>
                            );
                        })}
                    </div>

                    <div className="hidden md:block">
                        <ThemeToggle />
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center gap-3 md:hidden">
                        <ThemeToggle />
                        <button
                            className="p-2 dark:text-white text-black dark:hover:bg-white/10 hover:bg-black/10 rounded-lg relative z-50 transition-colors"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="absolute top-full left-0 right-0 dark:bg-black/95 bg-white/95 backdrop-blur-3xl border-b dark:border-white/10 border-black/10 overflow-hidden md:hidden shadow-2xl"
                    >
                        <div className="p-4 flex flex-col gap-2">
                            {NAV_ITEMS.map((item, index) => {
                                const isActive = pathname === item.href || (item.subItems && item.subItems.some(sub => pathname === sub.href));
                                const isExpanded = openDropdown === item.name;
                                const Icon = item.icon;

                                if (item.subItems) {
                                    return (
                                        <div key={index} className="flex flex-col gap-1">
                                            <button
                                                onClick={() => setOpenDropdown(isExpanded ? null : item.name)}
                                                className={`flex items-center justify-between w-full px-6 py-4 rounded-xl transition-all border ${isActive
                                                    ? 'dark:bg-white/10 bg-black/5 dark:text-white text-black dark:border-white/10 border-black/10'
                                                    : 'dark:text-white/60 text-black/60 border-transparent dark:hover:bg-white/5 hover:bg-black/5 dark:hover:text-white hover:text-black'
                                                    }`}
                                            >
                                                <div className="flex items-center gap-4">
                                                    <div className={`p-2 rounded-lg ${isActive ? 'dark:bg-white/10 bg-black/10 dark:text-white text-black' : 'dark:bg-white/5 bg-black/5'}`}>
                                                        <Icon strokeWidth={1.5} size={20} />
                                                    </div>
                                                    <span className="font-medium text-lg tracking-wide">{item.name}</span>
                                                </div>
                                                <ChevronDown size={20} className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                                            </button>
                                            <AnimatePresence>
                                                {isExpanded && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: 'auto' }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <div className="pl-[4.5rem] pr-6 flex flex-col gap-2 pb-2">
                                                            {item.subItems.map((sub, subIdx) => {
                                                                const SubIcon = sub.icon;
                                                                const isSubActive = pathname === sub.href;

                                                                if (sub.comingSoon) {
                                                                    return (
                                                                        <div key={subIdx} className="flex items-center justify-between px-4 py-3 rounded-xl dark:text-white/40 text-black/40 cursor-not-allowed border border-transparent">
                                                                            <span className="font-medium text-base">{sub.name}</span>
                                                                            <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-md dark:bg-white/10 bg-black/10">Soon</span>
                                                                        </div>
                                                                    );
                                                                }

                                                                return (
                                                                    <Link
                                                                        key={subIdx}
                                                                        href={sub.href}
                                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                                        className={`flex items-center justify-between px-4 py-3 rounded-xl transition-colors border ${isSubActive ? 'dark:bg-white/10 bg-black/5 dark:text-white text-black dark:border-white/10 border-black/5' : 'border-transparent dark:text-white/70 text-black/70 dark:hover:bg-white/5 hover:bg-black/5 dark:hover:text-white hover:text-black'}`}
                                                                    >
                                                                        <span className="font-medium text-base">{sub.name}</span>
                                                                    </Link>
                                                                );
                                                            })}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>
                                    );
                                }

                                return (
                                    <Link
                                        key={index}
                                        href={item.href!}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                        className={`flex items-center gap-4 px-6 py-4 rounded-xl transition-all border ${isActive
                                            ? 'dark:bg-white/10 bg-black/5 dark:text-white text-black dark:border-white/10 border-black/10'
                                            : 'dark:text-white/60 text-black/60 border-transparent dark:hover:bg-white/5 hover:bg-black/5 dark:hover:text-white hover:text-black'
                                            }`}
                                    >
                                        <div className={`p-2 rounded-lg ${isActive ? 'dark:bg-white/10 bg-black/10 dark:text-white text-black' : 'dark:bg-white/5 bg-black/5'}`}>
                                            <Icon strokeWidth={1.5} size={20} />
                                        </div>
                                        <span className="font-medium text-lg tracking-wide">{item.name}</span>
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
