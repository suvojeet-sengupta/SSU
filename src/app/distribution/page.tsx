import DistributionHero from "@/components/DistributionHero";
import DistributionServices from "@/components/DistributionServices";
import SectionTitle from "@/components/SectionTitle";
import StatsGrid from "@/components/StatsGrid";

export default function DistributionPage() {
    return (
        <main className="min-h-screen bg-[#030712] text-white selection:bg-indigo-500/30">
            <DistributionHero />

            <section className="relative pb-20">
                <div className="container mx-auto px-4 relative z-20">
                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl mt-[-50px]">
                        <SectionTitle
                            badge="Global Reach"
                            title="Distribution Network"
                            subtitle="Empowering artists with seamless delivery to every major platform worldwide."
                        />

                        <div className="my-12">
                            <StatsGrid />
                        </div>

                        <DistributionServices />
                    </div>
                </div>
            </section>
        </main>
    );
}
