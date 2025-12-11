'use client';
import { motion } from 'framer-motion';
import StatsGrid from './StatsGrid';

const DistributionHero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#030712]">
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/80 to-transparent"></div>

            <div className="container mx-auto px-6 pt-20 relative z-10 grid lg:grid-cols-2 gap-16 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 backdrop-blur-md">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                        <span className="text-red-300 text-sm font-medium tracking-wide">Official Music Distribution Wing</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-black text-white tracking-tight leading-[1.1]">
                        BMF <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 to-yellow-500">
                            MUSIC
                        </span>
                    </h1>

                    <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                        Fast, secure, and accessible music distribution.
                        Managed by <span className="text-white font-semibold">Riya Ghosal</span>, we ensure your art reaches every corner of the world with complete professionalism.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="px-8 py-4 bg-red-600 text-white rounded-full font-bold text-lg hover:bg-red-700 transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.4)]">
                            Distribute Now
                        </button>
                    </div>
                </motion.div>

                {/* Visual Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative"
                >
                    <div className="relative z-10 bg-gradient-to-tr from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 shadow-2xl">
                        <div className="mb-8">
                            <h3 className="text-white text-2xl font-bold mb-2">Global Release Stats</h3>
                            <div className="h-1 w-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full"></div>
                        </div>
                        <StatsGrid />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default DistributionHero;
