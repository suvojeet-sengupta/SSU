'use client';
import { motion } from 'framer-motion';
import { Music, Megaphone, ArrowRight, Building2, Clapperboard, Film } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        icon: <Music size={32} />,
        title: "Distribution",
        description: "Release your music to 150+ stores worldwide including Spotify, Apple Music, and Instagram.",
        link: "/distribution",
        styles: { glow: "bg-cyan-500/10", bg: "bg-cyan-500/20", text: "text-cyan-400" }
    },
    {
        icon: <Megaphone size={32} />,
        title: "Advertisement",
        description: "Strategic campaigns across social media, YouTube, and digital platforms to amplify your reach.",
        link: "/advertisement",
        styles: { glow: "bg-pink-500/10", bg: "bg-pink-500/20", text: "text-pink-400" }
    },
    {
        icon: <Building2 size={32} />,
        title: "Event Management",
        description: "Executing seamless corporate events, concerts, and large-scale productions with precision.",
        link: "/event",
        styles: { glow: "bg-purple-500/10", bg: "bg-purple-500/20", text: "text-purple-400" }
    },
    {
        icon: <Clapperboard size={32} />,
        title: "Production House",
        description: "Full-scale film production services from pre-production to filming and execution.",
        link: "/production",
        styles: { glow: "bg-yellow-500/10", bg: "bg-yellow-500/20", text: "text-yellow-400" }
    },
    {
        icon: <Film size={32} />,
        title: "Post-Production",
        description: "State-of-the-art editing, VFX, color grading, and sound design for cinematic excellence.",
        link: "/production",
        styles: { glow: "bg-blue-500/10", bg: "bg-blue-500/20", text: "text-blue-400" }
    }
];

const HomeServices = () => {
    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors overflow-hidden"
                        >
                            <div className={`absolute top-0 right-0 p-32 ${service.styles.glow} rounded-full blur-3xl -mr-16 -mt-16 transition-opacity opacity-0 group-hover:opacity-100`}></div>

                            <div className={`w-16 h-16 rounded-2xl ${service.styles.bg} flex items-center justify-center ${service.styles.text} mb-6 group-hover:scale-110 transition-transform`}>
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                {service.description}
                            </p>

                            <Link href={service.link} className={`inline-flex items-center gap-2 ${service.styles.text} font-medium group-hover:gap-3 transition-all`}>
                                Explore Services <ArrowRight size={18} />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeServices;
