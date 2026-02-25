'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { PlayerProvider } from '@/context/PlayerContext';
import MusicPlayer from '@/components/sections/distribution/MusicPlayer';

export function Providers({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <PlayerProvider>
                {children}
                <MusicPlayer />
            </PlayerProvider>
        </ThemeProvider>
    );
}
