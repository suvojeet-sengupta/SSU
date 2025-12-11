import { Metadata } from "next";
import EventHero from "@/components/sections/event/EventHero";
import EventContent from "@/components/sections/event/EventContent";

export const metadata: Metadata = {
    title: "Ghosal Event | Celebrating Since 1995",
    description: "Founded by Ranjit Ghosal, Ghosal Event specializes in wedding, corporate, and social event management with premium execution.",
};

export default function EventPage() {
    return (
        <main className="min-h-screen bg-[#030712] text-white selection:bg-purple-500/30">
            <EventHero />
            <EventContent />
        </main>
    );
}
