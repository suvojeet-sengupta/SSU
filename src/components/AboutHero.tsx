'use client';
import { motion } from 'framer-motion';

const AboutHero = () => {
    return (
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#030712]">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/80 to-transparent"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 backdrop-blur-md text-xs text-yellow-300 font-medium mb-6 uppercase tracking-widest">
                        Our Story
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-600">
                        Shyam Surma CineVerse
                    </h1>

                    <div className="flex items-center justify-center gap-3 mb-8">
                        <div className="h-[1px] w-12 bg-white/20"></div>
                        <span className="text-sm md:text-base font-medium tracking-[0.3em] text-white/50 uppercase">
                            A Venture of Ghosal Group
                        </span>
                        <div className="h-[1px] w-12 bg-white/20"></div>
                    </div>

                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Where creativity meets affordability. Empowering artists and brands with strategic visibility.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutHero;
