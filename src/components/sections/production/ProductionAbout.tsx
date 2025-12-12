'use client';

import { motion } from 'framer-motion';
import { Award, Video, CheckCircle, Film } from 'lucide-react';
import Link from 'next/link';
import CloudinaryImage from '@/components/common/CloudinaryImage';

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
                            About <span className="text-blue-500">Leisure Film Studio</span>
                        </h2>

                        <div className="mb-8 rounded-xl overflow-hidden border border-white/10 shadow-lg relative h-24 w-full max-w-md">
                            <CloudinaryImage
                                src="l3_b68e4a"
                                alt="Leisure Film Studio Banner"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                            <p>
                                <strong>Leisure Film Studio</strong> is a professional Film Post-Production Company with over <strong>15+ years of industry experience</strong>, delivering high-quality and reliable post-production services.
                            </p>
                            <p>
                                Led by <strong>Director Subrata Chowdhury</strong>, the studio has worked on numerous Bengali feature films, short films, music videos, documentaries, and news content—completing their full post-production workflow with excellence.
                            </p>
                            <p>
                                With a fully equipped studio setup and an experienced technical team, we ensure creative accuracy, industry-standard output, and timely delivery for every project.
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-4 mt-8 mb-8">
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

                        <Link href="/gallery/post-production" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25">
                            <Film className="w-5 h-5" />
                            <span>View Post-Production Gallery</span>
                        </Link>
                    </motion.div>

                    {/* Visual/Image Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="aspect-square md:aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-gray-800 relative group flex items-center justify-center">
                            {/* Background Glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 to-black/80 z-0"></div>

                            <div className="z-10 text-center p-6 relative flex flex-col items-center">
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                    className="w-40 h-40 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mb-6 border border-white/20 shadow-xl overflow-hidden p-4"
                                >
                                    <CloudinaryImage
                                        src="l1_l6pbra"
                                        alt="Leisure Film Studio Logo"
                                        width="150"
                                        height="150"
                                        className="object-contain w-full h-full"
                                    />
                                </motion.div>
                                <h3 className="text-3xl font-bold text-white tracking-wide">Leisure Film Studio</h3>
                                <p className="text-gray-400 mt-2 font-medium">Professional Post-Production</p>
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
