'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

const HomeHero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#030712]">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/60 to-transparent"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15),transparent_50%)]"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-500/30 bg-yellow-500/10 backdrop-blur-md text-xs md:text-sm text-yellow-300 font-medium mb-8 uppercase tracking-widest shadow-[0_0_15px_rgba(234,179,8,0.2)]">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
                        </span>
                        Premium Entertainment & Distribution
                    </div>

                    {/* Main Title */}
                    <h1 className="text-5xl md:text-8xl font-black mb-6 tracking-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                            Shyam Surma
                        </span>
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">
                            CineVerse
                        </span>
                    </h1>

                    {/* Tagline */}
                    <div className="flex items-center justify-center gap-4 mb-8">
                        <div className="h-[1px] w-8 md:w-16 bg-white/20"></div>
                        <span className="text-xs md:text-sm font-medium tracking-[0.3em] text-white/60 uppercase">
                            The Victory Venture of Ghosal Group
                        </span>
                        <div className="h-[1px] w-8 md:w-16 bg-white/20"></div>
                    </div>

                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Global music distribution, strategic advertising, and innovative digital marketing. We empower creators to reach the world.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <Link href="/contact" className="group relative px-8 py-4 bg-white text-black font-bold rounded-full overflow-hidden transition-transform hover:scale-105">
                            <span className="relative z-10 flex items-center gap-2">
                                Start Your Journey <ArrowRight size={18} />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </Link>

                        <Link href="/about" className="px-8 py-4 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-all backdrop-blur-sm flex items-center gap-2">
                            <Play size={18} className="fill-current" /> Who We Are
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30"
            >
                <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-current rounded-full"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default HomeHero;
