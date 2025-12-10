'use client';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const teamMembers = [
    {
        name: "Surojeet Ghoshal",
        role: "Founder & CEO",
        image: "https://ui-avatars.com/api/?name=Suvojeet+Ghosal&background=0D8ABC&color=fff&size=256",
        bio: "Visionary leader with 15+ years in media distribution and technology rights management."
    },
    {
        name: "Suvojeet Sengupta",
        role: "Web Developer",
        image: "/team/suvojeet.jpg",
        bio: "Full-stack developer architecting seamless digital experiences."
    },
    {
        name: "Member 02",
        role: "Chief Technology Officer",
        image: "https://ui-avatars.com/api/?name=Member+02&background=ec4899&color=fff&size=256",
        bio: "Tech architect pioneering blockchain rights management and AI-driven analytics."
    },
    {
        name: "Member 03",
        role: "VP of Marketing",
        image: "https://ui-avatars.com/api/?name=Member+03&background=f59e0b&color=fff&size=256",
        bio: "Award-winning marketer specializing in viral campaigns and brand storytelling."
    },
    {
        name: "Member 04",
        role: "Head of A&R",
        image: "https://ui-avatars.com/api/?name=Member+04&background=10b981&color=fff&size=256",
        bio: "Discarding trends to discover the next generation of global superstars."
    },
    {
        name: "Member 05",
        role: "Director of Operations",
        image: "https://ui-avatars.com/api/?name=Member+05&background=8b5cf6&color=fff&size=256",
        bio: "Ensuring seamless execution across 150+ distribution channels worldwide."
    }
];

const TeamGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {teamMembers.map((member, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group bg-white/5 border border-white/10 p-6 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:border-indigo-500/30"
                >
                    <div className="flex flex-col items-center text-center">
                        <div className="w-32 h-32 rounded-full p-1 bg-gradient-to-tr from-indigo-500 to-cyan-500 mb-6 group-hover:scale-105 transition-transform">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full rounded-full object-cover border-4 border-black"
                            />
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                        <p className="text-indigo-400 text-sm font-medium mb-4 uppercase tracking-wider">{member.role}</p>

                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            {member.bio}
                        </p>

                        <div className="flex gap-4">
                            <button className="p-2 rounded-full bg-white/5 hover:bg-white/20 hover:text-blue-400 transition-colors text-gray-400">
                                <Linkedin size={18} />
                            </button>
                            <button className="p-2 rounded-full bg-white/5 hover:bg-white/20 hover:text-sky-400 transition-colors text-gray-400">
                                <Twitter size={18} />
                            </button>
                            <button className="p-2 rounded-full bg-white/5 hover:bg-white/20 hover:text-pink-400 transition-colors text-gray-400">
                                <Mail size={18} />
                            </button>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default TeamGrid;
