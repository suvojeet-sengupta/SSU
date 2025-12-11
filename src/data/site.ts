import { Home, Music, Globe, Users, Star, Mail, Megaphone } from 'lucide-react';

export const NAV_ITEMS = [
    { name: 'Home', icon: Home, href: '/' },
    { name: 'Services', icon: Music, href: '#services' }, // Updated href for anchor
    { name: 'Event', icon: Star, href: '/event' },
    { name: 'Distribution', icon: Globe, href: '/distribution' },
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
