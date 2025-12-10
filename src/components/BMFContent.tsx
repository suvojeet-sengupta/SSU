'use client';
import { motion } from 'framer-motion';
import { Globe, ShieldCheck, CalendarClock, Barcode, LineChart, Database, CheckCircle2 } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

const services = [
    {
        title: "Major OTT Platforms",
        description: "Professional delivery to Spotify, JioSaavn, Apple Music, Amazon Music, Wynk, Resso, YouTube Music, and more.",
        icon: <Globe className="w-6 h-6 text-cyan-400" />
    },
    {
        title: "Content ID Protection",
        description: "Automated YouTube Content ID and rights management to ensure your music stays protected and monetized.",
        icon: <ShieldCheck className="w-6 h-6 text-green-400" />
    },
    {
        title: "Release Planning",
        description: "Smooth workflow with on-time scheduling, artwork support, and complete metadata management.",
        icon: <CalendarClock className="w-6 h-6 text-purple-400" />
    },
    {
        title: "ISRC & UPC Codes",
        description: "Authentic code generation and accurate record handling for every single track and album.",
        icon: <Barcode className="w-6 h-6 text-yellow-400" />
    },
    {
        title: "Royalty Monitoring",
        description: "Transparent tracking of earnings and performance insights for every release.",
        icon: <LineChart className="w-6 h-6 text-blue-400" />
    },
    {
        title: "Catalogue Management",
        description: "Organized and secure management of your entire music library, both old and new.",
        icon: <Database className="w-6 h-6 text-red-400" />
    }
];

const platforms = ["Spotify", "Apple Music", "JioSaavn", "YouTube Music", "Wynk", "Amazon Music"];

const BMFContent = () => {
    return (
        <section className="py-20 bg-[#030712] text-white">
            <div className="container mx-auto px-6">

                {/* About & Management */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">The BMF Music Story</h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            BMF Music is the official <span className="text-red-400 font-semibold">Music Distribution Wing</span> of the Ghosal Group. We were established to provide artists, production houses, and music labels with a reliable and professional digital distribution platform.
                        </p>
                        <p className="text-gray-400 leading-relaxed mb-8">
                            Today, BMF Music is managed by <span className="text-white font-bold">Riya Ghosal</span>, daughter of Ranjit Ghosal. She oversees all release operations, content delivery, Content ID, and royalty tracking with complete professionalism.
                        </p>

                        <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                            <h4 className="text-xl font-bold mb-4">Our Goal</h4>
                            <p className="text-gray-400 italic">"To make music distribution fast, secure and accessible for every artist."</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-2 gap-4"
                    >
                        {platforms.map((platform, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-center justify-center text-gray-300 font-medium hover:bg-white/10 transition-colors">
                                {platform}
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* What We Do */}
                <div className="mb-24">
                    <SectionTitle badge="Services" title="What We Do" subtitle="Comprehensive digital distribution services." />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-red-500/30 transition-all hover:-translate-y-1"
                            >
                                <div className="mb-4 bg-white/5 w-12 h-12 rounded-lg flex items-center justify-center">
                                    {service.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Mission */}
                <div className="text-center max-w-4xl mx-auto p-10 rounded-3xl bg-gradient-to-r from-red-900/20 to-orange-900/20 border border-red-500/20">
                    <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
                    <p className="text-xl md:text-2xl font-serif italic text-red-200 mb-6">
                        “To promote independent artists and help their music reach every corner.”
                    </p>
                    <p className="text-gray-400">
                        BMF Music believes in supporting creators by offering transparent, affordable, and professional distribution services.
                    </p>
                </div>

            </div>
        </section>
    );
};

export default BMFContent;
