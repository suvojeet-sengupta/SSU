'use client';

import { motion } from 'framer-motion';
import { Film, Tv, Newspaper, Clapperboard, Music, Mic, Palette, Layers, ArrowRight } from 'lucide-react';

const services = [
    {
        title: "Film & Short Film Editing",
        description: "Expert cuts and pacing for narratives of any length, ensuring the story flows perfectly.",
        icon: Film,
        color: "from-blue-500 to-cyan-500"
    },
    {
        title: "DI & Color Grading",
        description: "Professional color correction and grading to set the mood and visual tone of your film.",
        icon: Palette,
        color: "from-purple-500 to-pink-500"
    },
    {
        title: "Audio Mixing & Mastering",
        description: "Crystal clear sound mixing and mastering to create an immersive audio experience.",
        icon: Music,
        color: "from-green-500 to-emerald-500"
    },
    {
        title: "Professional Dubbing Facilities",
        description: "State-of-the-art dubbing studio for seamless voice-overs and character dialogue.",
        icon: Mic,
        color: "from-yellow-400 to-orange-500"
    },
    {
        title: "News & Documentary Editing",
        description: "Precise editing for factual content, ensuring accuracy and engagement.",
        icon: Newspaper,
        color: "from-red-500 to-orange-600"
    },
    {
        title: "Music Video Post-Production",
        description: "Creative effects and synchronization to bring musical visions to life.",
        icon: Clapperboard,
        color: "from-indigo-500 to-purple-600"
    },
    {
        title: "Complete Workflow Management",
        description: "End-to-end management of the entire post-production process from ingest to final delivery.",
        icon: Layers,
        color: "from-gray-500 to-slate-400"
    }
];

const ProductionServices = () => {
    return (
        <section className="py-24 bg-black relative overflow-hidden" id="services">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Core Services</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Trusted by the industry for delivering excellence in every frame.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        // Span 2 columns if it's the last item and we have an odd number of items to center it nicely
                        const isLastAndOdd = index === services.length - 1 && services.length % 2 !== 0; //Actually 7 items, 4 cols -> 4 then 3. 

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`group relative p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1 ${isLastAndOdd ? 'md:col-span-2 lg:col-span-1 xl:col-span-1' : ''}`}
                            >
                                {/* Gradient Hover Effect */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />

                                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 text-white shadow-lg`}>
                                    <Icon size={24} />
                                </div>

                                <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
                                <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                                    {service.description}
                                </p>

                                <div className="mt-auto pt-4 border-t border-white/5">
                                    <div className="flex items-center text-sm font-medium text-white/50 group-hover:text-white transition-colors">
                                        <span>Details</span>
                                        <ArrowRight size={14} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ProductionServices;
