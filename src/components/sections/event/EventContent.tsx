'use client';
import { motion } from 'framer-motion';
import { PartyPopper, Briefcase, Mic2, Sparkles, CheckCircle2 } from 'lucide-react';
import SectionTitle from '@/components/common/SectionTitle';

const services = [
    {
        title: "Wedding Management",
        description: "Orchestrating dream weddings with precision and elegance, ensuring every moment is cherished.",
        icon: <PartyPopper className="w-8 h-8 text-pink-400" />
    },
    {
        title: "Corporate Events",
        description: "Professional planning for conferences, seminars, and product launches to elevate your brand image.",
        icon: <Briefcase className="w-8 h-8 text-blue-400" />
    },
    {
        title: "Cultural Functions",
        description: "Celebrating traditions with grand setups and seamless execution for social and cultural gatherings.",
        icon: <Mic2 className="w-8 h-8 text-purple-400" />
    },
    {
        title: "Multi-sector Planning",
        description: "Versatile event solutions across various industries, tailored to meet specific client needs.",
        icon: <Sparkles className="w-8 h-8 text-yellow-400" />
    }
];

const EventContent = () => {
    return (
        <section className="py-20 bg-[#030712] text-white">
            <div className="container mx-auto px-6">

                {/* Founder Story */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <SectionTitle badge="Legacy" title="Our Foundation" subtitle="Rooted in trust and excellence." />
                        <p className="text-gray-300 text-lg leading-relaxed mb-6">
                            Founded in <span className="text-purple-400 font-bold">1995</span> by <span className="text-purple-400 font-bold">Ranjit Ghosal</span>, Ghosal Event stands as the backbone of the Ghosal Group. What started as a vision to organize memorable gatherings has grown into a premier event management company.
                        </p>
                        <p className="text-gray-400 leading-relaxed">
                            With decades of experience, we have earned a reputation for creativity, reliability, and delivering premium events that leave a lasting impression.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="relative h-[400px] rounded-3xl overflow-hidden border border-white/10"
                    >
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2162&auto=format&fit=crop')] bg-cover bg-center"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-8">
                            <div>
                                <h4 className="text-2xl font-bold text-white">Ranjit Ghosal</h4>
                                <p className="text-purple-300">Founder</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Services Grid */}
                <div>
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold mb-4">What We Specialize In</h3>
                        <p className="text-gray-400">Comprehensive event solutions for every occasion.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                            >
                                <div className="mb-4 p-3 bg-white/5 rounded-xl inline-block">
                                    {service.icon}
                                </div>
                                <h4 className="text-xl font-bold mb-3">{service.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default EventContent;
