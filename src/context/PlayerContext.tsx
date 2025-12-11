'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Track = {
    title: string;
    artist: string;
    image: string;
    audioUrl?: string; // Optional for now, using mock behavior
};

type PlayerContextType = {
    currentTrack: Track | null;
    isPlaying: boolean;
    playTrack: (track: Track) => void;
    togglePlay: () => void;
    closePlayer: () => void;
};

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export function PlayerProvider({ children }: { children: ReactNode }) {
    const [currentTrack, setCurrentTrack] = useState<Track | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const playTrack = (track: Track) => {
        setCurrentTrack(track);
        setIsPlaying(true);
    };

    const togglePlay = () => {
        setIsPlaying(prev => !prev);
    };

    const closePlayer = () => {
        setCurrentTrack(null);
        setIsPlaying(false);
    };

    return (
        <PlayerContext.Provider value={{ currentTrack, isPlaying, playTrack, togglePlay, closePlayer }}>
            {children}
        </PlayerContext.Provider>
    );
}

export function usePlayer() {
    const context = useContext(PlayerContext);
    if (context === undefined) {
        throw new Error('usePlayer must be used within a PlayerProvider');
    }
    return context;
}
