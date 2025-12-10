import AdvertisementHero from "@/components/AdvertisementHero";
import SectionTitle from "@/components/SectionTitle";
import AdvertisementServices from "@/components/AdvertisementServices";

export default function AdvertisementPage() {
    return (
        <main className="min-h-screen bg-[#030712] text-white selection:bg-pink-500/30">
            <AdvertisementHero />

            <section className="relative pb-20">
                <div className="container mx-auto px-4 relative z-20">
                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl mt-[-50px]">
                        <SectionTitle
                            badge="Marketing"
                            title="Our Advertising Solutions"
                            subtitle="Integrated campaigns designed to grow your audience."
                        />

                        <AdvertisementServices />
                    </div>
                </div>
            </section>
        </main>
    );
}
