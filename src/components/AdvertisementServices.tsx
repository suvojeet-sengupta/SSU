'use client';
import { motion } from 'framer-motion';
import { ADVERTISEMENT_SERVICES } from '@/data/services';

const AdvertisementServices = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {ADVERTISEMENT_SERVICES.map((service, index) => {
                const Icon = service.icon;
                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`group bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${service.color}`}
                    >
                        <div className="w-14 h-14 bg-black/50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                            <Icon size={32} className={service.iconColor} />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {service.description}
                        </p>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default AdvertisementServices;
