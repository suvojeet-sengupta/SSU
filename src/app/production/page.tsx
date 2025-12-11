'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductionTabs from '@/components/ProductionTabs';

export default function ProductionPage() {
    return (
        <main className="min-h-screen bg-black">
            <Navbar />
            <ProductionTabs />
            <Footer />
        </main>
    );
}
