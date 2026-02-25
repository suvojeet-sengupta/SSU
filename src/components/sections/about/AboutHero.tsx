'use client';
import { motion } from 'framer-motion';
import { History } from 'lucide-react';

const AboutHero = () => {
    return (
        <section className="relative min-h-[80dvh] flex items-center justify-center overflow-hidden dark:bg-black bg-gray-50 pt-20">
            {/* Minimalist Background Effects */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 grayscale dark:mix-blend-screen mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t dark:from-[#050505] from-gray-50 dark:via-black/80 via-gray-50/80 to-transparent" />

            {/* Subtle Yellow Glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 rounded-full w-[600px] h-[400px] bg-amber-500/5 blur-[120px] pointer-events-none dark:opacity-100 opacity-40" />

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center w-full max-w-4xl"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border dark:border-amber-500/20 border-amber-500/30 dark:bg-amber-500/[0.03] bg-amber-500/[0.05] backdrop-blur-md mb-8">
                        <History className="w-3.5 h-3.5 dark:text-amber-500/80 text-amber-600" />
                        <span className="dark:text-amber-500/80 text-amber-600 text-xs font-semibold tracking-wide uppercase">
                            Our Legacy
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tighter font-medium dark:text-white text-black mb-8">
                        Shyam Surma <span className="dark:text-white/40 text-black/40 italic font-light">CineVerse</span>
                    </h1>

                    <div className="flex items-center justify-center gap-4 mb-10 w-full max-w-sm">
                        <div className="h-px flex-1 bg-gradient-to-r from-transparent dark:to-white/20 to-black/20"></div>
                        <span className="text-xs font-medium tracking-[0.2em] dark:text-white/40 text-black/40 uppercase">
                            The Victory Venture
                        </span>
                        <div className="h-px flex-1 bg-gradient-to-l from-transparent dark:to-white/20 to-black/20"></div>
                    </div>

                    <p className="text-lg dark:text-white/50 text-black/50 max-w-2xl mx-auto leading-relaxed font-light">
                        Where creativity meets structural excellence. Empowering artists and brands with strategic visibility and world-class production standards.
                    </p>
                </motion.div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t dark:from-[#050505] from-gray-50 to-transparent pointer-events-none" />
        </section>
    );
};

export default AboutHero;
