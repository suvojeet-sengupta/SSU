import { Metadata } from "next";
import HomeHero from "@/components/HomeHero";
import HomeServices from "@/components/HomeServices";
import FeaturedWorks from "@/components/FeaturedWorks";
import GroupEcosystem from "@/components/GroupEcosystem";
import SectionTitle from "@/components/SectionTitle";

export const metadata: Metadata = {
  title: "Shyam Surma CineVerse | Ghosal Group",
  description: "The Victory Venture of Ghosal Group. Global music distribution, strategic advertising, and premium entertainment.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-white selection:bg-indigo-500/30">

      <HomeHero />

      <HomeServices />

      <section className="relative py-20 bg-[#030712]">
        <div className="container mx-auto px-4">
          <SectionTitle
            badge="Showcase"
            title="Featured Works"
            subtitle="A glimpse into the diverse portfolio of Ghosal Group."
          />
          <FeaturedWorks />
        </div>
      </section>

      <GroupEcosystem />

    </main>
  );
}
