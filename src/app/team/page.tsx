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
        <main className="min-h-screen dark:bg-[#030712] bg-gray-50 dark:text-white text-black selection:bg-indigo-500/30 transition-colors duration-700">
            <TeamHero />

            <section className="relative pb-20">
                <div className="container mx-auto px-4 relative z-20">
                    <div className="backdrop-blur-xl dark:bg-white/5 bg-black/5 border dark:border-white/10 border-black/10 rounded-3xl p-8 shadow-2xl mt-10">
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
