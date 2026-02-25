'use client';
import { motion } from 'framer-motion';
import { Clapperboard, Megaphone, Users, Tv, Mic2, Video, Globe, Music, Target } from 'lucide-react';
import SectionTitle from '@/components/common/SectionTitle';
import AdvertisementServices from './AdvertisementServices';

const CineVerseContent = () => {
    return (
        <section className="relative py-24 dark:bg-[#030712] bg-white dark:text-white text-black transition-colors duration-700">
            <div className="container mx-auto px-6">

                {/* About CineVerse */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                    >
                        <SectionTitle badge="Identity" title="Who We Are" subtitle="The Advertising Arm of Ghosal Group." />

                        <p className="dark:text-gray-300 text-gray-700 text-lg leading-relaxed mb-6 mt-6 font-light">
                            <strong className="dark:text-white text-black font-semibold">Shyam Surma CineVerse</strong> is the advertising arm of the Ghosal Group, co-founded by <span className="text-pink-600 font-medium italic">Surojit Ghosal</span> and <span className="text-pink-600 font-medium italic">Mouma Sengupta</span>.
                        </p>
                        <p className="dark:text-gray-400 text-gray-600 leading-relaxed mb-8 font-light">
                            We help filmmakers, music creators, and production houses achieve professional visibility through strategic promotion and distribution.
                        </p>

                        <div className="p-8 rounded-3xl dark:bg-gradient-to-r dark:from-pink-900/20 dark:to-purple-900/20 bg-pink-50 border dark:border-pink-500/20 border-pink-500/10">
                            <h4 className="text-xl font-bold mb-3 dark:text-white text-black">Our Purpose</h4>
                            <p className="text-2xl font-serif italic dark:text-pink-200 text-pink-700 mb-2">
                                “Good marketing should be accessible to everyone.”
                            </p>
                            <p className="text-sm dark:text-gray-500 text-gray-400">This belief led to the creation of a platform where creativity meets affordability.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className="relative h-[500px] rounded-[2.5rem] overflow-hidden border dark:border-white/10 border-black/5 group shadow-2xl"
                    >
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=2106&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 transition-opacity"></div>
                        <div className="absolute inset-0 dark:bg-gradient-to-t dark:from-black dark:via-black/50 dark:to-transparent bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-10">
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-2xl font-bold text-white">Surojit Ghosal</h4>
                                    <p className="text-pink-400 text-sm font-medium tracking-wide uppercase">Co-Founder & Director</p>
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-white">Mouma Sengupta</h4>
                                    <p className="text-pink-400 text-sm font-medium tracking-wide uppercase">Co-Founder & CEO</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Core Services */}
                <div className="mb-24">
                    <SectionTitle badge="Services" title="Core Services" subtitle="Tailored solutions for maximum impact." />

                    <AdvertisementServices />
                </div>

            </div>
        </section>
    );
};

export default CineVerseContent;
