'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const HomeHero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden dark:bg-[#030712] bg-gradient-to-br from-indigo-50/40 via-white to-fuchsia-50/40 selection:dark:bg-indigo-500/30 selection:bg-indigo-500/20">
            {/* Immersive Cinematic Background */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=2010&auto=format&fit=crop')] bg-cover bg-center opacity-[0.05] dark:opacity-[0.07] grayscale mix-blend-overlay dark:mix-blend-screen" />

            {/* Advanced Gradients & Orbs for Premium feel */}
            <div className="absolute inset-0 bg-gradient-to-b dark:from-[#030712]/50 dark:via-[#030712]/80 dark:to-[#030712] from-transparent via-white/40 to-white/80 z-0 pointer-events-none" />

            <motion.div
                animate={{
                    x: mousePosition.x * 2,
                    y: mousePosition.y * 2
                }}
                transition={{ type: "spring", stiffness: 50, damping: 25 }}
                className="absolute top-[20%] left-[20%] transform -translate-x-1/2 -translate-y-1/2 rounded-full w-[600px] h-[600px] dark:bg-indigo-500/20 bg-indigo-400/20 blur-[150px] pointer-events-none opacity-60 dark:opacity-60"
            />
            <motion.div
                animate={{
                    x: mousePosition.x * -2,
                    y: mousePosition.y * -2
                }}
                transition={{ type: "spring", stiffness: 50, damping: 25 }}
                className="absolute bottom-[20%] right-[10%] transform translate-x-1/2 translate-y-1/2 rounded-full w-[500px] h-[500px] dark:bg-fuchsia-500/10 bg-fuchsia-400/20 blur-[150px] pointer-events-none opacity-60 dark:opacity-50"
            />

            <div className="absolute top-0 transform -translate-y-1/2 rounded-full w-[800px] h-[400px] dark:bg-[#eab308]/15 bg-[#eab308]/20 blur-[120px] pointer-events-none dark:opacity-100 opacity-80 dark:mix-blend-screen mix-blend-multiply" />

            <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center pt-32 pb-20">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center w-full max-w-5xl"
                >
                    {/* Exquisite Badge */}
                    <div className="group relative inline-flex items-center gap-3 px-5 py-2.5 rounded-full border dark:border-white/10 border-indigo-500/10 dark:bg-white/[0.02] bg-indigo-500/[0.02] backdrop-blur-xl mb-10 overflow-hidden cursor-default shadow-sm dark:shadow-none transition-all duration-500 hover:border-indigo-500/30 dark:hover:border-indigo-500/30 hover:shadow-md dark:hover:shadow-none hover:shadow-indigo-500/10">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <Sparkles className="w-4 h-4 text-indigo-500 dark:text-indigo-400" />
                        <span className="dark:text-white/80 text-gray-800 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase relative z-10">
                            The Victory Venture of Ghosal Group
                        </span>
                    </div>

                    {/* Epic Typography */}
                    <div className="relative mb-8">
                        <h1 className="text-6xl md:text-8xl lg:text-[10rem] tracking-tighter font-medium dark:text-white text-black leading-none flex flex-col items-center">
                            <motion.span
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="block mb-2 text-5xl md:text-7xl lg:text-8xl drop-shadow-sm dark:drop-shadow-none"
                            >
                                Shyam Surma
                            </motion.span>
                            <motion.span
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 100 }}
                                className="block font-light italic bg-clip-text text-transparent bg-gradient-to-r dark:from-white dark:via-gray-300 dark:to-gray-500 from-gray-900 via-indigo-900 to-gray-600 pr-4 pb-4 dark:drop-shadow-[0_0_30px_rgba(255,255,255,0.1)] drop-shadow-sm"
                            >
                                CineVerse
                            </motion.span>
                        </h1>
                    </div>

                    {/* Elegant Tagline */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="text-xl md:text-3xl dark:text-white/60 text-black/60 font-light tracking-wide mb-8 max-w-2xl"
                    >
                        Targeting Success, Blessed by <span className="text-[#eab308] font-medium dark:drop-shadow-[0_0_15px_rgba(234,179,8,0.3)]">Khatu Shyam</span>
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="text-lg md:text-xl dark:text-white/50 text-black/50 max-w-3xl mb-14 leading-relaxed font-light"
                    >
                        From film production and event execution to advertising, digital marketing, and distribution. We connect creativity with global visibility.
                    </motion.p>

                    {/* Next-gen Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="flex flex-col sm:flex-row items-center gap-5 w-full sm:w-auto"
                    >
                        <Link href="/contact" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r dark:from-white dark:to-gray-200 from-gray-900 to-gray-800 dark:text-black text-white rounded-full font-medium transition-all duration-300 hover:scale-[1.02] shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_15px_40px_rgb(0,0,0,0.2)] dark:hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] active:scale-[0.98] w-full sm:w-auto overflow-hidden">
                            <span className="relative z-10 text-base">Start Journey</span>
                            <ArrowRight className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                            <div className="absolute inset-0 bg-white/20 dark:bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        </Link>
                        <Link href="/about" className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 dark:bg-white/[0.03] bg-white/50 border dark:border-white/10 border-indigo-500/10 dark:text-white text-gray-900 rounded-full font-medium transition-all duration-300 hover:bg-white/80 dark:hover:bg-white/[0.08] hover:border-indigo-500/20 dark:hover:border-white/20 hover:shadow-md dark:hover:shadow-none active:scale-[0.98] w-full sm:w-auto backdrop-blur-md">
                            <div className="bg-white dark:bg-white/10 p-1.5 rounded-full shadow-sm dark:shadow-none group-hover:scale-110 transition-transform duration-300">
                                <Play className="w-4 h-4 dark:fill-white/80 fill-gray-900 dark:text-white/80 text-gray-900" />
                            </div>
                            <span className="text-base">Explore Context</span>
                        </Link>
                    </motion.div>
                </motion.div>
            </div>

            {/* Seamless Bottom Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t dark:from-[#030712] from-white/80 to-transparent pointer-events-none z-10" />
        </section>
    );
};

export default HomeHero;
