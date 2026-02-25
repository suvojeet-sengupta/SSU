'use client';
import { motion } from 'framer-motion';
import { Music, Globe, Radio, PlayCircle, Share2, Instagram, Facebook, Youtube } from 'lucide-react';

const brands = [
    { name: "Spotify", icon: <Music strokeWidth={1.5} className="w-5 h-5" /> },
    { name: "Apple Music", icon: <Music strokeWidth={1.5} className="w-5 h-5" /> },
    { name: "YouTube Music", icon: <Youtube strokeWidth={1.5} className="w-5 h-5" /> },
    { name: "Amazon Music", icon: <Music strokeWidth={1.5} className="w-5 h-5" /> },
    { name: "JioSaavn", icon: <Music strokeWidth={1.5} className="w-5 h-5" /> },
    { name: "Instagram", icon: <Instagram strokeWidth={1.5} className="w-5 h-5" /> },
    { name: "Facebook", icon: <Facebook strokeWidth={1.5} className="w-5 h-5" /> },
    { name: "TikTok", icon: <Music strokeWidth={1.5} className="w-5 h-5" /> },
    { name: "Wynk", icon: <Radio strokeWidth={1.5} className="w-5 h-5" /> },
    { name: "Gaana", icon: <PlayCircle strokeWidth={1.5} className="w-5 h-5" /> },
    { name: "Snapchat", icon: <Share2 strokeWidth={1.5} className="w-5 h-5" /> },
    { name: "Tidal", icon: <Globe strokeWidth={1.5} className="w-5 h-5" /> },
];

const PartnersCarousel = () => {
    return (
        <section className="py-12 dark:bg-black bg-gray-50 border-y dark:border-white/5 border-black/5 relative overflow-hidden flex items-center">
            {/* Gradient Masks */}
            <div className="absolute top-0 left-0 w-48 h-full bg-gradient-to-r dark:from-black from-gray-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-48 h-full bg-gradient-to-l dark:from-black from-gray-50 to-transparent z-10 pointer-events-none" />

            <div className="flex w-full">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 60,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex items-center gap-12 pr-12 whitespace-nowrap"
                >
                    {[...brands, ...brands].map((brand, idx) => (
                        <div key={idx} className="flex items-center gap-3 px-6 py-3 rounded-full border dark:border-white/5 border-black/5 dark:bg-white/[0.02] bg-white hover:shadow-md dark:hover:shadow-none dark:hover:bg-white/[0.05] hover:bg-gray-100 dark:hover:border-white/10 hover:border-black/10 transition-all duration-300 group cursor-default">
                            <span className="dark:text-white/40 text-black/40 group-hover:dark:text-white/80 group-hover:text-black/80 transition-colors">
                                {brand.icon}
                            </span>
                            <span className="text-sm font-medium dark:text-white/40 text-black/40 tracking-wider group-hover:dark:text-white/80 group-hover:text-black/80 transition-colors">
                                {brand.name}
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default PartnersCarousel;
