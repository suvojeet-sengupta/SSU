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
                        transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                        className={`group dark:bg-white/5 bg-white border dark:border-white/10 border-black/5 p-8 rounded-3xl dark:hover:bg-white/10 hover:shadow-xl transition-all duration-500 cursor-default ${service.color}`}
                    >
                        <div className="w-14 h-14 dark:bg-black/50 bg-gray-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                            <Icon size={32} className={service.iconColor} />
                        </div>
                        <h3 className="text-xl font-bold dark:text-white text-black mb-3">{service.title}</h3>
                        <p className="dark:text-gray-400 text-gray-600 text-sm leading-relaxed font-light">
                            {service.description}
                        </p>
                    </motion.div>
                );
            })}
        </div>
    );
};

export default AdvertisementServices;
