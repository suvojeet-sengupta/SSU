'use client';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, Award, Globe, Code2 } from 'lucide-react';

const teamMembers = [
    {
        name: "Ranjit Ghosal",
        role: "Chairman",
        image: "https://ui-avatars.com/api/?name=Ranjit+Ghosal&background=1e293b&color=fff&size=512",
        bio: "The visionary backbone of Ghosal Group. Founded Ghosal Event in 1995 and paved the way for a global media ecosystem.",
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
        color: "group-hover:text-cyan-400",
        border: "group-hover:border-cyan-500/50",
        gradient: "from-cyan-500/20 to-blue-500/5",
        icon: <Globe className="w-5 h-5" />
    },
    {
        name: "Riya Ghosal",
        role: "Managing Director",
        image: "https://ui-avatars.com/api/?name=Riya+Ghosal&background=1e293b&color=fff&size=512",
        bio: "Leading BMF Music with precision. Oversees global distribution, rights management, and artist relations.",
        color: "group-hover:text-pink-400",
        border: "group-hover:border-pink-500/50",
        gradient: "from-pink-500/20 to-rose-500/5",
        icon: <Award className="w-5 h-5" />
    },
    {
        name: "Mouma Sengupta",
        role: "Chief Executive Officer",
        image: "https://ui-avatars.com/api/?name=Mouma+Sengupta&background=1e293b&color=fff&size=512",
        bio: "Chief Executive Officer ensuring operational excellence and sustainable growth across all group verticals.",
        color: "group-hover:text-amber-400",
        border: "group-hover:border-amber-500/50",
        gradient: "from-amber-500/20 to-orange-500/5",
        icon: <Award className="w-5 h-5" />
    },
    {
        name: "Suvojeet Sengupta",
        role: "CTO & Web Developer",
        image: "/team/suvojeet.jpg", // Preserving existing path just in case, though it might broken if file doesn't exist.
        fallbackImage: "https://ui-avatars.com/api/?name=Suvojeet+Sengupta&background=1e293b&color=fff&size=512",
        bio: "Architecting the digital future. Transforming vision into reality through cutting-edge web & blockchain technology.",
        color: "group-hover:text-green-400",
        border: "group-hover:border-green-500/50",
        gradient: "from-green-500/20 to-emerald-500/5",
        icon: <Code2 className="w-5 h-5" />
    }
];

const TeamGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {teamMembers.map((member, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    className={`group relative p-1 rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent hover:from-white/20 transition-all duration-500`}
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
                                            // Fallback if local image fails
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

                            <p className="text-gray-400 text-sm leading-relaxed mb-8 border-t border-white/5 pt-4">
                                {member.bio}
                            </p>

                            {/* Socials */}
                            <div className="flex gap-3">
                                {[Linkedin, Twitter, Mail].map((Icon, i) => (
                                    <button key={i} className="p-2.5 rounded-full bg-white/5 hover:bg-white/20 text-gray-400 hover:text-white transition-all hover:scale-110 active:scale-95">
                                        <Icon size={16} />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default TeamGrid;
