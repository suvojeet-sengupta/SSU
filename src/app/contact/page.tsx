import { Metadata } from "next";
import ContactContent from "@/components/sections/contact/ContactContent";

export const metadata: Metadata = {
    title: "Contact Us | Ghosal Group",
    description: "Get in touch with our global team for distribution, advertising, and partnership inquiries.",
};

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#030712] text-white selection:bg-indigo-500/30 pt-32 pb-20">
            <ContactContent />
        </main>
    );
}
