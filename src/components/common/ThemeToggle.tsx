'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-9 h-9 opacity-0" />;
    }

    return (
        <button
            onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
            className="relative flex items-center justify-center w-9 h-9 rounded-full border dark:border-white/10 border-black/10 dark:bg-white/5 bg-black/5 dark:hover:bg-white/10 hover:bg-black/10 transition-colors"
            aria-label="Toggle theme"
        >
            <motion.div
                initial={false}
                animate={{
                    scale: resolvedTheme === 'dark' ? 1 : 0,
                    opacity: resolvedTheme === 'dark' ? 1 : 0,
                    rotate: resolvedTheme === 'dark' ? 0 : 90,
                }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <Moon size={16} className="text-white" />
            </motion.div>
            <motion.div
                initial={false}
                animate={{
                    scale: resolvedTheme === 'light' ? 1 : 0,
                    opacity: resolvedTheme === 'light' ? 1 : 0,
                    rotate: resolvedTheme === 'light' ? 0 : -90,
                }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 flex items-center justify-center"
            >
                <Sun size={16} className="text-black" />
            </motion.div>
        </button>
    );
}
