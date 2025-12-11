'use client';
import { motion } from 'framer-motion';
import { Building2, Music, Film, Clapperboard } from 'lucide-react';

const companies = [
    {
        name: "Ghosal Event",
        type: "Event Management",
        icon: <Building2 className="w-8 h-8" />,
        color: "text-purple-400",
        border: "group-hover:border-purple-500/50",
        bg: "group-hover:bg-purple-500/10"
    },
    {
        name: "Premium Classic Ent.",
        type: "Production House",
        icon: <Clapperboard className="w-8 h-8" />,
        color: "text-yellow-400",
        border: "group-hover:border-yellow-500/50",
        bg: "group-hover:bg-yellow-500/10"
    },
    {
        name: "BMF MUSIC",
        type: "Music Distribution",
        icon: <Music className="w-8 h-8" />,
        color: "text-red-400",
        border: "group-hover:border-red-500/50",
        bg: "group-hover:bg-red-500/10"
    },
    {
        name: "Shyam Surma CineVerse",
        type: "Ads & Marketing",
        icon: <Film className="w-8 h-8" />,
        color: "text-cyan-400",
        border: "group-hover:border-cyan-500/50",
        bg: "group-hover:bg-cyan-500/10"
    }
];

const GroupEcosystem = () => {
    return (
        <section className="py-20 bg-[#030712] border-t border-white/5">
            <div className="container mx-auto px-4 text-center">
                <div className="mb-16">
                    <span className="text-gray-500 text-sm font-medium uppercase tracking-widest">Our Ecosystem</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-4 text-white">Ghosal Group Entities</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {companies.map((company, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`group p-8 rounded-2xl bg-white/5 border border-white/10 ${company.border} ${company.bg} transition-all duration-500 cursor-default`}
                        >
                            <div className={`w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-6 ${company.color} group-hover:scale-110 transition-transform`}>
                                {company.icon}
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">{company.name}</h3>
                            <p className="text-gray-500 text-sm">{company.type}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GroupEcosystem;
