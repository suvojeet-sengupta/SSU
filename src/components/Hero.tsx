'use client';
import { motion } from 'framer-motion';
import StatsGrid from './StatsGrid';

const Hero = () => {
    return (
        <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden bg-[#030712]">
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-[url('/SSU/hero-bg-grid.svg')] opacity-20"></div>
            <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
            <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[100px] mix-blend-screen"></div>

            <div className="container mx-auto px-6 pt-20 relative z-10 grid lg:grid-cols-2 gap-16 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-8"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-gray-300 text-sm font-medium tracking-wide">Next-Gen Music Distribution</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight leading-[1.1]">
                        Amplifying <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 animate-gradient-x">
                            Global Sound
                        </span>
                    </h1>

                    <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
                        Empowering artists with cutting-edge distribution technology.
                        Reach millions of listeners across 95+ platforms worldwide with
                        real-time analytics and transparent royalties.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <button className="px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:transform hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                            Start Distributing
                        </button>
                        <button className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/5 transition-all duration-300 backdrop-blur-sm">
                            View Platforms
                        </button>
                    </div>
                </motion.div>

                {/* Visual Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="relative"
                >
                    {/* Glass Card Container */}
                    <div className="relative z-10 bg-gradient-to-tr from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 shadow-2xl">
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/30 rounded-full blur-2xl"></div>
                        <div className="mb-8">
                            <h3 className="text-white text-2xl font-bold mb-2">Platform Performance</h3>
                            <div className="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                        </div>

                        <StatsGrid />
                    </div>

                    {/* Floating visual elements */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -right-12 top-1/2 -translate-y-1/2 w-24 h-24 bg-purple-500/20 rounded-2xl backdrop-blur-xl border border-white/10 flex items-center justify-center z-20"
                    >
                        <div className="text-4xl">🎵</div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
