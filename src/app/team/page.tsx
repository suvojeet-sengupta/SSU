import { Metadata } from "next";
import TeamHero from "@/components/sections/team/TeamHero";
import SectionTitle from "@/components/common/SectionTitle";
import TeamGrid from "@/components/sections/team/TeamGrid";

export const metadata: Metadata = {
    title: "Executive Team | Ghosal Group",
    description: "Meet the strategists, creatives, and technologists behind our global success.",
};

export default function TeamPage() {
    return (
        <main className="min-h-screen bg-[#030712] text-white selection:bg-indigo-500/30">
            <TeamHero />

            <section className="relative pb-20">
                <div className="container mx-auto px-4 relative z-20">
                    <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl mt-10">
                        <SectionTitle
                            badge="Leadership"
                            title="The Visionaries"
                            subtitle="Meet the powerhouses driving the global success of Ghosal Group."
                        />

                        <TeamGrid />
                    </div>
                </div>
            </section>
        </main>
    );
}
