'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Construction } from 'lucide-react';

interface DevelopmentPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

const DevelopmentPopup = ({ isOpen, onClose }: DevelopmentPopupProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-md bg-[#0a0a0a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden pointer-events-auto"
                    >
                        {/* Header Gradient */}
                        <div className="h-2 w-full bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500" />

                        <div className="p-6 relative">
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 text-gray-500 hover:text-white hover:bg-white/10 rounded-full transition-all"
                            >
                                <X size={20} />
                            </button>

                            <div className="flex flex-col items-center text-center space-y-4 pt-4">
                                <div className="p-4 bg-red-500/10 rounded-full border border-red-500/20 mb-2">
                                    <Construction size={40} className="text-red-400" />
                                </div>

                                <h3 className="text-2xl font-bold text-white font-cinzel">
                                    Under Development
                                </h3>

                                <p className="text-gray-400 leading-relaxed">
                                    The distribution portal is currently in the development phase. We are working hard to bring you a seamless experience!
                                </p>

                                <div className="pt-4 w-full">
                                    <button
                                        onClick={onClose}
                                        className="w-full py-3 px-6 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl text-white font-medium transition-all duration-300"
                                    >
                                        Got it
                                    </button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default DevelopmentPopup;
