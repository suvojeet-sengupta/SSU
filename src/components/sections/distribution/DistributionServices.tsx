'use client';
import { motion } from 'framer-motion';
import { Clapperboard, Music2, Disc3, ArrowRight } from 'lucide-react';

const services = [
    {
        title: "Song Distribution",
        icon: <Music2 size={40} className="text-cyan-400" />,
        description: "Get your tracks on Spotify, Apple Music, and 150+ stores worldwide. Keep 100% of your royalties.",
        gradient: "from-cyan-500/20 to-blue-500/5",
        border: "group-hover:border-cyan-500/50"
    },
    {
        title: "Movie Distribution",
        icon: <Clapperboard size={40} className="text-purple-400" />,
        description: "Global distribution for independent films and documentaries on major streaming platforms like Netflix & Amazon Prime.",
        gradient: "from-purple-500/20 to-pink-500/5",
        border: "group-hover:border-purple-500/50"
    },
    {
        title: "Record Label",
        icon: <Disc3 size={40} className="text-amber-400" />,
        description: "Full-service management, marketing, and physical distribution for serious artists building a legacy.",
        gradient: "from-amber-500/20 to-orange-500/5",
        border: "group-hover:border-amber-500/50"
    }
];

const DistributionServices = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className={`group relative p-8 rounded-3xl bg-gradient-to-br ${service.gradient} border border-white/10 ${service.border} backdrop-blur-sm transition-all duration-500 hover:transform hover:-translate-y-2`}
                >
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>

                    <div className="relative z-10">
                        <div className="w-16 h-16 rounded-2xl bg-black/40 flex items-center justify-center mb-6 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                            {service.icon}
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            {service.description}
                        </p>

                        <button className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider group-hover:gap-4 transition-all">
                            Learn More <ArrowRight size={16} />
                        </button>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default DistributionServices;
