'use client';
import { motion } from 'framer-motion';
import { Clapperboard, Megaphone, Users, Tv, Mic2, Video, Globe, Music, Target } from 'lucide-react';
import SectionTitle from '@/components/common/SectionTitle';
import AdvertisementServices from './AdvertisementServices';

const CineVerseContent = () => {
    return (
        <section className="relative py-20 bg-[#030712] text-white">
            <div className="container mx-auto px-6">

                {/* About CineVerse */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <SectionTitle badge="Identity" title="Who We Are" subtitle="The Advertising Arm of Ghosal Group." />

                        <p className="text-gray-300 text-lg leading-relaxed mb-6 mt-6">
                            <strong className="text-white">Shyam Surma CineVerse</strong> is the advertising arm of the Ghosal Group, co-founded by <span className="text-pink-400 font-bold">Surojit Ghosal</span> and <span className="text-pink-400 font-bold">Mouma Sengupta</span>.
                        </p>
                        <p className="text-gray-400 leading-relaxed mb-8">
                            We help filmmakers, music creators, and production houses achieve professional visibility through strategic promotion and distribution.
                        </p>

                        <div className="p-8 rounded-3xl bg-gradient-to-r from-pink-900/20 to-purple-900/20 border border-pink-500/20">
                            <h4 className="text-xl font-bold mb-3 text-white">Our Purpose</h4>
                            <p className="text-2xl font-serif italic text-pink-200 mb-2">
                                “Good marketing should be accessible to everyone.”
                            </p>
                            <p className="text-sm text-gray-500">This belief led to the creation of a platform where creativity meets affordability.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative h-[500px] rounded-[2rem] overflow-hidden border border-white/10 group"
                    >
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&w=2106&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex flex-col justify-end p-10">
                            <div className="space-y-4">
                                <div>
                                    <h4 className="text-2xl font-bold text-white">Surojit Ghosal</h4>
                                    <p className="text-pink-400 text-sm">Co-Founder & Director</p>
                                </div>
                                <div>
                                    <h4 className="text-2xl font-bold text-white">Mouma Sengupta</h4>
                                    <p className="text-pink-400 text-sm">Co-Founder & CEO</p>
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
