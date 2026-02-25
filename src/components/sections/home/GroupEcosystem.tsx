'use client';
import { motion } from 'framer-motion';
import { Building2, Music, Film, Clapperboard } from 'lucide-react';

const companies = [
    {
        name: "Ghosal Event",
        type: "Event Management",
        icon: <Building2 strokeWidth={1.5} className="w-6 h-6" />,
    },
    {
        name: "Premium Classic",
        type: "Production House",
        icon: <Clapperboard strokeWidth={1.5} className="w-6 h-6" />,
    },
    {
        name: "BMF MUSIC",
        type: "Music Distribution",
        icon: <Music strokeWidth={1.5} className="w-6 h-6" />,
    },
    {
        name: "CineVerse",
        type: "Ads & Marketing",
        icon: <Film strokeWidth={1.5} className="w-6 h-6" />,
    }
];

const GroupEcosystem = () => {
    return (
        <section className="py-24 dark:bg-black bg-gray-50 border-t dark:border-white/5 border-black/5">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col items-center text-center mb-16">
                    <span className="dark:text-white/40 text-black/40 text-xs font-semibold uppercase tracking-widest mb-4">Architecture</span>
                    <h2 className="text-3xl md:text-5xl font-medium tracking-tight dark:text-white text-black">
                        Group <span className="dark:text-white/40 text-black/40 italic font-light">Entities</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {companies.map((company, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="group p-8 rounded-3xl dark:bg-white/[0.02] bg-white/90 backdrop-blur-md border dark:border-white/5 border-black/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] dark:hover:shadow-none dark:hover:bg-white/[0.04] hover:bg-white dark:hover:border-white/10 hover:border-black/10 transition-all duration-500 flex flex-col items-center text-center"
                        >
                            <div className="w-14 h-14 rounded-full border dark:border-white/10 border-black/10 dark:bg-black bg-gray-100 flex items-center justify-center dark:text-white/70 text-black/70 mb-6 group-hover:scale-110 dark:group-hover:text-white group-hover:text-black dark:group-hover:border-white/30 group-hover:border-black/30 transition-all duration-500">
                                {company.icon}
                            </div>
                            <h3 className="text-xl font-medium dark:text-white text-black mb-2">{company.name}</h3>
                            <p className="dark:text-white/40 text-gray-600 text-sm font-medium tracking-wide uppercase">{company.type}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GroupEcosystem;
