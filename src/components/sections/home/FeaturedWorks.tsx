'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const works = [
    {
        category: "Music",
        title: "Global Chart Toppers",
        subtitle: "Distribution across 150+ stores",
        image: "bg-gradient-to-tr from-cyan-900 to-blue-900",
        accent: "cyan"
    },
    {
        category: "Advertising",
        title: "Brand X Campaign",
        subtitle: "Multi-channel influencer strategy",
        image: "bg-gradient-to-tr from-pink-900 to-rose-900",
        accent: "pink"
    },
    {
        category: "Film",
        title: "Indie Film Festival",
        subtitle: "Worldwide digital premiere",
        image: "bg-gradient-to-tr from-purple-900 to-indigo-900",
        accent: "purple"
    }
];

const FeaturedWorks = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {works.map((work, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group relative aspect-video bg-gray-900 rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all cursor-pointer"
                >
                    {/* Background Placeholder / Image */}
                    <div className={`absolute inset-0 ${work.image} opacity-60 group-hover:opacity-80 transition-opacity duration-500`}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>

                    {/* Content */}
                    <div className="absolute bottom-6 left-6 right-6">
                        <div className="flex justify-between items-end">
                            <div>
                                <div className={`px-3 py-1 bg-${work.accent}-500/20 text-${work.accent}-400 text-xs font-bold rounded-full w-fit mb-3 border border-${work.accent}-500/20 backdrop-blur-md`}>
                                    {work.category}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all">
                                    {work.title}
                                </h3>
                                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                                    {work.subtitle}
                                </p>
                            </div>

                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 backdrop-blur-sm border border-white/10">
                                <ArrowUpRight size={20} className="text-white" />
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default FeaturedWorks;
