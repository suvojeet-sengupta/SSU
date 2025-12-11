import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GalleryGrid from '@/components/GalleryGrid';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// Map categories to display titles
const categoryTitles: Record<string, string> = {
    'production': 'Production Gallery',
    'post-production': 'Post-Production Gallery'
};

export const runtime = 'edge';

interface PageProps {
    params: Promise<{
        category: string;
    }>;
}

export default async function GalleryPage({ params }: PageProps) {
    const { category } = await params;

    // Default valid categories check
    const isValidCategory = ['production', 'post-production'].includes(category);
    const title = categoryTitles[category] || 'Gallery';

    return (
        <main className="min-h-screen bg-black text-white">
            <Navbar />

            <div className="container mx-auto px-6 pt-32 pb-20">
                <div className="mb-8">
                    <Link href="/production" className="inline-flex items-center text-gray-400 hover:text-white transition-colors mb-4">
                        <ArrowLeft size={20} className="mr-2" />
                        Back to Production
                    </Link>
                </div>

                {isValidCategory ? (
                    <GalleryGrid tag={category} title={title} />
                ) : (
                    <div className="text-center py-20">
                        <h1 className="text-3xl font-bold text-red-500">Gallery Not Found</h1>
                        <p className="text-gray-400 mt-2">The requested gallery category does not exist.</p>
                    </div>
                )}
            </div>

            <Footer />
        </main>
    );
}
