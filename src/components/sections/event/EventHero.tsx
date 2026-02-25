'use client';
import { motion } from 'framer-motion';
import { CalendarHeart } from 'lucide-react';

const EventHero = () => {
    return (
        <section className="relative min-h-[80dvh] flex items-center justify-center overflow-hidden dark:bg-black bg-gray-50 pt-20">
            {/* Minimalist Background Effects */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-10 grayscale dark:mix-blend-screen mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t dark:from-[#050505] from-gray-50 dark:via-black/80 via-gray-50/80 to-transparent" />

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center w-full max-w-4xl"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border dark:border-purple-500/20 border-purple-500/30 dark:bg-purple-500/[0.03] bg-purple-500/[0.05] backdrop-blur-md mb-8">
                        <CalendarHeart className="w-3.5 h-3.5 dark:text-purple-400 text-purple-600" />
                        <span className="dark:text-purple-200/80 text-purple-700 text-xs font-semibold tracking-wide uppercase">
                            Celebrating Moments Since 1995
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl tracking-tighter font-medium dark:text-white text-black mb-8">
                        Ghosal <span className="dark:text-white/40 text-black/40 italic font-light">Event</span>
                    </h1>

                    <p className="text-lg dark:text-white/50 text-black/50 max-w-2xl mx-auto leading-relaxed font-light">
                        The backbone of Ghosal Group. Creating unforgettable experiences with uncompromising creativity and structural reliability.
                    </p>
                </motion.div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t dark:from-[#050505] from-gray-50 to-transparent pointer-events-none" />
        </section>
    );
};

export default EventHero;
