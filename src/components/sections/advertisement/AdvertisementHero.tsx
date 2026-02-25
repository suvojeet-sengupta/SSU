'use client';
import { motion } from 'framer-motion';

const AdvertisementHero = () => {
    return (
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden dark:bg-black bg-gray-50 pt-20">
            {/* Abstract Background */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-20 grayscale dark:mix-blend-screen mix-blend-multiply transition-all duration-700"></div>

            {/* Ambient Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] dark:bg-pink-600/20 bg-pink-500/10 rounded-full blur-[120px] pointer-events-none transition-all duration-700 dark:opacity-100 opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] dark:bg-cyan-600/10 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none transition-all duration-700 dark:opacity-100 opacity-40"></div>

            <div className="container mx-auto px-6 relative z-10 text-center pt-20 pb-12">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="inline-block px-4 py-1.5 rounded-full border dark:border-pink-500/20 border-pink-500/30 dark:bg-pink-500/[0.03] bg-pink-500/[0.05] backdrop-blur-md text-xs dark:text-pink-300 text-pink-600 font-semibold mb-8 uppercase tracking-widest">
                        The Advertising Arm of Ghosal Group
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter dark:text-white text-black mb-8">
                        Shyam Surma <br />
                        <span className="dark:text-white/40 text-black/40 italic font-light">CineVerse</span>
                    </h1>

                    <p className="text-lg dark:text-white/50 text-black/50 max-w-2xl mx-auto leading-relaxed font-light">
                        Co-founded by <span className="dark:text-white/90 text-black/90 font-medium tracking-tight">Surojit Ghosal</span> & <span className="dark:text-white/90 text-black/90 font-medium tracking-tight">Mouma Sengupta</span>.
                        Helping filmmakers and creators achieve professional visibility with strategic precision.
                    </p>
                </motion.div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t dark:from-black from-gray-50 to-transparent pointer-events-none" />
        </section>
    );
};

export default AdvertisementHero;
