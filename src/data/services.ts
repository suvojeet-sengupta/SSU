import { Clapperboard, Megaphone, Users, Tv, Mic2, Video, Palette, Globe, Database, ShieldCheck, CalendarClock, Barcode, LineChart } from 'lucide-react';

export const ADVERTISEMENT_SERVICES = [
    {
        title: "Movie Advertisement",
        icon: Clapperboard,
        description: "In-film branding, cinema advertising, and pre-roll campaigns for blockbuster releases.",
        color: "group-hover:shadow-pink-500/20",
        iconColor: "text-pink-400"
    },
    {
        title: "Brand Promotion",
        icon: Megaphone,
        description: "Strategic brand positioning and identity development to stand out in a crowded market.",
        color: "group-hover:shadow-orange-500/20",
        iconColor: "text-orange-400"
    },
    {
        title: "Influencer Marketing",
        icon: Users,
        description: "Connect with authentic voices across social media to reach engaged communities.",
        color: "group-hover:shadow-purple-500/20",
        iconColor: "text-purple-400"
    },
    {
        title: "TV Production & Broadcasting",
        icon: Tv,
        description: "High-quality commercial production and media buying across major television networks.",
        color: "group-hover:shadow-blue-500/20",
        iconColor: "text-blue-400"
    },
    {
        title: "Radio Production",
        icon: Mic2,
        description: "Audio jingles, voiceovers, and strategic radio spot placements for maximum reach.",
        color: "group-hover:shadow-cyan-500/20",
        iconColor: "text-cyan-400"
    },
    {
        title: "Outdoor Advertising",
        icon: Video,
        description: "Billboards, digital displays, and transit media that capture attention on the go.",
        color: "group-hover:shadow-green-500/20",
        iconColor: "text-green-400"
    },
    {
        title: "Digital Marketing",
        icon: Palette,
        description: "SEO, PPC, social media management, and content creation strategies.",
        color: "group-hover:shadow-red-500/20",
        iconColor: "text-red-400"
    },
    {
        title: "Website & Mobile Apps",
        icon: Globe,
        description: "Custom e-commerce websites and mobile applications tailored to your business needs.",
        color: "group-hover:shadow-teal-500/20",
        iconColor: "text-teal-400"
    },
    {
        title: "Custom Software & ERP",
        icon: Database,
        description: "Scalable ERP systems and bespoke software solutions to streamline operations.",
        color: "group-hover:shadow-indigo-500/20",
        iconColor: "text-indigo-400"
    }
];

export const DISTRIBUTION_SERVICES = [
    {
        title: "Major OTT Platforms",
        description: "Professional delivery to Spotify, JioSaavn, Apple Music, Amazon Music, Wynk, Resso, YouTube Music, and more.",
        icon: Globe,
        iconColor: "text-cyan-400"
    },
    {
        title: "Content ID Protection",
        description: "Automated YouTube Content ID and rights management to ensure your music stays protected and monetized.",
        icon: ShieldCheck,
        iconColor: "text-green-400"
    },
    {
        title: "Release Planning",
        description: "Smooth workflow with on-time scheduling, artwork support, and complete metadata management.",
        icon: CalendarClock,
        iconColor: "text-purple-400"
    },
    {
        title: "ISRC & UPC Codes",
        description: "Authentic code generation and accurate record handling for every single track and album.",
        icon: Barcode,
        iconColor: "text-yellow-400"
    },
    {
        title: "Royalty Monitoring",
        description: "Transparent tracking of earnings and performance insights for every release.",
        icon: LineChart,
        iconColor: "text-blue-400"
    },
    {
        title: "Catalogue Management",
        description: "Organized and secure management of your entire music library, both old and new.",
        icon: Database,
        iconColor: "text-red-400"
    }
];
