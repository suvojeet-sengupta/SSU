'use client';
import { motion } from 'framer-motion';
import StatsGrid from './StatsGrid';
import { Activity, Globe2 } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#050505]">
            {/* Architectured Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
                <div className="absolute inset-0 bg-black/80 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            <div className="absolute top-0 right-0 rounded-full w-[600px] h-[600px] bg-blue-500/5 blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 pt-32 pb-20 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="max-w-xl"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md mb-8">
                        <Activity className="w-3.5 h-3.5 text-blue-400" />
                        <span className="text-white/60 text-xs font-semibold tracking-wide uppercase">Next-Gen Distribution</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-semibold text-white tracking-tight leading-[1.1] mb-6">
                        Amplifying <br />
                        <span className="text-white/50 font-light italic">Global Sound</span>
                    </h1>

                    <p className="text-lg text-white/50 leading-relaxed mb-10 font-light">
                        Empowering artists with advanced distribution infrastructure.
                        Reach millions of listeners across 95+ platforms worldwide with
                        real-time analytics and transparent royalties.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="px-7 py-3.5 bg-white text-black rounded-full font-medium transition-transform hover:scale-[1.02] active:scale-[0.98]">
                            Start Distributing
                        </button>
                        <button className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/[0.03] border border-white/10 text-white rounded-full font-medium hover:bg-white/[0.08] transition-colors">
                            <Globe2 className="w-4 h-4 opacity-50" />
                            <span>View Platforms</span>
                        </button>
                    </div>
                </motion.div>

                {/* Visual Content */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="relative"
                >
                    {/* Sophisticated Glass Card */}
                    <div className="relative z-10 bg-white/[0.02] backdrop-blur-2xl rounded-3xl p-8 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                        <div className="mb-8 flex items-center justify-between">
                            <div>
                                <h3 className="text-white/90 text-lg font-medium mb-1">Platform Performance</h3>
                                <p className="text-white/40 text-sm">Real-time engagement metrics</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span className="text-xs text-white/40 uppercase tracking-wider font-medium">Live</span>
                            </div>
                        </div>

                        <StatsGrid />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
