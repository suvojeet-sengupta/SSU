import { Metadata } from "next";
import DistributionHero from "@/components/DistributionHero";
import BMFContent from "@/components/BMFContent";
import BMFReleases from "@/components/BMFReleases";

export const metadata: Metadata = {
    title: "BMF Music | Distribution",
    description: "The official Music Distribution Wing of Ghosal Group. Fast, secure, and accessible distribution to 150+ platforms.",
};

export default function DistributionPage() {
    return (
        <main className="min-h-screen bg-[#030712] text-white selection:bg-red-500/30">
            <DistributionHero />
            <BMFReleases />
            <BMFContent />
        </main>
    );
}
