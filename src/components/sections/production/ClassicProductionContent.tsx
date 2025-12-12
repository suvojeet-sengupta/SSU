'use client';

import { motion } from 'framer-motion';
import { Award, Video, Mic, CheckCircle, Film } from 'lucide-react';
import Link from 'next/link';

const ClassicProductionContent = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-4 py-2 bg-blue-500/10 rounded-full text-blue-400 font-semibold mb-6 border border-blue-500/20">
                            The Official Film & Media Production House
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            About <span className="text-blue-500">Premium Classic Entertainment</span>
                        </h2>

                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                            <p>
                                <strong>Premium Classic Entertainment</strong> is the official Film & Media Production House of the <strong>Ghosal Group</strong>, founded with a vision to create meaningful, high-quality and visually compelling entertainment.
                            </p>
                            <p>
                                Led by filmmaker <strong>Surojit Ghosal</strong>, the company specialises in producing Bengali Movies, Short Films, Music Videos, Corporate Films and Creative Visual Content.
                            </p>
                            <p>
                                With a strong blend of cinematic storytelling, modern filmmaking techniques and professional post-production workflow, Premium Classic Entertainment has built a reputation for delivering impactful and audience-centric content.
                            </p>
                        </div>

                        <div className="mt-12 space-y-8">
                            <h3 className="text-2xl font-bold text-white mb-4 border-l-4 border-blue-500 pl-4">What We Create</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    { title: "Feature Films & Bengali Movies", desc: "Emotion-driven stories crafted with quality direction, cinematography and production value." },
                                    { title: "Short Films", desc: "Powerful narratives made with creative vision, strong character depth and professional execution." },
                                    { title: "Music Videos", desc: "High-quality music visuals designed with unique concepts, stylish cinematography and engaging performances." },
                                    { title: "Corporate Films & Branding Videos", desc: "Professional brand films that communicate identity, purpose and message with clarity." },
                                    { title: "Promotional & Digital Content", desc: "Trailers, teasers, ad films and social media visuals created for maximum audience impact." }
                                ].map((item, idx) => (
                                    <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                                        <h4 className="font-bold text-blue-400 mb-2">{item.title}</h4>
                                        <p className="text-sm text-gray-400">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </motion.div>

                    {/* Right Content Side */}
                    <div className="space-y-12">
                        {/* Visual/Image Side - Kept abstract for now as per previous design */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-gray-800 relative group">
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700" />
                                    <div className="z-10 text-center p-6">
                                        <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20">
                                            <Film className="w-10 h-10 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white">Cinematic Excellence</h3>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="bg-blue-600/10 p-8 rounded-2xl border border-blue-500/20"
                        >
                            <h3 className="text-2xl font-bold text-white mb-6">Our Approach</h3>
                            <ul className="space-y-4">
                                {[
                                    "Creative storytelling",
                                    "Professional filmmaking techniques",
                                    "Strong visual design",
                                    "Dedicated team effort",
                                    "Quality-focused production values"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <CheckCircle className="text-blue-400 shrink-0" size={20} />
                                        <span className="text-gray-300 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 pt-6 border-t border-white/10">
                                <p className="text-xl font-serif italic text-blue-200">
                                    “Great stories deserve great presentation.”
                                </p>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
                            <p className="text-gray-400 leading-relaxed">
                                To become a leading production house that nurtures creativity, supports independent creators and produces cinema that connects with audiences across India.
                            </p>
                            <Link href="/gallery/post-production" className="inline-flex items-center gap-2 mt-6 text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                                <span>Explore Our Work</span>
                                <Video className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ClassicProductionContent;
