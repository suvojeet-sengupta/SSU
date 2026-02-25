'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import StatsGrid from '@/components/sections/home/StatsGrid';
import DevelopmentPopup from '@/components/common/DevelopmentPopup';
import { Disc3, Radio } from 'lucide-react';

const DistributionHero = () => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden dark:bg-black bg-gray-50 pt-20">
            {/* Minimalist Background Effects */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 grayscale dark:mix-blend-screen mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t dark:from-black dark:via-black/90 dark:to-black/40 from-gray-50 via-gray-50/90 to-transparent" />

            {/* Subtle Crimson Glow */}
            <div className="absolute top-1/4 left-1/4 rounded-full w-[500px] h-[500px] bg-red-500/5 blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center pt-10 pb-20">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-xl"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border dark:border-red-500/20 border-red-500/30 dark:bg-red-500/[0.03] bg-red-500/[0.05] backdrop-blur-md mb-8">
                        <Radio className="w-3.5 h-3.5 dark:text-red-400 text-red-600" />
                        <span className="dark:text-red-200/80 text-red-700 text-xs font-semibold tracking-wide uppercase">Official Music Distribution</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-semibold dark:text-white text-black tracking-tight leading-[1.1] mb-6">
                        BMF <br />
                        <span className="dark:text-white/40 text-black/40 font-light italic">MUSIC</span>
                    </h1>

                    <p className="text-lg dark:text-white/50 text-black/50 leading-relaxed mb-10 font-light">
                        Fast, secure, and accessible music distribution.
                        Managed by <span className="dark:text-white/90 text-black/90 font-medium">Riya Ghosal</span>, we ensure your art reaches every corner of the world with uncompromising professionalism.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button
                            onClick={() => setShowPopup(true)}
                            className="inline-flex items-center gap-2 px-7 py-3.5 bg-red-600/90 text-white rounded-full font-medium hover:bg-red-600 transition-colors shadow-[0_0_20px_rgba(220,38,38,0.2)]"
                        >
                            <Disc3 className="w-4 h-4" />
                            <span>Distribute Now</span>
                        </button>
                    </div>
                </motion.div>

                {/* Visual Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                >
                    <div className="relative z-10 dark:bg-white/[0.02] bg-black/[0.02] backdrop-blur-2xl rounded-3xl p-8 border dark:border-white/10 border-black/5 shadow-[0_8px_32px_rgba(0,0,0,0.05)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                        <div className="mb-8 flex items-center justify-between">
                            <div>
                                <h3 className="dark:text-white/90 text-black/90 text-lg font-medium mb-1">Global Release Stats</h3>
                                <p className="dark:text-white/40 text-black/40 text-sm">Network reach overview</p>
                            </div>
                        </div>
                        <StatsGrid />
                    </div>
                </motion.div>
            </div>

            <DevelopmentPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
        </section>
    );
};

export default DistributionHero;
