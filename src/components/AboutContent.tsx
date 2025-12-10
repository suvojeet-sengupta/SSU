'use client';
import { motion } from 'framer-motion';
import { CheckCircle2, Star, Target, Heart } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

const AboutContent = () => {
    return (
        <section className="relative py-20 bg-[#030712] text-white">
            <div className="container mx-auto px-6">

                {/* Mission Section */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <div className="inline-block px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 backdrop-blur-md text-xs text-orange-300 font-medium mb-6 uppercase tracking-widest shadow-[0_0_15px_rgba(249,115,22,0.3)]">
                            Our Mission
                        </div>
                        <h2 className="text-4xl md:text-6xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-orange-300 via-amber-100 to-yellow-500 drop-shadow-[0_0_10px_rgba(251,191,36,0.3)]">
                            Khatu Shyam's Vision
                        </h2>
                        <p className="text-gray-300 text-lg leading-loose mb-10">
                            Shyam Surma CineVerse is an All India-based Advertisement, Digital Marketing & Distribution company founded by <span className="text-yellow-400 font-semibold">Surojit Ghosal</span> and <span className="text-yellow-400 font-semibold">Mouma Sengupta</span>.
                            We are dedicated to helping filmmakers, music creators and production houses reach the right audience with professional visibility and strategic promotion.
                            With a clear vision of supporting creators working on limited budgets, we believe that good marketing should be accessible to everyone.
                        </p>

                        <div className="inline-block p-6 rounded-2xl bg-gradient-to-r from-yellow-900/20 to-amber-900/20 border border-yellow-500/20">
                            <p className="text-xl font-serif italic text-yellow-200">
                                “Targeting Success, Blessed by Khatu Shyam.”
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Core Work Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-colors"
                    >
                        <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6">
                            <Star className="text-blue-400" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">Movie & Music Promotion</h3>
                        <p className="text-gray-400 leading-relaxed">
                            We manage complete social media marketing and audience outreach to ensure that every project gets the attention it deserves. From short films to music videos, we amplify your voice.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-colors"
                    >
                        <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mb-6">
                            <Target className="text-purple-400" />
                        </div>
                        <h3 className="text-2xl font-bold mb-4">OTT & Music Distribution</h3>
                        <p className="text-gray-400 leading-relaxed">
                            We distribute music on leading OTT platforms and create professional YouTube Content ID to protect creators’ rights and maximize revenue.
                        </p>
                    </motion.div>
                </div>

                {/* Founders Section */}
                <div className="mb-20">
                    <SectionTitle badge="Leadership" title="Visionary Leadership" subtitle="The minds behind the magic." />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 max-w-5xl mx-auto">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl border border-white/10"
                        >
                            <h3 className="text-2xl font-bold text-white mb-2">Surojit Ghosal</h3>
                            <p className="text-yellow-500 text-sm font-medium uppercase tracking-wider mb-4">Co-Founder & Filmmaker</p>
                            <p className="text-gray-400">
                                A passionate filmmaker running a successful record label since 2020. His industry experience ensures high-quality creative direction for every project.
                            </p>
                        </motion.div>

                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-3xl border border-white/10"
                        >
                            <h3 className="text-2xl font-bold text-white mb-2">Mouma Sengupta</h3>
                            <p className="text-yellow-500 text-sm font-medium uppercase tracking-wider mb-4">Co-Founder & Entrepreneur</p>
                            <p className="text-gray-400">
                                Brings strategic planning, business management, and digital marketing expertise, helping the company grow with a strong foundation.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Group Companies */}
                <div className="border-t border-white/10 pt-16">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-bold mb-2">Our Ecosystem</h3>
                        <p className="text-gray-500">The pillars of Ghosal Group</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        {[
                            "Event Company - Ghosal Event",
                            "Production - Premium Classic Entertainment",
                            "Distribution - BMF MUSIC",
                            "Advertisement - Shyam SurMa CineVerse"
                        ].map((company, index) => (
                            <div key={index} className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm md:text-base flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-green-500" />
                                {company}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutContent;
