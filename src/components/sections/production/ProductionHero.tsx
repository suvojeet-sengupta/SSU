'use client';

import { motion } from 'framer-motion';
import { Play, Camera } from 'lucide-react';
import Link from 'next/link';
import CloudinaryImage from '@/components/common/CloudinaryImage';

const ProductionHero = () => {
    return (
        <section className="relative min-h-[90dvh] flex items-center justify-center overflow-hidden dark:bg-black bg-gray-50 py-20">
            {/* Minimalist Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 opacity-20 grayscale dark:mix-blend-screen mix-blend-multiply">
                    <CloudinaryImage
                        src="PCE-banner"
                        alt="Production Banner"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b dark:from-black dark:via-black/80 dark:to-[#050505] from-gray-50 via-gray-50/80 to-transparent" />
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center w-full max-w-4xl"
                >
                    {/* Minimal Logo Treatment */}
                    <div className="flex justify-center mb-10">
                        <div className="relative w-28 h-28 md:w-36 md:h-36 opacity-90 drop-shadow-xl dark:invert-0 invert transition-all">
                            <CloudinaryImage
                                src="PCE-logo"
                                alt="PCE Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border dark:border-white/10 border-black/10 dark:bg-white/[0.02] bg-black/[0.02] backdrop-blur-md mb-8">
                        <Camera className="w-3.5 h-3.5 dark:text-white/50 text-black/50" />
                        <span className="dark:text-white/60 text-black/60 text-xs font-semibold tracking-wide uppercase">Production House</span>
                    </div>

                    {/* Main Title */}
                    <h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-8">
                        <span className="block dark:text-white text-black mb-2">Premium Classic</span>
                        <span className="dark:text-white/40 text-black/40 italic font-light">
                            Entertainment
                        </span>
                    </h1>

                    <p className="text-lg dark:text-white/50 text-black/50 max-w-2xl leading-relaxed font-light mb-12">
                        Delivering world-class production values and storytelling excellence. Crafting visual narratives with uncompromising quality.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                        <Link href="/gallery/production" className="group inline-flex items-center justify-center gap-3 px-8 py-4 dark:bg-white/[0.03] bg-black/[0.03] border dark:border-white/10 border-black/10 dark:text-white text-black rounded-full font-medium dark:hover:bg-white/[0.08] hover:bg-black/[0.08] transition-colors w-full sm:w-auto">
                            <Play className="w-4 h-4 dark:fill-white/80 fill-black/80 dark:text-white/80 text-black/80" />
                            <span>Production Gallery</span>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Bottom Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t dark:from-black from-gray-50 to-transparent pointer-events-none" />
        </section>
    );
};

export default ProductionHero;
