'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

const HomeHero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0a0118]">
            {/* Cosmic Background */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=2010&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-color-dodge"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0118] via-[#0a0118]/80 to-transparent"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.15),transparent_70%)]"></div>

            {/* Floating Particles/Stars (Simplified CSS/Divs) */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-200 rounded-full animate-pulse"></div>
                <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-yellow-100 rounded-full animate-pulse delay-700"></div>
                <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse delay-300"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    {/* Mandala/Ornamental glow behind title */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-purple-600/20 to-amber-500/20 rounded-full blur-[100px] -z-10"></div>

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                        className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-amber-500/30 bg-amber-950/30 backdrop-blur-md mb-10 shadow-[0_0_25px_rgba(245,158,11,0.2)]"
                    >
                        <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse box-shadow-[0_0_10px_rgba(251,191,36,0.8)]"></div>
                        <span className="text-amber-200 text-sm font-medium tracking-[0.2em] uppercase font-cinzel">The Victory Venture of Ghosal Group</span>
                        <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse box-shadow-[0_0_10px_rgba(251,191,36,0.8)]"></div>
                    </motion.div>

                    {/* Main Title - Comic/Cinematic Style */}
                    <h1 className="relative font-cinzel font-black tracking-tight leading-none mb-4 group">
                        <span className="block text-6xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-b from-amber-100 via-amber-300 to-amber-600 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] filter">
                            SHYAM SURMA
                        </span>
                        <span className="block text-6xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-b from-purple-200 via-purple-400 to-indigo-600 drop-shadow-[0_2px_10px_rgba(147,51,234,0.5)] mt-2">
                            CINEVERSE
                        </span>
                    </h1>

                    {/* Script Tagline */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="font-great-vibes text-3xl md:text-5xl text-amber-400/90 mt-6 mb-12 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                    >
                        Targeting Success, Blessed by Khatu Shyam
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                        className="flex flex-col md:flex-row items-center justify-center gap-6"
                    >
                        <Link href="/contact" className="relative group px-10 py-4 bg-gradient-to-r from-amber-600 to-yellow-600 rounded-full overflow-hidden shadow-[0_0_20px_rgba(217,119,6,0.4)] hover:shadow-[0_0_40px_rgba(217,119,6,0.6)] transition-all transform hover:scale-105">
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            <span className="relative z-10 text-black font-cinzel font-bold text-lg flex items-center gap-2">
                                Start Journey <ArrowRight size={20} />
                            </span>
                        </Link>

                        <Link href="/about" className="px-10 py-4 bg-white/5 border border-purple-500/30 text-purple-200 font-cinzel font-bold text-lg rounded-full hover:bg-white/10 hover:border-purple-400 transition-all flex items-center gap-2 backdrop-blur-sm">
                            <Play size={18} className="fill-current" /> Explore
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#030712] to-transparent z-20"></div>
        </section>
    );
};

export default HomeHero;
