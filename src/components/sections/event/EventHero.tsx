'use client';
import { motion } from 'framer-motion';

const EventHero = () => {
    return (
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#030712]">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/80 to-transparent"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md text-xs text-purple-300 font-medium mb-6 uppercase tracking-widest">
                        Celebrating Moments Since 1995
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-200 via-pink-400 to-purple-600">
                        Ghosal Event
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        The backbone of Ghosal Group. Creating unforgettable experiences with creativity and reliability.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default EventHero;
