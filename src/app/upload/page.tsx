'use client';

import { CldUploadButton } from 'next-cloudinary';
import { Upload, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function UploadPage() {
    const [lastUpload, setLastUpload] = useState<string | null>(null);

    const onUploadSuccess = (result: any) => {
        setLastUpload(result?.info?.secure_url);
    };

    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />

            <div className="container mx-auto px-6 py-32">
                <h1 className="text-4xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                    Upload Gallery Images
                </h1>

                <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">

                    {/* Production Upload */}
                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-blue-500/50 transition-all text-center">
                        <h2 className="text-2xl font-bold mb-4">Production Gallery</h2>
                        <p className="text-gray-400 mb-8">Upload images for the general Production gallery.</p>

                        <CldUploadButton
                            uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
                            // Using the "tags" option to auto-tag images
                            options={{ tags: ['production'], sources: ['local', 'url', 'camera'] }}
                            onSuccess={onUploadSuccess}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2 mx-auto transition-all"
                        >
                            <Upload size={20} />
                            <span>Upload to Production</span>
                        </CldUploadButton>
                    </div>

                    {/* Post-Production Upload */}
                    <div className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all text-center">
                        <h2 className="text-2xl font-bold mb-4">Post-Production Gallery</h2>
                        <p className="text-gray-400 mb-8">Upload images for editing, DI, and studio work.</p>

                        <CldUploadButton
                            uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET}
                            options={{ tags: ['post-production'], sources: ['local', 'url', 'camera'] }}
                            onSuccess={onUploadSuccess}
                            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center gap-2 mx-auto transition-all"
                        >
                            <Upload size={20} />
                            <span>Upload to Post-Production</span>
                        </CldUploadButton>
                    </div>
                </div>

                {lastUpload && (
                    <div className="mt-12 p-6 bg-green-500/10 border border-green-500/30 rounded-xl text-center max-w-md mx-auto animate-fade-in">
                        <div className="flex items-center justify-center gap-2 text-green-400 mb-2">
                            <CheckCircle size={24} />
                            <span className="font-bold text-lg">Upload Successful!</span>
                        </div>
                        <p className="text-sm text-gray-400">Your image has been added to the gallery.</p>
                    </div>
                )}
            </div>

            <Footer />
        </main>
    );
}
