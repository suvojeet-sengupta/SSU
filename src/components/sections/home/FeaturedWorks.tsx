'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const works = [
    {
        category: "Music Distribution",
        title: "Global Chart Toppers",
        subtitle: "Distribution across 150+ international storefronts",
        image: "from-[#0a0f18] to-black"
    },
    {
        category: "Advertising",
        title: "Brand X Campaign",
        subtitle: "Multi-channel influencer strategy & execution",
        image: "from-[#180a0f] to-black"
    },
    {
        category: "Film Production",
        title: "Indie Film Festival",
        subtitle: "Worldwide digital premiere and theater release",
        image: "from-[#0f0a18] to-black"
    }
];

const FeaturedWorks = () => {
    return (
        <section className="py-24 dark:bg-black bg-gray-50">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-medium tracking-tight dark:text-white text-black mb-6">
                        Featured <span className="dark:text-white/40 text-black/40 italic font-light">Milestones</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {works.map((work, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="group relative aspect-[4/5] md:aspect-[3/4] dark:bg-[#050505] bg-white rounded-3xl overflow-hidden border dark:border-white/10 border-black/10 dark:hover:border-white/20 hover:border-black/20 hover:shadow-xl transition-all duration-500 cursor-pointer"
                        >
                            {/* Ambient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-b ${work.image} dark:opacity-80 opacity-5 group-hover:opacity-100 transition-opacity duration-500`} />

                            {/* Content */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                                <div className="flex justify-between items-end gap-4">
                                    <div className="flex-1">
                                        <div className="inline-flex items-center px-3 py-1 rounded-full dark:bg-white/[0.03] bg-black/[0.03] border dark:border-white/10 border-black/10 backdrop-blur-md mb-4 bg-white/80 dark:bg-transparent">
                                            <span className="dark:text-white/60 text-black/80 text-xs font-medium tracking-wide">
                                                {work.category}
                                            </span>
                                        </div>
                                        <h3 className="text-2xl font-medium dark:text-white text-black drop-shadow-md dark:drop-shadow-none mb-2 leading-tight">
                                            {work.title}
                                        </h3>
                                        <p className="dark:text-white/50 text-black/70 drop-shadow-md dark:drop-shadow-none text-sm font-light leading-relaxed">
                                            {work.subtitle}
                                        </p>
                                    </div>

                                    <div className="w-12 h-12 rounded-full border dark:border-white/10 border-black/10 dark:bg-white/[0.02] bg-white/50 backdrop-blur-md flex items-center justify-center dark:group-hover:bg-white group-hover:bg-black dark:group-hover:text-black group-hover:text-white dark:text-white text-black transition-all duration-500 shrink-0 shadow-sm">
                                        <ArrowUpRight strokeWidth={1.5} className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedWorks;
