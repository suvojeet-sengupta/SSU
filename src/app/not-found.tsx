'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, Film } from 'lucide-react';

export default function NotFound() {
    return (
        <main className="min-h-screen bg-[#030712] flex items-center justify-center relative overflow-hidden text-white">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2059&auto=format&fit=crop')] bg-cover bg-center opacity-10 blur-sm"></div>
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px]"></div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="relative inline-block mb-8">
                        <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-500 to-blue-500">
                            404
                        </h1>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-6 -right-6 text-white/20"
                        >
                            <Film size={80} />
                        </motion.div>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Scene Not Found</h2>
                    <p className="text-gray-400 text-lg max-w-lg mx-auto mb-10 leading-relaxed">
                        Looks like this scene didn't make the final cut. The page you are looking for might have been removed or is temporarily unavailable.
                    </p>

                    <Link href="/" className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-all transform hover:scale-105 shadow-lg shadow-white/10">
                        <Home size={20} />
                        Back to Setup
                    </Link>
                </motion.div>

                {/* Footer decorations */}
                <div className="mt-24 flex justify-center gap-4 opacity-30">
                    <div className="h-16 w-1 bg-gradient-to-b from-transparent via-white to-transparent"></div>
                    <div className="h-16 w-1 bg-gradient-to-b from-transparent via-white to-transparent"></div>
                    <div className="h-16 w-1 bg-gradient-to-b from-transparent via-white to-transparent"></div>
                </div>
            </div>
        </main>
    );
}
