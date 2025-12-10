'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const HomeHero = () => {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
            {/* Animated Spotlight Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1200px] pointer-events-none">
                <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[100px] animate-pulse-slow"></div>
                <div className="absolute bottom-[-10%] right-[20%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px]"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 text-center px-4"
            >
                <div className="mb-6 inline-block overflow-hidden">
                    <motion.span
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="inline-block px-6 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-gray-300 tracking-widest uppercase font-medium"
                    >
                        The Future of Media
                    </motion.span>
                </div>

                <h1 className="text-7xl md:text-9xl font-bold tracking-tighter text-white mb-6">
                    <span className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-500">Welcome to</span>
                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 animate-gradient-x p-2">
                        Ghosal Group
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto mb-12 leading-relaxed">
                    A 360° global powerhouse integrating distribution, advertising, and technology for the modern era.
                </p>

            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500"
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-gray-500 to-transparent"></div>
            </motion.div>
        </section>
    );
};

export default HomeHero;
