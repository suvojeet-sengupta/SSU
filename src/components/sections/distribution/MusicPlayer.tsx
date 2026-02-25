'use client';

import { usePlayer } from '@/context/PlayerContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, X, SkipForward, SkipBack, Volume2, ExternalLink } from 'lucide-react';

export default function MusicPlayer() {
    const { currentTrack, isPlaying, togglePlay, closePlayer } = usePlayer();

    return (
        <AnimatePresence>
            {currentTrack && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed bottom-0 left-0 right-0 z-[100] px-4 pb-4 pointer-events-none"
                >
                    <div className="container mx-auto pointer-events-auto">
                        <div className="dark:bg-black/80 bg-white/80 backdrop-blur-xl border dark:border-white/10 border-black/10 rounded-2xl p-4 flex items-center justify-between shadow-2xl dark:shadow-black/50 shadow-black/10 overflow-hidden relative">
                            {/* Progress Bar (Visual Only) */}
                            <div className="absolute top-0 left-0 h-1 dark:bg-white/10 bg-black/10 w-full">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500"
                                    initial={{ width: "0%" }}
                                    animate={isPlaying ? { width: "100%" } : {}}
                                    transition={isPlaying ? { duration: 30, ease: "linear", repeat: Infinity } : { duration: 0 }}
                                />
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-lg overflow-hidden relative dark:bg-white/10 bg-black/10">
                                    <img
                                        src={currentTrack.image}
                                        alt={currentTrack.title}
                                        className={`w-full h-full object-cover ${isPlaying ? 'animate-pulse' : ''}`}
                                    />
                                    {/* Rotating vinyl effect overlay */}
                                    <div className={`absolute inset-0 border-2 dark:border-white/20 border-black/20 rounded-full scale-[0.8] ${isPlaying ? 'animate-spin-slow' : ''}`}></div>
                                </div>
                                <div>
                                    <h4 className="dark:text-white text-black font-bold text-sm flex items-center gap-2">
                                        {currentTrack.title}
                                        {currentTrack.link && (
                                            <a
                                                href={currentTrack.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="dark:text-gray-400 text-gray-600 hover:dark:text-white hover:text-black transition-colors pointer-events-auto"
                                            >
                                                <ExternalLink size={14} />
                                            </a>
                                        )}
                                    </h4>
                                    <p className="dark:text-gray-400 text-gray-600 text-xs">{currentTrack.artist}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 md:gap-6">
                                <button className="dark:text-gray-400 text-gray-600 hover:dark:text-white text-black transition-colors hidden md:block">
                                    <SkipBack size={20} />
                                </button>
                                <button
                                    onClick={togglePlay}
                                    className="w-10 h-10 rounded-full dark:bg-white bg-black dark:text-black text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
                                >
                                    {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
                                </button>
                                <button className="dark:text-gray-400 text-gray-600 hover:dark:text-white text-black transition-colors hidden md:block">
                                    <SkipForward size={20} />
                                </button>
                            </div>

                            <div className="flex items-center gap-4">
                                <Volume2 size={18} className="dark:text-gray-400 text-gray-600 hidden md:block" />
                                <button
                                    onClick={closePlayer}
                                    className="p-2 hover:dark:bg-white/10 bg-black/10 rounded-full dark:text-gray-400 text-gray-600 hover:dark:text-white text-black transition-colors"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
