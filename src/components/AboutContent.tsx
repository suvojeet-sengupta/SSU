'use client';
import { motion } from 'framer-motion';
import { Building2, Film, Music, Megaphone, CheckCircle2, Heart } from 'lucide-react';
import SectionTitle from '@/components/SectionTitle';

const companies = [
    {
        title: "Ghosal Event",
        type: "Event Company",
        description: "Founded in 1995 by Ranjit Ghosal, this is the backbone of the group. Specializing in Wedding, Corporate, Cultural & Social functions with decades of trust.",
        icon: <Building2 className="w-8 h-8 text-purple-400" />,
        color: "purple"
    },
    {
        title: "Premium Classic Entertainment",
        type: "Production House",
        description: "Surojit Ghosal’s film production wing focusing on Bengali Feature Films, Short Films, Documentaries, and Music Videos.",
        icon: <Film className="w-8 h-8 text-yellow-400" />,
        color: "yellow"
    },
    {
        title: "BMF Music",
        type: "Music Distribution",
        description: "Fast-growing label managed by Riya Ghosal. Distributing 1000+ songs across Spotify, Apple Music, and major OTT platforms worldwide.",
        icon: <Music className="w-8 h-8 text-red-400" />,
        color: "red"
    },
    {
        title: "Shyam Surma CineVerse",
        type: "Advertisement & Digital Marketing",
        description: "Co-founded by Surojit Ghosal & Mouma Sengupta to provide affordable, result-driven marketing for filmmakers and creators.",
        icon: <Megaphone className="w-8 h-8 text-cyan-400" />,
        color: "cyan"
    }
];

const AboutContent = () => {
    return (
        <section className="relative py-20 bg-[#030712] text-white">
            <div className="container mx-auto px-6">

                {/* Our Story Section */}
                <div className="mb-24 max-w-5xl mx-auto">
                    <SectionTitle badge="History" title="Our Story" subtitle="A journey of legacy, innovation, and expansion." />

                    <div className="prose prose-invert prose-lg max-w-none text-gray-400 leading-relaxed space-y-6 mt-8">
                        <p>
                            <strong className="text-white">Shyam Surma CineVerse</strong> is a creative venture under the <strong className="text-white">Ghosal Group</strong>, whose foundation was laid in <span className="text-yellow-400">1995</span> with the establishment of <strong>Ghosal Event Company</strong> by <strong>Ranjit Ghosal</strong>. He built a strong reputation across Wedding Events, Corporate Events, and multi-sector management.
                        </p>
                        <p>
                            Over the years, his son <strong>Surojit Ghosal</strong> stepped forward with a modern vision. In 2017, he launched his first Music Label, which has now distributed <span className="text-green-400">1000+ songs</span>. After completing filmmaking studies from <strong className="text-white">T-Series StageWorks Academy</strong> in 2020, he founded <strong>Premium Classic Entertainment</strong>.
                        </p>
                        <p>
                            Combining expertise in filmmaking and digital marketing, Surojit Ghosal and <strong className="text-white">Mouma Sengupta</strong> launched their advertisement venture: <strong className="text-cyan-400 text-xl">Shyam Surma CineVerse</strong> — a platform created to empower artists with affordable, result-driven marketing solutions.
                        </p>
                    </div>
                </div>

                {/* About Our Companies */}
                <div className="mb-24">
                    <SectionTitle badge="Ecosystem" title="About Our Companies" subtitle="Four major divisions operating together." />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                        {companies.map((company, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group`}
                            >
                                <div className={`w-14 h-14 rounded-2xl bg-${company.color}-500/10 flex items-center justify-center mb-6 border border-${company.color}-500/20 group-hover:scale-110 transition-transform`}>
                                    {company.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-1">{company.title}</h3>
                                <div className={`text-sm font-medium uppercase tracking-wider text-${company.color}-400 mb-4`}>{company.type}</div>
                                <p className="text-gray-400 leading-relaxed">
                                    {company.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Core Services */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <SectionTitle badge="What We Do" title="Core Services" subtitle="Helping you achieve professional visibility." />

                        <div className="space-y-8 mt-8">
                            <div className="flex gap-4">
                                <div className="mt-1 bg-blue-500/20 p-2 rounded-lg h-fit"><Megaphone size={20} className="text-blue-400" /></div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">Movie, Short Films & Music Promotion</h4>
                                    <p className="text-gray-400">Complete digital promotion including social media marketing, trailer launch campaigns, poster promotions, and targeted audience outreach.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 bg-green-500/20 p-2 rounded-lg h-fit"><Music size={20} className="text-green-400" /></div>
                                <div>
                                    <h4 className="text-xl font-bold mb-2">OTT & Music Distribution</h4>
                                    <p className="text-gray-400">Distributing music to leading OTT platforms and providing professional YouTube Content ID setup to protect creator rights and maximize revenue.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 p-10 rounded-[3rem] border border-cyan-500/20 text-center relative overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-4 text-white">Our Purpose</h3>
                            <p className="text-gray-300 mb-6"> Our mission is to support creators working with <span className="text-white font-semibold">limited budgets</span>.</p>
                            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl inline-block mb-6 border border-white/10">
                                <p className="text-2xl md:text-3xl font-serif italic text-cyan-200">
                                    “Good marketing should be accessible to everyone.”
                                </p>
                            </div>
                            <p className="text-sm text-gray-500 uppercase tracking-widest">The Soul of Shyam Surma CineVerse</p>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default AboutContent;
