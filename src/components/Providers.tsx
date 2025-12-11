'use client';

import { ReactNode } from 'react';
import { PlayerProvider } from '@/context/PlayerContext';
import MusicPlayer from '@/components/MusicPlayer';

export function Providers({ children }: { children: ReactNode }) {
    return (
        <PlayerProvider>
            {children}
            <MusicPlayer />
        </PlayerProvider>
    );
}
