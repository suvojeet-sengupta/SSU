'use client';
import { motion } from 'framer-motion';

const AdvertisementHero = () => {
    return (
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-black">
            {/* Abstract Background */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[100px] mix-blend-screen"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-6 py-2 rounded-full border border-pink-500/30 bg-pink-500/10 backdrop-blur-md text-sm text-pink-300 font-medium mb-6">
                        The Advertising Arm of Ghosal Group
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        Shyam Surma <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500">CineVerse</span>
                    </h1>

                    <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Co-founded by <span className="text-white font-semibold">Surojit Ghosal</span> & <span className="text-white font-semibold">Mouma Sengupta</span>.
                        Helping filmmakers and creators achieve professional visibility.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default AdvertisementHero;
