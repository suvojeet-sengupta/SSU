'use client';
import { motion } from 'framer-motion';
import { Users } from 'lucide-react';

const TeamHero = () => {
    return (
        <section className="relative min-h-[80dvh] pt-20 flex items-center justify-center overflow-hidden dark:bg-black bg-gray-50">
            {/* Minimalist Background Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
                <div className="absolute inset-0 dark:bg-black/80 bg-gray-50/80 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center w-full max-w-4xl"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border dark:border-indigo-500/20 border-indigo-500/30 dark:bg-indigo-500/[0.03] bg-indigo-500/[0.05] backdrop-blur-md mb-8">
                        <Users className="w-3.5 h-3.5 dark:text-indigo-400 text-indigo-600" />
                        <span className="dark:text-indigo-200/80 text-indigo-700 text-xs font-semibold tracking-wide uppercase">
                            The Minds Behind the Magic
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tighter font-medium dark:text-white text-black mb-8">
                        Meet Our <span className="dark:text-white/40 text-black/40 italic font-light">Visionaries</span>
                    </h1>

                    <p className="text-lg dark:text-white/50 text-black/50 max-w-2xl mx-auto leading-relaxed font-light">
                        A collective of strategists, creatives, and technologists redefining the future of global media and setting new standards in the industry.
                    </p>
                </motion.div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t dark:from-black from-gray-50 to-transparent pointer-events-none" />
        </section>
    );
};

export default TeamHero;
