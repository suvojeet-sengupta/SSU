'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Linkedin, Twitter, Mail, Award, Globe, Code2, X, Clapperboard } from 'lucide-react';
import CloudinaryImage from '@/components/common/CloudinaryImage';

const teamMembers = [
    {
        name: "Ranjit Ghosal",
        role: "Chairman",
        image: "ranjit-profile",
        bio: "The visionary backbone of Ghosal Group. Founded Ghosal Event in 1995 and paved the way for a global media ecosystem.",
        quote: "Vision is the art of seeing what is invisible to others.",
        color: "group-hover:text-purple-400",
        border: "group-hover:border-purple-500/50",
        gradient: "from-purple-500/20 to-blue-500/5",
        icon: <Award className="w-5 h-5" />,
        socials: { linkedin: "#", twitter: "#", mail: "mailto:contact@ghosalgroup.com" }
    },
    {
        name: "Mouma Sengupta",
        role: "Director & CEO",
        image: "mouma-profile",
        bio: "Mouma Sengupta is a young, dynamic and highly creative Digital Marketing Professional, known for her expertise in social media promotion, brand strategy and affordable marketing solutions for artists and creators. She leads the Advertisement & Digital Marketing Wing of the Ghosal Group. Her mission is to provide every creator access to professional, affordable and impactful marketing. Her key responsibilities include Movie & Music Promotion, Social Media Campaigns, and Digital Strategy.",
        quote: "Great talent deserves great visibility — and the right marketing makes it possible.",
        color: "group-hover:text-amber-400",
        border: "group-hover:border-amber-500/50",
        gradient: "from-amber-500/20 to-orange-500/5",
        icon: <Award className="w-5 h-5" />,
        socials: { linkedin: "#", twitter: "#", mail: "mailto:contact@ghosalgroup.com" }
    },
    {
        name: "Surojit Ghosal",
        role: "Co-Director & Filmmaker",
        image: "surojit-profile",
        bio: "Surojit Ghosal is a filmmaker and assistant director known for his dynamic storytelling, strong visual sense and hands-on expertise in cinematography, lighting and post-production. With several years of experience in creative direction, short films, music videos and commercial production, he represents the new generation of passionate and technically skilled filmmakers. He completed his professional training in filmmaking from T-Series StageWorks Academy, Delhi, and has also trained under renowned institutes such as Arunodoi Ghosh Photography Workshop. Over the years, he has worked on 10+ films, short films and music projects, contributing as an Assistant Director, Associate Director, Cinematographer and Creative Supervisor.",
        quote: "Innovation is the key to unlocking global potential.",
        color: "group-hover:text-cyan-400",
        border: "group-hover:border-cyan-500/50",
        gradient: "from-cyan-500/20 to-blue-500/5",
        icon: <Globe className="w-5 h-5" />,
        socials: { linkedin: "#", twitter: "#", mail: "mailto:contact@ghosalgroup.com" }
    },
    {
        name: "Riya Ghosal",
        role: "Managing Director",
        image: "riya-profile",
        bio: "Leading BMF Music with precision. Oversees global distribution, rights management, and artist relations.",
        quote: "Music is the universal language of mankind.",
        color: "group-hover:text-pink-400",
        border: "group-hover:border-pink-500/50",
        gradient: "from-pink-500/20 to-rose-500/5",
        icon: <Award className="w-5 h-5" />,
        socials: { linkedin: "#", twitter: "#", mail: "mailto:contact@ghosalgroup.com" }
    },
    {
        name: "Suvojeet Sengupta",
        role: "CTO & Web Developer",
        image: "suvojeet-profile",
        fallbackImage: "https://ui-avatars.com/api/?name=Suvojeet+Sengupta&background=1e293b&color=fff&size=512",
        bio: "I am a Full-Stack Software Developer with over 3 years of experience in building high-performance websites and mobile applications. In a digital world cluttered with complexity, I focus on clarity and efficiency. My approach is simple: I combine clean code with intuitive design to create software that solves real-world problems. Whether you are a startup looking to launch your MVP or an established business aiming to scale, I provide the technical expertise to make it happen. What I do best: Web Development (Responsive, fast, and SEO-friendly architectures), Mobile Apps (Cross-platform solutions), and Software Engineering (Scalable backend systems and custom software tools).",
        quote: "Code is poetry written for machines.",
        color: "group-hover:text-green-400",
        border: "group-hover:border-green-500/50",
        gradient: "from-green-500/20 to-emerald-500/5",
        icon: <Code2 className="w-5 h-5" />,
        socials: { linkedin: "https://linkedin.com/in/suvojeet", twitter: "#", mail: "mailto:suvoj@ghosalgroup.com" }
    },
    {
        name: "Subrata Chowdhury",
        role: "Film Maker & Editor",
        image: "subrata-profile",
        bio: "With over 15 years of experience in the media and entertainment industry, Subrata Chowdhury is a seasoned Filmmaker and Editor known for his visual storytelling and technical precision. His journey is defined by versatility—seamlessly transitioning between the high-paced world of broadcast journalism and the creative depth of cinema. His portfolio includes 300+ News Episodes, 20+ Feature Movies, 50+ Short Films, and 60+ Music Videos.",
        quote: "Code is poetry written for machines.",
        color: "group-hover:text-pink-400",
        border: "group-hover:border-pink-500/50",
        gradient: "from-pink-500/20 to-rose-500/5",
        icon: <Award className="w-5 h-5" />,
        socials: { linkedin: "#", twitter: "#", mail: "mailto:contact@ghosalgroup.com" }
    }
];

const TeamCard = ({ member, onSelect, index }: { member: typeof teamMembers[0], onSelect: () => void, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            onClick={onSelect}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelect();
                }
            }}
            className="group relative p-1 rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent hover:from-white/20 transition-all duration-500 cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50"
        >
            {/* Inner Card */}
            <div className="relative h-full bg-[#0a0a0a] rounded-[1.9rem] p-6 overflow-hidden border border-white/5 group-hover:border-transparent transition-all">

                {/* Hover Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                <div className="relative z-10 flex flex-col items-center text-center">
                    {/* Image Container */}
                    <div className="relative mb-6">
                        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45 translate-x-[-100%] group-hover:animate-shine`}></div>
                        <div className={`w-36 h-36 rounded-full p-[2px] bg-gradient-to-tr from-gray-700 to-gray-900 ${member.border} transition-colors duration-500 overflow-hidden`}>
                            {member.image.startsWith('http') || member.image.startsWith('/') ? (
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    loading="lazy"
                                    className="w-full h-full rounded-full object-cover bg-black"
                                    onError={(e) => {
                                        if (member.fallbackImage && e.currentTarget.src !== member.fallbackImage) {
                                            e.currentTarget.src = member.fallbackImage;
                                            e.currentTarget.onerror = null;
                                        }
                                    }}
                                />
                            ) : (
                                <CloudinaryImage
                                    src={member.image}
                                    alt={member.name}
                                    width="150"
                                    height="150"
                                    className="w-full h-full rounded-full object-cover bg-black"
                                />
                            )}
                        </div>
                        <div className={`absolute bottom-0 right-0 w-10 h-10 rounded-full bg-[#0a0a0a] flex items-center justify-center border border-white/10 ${member.color} shadow-lg group-hover:scale-110 transition-transform`}>
                            {member.icon}
                        </div>
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-white transition-colors">{member.name}</h3>
                    <p className={`text-sm font-bold uppercase tracking-widest mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-gray-600 ${member.color} transition-all`}>
                        {member.role}
                    </p>

                    <p className="text-gray-400 text-sm leading-relaxed mb-4 border-t border-white/5 pt-4 line-clamp-3">
                        {member.bio}
                    </p>

                    <span className="text-xs text-white/40 mt-auto flex items-center gap-1 group-hover:text-white/80 transition-colors">
                        <Clapperboard size={12} /> Click to view details
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

const TeamMemberModal = ({ member, onClose }: { member: typeof teamMembers[0], onClose: () => void }) => {
    // Keyboard listener for Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
        >
            <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-[#0f0f0f] border border-white/10 w-full max-w-4xl max-h-[85vh] md:min-h-[400px] rounded-3xl shadow-2xl relative flex flex-col md:flex-row overflow-hidden"
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 p-2 bg-black/50 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
                    aria-label="Close modal"
                >
                    <X size={24} />
                </button>

                {/* Sidebar / Image (Sticky Top/Left) */}
                <div className="w-full md:w-2/5 relative h-64 md:h-auto overflow-hidden shrink-0">
                    <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-20`}></div>
                    {member.image.startsWith('http') || member.image.startsWith('/') ? (
                        <img
                            src={member.image}
                            alt={member.name}
                            className="absolute inset-0 w-full h-full object-cover"
                            onError={(e) => {
                                if (member.fallbackImage && e.currentTarget.src !== member.fallbackImage) {
                                    e.currentTarget.src = member.fallbackImage;
                                    e.currentTarget.onerror = null;
                                }
                            }}
                        />
                    ) : (
                        <CloudinaryImage
                            src={member.image}
                            alt={member.name}
                            fill
                            className="object-cover"
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent md:bg-gradient-to-r pointer-events-none"></div>
                </div>

                {/* Content - Scrollable Region */}
                <div className="p-8 md:p-12 md:w-3/5 flex flex-col flex-1 min-h-0 overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-white/10 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-white/20">
                    <div className="mb-6 pr-8"> {/* Added right padding to prevent close button overlap */}
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">{member.name}</h2>
                        <p className={`text-xl font-medium ${member.color.replace('group-hover:', '')}`}>
                            {member.role}
                        </p>
                    </div>

                    <blockquote className="border-l-4 border-white/10 pl-4 italic text-gray-400 mb-8 text-lg">
                        "{member.quote}"
                    </blockquote>

                    <p className="text-gray-300 leading-relaxed text-lg mb-8">
                        {member.bio}
                    </p>

                    <div className="flex gap-4 mt-auto">
                        {member.socials?.linkedin && (
                            <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all hover:scale-110 active:scale-95 border border-white/5 focus:outline-none focus:ring-2 focus:ring-white/50">
                                <Linkedin size={20} />
                            </a>
                        )}
                        {member.socials?.twitter && (
                            <a href={member.socials.twitter} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all hover:scale-110 active:scale-95 border border-white/5 focus:outline-none focus:ring-2 focus:ring-white/50">
                                <Twitter size={20} />
                            </a>
                        )}
                        {member.socials?.mail && (
                            <a href={member.socials.mail} className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all hover:scale-110 active:scale-95 border border-white/5 focus:outline-none focus:ring-2 focus:ring-white/50">
                                <Mail size={20} />
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

const TeamGrid = () => {
    const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (selectedMember) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedMember]);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {teamMembers.map((member, index) => (
                    <TeamCard key={member.name} member={member} onSelect={() => setSelectedMember(member)} index={index} />
                ))}
            </div>

            {/* Cine-Modal */}
            <AnimatePresence>
                {selectedMember && (
                    <TeamMemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />
                )}
            </AnimatePresence>
        </>
    );
};

export default TeamGrid;
