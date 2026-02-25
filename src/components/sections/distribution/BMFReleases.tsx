'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Music2, ExternalLink, Loader2 } from 'lucide-react';
import SectionTitle from '@/components/common/SectionTitle';
import { usePlayer } from '@/context/PlayerContext';

const releases = [
    {
        title: "Maya",
        artist: "Chandrima Chakraborty, Pramith Ganguly",
        releaseDate: "2026",
        genre: "Pop",
        image: "https://img.youtube.com/vi/fn0Vzcouyzw/hqdefault.jpg",
        platforms: ["YouTube Music", "Spotify", "Apple Music", "JioSaavn", "Wynk", "Amazon Music"],
        link: "https://music.youtube.com/watch?v=fn0Vzcouyzw&si=xZr2Dt3jRD0CQH7t"
    },
    {
        title: "A2 Theme",
        artist: "Chandrima, Suman Maitra",
        releaseDate: "2026",
        genre: "Theme",
        image: "https://img.youtube.com/vi/UnGTOeBFK6k/hqdefault.jpg",
        platforms: ["YouTube Music", "Spotify", "Apple Music", "JioSaavn", "Wynk", "Amazon Music"],
        link: "https://music.youtube.com/watch?v=UnGTOeBFK6k&si=9PTcC5CYv-ndccXJ"
    },
    {
        title: "The Cupid Show With Shubho",
        artist: "Durnibar Saha, Shubho",
        releaseDate: "2026",
        genre: "Pop",
        image: "https://img.youtube.com/vi/GqPsl7m3VpI/hqdefault.jpg",
        platforms: ["YouTube Music", "Spotify", "Apple Music", "JioSaavn", "Wynk", "Amazon Music"],
        link: "https://music.youtube.com/watch?v=GqPsl7m3VpI&si=5Bxcb5xBd9uBAyDO"
    },
    {
        title: "Chutki ke Bhaiya",
        artist: "Riya Jatin, Dishani Dutta",
        releaseDate: "2026",
        genre: "Melody",
        image: "https://img.youtube.com/vi/tA3fAyQDej4/hqdefault.jpg",
        platforms: ["YouTube Music", "Spotify", "Apple Music", "JioSaavn", "Wynk", "Amazon Music"],
        link: "https://music.youtube.com/watch?v=tA3fAyQDej4&si=PlwsR3dGeMpnBI5Q"
    },
    {
        title: "Meghar Rumal",
        artist: "Shaan, Anwesha Datta",
        releaseDate: "2025",
        genre: "Romantic",
        image: "https://img.youtube.com/vi/P87YirJr-HQ/hqdefault.jpg",
        platforms: ["YouTube Music", "Spotify", "Apple Music", "JioSaavn", "Wynk", "Amazon Music"],
        link: "https://music.youtube.com/watch?v=P87YirJr-HQ&si=8AksZ59zIBNVzqmX"
    },
    {
        title: "Sobuj Merun Gaan",
        artist: "Archan Chakraborty",
        releaseDate: "2025",
        genre: "Folk/Pop",
        image: "https://img.youtube.com/vi/GqFL_fJjmUg/hqdefault.jpg",
        platforms: ["YouTube Music", "Spotify", "Apple Music", "JioSaavn", "Wynk", "Amazon Music"],
        link: "https://music.youtube.com/watch?v=GqFL_fJjmUg&si=G4folHzPbMFOMLn3"
    },
    {
        title: "Ebhabe Theke Jeo",
        artist: "Ranajoy Bhattacharya, Sayani Palit",
        releaseDate: "2025",
        genre: "Romantic",
        image: "https://img.youtube.com/vi/bfpNcH21OlA/hqdefault.jpg",
        platforms: ["YouTube Music", "Spotify", "Apple Music", "JioSaavn", "Wynk", "Amazon Music"],
        link: "https://music.youtube.com/watch?v=bfpNcH21OlA&si=nfh9SRTtjotDjc9p"
    }
];

const BMFReleases = () => {
    const { playTrack } = usePlayer();
    const [redirectingIndex, setRedirectingIndex] = useState<number | null>(null);

    const handlePlay = (release: typeof releases[0], index: number) => {
        setRedirectingIndex(index);
        playTrack({
            title: release.title,
            artist: release.artist,
            image: release.image,
            link: release.link
        });

        // Synthetic delay for UX as requested
        setTimeout(() => {
            window.open(release.link, '_blank');
            setRedirectingIndex(null);
        }, 2500);
    };

    return (
        <section className="py-20 dark:bg-[#030712] bg-gray-50 relative overflow-hidden transition-colors duration-700">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none dark:opacity-100 opacity-40"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none dark:opacity-100 opacity-40"></div>

            <div className="container mx-auto px-6 relative z-10">
                <SectionTitle badge="Portfolio" title="Recent Releases" subtitle="Discover the latest tracks distributed by BMF Music." />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
                    {releases.map((release, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 rounded-2xl overflow-hidden hover:border-red-500/30 transition-all duration-300 hover:-translate-y-2"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-square overflow-hidden">
                                <img
                                    src={release.image}
                                    alt={release.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Overlay on Hover */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <AnimatePresence mode="wait">
                                        {redirectingIndex === index ? (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.8 }}
                                                className="flex flex-col items-center gap-2"
                                            >
                                                <div className="p-3 bg-red-500 rounded-full text-white">
                                                    <Loader2 className="animate-spin" size={24} />
                                                </div>
                                                <span className="text-white text-xs font-bold uppercase tracking-wider">Redirecting...</span>
                                            </motion.div>
                                        ) : (
                                            <motion.button
                                                key="play-btn"
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                onClick={() => handlePlay(release, index)}
                                                className="p-3 bg-red-500 rounded-full dark:text-white text-black transform hover:scale-110 transition-transform hover:shadow-lg hover:shadow-red-500/50"
                                            >
                                                <Play fill="currentColor" size={24} />
                                            </motion.button>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="text-xl font-bold dark:text-white text-black mb-1 group-hover:text-red-400 transition-colors">
                                    {release.title}
                                </h3>
                                <p className="dark:text-gray-400 text-gray-600 text-sm mb-3">{release.artist}</p>

                                <div className="flex items-center justify-between text-xs text-gray-500 border-t dark:border-white/10 border-black/10 pt-3">
                                    <span className="flex items-center gap-1">
                                        <Music2 size={12} /> {release.genre}
                                    </span>
                                    <span>{release.releaseDate}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <p className="dark:text-gray-400 text-gray-600 mb-6">Want to see your release here?</p>
                    <button className="px-8 py-3 bg-red-600 hover:bg-red-700 dark:text-white text-black rounded-full font-medium transition-all transform hover:scale-105">
                        Distribute Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BMFReleases;
