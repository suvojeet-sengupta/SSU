'use client';
import { motion } from 'framer-motion';
import { Music, Smartphone, Globe, Radio, PlayCircle, Share2, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

// Brand SVGs (Simple paths for major brands)
const SpotifyIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.1-10.561-1.14-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 4.2-1.32 9.6-.66 13.38 1.68.42.18.6.779.36 1.14zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 14.821 1.08.54.3.72.96.42 1.5-.3.54-.96.72-1.5.42z" />
    </svg>
);

const AppleMusicIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M19.36 7.64C18.42 6.7 17.14 6.13 15.65 6.13H15.65C13.56 6.13 11.75 7.63 11.45 9.87C11.42 10.05 11.4 10.24 11.4 10.42V15.5C11.4 17.7 9.61 19.5 7.4 19.5C5.19 19.5 3.4 17.7 3.4 15.5C3.4 13.3 5.19 11.5 7.4 11.5C7.9 11.5 8.38 11.6 8.81 11.77V7.12C8.81 7.12 15.34 5.25 15.65 5.18C17.39 4.75 19.16 5.56 20.21 6.84C20.69 7.42 21 8.12 21 8.88V15.5C21 17.7 19.21 19.5 17 19.5C14.79 19.5 13 17.7 13 15.5C13 13.88 13.96 12.47 15.34 11.91C15.82 11.71 16.36 11.58 17 11.53V8.88C17 8.35 16.32 7.78 15.87 7.46C15.79 7.41 15.68 7.33 15.68 7.33L19.36 7.64Z" />
    </svg>
);

const brands = [
    { name: "Spotify", icon: <SpotifyIcon />, color: "text-green-500" },
    { name: "Apple Music", icon: <AppleMusicIcon />, color: "text-red-500" }, // Approximate brand color
    { name: "YouTube Music", icon: <Youtube className="w-6 h-6" />, color: "text-red-600" },
    { name: "Amazon Music", icon: <Music className="w-6 h-6" />, color: "text-blue-400" },
    { name: "JioSaavn", icon: <Music className="w-6 h-6" />, color: "text-emerald-500" },
    { name: "Instagram", icon: <Instagram className="w-6 h-6" />, color: "text-pink-500" },
    { name: "Facebook", icon: <Facebook className="w-6 h-6" />, color: "text-blue-600" },
    { name: "TikTok", icon: <Music className="w-6 h-6" />, color: "text-cyan-400" }, // Generic for now
    { name: "Wynk", icon: <Radio className="w-6 h-6" />, color: "text-red-400" },
    { name: "Gaana", icon: <PlayCircle className="w-6 h-6" />, color: "text-red-500" },
    { name: "Snapchat", icon: <Share2 className="w-6 h-6" />, color: "text-yellow-400" },
    { name: "Tidal", icon: <Globe className="w-6 h-6" />, color: "text-white" },
];

const PartnersCarousel = () => {
    return (
        <section className="py-8 bg-black/80 overflow-hidden border-y border-white/5 relative backdrop-blur-sm z-10">
            {/* Gradient Masks */}
            <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10" />
            <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10" />

            <div className="flex">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-50%" }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    className="flex gap-12 pr-12 whitespace-nowrap"
                >
                    {[...brands, ...brands].map((brand, idx) => (
                        <div key={idx} className="flex items-center gap-3 px-4 py-2 rounded-full border border-white/5 bg-white/5 hover:border-white/10 hover:bg-white/10 transition-colors group cursor-default">
                            <span className={`${brand.color} group-hover:scale-110 transition-transform duration-300`}>
                                {brand.icon}
                            </span>
                            <span className="text-sm font-bold text-gray-400 uppercase tracking-wider font-cinzel group-hover:text-white transition-colors">
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
