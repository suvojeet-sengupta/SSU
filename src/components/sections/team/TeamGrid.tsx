'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Linkedin, Twitter, Mail, Award, Globe, Code2, X, Clapperboard } from 'lucide-react';

const teamMembers = [
    {
        name: "Ranjit Ghosal",
        role: "Chairman",
        image: "https://ui-avatars.com/api/?name=Ranjit+Ghosal&background=1e293b&color=fff&size=512",
        bio: "The visionary backbone of Ghosal Group. Founded Ghosal Event in 1995 and paved the way for a global media ecosystem.",
        quote: "Vision is the art of seeing what is invisible to others.",
        color: "group-hover:text-purple-400",
        border: "group-hover:border-purple-500/50",
        gradient: "from-purple-500/20 to-blue-500/5",
        icon: <Award className="w-5 h-5" />
    },
    {
        name: "Surojit Ghosal",
        role: "Director",
        image: "https://ui-avatars.com/api/?name=Surojit+Ghosal&background=1e293b&color=fff&size=512",
        bio: "Driving strategic growth and international expansion. Spearheaded the launch of BMF Music.",
        quote: "Innovation is the key to unlocking global potential.",
        color: "group-hover:text-cyan-400",
        border: "group-hover:border-cyan-500/50",
        gradient: "from-cyan-500/20 to-blue-500/5",
        icon: <Globe className="w-5 h-5" />
    },
    {
        name: "Mouma Sengupta",
        role: "Co-Director",
        image: "https://ui-avatars.com/api/?name=Mouma+Sengupta&background=1e293b&color=fff&size=512",
        bio: "Chief Executive Officer ensuring operational excellence and sustainable growth across all group verticals.",
        quote: "Excellence is not an act, but a habit.",
        color: "group-hover:text-amber-400",
        border: "group-hover:border-amber-500/50",
        gradient: "from-amber-500/20 to-orange-500/5",
        icon: <Award className="w-5 h-5" />
    },
    {
        name: "Riya Ghosal",
        role: "Managing Director",
        image: "https://ui-avatars.com/api/?name=Riya+Ghosal&background=1e293b&color=fff&size=512",
        bio: "Leading BMF Music with precision. Oversees global distribution, rights management, and artist relations.",
        quote: "Music is the universal language of mankind.",
        color: "group-hover:text-pink-400",
        border: "group-hover:border-pink-500/50",
        gradient: "from-pink-500/20 to-rose-500/5",
        icon: <Award className="w-5 h-5" />
    },

    {
        name: "Suvojeet Sengupta",
        role: "CTO & Web Developer",
        image: "/SSU/team/suvojeet-profile.jpg",
        fallbackImage: "https://ui-avatars.com/api/?name=Suvojeet+Sengupta&background=1e293b&color=fff&size=512",
        bio: "The Mastermind behind the entire digital infrastructure of Ghosal Group. As the Lead Full-Stack Developer, he single-handedly architected and built this platform from the ground up, blending creativity with cutting-edge technology.",
        quote: "Code is poetry written for machines.",
        color: "group-hover:text-green-400",
        border: "group-hover:border-green-500/50",
        gradient: "from-green-500/20 to-emerald-500/5",
        icon: <Code2 className="w-5 h-5" />
    },
    {
        name: "Subrata Chowdhury",
        role: "Film Maker & Editor",
        image: "https://ui-avatars.com/api/?name=Subrata+Chowdhury&background=1e293b&color=fff&size=512",
        bio: "",
        quote: "Code is poetry written for machines.",
        color: "group-hover:text-green-400",
        border: "group-hover:border-green-500/50",
        gradient: "from-green-500/20 to-emerald-500/5",
        icon: <Award className="w-5 h-5" />
    }
];

const TeamGrid = () => {
    const [selectedMember, setSelectedMember] = useState<typeof teamMembers[0] | null>(null);

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        onClick={() => setSelectedMember(member)}
                        className={`group relative p-1 rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent hover:from-white/20 transition-all duration-500 cursor-pointer`}
                    >
                        {/* Inner Card */}
                        <div className="relative h-full bg-[#0a0a0a] rounded-[1.9rem] p-6 overflow-hidden border border-white/5 group-hover:border-transparent transition-all">

                            {/* Hover Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                            <div className="relative z-10 flex flex-col items-center text-center">
                                {/* Image Container */}
                                <div className="relative mb-6">
                                    <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45 translate-x-[-100%] group-hover:animate-shine`}></div>
                                    <div className={`w-36 h-36 rounded-full p-[2px] bg-gradient-to-tr from-gray-700 to-gray-900 ${member.border} transition-colors duration-500`}>
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full rounded-full object-cover bg-black"
                                            onError={(e) => {
                                                if (member.fallbackImage) {
                                                    e.currentTarget.src = member.fallbackImage;
                                                }
                                            }}
                                        />
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
                ))}
            </div>

            {/* Cine-Modal */}
            <AnimatePresence>
                {selectedMember && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedMember(null)}
                        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-[#0f0f0f] border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative flex flex-col md:flex-row overflow-hidden"
                        >
                            <button
                                onClick={() => setSelectedMember(null)}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/50 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors"
                            >
                                <X size={24} />
                            </button>

                            {/* Sidebar / Image */}
                            <div className="w-full md:w-2/5 relative h-64 md:h-auto">
                                <div className={`absolute inset-0 bg-gradient-to-br ${selectedMember.gradient} opacity-20`}></div>
                                <img
                                    src={selectedMember.image}
                                    alt={selectedMember.name}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        if (selectedMember.fallbackImage) {
                                            e.currentTarget.src = selectedMember.fallbackImage;
                                        }
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent md:bg-gradient-to-r"></div>
                            </div>

                            {/* Content */}
                            <div className="p-8 md:p-12 md:w-3/5 flex flex-col justify-center">
                                <div className="mb-6">
                                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">{selectedMember.name}</h2>
                                    <p className={`text-xl font-medium ${selectedMember.color.replace('group-hover:', '')}`}>
                                        {selectedMember.role}
                                    </p>
                                </div>

                                <blockquote className="border-l-4 border-white/10 pl-4 italic text-gray-400 mb-8 text-lg">
                                    "{selectedMember.quote}"
                                </blockquote>

                                <p className="text-gray-300 leading-relaxed text-lg mb-8">
                                    {selectedMember.bio}
                                </p>

                                <div className="flex gap-4">
                                    {[Linkedin, Twitter, Mail].map((Icon, i) => (
                                        <button key={i} className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white transition-all hover:scale-110 active:scale-95 border border-white/5">
                                            <Icon size={20} />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default TeamGrid;
