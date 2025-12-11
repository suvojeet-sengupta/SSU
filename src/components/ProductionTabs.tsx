'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clapperboard, Film } from 'lucide-react';
import ProductionHero from '@/components/ProductionHero';
import ProductionAbout from '@/components/ProductionAbout';
import ProductionServices from '@/components/ProductionServices';

export default function ProductionTabs() {
    const [activeTab, setActiveTab] = useState<'production' | 'post-production'>('production');

    return (
        <div className="pt-24 min-h-screen bg-black text-white">
            {/* Tab Navigation */}
            <div className="container mx-auto px-6 py-8">
                <div className="flex flex-col sm:flex-row justify-center items-center bg-gray-900/50 p-2 rounded-2xl md:rounded-full border border-white/10 max-w-2xl mx-auto backdrop-blur-md">
                    <button
                        onClick={() => setActiveTab('production')}
                        className={`relative w-full sm:w-1/2 flex items-center justify-center gap-3 px-8 py-4 rounded-xl md:rounded-full text-lg font-bold transition-all duration-300 ${activeTab === 'production'
                                ? 'text-black'
                                : 'text-gray-400 hover:text-white hover:bg-white/5'
                            }`}
                    >
                        {activeTab === 'production' && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-white rounded-xl md:rounded-full shadow-lg shadow-white/10"
                            />
                        )}
                        <span className="relative z-10 flex items-center gap-2">
                            <Clapperboard className="w-5 h-5" />
                            Production
                        </span>
                    </button>

                    <button
                        onClick={() => setActiveTab('post-production')}
                        className={`relative w-full sm:w-1/2 flex items-center justify-center gap-3 px-8 py-4 rounded-xl md:rounded-full text-lg font-bold transition-all duration-300 ${activeTab === 'post-production'
                                ? 'text-white'
                                : 'text-gray-400 hover:text-white hover:bg-white/5'
                            }`}
                    >
                        {activeTab === 'post-production' && (
                            <motion.div
                                layoutId="activeTab"
                                className="absolute inset-0 bg-blue-600 rounded-xl md:rounded-full shadow-lg shadow-blue-500/20"
                            />
                        )}
                        <span className="relative z-10 flex items-center gap-2">
                            <Film className="w-5 h-5" />
                            Post Production
                        </span>
                    </button>
                </div>
            </div>

            {/* Content Display */}
            <div className="relative">
                <AnimatePresence mode="wait">
                    {activeTab === 'production' ? (
                        <motion.div
                            key="production"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ProductionHero />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="post-production"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <ProductionAbout />
                            <ProductionServices />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
