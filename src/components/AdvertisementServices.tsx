'use client';
import { motion } from 'framer-motion';
import { Clapperboard, Megaphone, Users, Tv, Mic2, Video, Palette } from 'lucide-react';

const services = [
    {
        title: "Movie Advertisement",
        icon: <Clapperboard size={32} className="text-pink-400" />,
        description: "In-film branding, cinema advertising, and pre-roll campaigns for blockbuster releases.",
        color: "group-hover:shadow-pink-500/20"
    },
    {
        title: "Brand Promotion",
        icon: <Megaphone size={32} className="text-orange-400" />,
        description: "Strategic brand positioning and identity development to stand out in a crowded market.",
        color: "group-hover:shadow-orange-500/20"
    },
    {
        title: "Influencer Marketing",
        icon: <Users size={32} className="text-purple-400" />,
        description: "Connect with authentic voices across social media to reach engaged communities.",
        color: "group-hover:shadow-purple-500/20"
    },
    {
        title: "TV Production & Broadcasting",
        icon: <Tv size={32} className="text-blue-400" />,
        description: "High-quality commercial production and media buying across major television networks.",
        color: "group-hover:shadow-blue-500/20"
    },
    {
        title: "Radio Production",
        icon: <Mic2 size={32} className="text-cyan-400" />,
        description: "Audio jingles, voiceovers, and strategic radio spot placements for maximum reach.",
        color: "group-hover:shadow-cyan-500/20"
    },
    {
        title: "Outdoor Advertising",
        icon: <Video size={32} className="text-green-400" />, // Using Video camera as placeholder for outdoor/billboard visual if needed, or Layout
        description: "Billboards, digital displays, and transit media that capture attention on the go.",
        color: "group-hover:shadow-green-500/20"
    },
    {
        title: "Digital Marketing",
        icon: <Palette size={32} className="text-red-400" />,
        description: "SEO, PPC, social media management, and content creation strategies.",
        color: "group-hover:shadow-red-500/20"
    }
];

const AdvertisementServices = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {services.map((service, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`group bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${service.color}`}
                >
                    <div className="w-14 h-14 bg-black/50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        {service.description}
                    </p>
                </motion.div>
            ))}
        </div>
    );
};

export default AdvertisementServices;
