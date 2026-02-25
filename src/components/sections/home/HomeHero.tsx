'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';

const HomeHero = () => {
    return (
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden dark:bg-black bg-gray-50 selection:dark:bg-white/30 selection:bg-black/20">
            {/* Minimalist Background Effects */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1543857778-c4a1a3e0b2eb?q=80&w=2010&auto=format&fit=crop')] bg-cover bg-center opacity-10 grayscale dark:mix-blend-screen mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-b dark:from-black dark:via-black/80 dark:to-[#050505] from-gray-50 via-gray-50/80 to-gray-50" />

            {/* Sophisticated Glow */}
            <div className="absolute top-0 transform -translate-y-1/2 rounded-full w-[800px] h-[400px] bg-[#eab308]/10 blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center pt-32 pb-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center w-full max-w-5xl"
                >
                    {/* Refined Badge */}
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border dark:border-white/10 border-black/10 dark:bg-white/[0.03] bg-black/[0.03] backdrop-blur-md mb-8">
                        <div className="w-2 h-2 rounded-full bg-yellow-500/80 shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
                        <span className="dark:text-white/70 text-black/70 text-xs font-medium tracking-widest uppercase">
                            The Victory Venture of Ghosal Group
                        </span>
                    </div>

                    {/* Premium Typography */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tighter font-medium dark:text-white text-black mb-6">
                        Shyam Surma <span className="dark:text-white/40 text-black/40 italic font-light">CineVerse</span>
                    </h1>

                    {/* Elegant Tagline */}
                    <p className="text-xl md:text-2xl dark:text-white/50 text-black/50 font-light tracking-wide mb-10 max-w-2xl">
                        Targeting Success, Blessed by Khatu Shyam
                    </p>

                    <p className="text-lg dark:text-white/60 text-black/60 max-w-3xl mb-12 leading-relaxed font-light">
                        From film production and event execution to advertising, digital marketing, and distribution. We connect creativity with global visibility.
                    </p>

                    {/* Minimalist Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                        <Link href="/contact" className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 dark:bg-white dark:text-black bg-black text-white rounded-full font-medium transition-transform hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto">
                            <span>Start Journey</span>
                            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link href="/about" className="group inline-flex items-center justify-center gap-3 px-8 py-4 dark:bg-white/[0.03] bg-black/[0.03] border dark:border-white/10 border-black/10 dark:text-white text-black rounded-full font-medium dark:hover:bg-white/[0.08] hover:bg-black/[0.08] transition-colors w-full sm:w-auto">
                            <Play className="w-4 h-4 dark:fill-white/80 fill-black/80 dark:text-white/80 text-black/80" />
                            <span>Explore Context</span>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Subtle bottom gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t dark:from-black from-gray-50 to-transparent pointer-events-none" />
        </section>
    );
};

export default HomeHero;
