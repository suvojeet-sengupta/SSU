'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductionHero from '@/components/ProductionHero';
import ProductionAbout from '@/components/ProductionAbout';
import ProductionServices from '@/components/ProductionServices';

export default function ProductionPage() {
    return (
        <main className="min-h-screen bg-black">
            <Navbar />
            <ProductionHero />
            <ProductionAbout />
            <ProductionServices />
            <Footer />
        </main>
    );
}
