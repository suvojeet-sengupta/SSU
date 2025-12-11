'use client';

import { useEffect, useState } from 'react';
// import { getImagesByTag } from '@/actions/cloudinary'; // Removed server action dependency
import { CldImage } from 'next-cloudinary';
import { Loader2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface GalleryGridProps {
    tag: string;
    title: string;
}

export default function GalleryGrid({ tag, title }: GalleryGridProps) {
    const [images, setImages] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                // Fetch from our new API route
                const response = await fetch(`/api/images?tag=${tag}`);
                if (!response.ok) throw new Error('Failed to fetch');
                const results = await response.json();
                setImages(results);
            } catch (error) {
                console.error("Failed to load images", error);
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, [tag]);

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh]">
                <Loader2 className="w-12 h-12 text-blue-500 animate-spin mb-4" />
                <p className="text-gray-400">Loading gallery...</p>
            </div>
        );
    }

    if (images.length === 0) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[40vh] bg-white/5 rounded-2xl border border-white/10 p-8 text-center">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4">
                    <AlertCircle className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No Images Yet</h3>
                <p className="text-gray-400 max-w-sm">
                    Upload images with the tag <strong>"{tag}"</strong> to see them appear here.
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                {title}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((image, idx) => (
                    <motion.div
                        key={image.public_id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer border border-white/10 bg-gray-900"
                    >
                        <CldImage
                            width="800"
                            height="450"
                            src={image.public_id}
                            alt="Gallery Image"
                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-white font-medium border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm">View Full</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
