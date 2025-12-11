import { Metadata } from "next";
import AdvertisementHero from "@/components/sections/advertisement/AdvertisementHero";
import CineVerseContent from "@/components/sections/advertisement/CineVerseContent";

export const metadata: Metadata = {
    title: "Shyam Surma CineVerse | Advertising",
    description: "The official advertising arm of Ghosal Group, co-founded by Surojit Ghosal & Mouma Sengupta.",
};

export default function AdvertisementPage() {
    return (
        <main className="min-h-screen bg-[#030712] text-white selection:bg-pink-500/30">
            <AdvertisementHero />
            <CineVerseContent />
        </main>
    );
}
