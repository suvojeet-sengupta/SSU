import { Home, Music, Globe, Users, Star, Mail, Megaphone, Clapperboard, Film } from 'lucide-react';

export interface NavItemType {
    name: string;
    icon: any;
    href?: string;
    subItems?: Array<{
        name: string;
        icon: any;
        href: string;
        comingSoon?: boolean;
    }>;
}

export const NAV_ITEMS: NavItemType[] = [
    { name: 'Home', icon: Home, href: '/' },
    { name: 'Production', icon: Clapperboard, href: '/production' },
    { name: 'Event', icon: Star, href: '/event' },
    {
        name: 'Distribution',
        icon: Globe,
        subItems: [
            { name: 'Music Distribution', icon: Music, href: '/distribution' },
            { name: 'Movie Distribution', icon: Film, href: '#', comingSoon: true }
        ]
    },
    { name: 'Advert', icon: Megaphone, href: '/advertisement' },
    { name: 'Team', icon: Users, href: '/team' },
    { name: 'About', icon: Star, href: '/about' },
    { name: 'Contact', icon: Mail, href: '/contact' },
];

export const SITE_CONFIG = {
    name: "Shyam Surma CineVerse",
    company: "Ghosal Group",
    description: "The official advertising, distribution, and event arm of Ghosal Group.",
    contact: {
        phone: "+91 8250266668",
        email: "ghosalgroup.official@gmail.com",
        address: "Kolkata, West Bengal, India"
    },
    socials: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
        linkedin: "#",
        youtube: "#"
    }
};
