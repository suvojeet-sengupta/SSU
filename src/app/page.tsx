import { Metadata } from "next";
import HomeHero from "@/components/sections/home/HomeHero";
import HomeServices from "@/components/sections/home/HomeServices";
import FeaturedWorks from "@/components/sections/home/FeaturedWorks";
import GroupEcosystem from "@/components/sections/home/GroupEcosystem";
import PartnersCarousel from "@/components/sections/home/PartnersCarousel";
import SectionTitle from "@/components/common/SectionTitle";

export const metadata: Metadata = {
  title: "Shyam Surma CineVerse | Ghosal Group",
  description: "The Victory Venture of Ghosal Group. Global music distribution, strategic advertising, and premium entertainment.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030712] text-white selection:bg-indigo-500/30">

      <HomeHero />

      <PartnersCarousel />

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
