'use client';
import { motion } from 'framer-motion';
import { Music, Megaphone, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const services = [
    {
        icon: <Music size={32} />,
        title: "Distribution",
        description: "Release your music to 150+ stores worldwide including Spotify, Apple Music, and Instagram.",
        link: "/distribution",
        color: "cyan"
    },
    {
        icon: <Megaphone size={32} />,
        title: "Advertisement",
        description: "Strategic campaigns across social media, YouTube, and digital platforms to amplify your reach.",
        link: "/advertisement",
        color: "pink"
    }
];

const HomeServices = () => {
    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors overflow-hidden"
                        >
                            <div className={`absolute top-0 right-0 p-32 bg-${service.color}-500/10 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity opacity-0 group-hover:opacity-100`}></div>

                            <div className={`w-16 h-16 rounded-2xl bg-${service.color}-500/20 flex items-center justify-center text-${service.color}-400 mb-6 group-hover:scale-110 transition-transform`}>
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed">
                                {service.description}
                            </p>

                            <Link href={service.link} className={`inline-flex items-center gap-2 text-${service.color}-400 font-medium group-hover:gap-3 transition-all`}>
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
