import { Metadata } from "next";
import AboutHero from "@/components/AboutHero";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
    title: "About Us | Ghosal Group",
    description: "Learn about Shyam Surma CineVerse, our mission, and the visionary leaders behind Ghosal Group.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#030712] text-white selection:bg-yellow-500/30">
            <AboutHero />
            <AboutContent />
        </main>
    );
}
