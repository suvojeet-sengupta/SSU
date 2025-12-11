'use client';

import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ProductionTabs from '@/components/sections/production/ProductionTabs';

export default function ProductionPage() {
    return (
        <main className="min-h-screen bg-black">
            <Navbar />
            <ProductionTabs />
            <Footer />
        </main>
    );
}
