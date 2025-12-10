import HomeHero from "@/components/HomeHero";
import SectionTitle from "@/components/SectionTitle";

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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="group relative aspect-video bg-gray-900 rounded-2xl overflow-hidden border border-white/10 hover:border-cyan-500/30 transition-all">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-bold rounded-full w-fit mb-2 border border-cyan-500/20">Music</div>
                <h3 className="text-xl font-bold mb-1 group-hover:text-cyan-400 transition-colors">Global Chart Toppers</h3>
                <p className="text-sm text-gray-400">Distribution across 150+ stores</p>
              </div>
            </div>

            <div className="group relative aspect-video bg-gray-900 rounded-2xl overflow-hidden border border-white/10 hover:border-pink-500/30 transition-all">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="px-3 py-1 bg-pink-500/20 text-pink-400 text-xs font-bold rounded-full w-fit mb-2 border border-pink-500/20">Advertising</div>
                <h3 className="text-xl font-bold mb-1 group-hover:text-pink-400 transition-colors">Brand X Campaign</h3>
                <p className="text-sm text-gray-400">Multi-channel influencer strategy</p>
              </div>
            </div>

            <div className="group relative aspect-video bg-gray-900 rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all">
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
              <div className="absolute bottom-6 left-6">
                <div className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-bold rounded-full w-fit mb-2 border border-purple-500/20">Film</div>
                <h3 className="text-xl font-bold mb-1 group-hover:text-purple-400 transition-colors">Indie Film Festival</h3>
                <p className="text-sm text-gray-400">Worldwide digital premiere</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
