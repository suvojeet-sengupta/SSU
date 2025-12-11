'use client';

import { usePlayer } from '@/context/PlayerContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, X, SkipForward, SkipBack, Volume2 } from 'lucide-react';

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
                        <div className="bg-black/80 backdrop-blur-xl border border-white/10 rounded-2xl p-4 flex items-center justify-between shadow-2xl shadow-black/50 overflow-hidden relative">
                            {/* Progress Bar (Visual Only) */}
                            <div className="absolute top-0 left-0 h-1 bg-white/10 w-full">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500"
                                    initial={{ width: "0%" }}
                                    animate={isPlaying ? { width: "100%" } : {}}
                                    transition={isPlaying ? { duration: 30, ease: "linear", repeat: Infinity } : { duration: 0 }}
                                />
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-lg overflow-hidden relative bg-white/10">
                                    <img
                                        src={currentTrack.image}
                                        alt={currentTrack.title}
                                        className={`w-full h-full object-cover ${isPlaying ? 'animate-pulse' : ''}`}
                                    />
                                    {/* Rotating vinyl effect overlay */}
                                    <div className={`absolute inset-0 border-2 border-white/20 rounded-full scale-[0.8] ${isPlaying ? 'animate-spin-slow' : ''}`}></div>
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-sm">{currentTrack.title}</h4>
                                    <p className="text-gray-400 text-xs">{currentTrack.artist}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 md:gap-6">
                                <button className="text-gray-400 hover:text-white transition-colors hidden md:block">
                                    <SkipBack size={20} />
                                </button>
                                <button
                                    onClick={togglePlay}
                                    className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 active:scale-95 transition-all"
                                >
                                    {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
                                </button>
                                <button className="text-gray-400 hover:text-white transition-colors hidden md:block">
                                    <SkipForward size={20} />
                                </button>
                            </div>

                            <div className="flex items-center gap-4">
                                <Volume2 size={18} className="text-gray-400 hidden md:block" />
                                <button
                                    onClick={closePlayer}
                                    className="p-2 hover:bg-white/10 rounded-full text-gray-400 hover:text-white transition-colors"
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
