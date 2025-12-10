import HomeHero from "@/components/HomeHero";
import SectionTitle from "@/components/SectionTitle";
import FeaturedWorks from "@/components/FeaturedWorks";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-indigo-500/30">
      <HomeHero />

      {/* Kept the works section but moved it further down logically by being below the hero */}
      <section className="relative py-20 bg-black">
        <div className="container mx-auto px-4">
          <SectionTitle
            badge="Showcase"
            title="Featured Works"
            subtitle="A glimpse into the diverse portfolio of Ghosal Group."
          />

          <FeaturedWorks />
        </div>
      </section>
    </main>
  );
}
