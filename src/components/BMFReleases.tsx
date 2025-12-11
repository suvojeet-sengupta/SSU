'use client';
import { motion } from 'framer-motion';
import { Play, Music2, ExternalLink } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';
import { usePlayer } from '@/context/PlayerContext';

const releases = [
    {
        title: "Neon Dreams",
        artist: "Midnight Vibe",
        releaseDate: "2024",
        genre: "Synthwave",
        image: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=2070&auto=format&fit=crop",
        platforms: ["Spotify", "Apple Music"]
    },
    {
        title: "Urban Echoes",
        artist: "The City Sound",
        releaseDate: "2024",
        genre: "Hip Hop",
        image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=2070&auto=format&fit=crop",
        platforms: ["JioSaavn", "Wynk"]
    },
    {
        title: "Serenity",
        artist: "Acoustic Soul",
        releaseDate: "2023",
        genre: "Ambient",
        image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop",
        platforms: ["YouTube Music"]
    },
    {
        title: "Electric Pulse",
        artist: "Digital Waves",
        releaseDate: "2023",
        genre: "EDM",
        image: "https://images.unsplash.com/photo-1514525253440-b39345208668?q=80&w=2070&auto=format&fit=crop",
        platforms: ["Spotify", "Amazon Music"]
    }
];

const BMFReleases = () => {
    const { playTrack } = usePlayer();

    return (
        <section className="py-20 bg-[#030712] relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>

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
                            className="group relative bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-red-500/30 transition-all duration-300 hover:-translate-y-2"
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
                                    <button
                                        onClick={() => playTrack(release)}
                                        className="p-3 bg-red-500 rounded-full text-white transform hover:scale-110 transition-transform hover:shadow-lg hover:shadow-red-500/50"
                                    >
                                        <Play fill="currentColor" size={24} />
                                    </button>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-5">
                                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-red-400 transition-colors">
                                    {release.title}
                                </h3>
                                <p className="text-gray-400 text-sm mb-3">{release.artist}</p>

                                <div className="flex items-center justify-between text-xs text-gray-500 border-t border-white/10 pt-3">
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
                    <p className="text-gray-400 mb-6">Want to see your release here?</p>
                    <button className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white rounded-full font-medium transition-all transform hover:scale-105">
                        Distribute Now
                    </button>
                </div>
            </div>
        </section>
    );
};

export default BMFReleases;
