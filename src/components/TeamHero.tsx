'use client';
import { motion } from 'framer-motion';

const TeamHero = () => {
    return (
        <section className="relative min-h-[60vh] pt-32 flex items-center justify-center overflow-hidden bg-black">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('/hero-bg-grid.svg')] opacity-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md text-xs text-indigo-300 font-medium mb-6 uppercase tracking-widest">
                        The Minds Behind the Magic
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Visionaries</span>
                    </h1>

                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        A collective of strategists, creatives, and technologists redefining the future of global media.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default TeamHero;
