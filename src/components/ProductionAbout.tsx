'use client';

import { motion } from 'framer-motion';
import { Award, Video, Mic, CheckCircle } from 'lucide-react';

const ProductionAbout = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-black to-gray-900 text-white relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-block px-4 py-2 bg-blue-500/10 rounded-full text-blue-400 font-semibold mb-6 border border-blue-500/20">
                            15+ Years of Experience
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            About <span className="text-blue-500">Leisure Films Studio</span>
                        </h2>

                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                            <p>
                                <strong>Leisure Films Studio</strong> is a professional Film Post-Production Company with over <strong>15+ years of industry experience</strong>, delivering high-quality and reliable post-production services.
                            </p>
                            <p>
                                Led by <strong>Director Subrata Chowdhury</strong>, the studio has worked on numerous Bengali feature films, short films, music videos, documentaries, and news content—completing their full post-production workflow with excellence.
                            </p>
                            <p>
                                With a fully equipped studio setup and an experienced technical team, we ensure creative accuracy, industry-standard output, and timely delivery for every project.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 mt-8">
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                                <Video className="text-purple-400" size={20} />
                                <span className="font-medium">Fully Equipped Studio</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                                <Award className="text-yellow-400" size={20} />
                                <span className="font-medium">Industry Standard Output</span>
                            </div>
                            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-lg border border-white/10">
                                <CheckCircle className="text-green-400" size={20} />
                                <span className="font-medium">Timely Delivery</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual/Image Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-gray-800 relative group">
                            {/* Placeholder for Studio Image - Using a gradient/abstract for now if no image provided */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black flex items-center justify-center">
                                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1535016120720-40c6874c3b1c?q=80&w=2064&auto=format&fit=crop')] bg-cover bg-center opacity-40 group-hover:scale-105 transition-transform duration-700" />
                                <div className="z-10 text-center p-6">
                                    <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-4 border border-white/20">
                                        <Mic className="w-10 h-10 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">Professional Dubbing</h3>
                                    <p className="text-gray-400">High-end recording facilities</p>
                                </div>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 rounded-full blur-[60px]" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-[60px]" />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ProductionAbout;
