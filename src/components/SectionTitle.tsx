import { Flame } from 'lucide-react';

interface SectionTitleProps {
    badge: string;
    title: string;
    subtitle?: string;
}

const SectionTitle = ({ badge, title, subtitle }: SectionTitleProps) => {
    return (
        <div className="flex flex-col items-center justify-center text-center space-y-4 py-12">
            <div className="inline-flex items-center gap-2 bg-[#3f51b5] text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg shadow-blue-500/20">
                <Flame size={16} /> {badge}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1a237e]">{title}</h2>
            {subtitle && <p className="text-gray-500 max-w-2xl">{subtitle}</p>}
        </div>
    );
};

export default SectionTitle;
